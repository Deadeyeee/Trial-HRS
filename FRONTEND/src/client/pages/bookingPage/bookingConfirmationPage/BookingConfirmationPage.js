import React, { useEffect } from 'react'
import { Container, } from './styles'
import NavigationBar from '../../../components/navigationBar/Nav';
import Footer from '../../../components/footer/Footer'
import ChatBot from '../../../components/chatBot/ChatBot';
import BookingConfirmationCont from '../../../containers/bookingConfirmation/BookingConfirmationCont';


function BookingConfirmationPage() {
  useEffect(() => {
    document.title = "Booking Confirmation"
  }, [])
  return (
    <Container>
            <NavigationBar book />
              <BookingConfirmationCont></BookingConfirmationCont>
            <Footer />
        </Container>
  )
}

export default BookingConfirmationPage