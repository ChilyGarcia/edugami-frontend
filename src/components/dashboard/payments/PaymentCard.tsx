import useFetchInstitution from "@/hooks/useFetchInstitution";
import { IPayment } from "@/types/payments";
import { decimalFormatter, priceFormatter } from "@/utils/formatters";
import React from "react";

const PaymentCard = ({
  _id,
  paid_at,
  ammount_paid: amount_paid,
  due_date,
  institution_id,
  student_number_agreement,
  value_per_student_when_performed,
}: IPayment) => {
  const institution = useFetchInstitution(institution_id);

  return (
    <div className="w-full rounded-3xl grid grid-cols-2 gap-y-1 bg-zinc-100/50 overflow-hidden">
      <div className="p-1 col-span-2 bg-secondary text-center font-semibold text-lg text-light">
        ID
      </div>
      <p className="p-1 col-span-2 font-medium text-center text-secondary">
        {_id}
      </p>

      <div className="p-1 bg-secondary text-center font-semibold text-lg text-light">
        INSTITUCIÓN
      </div>
      <div className="p-1 bg-secondary text-center font-semibold text-lg text-light">
        ESTUDIANTES
      </div>
      <p className="p-1 text-center text-secondary text-md font-medium text-ellipsis whitespace-nowrap overflow-hidden">
        {institution ? institution.data.name : "Cargando..."}
      </p>
      <p className="p-1 text-center text-secondary text-md font-medium text-ellipsis whitespace-nowrap overflow-hidden">
        {decimalFormatter.format(student_number_agreement)}
      </p>

      <div className="p-1 bg-secondary text-center font-semibold text-lg text-light">
        FECHA DE PAGO
      </div>
      <div className="p-1 bg-secondary text-center font-semibold text-lg text-light">
        VENCIMIENTO
      </div>
      <p className="p-1 text-center text-secondary text-md font-medium text-ellipsis whitespace-nowrap overflow-hidden">
        {paid_at.toString().substring(0, 10)}
      </p>
      <p className="p-1 text-center text-secondary text-md font-medium text-ellipsis whitespace-nowrap overflow-hidden">
        {due_date.toString().substring(0, 10)}
      </p>

      <div className="p-1 bg-secondary text-center font-semibold text-lg text-light">
        CANTIDAD
      </div>
      <div className="p-1 bg-secondary text-center font-semibold text-lg text-light">
        X ESTUDIANTE
      </div>
      <p className="p-1 text-center text-secondary text-md font-medium text-ellipsis whitespace-nowrap overflow-hidden">
        {priceFormatter.format(amount_paid)}
      </p>
      <p className="p-1 text-center text-secondary text-md font-medium text-ellipsis whitespace-nowrap overflow-hidden">
        {priceFormatter.format(value_per_student_when_performed)}
      </p>

      <div className="p-1 col-span-2 bg-secondary text-center font-semibold text-lg text-light">
        ESTADO DEL PAGO
      </div>
      <p className="p-1 col-span-2 font-medium text-center text-secondary">
        PREGUNTAR
      </p>
    </div>
  );
};

export default PaymentCard;
