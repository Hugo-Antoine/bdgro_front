import { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import { postProduct, getAllProducts } from "../api/products";

import { setAllProducts } from "../redux/reducers/productsReducer";

import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function CreateCustomer() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");

  const dispatch = useDispatch();

  async function postData() {
    await postProduct({
      name,
      price,
      stock_quantity: stockQuantity,
    });
  }

  async function fetchData() {
    const response = await getAllProducts();
    dispatch(setAllProducts(response.data));
  }

  async function createProduct() {
    await postData();
    await fetchData();
    setOpen(false);
  }

  return (
    <>
      <Button variant="contained" color="success" onClick={() => setOpen(true)}>
        Créer un nouveau produit
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ ...style, width: 200 }}>
          <TextField
            label="Nom"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            label="Prix"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <TextField
            label="Quantité en stock"
            value={stockQuantity}
            onChange={(event) => setStockQuantity(event.target.value)}
          />
          <Button variant="contained" color="success" onClick={createProduct}>
            Valider
          </Button>
        </Box>
      </Modal>
    </>
  );
}
