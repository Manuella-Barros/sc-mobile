import React from 'react';
import {Text, View} from "native-base";
import {Input as InputNativeBase} from "native-base";
import {Control, useController} from "react-hook-form";
import {FormSchemaType} from "../types/type";

interface IInput {
    label: string,
    placeholder: string,
    name: InputNametype,
    control: Control<FormSchemaType>
}

export type InputNametype = "name" | "price" | "quantity" | "imgURL" | "categoryId";

function Input({label, placeholder, name, control}: IInput) {
    const {field} = useController({
        name,
        control,
    })

    return (
        <View marginY={5}>
            <Text
                color={"white"}
                bg={"#472EA9"}
                alignSelf={"flex-start"}
                paddingX={15}
                marginY={-0.5}
                py={3}
                borderTopLeftRadius={10}
                borderTopRightRadius={10}
            >{label}</Text>

            <InputNativeBase
                placeholder={`Insira ${placeholder} do produto`}
                borderColor={"#472EA9"}
                borderWidth={3}
                placeholderTextColor={"#C3B9EC"}
                bgColor={"white"}
                height={45}
                _focus={{
                    bgColor: "violet.300",
                    borderColor: "#472EA9",
                    color: "black"
                }}
                color={"black"}

                onChangeText={field.onChange}
                value={field.value.toString()}
            />
        </View>
    );
}

export default Input;