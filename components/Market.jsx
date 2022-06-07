import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { setAllProducts } from "../redux/reducers/productsReducer";

import { getAllProducts } from "../api/products";

import CircularProgress from "@mui/material/CircularProgress";

import ProductCard from "./ProductCard";
import Grid from "@mui/material/Grid";

export default function Market() {
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.products.allProducts);

  useEffect(() => {
    async function fetchData() {
      const response = await getAllProducts();
      dispatch(setAllProducts(response.data));
    }
    fetchData();
  }, []);

  return (
    <>
      {allProducts.length > 0 ? (
        <Grid container spacing={2}>
          {allProducts.map((product) => (
            <Grid item xs={3} key={product.id}>
              <ProductCard product={product} key={product.id} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}
