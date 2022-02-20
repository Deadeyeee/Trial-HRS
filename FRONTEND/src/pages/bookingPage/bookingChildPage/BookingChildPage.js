import React from 'react'
import { Container, } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import { BookingChildPageCont } from '../../containers/bookingChildPage/BookingChildPageCont';


function BookingChildPage() {
  return (
    <Container>
        <ChatBot />
        <NavigationBar book />
        <BookingChildPageCont></BookingChildPageCont>
        <Footer />
    </Container>
  )
}

export default BookingChildPage