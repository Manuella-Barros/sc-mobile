import {IProduct} from "../../../components/Product";

export async function getAllProducts(): Promise<IProduct[]>{
    const response = await fetch("http://localhost:3000/products/allProducts");
    return await response.json();
}