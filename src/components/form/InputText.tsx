import React, { useState } from "react";
import { useField } from "formik";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

interface IProps {
  name: string;
  label: string;
  type?: "text" | "password" | "number";
}

const InputText = ({ name, label, type = "text" }: IProps) => {
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
      <div
        className={clsx([
          "h-10 relative w-full bg-slate-300 rounded-xl",
          { "pr-12": type === "password" },
        ])}
      >
        <input
          id={`${name}Field`}
          className="w-full h-full bg-transparent focus:outline-none px-4 py-3 placeholder:text-tertiary text-primary"
          type={type === "password" ? (hidden ? "password" : "text") : type}
          {...field}
        />
        {type === "password" ? (
          <button
            type="button"
            className="absolute right-0 rounded-tr-xl rounded-br-xl bg-tertiary aspect-square h-full top-0 bottom-0 my-auto grid place-content-center"
            onClick={() => setHidden(!hidden)}
          >
            {hidden ? (
              <EyeIcon className="h-6" />
            ) : (
              <EyeSlashIcon className="h-6" />
            )}
          </button>
        ) : null}
      </div>
      {meta.touched && meta.error ? (
        <div className="text-red-400 mt-1 font-normal">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputText;
