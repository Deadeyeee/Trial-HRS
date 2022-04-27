import React, { useEffect } from 'react'
import { Container } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import ClientMessagesCont from '../../containers/clientMessagesCont/ClientMessagesCont';
import { ContentContainer } from '../profilePage/styles';
import ProfileContainer from '../../containers/profileContainer/ProfileContainer';
import Navprofile from '../../components/navigationBar/Navprofile';

const ClientMessagesPage = () => {
  useEffect(() => {
    document.title = "Profile | Messages"
  }, [])
  return (
      <Container>
        <ChatBot />
        <Navprofile/>
        <ContentContainer>
          <ProfileContainer message></ProfileContainer>
          
        <ClientMessagesCont ></ClientMessagesCont>
        </ContentContainer>
        <Footer />
      </Container>
    
  )
}

export default ClientMessagesPage