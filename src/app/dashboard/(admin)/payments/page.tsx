"use client";

import InstitutionsList from "@/components/dashboard/institutions/InstitutionsList";
import PaymentsList from "@/components/dashboard/payments/PaymentsList";
import SearchBar from "@/components/dashboard/payments/SearchBar";
import CustomMain from "@/components/layout/CustomMain";
import useFetchPayments, {
  IFetchPaymentsParams,
} from "@/hooks/useFetchPayments";
import { useState } from "react";

export default function Payments() {
  const session = "8899AMNS";
  const [params, setParams] = useState<IFetchPaymentsParams>({
    id: "",
    institution_id: "",
    limit: 2,
    page: 1,
    search: "",
    sort: "asc",
    sort_by: "paid_at",
  });

  const payments = useFetchPayments(params);

  return (
    <CustomMain>
      <section className="min-h-[calc(100vh)] bg-links relative p-5 pt-24 flex flex-col items-center gap-10 text-primary">
        <h1 className="text-primary text-2xl font-bold text-center">
          LISTA DE PAGOS
        </h1>
        <SearchBar setParams={setParams} params={params} />
        {payments ? (
          <PaymentsList payments={payments.data} />
        ) : (
          <p>Cargando pagos...</p>
        )}
      </section>
    </CustomMain>
  );
}
