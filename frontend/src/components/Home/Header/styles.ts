import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;   
    background-color: #f7f7f7; 
`;

export const Content = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 138px;
    max-width: 1280px;        
    color: #000;
    margin: 0 auto;    
`;

export const Icon = styled.div`
    
    padding: 25px;

    img {
        height: 40px;
        width: 80px;
    }
`;

export const StartOptions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Options = styled.div`
    display: flex;
    flex-direction: row;    
    
    a {
        font-size: 15px;
        text-decoration: none;
        margin: 0 22px;
        color: #3e3e3e;

        &:hover{
            color: #000;
        }
    }

`;

export const SignOptions = styled.div`
    display: flex;
    flex-direction: row;            
    align-items: center;
    a {
        text-decoration: none;        
        font-size: 15px;
        color: #ea1d2c;
        font-weight: 600;
        margin: 0 25px;
    }
`;