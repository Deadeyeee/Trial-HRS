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
            <NavigationBar book />
            <Title
            color='#bfaa7e'
            weight='normal'
            size='50px'
            size1000='40px'
            margin='40px 0px 30px 0px'
            margin1000='50px 0px 30px 0px'
            >
                Guest Information
            </Title>
            <HorizontalLine
            w="30%"
            margin="0PX 0PX 0PX 0PX"
            ></HorizontalLine>
            <Title
            color='black'
            weight='normal'
            fstyle='normal'
            size='16px'
            size1000='12px'
            family='arial'
            margin="10PX 0PX 50PX 0PX"
            margin1000="10PX 0PX 50PX 0PX"
            >
               Already have an account? please <a href='/login'><b>Log in</b></a>.
            </Title>
            <InformationForm></InformationForm>
            <Footer />
    </Container>
  )
}

export default GuestInfoPage;