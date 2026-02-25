"use client";

import SearchBar from "@/components/dashboard/users/SearchBar";
import UsersList from "@/components/dashboard/users/UsersList";
import PaginationController from "@/components/general/PaginationController";
import CustomMain from "@/components/layout/CustomMain";
import useFetchUsers, { IFetchUsersParams } from "@/hooks/useFetchUsers";
import { useState } from "react";

export default function Dashboard() {
  const session = "8899AMNS";
  const [params, setParams] = useState<IFetchUsersParams>({
    roles: ["INSTITUTION_MODERATOR", "STUDENT", "ADMIN", "SUPERADMIN"],
    limit: 2,
    page: 1,
    search: "",
  });

  const usersQuery = useFetchUsers(params);

  return (
    <CustomMain>
      <section className="min-h-[calc(100vh)] bg-links relative p-5 pt-24 flex flex-col items-center gap-10 text-primary">
        <h1 className="text-primary text-2xl font-bold text-center">
          LISTA DE USUARIOS
        </h1>
        <SearchBar setParams={setParams} params={params} />
        {usersQuery ? (
          <>
            {usersQuery.data ? <UsersList users={usersQuery.data} /> : null}
            {usersQuery.total.length ? (
              <PaginationController
                params={params}
                setParams={setParams}
                maxPagesCount={Math.ceil(
                  usersQuery?.total[0].count / (params.limit || 1)
                )}
              />
            ) : null}
          </>
        ) : (
          <p>Cargando usuarios...</p>
        )}
      </section>
    </CustomMain>
  );
}
