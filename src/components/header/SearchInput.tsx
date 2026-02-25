import React, { useCallback, useEffect, useRef, useState } from "react";
import { useField, useFormikContext } from "formik";
import {
  EyeIcon,
  EyeSlashIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { IFetchUsersParams } from "@/hooks/useFetchUsers";

interface IProps {
  name: string;
}

const SearchInput = ({ name }: IProps) => {
  const [field, meta, { setValue }] = useField(name);
  const { submitForm } = useFormikContext<IFetchUsersParams>();
  const submitFormRef = useRef(submitForm);

  // Keep the ref updated with the latest submitForm function
  useEffect(() => {
    submitFormRef.current = submitForm;
  }, [submitForm]);

  const debounce = <T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ): T => {
    let timeoutId: NodeJS.Timeout;
    return ((...args: Parameters<T>) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    }) as T;
  };

  const debouncedSearch = useCallback(debounce(submitFormRef.current, 300), []);

  return (
    <div className={"h-9 relative w-full bg-slate-300 rounded-xl"}>
      <input
        id={`${name}Field`}
        className="w-full h-full bg-transparent focus:outline-none px-4 py-3 placeholder:text-tertiary text-primary"
        type="text"
        placeholder="Buscar"
        {...field}
        onChange={(e) => {
          setValue(e.target.value);
          debouncedSearch();
        }}
      />
      <button
        type="submit"
        className="absolute right-0 rounded-tr-xl rounded-br-xl text-light bg-tertiary aspect-square h-full top-0 bottom-0 my-auto grid place-content-center"
      >
        <MagnifyingGlassIcon className="h-6" />
      </button>
    </div>
  );
};

export default SearchInput;
