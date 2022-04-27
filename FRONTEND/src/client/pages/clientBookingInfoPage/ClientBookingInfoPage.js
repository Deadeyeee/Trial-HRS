import React, { useEffect } from 'react'
import { Container } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import ClientBookingInfoCont from '../../containers/clientBookingInfo/ClientBookingInfoCont';
import { ContentContainer } from '../profilePage/styles';
import ProfileContainer from '../../containers/profileContainer/ProfileContainer';
import Navprofile from '../../components/navigationBar/Navprofile';

const ClientBookingInfoPage = () => {
  useEffect(() => {
    document.title = "Profile | Bookings"
  }, [])
  return (
    <Container>
            <ChatBot />
            <Navprofile/>
            <ContentContainer book>
              <ProfileContainer book></ProfileContainer>
            <ClientBookingInfoCont></ClientBookingInfoCont>
            </ContentContainer>
            <Footer />
        </Container>
  )
}

export default ClientBookingInfoPage