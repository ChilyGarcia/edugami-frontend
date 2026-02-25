import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface IProps {
  children: JSX.Element | React.ReactNode | JSX.Element[];
  hierarchy: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  theme?: "dark" | "light";
  href?: string;
  type?: "button" | "submit";
}

const Button = ({
  children,
  theme = "dark",
  hierarchy = "primary",
  size = "md",
  href,
  type = "button",
}: IProps) => {
  const className = clsx([
    `p-2 rounded-xl font-bold text-center flex-1`,
    { "bg-tertiary text-light shadow-lg shadow-dark/30": theme === "dark" },
    { "bg-light text-tertiary shadow-lg": theme === "light" },
    { "min-w-[200px] py-3 text-lg": size === "md" },
    { "bg-transparent border-light border": hierarchy === "secondary" },
  ]);

  if (href)
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );

  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
