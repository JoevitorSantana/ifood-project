import logoIfood from '../../../assets/ifood.png';
import illustration from '../../../assets/svgSignIn.svg';
import { FormHandles} from '@unform/core';
//import * as Yup from 'yup';
import { Container, FormTable, Circle, Button } from './styles';
import { Link } from 'react-router-dom';
import { Input } from '../../../components/Home/Input';
import { AiFillLock } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import { BsFillPersonPlusFill, BsPhone } from 'react-icons/bs';
import { useCallback, useRef } from 'react';
//import api from '../../../service/api';
//import getValidationErrors from '../../../utils/getValidationErrors';
import {Form} from '@unform/web';
//import { useToast } from '../../../hooks/ToastContext';
//import { useNavigate } from 'react-router-dom';

interface SignUpFormData{
    name: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
}

export function Email(){

    const formRef = useRef<FormHandles>(null);

    //const {addToast} = useToast();

    //const history = useNavigate();

    const handleSubmit = useCallback(async(data:SignUpFormData) => {
        /*try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome Obrigatório'),
                lastName: Yup.string().required('Último nome Obrigatório'),
                email: Yup.string().email('Email Inválido').required('Email obrigatório'),
                phone: Yup.string().required('Telefone obrigatório!'),
                password: Yup.string().min(6, 'Senha com no mínimo 6 dígitos'),
            });            

            await schema.validate(data, {
                abortEarly: false,
            })

            api.post('/users/create', data)

            addToast({
                type: 'success',
                title: "Cadastro realizado",
                description: "Você já pode fazer seu logon"
            });

            

            history('/entrar');
            
        } catch(err) {

            const errors = getValidationErrors(err as Yup.ValidationError);

            formRef.current?.setErrors(errors);

            addToast({
                type: 'error',
                title: 'Erro no cadastro!',
                description:
                'Ocorreu um erro ao enviar dados, por favor tente novamente.',
            });

        }*/
    }, [/*history, addToast*/]);

    return(
        <>
            <Container>
                <Link to="/">
                    <img className="ifood" src={logoIfood} alt="logo" />
                </Link>
                <Circle>                    
                    <img src={illustration} alt="svg" />
                </Circle>                
                    <FormTable>
                        <div>
                            <Form ref={formRef} onSubmit={handleSubmit}>
                                <Link to="/entrar">
                                    <span>&lt;</span>
                                </Link>
                                <h1>Faça seu Cadastro</h1>
                                <div className="names">                            
                                    <div className="name">
                                        <Input name="name" icon={BsFillPersonPlusFill} placeholder='Nome' hasBorder={true}/>
                                    </div>                            
                                    <Input name="lastName" placeholder='Último nome' hasBorder={true}/>
                                </div>                        
                                <Input name="email" icon={GrMail} placeholder='Informe o seu email' hasBorder={true}/>
                                <Input name="phone" icon={BsPhone} placeholder='Celular' hasBorder={true}/>
                                <Input name="password" icon={AiFillLock} type='password' placeholder='Informe uma senha' hasBorder={true}/>
                                <Link to={'/restaurantes'}>
                                <Button type="submit">Continuar</Button>
                                </Link>
                            </Form>
                        </div>
                    </FormTable>
            </Container>
        </>        
    );
}