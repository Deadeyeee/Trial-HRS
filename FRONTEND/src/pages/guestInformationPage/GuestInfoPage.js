import React from 'react'
import { Container } from './style'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import { Title } from '../../components/title/styles';
import { HorizontalLine } from '../../components/horizontalLine/HorizontalLine';
import InformationForm from '../../containers/informationForm/InformationForm';
const GuestInfoPage = () => {
  return (
    <Container>
        <ChatBot />
            <NavigationBar home />
            <Title
            color='#bfaa7e'
            weight='normal'
            size='50px'
            margin='60px 0px 30px 0px'
            >
                Guest Information
            </Title>
            <HorizontalLine
            w="30%"
            margin="0PX 0PX 50PX 0PX"
            ></HorizontalLine>
            <InformationForm></InformationForm>
            <Footer />
    </Container>
  )
}

export default GuestInfoPage;