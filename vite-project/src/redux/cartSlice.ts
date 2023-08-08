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
  cantidadTotal: number;
}
const initialState: CartState = {
  items: [],
  cantidadTotal: 0,
};

const calcularCantidadTotal = (productos: ProductoCarrito[]): number => {
  let total = 0;
  productos.forEach((producto) => {
    total += producto.amount;
  });
  return total;
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
      state.cantidadTotal = calcularCantidadTotal(state.items);
    },

    removeToCart: (state, action: PayloadAction<ProductoCarrito[]>) => {
      state.items = action.payload;
      state.cantidadTotal = action.payload.reduce(
        (total, item) => total + item.amount,
        0
      );
    },
  },
});

//exporto las ACCIONES.....
export const { addToCart, removeToCart } = cartSlice.actions;

export const cartData = (state: any) => state.cart;

export const cartTotalQuantity = (state: any) => state.cantidadTotal;

export default cartSlice.reducer;
