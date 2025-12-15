import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import fatawahData from "../Json-data";

export default function MujtahideenSlider() {
  const images = useMemo(() => {
    return Array.from(
      new Map(
        fatawahData
          .filter((item) => item.mujtahid?.logoUrl)
          .map((item) => [item.mujtahid.name, item.mujtahid.logoUrl])
      ).values()
    );
  }, []);

  if (!images.length) return null;

  return (
    <div className="mt-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={3}
        spaceBetween={25}
        centeredSlides
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".mujtahid-pagination",
        }}
        className="max-w-md mx-auto"
        dir="rtl"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <div
                className={`
                  flex justify-center items-center
                  transition-all duration-500
                  ${isActive ? "scale-110" : "scale-90 opacity-60"}
                `}
              >
                <div
                  className={`
                    p-3 rounded-full
                    ${isActive ? "bg-white shadow-xl" : "bg-white/70"}
                  `}
                >
                  <img
                    src={img}
                    alt="Mujtahid"
                    className={`
                      w-20 h-20 rounded-full object-cover
                      border-4
                      ${
                        isActive
                          ? "border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.35)]"
                          : "border-blue-200"
                      }
                    `}
                  />
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination spacing */}
      <div className="mujtahid-pagination mt- flex justify-center gap-2" />
    </div>
  );
}
