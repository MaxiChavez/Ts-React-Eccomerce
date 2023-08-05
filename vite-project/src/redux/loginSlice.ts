import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "login",
    initialState: {
      user:{},
      isLogged: false
    },
    reducers: {
      updateUser: (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      }
    },
});

//exporto las ACCIONES.....
export const { updateUser } = loginSlice.actions;

export const loginData = (state: any) => state.login;

export default loginSlice.reducer;