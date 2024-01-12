import {TCategory} from "../types/type";
import {Dispatch, SetStateAction} from "react";

export interface IProduct{
    id?: string,
    name: string,
    price: number,
    quantity: number,
    imgURL: string,
    category?: {name: TCategory},
    categoryId?: number,
    createdAt?: string,
    updatedAt?: string
}

export interface ICategories {
    id: number,
    name: string
}

export interface IGlobalContext {
    categories: ICategories[] | null,
    products: IProduct[] | null,
    setProducts: Dispatch<SetStateAction<IProduct[] | null>>
}