import React, { useEffect, useState } from 'react'
import Offers from '../../assets/OFERTAS.svg'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import Carousel from 'react-elastic-carousel'
import formatCurrency from '../../Utils/formatCurrency'
import { Container, OfferImg, Containeritems, Image, Button } from './styles'
import { useCart } from '../../hooks/CartContext'

export function OffersCarousel() {
  const [offers, setOffers] = useState([])
  const { putProductInCart } = useCart()
  const { push } = useHistory()

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')

      const onlyOffers = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })

      setOffers(onlyOffers)
    }

    loadOffers()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ]

  return (
    <Container>
      <OfferImg src={Offers} alt="logo da categoria" />

      <Carousel
        itemsToShow={4}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {Offers &&
          offers.map(product => (
            <Containeritems key={product.id}>
              <Image src={product.url} alt="foto do produto" />
              <p>{product.name}</p>
              <p>{product.formatedPrice}</p>
              <Button
                onClick={() => {
                  putProductInCart(product)
                  push('carrinho')
                }}
              >
                Peça agora
              </Button>
            </Containeritems>
          ))}
      </Carousel>
    </Container>
  )
}
