import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const inspirations = [
  {
    id: 1,
    image: "/images/inspirations/1.png",
    title: "Inner Peace",
    subtitle: "01 — Bed Room",
  },
  {
    id: 2,
    image: "/images/inspirations/2.png",
    title: "Minimal Vibes",
    subtitle: "02 — Living Room",
  },
  {
    id: 3,
    image: "/images/inspirations/3.png",
    title: "Modern Look",
    subtitle: "03 — Dining",
  },
  {
    id: 4,
    image: "/images/inspirations/4.png",
    title: "Cozy Corner",
    subtitle: "04 — Workspace",
  },
];

const Inspirations = () => {
  return (
    <section className="bg-[#FCF8F3] px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        <div className="lg:w-[30%] flex flex-col gap-6 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
            50+ Beautiful rooms inspiration
          </h2>

          <p className="text-[#616161] text-sm sm:text-base">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>

          <button className="bg-primary text-white px-8 py-4 w-fit mx-auto lg:mx-0">
            Explore More
          </button>
        </div>

        <div className="lg:w-[70%] w-full">
          <Swiper
            modules={[Navigation]}
            navigation
            loop={true}
            speed={700}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
            }}
            className="inspiration-swiper"
          >
            {inspirations.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[420px] object-cover"
                  />

                  <div className="absolute bottom-6 left-6 bg-white px-6 py-4 w-52">
                    <p className="text-sm text-footer">{item.subtitle}</p>
                    <h3 className="text-xl font-semibold text-secondary">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Inspirations;
