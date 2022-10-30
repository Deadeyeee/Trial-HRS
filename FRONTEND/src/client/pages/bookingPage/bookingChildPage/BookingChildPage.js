import React, { useEffect } from 'react'
import { Container, } from './styles'
import NavigationBar from '../../../components/navigationBar/Nav';
import Footer from '../../../components/footer/Footer'
import ChatBot from '../../../components/chatBot/ChatBot';
import { BookingChildPageCont } from '../../../containers/bookingChildPage/BookingChildPageCont';


function BookingChildPage() {
  useEffect(() => {
    document.title = "Booking Room"
  }, [])
  return (
    <Container>
        <NavigationBar book />
        <BookingChildPageCont></BookingChildPageCont>
        <Footer />
    </Container>
  )
}

export default BookingChildPage