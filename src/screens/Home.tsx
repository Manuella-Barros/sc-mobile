import React from 'react';
import {Button, Input, ScrollView, Text, VStack} from "native-base";
import Header from "../components/Header";
import Product from "../components/Product";

function Home() {
    return (
        <ScrollView bg={"black"}>
            <Header>
                <Input placeholder={"Pesquise um produto"}/>
            </Header>

            <VStack p={35}>
                <Product/>
                <Product/>
                <Product/>
            </VStack>
        </ScrollView>
    );
}

export default Home;