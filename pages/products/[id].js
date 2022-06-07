import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { getProduct } from "../../api/products";
import { setCurrentProduct } from "../../redux/reducers/productsReducer";

import { useDispatch, useSelector } from "react-redux";

import ChangeStockQuantity from "../../components/ChangeStockQuantity";

export default function Product() {
  const dispatch = useDispatch();

  const currentProduct = useSelector((state) => state.products.currentProduct);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchData() {
      const response = await getProduct(id);
      dispatch(setCurrentProduct(response.data));
    }
    if (id) fetchData();
  }, [id]);

  return (
    <div>
      {currentProduct ? (
        <div>
          <h1>{currentProduct.name}</h1>
          <div>{currentProduct.price}</div>
          <div>{currentProduct.stock_quantity}</div>
          <ChangeStockQuantity />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
