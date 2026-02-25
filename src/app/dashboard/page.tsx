"use client";

import SearchBar from "@/components/dashboard/users/SearchBar";
import UsersList from "@/components/dashboard/users/UsersList";
import CustomMain from "@/components/layout/CustomMain";
import useFetchUsers, { IFetchUsersParams } from "@/hooks/useFetchUsers";
import { IUser } from "@/types/users";
import { useState } from "react";

export default function Dashboard() {
  const session = "8899AMNS";

  return (
    <CustomMain>
      <section className="min-h-[calc(100vh)] bg-links relative p-5 pt-24 flex flex-col items-center gap-10 text-primary">
        <h1 className="text-primary text-2xl font-bold text-center">
          BIENVENIDO AL PANEL
        </h1>
        <p>Selecciona una opción en el menú</p>
      </section>
    </CustomMain>
  );
}
