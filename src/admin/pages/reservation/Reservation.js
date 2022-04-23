import React from 'react'
import { ReservationContainer } from '../../containers/reservationContainer/ReservationContainer'
import SideBarNav from '../../containers/sideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/sideBar/style'
import { Container } from './style'

const Reservation = () => {
    return (
        <Container>
            <ContainerInvisible></ContainerInvisible>
            <SideBarNav reservation />
            <ReservationContainer/>
        </Container>
    )
}

export default Reservation