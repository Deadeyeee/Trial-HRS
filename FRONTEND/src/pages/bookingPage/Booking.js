import React from 'react'
import { Container, } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import { BookingPageCont } from '../../containers/bookingPage/BookingPageCont';
export const Booking = () => {
    return (
        <Container>
            <ChatBot />
            <NavigationBar book />
           <BookingPageCont></BookingPageCont>
            <Footer />
        </Container>
    )
}


export default Booking;