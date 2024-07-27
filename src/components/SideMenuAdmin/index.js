import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout'
import listLinks from './menu-list'
import { useUser } from '../../hooks/UserContext'

import { Container, ItemContainer, Listlink } from './styles'


export function SideMenuAdmin() {
  const { logout } = useUser()


  return (
    <Container>
      <hr></hr>
      {listLinks.map(item => (
        <ItemContainer key={item.id}>
          <item.icon className='icon' />
          <Listlink to={item.link}>{item.label}

          </Listlink>
        </ItemContainer>
      ))}
      <hr></hr>
      <ItemContainer style={{ position: 'absolute', bottom: '30px' }}>
        <LogoutIcon style={{ color: '#ffffff' }} />
        <Listlink to='/login' onClick={logout}>
          Sair
        </Listlink>
      </ItemContainer>
    </Container>
  )
}
