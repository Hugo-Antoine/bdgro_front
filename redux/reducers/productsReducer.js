import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  currentProduct: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
  },
});

export const { setAllProducts, setCurrentProduct } = productsSlice.actions;

export default productsSlice.reducer;
