import Button from "@/components/button/Button";
import InputSelect from "@/components/form/InputSelect";
import InputText from "@/components/form/InputText";
import SearchableSelect from "@/components/form/SearchableSelect";
import { IAddUserData } from "@/handlers/user/handleAddUser";
import { addUserValidationSchema } from "@/validations/dashboardValidations";
import { Formik, Form, FormikState } from "formik";
import React from "react";
import * as Yup from "yup";

interface IProps {
  initialValues: IAddUserData;
  handleSubmit: (
    values: IAddUserData,
    reset: (nextState?: Partial<FormikState<IAddUserData>> | undefined) => void
  ) => void;
  institutionOptions:
    | {
        label: string;
        value: string;
      }[]
    | null;
  validationSchema: Yup.ObjectSchema<any>;
}

const AddUserForm = ({
  initialValues,
  handleSubmit,
  institutionOptions,
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
        {/* <div className="bg-primary p-1 rounded-xl text-light text-center font-semibold">
              <InputText name="institution_id" label="ID DE INSTITUCIÓN" />
            </div> */}
        <div className="bg-primary p-1 rounded-xl text-light text-center font-semibold">
          <InputText name="email" label="CORREO INSTITUCIONAL" />
        </div>
        <div className="bg-primary p-1 rounded-xl text-light text-center font-semibold">
          <InputText name="password" type="password" label="CONTRASEÑA" />
        </div>
        <div className="bg-primary p-1 rounded-xl text-light text-center font-semibold">
          <InputText name="name" label="NOMBRE DEL ESTUDIANTE" />
        </div>
        <div className="bg-primary p-1 rounded-xl text-light text-center font-semibold">
          <InputText name="last_name" label="APELLIDO DEL ESTUDIANTE" />
        </div>
        <h6 className="font-bold text-primary text-sm">
          DOCUMENTO DE IDENTIDAD
        </h6>
        <div className="flex gap-2 bg-primary font-semibold rounded-xl text-light p-1">
          <div className="flex-1">
            <InputSelect name="institution_user_data.doc_type" label="TIPO">
              <option value="CC">CC</option>
              <option value="TI">TI</option>
              <option value="OTHER">OTHER</option>
            </InputSelect>
          </div>
          <div className="flex-[2] w-full">
            <InputText
              name="institution_user_data.doc_number"
              type="number"
              label="NÚMERO"
            />
          </div>
        </div>
        <div className="bg-primary p-1 rounded-xl text-light text-center font-semibold">
          <InputText
            name="institution_user_data.class_id"
            type="text"
            label="ID DE CLASE"
          />
        </div>
        <div className="bg-primary p-1 rounded-xl text-light text-center font-semibold">
          <InputSelect name="role" label="ROL">
            <option value="STUDENT">Estudiante</option>
            <option value="INSTITUTION_MODERATOR">Moderador</option>
          </InputSelect>
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

export default AddUserForm;
