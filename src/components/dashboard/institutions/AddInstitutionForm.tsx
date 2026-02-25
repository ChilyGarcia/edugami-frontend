import Button from "@/components/button/Button";
import InputSelect from "@/components/form/InputSelect";
import InputText from "@/components/form/InputText";
import TextArea from "@/components/form/TextArea";
import { IAddInstitutionData } from "@/handlers/institutions/handleAddInstitution";
import { addInstitutionValidationSchema } from "@/validations/dashboardValidations";
import { Formik, Form, FormikState } from "formik";
import React from "react";
import * as Yup from "yup";

interface IProps {
  initialValues: IAddInstitutionData;
  handleSubmit: (
    values: IAddInstitutionData,
    reset: (
      nextState?: Partial<FormikState<IAddInstitutionData>> | undefined
    ) => void
  ) => void;
  validationSchema: Yup.ObjectSchema<any>;
}

const AddInstitutionForm = ({
  initialValues,
  handleSubmit,
  validationSchema,
}: IProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
      validationSchema={validationSchema}
    >
      <Form className="w-full flex flex-col gap-4 items-stretch">
        <div className="bg-primary p-1 rounded-xl text-light text-center font-semibold">
          <InputText name="name" label="NOMBRE DE LA INSTITUCIÓN" />
        </div>
        <div className="bg-primary p-1 rounded-xl text-light text-center font-semibold">
          <InputText name="email" label="CORREO INSTITUCIONAL" />
        </div>

        <div className="bg-primary p-1 rounded-xl text-light text-center font-semibold">
          <InputText name="phone" label="TELÉFONO DE LA INSTITUCIÓN" />
        </div>

        <div className="bg-primary p-1 rounded-xl text-light text-center font-semibold">
          <TextArea name="description" label="Descripción" />
        </div>

        <div className="bg-primary p-1 rounded-xl text-light text-center font-semibold">
          <InputSelect name="country" label="PAÍS">
            <option value="">Selecciona una opción</option>
            <option value="COLOMBIA">Colombia</option>
            <option value="VENEZUELA">Venezuela</option>
          </InputSelect>
        </div>

        <div className="bg-primary p-1 rounded-xl text-light text-center font-semibold">
          <InputText name="state" label="DEPARTAMENTO" />
        </div>

        <div className="bg-primary p-1 rounded-xl text-light text-center font-semibold">
          <InputText name="city" label="CIUDAD" />
        </div>

        <div className="mt-12 flex">
          <Button type="submit" hierarchy="primary">
            GUARDAR
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default AddInstitutionForm;
