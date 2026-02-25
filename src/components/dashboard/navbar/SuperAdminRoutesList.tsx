import {
  ListBulletIcon,
  UserPlusIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SuperAdminRoutesList = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-4 w-full bg-primary p-2 rounded-2xl">
      <li className="text-sm font-semibold">SUPERADMINISTRADOR</li>
      <li
        className={clsx([
          "px-5 py-3 transition-colors rounded-xl",
          pathname === "/dashboard/users"
            ? "bg-tertiary text-light"
            : "bg-light text-tertiary",
        ])}
      >
        <Link
          href={"/dashboard/users"}
          className="justify-start flex items-center gap-6"
        >
          <ListBulletIcon className="h-8" />{" "}
          <p className="text-lg font-semibold">LISTA DE USUARIOS</p>
        </Link>
      </li>
      <li
        className={clsx([
          "px-5 py-3 transition-colors rounded-xl",
          pathname === "/dashboard/users/addUser"
            ? "bg-tertiary text-light"
            : "bg-light text-tertiary",
        ])}
      >
        <Link
          href={"/dashboard/users/addUser"}
          className="justify-start flex items-center gap-6"
        >
          <UserPlusIcon className="h-8" />{" "}
          <p className="text-lg font-semibold">AÑADIR USUARIO</p>
        </Link>
      </li>
    </ul>
  );
};

export default SuperAdminRoutesList;
