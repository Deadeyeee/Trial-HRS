import React, { useEffect } from 'react'
import { Container } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import { ContentContainer } from '../profilePage/styles';
import BookingCartPageCont from '../../containers/bookingCartPage/BookingCartPageCont';
import TermsAndConditionsCont from '../../containers/termsAndConditionsPage/TermsAndConditionsCont';

const BookingCartPage = () => {
  useEffect(() => {
    document.title = "Profile | Bookings"
  }, [])
  return (
    <Container>
            <ChatBot />
            <NavigationBar/>
            <BookingCartPageCont></BookingCartPageCont>
            <TermsAndConditionsCont></TermsAndConditionsCont>
            <Footer />
        </Container>
  )
}

export default BookingCartPage