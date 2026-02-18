import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
          console.log("Reducer hit", action.payload);

      const product = action.payload;
      const existing = state.cart.find((item) => item.id === product.id);

      if (existing) {
        existing.qty += 1;
      } else {
        state.cart.push({ ...product, qty: 1 });
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
    },

    increaseQty(state, action) {
      const id = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) item.qty += 1;
    },

    decreaseQty(state, action) {
      const id = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item && item.qty > 1) {
        item.qty -= 1;
      }
    },

    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },

    setCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  toggleCart,
  setCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
