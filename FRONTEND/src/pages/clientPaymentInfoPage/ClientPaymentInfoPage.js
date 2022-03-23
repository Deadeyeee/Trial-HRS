import React from 'react'
import { Container } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import ClientPaymentInfoCont from '../../containers/clientPaymentInfo/ClientPaymentInfoCont';

const ClientPaymentInfoPage = () => {
  return (
    <Container>
            <ChatBot />
            <NavigationBar book />
            <ClientPaymentInfoCont>  </ClientPaymentInfoCont>
            <Footer />
        </Container>
  )
}

export default ClientPaymentInfoPage