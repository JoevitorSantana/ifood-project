import styled, { css } from "styled-components";

interface ContainerProps{
    hasBorder: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: row;
    background: #fff;
    border-radius: 4px;
    color: #a6a6a6;
    height: 45px;
    width: 100%;
    max-width: 55%;
    align-items: center;   
    
    ${(props) => props.hasBorder && css`
        border: 1px solid #dcdcdc;

        input{
            margin: 0 10px 0 10px;
        }
    `}

    img {
        padding: auto;
        margin: 0 20px;
        width: 20px;
        height: 20px;        
    }

    input {
        flex: 1;
        background: none;
        border: 0;
        color: #a6a6a6;
        width: 100%;
        &::placeholder {
            color: #a6a6a6;
        }
    }

    svg {
        margin: 0 10px 0 10px;
    }
`;