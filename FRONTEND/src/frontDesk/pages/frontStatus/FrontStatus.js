import React from 'react'
import SideBarNav from '../../containers/frontSideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/frontSideBar/style'
import StatusContainer from '../../containers/frontStatusContainer/StatusContainer'
import { Container } from './style'

const FrontStatus = () => {
  return (
    <Container>
        <ContainerInvisible></ContainerInvisible>
        <SideBarNav clients />
        <StatusContainer />
    </Container>
  )
}

export default FrontStatus