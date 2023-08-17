import axios from "axios";
import { ICartState } from "../Interfaces/Productos";
import { IUserData, IUserOrder } from "./IUserInterface";
// const baseUrl = "https://jsonapitemplate-2l15v6eoh-maxichavez.vercel.app/";

const baseUrl = "http://localhost:3000/";

interface IOrder {
  cart: ICartState;
  user: IUserOrder;
  isProcessed: boolean;
}

export const registerOrder = async (
  ordenCarrito: ICartState,
  usuario: IUserData
): Promise<any> => {
  const userOrder: IUserOrder = {
    name: usuario.name,
    email: usuario.email,
    phone: usuario.phone,
    adress: usuario.adress,
    id: usuario.id,
  };

  const order: IOrder = {
    cart: ordenCarrito,
    user: userOrder,
    isProcessed: false,
  };

  axios
    .post(`${baseUrl}orders`, order)
    .then((response) => {
      console.log("Nueva orden agregada:", response.data);
    })
    .catch((error) => {
      console.error("Error al agregar la orden:", error);
    });
};

export const getOrders = async (): Promise<any> => {
  try {
    const response = await axios.get(`${baseUrl}orders`);
    return response.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const updateOrderProcessedStatus = async (orderId: number) => {
  try {
    const response = await axios.patch(`${baseUrl}orders/${orderId}`, {
      isProcessed: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error al procesar la orden", error);
  }
};
