import styled from "styled-components";

export const Circle = styled.div`
    background: #fddeee;
    border-radius: 50%;
    margin: -300px 0 0 -300px;
    width: 1280px;
    height: 1280px;
    z-index: -1;


    img {
        width: 500px;
        height: 500px;
        margin: 300px 0 0 500px;
    }
`;

export const Container = styled.div`
    position: fixed; 
    top: 0; left: 0;
    box-sizing: border-box;
    width: 100%;
    .ifood{
        width: 90px;
        height: 50px;   
        margin: 20px; 
        
        &:hover{
            cursor: pointer;
        }
    }
`;

export const FormTable = styled.div`    
    width: 100%;
    max-width: 500px;
    margin-top: -950px;
    margin-left: 800px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 5%), 0 4px 16px rgb(0 0 0 / 6%);
    padding-bottom: 50px;

    .names {
        display: flex;
        align-items: center;
        flex-direction: row;
        width: 450px;     
        margin: 0 0 -16px 0;   
        
        .name {
            width: 300px;
            margin: 0 -120px 0 0;
        }
    }    

    div {
        width: 750px;
        margin: 20px;

        h1{
            color: #717171;
            font-size: 40px;    
            margin: 0 40px 20px 35px;    
        }
    
        span {
            color: #ea1d2c;
            font-size: 40px;
            font-weight: 200;            
        }

        a {
            text-decoration: none;            
        }
    }
    
`;


export const Button = styled.button`
    margin: 0 20px;
    background-color: #ea1d2c;
    color: #fff;
    width: 412px;
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