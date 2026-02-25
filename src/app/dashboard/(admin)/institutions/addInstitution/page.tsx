"use client";

import Button from "@/components/button/Button";
import AddInstitutionForm from "@/components/dashboard/institutions/AddInstitutionForm";
import InputSelect from "@/components/form/InputSelect";
import InputText from "@/components/form/InputText";
import TextArea from "@/components/form/TextArea";
import CustomMain from "@/components/layout/CustomMain";
import handleAddInstitution, {
  IAddInstitutionData,
} from "@/handlers/institutions/handleAddInstitution";
import { addInstitutionValidationSchema } from "@/validations/dashboardValidations";
import { Form, Formik, FormikState } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface IInitialValues {
  name: string;
  email: string;
  phone: string;
  description: string;
  country: "" | "COLOMBIA" | "VENEZUELA";
  state: string;
  city: string;
}

const initialValues: IInitialValues = {
  name: "Sandro's College",
  email: "s_college@sandro.edu.co",
  phone: "3106953847",
  description: "Una escuela de sandro",
  country: "COLOMBIA",
  state: "Atlántico",
  city: "Barranquilla",
};

export default function AddInstitutions() {
  const router = useRouter();
  /*  const initialValues: IInitialValues = {
    name: "",
    email: "",
    phone: "",
    description: "",
    country: "",
    state: "",
    city: "",
  }; */

  async function handleSubmit(
    values: IAddInstitutionData,
    reset: (
      nextState?: Partial<FormikState<IInitialValues>> | undefined
    ) => void
  ) {
    const res = await handleAddInstitution(values);

    if (res.error) {
      return toast.error(res.error);
    }

    console.log(res);

    toast.success("Institución creada con éxito");

    reset();
    router.push("/dashboard/institutions");
  }

  return (
    <CustomMain>
      <section className="min-h-[calc(100vh)] bg-links relative p-5 pt-24 flex flex-col items-center gap-10 text-primary">
        <h1 className="text-primary text-2xl font-bold text-center">
          AÑADIR INSTITUCIÓN
        </h1>
        <AddInstitutionForm
          handleSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={addInstitutionValidationSchema}
        />
      </section>
    </CustomMain>
  );
}
