import { IHandlerResponse } from "@/types/customInterfaces";
import { toast } from "sonner";
import sessionExpiredChecker from "../401Checker";
import errorParser from "@/utils/errorParser";

export default async function handleGetSession(): Promise<IHandlerResponse> {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  const apiEndpoint = "/auth/session";

  try {
    const req = await fetch(apiURL + apiEndpoint, {
      method: "GET",
      // headers: {
      //   Cookie: document.cookie,
      // },
      credentials: "include",
    });

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
