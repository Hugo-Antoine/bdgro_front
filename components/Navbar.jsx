import React from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Navbar() {
  return (
    <Stack direction="row">
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
      >
        BDGRO
      </Typography>
      <Link href={`/`}>
        <a>Accueil</a>
      </Link>
      <Link href={`/customers`}>
        <a>Clients</a>
      </Link>
      <Link href={`/products`}>
        <a>Produits</a>
      </Link>
    </Stack>
  );
}
