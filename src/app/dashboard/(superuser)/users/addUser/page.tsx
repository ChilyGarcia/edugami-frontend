"use client";

import Button from "@/components/button/Button";
import AddUserForm from "@/components/dashboard/users/addUser/AddUserForm";
import InputSelect from "@/components/form/InputSelect";
import InputText from "@/components/form/InputText";
import SearchableSelect from "@/components/form/SearchableSelect";
import CustomMain from "@/components/layout/CustomMain";
import handleFetchInstitutions from "@/handlers/institutions/handleFetchInstitutions";
import handleAddUser, { IAddUserData } from "@/handlers/user/handleAddUser";
import useFetchInstitutions from "@/hooks/useFetchInstitutions";
import { IUser, TUserRole } from "@/types/users";
import { addUserValidationSchema } from "@/validations/dashboardValidations";
import { Form, Formik, FormikState } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const initialValues: IAddUserData = {
  role: "STUDENT",
  institution: {
    id: "",
    label: "",
  },
  institution_user_data: {
    class_id: "10A",
    doc_type: "CC",
    doc_number: 1042464242,
  },
  email: "s_beltran3@unisimon.edu.co",
  name: "Sandro",
  last_name: "Beltrán",
  password: "sandroB2204",
};

/* const initialValues: IAddUserData = {
    role: "STUDENT",
    doc_type: "CC",
    doc_number: "",
    email: "",
    name: "",
    last_name: "",
    institution_id: "",
    password: "",
  }; */

export default function AddUsers() {
  const [options, setOptions] = useState<
    { label: string; value: string }[] | null
  >(null);
  const router = useRouter();

  async function handleSubmit(
    values: IAddUserData,
    reset: (nextState?: Partial<FormikState<IAddUserData>> | undefined) => void
  ) {
    const res = await handleAddUser(values);

    if (res.error) {
      return toast.error(res.error);
    }

    console.log(res);

    toast.success("Usuario creado con éxito");

    reset();
    router.push("/dashboard/users");
  }

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
    if (!options) {
      fetchInstitutions();
    }
  }, [options]);

  return (
    <CustomMain>
      <section className="min-h-[calc(100vh)] bg-links relative p-5 pt-24 flex flex-col items-center gap-10 text-primary">
        <h1 className="text-primary text-2xl font-bold text-center">
          AÑADIR USUARIO
        </h1>
        <AddUserForm
          handleSubmit={handleSubmit}
          initialValues={initialValues}
          institutionOptions={options}
          validationSchema={addUserValidationSchema}
        />
      </section>
    </CustomMain>
  );
}
