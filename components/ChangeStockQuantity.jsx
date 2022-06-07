import { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import IconButton from "@mui/material/IconButton";

import { useDispatch, useSelector } from "react-redux";

import { setCurrentProduct } from "../redux/reducers/productsReducer";

import { putProduct, getProduct } from "../api/products";

export default function ChangeStockQuantity() {
  const [quantity, setQuantity] = useState("");

  const dispatch = useDispatch();

  const currentProduct = useSelector((state) => state.products.currentProduct);

  async function fetchProductData() {
    const response = await getProduct(currentProduct.id);
    dispatch(setCurrentProduct(response.data));
  }

  async function handleValidateClick(add) {
    const product = {
      name: currentProduct.name,
      price: currentProduct.price,
      stock_quantity: currentProduct.stock_quantity,
    };

    if (add) {
      product.stock_quantity += parseInt(quantity);
    } else {
      product.stock_quantity -= parseInt(quantity);
    }

    await putProduct(currentProduct.id, product);
    await fetchProductData();
    setQuantity("");
  }

  return (
    <Stack>
      <TextField
        label="Quantité à ajouter"
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      />
      <Stack direction="row">
        <IconButton
          color="success"
          onClick={() => {
            handleValidateClick(true);
          }}
        >
          <AddBoxIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton
          color="error"
          onClick={() => {
            handleValidateClick(false);
          }}
        >
          <IndeterminateCheckBoxIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Stack>
    </Stack>
  );
}
