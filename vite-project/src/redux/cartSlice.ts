import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    removeToCart: (state, action) => {
      return {
        ...state,
        items: action.payload,
      };
    },
  },
});

//exporto las ACCIONES.....
export const { addToCart, removeToCart } = cartSlice.actions;

export const cartData = (state: any) => state.cart;

export default cartSlice.reducer;
