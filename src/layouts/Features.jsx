const featureList = [
  {
    img: "./images/trophy.svg",
    label: "High Quality",
    description: "crafted from top materials",
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
       <div className="bg-[#FAF3EA] flex gap-16 items-center px-8 py-16 justify-center">
        {featureList.map((item, index) => (
          <div className="flex gap-4">
            <div>
              <img src={item.img} alt={item.label} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{item.label}</h1>
              <p className="text-xl text-[#898989]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features;
