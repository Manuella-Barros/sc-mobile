export async function getAllProductsbyCategory(id: number){
    const response = await fetch(`http://10.0.2.2:3000/products/category/${id}`);
    return await response.json();
}