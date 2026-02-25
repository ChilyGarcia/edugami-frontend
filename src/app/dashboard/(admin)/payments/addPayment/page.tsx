"use client";

import Button from "@/components/button/Button";
import AddPaymentForm from "@/components/dashboard/payments/addPayment/AddPaymentForm";
import AddUserForm from "@/components/dashboard/users/addUser/AddUserForm";
import InputSelect from "@/components/form/InputSelect";
import InputText from "@/components/form/InputText";
import SearchableSelect from "@/components/form/SearchableSelect";
import CustomMain from "@/components/layout/CustomMain";
import handleFetchInstitutions from "@/handlers/institutions/handleFetchInstitutions";
import handleAddPayment, {
  IAddPaymentData,
} from "@/handlers/payments/handleAddPayment";
import handleAddUser, { IAddUserData } from "@/handlers/user/handleAddUser";
import useFetchInstitutions from "@/hooks/useFetchInstitutions";
import { IUser, TUserRole } from "@/types/users";
import { addUserValidationSchema } from "@/validations/dashboardValidations";
import { Form, Formik, FormikState } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const initialValues: IAddPaymentData = {
  institution: {
    id: "",
    label: "",
  },
  amount_paid: "",
  due_date: new Date().toISOString().split("T")[0],
  student_number_agreement: "",
};

export default function AddPayment() {
  const [options, setOptions] = useState<
    { label: string; value: string }[] | null
  >(null);
  const router = useRouter();

  async function handleSubmit(
    values: IAddPaymentData,
    reset: (
      nextState?: Partial<FormikState<IAddPaymentData>> | undefined
    ) => void
  ) {
    const res = await handleAddPayment(values);

    if (res.error) {
      return toast.error(res.error);
    }

    console.log(res);

    toast.success("Pago añadido con éxito");

    reset();
    router.push("/dashboard/payments");
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
          AÑADIR PAGO
        </h1>
        <AddPaymentForm
          handleSubmit={handleSubmit}
          initialValues={initialValues}
          institutionOptions={options}
        />
      </section>
    </CustomMain>
  );
}
