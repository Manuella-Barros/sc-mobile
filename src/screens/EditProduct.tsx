import React, {useContext, useEffect, useState} from 'react';
import {FormControl, Image, ScrollView, Text, View, VStack, Input as InputNativeBase} from "native-base";
import Button from "../components/Button";
import Header from "../components/Header";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {formSchema} from "../schemas/schemas";
import {inputsInfo} from "../inputsObject";
import SelectDropdownComponent from "../components/SelectDropdownComponent";
import {IProduct} from "../interfaces/interfaces";
import {FormSchemaType} from "../types/type";
import {editProduct} from "../api/nest/UPDATE/editProduct";
import {useRoute} from "@react-navigation/native";
import Input, {InputNametype} from "../components/Input";
import {GlobalContext} from "../context/GlobalContext";
import {getAllProducts} from "../api/nest/GET/getAllProducts";

function EditProduct() {
    const route = useRoute();
    const {product} = route.params as {product: IProduct};
    const [categoryId, setCategoryId] = useState<number | null | undefined>(product.categoryId);
    const {setProducts} = useContext(GlobalContext);

    const {control, handleSubmit  , reset, formState: {errors}} = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: product.name,
            imgURL: product.imgURL,
            quantity: product.quantity,
            price: product.price
        },
    });

    useEffect(() => {
        reset({
            name: product.name,
            imgURL: product.imgURL,
            quantity: product.quantity,
            price: product.price
        })

        getAllProducts().then(res => setProducts(res))
    }, [product]);

    function editProductForm(data: IProduct) {
        if(categoryId){
            editProduct({
                id: product?.id,
                categoryId,
                ...data
            })
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

                <SelectDropdownComponent setSelectedItemID={setCategoryId} defaultText={product.category!.name}/>

                <Button
                    marginY={30}
                    bg={"#472EA9"}
                    onPress={handleSubmit((data) => editProductForm(data))}
                > Editar produto</Button>
            </FormControl>
        </ScrollView>
    );
}

export default EditProduct;