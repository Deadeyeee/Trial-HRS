import React from 'react'
import SideBarNav from '../../containers/frontSideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/frontSideBar/style'
import MessagesContainer from '../../containers/frontMessagesContainer/MessagesContainer'
import { Container } from './styles'

const FrontMessages = () => {
  return (
    <Container>
        <ContainerInvisible></ContainerInvisible>
        <SideBarNav message/>
        <MessagesContainer />
    </Container>
  )
}

export default FrontMessages