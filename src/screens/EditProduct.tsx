import React, {useContext, useEffect, useState} from 'react';
import {FormControl, Image, ScrollView, Text, View, VStack} from "native-base";
import Button from "../components/Button";
import Header from "../components/Header";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {formSchema} from "../schemas/schemas";
import {inputsInfo} from "../inputsObject";
import Input, {InputNametype} from "../components/Input";
import SelectDropdownComponent from "../components/SelectDropdownComponent";
import {IProduct} from "../interfaces/interfaces";
import {getProductbyID} from "../api/nest/GET/getProductbyID";
import {FormSchemaType} from "../types/type";
import {editProduct} from "../api/nest/UPDATE/editProduct";
import {boolean} from "zod";
import {TEditProductScreenRouteProp, TNavigation} from "../routes/AppRoutes";

const editSchema = formSchema.partial();

function EditProduct({route}: {route: TEditProductScreenRouteProp}) {
    const [productInfo, setProductInfo] = useState<IProduct | null>(null);
    const [categoryId, setCategoryId] = useState<number | null | undefined>(null);

    useEffect(() => {
        getProductbyID(route.params.id).then((res) => {
            setProductInfo(res);
            setCategoryId(productInfo?.categoryId)
            console.log(res)
        })
    }, []);

    const {setValue, control, handleSubmit  , formState:{errors}, reset} = useForm<FormSchemaType>({
        resolver: zodResolver(editSchema),
        resetOptions: {
            keepDirtyValues: true, // user-interacted input will be retained
            keepErrors: true, // input errors will be retained with value update
        },
    });

    useEffect(() => {
        if(productInfo){
            setValue("name", productInfo?.name);
            setValue("imgURL", productInfo?.imgURL);
            setValue("price", productInfo?.price);
            setValue("quantity", productInfo?.quantity);
        }
    }, [productInfo]);

    function editProductForm(data: IProduct) {
        if(categoryId){
            editProduct({
                id: productInfo?.id,
                categoryId,
                ...data
            }).then(res => console.log(res))
        }
    }

    return (
        <ScrollView bg={"black"}>
            <Header>Editar</Header>

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
                    onPress={handleSubmit((data) => editProductForm(data))}
                > Cadastrar produto</Button>
            </FormControl>
        </ScrollView>
    );
}

export default EditProduct;