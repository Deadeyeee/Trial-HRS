import React from 'react'
import { Container, HorizontalLine, } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import { Title } from '../../components/title/styles';
export const Booking = () => {
    return (
        <Container>
            <ChatBot />
            <NavigationBar book />
            <Title
                color='#bfaa7e'
                weight='normal'
                size='60px'
                margin='60px 0px 30px 0px'
            >
                Bookings
            </Title>
            <HorizontalLine></HorizontalLine>

            <Footer />
        </Container>
    )
}


export default Booking;