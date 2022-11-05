import React, { useEffect } from 'react'
import RoomDetailsContainer from '../../containers/roomDetailsContainer/RoomDetailsContainer'
import SideBarNav from '../../containers/sideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/sideBar/style'
import { Container } from './style'

const RoomDetails = () => {
  useEffect(() => {
    document.title = "Admin | Room Types"
  }, [])
  return (
    <Container>
        <ContainerInvisible></ContainerInvisible>
        <SideBarNav roomdetails/>
        <RoomDetailsContainer/>
    </Container>
  )
}

export default RoomDetails