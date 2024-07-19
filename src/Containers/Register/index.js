import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import api from '../../services/api'

import RegisterImg from '../../assets/registerImg.svg'
import Logo from '../../assets/logo.svg'
import { Container, RegisterImage, ContainerItens, Label, Input, SignInLink, ErrorMessage } from './styles'
import Button from "../../components/Button";
import { toast } from "react-toastify";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Register() {


    const schema = yup.object({
        name: yup.string().required('O seu nome é obrigatório'),
        email: yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
        password: yup.string().min(6, "A senha deve ter pelo 6 digitos").required("A senha é obrigatória"),
        confirmPassword: yup.string().required('A senha é obrigatória').oneOf([yup.ref('password')], 'As senhas devem ser iguais')
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async clientData => {

        try {

            const { status } = await api.post('/users', {
                name: clientData.name,
                email: clientData.email,
                password: clientData.password
            }, { validateStatus: () => true })


            if (status === 201 || status === 200) {
                toast.success('Cadastro criando com sucesso')
            }
            else if(status === 409){
                toast.error("E-mail cadastrado! Faça o login para continuar")
            }else{
                throw new Error()
            }
        } catch (err) {
            toast.error('Falha no sistema! Tente novamente')

        }

    }

    return (
        <Container>
            <RegisterImage src={RegisterImg} alt="register-image" />
            <ContainerItens>

                <img src={Logo} alt="logo-code-burger" />

                <h1>Cadastre-se</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>

                    <Label>Nome</Label>
                    <Input type="text" {...register("name")} error={errors.name?.message} />
                    <ErrorMessage> {errors.name?.message} </ErrorMessage>

                    <Label>Email</Label>
                    <Input type="email" {...register("email")} error={errors.email?.message} />
                    <ErrorMessage> {errors.email?.message} </ErrorMessage>

                    <Label>Senha</Label>
                    <Input type="password" {...register("password")} error={errors.password?.message} />
                    <ErrorMessage> {errors.password?.message} </ErrorMessage>


                    <Label>Confirma Senha</Label>
                    <Input type="password"{...register("confirmPassword")} error={errors.confirmPassword?.message} />
                    <ErrorMessage> {errors.confirmPassword?.message} </ErrorMessage>


                    <Button type="submit" style={{ marginTop: 25, marginBottom: 25 }}>Confirmar</Button>

                </form>

                <SignInLink>Já possui conta? <Link style={{color:"white"}} to="/login"> Clique aqui.</Link> </SignInLink>
            </ContainerItens>

        </Container>
    )
}

export default Register