import React, {ReactNode} from 'react';
import { Button as NativeBaseButton, Text, IButtonProps } from "native-base";

interface ButtonProps extends IButtonProps{
    children: ReactNode | string,
}

function Button({children, ...props} : ButtonProps) {
    return (
        <NativeBaseButton {...props}>
            {typeof children === 'string' ? <Text color={"white"} > {children} </Text> : children  }

        </NativeBaseButton>
    );
}

export default Button;