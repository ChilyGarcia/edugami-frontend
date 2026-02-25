import React from "react";

interface IProps {
  children: JSX.Element[] | JSX.Element | React.ReactNode;
}

const CustomMain = ({ children }: IProps) => {
  return <main className="relative col-span-4">{children}</main>;
};

export default CustomMain;
