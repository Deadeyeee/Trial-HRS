import React, { useEffect } from 'react'
import { Container, } from './styles'
import NavigationBar from '../../../components/navigationBar/Nav';
import Footer from '../../../components/footer/Footer'
import ChatBot from '../../../components/chatBot/ChatBot';
import FAmenitiesContentCont from '../../../containers/fAmenitiesContent/FAmenitiesContentCont';

const FAmenitiesContent = () => {
  useEffect(() => {
    document.title = "Events Place"
  }, [])
  return (
    <Container>
        <NavigationBar facilities />
        <FAmenitiesContentCont></FAmenitiesContentCont>
        <Footer />
    </Container>
  )
}

export default FAmenitiesContent