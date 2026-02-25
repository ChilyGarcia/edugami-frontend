import React from "react";
import LeavesBackground from "../general/LeavesBackground";

interface IProps {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}

const GridLayout = ({ children }: IProps) => {
  return (
    <div className="relative grid grid-cols-4 bg-secondary gap-x-4">
      {children}
    </div>
  );
};

export default GridLayout;
