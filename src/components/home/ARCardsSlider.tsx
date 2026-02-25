"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useSearchParams } from "next/navigation";
import ARCard, { IARCardProps } from "./ARCard";

interface IProps {
  data: IARCardProps[];
}

const ARCardsSlider = ({ data }: IProps) => {
  const query = useSearchParams().get("query");
  const [filteredData, setFilteredData] = useState<IARCardProps[]>(data);

  function castString(str: string) {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  useEffect(() => {
    if (query) {
      setFilteredData(
        data.filter((e) => castString(e.title).includes(castString(query)))
      );
    } else {
      setFilteredData(data);
    }
  }, [query, data]);

  return (
    <div className="w-full relative">
      <div className="absolute pointer-events-none w-full flex justify-between left-0 top-0 h-full z-10">
        <div className="w-1/6 bg-gradient-to-r from-secondary to-transparent h-full"></div>
        <div className="w-1/6 bg-gradient-to-l from-secondary to-transparent h-full"></div>
      </div>

      {filteredData.length ? (
        <Swiper
          spaceBetween={0}
          slidesPerView={1.3}
          // slideActiveClass=""
          centeredSlides
          loop
          className="relative justify-center w-full flex"
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1.3,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
            },
          }}
        >
          {filteredData.map((card) => (
            <SwiperSlide key={card.id}>
              <ARCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="text-center opacity-80">
          No hay coincidencias con la búsqueda 😔
        </div>
      )}
    </div>
  );
};

export default ARCardsSlider;
