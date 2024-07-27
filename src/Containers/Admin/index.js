import React from 'react'

import { Container } from './style'
import Orders from './Ordes'
import { SideMenuAdmin } from '../../components'

export function Admin() {
  return (
    <Container>
      <SideMenuAdmin />
      <Orders />
    </Container>
  )
}
