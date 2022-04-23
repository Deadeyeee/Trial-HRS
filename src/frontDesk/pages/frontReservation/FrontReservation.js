import React from 'react'
import { ReservationContainer } from '../../containers/frontReservationContainer/ReservationContainer'
import SideBarNav from '../../containers/frontSideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/frontSideBar/style'
import { Container } from './style'

const FrontReservation = () => {
    return (
        <Container>
            <ContainerInvisible></ContainerInvisible>
            <SideBarNav reservation />
            <ReservationContainer/>
        </Container>
    )
}

export default FrontReservation