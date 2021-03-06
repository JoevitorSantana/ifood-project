import { InputHTMLAttributes, useCallback, useRef, useState } from "react";
import { IconBaseProps } from "react-icons";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    containerStyle?:Record<string, unknown>;
    icon: React.ComponentType<IconBaseProps>;
}

export function Input({containerStyle = {}, icon: Icon, ...rest}:InputProps){

    const inputRef = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        setIsFilled(!!inputRef.current?.value);
    }, []);

    return(
        <Container style={containerStyle} isFilled={isFilled}  isFocused={isFocused}>
            {Icon && <Icon size={25}/>}
            <input 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                ref={inputRef}
                {...rest}
            />
        </Container>
    );
};