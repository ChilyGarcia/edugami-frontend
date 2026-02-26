"use client";

import CustomMain from "@/components/layout/CustomMain";
import Sign from "@/components/general/Sign";
import Link from "next/link";

export default function NoAccountPage() {
  return (
    <CustomMain>
      <section className="min-h-screen flex flex-col items-center justify-center p-4">
        <Sign label="Más información" />
        <div className="mt-8 text-center max-w-lg">
          <p className="text-light mb-6">
            Si aún no tienes una cuenta para acceder a Edugami, contacta a tu
            institución o administrador para recibir tus credenciales de acceso.
          </p>
          <Link
            href="/login"
            className="text-links underline-offset-0 text-lg font-semibold"
          >
            Volver al inicio de sesión
          </Link>
        </div>
      </section>
    </CustomMain>
  );
}
