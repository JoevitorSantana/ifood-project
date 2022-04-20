import { Content, Icon, Container, Options, StartOptions, SignOptions } from "./styles"
import iFoodIcon from '../../../assets/ifood.png';
import { Button } from "../Button";
import { Link } from "react-router-dom";

export function Header(){
    return(      
        <Container>
            <Content>
                <StartOptions>
                    <Icon>
                        <img src={iFoodIcon} alt="logo" />
                    </Icon>
                    <Options>
                        <a href=" ">Entregador</a>
                        <a href=" ">Restaurante e Mercado</a>
                        <a href=" ">Carreiras</a>
                        <a href=" ">iFood Card</a>
                    </Options>
                </StartOptions>
                <SignOptions>
                    <Link to="/entrar">
                        <a href=" ">criar conta</a>
                    </Link>
                    <Link to="/entrar">
                        <Button>Entrar</Button>
                    </Link>
                </SignOptions>
            </Content>      
        </Container>    
    )
}