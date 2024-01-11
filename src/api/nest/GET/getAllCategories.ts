import {ICategories} from "../../../interfaces/interfaces";

export async function getAllCategories(): Promise<ICategories[]>{
    const response = await fetch("http://10.0.2.2:3000/categories")
    return await response.json();
}