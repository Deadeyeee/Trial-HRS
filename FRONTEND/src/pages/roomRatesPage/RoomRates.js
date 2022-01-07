import React from 'react'
import { Container } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
export const RoomRates = () => {
    return (
        <Container>
            <ChatBot/>
            <NavigationBar isRoom/>
            <Footer/>
        </Container>
    )
}


export default RoomRates;