import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";
import CartSidebar from "./CartSidebar";
import SearchSuggestions from "../layouts/SearchSuggestions";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "#about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const navIcons = [
  { icon: "/images/login.svg", type: "login" },
  { icon: "/images/search.svg", type: "search" },
  { icon: "/images/heart.svg", type: "wishlist" },
  { icon: "/images/cart.svg", type: "cart" },
];

const Navbar = () => {
  const { cart } = useCart();
  const { searchTerm, setSearchTerm, isSearchOpen, setIsSearchOpen } =
    useSearch();

  const [isCartOpen, setIsCartOpen] = useState(false);

  // 🔹 MOBILE MENU STATE
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const isShopPage = location.pathname === "/shop";

  useEffect(() => {
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false); // close mobile menu on route change
  }, [location.pathname]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/70">
        <div className="container mx-auto px-6 flex items-center h-16">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold hover:text-primary"
          >
            <img src="/images/logo.png" alt="Brook" className="h-10 w-10" />
            Brook
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="px-4 py-2 text-sm hover:text-primary hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* DESKTOP ICONS */}
          <div className="hidden md:flex ml-auto">
            {navIcons.map((item, index) => (
              <button
                key={index}
                className="px-4 py-2 relative"
                onClick={(e) => {
                  if (item.type === "cart") {
                    e.preventDefault();
                    setIsCartOpen(true);
                  }

                  if (item.type === "search") {
                    e.preventDefault();
                    if (!isShopPage) return;
                    setIsSearchOpen((prev) => !prev);
                  }
                }}
              >
                <img
                  src={item.icon}
                  alt=""
                  className="w-6 h-6 hover:scale-110 transition"
                />

                {item.type === "cart" && cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* 🔹 MOBILE HAMBURGER */}
          <button
            className="ml-auto md:hidden text-3xl"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            ☰
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="block text-sm font-medium"
                onClick={() => isMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex gap-4 pt-2">
              {navIcons.map((item, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false)

                    if (item.type === "cart") {
                      e.preventDefault();
                      setIsCartOpen(true);
                    }

                    if (item.type === "search") {
                      e.preventDefault();
                      if (!isShopPage) return;
                      setIsSearchOpen(true);
                    }
                  }}
                  className="relative"
                >
                  <img src={item.icon} alt="" className="w-6 h-6" />

                  {item.type === "cart" && cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {isSearchOpen && isShopPage && (
        <div className="fixed top-16 left-0 w-full bg-white z-30 shadow-md">
          <div className="container mx-auto px-6 py-3 flex items-center gap-3">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 border px-4 py-2 outline-none focus:border-primary"
            />

            <SearchSuggestions onClose={() => setIsSearchOpen(false)} /> 

            <button className="text-3xl" onClick={() => setIsSearchOpen(false)}>
              X
            </button>
          </div>
        </div>
      )}

      {isCartOpen && <CartSidebar setIsCartOpen={setIsCartOpen} />}
    </>
  );
};

export default Navbar;
