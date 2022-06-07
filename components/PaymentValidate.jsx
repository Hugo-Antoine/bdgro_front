import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";

import { postOrder } from "../api/orders";
import { getAllProducts } from "../api/products";

import { setAllProducts } from "../redux/reducers/productsReducer";

import { setCurrentCustomer } from "../redux/reducers/customersReducer";
import { setPayementMethod } from "../redux/reducers/marketReducer";

import { getCustomer } from "../api/customers";

import { resetCart } from "../redux/reducers/marketReducer";

export default function PaymentValidate() {
  const dispatch = useDispatch();
  const currentCustomer = useSelector(
    (state) => state.customers.currentCustomer
  );
  const payementMethod = useSelector((state) => state.market.payementMethod);
  const amount = useSelector((state) => state.market.amount);
  const cart = useSelector((state) => state.market.cart);

  async function fetchProductsData() {
    const response = await getAllProducts();
    dispatch(setAllProducts(response.data));
  }

  async function fetchCustomerData() {
    const response = await getCustomer(currentCustomer.id);
    dispatch(setCurrentCustomer(response.data));
  }

  async function handleValidateClick() {
    const order = {
      customer_id: currentCustomer.id,
      products_list: cart,
      payment_method: payementMethod,
    };
    await postOrder(order);
    await fetchProductsData();
    await fetchCustomerData();
    dispatch(setCurrentCustomer(null));
    dispatch(setPayementMethod(null));
    dispatch(resetCart());
  }

  return (
    <Button
      variant="contained"
      color="success"
      disabled={
        (payementMethod === "account" && currentCustomer.sold < amount) ||
        amount === 0
          ? true
          : false
      }
      onClick={handleValidateClick}
    >
      Valider
    </Button>
  );
}
