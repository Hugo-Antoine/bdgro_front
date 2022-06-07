import { useEffect } from "react";

import { setAllProducts } from "../../redux/reducers/productsReducer";

import { getAllProducts } from "../../api/products";

import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";

import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import CreateProduct from "../../components/CreateProduct";

export default function index() {
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.products.allProducts);

  useEffect(() => {
    async function fetchData() {
      const response = await getAllProducts();
      dispatch(setAllProducts(response.data));
    }
    if (allProducts.length == 0) fetchData();
  }, []);

  return (
    <>
      <CreateProduct />
      {allProducts.length > 0 ? (
        <Grid container spacing={2}>
          {allProducts.map((product) => (
            <Grid item xs={3} key={product.id}>
              <Link href={`/products/${product.id}`}>
                <a>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            </Grid>
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}
