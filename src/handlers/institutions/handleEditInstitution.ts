import { IHandlerResponse } from "@/types/customInterfaces";
import errorParser from "@/utils/errorParser";
import { IAddInstitutionData } from "./handleAddInstitution";

export interface IEditInstitutionData extends IAddInstitutionData {
    institution_id: string
}

export default async function handleEditInstitution(
    data: IEditInstitutionData
): Promise<IHandlerResponse> {
    const apiURL = process.env.NEXT_PUBLIC_API_URL;
    const endpoint = "/institution";

    const req = await fetch(apiURL + endpoint, {
        method: "PUT",
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
