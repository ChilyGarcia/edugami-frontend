import Image from "next/image";
import React from "react";

interface IProps {
  label: string;
}

const Sign = ({ label }: IProps) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-lg justify-center relative pt-14 flex">
        <div className="w-9/12 flex top-0 absolute px-12  justify-between">
          <img
            src={"/img/sign-string.svg"}
            className="w-4"
            alt="Cuerda de letrero"
          />
          <img
            src={"/img/sign-string.svg"}
            className="w-4"
            alt="Cuerda de letrero"
          />
        </div>
        <div
          className="w-9/12 aspect-[2.6/1]
    bg-contain bg-center bg-no-repeat bg-[url(/img/sign-bg.svg)] grid place-content-center"
        >
          <h4 className="font-extrabold text-primary text-3xl">{label}</h4>
        </div>
      </div>
    </div>
  );
};

export default Sign;
