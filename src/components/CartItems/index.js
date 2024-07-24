import React from 'react'
import { useCart } from '../../hooks/CartContext'

import { Container, Header, Body } from './styles'
import formatCurrency from '../../Utils/formatCurrency'

export function CartItems() {
  const { CartProducts } = useCart()
  console.log(CartProducts)

  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
      </Header>

      {CartProducts &&
        CartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <p>{product.quantity}</p>
            <p>{formatCurrency(product.quantity * product.price)}</p>
          </Body>
        ))}
    </Container>
  )
}
