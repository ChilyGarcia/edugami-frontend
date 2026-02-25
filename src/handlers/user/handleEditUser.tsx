import { IHandlerResponse } from "@/types/customInterfaces";
import { IUser, TUserRole } from "@/types/users";
import errorParser from "@/utils/errorParser";

export interface IEditUserData {
  role: TUserRole;
  email: string;
  name: string;
  last_name: string;
  password: string;
  institution: {
    id: string;
    label: string;
  };
  institution_user_data: {
    class_id: string;
    doc_number: number;
    doc_type: string;
  };
}

export default async function handleEditUser(
  data: IEditUserData
): Promise<IHandlerResponse> {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  const endpoint = "/user";

  const req = await fetch(apiURL + endpoint, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data, institution_id: data.institution.id }),
  });

  const res = await req.json();

  if (!req.ok) {
    return { error: errorParser(res.msg, req) };
  }

  return {
    data: res.data,
  };
}
