const featureList = [
  {
    img: "./images/trophy.svg",
    label: "High Quality",
    description: "Crafted from top materials",
  },
  {
    img: "./images/guarantee.svg",
    label: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    img: "./images/shipping.svg",
    label: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    img: "./images/support.svg",
    label: "24 / 7 Support",
    description: "Dedicated support",
  },
];

const Features = () => {
  return (
    <div className="pt-8">
      <div className="bg-[#FAF3EA] px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {featureList.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 items-center justify-center sm:justify-start"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-10 h-10"
              />

              <div>
                <h1 className="text-lg md:text-xl font-bold text-secondary">
                  {item.label}
                </h1>
                <p className="text-sm md:text-base text-[#898989]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
