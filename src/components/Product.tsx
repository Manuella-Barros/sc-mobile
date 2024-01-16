import React, {useContext} from 'react';
import {HStack, Image, Text, View, VStack} from "native-base";
import {NotePencil, Tag, Trash} from "phosphor-react-native";
import {IProduct} from "../interfaces/interfaces";
import Button from "./Button";
import {deleteProduct} from "../api/nest/DELETE/deleteProduct";
import {GlobalContext} from "../context/GlobalContext";
import {TNavigation} from "../routes/AppRoutes";
import {useNavigation} from "@react-navigation/native";

function Product(product: IProduct) {
    const {setProducts} = useContext(GlobalContext);
    const {navigate} = useNavigation<TNavigation>()

    function deleteProductbyID(){
        if(product.id)
            deleteProduct(product.id)
                .then(() => {
                    setProducts(prevState => {
                        if(prevState){
                            return prevState.filter(prod => {
                                if(prod.id != product.id){
                                    return prod;
                                }
                            })
                        }

                        return prevState
                })
            })
    }

    function edit(){
        if(product.id)
            navigate("editProduct", { product })
    }

    return (
        <VStack bgColor={"#472EA9"} borderRadius={12} my={5}>
            <View w={"full"} bg={'white'} borderRadius={12} overflow={'hidden'}>
                <HStack justifyContent={"flex-end"} padding={4} >
                    <Button backgroundColor={"red.500"} onPress={deleteProductbyID}>
                        <Trash size={30} color={"white"} weight={"bold"}/>
                    </Button>

                    <Button backgroundColor={"green.500"} marginLeft={4} onPress={edit}>
                        <NotePencil size={30} color={"white"} weight={"bold"}/>
                    </Button>
                </HStack>
                <Image height={240} src={product.imgURL} borderRadius={12} resizeMode={'contain'} w={"full"} alt={"Imagem do produto"}/>
            </View>

            <View py={3}>
                <Text color={"white"} textAlign={"center"} fontSize={20}>{product.name}</Text>
            </View>

            <HStack justifyContent={"space-between"} bgColor={"black"} m={1} p={15} borderBottomRadius={12}>
                <VStack>
                    <Text color={"white"} paddingBottom={15}>R${product.price},00</Text>
                    <Text color={"#2CA42A"}>{product.quantity} em estoque</Text>
                </VStack>

                <VStack>
                    <HStack bgColor={"white"} borderRadius={8} padding={1}>
                        <Tag size={24}/>
                        <Text ml={2} color={"black"}>{product.category?.name}</Text>
                    </HStack>
                </VStack>
            </HStack>
        </VStack>
    );
}

export default Product;