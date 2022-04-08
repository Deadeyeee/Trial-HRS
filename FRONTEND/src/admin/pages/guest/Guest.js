import React from 'react'
import GuestContainer from '../../containers/guestContainer/GuestContainer'
import SideBarNav from '../../containers/sideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/sideBar/style'
import { Container } from './style'

const Guest = () => {
  return (
    <Container>
        <ContainerInvisible></ContainerInvisible>
        <SideBarNav guest/>
        <GuestContainer/>
    </Container>
  )
}

export default Guest