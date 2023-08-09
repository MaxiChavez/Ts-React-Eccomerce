export interface IProductoCarrito {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
  category: string;
  amount: number;
}

export interface ICartState {
  items: IProductoCarrito[];
  cantidadTotal: number,
  montoTotal : number
}
