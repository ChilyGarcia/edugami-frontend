import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { Dispatch, SetStateAction } from "react";

interface IProps {
  params: { page: number };
  setParams: Dispatch<SetStateAction<{ page: number }>>;
  maxPagesCount: number;
}

const PaginationController = ({ params, setParams, maxPagesCount }: IProps) => {
  function nextPage() {
    if (params.page < maxPagesCount) {
      setParams((e) => ({ ...params, page: e.page + 1 }));
    }
  }

  function prevPage() {
    if (params.page > 1) {
      setParams((e) => ({ ...params, page: e.page - 1 }));
    }
  }

  function goToPage(index: number) {
    setParams({ ...params, page: index });
  }

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="flex gap-2">
        {params.page > 1 && (
          <button
            onClick={prevPage}
            className="rounded-2xl w-fit border-2 grid place-content-center py-1 px-3 text-primary border-primary"
          >
            <ArrowLeftIcon className="h-10 stroke-2" />
          </button>
        )}
        {params.page < maxPagesCount && (
          <button
            onClick={nextPage}
            className="rounded-2xl flex w-min font-bold bg-primary items-center border-2 py-1 px-3 text-light border-primary"
          >
            Siguiente página
            <ArrowRightIcon className="h-10 stroke-2" />
          </button>
        )}
      </div>
      <div className="flex justify-center gap-4 items-center">
        {new Array(maxPagesCount > 5 ? 5 : maxPagesCount)
          .fill("")
          .map((e, index) => (
            <button
              key={index}
              onClick={() => goToPage(index + 1)}
              className={clsx([
                "w-9 h-9 grid place-content-center rounded-lg border-2 border-primary font-semibold",
                {
                  "bg-primary text-light": params.page === index + 1,
                },
              ])}
            >
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default PaginationController;
