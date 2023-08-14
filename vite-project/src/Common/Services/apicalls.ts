import axios from "axios";

// const urlBase = "https://fakestoreapi.com/";
// const URL = "https://fakestoreapi.com/products/";

export const fetchProducts = async () => {
  const response = await axios.get("/api/products");
  const results = response.data;
  return results;
};

export const fetchCategorias = async () => {
  const response = await axios.get("/api/products/categories");
  const results = response.data;

  return results;
};

export const fetchProductsBySearch = async (searchTerm: string) => {
  const response = await fetch("/api/products");
  const results: IProduct[] = await response.json();
  const searchTermLowercase: string = searchTerm.search
    .toString()
    .toLowerCase();
  const filteredResults = results.filter((product) => {
    return product.title.toLowerCase().includes(searchTermLowercase);
  });
  return filteredResults;
};
