import React, { useEffect } from 'react'
import { Container } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import ClientPaymentInfoCont from '../../containers/clientPaymentInfo/ClientPaymentInfoCont';
import { ContentContainer } from '../profilePage/styles';
import ProfileContainer from '../../containers/profileContainer/ProfileContainer';
import Navprofile from '../../components/navigationBar/Navprofile';

const ClientPaymentInfoPage = () => {
  useEffect(() => {
    document.title = "Profile | Payments"
  }, [])
  return (
    <Container>
      <ChatBot />
      <Navprofile/>
      
      <ContentContainer>
      <ProfileContainer payment></ProfileContainer>
        <ClientPaymentInfoCont> </ClientPaymentInfoCont>
      </ContentContainer>
      <Footer />
    </Container>
  )
}

export default ClientPaymentInfoPage