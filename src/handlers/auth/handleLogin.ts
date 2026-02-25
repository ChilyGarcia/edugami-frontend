import { IHandlerResponse } from "@/types/customInterfaces";
import { toast } from "sonner";
import sessionExpiredChecker from "../401Checker";
import errorParser from "@/utils/errorParser";

export interface ILoginData {
  email: string;
  password: string;
}

export default async function handleLogin(
  data: ILoginData
): Promise<IHandlerResponse> {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  const endpoint = "/auth/session";

  try {
    const req = await fetch(apiURL + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email: data.email, password: data.password }),
    });

    /* CHECK FOR 401 */
    sessionExpiredChecker(req);

    const res = await req.json();

    if (!req.ok) {
      return {
        error: errorParser(res.message),
      };
    }

    return {
      data: res,
    };
  } catch (error) {
    return {
      error: errorParser(error),
    };
  }
}
