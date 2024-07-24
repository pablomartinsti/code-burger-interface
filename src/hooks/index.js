import React from 'react'
import PropTypes from 'prop-types'

import { UserProvider } from './UserContext'
import { CartProvider } from './CartContext'

const appProvider = ({ children }) => (
  <UserProvider>
    <CartProvider>{children}</CartProvider>
  </UserProvider>
)

appProvider.propTypes = {
  children: PropTypes.node
}

export default appProvider
