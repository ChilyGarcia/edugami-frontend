import { useField, useFormikContext } from "formik";
import React, { useState } from "react";

interface IOption {
  value: string;
  label: string;
}

interface IProps {
  options: IOption[];
  labelName: string;
  valueName: string;
  label: string;
}

const SearchableSelect = ({ labelName, valueName, options, label }: IProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [field, meta, helpers] = useField(labelName);
  const { setFieldValue } = useFormikContext();

  function handleSet({ value, label }: IOption) {
    helpers.setValue(label);
    setFieldValue(valueName, value);

    setToggle(false);
  }

  const filteredOptions = [...options].filter((e) =>
    e.label.toLowerCase().includes(meta.value.toLowerCase())
  );

  return (
    <div className="w-full">
      {label}
      <div className="w-full relative">
        <div className="h-12 relative w-full bg-slate-300 rounded-xl">
          <input
          autoComplete="off"
            id={`${labelName}Field`}
            className="w-full h-full bg-transparent focus:outline-none px-4 py-3 placeholder:text-tertiary text-primary"
            {...field}
            onFocus={() => setToggle(true)}
            onBlur={() => setToggle(false)}
          />
        </div>
        {toggle ? (
          <ul className="absolute left-0 top-[115%] gap-[2px] z-20 w-full bg-secondary shadow-lg shadow-zinc-900 flex flex-col justify-start rounded-xl min-h-6 overflow-auto border-[2px] border-secondary max-h-48">
            {filteredOptions.length ? (
              filteredOptions.map((option) => (
                <li key={option.value}>
                  <button
                    type="button"
                    className="py-2 bg-tertiary w-full"
                    onMouseDown={(e) => handleSet(option)}
                  >
                    {option.label}
                  </button>
                </li>
              ))
            ) : (
              <li className="flex flex-1 w-full items-center justify-center">
                No hay opciones disponibles
              </li>
            )}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default SearchableSelect;
