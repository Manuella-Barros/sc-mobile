import {z} from "zod";
import {formSchema} from "../schemas/schemas";

export type TCategory = 'Enlatados' | 'Higiene Pessoal' | 'Alimentos Congelados' | 'Embalados' | 'Bebidas' | 'Hortifrúti' | 'Limpeza'

export type FormSchemaType = z.infer<typeof formSchema>
