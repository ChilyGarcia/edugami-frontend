import sessionExpiredChecker from "@/handlers/401Checker";
import { IFetchAPIResponse } from "@/types/customInterfaces";
import { IInstitution, TInstitutionForcedState } from "@/types/institutions";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

const useFetchInstitution = (id?: string) => {
  const [state, setState] = useState<IFetchAPIResponse<{
    name: string;
  }> | null>(null);

  const handleFetchInstitution = useCallback(async () => {
    setState(null);
    const apiURL = process.env.NEXT_PUBLIC_API_URL;
    const endpoint = "/institution";
    let params = `?id=${id}`;

    const req = await fetch(apiURL + endpoint + params, {
      method: "GET",
      credentials: "include",
    });

    sessionExpiredChecker(req);

    const res = await req.json();

    if (!req.ok) {
      return toast.error(res.msg);
    }

    const data = {
      name: res.data[0].name,
    };

    setState({ data, total: res.total });
  }, [id]);

  useEffect(() => {
    if (!id) {
      setState({ data: { name: "-" }, total: [{ count: 0 }] });
      return;
    }

    handleFetchInstitution();
  }, [handleFetchInstitution, id]);

  return state;
};

export default useFetchInstitution;
