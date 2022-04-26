import styled from "styled-components";



export const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    height: 100%;    
`;

export const Hero = styled.div`
    padding: 0 0 373px 0;    
    z-index: -10;
    background-color: #f7f7f7;
`;

export const Title = styled.div`    
    margin-top: -353px;
    margin-bottom: 50px;
    text-align: center;
    h1 {        
        color: #000;
        font-weight: 600;
        font-size: 35px;
    }

    h3 {
        color: #717171;
        font-size: 15px;
        margin-top: 15px;
    }
`;

export const AdressInput = styled.div`    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`;

export const Cards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Card = styled.div`
    display: flex;   
    flex-direction: column;     
    background: #ea1d2c;
    border-radius: 15px;
    margin: 16px;
    width: 100%;
    max-width: 31.5%;
    height: 225px;

    &:last-child{
        background: #B6D048;

        div{
            button {
                background: #9EB53E;
            }
        }                    
    }

    h1{
        padding: 15px;
        font-weight: 600;                
    }

    div {
        display: flex;
        align-items: center;

        img {        
            width: 225px;
            height: 147px;
        }
    
        button{
            background: #cc1825;
            color: #fff;
            border: none;
            padding: 5px 20px 5px 20px;        
            border-radius: 10px;
            margin: 10px;
            font-size: 15px;
            font-weight: 600;            
        }
    }
    
`;