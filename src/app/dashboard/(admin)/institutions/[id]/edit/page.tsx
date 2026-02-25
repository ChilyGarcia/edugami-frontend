"use client";

import LoadingScreen from "@/components/dashboard/LoadingScreen";
import AddInstitutionForm from "@/components/dashboard/institutions/AddInstitutionForm";
import AddUserForm from "@/components/dashboard/users/addUser/AddUserForm";
import CustomMain from "@/components/layout/CustomMain";
import { IAddInstitutionData } from "@/handlers/institutions/handleAddInstitution";
import handleEditInstitution from "@/handlers/institutions/handleEditInstitution";
import handleFetchInstitutions from "@/handlers/institutions/handleFetchInstitutions";
import { IAddUserData } from "@/handlers/user/handleAddUser";
import handleEditUser from "@/handlers/user/handleEditUser";
import { handleFetchUsers } from "@/handlers/user/handleFetchUsers";
import useFetchUsers, { IFetchUsersParams } from "@/hooks/useFetchUsers";
import { IInstitution } from "@/types/institutions";
import { IUser } from "@/types/users";
import {
  editInstitutionValidationSchema,
  editUserValidationSchema,
} from "@/validations/dashboardValidations";
import { FormikState } from "formik";
import { useParams, useRouter } from "next/navigation";
import { Suspense, useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

export default function EditInstitution() {
  const { id } = useParams();
  const [institution, setInstitution] = useState<IInstitution | null>(null);
  const router = useRouter();

  const fetchInstitution = useCallback(async () => {
    const user = await handleFetchInstitutions({
      page: 1,
      id: id as string,
    });

    if (!user) {
      return toast.error("Error al obtener el usuario");
    }

    setInstitution(user.data[0]);
  }, [id]);

  useEffect(() => {
    fetchInstitution();
  }, [fetchInstitution]);

  if (!institution) {
    return <LoadingScreen />;
  }

  async function handleSubmit(
    values: IAddInstitutionData,
    reset: (
      nextState?: Partial<FormikState<IAddInstitutionData>> | undefined
    ) => void
  ) {
    const res = await handleEditInstitution({
      ...values,
      institution_id: id as string,
    });

    if (res.error) {
      return toast.error(res.error);
    }

    console.log(res);

    toast.success("Institución actualizada con éxito");

    router.push("/dashboard/institutions");
    reset();
  }

  const initialValues: IAddInstitutionData = {
    ...institution,
    phone: institution.phone.toString(),
  };

  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <CustomMain>
        <section className="min-h-[calc(100vh)] bg-links relative p-5 pt-24 flex flex-col items-center gap-10 text-primary">
          <h1 className="text-primary text-2xl font-bold text-center">
            MODIFICAR INSTITUCIÓN
          </h1>
          <AddInstitutionForm
            handleSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={editInstitutionValidationSchema}
          />
        </section>
      </CustomMain>
    </Suspense>
  );
}
