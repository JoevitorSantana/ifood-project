import { Button } from "../../components/Home/Button";
import { Header } from "../../components/Home/Header";
import { Container, Hero, Title, AdressInput, Cards, Card } from "./styles";
import { FormHandles} from '@unform/core';
import {Input} from '../../components/Home/Input';
import hamburguer from '../../assets/hamburger.webp';
import {GrLocation} from 'react-icons/gr'
import market from '../../assets/market.webp';
import { useCallback, useRef } from "react";
import { Form } from "@unform/web";

export function Home(){

    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(() => {
        console.log('Oi');
    }, []);

    return(
        <>
            <Header />
            <Hero>
            </Hero>
            <Container>
                <Title>
                    <h1>Tudo pra facilitar seu dia a dia</h1>
                    <h3>O que você precisa está aqui. Peça e receba onde estiver.</h3>
                </Title>
                <Form ref={formRef} onSubmit={handleSubmit} >
                    <AdressInput>                        
                            <Input name="address" icon={GrLocation} placeholder="Endereço de Entrega e número"/>
                            <Button type="submit">Buscar</Button>                    
                    </AdressInput>
                </Form>
                <Cards>
                    <Card>
                        <h1>Restaurante</h1>
                        <div>                            
                            <button>Ver Opções &nbsp; &gt;</button>
                            <img src={hamburguer} alt="" />
                        </div>                        
                    </Card>
                    <Card>
                        <h1>Mercado</h1>
                        <div>                        
                            <button>Ver Opções &nbsp; &gt;</button>
                            <img src={market} alt="" />
                        </div>                        
                    </Card>
                </Cards>
            </Container>
            
        </>
    )
}