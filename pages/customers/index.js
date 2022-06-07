import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { getAllCustomers } from "../../api/customers";
import { setAllCustomers } from "../../redux/reducers/customersReducer";

import Link from "next/link";

import Grid from "@mui/material/Grid";

import CircularProgress from "@mui/material/CircularProgress";

import CreateCustomer from "../../components/CreateCustomer";

export default function Customers() {
  const dispatch = useDispatch();

  const allCustomers = useSelector((state) => state.customers.allCustomers);

  useEffect(() => {
    async function fetchData() {
      const response = await getAllCustomers();
      dispatch(setAllCustomers(response.data));
    }
    if (allCustomers.length == 0) fetchData();
  }, []);

  return (
    <>
      <CreateCustomer />
      {allCustomers.length > 0 ? (
        <Grid container spacing={2}>
          {allCustomers.map((customer) => (
            <Grid item xs={3} key={customer.id}>
              <Link href={`/customers/${customer.id}`}>
                <a>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {customer.first_name} {customer.last_name}
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
