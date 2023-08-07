import axios from "axios";
import { ILoginData, IUserData } from "./IUserInterface";
const baseUrl = "http://localhost:3001/";

export const loginUser = async (loginData: ILoginData): Promise<IUserData> => {
  console.log(loginData);
  const url = `${baseUrl}user?email=${loginData.username}&pass=${loginData.password}`;
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.error(error));
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
