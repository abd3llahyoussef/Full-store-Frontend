import cartReducer from "./data";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: cartReducer,
});
