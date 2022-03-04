import React from 'react'
import { Container, } from './styles'
import NavigationBar from '../../../components/navigationBar/Nav';
import Footer from '../../../components/footer/Footer'
import ChatBot from '../../../components/chatBot/ChatBot';
import FAmenitiesContentCont from '../../../containers/fAmenitiesContent/FAmenitiesContentCont';

const FAmenitiesContent = () => {
  return (
    <Container>
        <ChatBot />
        <NavigationBar book />
        <FAmenitiesContentCont></FAmenitiesContentCont>
        <Footer />
    </Container>
  )
}

export default FAmenitiesContent