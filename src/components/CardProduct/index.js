import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import { Container, Image, ProductName, ProductPrice } from './styles'

function CardProduct({ produtc }) {
  return (
    <Container>
      <Image src={produtc.url} alt="imagem do produto" />
      <div>
        <ProductName>{produtc.name}</ProductName>
        <ProductPrice>{produtc.formatedPrice}</ProductPrice>
        <Button>Adicionar</Button>
      </div>
    </Container>
  )
}

export default CardProduct

CardProduct.propTypes = {
  produtc: PropTypes.object
}
