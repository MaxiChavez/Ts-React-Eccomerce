import axios from "axios";

const URL = "https://fakestoreapi.com/products/";

export const fetchProducts = async () => {
  const response = await axios.get(URL);
  const results = response.data;
  console.log("Productos", results);

  return results;
};
