"use client";

import { useState } from "react";
import CustomMain from "@/components/layout/CustomMain";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";
import ModalComponent from "@/components/modal/ModalComponent";

const slidesData = [
  {
    image: "/img/cells-image.png",
    title: "Células",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    actionType: "route",
    actionValue: "/cells",
  },
  {
    image: "/img/adn-image.png",
    title: "ADN",
    description:
      "Descubre la estructura y función del ADN, la molécula de la vida.",
    actionType: "modal",
    actionValue: "adnModal",
  },
  {
    image: "/img/zancudo-image.png",
    title: "Mosquitos",
    description:
      "Explora el mundo de los mosquitos y su impacto en la salud humana.",
    actionType: "modal",
    actionValue: "adnModal",
  },
  {
    image: "/img/atomo-image.png",
    title: "Átomos",
    description: "Comprende la base de toda la materia en el universo.",
    actionType: "modal",
    actionValue: "adnModal",
  },
  {
    image: "/img/terremoto-image.png",
    title: "Terremotos",
    description:
      "Aprende sobre los movimientos sísmicos y su impacto en el planeta.",
    actionType: "modal",
    actionValue: "adnModal",
  },
  {
    image: "/img/planetas-image.png",
    title: "Planetas",
    description: "Explora los planetas de nuestro sistema solar y más allá.",
    actionType: "modal",
    actionValue: "adnModal",
  },
  {
    image: "/img/rana-image.png",
    title: "Ranas",
    description: "Descubre el fascinante mundo de las ranas y su ecosistema.",
    actionType: "modal",
    actionValue: "adnModal",
  },
  {
    image: "/img/serpiente-image.png",
    title: "Serpientes",
    description:
      "Aprende sobre las especies de serpientes y su importancia ecológica.",
    actionType: "modal",
    actionValue: "adnModal",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleAction = () => {
    const currentSlide = slidesData[activeSlide];
    if (currentSlide.actionType === "route") {
      router.push(currentSlide.actionValue);
    } else if (currentSlide.actionType === "modal") {
      setIsModalOpen(true);
    }
  };

  return (
    <CustomMain>
      <section className="min-h-[calc(75vh)] flex flex-col items-center justify-start relative">
        <div className="mt-0">
          <img
            src="/img/edugami-welcome.png"
            className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
          />
        </div>

        <div className="mt-2 max-w-lg text-left text-white p-4">
          <h2 className="text-2xl font-bold italic">Bienvenidos a</h2>
          <p className="text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
        </div>

        <div className="relative bg-[#14224B] rounded-t-3xl pt-6 pb-16 px-6 w-full max-w-sm mt-6 overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-start mb-4 text-white mt-6">
              Explora
            </h3>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              spaceBetween={-50}
              coverflowEffect={{
                rotate: 0,
                stretch: 10,
                depth: 200,
                modifier: 1,
                slideShadows: false,
                scale: 0.8,
              }}
              pagination={false}
              modules={[EffectCoverflow, Pagination]}
              className="rounded-lg"
              onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            >
              {slidesData.map((slide, index) => (
                <SwiperSlide
                  key={index}
                  className="w-[200px] md:w-[240px] flex flex-col items-center"
                >
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={slide.image}
                      className="rounded-xl"
                      alt={slide.title}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-2 max-w-lg text-center text-white mx-auto">
              <h2 className="text-2xl font-bold italic mb-2">
                {slidesData[activeSlide].title}
              </h2>
              <p className="leading-relaxed">
                {slidesData[activeSlide].description}
              </p>
            </div>

            <div className="flex justify-center mt-4 mb-8">
              <button
                onClick={handleAction}
                className="bg-[#005BDA] hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-sm"
              >
                Empezar
              </button>
            </div>
          </div>

          <img
            src="/img/hojas-card.png"
            alt="Hojas decorativas"
            className="absolute bottom-0 left-0 w-full object-contain z-0"
          />
        </div>

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
      </section>
    </CustomMain>
  );
}
