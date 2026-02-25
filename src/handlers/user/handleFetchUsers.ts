import { IFetchUsersParams } from "@/hooks/useFetchUsers";
import { IUser } from "@/types/users";
import { toast } from "sonner";
import sessionExpiredChecker from "../401Checker";

export async function handleFetchUsers({
  page = 1,
  search = "",
  sort = "asc",
  sort_by = "name",
  limit = 2,
  institution_id = "",
  roles = ["STUDENT"],
  user_id = "",
}: IFetchUsersParams) {
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

  return { ...res, data: users };
}
