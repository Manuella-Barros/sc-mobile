import React, {useContext, useEffect, useRef, useState} from 'react';
import {HStack, Input, ScrollView, Text, View, VStack} from "native-base";
import Header from "../components/Header";
import Product from "../components/Product";
import {MagnifyingGlass} from "phosphor-react-native";
import Button from "../components/Button";
import {IProduct} from "../interfaces/interfaces";
import {getAllProductsbyCategory} from "../api/nest/GET/getAllProductsbyCategory";
import {GlobalContext} from "../context/GlobalContext";
import SelectDropdownComponent from "../components/SelectDropdownComponent";
import {searchProductByName} from "../api/nest/GET/searchProductByName";

function Home() {
    const [filter, setFilter] = useState<number | null | undefined>(null);
    const [filteredProducts, setFilteredProducts] = useState<IProduct[] | null>(null);
    const {products} = useContext(GlobalContext);
    const [productName, setProductName] = useState("");

    useEffect(() => {
        if(filter != null)
            getAllProductsbyCategory(filter).then(res => setFilteredProducts(res))
        else
            setFilteredProducts(null)
    }, [filter])

    function searchFilter(){
        searchProductByName(productName).then(res => setFilteredProducts(res))
    }

    return (
        <View bg={"black"} height={"full"}>
            <Header>
                <HStack justifyContent={"space-between"} alignItems={"center"}>
                    <Input placeholder={"Pesquise um produto"} width={"40%"} onChangeText={text => setProductName(text)}/>
                    <Button h={"full"} alignItems={"center"} backgroundColor={"transparent"} width={"15%"} onPress={searchFilter}>
                        <MagnifyingGlass size={22} color={"white"} />
                    </Button>

                    <SelectDropdownComponent setSelectedItemID={setFilter}/>

                </HStack>
            </Header>

            <ScrollView >
                <VStack p={35}>
                    {
                        !filteredProducts && products &&
                        products.map((product, i) => {
                            return <Product
                                key={i}
                                id={product.id}
                                name={product.name}
                                category={product.category}
                                categoryId={product.categoryId}
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
                                id={product.id}
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