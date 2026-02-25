import Button from "@/components/button/Button";
import InputDate from "@/components/form/InputDate";
import InputSelect from "@/components/form/InputSelect";
import InputText from "@/components/form/InputText";
import SearchableSelect from "@/components/form/SearchableSelect";
import { IAddPaymentData } from "@/handlers/payments/handleAddPayment";
import { addPaymentValidationSchema } from "@/validations/dashboardValidations";
import { Formik, Form, FormikState } from "formik";
import React from "react";

interface IProps {
  initialValues: IAddPaymentData;
  handleSubmit: (
    values: IAddPaymentData,
    reset: (
      nextState?: Partial<FormikState<IAddPaymentData>> | undefined
    ) => void
  ) => void;
  institutionOptions:
    | {
        label: string;
        value: string;
      }[]
    | null;
}

const AddPaymentForm = ({
  initialValues,
  handleSubmit,
  institutionOptions,
}: IProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
      validationSchema={addPaymentValidationSchema}
    >
      <Form className="w-full flex flex-col gap-4 items-stretch">
        <div className="bg-primary p-1 rounded-xl text-light text-center font-semibold">
          {institutionOptions ? (
            <SearchableSelect
              labelName="institution.label"
              valueName="institution.id"
              label="ID DE INSTITUCIÓN"
              options={institutionOptions}
            />
          ) : (
            <div>Cargando...</div>
          )}
        </div>
        <div className="bg-primary p-1 rounded-xl text-light text-center font-semibold">
          <InputText name="amount_paid" type="number" label="CANTIDAD PAGADA" />
        </div>
        <div className="bg-primary p-1 rounded-xl text-light text-center font-semibold">
          <InputText
            name="student_number_agreement"
            label="NÚMERO DE ESTUDIANTES"
            type="number"
          />
        </div>
        <div className="bg-primary p-1 rounded-xl text-light text-center font-semibold">
          <InputDate name="due_date" label="VENCIMIENTO" />
        </div>

        <div className="mt-12 flex">
          <Button type="submit" hierarchy="primary">
            CREAR
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default AddPaymentForm;
