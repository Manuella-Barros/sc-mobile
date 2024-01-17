import {IProduct} from "../../../interfaces/interfaces";

export async function searchProductByName(productName: string): Promise<IProduct[]>{
    const response = await fetch(`http://10.0.2.2:3000/products/search/data?q=${productName}`);
    return await response.json();
}