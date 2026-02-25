import React from "react";
import { IUser } from "@/types/users";
import { IInstitution } from "@/types/institutions";
import PaymentCard from "./PaymentCard";
import { IPayment } from "@/types/payments";

interface IProps {
  payments: IPayment[];
}

const PaymentsList = ({ payments }: IProps) => {
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(350px,1fr))] gap-4 pb-8">
      {payments.length ? (
        payments.map((payment) => (
          <PaymentCard key={payment._id} {...payment} />
        ))
      ) : (
        <p>No hay pagos</p>
      )}
    </div>
  );
};

export default PaymentsList;
