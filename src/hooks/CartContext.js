import React, { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [CartProducts, setCartProducts] = useState([])

  const updateLocalStorage = async products => {
    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(products))
  }

  const putProductInCart = async product => {
    const cartIndex = CartProducts.findIndex(prd => prd.id === product.id)

    let newCartProducts = []

    if (cartIndex >= 0) {
      newCartProducts = CartProducts

      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1

      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...CartProducts, product]
      setCartProducts(newCartProducts)
    }

    await updateLocalStorage(newCartProducts)
  }

  const deleteProducts = async productId => {
    const newCart = CartProducts.filter(product => product.id !== productId)

    setCartProducts(newCart)

    await updateLocalStorage(newCart)
  }

  const increaseProducts = async productId => {
    const newCart = CartProducts.map(product => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })

    setCartProducts(newCart)

    await updateLocalStorage(newCart)
  }

  const decreaseProducts = async productId => {
    const cartIndex = CartProducts.findIndex(pd => pd.id === productId)

    if (CartProducts[cartIndex].quantity > 1) {
      const newCart = CartProducts.map(product => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })
      setCartProducts(newCart)

      await updateLocalStorage(newCart)
    } else {
      deleteProducts(productId)
    }
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clienCartData = await localStorage.getItem('codeburger:cartInfo')

      if (clienCartData) {
        setCartProducts(JSON.parse(clienCartData))
      }
    }

    loadUserData()
  }, [])
  return (
    <CartContext.Provider
      value={{
        putProductInCart,
        CartProducts,
        increaseProducts,
        decreaseProducts,
        deleteProducts
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used with UserContext')
  }
  return context
}
CartProvider.propTypes = {
  children: PropTypes.node
}
