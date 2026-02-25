"use client";

import LoadingScreen from "@/components/dashboard/LoadingScreen";
import AddUserForm from "@/components/dashboard/users/addUser/AddUserForm";
import CustomMain from "@/components/layout/CustomMain";
import handleFetchInstitutions from "@/handlers/institutions/handleFetchInstitutions";
import { IAddUserData } from "@/handlers/user/handleAddUser";
import handleEditUser from "@/handlers/user/handleEditUser";
import { handleFetchUsers } from "@/handlers/user/handleFetchUsers";
import useFetchUsers, { IFetchUsersParams } from "@/hooks/useFetchUsers";
import { IUser } from "@/types/users";
import { editUserValidationSchema } from "@/validations/dashboardValidations";
import { FormikState } from "formik";
import { useParams, useRouter } from "next/navigation";
import { Suspense, useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

export default function Dashboard() {
  const { id } = useParams();
  const [user, setUser] = useState<IUser | null>(null);
  const router = useRouter();

  const [options, setOptions] = useState<
    { label: string; value: string }[] | null
  >(null);

  const fetchUser = useCallback(async () => {
    const user = await handleFetchUsers({
      page: 1,
      user_id: id as string,
      roles: ["ADMIN", "INSTITUTION_MODERATOR", "STUDENT", "SUPERADMIN"],
    });

    if (!user) {
      return toast.error("Error al obtener el usuario");
    }

    setUser(user.data[0]);
  }, [id]);

  async function fetchInstitutions() {
    try {
      setOptions(
        (await handleFetchInstitutions({}))!.data.map((e) => ({
          value: e._id,
          label: e.name,
        }))
      );
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchUser();

    if (!options) {
      fetchInstitutions();
    }
  }, [fetchUser, options]);

  if (!user || !options) {
    return <LoadingScreen />;
  }

  async function handleSubmit(
    values: IAddUserData,
    reset: (nextState?: Partial<FormikState<IAddUserData>> | undefined) => void
  ) {
    const res = await handleEditUser(values);

    if (res.error) {
      return toast.error(res.error);
    }

    console.log(res);

    toast.success("Usuario actualizado con éxito");

    router.push("/dashboard/users");
    reset();
  }

  const initialValues: IAddUserData = {
    ...user,
    password: "",
    institution: {
      id: user.institution_user_data?.institution_id as string,
      label:
        options?.find(
          (e) => e.value === user.institution_user_data?.institution_id
        )?.label || "",
    },
    institution_user_data: user.institution_user_data!,
  };

  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <CustomMain>
        <section className="min-h-[calc(100vh)] bg-links relative p-5 pt-24 flex flex-col items-center gap-10 text-primary">
          <h1 className="text-primary text-2xl font-bold text-center">
            MODIFICAR USUARIO
          </h1>
          <AddUserForm
            handleSubmit={handleSubmit}
            initialValues={initialValues}
            institutionOptions={options}
            validationSchema={editUserValidationSchema}
          />
        </section>
      </CustomMain>
    </Suspense>
  );
}
