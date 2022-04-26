import React from 'react'
import RoomStatusContainer from '../../containers/frontRoomStatusContainer/RoomStatusContainer'
import SideBarNav from '../../containers/frontSideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/frontSideBar/style'
import { Container } from './style'

const FrontRoomStatus = () => {
  return (
    <Container>
        <ContainerInvisible></ContainerInvisible>
        <SideBarNav roomstatus/>
        <RoomStatusContainer/>
    </Container>
  )
}

export default FrontRoomStatus