import { IUser } from "@/types/users";
import React, { useEffect, useState } from "react";
import ActionButton from "./ActionButton";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import handleFetchInstitutions from "@/handlers/institutions/handleFetchInstitutions";
import { toast } from "sonner";
import useFetchInstitution from "@/hooks/useFetchInstitution";
import handleDeleteUser from "@/handlers/user/handleDeleteUser";

const UserCard = ({
  name,
  email,
  institution_user_data,
  role,
  username,
  last_name,
  _id,
  created_at,
  last_modified_at,
}: IUser) => {
  const institution = useFetchInstitution(
    institution_user_data?.institution_id
  );

  async function deleteUser() {
    await handleDeleteUser(_id);
  }

  return (
    <div className="relative w-full rounded-3xl grid grid-cols-2 grid-rows-8 bg-zinc-100/50 overflow-hidden">
      <div className="flex top-0 right-0 items-center absolute w-full justify-between">
        <ActionButton color="danger" onClick={deleteUser} Icon={TrashIcon} />
        <ActionButton href={`/dashboard/users/${_id}/edit`} Icon={PencilIcon} />
      </div>

      <div className="p-1 col-span-2 bg-secondary text-center font-semibold text-lg text-light">
        NOMBRE
      </div>
      <p className="p-1 col-span-2 text-center text-secondary">
        {last_name} {name}
      </p>

      <div className="p-1 col-span-2 bg-secondary text-center font-semibold text-lg text-light">
        CORREO
      </div>
      <p className="p-1 col-span-2 text-center text-secondary text-md font-medium text-ellipsis whitespace-nowrap overflow-hidden">
        {email}
      </p>

      <div className="p-1 bg-secondary text-center font-semibold text-lg text-light">
        DI
      </div>
      <div className="border-l-2 border-zinc-100 p-1 bg-secondary text-center font-semibold text-lg text-light">
        ÚLTIMA SESIÓN
      </div>
      <p className="p-1 text-center text-secondary text-md font-medium text-ellipsis whitespace-nowrap overflow-hidden">
        {institution_user_data
          ? `${institution_user_data?.doc_type} ${institution_user_data?.doc_number}`
          : "-"}
      </p>
      <p className="p-1 text-center text-secondary text-md font-medium text-ellipsis whitespace-nowrap overflow-hidden">
        {last_modified_at.toString().substring(0, 10)}
      </p>
      <div className="p-1 bg-secondary text-center font-semibold text-lg text-light">
        INSTITUCIÓN
      </div>
      <div className="border-l-2 border-zinc-100 p-1 bg-secondary text-center font-semibold text-lg text-light">
        ROL
      </div>
      <p className="p-1 text-center text-secondary text-md font-medium text-ellipsis whitespace-nowrap overflow-hidden">
        {institution ? institution.data.name : "Cargando..."}
      </p>
      <p className="p-1 text-center text-secondary text-md font-medium text-ellipsis whitespace-nowrap overflow-hidden">
        {role}
      </p>
    </div>
  );
};

export default UserCard;
