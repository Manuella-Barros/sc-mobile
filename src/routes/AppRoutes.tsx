import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Register from "../screens/Register";
import EditProduct from "../screens/EditProduct";
import {House, NotePencil} from "phosphor-react-native";
import {IProduct} from "../interfaces/interfaces";

type IAppRoutes = {
    home: undefined,
    register: undefined,
    editProduct: {
        product: IProduct
    }
}

export type TNavigation = BottomTabNavigationProp<IAppRoutes>

function AppRoutes() {
    const { Screen, Navigator} = createBottomTabNavigator<IAppRoutes>();
    return (
        <Navigator screenOptions={{
            tabBarActiveTintColor: "#472EA9",
            tabBarShowLabel: false,
            headerShown: false,
        }}>
            <Screen name={"home"} component={Home} options={{
                tabBarIcon: ({color})=> <House color={color}/>
            }}/>
            <Screen name={"register"} component={Register} options={{
                tabBarIcon: ({color})=> <NotePencil/>
            }}/>
            <Screen name={"editProduct"} component={EditProduct} options={{
                tabBarButton: ()=>  null
            }}/>
        </Navigator>
    );
}

export default AppRoutes;