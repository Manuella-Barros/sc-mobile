import React, {useEffect, useState} from 'react';
import {HStack, Input, ScrollView, Text, View, VStack} from "native-base";
import Header from "../components/Header";
import Product, {IProduct} from "../components/Product";
import {MagnifyingGlass} from "phosphor-react-native";
import Button from "../components/Button";
import {getAllProducts} from "../api/nest/GET/getAllProducts";

function Home() {
    const [products, setProducts] = useState<IProduct[] | null>(null);

    useEffect(() => {
        getAllProducts().then(res => {
            setProducts(res);
        })
    }, [])

    return (
        <ScrollView bg={"black"}>
            <Header>
                <HStack justifyContent={"space-between"} alignItems={"center"}>
                    <Input placeholder={"Pesquise um produto"} width={"2/3"}/>
                    <Button backgroundColor={"transparent"}>
                        <MagnifyingGlass size={25} color={"white"} />
                    </Button>
                </HStack>
            </Header>

            <VStack p={35}>
                {/*<Product name={"macarrao"}  category={"alimento"} imgURL={"https://media.soujusto.com.br/products/893_1.png"} price={10} quantity={5}/>*/}
                {
                    products && products.map(product => {
                        return <Product
                                    name={product.name}
                                    category={product.category}
                                    imgURL={product.imgURL}
                                    price={product.price}
                                    quantity={product.quantity}
                                />
                    })
                }
            </VStack>
        </ScrollView>
    );
}

export default Home;