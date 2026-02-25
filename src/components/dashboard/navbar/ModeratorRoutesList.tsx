import {
  FolderPlusIcon,
  ListBulletIcon,
  UserPlusIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ModeratorRoutesList = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-4 w-full bg-primary p-2 rounded-2xl">
      <li className="text-sm font-semibold">MODERADOR</li>
      <li
        className={clsx([
          "px-5 py-3 transition-colors rounded-xl",
          pathname === "/dashboard/addMassiveUsers"
            ? "bg-tertiary text-light"
            : "bg-light text-tertiary",
        ])}
      >
        <Link
          href={"/dashboard/addMassiveUsers"}
          className="justify-start flex items-center gap-6"
        >
          <FolderPlusIcon className="h-8" />{" "}
          <p className="text-lg font-semibold">AÑADIR USUARIOS MASIVOS</p>
        </Link>
      </li>
      <li
        className={clsx([
          "px-5 py-3 transition-colors rounded-xl",
          pathname === "/dashboard/institutionUsers"
            ? "bg-tertiary text-light"
            : "bg-light text-tertiary",
        ])}
      >
        <Link
          href={"/dashboard/institutionUsers"}
          className="justify-start flex items-center gap-6"
        >
          <UsersIcon className="h-8" />{" "}
          <p className="text-lg font-semibold">USUARIOS DE LA INSTITUCIÓN</p>
        </Link>
      </li>
    </ul>
  );
};

export default ModeratorRoutesList;
