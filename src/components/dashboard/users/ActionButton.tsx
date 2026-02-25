import { PencilIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface IProps {
  href?: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  onClick?: (() => void) | (() => Promise<void>);
  color?: "danger" | "normal" | "info";
}

const EditButton = ({ href, Icon, onClick, color = "info" }: IProps) => {
  const baseClassname = clsx([
    "bg-light text-primary grid place-content-center p-2",
    { "bg-red-400": color === "danger" },
  ]);

  if (href) {
    return (
      <Link scroll={false} href={href} className={baseClassname}>
        <Icon className="h-5" />
      </Link>
    );
  }

  if (!onClick) return;

  return (
    <button onClick={() => onClick()} className={baseClassname}>
      <Icon className="h-5" />
    </button>
  );
};

export default EditButton;
