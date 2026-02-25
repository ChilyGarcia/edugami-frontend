import { IFetchInstitutionsParams } from "@/hooks/useFetchInstitutions";
import { IFetchAPIResponse } from "@/types/customInterfaces";
import { IInstitution } from "@/types/institutions";
import { toast } from "sonner";

export default async function handleFetchInstitutions({  }: IFetchInstitutionsParams): Promise<
  IFetchAPIResponse<IInstitution[]> | null
> {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  const endpoint = "/institution";

  const req = await fetch(apiURL + endpoint, {
    method: "GET",
    credentials: "include",
  });

  const res = await req.json();

  if (!req.ok) {
    toast.error(res.msg);
  }

  return res;
}
