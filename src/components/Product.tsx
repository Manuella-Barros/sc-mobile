import React from 'react';
import {HStack, Image, Text, View, VStack} from "native-base";
import placeholder from "../images/placeholder.png";
import {Tag} from "phosphor-react-native";

function Product() {

    return (
        <VStack bgColor={"#472EA9"} borderRadius={12} my={5}>
            <View w={"full"}>
                <Image height={240} borderRadius={12} w={"full"} source={placeholder} alt={"Imagem do produto"}/>
            </View>

            <View py={3}>
                <Text color={"white"} textAlign={"center"} fontSize={20}>Produto A</Text>
            </View>

            <HStack justifyContent={"space-between"} bgColor={"black"} m={1} p={15} borderBottomRadius={12}>
                <VStack>
                    <Text color={"white"} paddingBottom={15}>R$00,00</Text>
                    <Text color={"#2CA42A"}>10 em estoque</Text>
                </VStack>

                <VStack>
                    <HStack bgColor={"white"} borderRadius={8} padding={1}>
                        <Tag size={24}/>
                        <Text ml={2} color={"black"}>Camisetas</Text>
                    </HStack>
                </VStack>
            </HStack>
        </VStack>
    );
}

export default Product;