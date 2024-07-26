import { configureStore } from "@reduxjs/toolkit";
import "./features/cart/cartSlice.js";
import cartReducer from "./features/cart/cartSlice.js";
import modalReducer from "./features/modal/modalSlice.js";
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    cart: cartReducer,
  },
});
