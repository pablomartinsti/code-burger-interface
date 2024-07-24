import React from 'react'
import CartLogo from '../../assets/logo-carrinho.svg'
import { Container, CartImg } from './styles'
import { CartItems } from '../../components'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="logo da carrinho" />
      <CartItems />
    </Container>
  )
}
