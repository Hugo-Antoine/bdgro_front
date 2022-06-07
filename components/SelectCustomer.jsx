import React from "react";

import { useEffect } from "react";

import { getCustomer, getAllCustomers } from "../api/customers";

import CircularProgress from "@mui/material/CircularProgress";

import {
  setAllCustomers,
  setCurrentCustomer,
} from "../redux/reducers/customersReducer";
import { useDispatch, useSelector } from "react-redux";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function SelectCustomer() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const response = await getAllCustomers();
      dispatch(setAllCustomers(response.data));
    }
    fetchData();
  }, []);

  const allCustomers = useSelector((state) => state.customers.allCustomers);

  const currentCustomer = useSelector(
    (state) => state.customers.currentCustomer
  );

  const handleSelectChange = (event) => {
    async function fetchData() {
      const response = await getCustomer(event.target.value);
      dispatch(setCurrentCustomer(response.data));
    }
    fetchData();
  };

  return (
    <>
      {allCustomers.length > 0 ? (
        <>
          <Select
            value={currentCustomer?.id}
            onChange={(event) => handleSelectChange(event)}
          >
            {allCustomers.map((customer) => {
              return (
                <MenuItem key={customer.id} value={customer.id}>
                  {`${customer.first_name} ${customer.last_name}`}
                </MenuItem>
              );
            })}
          </Select>
          {currentCustomer && currentCustomer.sold}
        </>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}
