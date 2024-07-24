import React from 'react'
import PropTypes from 'prop-types'

import { UserProvider } from './UserContext'

const appProvider = ({ children }) => <UserProvider>{children}</UserProvider>

export default appProvider

appProvider.propTypes = {
  children: PropTypes.node
}
