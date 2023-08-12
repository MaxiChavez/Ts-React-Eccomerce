import { ICartState } from "./Productos"
import { IUserOrder } from "../Services/IUserInterface"

export interface IOrder {
    id: number,
    cart : ICartState,
    user : IUserOrder,
    isProcessed : boolean
}