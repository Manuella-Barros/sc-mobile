import { Box, Center, HStack, NativeBaseProvider, Text, VStack, View } from "native-base";
import {StatusBar} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/routes/AppRoutes";
import {ContextProvider} from "./src/context/GlobalContext";

export default function App() {

  return (
      <ContextProvider>
          <NativeBaseProvider>
          <StatusBar translucent={false}/>

              <NavigationContainer>
                  <AppRoutes/>
              </NavigationContainer>
          </NativeBaseProvider>
      </ContextProvider>
  );
}