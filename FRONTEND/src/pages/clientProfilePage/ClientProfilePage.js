import React from 'react'
import { Container } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import ClientProfileCont  from '../../containers/clientProfile/ClientProfileCont';


const ClientProfilePage = () => {
  return (
    <Container>
        <ChatBot />
        <NavigationBar book />
        <ClientProfileCont></ClientProfileCont>
        <Footer />
    </Container>
  )
}

export default ClientProfilePage