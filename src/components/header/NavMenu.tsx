import { useUserStore } from "@/zustand/useUserStore";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "../button/Button";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import ModalComponent from "@/components/modal/ModalComponent";
import { useRouter } from "next/navigation";

interface IProps {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const NavMenu = ({ toggle, setToggle }: IProps) => {
  const { user } = useUserStore();
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const router = useRouter();

  function closeModal() {
    setToggle(false);
  }

  function handleSignOut() {
    toast.info("Arrivederci!");
    console.log("SignOut!");
  }

  useEffect(() => {
    closeModal();
  }, [pathname]);

  const subCategories = [
    {
      name: "Células",
      path: "/cells",
      icon: "/icons/celulas-icon.png",
      iconWidth: 18,
      iconHeight: 18,
      action: "route",
    },
    {
      name: "Átomos",
      path: "/atomos",
      icon: "/icons/atomo-icon.png",
      iconWidth: 18,
      iconHeight: 18,
      action: "modal",
    },
    {
      name: "Reino animal",
      path: "/reino-animal",
      icon: "/icons/animal-icon.png",
      iconWidth: 18,
      iconHeight: 18,
      action: "modal",
    },
    {
      name: "Geología",
      path: "/geologia",
      icon: "/icons/geologia-icon.png",
      iconWidth: 18,
      iconHeight: 18,
      action: "modal",
    },
    {
      name: "ADN",
      path: "/adn",
      icon: "/icons/adn-icon.png",
      iconWidth: 16,
      iconHeight: 20,
      action: "modal",
    },
  ];

  return (
    <div
      className="fixed top-0 right-0 z-50 w-full h-full flex justify-end"
      style={{
        transition: "transform .3s",
        transform: `translateX(${toggle ? 0 : 100}%)`,
      }}
    >
      <div
        className="bg-dark/60 backdrop-blur-sm absolute top-0 left-0 w-full h-full z-0"
        style={{
          transition: "opacity 0.5s",
          opacity: toggle ? 1 : 0,
        }}
        onClick={closeModal}
      />
      {user ? (
        <div className="w-5/6 max-w-sm h-full bg-secondary right-0 gap-6 relative flex flex-col justify-center items-center">
          <h6>Debes iniciar sesión</h6>
          <div>
            <Button href="/login" hierarchy="primary">
              Iniciar sesión
            </Button>
          </div>
        </div>
      ) : (
        <div className="w-5/6 max-w-sm h-full bg-[#253465] text-white flex flex-col overflow-y-auto relative">
          <div className="w-full flex justify-end p-4">
            <button onClick={closeModal}>
              <XMarkIcon className="h-7 w-7" />
            </button>
          </div>

          <div className="px-6 mb-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-cover bg-center bg-purple-900 bg-[url(/cards/celula-animal.png)]"></div>
              <div className="overflow-hidden">
                <h4 className="font-semibold text-xl truncate">Usuario</h4>
                <p className="text-sm truncate text-gray-200/80">
                  email@gmail.com
                </p>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-medium">Hola, Usuario</h5>
              <div className="flex items-center gap-2 text-gray-200/80 mt-1">
                <RocketLaunchIcon className="h-5 w-5" />
                <p className="text-sm">Nivel 01</p>
              </div>
            </div>
          </div>

          <nav className="flex-1">
            <ul className="flex flex-col text-md">
              <li className="px-6 py-3 hover:bg-[#2F3F59] transition-colors">
                <Link href={"/"} className="flex items-center gap-3">
                  <img src="/icons/inicio-icon.png" className="w-6" />
                  <span className="font-semibold">INICIO</span>
                </Link>
              </li>

              <li className="px-6 py-3  transition-colors relative">
                <button
                  onClick={() => setShowCategories(!showCategories)}
                  className="flex items-center gap-3 cursor-pointer w-full text-left focus:outline-none"
                >
                  <img src="/icons/categorias-icon.png" className="w-6" />
                  <span className="font-semibold">CATEGORÍAS</span>
                  <ChevronDownIcon
                    className={`h-4 w-4 ml-auto transform transition-transform ${
                      showCategories ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {showCategories && (
                  <div className="relative text-sm">
                    <svg
                      className="absolute left-0 top-0"
                      width="60"
                      height="220"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 20 L20 50 Q20 55, 25 55 L45 55"
                        stroke="#6b7280"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 50 L20 80 Q20 85, 25 85 L45 85"
                        stroke="#6b7280"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 80 L20 110 Q20 115, 25 115 L45 115"
                        stroke="#6b7280"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 110 L20 140 Q20 145, 25 145 L45 145"
                        stroke="#6b7280"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 140 L20 170 Q20 175, 25 175 L45 175"
                        stroke="#6b7280"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <div className="pt-10">
                      <ul className="relative pl-12 space-y-3">
                        {subCategories.map((item) => {
                          const isActive = pathname === item.path;
                          return (
                            <li key={item.path}>
                              {item.action === "modal" ? (
                                <button
                                  onClick={() => setIsModalOpen(true)}
                                  className={`transition-colors flex items-center gap-2 ${
                                    isActive
                                      ? "text-white font-semibold"
                                      : "hover:text-gray-200"
                                  }`}
                                >
                                  <img
                                    src={item.icon}
                                    alt={item.name}
                                    style={{
                                      width: item.iconWidth,
                                      height: item.iconHeight,
                                    }}
                                  />
                                  {item.name}
                                </button>
                              ) : (
                                <Link
                                  href={item.path}
                                  className={`transition-colors flex items-center gap-2 ${
                                    isActive
                                      ? "text-white font-semibold"
                                      : "hover:text-gray-200"
                                  }`}
                                >
                                  <img
                                    src={item.icon}
                                    alt={item.name}
                                    style={{
                                      width: item.iconWidth,
                                      height: item.iconHeight,
                                    }}
                                  />
                                  {item.name}
                                </Link>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                )}
              </li>

              <li className="px-6 py-3 hover:bg-[#2F3F59] transition-colors">
                <Link href={"#"} className="flex items-center gap-3">
                  <img src="/icons/nosotros-icon.png" className="w-6" />
                  <span className="font-semibold">NOSOTROS</span>
                </Link>
              </li>

              <li className="px-6 py-3 hover:bg-[#2F3F59] transition-colors">
                <Link href={"#"} className="flex items-center gap-3">
                  <img src="/icons/contacto-icon.png" className="h-6 w-6" />
                  <span className="font-semibold">CONTACTO</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-auto bg-[#1C2951]">
            <button
              onClick={handleSignOut}
              className="w-full px-6 py-8 flex items-center gap-3 text-left hover:bg-[#2F3F59] transition-colors"
            >
              <img src="/icons/cerrar-icon.png" className="w-6" />
              <span className="font-semibold text-[#ffffff7e]">
                Cerrar Sesión
              </span>
            </button>
          </div>
        </div>
      )}

      <ModalComponent
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="w-[154px] h-[154px] bg-white border border-[#14224B] rounded-full flex items-center justify-center mb-4">
          <img
            src="/img/mono-modal.png"
            alt="Avatar Edugami"
            className="w-36 h-36 object-contain"
          />
        </div>

        <h2 className="text-white text-center text-xl font-bold mb-2">
          ¿Aún no has iniciado sesión?
        </h2>

        <p className="text-white text-center mb-4 leading-normal">
          ¡<span className="font-bold">Aprende jugando</span> con realidad
          aumentada! Crea tu cuenta y{" "}
          <span className="font-bold">vive increíbles aventuras</span>{" "}
          educativas.
        </p>

        <button
          onClick={() => {
            router.push("/login");
            setIsModalOpen(false);
          }}
          className="bg-[#005BDA] hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-sm"
        >
          Iniciar Sesión
        </button>
      </ModalComponent>
    </div>
  );
};

export default NavMenu;
