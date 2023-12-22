import { Box, Center, HStack, NativeBaseProvider, Text, VStack, View } from "native-base";
import Form from "./src/screens/Form";
import {StatusBar} from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <NativeBaseProvider>
        <StatusBar translucent={false}/>
        {/*<Form/>*/}
        <Home/>
    </NativeBaseProvider>
  );
}