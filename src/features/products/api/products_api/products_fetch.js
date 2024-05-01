import makeHttpRequest from "../../../../core/api/make_http_request.js";

const endpointProducts = "/products/";
const BASE_URL = "https://api.escuelajs.co/api/v1";

const endpoint = `${BASE_URL}${endpointProducts}`;

export default async function fetchProducts() {
  const products = await makeHttpRequest(endpoint);
  return products;
}
