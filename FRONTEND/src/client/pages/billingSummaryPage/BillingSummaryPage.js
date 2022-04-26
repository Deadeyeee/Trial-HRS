import React, {useEffect} from 'react'
import { Container, } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import BillingSummaryContainer from '../../containers/billingSummary/BillingSummaryContainer';

const BillingSummaryPage = () => {
  useEffect(() => {
    document.title = "Billing Summary"
  }, [])
  return (
    <Container>
        <Container>
            <ChatBot />
            <NavigationBar book />
            <BillingSummaryContainer></BillingSummaryContainer>
            <Footer />
        </Container>
    </Container>
  )
}

export default BillingSummaryPage