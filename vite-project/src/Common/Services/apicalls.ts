import axios from "axios";

const urlBase = "https://fakestoreapi.com/";
const URL = "https://fakestoreapi.com/products/";

export const fetchProducts = async () => {
  const response = await axios.get(URL);
  const results = response.data;
  return results;
};

export const fetchCategorias = async () => {
  const response = await axios.get(`${urlBase}products/categories`);
  const results = response.data;


  return results;
};

export const fetchProductsBySearch = async (searchTerm: string) => {
  const response = await fetch(`https://fakestoreapi.com/products`);
  const results: IProduct[] = await response.json();
  const searchTermLowercase :string = searchTerm.search.toLowerCase();
  const filteredResults = results.filter((product) => {
    return product.title.toLowerCase().includes(searchTermLowercase);
  });
  return filteredResults;
};

// Obtener todos los productos: https://fakestoreapi.com/products
// Obtener un producto específico por su ID: https://fakestoreapi.com/products/:id
// Obtener todas las categorías de productos: https://fakestoreapi.com/categories
// Electronics
// Jewelery
// Men's Clothing
// Women's
// Obtener todos los productos de una categoría específica: https://fakestoreapi.com/products/category/:category
// Obtener todos los productos que coincidan con una palabra clave de búsqueda: https://fakestoreapi.com/products/search/:keyword
// Crear una orden de compra (carrito de compras): https://fakestoreapi.com/orders
// Obtener todas las órdenes de compra realizadas: https://fakestoreapi.com/orders
// Obtener una orden de compra específica por su ID: https://fakestoreapi.com/orders/:id