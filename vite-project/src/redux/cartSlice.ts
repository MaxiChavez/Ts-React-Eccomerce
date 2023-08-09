import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartState, ProductoCarrito } from "../Common/Interfaces/Productos";

const initialState: CartState = {
  items: [],
  cantidadTotal: 0,
};

interface IUpdateCart {
  id: string;
  newAmount: number;
  price: number;
}

export const calcularCantidadTotal = (productos: ProductoCarrito[]): number => {
  let total = 0;
  productos.forEach((producto) => {
    total += Number(producto.amount);
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
    removeProduct: (state, action: PayloadAction<string>) => {
      const productIdToRemove = action.payload;
      state.items = state.items.filter(
        (product) => product.id !== productIdToRemove
      );
      state.cantidadTotal = calcularCantidadTotal(state.items);
    },
    updateProductAmount: (state, action: PayloadAction<IUpdateCart>) => {
      const { id, newAmount } = action.payload;
      state.items = state.items.map((product) =>
        product.id === id ? { ...product, amount: newAmount } : product
      );
      state.cantidadTotal = calcularCantidadTotal(state.items);
    },

    cleanCart: (state) => {
      state.cantidadTotal = 0;
      state.items = [];
    },
  },
});

//exporto las ACCIONES.....
export const {
  addToCart,
  removeToCart,
  cleanCart,
  updateProductAmount,
  removeProduct,
} = cartSlice.actions;

export const cartData = (state: any) => state.cart.items;

export const cartTotalQuantity = (state: any) => state.cart.cantidadTotal;

export default cartSlice.reducer;
