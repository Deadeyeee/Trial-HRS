import React from 'react'
import { Container } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import BookingHome from '../../containers/HomepageBooking/HomeBooking';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
export const Home = () => {
    return (
        <Container>
            <ChatBot/>
            <NavigationBar home/>
            <BookingHome title="Book Now!"/>
            <Footer/>
        </Container>
    )
}


export default Home;