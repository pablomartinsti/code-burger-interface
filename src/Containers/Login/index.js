import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import LoginImg from '../../assets/bg.svg'
import Logo from '../../assets/logo.svg'
import Button from "../../components/Button";
import { useUser } from "../../hooks/UserContext";
import api from '../../services/api'
import { Container, LoginImage, ContainerItens, Label, Input, SignInLink, ErrorMessage } from './styles'
import { useHistory,Link } from "react-router-dom/";

function Login() {
    const history = useHistory()

    const { putUserData } = useUser()

    const schema = yup.object({
        email: yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
        password: yup.string().min(6, "A senha deve ter pelo 6 digitos").required("A senha é obrigatória"),
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async clientData => {

        const { data } = await toast.promise(
            api.post('/session', {
                email: clientData.email,
                password: clientData.password
            }),
            {
                pending: 'Verificando seu dados',
                success: 'Seja bem-vindo(a)',
                error: ' Verifique seu e-mail e senha'
            }

            
        )

        putUserData(data)

        setTimeout(() =>{
            history.push('/')
        }, 1000)
        

    }

    return (
        <Container>
            <LoginImage src={LoginImg} alt="login-image" />
            <ContainerItens>

                <img src={Logo} alt="logo-code-burger" />

                <h1>Login</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input type="email" {...register("email")} error={errors.email?.message} />
                    <ErrorMessage> {errors.email?.message} </ErrorMessage>

                    <Label>Senha</Label>
                    <Input type="password"{...register("password")} error={errors.password?.message} />
                    <ErrorMessage> {errors.password?.message} </ErrorMessage>

                    <Button type="submit" style={{ marginTop: 50, marginBottom: 25 }}>Entrar</Button>

                </form>

                <SignInLink>Não possui conta? <Link style={{color:"white"}} to="/cadastro"> Clique aqui.</Link> </SignInLink>
            </ContainerItens>

        </Container>
    )
}

export default Login