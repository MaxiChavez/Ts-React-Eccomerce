import axios from "axios";
import { ILoginData, IUserData } from "./IUserInterface";
const baseUrl = 'http://localhost:3000/'

export const loginUser = async (loginData : ILoginData) => {
    console.log(loginData)
    let url = `${baseUrl}user?email=${loginData.username}&pass=${loginData.password}`
    axios.get(url)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
  };

export const registerUser = async (
  userData : IUserData) => {
  axios.post(`${baseUrl}user`, userData)
  .then(response => {
    console.log('Nuevo usuario agregado:', response.data);
  })
  .catch(error => {
    console.error('Error al agregar el usuario:', error);
  });
};

export const existsUser = async (email: string): Promise<boolean> => {
  let url = `${baseUrl}user?email=${email}`;
  try {
    const response = await axios.get(url);
    return response.data.length > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
};
