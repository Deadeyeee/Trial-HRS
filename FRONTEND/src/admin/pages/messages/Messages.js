import React from 'react'
import SideBarNav from '../../containers/sideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/sideBar/style'
import MessagesContainer from '../../containers/messagesContainer/MessagesContainer'
import { Container } from './styles'

const Messages = () => {
  return (
    <Container>
        <ContainerInvisible></ContainerInvisible>
        <SideBarNav message/>
        <MessagesContainer />
    </Container>
  )
}

export default Messages