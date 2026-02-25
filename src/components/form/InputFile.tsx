"use client";

import { useField } from "formik";

interface IProps {
  name: string;
  label: string;
  accept: string;
  multiple: boolean;
}

const InputFile = ({ name, label, accept, multiple }: IProps) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div className="relative min-h-fit w-full">
      <p className="mb-1 inline-block font-medium px-1">{label}</p>
      <label className="inline-block text-primary py-4 bg-slate-300 px-3 text-center rounded-xl font-semibold text-sm cursor-pointer w-full transition-colors hover:bg-slate-400 text-ellipsis whitespace-nowrap overflow-hidden">
        <input
          className="hidden"
          type="file"
          {...field}
          value={""}
          multiple={multiple}
          accept={accept}
          onChange={(e) =>
            e.target.files![0] ? helpers.setValue(e.target.files![0]) : null
          }
        />
        {meta.value ? meta.value.name : "Selecciona un archivo"}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-red-400 mt-1 font-normal">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputFile;
