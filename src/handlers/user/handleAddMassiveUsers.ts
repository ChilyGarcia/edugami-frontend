import { IHandlerResponse } from "@/types/customInterfaces";
import { IAddUserData } from "./handleAddUser";
import errorParser from "@/utils/errorParser";

export default async function handleAddMassiveUsers(
  users: IAddUserData[]
): Promise<IHandlerResponse> {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  const endpoint = "/users/";

  try {
    const req = await fetch(apiURL + endpoint, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        institution_id: users[0].institution.id,
        users,
      }),
    });

    const res = await req.json();

    if (!req.ok) {
      return { error: errorParser(res.msg, req) };
    }

    return {
      data: res.data,
    };
  } catch (error) {
    return { error: errorParser() };
  }
}
