import { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import IconButton from "@mui/material/IconButton";

import { useDispatch, useSelector } from "react-redux";

import { setCurrentCustomer } from "../redux/reducers/customersReducer";

import { getCustomer } from "../api/customers";

import { postTransaction } from "../api/transactions";

export default function ChangeSold() {
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();

  const currentCustomer = useSelector(
    (state) => state.customers.currentCustomer
  );

  async function fetchCustomerData() {
    const response = await getCustomer(currentCustomer.id);
    dispatch(setCurrentCustomer(response.data));
  }

  async function handleValidateClick(add) {
    const transaction = {
      customer_id: currentCustomer.id,
      amount,
    };

    if (!add) {
      transaction.amount = -amount;
    }

    await postTransaction(transaction);
    await fetchCustomerData();
    setAmount("");
  }

  return (
    <Stack>
      <TextField
        label="Montant"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
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
