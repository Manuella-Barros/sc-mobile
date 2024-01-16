import {z} from "zod";
import {categorySchema, formSchema} from "../schemas/schemas";

export type TCategory = 'Enlatados' | 'Higiene Pessoal' | 'Alimentos Congelados' | 'Embalados' | 'Bebidas' | 'Hortifrúti' | 'Limpeza'

export type FormSchemaType = z.infer<typeof formSchema>
export type categorySchemaType = z.infer<typeof categorySchema>
