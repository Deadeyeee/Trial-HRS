import React, { useEffect } from 'react'
import { Container, } from './styles'
import NavigationBar from '../../../components/navigationBar/Nav';
import Footer from '../../../components/footer/Footer'
import ChatBot from '../../../components/chatBot/ChatBot';
import FAmenitiesContentCont2 from '../../../containers/fAmenitiesContent/FAmenitiesContentCont2';

const FAmenitiesContent2 = () => {
    useEffect(() => {
      document.title = "Coffee Shop"
    }, [])
    return (
      <Container>
          <NavigationBar facilities />
          <FAmenitiesContentCont2></FAmenitiesContentCont2>
          <Footer />
      </Container>
    )
  }
export default FAmenitiesContent2