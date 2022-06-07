import { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import { postCustomer, getAllCustomers } from "../api/customers";

import { setAllCustomers } from "../redux/reducers/customersReducer";

import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function CreateCustomer() {
  const [open, setOpen] = useState(false);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [grade, setGrade] = useState("");

  const dispatch = useDispatch();

  async function postData() {
    await postCustomer({
      first_name: firstName,
      last_name: lastName,
      grade: grade,
    });
  }

  async function fetchData() {
    const response = await getAllCustomers();
    dispatch(setAllCustomers(response.data));
  }

  async function createCustomer() {
    await postData();
    await fetchData();
    setOpen(false);
  }

  return (
    <>
      <Button variant="contained" color="success" onClick={() => setOpen(true)}>
        Créer un nouveau compte client
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ ...style, width: 200 }}>
          <TextField
            label="Prénom"
            value={firstName}
            onChange={(event) => setfirstName(event.target.value)}
          />
          <TextField
            label="Nom"
            value={lastName}
            onChange={(event) => setlastName(event.target.value)}
          />
          <TextField
            label="Promotion"
            value={grade}
            onChange={(event) => setGrade(event.target.value)}
          />
          <Button variant="contained" color="success" onClick={createCustomer}>
            Valider
          </Button>
        </Box>
      </Modal>
    </>
  );
}
