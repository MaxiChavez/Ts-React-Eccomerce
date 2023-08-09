import { createSlice } from "@reduxjs/toolkit";
import { IUserData } from "../Common/Services/IUserInterface";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: {} as IUserData,
    isLogged: false,
  },
  reducers: {
    updateUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

//exporto las ACCIONES.....
export const { updateUser } = loginSlice.actions;

export const loginData = (state: any) => state.login;
export const estaLogueado = (state: any) => state.login.isLogged;

export default loginSlice.reducer;
