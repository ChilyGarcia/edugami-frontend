"use client";

import Button from "@/components/button/Button";
import CustomForm from "@/components/form/CustomForm";
import InputText from "@/components/form/InputText";
import LeavesBackground from "@/components/general/LeavesBackground";
import Sign from "@/components/general/Sign";
import CustomMain from "@/components/layout/CustomMain";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import handleGetSession from "@/handlers/auth/handleGetSession";
import handleLogin, { ILoginData } from "@/handlers/auth/handleLogin";
import { IUser } from "@/types/users";
import { loginValidationSchema } from "@/validations/authValidations";
import { useUserStore } from "@/zustand/useUserStore";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

const initialValues: ILoginData = {
  email: "02mwkp@gmail.com",
  password: "12345",
};

export default function Login() {
  const router = useRouter();
  const { setUser, setLoading, setError } = useUserStore();
  const searchParams = useSearchParams();
  const cbPathname = searchParams.get("cb_pathname");

  async function handleSubmit(values: ILoginData) {
    setLoading();
    const loginRes = await handleLogin(values);

    if (loginRes.error) {
      toast(loginRes.error);
      return setError(loginRes.error);
    }

    const sessionData = await handleGetSession();

    if (sessionData.error) {
      return toast.error(sessionData.error);
    }

    toast.success(`Bienvenido ${sessionData.data.username}`);

    if ((sessionData.data as IUser).role === "STUDENT") {
      window.localStorage.setItem("session-id", loginRes.data);
    }

    setUser(sessionData.data);

    if (cbPathname) {
      return router.push(cbPathname);
    }
    router.push("/");
  }

  return (
    <CustomMain>
      <section className="min-h-screen flex flex-col">
        <LeavesBackground />

        <div className="relative bottom-4">
          <Sign label="Iniciar Sesión" />
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex flex-col items-center flex-1">
            <div className="text-center">
              <p className="font-light">
                Utiliza la cuenta que recibiste para ingresar
              </p>
              <Link
                href="/no-account"
                className="text-links underline-offset-0 text-lg font-semibold"
              >
                Más Información
              </Link>
            </div>

            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={loginValidationSchema}
            >
              <CustomForm>
                <InputText name="email" label="Usuario" />
                <div className="w-full">
                  <InputText name="password" label="Clave" type="password" />
                  <a
                    className="text-links mt-1 inline-block text-left w-full underline-offset-0 font-semibold"
                    target="_blank"
                    href="https://wa.me/000000000000"
                  >
                    ¿Has olvidado tu clave?
                  </a>
                </div>
                <div className="mt-8 z-[9999]">
                  <Button type="submit" hierarchy="primary">
                    Ingresar
                  </Button>
                </div>
              </CustomForm>
            </Formik>
          </div>
          <div className="flex justify-end self-end z-[999]">
            <div className="flex flex-col items-center justify-center bg-transparent text-center rounded-lg  mb-12 mr-4">
              <label className=" text-xs font-semibold text-white">
                Únete a nosotros para recibir contenido premium.
              </label>
              <button className="px-4 mt-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                Suscribirme
              </button>
            </div>
            <img
              src="/img/mono-edugami.png"
              className="w-auto md:h-[200px] lg:h-[250px]"
            />
          </div>
        </div>
      </section>
    </CustomMain>
  );
}
