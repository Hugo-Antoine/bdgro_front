import React from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch, useSelector } from "react-redux";
import { setPayementMethod } from "../redux/reducers/marketReducer";
import Radio from "@mui/material/Radio";

import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function PaymentMethod() {
  const dispatch = useDispatch();
  const payementMethod = useSelector((state) => state.market.payementMethod);
  const currentCustomer = useSelector(
    (state) => state.customers.currentCustomer
  );
  const handleRadioChange = (event) => {
    dispatch(setPayementMethod(event.target.value));
  };

  return (
    <RadioGroup value={payementMethod} onChange={handleRadioChange} row>
      <FormControlLabel
        value="card"
        control={<Radio />}
        label={<CreditCardIcon sx={{ fontSize: 40 }} />}
        labelPlacement="top"
        disabled={!currentCustomer}
      />
      <FormControlLabel
        value="cash"
        control={<Radio />}
        label={<LocalAtmIcon sx={{ fontSize: 40 }} />}
        labelPlacement="top"
        disabled={!currentCustomer}
      />
      <FormControlLabel
        value="account"
        control={<Radio />}
        label={<AccountCircleIcon sx={{ fontSize: 40 }} />}
        labelPlacement="top"
        disabled={!currentCustomer}
      />
    </RadioGroup>
  );
}
