import api from "./axios.js";

const transactions = api("transactions");

// export async function getAllCustomers() {
//   const response = await orders.get(`/`);
//   return response;
// }

// export async function getCustomer(id) {
//   const response = await orders.get(`/${id}`);
//   return response;
// }

export async function postTransaction(transaction) {
  const response = await transactions.post(`/`, transaction);
  return response;
}

// export async function putCustomer(id, customer) {
//   const response = await orders.put(`/${id}`, customer);
//   return response;
// }

// export async function deleteCustomer(id) {
//   const response = await orders.delete(`/${id}`);
//   return response;
// }
