import React from 'react'
import { Container } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
export const Contact = () => {
    return (
        <Container>
            <ChatBot/>
            <NavigationBar contact/>
            <Footer/>
        </Container>
    )
}


export default Contact;