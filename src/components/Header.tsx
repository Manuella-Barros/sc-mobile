import React, {ReactNode} from 'react';
import {Input, Text, View} from "native-base";

interface HeaderProps{
    children: string | ReactNode,
}

function Header({ children }: HeaderProps) {
    return (
        <View bg={"#341E8B"} mb={4} pt={4} px={3} >

            {
                typeof children == "string" &&
                <Text
                    rounded={4}
                    mb={-4}
                    p={4}
                    fontSize={24}
                    alignSelf={"flex-start"}
                    color={"white"}
                    bg={"#472EA9"}
                > {children} </Text>
            }

            {
                typeof children == "object" &&
                <View
                    rounded={4}
                    mb={-4}
                    p={4}
                    bg={"#472EA9"}
                    w={"full"}
                >
                    {children}
                </View>
            }
        </View>
    );
}

export default Header;