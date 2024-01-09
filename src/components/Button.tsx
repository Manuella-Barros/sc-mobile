import React, {ReactNode} from 'react';
import { Button as NativeBaseButton, Text, IButtonProps } from "native-base";

interface ButtonProps extends IButtonProps{
    children: ReactNode,
}

function Button({children, ...props} : ButtonProps) {
    console.log(typeof children);

    return (
        <NativeBaseButton {...props}>
            <Text color={"white"}> {children} </Text>
        </NativeBaseButton>
    );
}

export default Button;