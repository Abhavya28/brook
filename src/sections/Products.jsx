import { Link } from "react-router-dom";
import Button from "../components/Button";
import products from "../data/products";

const hoverIcons = [
  { icon: "/images/share.svg", label: "Share", href: "#" },
  { icon: "/images/compare.svg", label: "Compare", href: "#" },
  { icon: "/images/like.svg", label: "Like", href: "#" },
];

const Products = () => {
  return (
    <div className="px-6 md:px-20 py-16">
      <h2 className="text-center text-4xl font-bold text-secondary mb-10">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.slice(0, 8).map((product) => (
          <div
            key={product.id}
            className="bg-[#F4F5F7] relative group overflow-hidden"
          >
            {product.badge && (
              <div
                className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold text-white
                ${product.isNew ? "bg-[#2EC1AC]" : "bg-[#E97171]"}`}
              >
                {product.badge}
              </div>
            )}

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-secondary">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mb-2">{product.desc}</p>

              <div className="flex items-center gap-3">
                <span className="text-secondary font-semibold">
                  {product.price}
                </span>

                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    {product.oldPrice}
                  </span>
                )}
              </div>
            </div>


            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-6">
              <button className="bg-white text-primary px-6 py-3 font-semibold">
                Add to Cart
              </button>

              <div className="flex gap-4">
                {hoverIcons.map((icon, index) => (
                  <a
                    key={index}
                    href={icon.href}
                    className="flex items-center gap-2 text-white text-sm"
                  >
                    <img src={icon.icon} alt={icon.label} className="w-5 h-5" />
                    <span>{icon.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center pt-6">
        <Button
          asChild
          className="border-2 border-primary text-primary bg-white"
        >
          <Link to="/shop">Show More</Link>
        </Button>
      </div>
    </div>
  );
};

export default Products;
