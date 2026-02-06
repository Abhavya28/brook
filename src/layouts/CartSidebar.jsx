import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

const CartSidebar = ({ setIsCartOpen }) => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsCartOpen(false), 300); 
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      ></div>

      <div
        className={`ml-auto w-80 bg-white h-full shadow-xl p-6 flex flex-col transform transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button onClick={handleClose} className="text-gray-600 hover:text-black font-bold text-xl">
            <img src="/images/close.svg" alt="Close" />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <div className="flex-1 overflow-y-auto">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="ml-4 flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-500 text-sm">₹{item.price.toLocaleString()}</p>

                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => decreaseQty(item.id)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                    <button onClick={() => removeFromCart(item.id)} className="ml-auto text-red-500 text-sm">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        
        {cart.length > 0 && (
          <div className="mt-6">
            <p className="font-semibold text-lg">Total: ₹{getTotalPrice().toLocaleString()}</p>
            <button className="w-full mt-4 bg-primary text-white py-2 rounded">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
