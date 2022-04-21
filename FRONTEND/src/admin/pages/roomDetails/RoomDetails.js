import React from 'react'
import RoomDetailsContainer from '../../containers/roomDetailsContainer/RoomDetailsContainer'
import SideBarNav from '../../containers/sideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/sideBar/style'
import { Container } from './style'

const RoomDetails = () => {
  return (
    <Container>
        <ContainerInvisible></ContainerInvisible>
        <SideBarNav roomDetails/>
        <RoomDetailsContainer/>
    </Container>
  )
}

export default RoomDetails