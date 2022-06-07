import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import WarningIcon from "@mui/icons-material/Warning";

import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../redux/reducers/marketReducer";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.market.cart);
  const quantity =
    cart.find((currProduct) => currProduct.id === product.id)?.quantity || 0;

  return (
    <Card>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {product.price} €
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {product.stock_quantity}
        </Typography>
      </CardContent>
      <CardActions>
        {quantity}
        {quantity !== product.stock_quantity && (
          <IconButton
            color="success"
            onClick={() => dispatch(addProduct(product.id))}
          >
            <AddBoxIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
        {quantity !== 0 && (
          <IconButton
            color="error"
            onClick={() => dispatch(removeProduct(product.id))}
          >
            <IndeterminateCheckBoxIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
        {product.stock_quantity == 0 && (
          <Chip
            icon={<WarningIcon />}
            label="Article Indisponible"
            color="warning"
          />
        )}
      </CardActions>
    </Card>
  );
}
