import React from "react";
import UserCard from "./UserCard";
import { IUser } from "@/types/users";

interface IProps {
  users: IUser[];
}

const UsersList = ({ users }: IProps) => {
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(350px,1fr))] gap-4 pb-8">
      {users.length ? (
        users.map((user) => <UserCard key={user.email} {...user} />)
      ) : (
        <p>No hay estudiantes</p>
      )}
    </div>
  );
};

export default UsersList;
