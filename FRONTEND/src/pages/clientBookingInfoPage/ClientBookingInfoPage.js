import React from 'react'
import { Container } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import ClientBookingInfoCont from '../../containers/clientBookingInfo/ClientBookingInfoCont';

const ClientBookingInfoPage = () => {
  return (
    <Container>
            <ChatBot />
            <NavigationBar book />
            <ClientBookingInfoCont></ClientBookingInfoCont>
            <Footer />
        </Container>
  )
}

export default ClientBookingInfoPage