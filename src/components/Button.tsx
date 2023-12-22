import React from 'react';
import { Button as NativeBaseButton, Text, IButtonProps } from "native-base";

interface ButtonProps extends IButtonProps{
    children: string,
}

function Button({children, ...props} : ButtonProps) {
    return (
        <NativeBaseButton {...props}>
            <Text color={"white"}> {children} </Text>
        </NativeBaseButton>
    );
}

export default Button;