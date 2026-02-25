import React, { useState } from "react";
import { useField } from "formik";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

interface IProps {
  name: string;
  label: string;
  type?: "text" | "password" | "number";
}

const TextArea = ({ name, label, type = "text" }: IProps) => {
  const [field, meta] = useField(name);
  const [hidden, setHidden] = useState<boolean>(true);

  return (
    <div className="w-full">
      <label
        className="mb-1 inline-block font-medium px-1"
        htmlFor={`${name}Field`}
      >
        {label}
      </label>
      <textarea
        rows={5}
        id={`${name}Field`}
        className="w-full bg-slate-300 rounded-xl focus:outline-none px-4 py-3 placeholder:text-tertiary text-primary"
        {...field}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-400 mt-1 font-normal">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextArea;
