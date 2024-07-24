import React, { useEffect, useState } from 'react'
import Category from '../../assets/CATEGORIAS.svg'
import api from '../../services/api'
import Carousel from 'react-elastic-carousel'
import { Container, CategoryImg, Containeritems, Image, Button } from './styles'

export function CategoryCarousel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ]

  return (
    <Container>
      <CategoryImg src={Category} alt="logo da categoria" />

      <Carousel
        itemsToShow={4}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {categories &&
          categories.map(Category => (
            <Containeritems key={Category.id}>
              <Image src={Category.url} alt="foto da categoria" />
              <Button>{Category.name}</Button>
            </Containeritems>
          ))}
      </Carousel>
    </Container>
  )
}
