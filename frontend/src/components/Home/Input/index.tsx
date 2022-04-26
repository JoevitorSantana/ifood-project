import { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import {BsKeyboardFill} from 'react-icons/bs'
import { Container } from './styles';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
    hasBorder?: boolean | any;
}

export function Input({name, icon: Icon, hasBorder, ...rest}:InputProps){

    
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, defaultValue, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);


    const [isFocused, setIsFocused] = useState(false);    

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

    return(
        <Container hasBorder={hasBorder}>
            {Icon && <Icon size={20}/>}     
            <input onFocus={handleInputFocus} onBlur={handleInputBlur} defaultValue={defaultValue} ref={inputRef} {...rest}/>
            { isFocused && <BsKeyboardFill />}            
        </Container>
    )
}