import {IProduct} from "../../../interfaces/interfaces";

export async function createProduct(data: IProduct): Promise<IProduct>{
    try {
        const response = await fetch("http://10.0.2.2:3000/products", {
            method: "post",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })

        return await response.json();
    }catch (e){
        throw new Error("Não foi possível criar o produto")
    }
}