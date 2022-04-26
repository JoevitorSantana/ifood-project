import styled from "styled-components";

export const Container = styled.button`
    margin: 0 25px;
    background-color: #ea1d2c;
    color: #fff;
    width: 100px;
    height: 45px;
    border-radius: 5px;
    font-weight: 600;
    font-size: 15px;
    border: none;    
    transition: filter 0.2s;
    &:hover {
        filter: brightness(0.90);
    }
`;
