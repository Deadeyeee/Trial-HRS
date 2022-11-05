import React, { useEffect } from 'react'
import RoomDetailsContainer from '../../containers/frontRoomDetailsContainer/RoomDetailsContainer'
import SideBarNav from '../../containers/frontSideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/frontSideBar/style'
import { Container } from './style'

const FrontRoomDetails = () => {
  useEffect(() => {
    document.title = "Front Desk | Room Types"
  }, [])
  return (
    <Container>
        <ContainerInvisible></ContainerInvisible>
        <SideBarNav roomdetails/>
        <RoomDetailsContainer/>
    </Container>
  )
}

export default FrontRoomDetails