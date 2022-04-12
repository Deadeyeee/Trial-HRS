import React from 'react'
import SideBarNav from '../../containers/sideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/sideBar/style'
import StatusContainer from '../../containers/statusContainer/StatusContainer'
import { Container } from './style'

const Status = () => {
  return (
    <Container>
        <ContainerInvisible></ContainerInvisible>
        <SideBarNav Status />
        <StatusContainer />
    </Container>
  )
}

export default Status