"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../button/Button";
import { Bars3Icon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Form, Formik } from "formik";
import SearchInput from "./SearchInput";
import NavMenu from "./NavMenu";
import Link from "next/link";
import { useUserStore } from "@/zustand/useUserStore";

interface IInitialValues {
  query: string;
}

const initialValues: IInitialValues = {
  query: "",
};

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading } = useUserStore();

  function handleSubmit(values: IInitialValues) {
    // if (!values.query) return;

    router.replace(`${pathname}?query=${values.query}`);
  }

  const inHome = pathname === "/";

  const inAR = pathname.includes("/ar/");

  if (inAR) return;

  function openNavMenu() {
    setToggle(true);
  }

  return (
    <header className="z-50 h-36 col-span-4 w-full bg-primary sticky flex flex-col">
      <NavMenu setToggle={setToggle} toggle={toggle} />
      {inHome ? (
        <nav className="px-5 py-6 flex justify-between">
          <Link href="/">
            <img
              src={"/brand/logo.svg"}
              className="w-28"
              alt="Logo de Edugami"
            />
          </Link>
          <div className="flex items-center gap-3">
            <button onClick={openNavMenu}>
              <Bars3Icon className="h-8 text-light" />
            </button>

            {loading ? (
              <div className="border-4 h-3/4 aspect-square rounded-full animate-spin border-zinc-100/30 border-t-zinc-100"></div>
            ) : null}

            {!user && !loading ? (
              <Button href="/login" size="sm" hierarchy="primary" theme="light">
                ACCEDER
              </Button>
            ) : null}
          </div>
        </nav>
      ) : (
        <nav className="px-5 py-6 h-full flex justify-between items-center">
          <button onClick={() => router.back()}>
            <ChevronLeftIcon className="h-10" />
          </button>
          <Link className="h-full" href={"/"}>
            <img
              src={"/brand/logo.svg"}
              className="w-full h-full"
              alt="Logo de Edugami"
            />
          </Link>
          <div className="w-10" />
        </nav>
      )}

      {/* SEARCH BAR */}
      {inHome ? (
        <nav className="px-5 pb-4 flex justify-center">
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form className="w-full max-w-[320px]">
              <SearchInput name="query" />
            </Form>
          </Formik>
        </nav>
      ) : null}
    </header>
  );
};

export default Navbar;
