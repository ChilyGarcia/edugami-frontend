import Image, { StaticImageData } from "next/image";
import React from "react";
import Button from "../button/Button";

export interface IARCardProps {
  id: number;
  title: string;
  image: StaticImageData | string;
  href: string;
}

const ARCard = ({ title, image, href }: IARCardProps) => {
  const sessionId = window.localStorage.getItem("session-id");

  return (
    <a
      href={`${process.env.NEXT_PUBLIC_AR_URL}${href}?cb_url=${window.location}&session_id=${sessionId}`}
      className="max-w-[320px] w-full rounded-2xl p-6 flex flex-col items-center bg-slate-300"
    >
      <h3 className="text-center font-bold text-3xl text-primary">{title}</h3>
      <img
        width={1000}
        height={1000}
        src={image as unknown as string}
        alt={`Imagen de ${title}`}
        className="w-full aspect-square object-contain"
      />
      <Button hierarchy="primary">Empezar</Button>
    </a>
  );
};

export default ARCard;
