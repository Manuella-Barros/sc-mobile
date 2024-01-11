import React, {useEffect, useState} from 'react';
import {HStack, Input, ScrollView, Text, View, VStack} from "native-base";
import Header from "../components/Header";
import Product from "../components/Product";
import {MagnifyingGlass} from "phosphor-react-native";
import Button from "../components/Button";
import {getAllProducts} from "../api/nest/GET/getAllProducts";
import SelectDropdown from "react-native-select-dropdown";
import {getAllCategories} from "../api/nest/GET/getAllCategories";
import {ICategories, IProduct} from "../interfaces/interfaces";
import {getAllProductsbyCategory} from "../api/nest/GET/getAllProductsbyCategory";

function Home() {
    const [products, setProducts] = useState<IProduct[] | null>(null);
    const [categories, setCategories] = useState<ICategories[] | null>(null);
    const [filter, setFilter] = useState<number | null>(null);

    useEffect(() => {
        getAllProducts().then(res => setProducts(res))
        getAllCategories().then(res => setCategories(res))
    }, [])

    useEffect(() => {
        if(filter != null)
            getAllProductsbyCategory(filter).then(res => setProducts(res))
        else
            getAllProducts().then(res => setProducts(res))
    }, [filter])

    return (
        <View bg={"black"} height={"full"}>
            <Header>
                <HStack justifyContent={"space-between"} alignItems={"center"}>
                    <Input placeholder={"Pesquise um produto"} width={"40%"}/>
                    <Button h={"full"} alignItems={"center"} backgroundColor={"transparent"} width={"15%"}>
                        <MagnifyingGlass size={22} color={"white"} />
                    </Button>

                    {
                        categories &&
                        <SelectDropdown
                            data={categories}

                            onSelect={(selectedItem: ICategories) => {
                                setFilter(selectedItem.id)
                            }}

                            buttonTextAfterSelection={(selectedItem: ICategories) => {
                                return selectedItem.name
                            }}

                            rowTextForSelection={(item) => {
                                return item.name
                            }}

                            defaultButtonText={"Categoria"}
                            buttonStyle={{
                                width: "45%",
                                borderRadius: 10
                            }}
                            dropdownStyle={{
                                borderRadius: 10,
                            }}
                            rowTextStyle={{
                                fontSize: 14
                            }}
                        />
                    }
                </HStack>
            </Header>

            <ScrollView >
                <VStack p={35}>
                    {
                        products &&
                        products.map(product => {
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
        </View>
    );
}

export default Home;