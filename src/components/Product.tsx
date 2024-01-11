import React from 'react';
import {HStack, Image, Text, View, VStack} from "native-base";
import {Tag} from "phosphor-react-native";
import {IProduct} from "../interfaces/interfaces";

function Product({name, price, quantity, category, imgURL}: IProduct) {

    return (
        <VStack bgColor={"#472EA9"} borderRadius={12} my={5}>
            <View w={"full"} bg={'white'} borderRadius={12} overflow={'hidden'}>
                <Image height={240} src={imgURL} borderRadius={12} resizeMode={'contain'} w={"full"} alt={"Imagem do produto"}/>
            </View>

            <View py={3}>
                <Text color={"white"} textAlign={"center"} fontSize={20}>{name}</Text>
            </View>

            <HStack justifyContent={"space-between"} bgColor={"black"} m={1} p={15} borderBottomRadius={12}>
                <VStack>
                    <Text color={"white"} paddingBottom={15}>R${price},00</Text>
                    <Text color={"#2CA42A"}>{quantity} em estoque</Text>
                </VStack>

                <VStack>
                    <HStack bgColor={"white"} borderRadius={8} padding={1}>
                        <Tag size={24}/>
                        <Text ml={2} color={"black"}>{category.name}</Text>
                    </HStack>
                </VStack>
            </HStack>
        </VStack>
    );
}

export default Product;