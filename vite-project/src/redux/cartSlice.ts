import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ProductoCarrito {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
  category: string;
  amount: number;
}

interface CartState {
  items: ProductoCarrito[];
}
const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductoCarrito>) => {
      const newItem = action.payload;
      const existeElItem = state.items.find((item) => item.id === newItem.id);
      if (existeElItem) {
        existeElItem.amount += newItem.amount;
      } else {
        state.items.push(newItem);
      }
    },
    removeToCart: (state, action: PayloadAction<ProductoCarrito[]>) => {
      state.items = action.payload;
    },
  },
});

//exporto las ACCIONES.....
export const { addToCart, removeToCart } = cartSlice.actions;

export const cartData = (state: any) => state.cart;

export default cartSlice.reducer;
