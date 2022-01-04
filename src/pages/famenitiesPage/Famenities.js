import React from 'react'
import { Container } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
export const Famenities = () => {
    return (
        <Container>
            <ChatBot/>
            <NavigationBar isFacilities/>
            <Footer/>
        </Container>
    )
}


export default Famenities;