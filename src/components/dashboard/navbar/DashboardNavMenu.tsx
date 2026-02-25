import {
  ArrowLeftIcon,
  ListBulletIcon,
  UserPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import Button from "../../button/Button";
import ModeratorRoutesList from "./ModeratorRoutesList";
import { useUserStore } from "@/zustand/useUserStore";
import AdminRoutesList from "./AdminRoutesList";
import SuperAdminRoutesList from "./SuperAdminRoutesList";

interface IProps {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const DashboardNavMenu = ({ toggle, setToggle }: IProps) => {
  const pathname = usePathname();
  const { user, error, loading } = useUserStore();

  function closeModal() {
    setToggle(false);
  }

  useEffect(() => {
    setToggle(false);
  }, [pathname, setToggle]);

  return (
    <div
      className="w-full h-full fixed flex justify-start top-0 left-0 z-50"
      style={{
        transition: "transform .3s",
        transform: `translateX(${toggle ? 0 : -100}%)`,
      }}
    >
      <div
        style={{
          transition: "opacity 1.5s",
          opacity: toggle ? 1 : 0,
        }}
        className="bg-dark/60 backdrop-blur-sm opacity-0 absolute top-0 left-0 w-full h-full z-0"
        onClick={() => setToggle(false)}
      ></div>

      {/* MODAL */}
      <div className="w-5/6 h-full max-w-sm bg-secondary right-0 relative flex flex-col overflow-y-auto overflow-x-hidden px-5 pb-5 gap-10">
        <header className="w-full flex justify-between py-4 sticky top-0 left-0 bg-secondary">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeftIcon className="h-8" />
            Volver al inicio
          </Link>
          <button onClick={closeModal}>
            <XMarkIcon className="h-8" />
          </button>
        </header>
        <div className="w-full flex justify-end flex-col gap-12 items-start">
          {/* MAIN INFO */}
          <div className="w-full flex items-center gap-4">
            <div className="min-w-[80px] h-20 aspect-square bg-[url(/cards/celula-animal.png)] bg-cover bg-center bg-purple-900 rounded-full"></div>
            <div className="w-full pr-12">
              <h4 className="font-semibold text-lg leading-tight w-full text-ellipsis pr-12 overflow-hidden whitespace-nowrap">
                Sandro Beltrán
              </h4>
              <p className="w-full whitespace-nowrap overflow-hidden text-light/60 text-ellipsis pr-12">
                MODERADOR DE INSTUTICIÓN
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start w-full">
            {/* {user?.role === "INSTITUTION_MODERATOR" ? (
            ) : null} */}
            <ModeratorRoutesList />

            {user?.role === "ADMIN" ? (
              <>
                <AdminRoutesList />
              </>
            ) : null}

            {user?.role === "SUPERADMIN" ? (
              <>
                <AdminRoutesList />
                <SuperAdminRoutesList />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavMenu;
