import { configureStore } from "@reduxjs/toolkit";
import marketReducer from "./reducers/marketReducer";
import customersReducer from "./reducers/customersReducer";
import productsReducer from "./reducers/productsReducer";

export const store = configureStore({
  reducer: {
    market: marketReducer,
    customers: customersReducer,
    products: productsReducer,
  },
});
