import sessionExpiredChecker from "@/handlers/401Checker";
import { IFetchAPIResponse } from "@/types/customInterfaces";
import { IInstitution, TInstitutionForcedState } from "@/types/institutions";
import { IUser } from "@/types/users";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

export interface IFetchInstitutionsParams {
  page?: number;
  search?: string;
  sort_by?: "name" | "country" | "phone" | "state" | "city";
  institutionId?: string;
  sort?: "asc" | "desc";
  limit?: number;
  forced_state?: TInstitutionForcedState;
  id?: string;
}

const useFetchInstitutions = (params: IFetchInstitutionsParams) => {
  const [state, setState] = useState<IFetchAPIResponse<IInstitution[]> | null>(
    null
  );

  async function handleFetchInstitutions({
    page,
    search,
    sort,
    sort_by,
    limit,
    forced_state,
  }: IFetchInstitutionsParams) {
    setState(null);
    const apiURL = process.env.NEXT_PUBLIC_API_URL;
    const endpoint = "/institution";

    let params = "";

    if (page) params += `?page=${page}`;
    if (sort) params += `&sort=${sort}`;
    if (sort_by) params += `&sort_by=${sort_by}`;
    if (limit) params += `&limit=${limit}`;
    if (search) params += `&search=${search}`;

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
    handleFetchInstitutions(params);
  }, [params]);

  return state;
};

export default useFetchInstitutions;
