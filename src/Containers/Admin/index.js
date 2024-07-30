import React from 'react'
import PropTypes from 'prop-types'
import paths from '../../constants/paths'

import { Container, Containeritems } from './style'
import Orders from './Ordes'
import ListProducts from './ListProducts'
import { SideMenuAdmin } from '../../components'
import NewProduct from './NewProducts'
import EditProduct from './EditProduct'

export function Admin({ match: { path } }) {

  return (
    <Container>
      <SideMenuAdmin path={path} />
      <Containeritems>
        {path === paths.Order && <Orders />}
        {path === paths.Products && <ListProducts />}
        {path === paths.NewProduct && <NewProduct />}
        {path === paths.EditProduct && <EditProduct />}
      </Containeritems>

    </Container>
  )
}

Admin.protoTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
