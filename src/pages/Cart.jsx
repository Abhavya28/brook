import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-60">
        <h2 className="text-2xl font-semibold">Your cart is empty 🛒</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >

            <div className="flex items-center gap-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover"
              />

              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-500">{item.price}</p>
              </div>
            </div>


            <div className="flex items-center gap-4">
              <button
                onClick={() => decreaseQty(item.id)}
                className="w-8 h-8 border flex items-center justify-center"
              >
                -
              </button>

              <span className="font-semibold">{item.qty}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="w-8 h-8 border flex items-center justify-center"
              >
                +
              </button>
            </div>


            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 font-semibold"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
