export async function deleteProduct(id: string){
    try {
        await fetch(`http://10.0.2.2:3000/products/${id}`);

    } catch (e: any){
        throw new Error(e.message)
    }
}