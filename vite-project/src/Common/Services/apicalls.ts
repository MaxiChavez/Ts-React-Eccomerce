import axios from "axios";
import { IProduct } from "./IProduct";

const urlBase = "https://fakestoreapi.com/";
const URL = "https://fakestoreapi.com/products/";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(URL);
    const results = response.data;
    return results;
  } catch (error) {
    console.log("se callo la api ", error);
  }
};

export const fetchCategorias = async () => {
  const response = await axios.get(`${urlBase}products/categories`);
  const results = response.data;

  return results;
};

// export const fetchProductsBySearch = async (searchTerm: string) => {
//   const response = await fetch(`https://fakestoreapi.com/products`);
//   const results: IProduct[] = await response.json();
//   const searchTermLowercase: string = searchTerm.search
//     .toString()
//     .toLowerCase();
//   const filteredResults = results.filter((product) => {
//     return product.title.toLowerCase().includes(searchTermLowercase);
//   });
//   return filteredResults;
// };
export const fetchProductsBySearch = async (searchTerm: string) => {
  const response = await fetch(`https://fakestoreapi.com/products`);
  const results: IProduct[] = await response.json();
  const searchTermLowercase: string = searchTerm.search
    .toString()
    .toLowerCase();
  const filteredResults = results.filter((product) => {
    return product.title.toLowerCase().includes(searchTermLowercase);
  });
  return filteredResults;
};
