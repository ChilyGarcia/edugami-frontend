import InputSelect from "@/components/form/InputSelect";
import InputText from "@/components/form/InputText";
import SearchInput from "@/components/header/SearchInput";
import { IFetchUsersParams } from "@/hooks/useFetchUsers";
import { Form, Formik } from "formik";
import React, { Dispatch, SetStateAction } from "react";

interface IProps {
  setParams: Dispatch<SetStateAction<IFetchUsersParams>>;
  params: IFetchUsersParams;
}

const SearchBar = ({ setParams, params }: IProps) => {
  const initialValues: IFetchUsersParams = params;

  function handleSubmit(values: IFetchUsersParams) {
    setParams((state) => ({ ...state, ...values }));
  }

  return (
    <div className="w-full">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form className="flex gap-4 flex-col">
          <SearchInput name="search" />

          <div className="flex gap-2">
            <InputSelect name="sort_by" label="Ordenar por">
              <option value="role">Rol</option>
              <option value="name">Nombre</option>
              <option value="last_name">Apellido</option>
              <option value="email">Email</option>
            </InputSelect>
            <InputSelect name="sort" label="Orden">
              <option value="asc">Ascendente</option>
              <option value="desc">Descendente</option>
            </InputSelect>
            <InputText name="limit" label="Límite" type="number" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
