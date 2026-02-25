"use client";

import SearchBar from "@/components/dashboard/users/SearchBar";
import UsersList from "@/components/dashboard/users/UsersList";
import CustomMain from "@/components/layout/CustomMain";
import useFetchUsers, { IFetchUsersParams } from "@/hooks/useFetchUsers";
import { IUser } from "@/types/users";
import { useState } from "react";

export default function InstitutionUsers() {
  const session = "8899AMNS";
  const institution_id = "663fdb321ffb65292cba4498";
  const [params, setParams] = useState<IFetchUsersParams>({
    limit: 2,
    page: 1,
    sort_by: "last_name"
  });

  const usersQuery = useFetchUsers(params);

  return (
    <CustomMain>
      <section className="min-h-[calc(100vh)] bg-links relative p-5 pt-24 flex flex-col items-center gap-10 text-primary">
        <h1 className="text-primary text-2xl font-bold text-center">
          USUARIOS DE LA INSTITUCIÓN
        </h1>
        <SearchBar params={params} setParams={setParams} />
        {usersQuery ? (
          <UsersList users={usersQuery.data} />
        ) : (
          <p>Cargando usuarios...</p>
        )}
      </section>
    </CustomMain>
  );
}
