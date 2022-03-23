import React from 'react'
import { Container } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import ClientMessagesCont from '../../containers/clientMessagesCont/ClientMessagesCont';

const ClientMessagesPage = () => {
  return (
      <Container>
        <ChatBot />
        <NavigationBar book />
        <ClientMessagesCont></ClientMessagesCont>
        <Footer />
      </Container>
    
  )
}

export default ClientMessagesPage