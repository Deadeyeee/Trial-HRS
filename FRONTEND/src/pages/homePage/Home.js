import React from 'react'
import { ChangePasswordNewHolder, Container, EmailVerificationHolder, EmailVerificationPhoto } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import BookingHome from '../../containers/HomepageBooking/HomeBooking';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import { Title } from '../../components/title/styles';
import { TextInput } from '../../components/textBox/style';
import { Button } from '../../components/button/styles';
export const Home = () => {
    return (
        <Container>
            <ChatBot />
            <NavigationBar home />
            <BookingHome title="Book Now!" />

            <Footer />
        </Container >
    )
}


export default Home;