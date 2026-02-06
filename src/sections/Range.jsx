const rangeLinks = [
  { img: "/images/dining.png", label: "Dining" },
  { img: "/images/living.png", label: "Living" },
  { img: "/images/bedroom.png", label: "Bedroom" },
];

const Range = () => {
  return (
    <div className="py-20 px-6 md:px-20 text-center">
      <h1 className="text-secondary font-bold text-3xl">
        Browse The Range
      </h1>
      <p className="text-primary mt-2">
        Discover Furniture Crafted for Every Room in Your Home
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {rangeLinks.map((range, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 items-center"
          >
           
            <div className="overflow-hidden rounded-lg">
              <img
                src={range.img}
                alt={range.label}
                className="w-full h-full object-cover transition"
              />
            </div>

            <p className="text-2xl text-secondary font-medium">
              {range.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Range;
