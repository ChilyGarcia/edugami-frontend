import { IHandlerResponse } from "@/types/customInterfaces";
import errorParser from "@/utils/errorParser";

export interface IAddInstitutionData {
  name: string;
  email: string;
  phone: string;
  description: string;
  country: string;
  state: string;
  city: string;
}

export default async function handleAddInstitution(
  data: IAddInstitutionData
): Promise<IHandlerResponse> {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  const endpoint = "/admin/institution";

  const req = await fetch(apiURL + endpoint, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const res = await req.json();

  if (!req.ok) {
    return { error: errorParser(res.msg, req) };
  }

  return {
    data: res.data,
  };
}
