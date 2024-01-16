import {z} from "zod";

export const formSchema = z.object({
    //name: z.enum(["name", "price", "quantity", "imgURL", "categoryId"]),
     name: z.string({required_error: "Preencha esse campo", invalid_type_error: "Preencha com uma palavra ou frase"}),
    price: z.coerce.number({required_error: "Preencha esse campo", }),
    quantity: z.coerce.number({required_error: "Preencha esse campo", }),
    imgURL: z.string({required_error: "Preencha esse campo"}).url({message: "Preencha com uma url"}),
})


export const categorySchema = z.object({
    categoryId: z.enum(['Enlatados', 'Higiene Pessoal', 'Alimentos Congelados', 'Embalados', 'Bebidas', 'Hortifrúti', 'Limpeza'])
})