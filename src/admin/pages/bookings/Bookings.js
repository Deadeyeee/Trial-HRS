import React from 'react'
import BookingsContainer from '../../containers/bookingsContainer/BookingsContainer'
import SideBarNav from '../../containers/sideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/sideBar/style'
import { Container } from './style'

const Bookings = () => {
  return (
    <Container>
            <ContainerInvisible></ContainerInvisible>
        <SideBarNav booking/>
        <BookingsContainer/>
    </Container>
  )
}

export default Bookings