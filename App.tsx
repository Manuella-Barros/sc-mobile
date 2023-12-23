import { Box, Center, HStack, NativeBaseProvider, Text, VStack, View } from "native-base";
import {StatusBar} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/routes/AppRoutes";

export default function App() {
  return (
    <NativeBaseProvider>
        <StatusBar translucent={false}/>

        <NavigationContainer>
            <AppRoutes/>
        </NavigationContainer>
    </NativeBaseProvider>
  );
}