import React from 'react'
import { useHistory } from 'react-router-dom'
import Person from '../../assets/user.svg'
import Cart from '../../assets/carrinho.svg'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  Line,
  PageLink,
  ContainerText,
  PageLinkExit
} from './styles'

export function Header() {
  const {
    push,
    location: { pathname }
  } = useHistory()

  console.log(pathname)

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink onClick={() => push('/carrinho')}>
          <img src={Cart} alt="carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="usuario" />
        </PageLink>
        <ContainerText>
          <p>Olá Pablo</p>
          <PageLinkExit>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
