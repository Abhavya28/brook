import React from "react";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-end bg-background bg-cover bg-center px-6 md:px-20"
      style={{ backgroundImage: "url('/images/heroBg.jpg')" }}
    >
      <div className="bg-[#FFF3E3] p-6 md:p-10 max-w-xl rounded-lg">
        <div className="pb-6 flex flex-col gap-2">
          <p className="text-secondary tracking-wide">New Arrival</p>

          <h1 className="text-primary text-4xl font-bold leading-tight">
            Transform Your Space <br />
            <span>with Timeless Elegance</span>
          </h1>

          <p className="text-secondary">
            Discover the perfect blend of style, comfort, and quality with Brook
            Furniture
          </p>
        </div>

        <Button className="bg-primary text-white font-bold">
          BUY NOW
        </Button>
      </div>
    </div>
  );
};

export default Hero;
