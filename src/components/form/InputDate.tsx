import React, { useState } from "react";
import { useField } from "formik";

interface IProps {
  name: string;
  label: string;
}

const InputDate = ({ name, label }: IProps) => {
  const [field, meta] = useField(name);

  return (
    <div className="w-full">
      <label
        className="mb-1 inline-block font-medium px-1"
        htmlFor={`${name}Field`}
      >
        {label}
      </label>
      <div className={"h-12 relative w-full bg-slate-300 rounded-xl"}>
        <input
          id={`${name}Field`}
          className="w-full h-full bg-transparent focus:outline-none px-4 py-3 placeholder:text-tertiary text-primary"
          type="date"
          {...field}
        />
      </div>
      {meta.touched && meta.error ? (
        <div className="text-red-400 mt-1 font-normal">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputDate;
