import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCustomers: [],
  currentCustomer: null,
};

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    setAllCustomers: (state, action) => {
      state.allCustomers = action.payload;
    },
    setCurrentCustomer: (state, action) => {
      state.currentCustomer = action.payload;
    },
  },
});

export const { setAllCustomers, setCurrentCustomer } = customersSlice.actions;

export default customersSlice.reducer;
