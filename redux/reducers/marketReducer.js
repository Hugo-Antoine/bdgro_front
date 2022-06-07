import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  payementMethod: null,
  amount: 0,
};

export const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload
      );
      if (index != -1) {
        state.cart[index].quantity += 1;
      } else {
        state.cart.push({ id: action.payload, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload
      );
      if (state.cart[index].quantity === 1) {
        state.cart.splice(index, 1);
      } else {
        state.cart[index].quantity -= 1;
      }
    },
    resetCart: (state) => {
      state.cart = [];
    },
    setPayementMethod: (state, action) => {
      state.payementMethod = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  resetCart,
  setPayementMethod,
  setAmount,
} = marketSlice.actions;

export default marketSlice.reducer;
