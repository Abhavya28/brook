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
    <div className="relative w-full pt-12 pb-4">
      <div className="w-full flex gap-4 bg-[#F9F1E7] p-10 items-center">
        <p className="text-footer">Home</p>
        <img src="/images/right-arrow-line.svg" alt="" />
        <p className="text-footer">Shop</p>
        <img src="/images/right-arrow-line.svg" alt="" />
        <p className="font-medium">{product.name}</p>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-80 md:w-80 lg:w-96 mx-auto object-contain"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-lg text-footer">Rs. {product.price}</p>
          <p className="text-sm">{product.desc}</p>

          {/* Size */}
          <div className="flex flex-col gap-3">
            <p className="text-footer text-sm">Size</p>
            <div className="flex gap-3">
              {["S", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setActiveSize(size)}
                  className={`w-10 h-10 bg-[#F9F1E7]
    ${activeSize === size ? "bg-primary text-white" : ""}
  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="flex flex-col gap-3">
            <p className="text-footer text-sm">Color</p>
            <div className="flex gap-4">
              <span className="w-6 h-6 rounded-full bg-[#816DFA]" />
              <span className="w-6 h-6 rounded-full bg-black" />
              <span className="w-6 h-6 rounded-full bg-primary" />
            </div>
          </div>

          <Button className="border border-black bg-white w-fit px-10">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
