import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { getCustomer } from "../../api/customers";
import { setCurrentCustomer } from "../../redux/reducers/customersReducer";

import ChangeSold from "../../components/ChangeSold";

import { useDispatch, useSelector } from "react-redux";

export default function Customer() {
  const dispatch = useDispatch();

  const currentCustomer = useSelector(
    (state) => state.customers.currentCustomer
  );

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchData() {
      const response = await getCustomer(id);
      dispatch(setCurrentCustomer(response.data));
    }
    if (id) fetchData();
  }, [id]);

  return (
    <div>
      {currentCustomer ? (
        <div>
          <h1>{`${currentCustomer.first_name} ${currentCustomer.last_name}`}</h1>
          <div>grade : {currentCustomer.grade}</div>
          <div>sold : {currentCustomer.sold}</div>
          <ChangeSold />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
