import { IInstitution } from "@/types/institutions";
import React from "react";
import ActionButton from "../users/ActionButton";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const InstitutionCard = ({
  _id,
  name,
  email,
  amount_of_students,
  city,
  country,
  state,
  description,
  current_forced_state,
  payments_status,
  phone,
}: IInstitution) => {
  function handleDelete() {
    console.log("Deleting institution: " + name);
  }

  return (
    <div className="relative w-full rounded-3xl grid grid-cols-2 gap-y-1 bg-zinc-100/50 overflow-hidden">
      <div className="flex top-0 right-0 items-center absolute w-full justify-between">
        <ActionButton color="danger" onClick={handleDelete} Icon={TrashIcon} />
        <ActionButton
          href={`/dashboard/institutions/${_id}/edit`}
          Icon={PencilIcon}
        />
      </div>

      <div className="p-1 col-span-2 bg-secondary text-center font-semibold text-lg text-light">
        NOMBRE
      </div>
      <p className="p-1 col-span-2 text-center text-secondary">{name}</p>

      <div className="p-1 bg-secondary text-center font-semibold text-lg text-light">
        CORREO
      </div>
      <div className="border-l-2 border-zinc-100 p-1 bg-secondary text-center font-semibold text-lg text-light">
        TELÉFONO
      </div>
      <p className="p-1 text-center text-secondary text-md font-medium text-ellipsis whitespace-nowrap overflow-hidden">
        {email}
      </p>
      <p className="p-1 text-center text-secondary text-md font-medium text-ellipsis whitespace-nowrap overflow-hidden">
        {phone}
      </p>
      <div className="p-1 bg-secondary text-center font-semibold text-lg text-light">
        DESCRIPCIÓN
      </div>
      <div className="border-l-2 border-zinc-100 p-1 bg-secondary text-center font-semibold text-lg text-light">
        PAÍS
      </div>
      <p className="p-1 text-center text-secondary text-md font-medium text-ellipsis whitespace-nowrap overflow-hidden">
        {description}
      </p>
      <p className="p-1 text-center text-secondary text-md font-medium text-ellipsis whitespace-nowrap overflow-hidden">
        {country}
      </p>
      <div className="p-1 bg-secondary text-center font-semibold text-lg text-light">
        DEPARTAMENTO
      </div>
      <div className="border-l-2 border-zinc-100 p-1 bg-secondary text-center font-semibold text-lg text-light">
        CIUDAD
      </div>
      <p className="p-1 text-center text-secondary text-md font-medium text-ellipsis whitespace-nowrap overflow-hidden">
        {state}
      </p>
      <p className="p-1 text-center text-secondary text-md font-medium text-ellipsis whitespace-nowrap overflow-hidden">
        {city}
      </p>

      <div className="p-1 bg-secondary text-center font-semibold text-lg text-light">
        CANTIDAD DE ESTUDIANTES
      </div>
      <div className="border-l-2 border-zinc-100 p-1 bg-secondary text-center font-semibold text-lg text-light">
        ESTADO DE PAGOS
      </div>
      <p className="p-1 text-center text-secondary text-md font-medium text-ellipsis whitespace-nowrap overflow-hidden">
        {amount_of_students}
      </p>
      <p className="p-1 text-center text-secondary text-md font-medium text-ellipsis whitespace-nowrap overflow-hidden">
        {payments_status}
      </p>
      <div className="p-1 col-span-2 bg-secondary text-center font-semibold text-lg text-light">
        ESTADO FORZADO
      </div>
      <p className="p-1 col-span-2 text-center text-secondary">
        {current_forced_state}
      </p>
    </div>
  );
};

export default InstitutionCard;
