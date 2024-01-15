import React, {useContext, useEffect, useState} from 'react';
import {HStack, Input, ScrollView, Text, View, VStack} from "native-base";
import Header from "../components/Header";
import Product from "../components/Product";
import {MagnifyingGlass} from "phosphor-react-native";
import Button from "../components/Button";
import {getAllProducts} from "../api/nest/GET/getAllProducts";
import SelectDropdown from "react-native-select-dropdown";
import {ICategories, IProduct} from "../interfaces/interfaces";
import {getAllProductsbyCategory} from "../api/nest/GET/getAllProductsbyCategory";
import {GlobalContext} from "../context/GlobalContext";
import SelectDropdownComponent from "../components/SelectDropdownComponent";

function Home({navigation} ) {
    const [filter, setFilter] = useState<number | null>(null);
    const [filteredProducts, setFilteredProducts] = useState<IProduct[] | null>(null);
    const {products} = useContext(GlobalContext);

    useEffect(() => {
        if(filter != null)
            getAllProductsbyCategory(filter).then(res => setFilteredProducts(res))
        else
            setFilteredProducts(null)
    }, [filter])

    return (
        <View bg={"black"} height={"full"}>
            <Header>
                <HStack justifyContent={"space-between"} alignItems={"center"}>
                    <Input placeholder={"Pesquise um produto"} width={"40%"}/>
                    <Button h={"full"} alignItems={"center"} backgroundColor={"transparent"} width={"15%"}>
                        <MagnifyingGlass size={22} color={"white"} />
                    </Button>

                    <SelectDropdownComponent setSelectedItemID={setFilter}/>

                </HStack>
            </Header>

            <ScrollView >
                <VStack p={35}>
                    {
                        !filteredProducts && products &&
                        products.map(product => {
                            return <Product
                                navigation={navigation}
                                id={product.id}
                                name={product.name}
                                category={product.category}
                                imgURL={product.imgURL}
                                price={product.price}
                                quantity={product.quantity}
                            />
                        })
                    }
                    {
                        filteredProducts &&
                        filteredProducts.map(product => {
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