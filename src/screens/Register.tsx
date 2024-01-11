import React from 'react';
import {FormControl, ScrollView} from "native-base";
import Button from "../components/Button";
import Header from "../components/Header";
import Input, {InputNametype} from "../components/Input";
import { useForm} from "react-hook-form";
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const inputsInfo = [
    {
        label: "Nome",
        placeholder: "o nome",
        name: "nome"
    },
    {
        label: "Preço",
        placeholder: "o preço",
        name: "preco"
    },
    {
        label: "Quantidade",
        placeholder: "a quantidade",
        name: "quantidade"
    },
    {
        label: "Categoria",
        placeholder: "a categoria",
        name: "categoria"
    },
    {
        label: "Imagem",
        placeholder: "o url da imagem",
        name: "imagem"
    }
]

const registerSchema = z.object({
    nome: z.string({invalid_type_error: "Deve ser um texto"}),
    preco: z.coerce.number(),
    quantidade: z.coerce.number(),
    imagem: z.string().url(),
    categoria: z.string()
})

export type RegisterSchemaType = z.infer<typeof registerSchema>

function Register() {
    const {control, handleSubmit  } = useForm<RegisterSchemaType>({
        resolver: zodResolver(registerSchema)
    });

    function createProduct(data: RegisterSchemaType){
        console.log(data)
    }

    return (
        <ScrollView bg={"black"}>
            <Header>Cadastramento</Header>

            <FormControl px={5}>
                {
                    inputsInfo.map((input, i) => {
                        return <Input
                            key={i}
                            label={input.label}
                            placeholder={input.placeholder}
                            name={input.name as InputNametype}
                            control={control}
                        />
                    })
                }

                <Button
                    marginY={30}
                    bg={"#472EA9"}
                    onPress={handleSubmit((data) => createProduct(data))}
                > Cadastrar produto</Button>
            </FormControl>
        </ScrollView>
    );
}

export default Register;