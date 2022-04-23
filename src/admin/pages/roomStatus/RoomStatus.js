import React from 'react'
import RoomStatusContainer from '../../containers/roomStatusContainer/RoomStatusContainer'
import SideBarNav from '../../containers/sideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/sideBar/style'
import { Container } from './style'

const RoomStatus = () => {
  return (
    <Container>
        <ContainerInvisible></ContainerInvisible>
        <SideBarNav roomstatus/>
        <RoomStatusContainer/>
    </Container>
  )
}

export default RoomStatus