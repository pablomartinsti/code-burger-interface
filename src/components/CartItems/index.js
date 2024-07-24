import React from 'react'
import { useCart } from '../../hooks/CartContext'

import { Container, Header, Body, EmptyCart } from './styles'
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
        <p style={{ paddingRight: 30 }}>Quantidade</p>
        <p>Total</p>
      </Header>

      {CartProducts && CartProducts.length > 0 ? (
        CartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <p>{product.quantity}</p>
            <p>{formatCurrency(product.quantity * product.price)}</p>
          </Body>
        ))
      ) : (
        <EmptyCart>Carrinho Vazio</EmptyCart>
      )}
    </Container>
  )
}
