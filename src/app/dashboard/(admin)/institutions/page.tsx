"use client";

import InstitutionsList from "@/components/dashboard/institutions/InstitutionsList";
import SearchBar from "@/components/dashboard/institutions/SearchBar";
import CustomMain from "@/components/layout/CustomMain";
import useFetchInstitutions, {
  IFetchInstitutionsParams,
} from "@/hooks/useFetchInstitutions";
import { IFetchUsersParams } from "@/hooks/useFetchUsers";
import { IInstitution } from "@/types/institutions";
import { useState } from "react";

export default function Dashboard() {
  const session = "8899AMNS";
  const [params, setParams] = useState<IFetchInstitutionsParams>({
    page: 1,
    forced_state: "NOT_FORCED",
    institutionId: "",
    limit: 2,
    search: "",
    sort: "asc",
    sort_by: "name",
  });

  const institutions = useFetchInstitutions(params);
  /* 
  const institutions: IInstitution[] = [
    {
      _id: "t8g9bu9grh84b",
      amount_of_students: 500,
      city: "CÚCUTA",
      country: "COLOMBIA",
      state: "NORTE DE SANTANDER",
      description: "Institution name here",
      email: "institution1@example.com",
      current_forced_state: "NOT_FORCED",
      name: "Some name here",
      payments_status: "UPDATED",
      phone: 573106953847,
    },
    {
      _id: "t8g9bu9grh84b",
      amount_of_students: 500,
      city: "CÚCUTA",
      country: "COLOMBIA",
      state: "NORTE DE SANTANDER",
      description: "Institution name here",
      email: "institution2@example.com",
      current_forced_state: "NOT_FORCED",
      name: "Some name here",
      payments_status: "UPDATED",
      phone: 573106953847,
    },
  ]; */

  return (
    <CustomMain>
      <section className="min-h-[calc(100vh)] bg-links relative p-5 pt-24 flex flex-col items-center gap-10 text-primary">
        <h1 className="text-primary text-2xl font-bold text-center">
          LISTA DE INSTITUCIONES
        </h1>
        <SearchBar setParams={setParams} params={params} />
        {institutions ? (
          <InstitutionsList institutions={institutions.data} />
        ) : (
          <p>Cargando instituciones...</p>
        )}
      </section>
    </CustomMain>
  );
}
