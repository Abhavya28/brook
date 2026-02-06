import { useState } from "react";
import products from "../data/products";
import Button from "../components/Button";
import Features from "../layouts/Features";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";

const hoverIcons = [
  { icon: "/images/share.svg", label: "Share", href: "#" },
  { icon: "/images/compare.svg", label: "Compare", href: "#" },
  { icon: "/images/like.svg", label: "Like", href: "#" },
];

const PRODUCTS_PER_PAGE = 16;

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart } = useCart();
  const { searchTerm } = useSearch();

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div id="shop">
      <div className="relative w-full h-56 sm:h-64 md:h-80">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center blur-xs"
          style={{ backgroundImage: `url("/images/contact.jpg")` }}
        ></div>
        <div className="bg-white opacity-50 absolute inset-0"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl pb-2">Shop</h1>
          <div className="flex gap-2 items-center justify-center text-sm sm:text-base">
            <p>Home</p>
            <img src="/images/right-arrow-line.svg" alt="" className="h-4 w-4" />
            <p>Shop</p>
          </div>
        </div>
      </div>

      <div className="bg-[#F9F1E7] px-4 sm:px-10 lg:px-24 py-4 sm:py-6 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:justify-between">
        <div className="flex flex-wrap gap-4 sm:gap-8 items-center">
          <div className="flex gap-2 items-center">
            <img src="/images/system.svg" alt="" />
            <p>Filter</p>
          </div>

          <img src="/images/grid.svg" alt="" />
          <img src="/images/view-list.svg" alt="" />

          <div className="border-l-2 border-footer pl-4 text-sm sm:text-base">
            <p>
              Showing {startIndex + 1}-
              {Math.min(endIndex, filteredProducts.length)} of{" "}
              {filteredProducts.length} results
            </p>
          </div>
        </div>

        <div className="flex gap-4 sm:gap-8 items-center justify-between sm:justify-start">
          <div className="flex gap-2 items-center">
            <p>Show</p>
            <div className="bg-white h-8 w-8 flex items-center justify-center">
              16
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <p>Sort by</p>
            <div className="bg-white h-8 w-20 flex items-center justify-center">
              Default
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-10 sm:pt-16 px-4 sm:px-8 lg:px-16">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="bg-[#F4F5F7] relative group overflow-hidden"
          >
            {product.badge && (
              <div
                className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold text-white ${
                  product.isNew ? "bg-[#2EC1AC]" : "bg-[#E97171]"
                }`}
              >
                {product.badge}
              </div>
            )}

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{product.desc}</p>

              <div className="flex items-center gap-3">
                <span className="font-semibold">₹ {product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    ₹ {product.oldPrice}
                  </span>
                )}
              </div>
            </div>

            {/* HOVER / MOBILE ACTION */}
            <div className="absolute inset-0 bg-black/50 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition flex flex-col items-center justify-center gap-6">
              <button
                onClick={() => addToCart(product)}
                className="bg-white text-primary px-6 py-3 font-semibold"
              >
                Add to Cart
              </button>

              <div className="flex gap-4">
                {hoverIcons.map((icon, index) => (
                  <a
                    key={index}
                    href={icon.href}
                    className="flex items-center gap-2 text-white text-sm"
                  >
                    <img src={icon.icon} alt="" className="w-5 h-5" />
                    <span>{icon.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {currentProducts.length === 0 && (
        <p className="text-center text-gray-500 pt-20">
          No products found
        </p>
      )}

      {/* PAGINATION */}
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-10 sm:mt-12 px-4">
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center ${
                currentPage === pageNumber
                  ? "bg-primary text-white"
                  : "bg-[#F9F1E7]"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}

        <Button
          onClick={() =>
            setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
          }
          className="bg-[#F9F1E7] px-4 w-14 h-10"
        >
          Next
        </Button>
      </div>

      <Features />
    </div>
  );
};

export default Shop;
