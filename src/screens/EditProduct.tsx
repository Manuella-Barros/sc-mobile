import React from 'react';
import { Image, Input, ScrollView, Text, View, VStack } from "native-base";
import placeholder from "../images/placeholder.png";
import Button from "../components/Button";
import Header from "../components/Header";

function EditProduct() {
    return (
        <ScrollView bg={"black"}>
            <Header>Edição</Header>

            <VStack w={"full"} px={30}>
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
                    >Name</Text>

                    <Input
                        placeholder={"Insira o nome do produto"}
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
                    />
                </View>


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
                    >Preço</Text>

                    <Input
                        placeholder={"Insira o preço do produto"}
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
                    />
                </View>


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
                    >Quantidade</Text>

                    <Input
                        placeholder={"Insira q quantida do produto em estoque"}
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
                    />
                </View>


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
                    >Categoria</Text>

                    <Input
                        placeholder={"Insira a categoria do produto"}
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
                    />
                </View>



                <View
                    marginY={5}
                    width={"full"}
                    maxHeight={200}
                >
                    <Text
                        color={"white"}
                        bg={"#472EA9"}
                        alignSelf={"flex-start"}
                        paddingX={15}
                        borderTopRadius={10}
                        marginY={-0.5}
                        py={3}
                    >Imagem</Text>

                    <Image
                        source={placeholder}
                        width={"full"}
                        height={"full"}
                        borderColor={"#472EA9"}
                        borderWidth={3}
                        alt={"Imagem default"}
                    />
                </View>

                <Button
                    marginY={30}
                    bg={"#472EA9"}
                > Cadastrar produto</Button>
            </VStack>
        </ScrollView>
    );
}

export default EditProduct;