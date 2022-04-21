import React, { useEffect } from 'react'
import { Container } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import { ContentContainer } from '../profilePage/styles';
import BookingCartPageCont from '../../containers/bookingCartPage/BookingCartPageCont';
import TermsAndConditionsCont from '../../containers/termsAndConditionsPage/TermsAndConditionsCont';
import { ContainerGlobal } from '../../../admin/components/container/container';

const BookingCartPage = () => {
  useEffect(() => {
    document.title = "Profile | Bookings"
  }, [])
  return (
    <Container>
            <ChatBot />
            <NavigationBar/>
            <BookingCartPageCont></BookingCartPageCont>
            <ContainerGlobal
            w='1500px'
            h='1000px'
            >
            <TermsAndConditionsCont></TermsAndConditionsCont>
            </ContainerGlobal>
            <Footer />
        </Container>
  )
}

export default BookingCartPage