import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import fatawahData from "../../Json-data";

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
    <div className="mt-2 w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        centeredSlides
        loop
        dir="rtl"
        spaceBetween={6}
        autoplay={{
          delay: 2200,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".mujtahid-pagination",
        }}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        className="max-w-md mx-auto"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <div
                className={`
                  flex justify-center items-center
                  transition-all duration-300
                  ${isActive ? "scale-105" : "scale-95 opacity-70"}
                `}
              >
                <div
                  className={`
                    p-1.5 sm:p-2 rounded-full
                    ${isActive ? "bg-white shadow-md" : "bg-white/60"}
                  `}
                >
                  <img
                    src={img}
                    alt="Mujtahid"
                    className={`
                      w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18
                      rounded-full object-cover
                      border
                      ${
                        isActive
                          ? " shadow-[0_0_12px_rgba(59,130,246,0.3)]"
                          : ""
                      }
                    `}
                  />
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div className="mujtahid-pagination mt-3 flex justify-center gap-2" />
    </div>
  );
}
