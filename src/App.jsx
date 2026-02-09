import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; 

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

function App() {
  return (
    <CartProvider> 
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>

      <Footer />
    </CartProvider>
  );
}

export default App;

