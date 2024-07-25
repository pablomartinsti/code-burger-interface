import React from 'react'
import { useCart } from '../../hooks/CartContext'

import { Container, Header, Body, EmptyCart } from './styles'
import formatCurrency from '../../Utils/formatCurrency'
import trash from '../../assets/trash.svg'

export function CartItems() {
  const { CartProducts, increaseProducts, decreaseProducts, deleteProducts } =
    useCart()
  console.log(CartProducts)

  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p style={{ paddingRight: 30 }}>Quantidade</p>
        <p>Total</p>
        <p>Ecluir</p>
      </Header>

      {CartProducts && CartProducts.length > 0 ? (
        CartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <button onClick={() => decreaseProducts(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseProducts(product.id)}>+</button>
            </div>
            <p>{formatCurrency(product.quantity * product.price)}</p>
            <img
              className="trash"
              onClick={() => deleteProducts(product.id)}
              src={trash}
            />
          </Body>
        ))
      ) : (
        <EmptyCart>Carrinho Vazio</EmptyCart>
      )}
    </Container>
  )
}
