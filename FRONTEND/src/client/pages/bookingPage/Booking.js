import React, { useEffect } from 'react'
import { Container, } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import { BookingPageCont } from '../../containers/bookingPage/BookingPageCont';
export const Booking = () => {
    useEffect(() => {
        document.title = "Booking"
      }, [])
    return (
        <Container>
            <NavigationBar book />
            <BookingPageCont></BookingPageCont>
            <Footer />
        </Container>
    )
}


export default Booking;