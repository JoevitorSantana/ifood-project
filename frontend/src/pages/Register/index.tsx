import logoIfood from '../../assets/ifood.png';
import google from '../../assets/facebook.svg';
import illustration from '../../assets/svgSignIn.svg';
import { Container, Form, Title, Options, FacebookButton, GoogleButton, TwoOptions, Option, Circle } from './styles';
import { AiFillFacebook} from 'react-icons/ai'
import { Link } from 'react-router-dom';

export function Register(){
    return(
        <>
            <Container>
                <Link to="/">
                    <img className="ifood" src={logoIfood} alt="logo" />
                </Link>
                <Circle>
                    
                    <img src={illustration} alt="svg" />
                </Circle>
                <Form>
                    <Title>
                        <h1>Falta pouco para matar sua fome!</h1>
                        <h3>Como deseja continuar?</h3>
                    </Title>
                    <Options>
                        <FacebookButton>
                            <AiFillFacebook />
                            <h1>Continuar com Facebook</h1>
                        </FacebookButton>
                        <GoogleButton>
                            <img src={google} alt="google" />
                            <h1>Continuar com Google</h1>
                        </GoogleButton>
                        <TwoOptions>
                            <Option>
                                <span>Celular</span>
                            </Option>                            
                            <Option>
                                <Link to="/entrar/email">
                                    <span>E-mail</span>
                                </Link>
                            </Option>                            
                        </TwoOptions>
                    </Options>
                </Form>
            </Container>
        </>        
    );
}