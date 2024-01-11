import {TCategory} from "../types/type";

export interface IProduct{
    name: string,
    price: number,
    quantity: number,
    category: {name: TCategory},
    imgURL: string,
    createdAt?: string,
    updatedAt?: string
}

export interface ICategories {
    id: number,
    name: string
}