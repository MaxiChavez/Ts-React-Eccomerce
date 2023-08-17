import axios from "axios";
import { ILoginData, IUserData } from "./IUserInterface";
// const baseUrl = "https://jsonapitemplate-2l15v6eoh-maxichavez.vercel.app/";

const baseUrl = "http://localhost:3000/";

export const loginUser = async (loginData: ILoginData): Promise<any> => {
  console.log(loginData);
  const url = `${baseUrl}user?email=${loginData.username}&password=${loginData.password}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const registerUser = async (userData: IUserData) => {
  axios
    .post(`${baseUrl}user`, userData)
    .then((response) => {
      console.log("Nuevo usuario agregado:", response.data);
    })
    .catch((error) => {
      console.error("Error al agregar el usuario:", error);
    });
};

export const existsUser = async (email: string): Promise<boolean> => {
  const url2 = `${baseUrl}user?email=${email}`;
  try {
    const response = await axios.get(url2);
    return response.data.length > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
};
