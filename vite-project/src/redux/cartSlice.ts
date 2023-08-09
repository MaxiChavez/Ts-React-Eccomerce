import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartState, IProductoCarrito } from "../Common/Interfaces/Productos";

const initialState: ICartState = {
  items: [],
  cantidadTotal: 0,
  montoTotal: 0,
};

interface IUpdateCart {
  id: string,
  newAmount: number;
}

export const calcularCantidadTotal = (productos: IProductoCarrito[]): number => {
  let total = 0;
  productos.forEach((producto) => {
    total += Number(producto.amount);
  });
  return total;
};

export const calcularMontoTotal = (productos: IProductoCarrito[]): number => {
  let montoTotal = 0;
  productos.forEach((producto) => {
    console.log("cantidad", producto.amount);
    console.log("precio", producto.price);
    montoTotal += Number(producto.amount) * Number(parseFloat(producto.price.split("$")[1]));
  });
  return parseFloat(montoTotal.toFixed(2));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProductoCarrito>) => {
      const newItem = action.payload;
      const existeElItem = state.items.find((item) => item.id === newItem.id);
      if (existeElItem) {
        existeElItem.amount += newItem.amount;
      } else {
        state.items.push(newItem);
      }
      state.cantidadTotal = calcularCantidadTotal(state.items);
      state.montoTotal = calcularMontoTotal(state.items);
    },
    removeToCart: (state, action: PayloadAction<IProductoCarrito[]>) => {
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
      state.montoTotal = calcularMontoTotal(state.items);
    },
    updateProductAmount: (state, action: PayloadAction<IUpdateCart>) => {
      const { id, newAmount } = action.payload;
      state.items = state.items.map((product) =>
        product.id === id ? { ...product, amount: newAmount } : product
      );
      state.cantidadTotal = calcularCantidadTotal(state.items);
      state.montoTotal = calcularMontoTotal(state.items);
    },

    cleanCart: (state) => {
      state.cantidadTotal = 0;
      state.items = [];
      state.montoTotal = 0;
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

export const cart = (state: any) => state.cart;

export const cartTotalQuantity = (state: any) => state.cart.cantidadTotal;

export const cartTotalPrice = (state: any) => state.cart.montoTotal;

export default cartSlice.reducer;
