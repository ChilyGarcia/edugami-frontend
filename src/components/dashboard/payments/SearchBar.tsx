import InputSelect from "@/components/form/InputSelect";
import InputText from "@/components/form/InputText";
import SearchInput from "@/components/header/SearchInput";
import { IFetchPaymentsParams } from "@/hooks/useFetchPayments";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Form, Formik } from "formik";
import React, { Dispatch, SetStateAction } from "react";

interface IProps {
  setParams: Dispatch<SetStateAction<IFetchPaymentsParams>>;
  params: IFetchPaymentsParams;
}

const SearchBar = ({ setParams, params }: IProps) => {
  const initialValues: IFetchPaymentsParams = params;

  function handleSubmit(values: IFetchPaymentsParams) {
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
              <option value="institution_id">ID de institución</option>
              <option value="paid_at">Fecha de pago</option>
              <option value="due_date">Vencimiento</option>
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
