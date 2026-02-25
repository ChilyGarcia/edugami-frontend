import sessionExpiredChecker from "@/handlers/401Checker";
import { IFetchAPIResponse } from "@/types/customInterfaces";
import { IUser, TUserRole } from "@/types/users";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

export interface IFetchUsersParams {
  page: number;
  search?: string;
  sort_by?: "role" | "name" | "email" | "last_name";
  institution_id?: string;
  sort?: "asc" | "desc";
  limit?: number;
  roles?: TUserRole[];
  user_id?: string;
}

const useFetchUsers = (params: IFetchUsersParams) => {
  const [state, setState] = useState<IFetchAPIResponse<IUser[]> | null>(null);

  async function handleFetchUsers({
    page = 1,
    search = "",
    sort = "asc",
    sort_by = "name",
    limit = 2,
    institution_id = "",
    roles = ["STUDENT"],
    user_id = "",
  }: IFetchUsersParams) {
    setState(null);
    const apiURL = process.env.NEXT_PUBLIC_API_URL;
    const endpoint = "/user";
    let users: IUser[] = [];
    let params = "";

    if (page) params += `?page=${page}`;
    if (sort) params += `&sort=${sort}`;
    if (sort_by) params += `&sort_by=${sort_by}`;
    if (limit) params += `&limit=${limit}`;
    if (search) params += `&search=${search}`;
    if (institution_id) params += `&institution_id=${institution_id}`;
    if (user_id) params += `&user_id=${user_id}`;

    console.log(params);
    const req = await fetch(apiURL + endpoint + params, {
      method: "GET",
      credentials: "include",
    });

    sessionExpiredChecker(req);
    const res = await req.json();

    if (!req.ok) {
      return toast.error(res.msg);
    }
    users = res.data as IUser[];

    if (roles) {
      users = users.filter((e) => [...roles].includes(e.role));
    }

    setState({ ...res, data: users });
  }

  useEffect(() => {
    handleFetchUsers(params);
  }, [params]);

  return state;
};

export default useFetchUsers;
