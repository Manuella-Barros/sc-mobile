import React, {useContext, useEffect, useState} from 'react';
import {FormControl, ScrollView} from "native-base";
import Button from "../components/Button";
import Header from "../components/Header";
import Input, {InputNametype} from "../components/Input";
import { useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {GlobalContext} from "../context/GlobalContext";
import {createProduct} from "../api/nest/POST/createProduct";
import SelectDropdownComponent from "../components/SelectDropdownComponent";
import {inputsInfo} from "../inputsObject";
import {formSchema} from "../schemas/schemas";
import {FormSchemaType} from "../types/type";

const registerSchema = formSchema.strict();

function Register() {
    const {control, handleSubmit  , formState:{errors}, reset} = useForm<FormSchemaType>({
        resolver: zodResolver(registerSchema)
    });
    const [categoryId, setCategoryId] = useState<number | null  | undefined>(null);
    const {setProducts} = useContext(GlobalContext);

    function createProductForm(data: FormSchemaType){
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