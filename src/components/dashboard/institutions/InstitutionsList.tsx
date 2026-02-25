import React from "react";
import { IUser } from "@/types/users";
import InstitutionCard from "./InstitutionCard";
import { IInstitution } from "@/types/institutions";

interface IProps {
  institutions: IInstitution[];
}

const InstitutionsList = ({ institutions }: IProps) => {
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(350px,1fr))] gap-4 pb-8">
      {institutions.length ? (
        institutions.map((institution) => (
          <InstitutionCard key={institution._id} {...institution} />
        ))
      ) : (
        <p>No hay instituciones</p>
      )}
    </div>
  );
};

export default InstitutionsList;
