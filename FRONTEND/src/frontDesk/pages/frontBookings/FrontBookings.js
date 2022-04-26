import React, { useEffect } from 'react'
import BookingsContainer from '../../containers/frontBookingsContainer/BookingsContainer'
import SideBarNav from '../../containers/frontSideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/frontSideBar/style'
import { Container } from './style'

const FrontBookings = () => {
  useEffect(() => {
    document.title = "Front Desk | Bookings"
  }, [])
  return (
    <Container>
            <ContainerInvisible></ContainerInvisible>
        <SideBarNav booking/>
        <BookingsContainer/>
    </Container>
  )
}

export default FrontBookings