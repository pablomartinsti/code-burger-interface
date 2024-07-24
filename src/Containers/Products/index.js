import React, { useEffect, useState } from 'react'
import ProductsLogo from '../../assets/logo-produtos.svg'
import {
  Container,
  ProductsImg,
  CategoryButton,
  CategoryMenu,
  ProductsContainer
} from './styles'
import api from '../../services/api'
import { CardProduct } from '../../components'
import formatCurrency from '../../Utils/formatCurrency'

export function Products() {
  const [categories, setCategories] = useState([])
  const [produtcs, setProducts] = useState([])
  const [FilteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'todas' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get('products')

      const newProducts = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }

    loadProducts()

    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(produtcs)
    } else {
      const newFilteredProducts = produtcs.filter(
        produtc => produtc.category_id === activeCategory
      )

      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, produtcs])

  return (
    <Container>
      <ProductsImg src={ProductsLogo} alt="logo dos Produtos" />
      <CategoryMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoryMenu>
      <ProductsContainer>
        {FilteredProducts &&
          FilteredProducts.map(produtc => (
            <CardProduct key={produtc.id} produtc={produtc} />
          ))}
      </ProductsContainer>
    </Container>
  )
}
