import {z} from "zod";

export const formSchema = z.object({
    name: z.string({required_error: "Preencha esse campo", invalid_type_error: "Preencha com uma palavra ou frase"}),
    price: z.coerce.number({required_error: "Preencha esse campo", }),
    quantity: z.coerce.number({required_error: "Preencha esse campo", }),
    imgURL: z.string({required_error: "Preencha esse campo"}).url({message: "Preencha com uma url"}),
})