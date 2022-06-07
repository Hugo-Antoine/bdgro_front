import api from "./axios.js";

const customers = api("customers");

export async function getAllCustomers() {
  const response = await customers.get(`/`);
  return response;
}

export async function getCustomer(id) {
  const response = await customers.get(`/${id}`);
  return response;
}

export async function postCustomer(customer) {
  const response = await customers.post(`/`, customer);
  return response;
}

export async function putCustomer(id, customer) {
  const response = await customers.put(`/${id}`, customer);
  return response;
}

export async function deleteCustomer(id) {
  const response = await customers.delete(`/${id}`);
  return response;
}
