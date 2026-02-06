import { useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % inspirations.length);
  };

  return (
    <section className="bg-[#FCF8F3] px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="lg:w-[30%] flex flex-col gap-6 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary leading-snug">
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

        {/* SLIDER */}
        <div className="lg:w-[70%] relative overflow-hidden w-full">
          <div
            className="flex gap-4 sm:gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${
                activeIndex * (window.innerWidth < 640 ? 260 : 360)
              }px)`,
            }}
          >
            {inspirations.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  className={`relative flex-shrink-0 rounded-lg overflow-hidden transition-all
                  ${
                    isActive
                      ? "w-[260px] h-[340px] sm:w-[360px] sm:h-[460px] md:w-[420px] md:h-[520px]"
                      : "w-[200px] h-[280px] sm:w-[280px] sm:h-[380px] mt-10 sm:mt-16"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  {isActive && (
                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white px-4 sm:px-6 py-3 sm:py-4 w-44 sm:w-52">
                      <p className="text-xs sm:text-sm text-footer">
                        {item.subtitle}
                      </p>
                      <h3 className="text-base sm:text-xl font-semibold text-secondary">
                        {item.title}
                      </h3>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* NEXT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2
                       bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow
                       flex items-center justify-center transition z-20"
          >
            <img src="/images/right-arrow-line.svg" alt="next" />
          </button>

          {/* DOTS */}
          <div className="flex gap-3 mt-6 sm:mt-8 justify-center">
            {inspirations.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full
                ${index === activeIndex ? "bg-primary" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspirations;
