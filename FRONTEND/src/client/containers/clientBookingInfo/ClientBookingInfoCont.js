import React, { useEffect } from 'react'
import { Title } from '../../components/title/styles'
import { BookingContent, BookingContentContainer, Container, PreviousBookingContainer, PreviousBookingContainerContent, Status, StatusContainer } from './Styles'
import { Button } from '../../components/button/styles';
import { MainContainer, MessagesTitleContainer } from '../clientMessagesCont/Styles';

const ClientBookingInfoCont = () => {
    useEffect(() => {
        document.title = "Profile | Bookings"
    }, [])
    return (
        <Container>
            <Title
                padding='15px 80px 15px 80px'
                bg='#272727'
                family='raleway, sans-serif'
                color='white'
                weight='400'
                size='25px'
                fstyle='Normal'
                margin='50px 0px 10px 0px'
                align='Center'
            >
                Booking Status
            </Title>
            <StatusContainer>
                <Status>

                </Status>
                <Title
                    padding='10px'
                    family='raleway, sans-serif'
                    color='#292929'
                    weight='700'
                    size='24px'
                    fstyle='Normal'
                    margin='10px 0px 10px 0px'
                    align='Center'
                >
                    Confirmed
                </Title>
            </StatusContainer>
            <Title
                family='raleway, sans-serif'
                color='#292929'
                weight='700'
                size='16px'
                fStyle='Italic'
                margin='20px 0px 10px 0px'
                align='Center'
                w='800px'
            >
                Thank you for choosing to stay with us. Your reservation has been confirmed. You can present this to our
                hotel lobby as a proof of you booking reservation.
            </Title>
            <Title
                padding='15px 80px 15px 80px'
                bg='#272727'
                family='raleway, sans-serif'
                color='white'
                weight='400'
                size='25px'
                fstyle='Normal'
                margin='60px 0px 10px 0px'
                align='Center'
            >
                Booking Information
            </Title>
            <BookingContentContainer>
                <BookingContent>
                    <Title
                        family='raleway, sans-serif'
                        weight='400'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='left'
                        margin='2px 0px'
                    >
                        Reservation Ref No.
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='400'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='left'
                        margin='2px 0px'
                    >
                        Payment Type
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='400'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='left'
                        margin='2px 0px'
                    >
                        Guest Name
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='400'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='left'
                        margin='2px 0px'
                    >
                        Birthdate
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='400'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='left'
                        margin='2px 0px'
                    >
                        Nationality
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='400'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='left'
                        margin='2px 0px'
                    >
                        Email Address
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='400'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='left'
                        margin='2px 0px'
                    >
                        Contact Number
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='400'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='left'
                        margin='2px 0px'
                    >
                        Check-In Date
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='400'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='left'
                        margin='2px 0px'
                    >
                        Check-Out Date
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='400'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='left'
                        margin='2px 0px'
                    >
                        Night(s)
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='400'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='left'
                        margin='2px 0px'
                    >
                        Total No. of Room(s)
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='400'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='left'
                        margin='2px 0px'
                    >
                        Total No. of Guest(s)
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='400'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='left'
                        margin='2px 0px'
                    >
                        Special Request(s)
                    </Title>
                </BookingContent>
                <BookingContent>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='center'
                        margin='2px 0px'
                    >
                        :
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='center'
                        margin='2px 0px'
                    >
                        :
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='center'
                        margin='2px 0px'
                    >
                        :
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='center'
                        margin='2px 0px'
                    >
                        :
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='center'
                        margin='2px 0px'
                    >
                        :
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='center'
                        margin='2px 0px'
                    >
                        :
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='center'
                        margin='2px 0px'
                    >
                        :
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='center'
                        margin='2px 0px'
                    >
                        :
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='center'
                        margin='2px 0px'
                    >
                        :
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='center'
                        margin='2px 0px'
                    >
                        :
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='center'
                        margin='2px 0px'
                    >
                        :
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='center'
                        margin='2px 0px'
                    >
                        :
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='center'
                        margin='2px 0px'
                    >
                        :
                    </Title>
                </BookingContent>
                <BookingContent>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='right'
                        margin='2px 0px'
                        overflow='visible'
                    >
                        232pa3432sad
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='right'
                        margin='2px 0px'
                        overflow='visible'
                    >
                        Bank Deposit
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='right'
                        margin='2px 0px'
                        overflow='visible'
                    >
                        Juan Pedro
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='right'
                        margin='2px 0px'
                        overflow='visible'
                    >
                        2000/12/21
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='right'
                        margin='2px 0px'
                        overflow='visible'
                    >
                        Filipino
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='right'
                        margin='2px 0px'
                        overflow='visible'
                    >
                        PedroJuan@gmail.com
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='right'
                        margin='2px 0px'
                        overflow='visible'
                    >
                        09292333312
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='right'
                        margin='2px 0px'
                        overflow='visible'
                    >
                        11/10/2001
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='right'
                        margin='2px 0px'
                        overflow='visible'
                    >
                        11/14/2001
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='right'
                        margin='2px 0px'
                        overflow='visible'
                    >
                        4 Nights
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='right'
                        margin='2px 0px'
                        overflow='visible'
                    >
                        1
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='right'
                        margin='2px 0px'
                        overflow='visible'
                    >
                        2
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='right'
                        margin='2px 0px'
                        overflow='visible'
                    >
                        None
                    </Title>
                </BookingContent>
            </BookingContentContainer>

            <Button
                whileHover={{ backgroundColor: "#302B20", color: "white" }}
                w='200px'
                h='60px'
                textcolor="white"
                fam='playfair display'
                weight='-400'
                fontStyle='normal'
                radius="0px"
                border="1px solid #8F805F"
                margin='30px 0px 30px 0px'
                fontsize='16px'
                bg='#282626'
            >
                Print / Save as PDF
            </Button>










            <MainContainer
                display='flex'
                height='250px'>
                <MessagesTitleContainer>
                    <Title
                        bg='#272727'
                        family='raleway, sans-serif'
                        color='white'
                        weight='400'
                        size='25px'
                        fstyle='Normal'
                        align='Center'
                        margin='20px'

                    >
                        Previous Bookings
                    </Title>

                </MessagesTitleContainer>
                <PreviousBookingContainer>
                    <Title
                        family='arial'
                        color='white'
                        weight='bold'
                        size='12px'
                        fstyle='Normal'
                        align='Center'
                        w='120px'
                    >
                        Reservation No.
                    </Title>
                    <Title
                        family='arial'
                        color='white'
                        weight='bold'
                        size='12px'
                        fstyle='Normal'
                        align='Center'
                        w='120px'
                    >
                        Check-in
                    </Title>
                    <Title
                        family='arial'
                        color='white'
                        weight='bold'
                        size='12px'
                        fstyle='Normal'
                        align='Center'
                        w='120px'
                    >
                        Check-out
                    </Title>
                    <Title
                        family='arial'
                        color='white'
                        weight='bold'
                        size='12px'
                        fstyle='Normal'
                        align='Center'
                        w='120px'
                    >
                        Total Guest
                    </Title>
                    <Title
                        family='arial'
                        color='white'
                        weight='bold'
                        size='12px'
                        fstyle='Normal'
                        align='Center'
                        w='120px'
                    >
                        Room type
                    </Title>
                    <Title
                        family='arial'
                        color='white'
                        weight='bold'
                        size='12px'
                        fstyle='Normal'
                        align='Center'
                        w='120px'
                    >
                        Room number
                    </Title>
                    <Title
                        family='arial'
                        color='white'
                        weight='bold'
                        size='12px'
                        fstyle='Normal'
                        align='Center'
                        w='120px'
                    >
                        Action
                    </Title>
                </PreviousBookingContainer>


                <PreviousBookingContainerContent>
                    <Title
                        family='arial'
                        color='black'
                        weight='bold'
                        size='12px'
                        fstyle='Normal'
                        align='Center'
                        w='120px'
                    >
                        232pa3432sad
                    </Title>
                    <Title
                        family='arial'
                        color='black'
                        weight='bold'
                        size='12px'
                        fstyle='Normal'
                        align='Center'
                        w='120px'
                    >
                        10/10/2001
                    </Title>
                    <Title
                        family='arial'
                        color='black'
                        weight='bold'
                        size='12px'
                        fstyle='Normal'
                        align='Center'
                        w='120px'
                    >
                        10/14/2001
                    </Title>
                    <Title
                        family='arial'
                        color='black'
                        weight='bold'
                        size='12px'
                        fstyle='Normal'
                        align='Center'
                        w='120px'
                    >
                        2
                    </Title>
                    <Title
                        family='arial'
                        color='black'
                        weight='bold'
                        size='12px'
                        fstyle='Normal'
                        align='Center'
                        w='120px'
                    >
                        Deluxe Room
                    </Title>
                    <Title
                        family='arial'
                        color='black'
                        weight='bold'
                        size='12px'
                        fstyle='Normal'
                        align='Center'
                        w='120px'
                    >
                        Room 204
                    </Title>
                    <Title
                        cursor='pointer'
                        family='arial'
                        color='blue'
                        weight='bold'
                        size='12px'
                        fstyle='Normal'
                        align='Center'
                        w='120px'
                    >
                        view
                    </Title>
                </PreviousBookingContainerContent>
            </MainContainer>



        </Container>
    )
}

export default ClientBookingInfoCont