import PaymentMethod from "./PaymentMethod";
import PaymentValidate from "./PaymentValidate";
import Cart from "./Cart";
import SelectCustomer from "./SelectCustomer";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

export default function Payment() {
  return (
    <Grid container>
      <Grid item xs={8}>
        <Stack spacing={2}>
          <SelectCustomer />
          <PaymentMethod />
          <PaymentValidate />
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <Cart />
      </Grid>
    </Grid>
  );
}
