import sessionExpiredChecker from "@/handlers/401Checker";
import { IFetchAPIResponse } from "@/types/customInterfaces";
import { IPayment } from "@/types/payments";
import { IUser } from "@/types/users";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

export interface IFetchPaymentsParams {
  page?: number;
  search?: string;
  id?: string;
  sort_by?: "paid_at" | "institution_id" | "due_date";
  institution_id?: string;
  sort?: "asc" | "desc";
  limit?: number;
}

const useFetchPayments = (params: IFetchPaymentsParams) => {
  const [state, setState] = useState<IFetchAPIResponse<IPayment[]> | null>(
    null
  );

  async function handleFetchPayments({
    page,
    search,
    sort,
    sort_by,
    limit,
    institution_id,
    id,
  }: IFetchPaymentsParams) {
    setState(null);
    const apiURL = process.env.NEXT_PUBLIC_API_URL;
    const endpoint = "/payment";

    let params = "";

    if (page) params += `?page=${page}`;
    if (sort) params += `&sort=${sort}`;
    if (sort_by) params += `&sort_by=${sort_by}`;
    if (limit) params += `&limit=${limit}`;
    if (search) params += `&search=${search}`;
    if (institution_id) params += `&institution_id=${institution_id}`;
    if (id) params += `&id=${id}`;

    const req = await fetch(apiURL + endpoint + params, {
      method: "GET",
      credentials: "include",
    });

    sessionExpiredChecker(req);

    const res = await req.json();

    if (!req.ok) {
      return toast.error(res.msg);
    }

    setState(res);
  }

  useEffect(() => {
    handleFetchPayments(params);
  }, [params]);

  return state;
};

export default useFetchPayments;
