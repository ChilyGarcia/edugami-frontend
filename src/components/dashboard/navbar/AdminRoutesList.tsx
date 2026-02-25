import {
  CreditCardIcon,
  ListBulletIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AdminRoutesList = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-4 w-full bg-primary p-2 rounded-2xl">
      <li className="text-sm font-semibold">ADMINISTRADOR</li>
      <li
        className={clsx([
          "px-5 py-3 transition-colors rounded-xl",
          pathname === "/dashboard/institutions"
            ? "bg-tertiary text-light"
            : "bg-light text-tertiary",
        ])}
      >
        <Link
          href={"/dashboard/institutions"}
          className="justify-start flex items-center gap-6"
        >
          <ListBulletIcon className="h-8" />{" "}
          <p className="text-lg font-semibold">LISTA DE INSTITUCIONES</p>
        </Link>
      </li>
      <li
        className={clsx([
          "px-5 py-3 transition-colors rounded-xl",
          pathname === "/dashboard/institutions/addInstitution"
            ? "bg-tertiary text-light"
            : "bg-light text-tertiary",
        ])}
      >
        <Link
          href={"/dashboard/institutions/addInstitution"}
          className="justify-start flex items-center gap-6"
        >
          <UserPlusIcon className="h-8" />{" "}
          <p className="text-lg font-semibold">AÑADIR INSTITUCIÓN</p>
        </Link>
      </li>
      <li
        className={clsx([
          "px-5 py-3 transition-colors rounded-xl",
          pathname === "/dashboard/payments"
            ? "bg-tertiary text-light"
            : "bg-light text-tertiary",
        ])}
      >
        <Link
          href={"/dashboard/payments"}
          className="justify-start flex items-center gap-6"
        >
          <CreditCardIcon className="h-8" />{" "}
          <p className="text-lg font-semibold">PAGOS</p>
        </Link>
      </li>

      <li
        className={clsx([
          "px-5 py-3 transition-colors rounded-xl",
          pathname === "/dashboard/payments/addPayment"
            ? "bg-tertiary text-light"
            : "bg-light text-tertiary",
        ])}
      >
        <Link
          href={"/dashboard/payments/addPayment"}
          className="justify-start flex items-center gap-6"
        >
          <CreditCardIcon className="h-8" />{" "}
          <p className="text-lg font-semibold">AÑADIR PAGO</p>
        </Link>
      </li>
    </ul>
  );
};

export default AdminRoutesList;
