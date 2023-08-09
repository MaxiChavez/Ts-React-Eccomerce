export interface ProductoCarrito {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
  category: string;
  amount: number;
}

export interface CartState {
  items: ProductoCarrito[];
  cantidadTotal: number;
}
