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
    position: fixed; top: 0; left: 0;
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

export const Form = styled.form`    
    width: 100%;
    max-width: 500px;
    margin-top: -1000px;
    margin-left: 800px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 5%), 0 4px 16px rgb(0 0 0 / 6%);

    img {
        width: 20px;
        height: 20px;
    }
`;

export const Title = styled.div`

    text-align: center;

    h1 {
        color: #414143;        
        padding: 45px 45px 20px 45px;
        font-size: 35px;
        font-weight: 500;
    }

    h3 {
        color: #717171;
        font-size: 23px;
        font-weight: 400;
        margin-bottom: 30px; 
    }
`;

export const Options = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
`;


export const FacebookButton =styled.div`
    background: #4065b4;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    justify-content: center;
    box-shadow: 0 1px 4px rgb(0 0 0 / 5%), 0 4px 16px rgb(0 0 0 / 6%);
    margin-bottom: 25px;
    h1{
        font-size: 15px;
        text-align: center;
        margin: 0 80px 0 80px;        
    }

    svg {
        width: 30px;
        height: 30px;
    }

    &:hover{
        filter: brightness(0.9);
        cursor: pointer;
    }
    
`;

export const GoogleButton =styled.div`
    background: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    justify-content: center;
    box-shadow: 0 1px 4px rgb(0 0 0 / 5%), 0 4px 16px rgb(0 0 0 / 6%);

    h1{
        font-size: 15px;
        text-align: center;
        margin: 0 80px 0 80px;
        color: #717171;
    }

    svg {
        width: 30px;
        height: 30px;
    }

    &:hover{
        filter: brightness(0.95);
        cursor: pointer;
    }
`;

export const TwoOptions =styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 400px;
    margin: 20px auto;
    padding-bottom: 100px;
`;

export const Option =styled.div`
    display: flex;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    width: 100%;
    height: 50px;
    color: #a6a6a6;
    align-items: center;
    justify-content: center;
    transition: .1s;

    a{
        text-decoration: none;
        color: #a6a6a6;

        &:hover{
            color: #FFF;
        }
    }
    
    &:last-child{
        margin-left: 20px;
    }

    &:hover{
        background: #ea1d2c;
        color: #fff;
        cursor: pointer;

        a {
            color: #fff;
        }
    }
`;
