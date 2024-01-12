import React, {useContext, useEffect, useState} from 'react';
import {FormControl, ScrollView} from "native-base";
import Button from "../components/Button";
import Header from "../components/Header";
import Input, {InputNametype} from "../components/Input";
import { useForm} from "react-hook-form";
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {GlobalContext} from "../context/GlobalContext";
import {createProduct} from "../api/nest/POST/createProduct";
import SelectDropdownComponent from "../components/SelectDropdownComponent";

const inputsInfo = [
    {
        label: "Nome",
        placeholder: "o nome",
        name: "name"
    },
    {
        label: "Preço",
        placeholder: "o preço",
        name: "price"
    },
    {
        label: "Quantidade",
        placeholder: "a quantidade",
        name: "quantity"
    },
    {
        label: "Imagem",
        placeholder: "o url da imagem",
        name: "imgURL"
    }
]

const registerSchema = z.object({
    name: z.string({required_error: "Preencha esse campo", invalid_type_error: "Preencha com uma palavra ou frase"}),
    price: z.coerce.number({required_error: "Preencha esse campo", }),
    quantity: z.coerce.number({required_error: "Preencha esse campo", }),
    imgURL: z.string({required_error: "Preencha esse campo"}).url({message: "Preencha com uma url"}),
})

export type RegisterSchemaType = z.infer<typeof registerSchema>

function Register() {
    const {control, handleSubmit  , formState:{errors}, reset} = useForm<RegisterSchemaType>({
        resolver: zodResolver(registerSchema)
    });
    const [categoryId, setCategoryId] = useState<number | null>(null);
    const {setProducts} = useContext(GlobalContext);

    function createProductForm(data: RegisterSchemaType){
        if(categoryId){
            reset();

            createProduct({...data, categoryId}).then(res => {
                setProducts(prevState => {
                    if(prevState){
                        return [res, ...prevState]
                    }
                    return [res]
                })
            })
        }
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

                <SelectDropdownComponent setSelectedItemID={setCategoryId}/>

                <Button
                    marginY={30}
                    bg={"#472EA9"}
                    onPress={handleSubmit((data) => createProductForm(data))}
                > Cadastrar produto</Button>
            </FormControl>
        </ScrollView>
    );
}

export default Register;