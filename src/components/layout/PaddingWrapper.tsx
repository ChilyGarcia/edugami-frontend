import React from "react";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const PaddingWrapper = ({ children }: IProps) => {
  return <div className="p-5 relative">{children}</div>;
};

export default PaddingWrapper;
