import {IProduct} from "../../../interfaces/interfaces";

export async function getProductbyID(id: number): Promise<IProduct> {
    try{
        const response = await fetch(`http://10.0.2.2:3000/products/${id}`);
        return await response.json();
    }catch (e: any){
        throw new Error(e.message)
    }
}