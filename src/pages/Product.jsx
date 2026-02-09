import { useParams } from "react-router-dom";
import products from "../data/products";
import Button from "../components/Button";
import { useState } from "react";

const Product = () => {
  const [activeSize, setActiveSize] = useState(null);
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <p className="text-center pt-20">Product not found</p>;
  }

  return (
    <div className="w-full pt-10 pb-10">
      {/* BREADCRUMB */}
      <div className="w-full bg-[#F9F1E7] px-4 sm:px-6 md:px-12 lg:px-20 py-4 flex gap-3 items-center text-sm sm:text-base">
        <p className="text-footer">Home</p>
        <img src="/images/right-arrow-line.svg" alt="" className="w-4" />
        <p className="text-footer">Shop</p>
        <img src="/images/right-arrow-line.svg" alt="" className="w-4" />
        <p className="font-medium">{product.name}</p>
      </div>

      {/* PRODUCT DETAILS */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-64 sm:w-72 md:w-80 lg:w-96 object-contain"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            {product.name}
          </h1>

          <p className="text-base sm:text-lg text-footer">
            Rs. {product.price}
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            {product.desc}
          </p>

          {/* SIZE */}
          <div className="flex flex-col gap-3">
            <p className="text-footer text-sm">Size</p>
            <div className="flex gap-3">
              {["S", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setActiveSize(size)}
                  className={`w-10 h-10 text-sm font-medium transition
                    ${
                      activeSize === size
                        ? "bg-primary text-white"
                        : "bg-[#F9F1E7]"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* COLORS */}
          <div className="flex flex-col gap-3">
            <p className="text-footer text-sm">Color</p>
            <div className="flex gap-4">
              <span className="w-6 h-6 rounded-full bg-[#816DFA] cursor-pointer" />
              <span className="w-6 h-6 rounded-full bg-black cursor-pointer" />
              <span className="w-6 h-6 rounded-full bg-primary cursor-pointer" />
            </div>
          </div>

          {/* BUTTON */}
          <Button className="border border-black bg-white w-fit px-8 py-3 mt-2">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
