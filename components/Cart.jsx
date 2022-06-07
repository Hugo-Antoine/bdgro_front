import { useEffect } from "react";

import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";

import { setAmount } from "../redux/reducers/marketReducer";

export default function Cart() {
  const cart = useSelector((state) => state.market.cart);
  const allProducts = useSelector((state) => state.products.allProducts);
  const amount = useSelector((state) => state.market.amount);

  const dispatch = useDispatch();

  const total = cart.reduce((acc, curr) => {
    const product = allProducts.find((p) => p.id === curr.id);
    return acc + product.price * curr.quantity;
  }, 0);

  useEffect(() => {
    dispatch(setAmount(total));
  }, [total]);

  return (
    <Grid container>
      {amount}
      {cart.map((product) => (
        <Grid item xs={12} key={product.id}>
          <Typography gutterBottom variant="span" component="div">
            {allProducts.find((p) => p.id === product.id).name} *
            {product.quantity}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
