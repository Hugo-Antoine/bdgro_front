import api from "./axios.js";

const products = api("products");

export async function getAllProducts() {
  const response = await products.get(`/`);
  return response;
}

export async function getProduct(id) {
  const response = await products.get(`/${id}`);
  return response;
}

export async function postProduct(product) {
  const response = await products.post(`/`, product);
  return response;
}

export async function putProduct(id, product) {
  const response = await products.put(`/${id}`, product);
  return response;
}

export async function deleteProduct(id) {
  const response = await products.delete(`/${id}`);
  return response;
}
