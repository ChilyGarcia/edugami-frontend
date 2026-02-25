import { IHandlerResponse } from "@/types/customInterfaces";
import errorParser from "@/utils/errorParser";

export interface IAddPaymentData {
    institution: {
        id: string;
        label: string;
    };
    amount_paid: "" | number,
    student_number_agreement: "" | number,
    due_date: string
}


export function parseLocalDateToApi(date: string) {
    let due_date = []
    const splitedDate = date.split("-")

    due_date.push(splitedDate[1])
    due_date.push(splitedDate[2])
    due_date.push(splitedDate[0])

    return due_date.join("/")
}

export default async function handleAddPayment(
    data: IAddPaymentData
): Promise<IHandlerResponse> {
    const apiURL = process.env.NEXT_PUBLIC_API_URL;
    const endpoint = "/admin/payment";

    const req = await fetch(apiURL + endpoint, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, ammount_paid: data.amount_paid, due_date: parseLocalDateToApi(data.due_date), institution_id: data.institution.id }),
    });

    const res = await req.json();

    console.log(res)
    if (!req.ok) {
        return { error: errorParser(res.msg, req) };
    }

    return {
        data: res.data,
    };
}
