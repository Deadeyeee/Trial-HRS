import React from 'react'
import { ButtonHolder, CalendarContainer, Container, HorizontalLine, RatingContainer, RoomContainer, RoomContainerContentLeft, RoomContainerContentPhoto, RoomContainerContentRight, RoomContainerMain, ServicesContainer, TitleCalendarContainer, RatingContainerRight, BookingLegendsMain, BookingLegendsContainer, BookingLegends, BookingLegendsWhite, BookingLegendsRed, BookingLegendsGreen, BookingLegendsBlue, BookingLegendsDarkJade, LocationPinRed, LocationPinGreen } from './Styles'
import { Title } from '../../components/title/styles';
import DatePicker from '../../components/datePicker/DatePicker';
import { Button } from '../../components/button/styles';

export const BookingPageCont = () => {
  return (
    <Container>
        <Title
                color='#bfaa7e'
                weight='normal'
                size='66px'
                margin='60px 0px 30px 0px'
            >
                Bookings
            </Title>
            <HorizontalLine></HorizontalLine>
            <TitleCalendarContainer>
                <Title
                    color='#8f805f'
                    weight='normal'
                    size='16px'
                    margin='30px 30px'
                >
                    Check in date
                </Title>
                <Title
                    color='#8f805f'
                    weight='normal'
                    size='16px'
                    margin='30px 30px'
                >
                    Check out Date
                </Title>
                <Title
                    color='#8f805f'
                    weight='normal'
                    size='16px'
                    margin='30px 30px'
                >
                    Number of Nights
                </Title>
                <Title
                    color='#8f805f'
                    weight='normal'
                    size='16px'
                    margin='30px 30px'
                >
                    Adults
                </Title>
                <Title
                    color='#8f805f'
                    weight='normal'
                    size='16px'
                    margin='30px 30px'
                >
                    Kids
                </Title>
            </TitleCalendarContainer>
            <CalendarContainer>
                <Title
                    family='libre baskerville'
                    size='25px'
                    color='#2e2e2e'
                    weight='400'
                >
                    4 Night(s)
                </Title>
            </CalendarContainer>
            <Button
                 whileHover={{ backgroundColor: "#2E2E2E", color: "white" }}
                 w='350px'
                 h='40px'
                 textcolor="black"
                 fam='Times New Roman'
                 weight='-400'
                 fontStyle='Italic'
                 radius="0px"
                 border="1px solid #8F805F"
                 margin='30px 0px 0px 0px'
                 fontsize='25px'
            >
                BOOK NOW
            </Button>
            <Title
             color='#2e2e2e'
             weight='normal'   
             size='66px'
             margin='60px 0px 30px 0px'
            > 
                Available Rooms

            </Title>
            <HorizontalLine></HorizontalLine>
            <RoomContainerMain>
                <RoomContainer>
                    <RoomContainerContentPhoto></RoomContainerContentPhoto>
                    <RoomContainerContentRight>
                        <Title
                            color='#292929'
                            weight='700'   
                            size='33px'
                            fStyle='Normal'
                            margin='10px 0px 10px 0px'
                            align='left'
                        > 
                        Premium Room
                        </Title>
                        <Title
                            color='#8f805f'
                            weight='700'   
                            size='16px'
                            fStyle='Normal'
                            margin='10px 0px 0px 0px'
                            align='left'
                        > 
                            Ratings
                        </Title>
                        <RatingContainer></RatingContainer>
                        <Title
                            color='#8f805f'
                            weight='700'   
                            size='16px'
                            fStyle='Normal'
                            margin='10px 0px 0px 0px'
                            align='left'
                        > 
                            Services
                        </Title>
                        <ServicesContainer></ServicesContainer>
                        <Title
                            color='#8f805f'
                            weight='700'   
                            size='16px'
                            fStyle='Normal'
                            margin='10px 0px 0px 0px'
                            align='left'
                        > 
                            Occupancy
                        </Title>
                        <Title
                            family='Noticia Text'
                            color='#2e2e2e'
                            weight='400'   
                            size='17px'
                            fStyle='Normal'
                            margin='10px 0px 0px 10px'
                            align='left'
                        >
                            2 Adults only
                        </Title>
                        <ButtonHolder>
                        <Button
                                whileHover={{ backgroundColor: "#2E2E2E", color: "white" }}
                                w='150px'
                                h='40px'
                                textcolor="black"
                                fam='Times New Roman'
                                weight='-400'
                                radius="0px"
                                border="1px solid #8F805F"
                                margin='30px 0px 0px 0px'
                                fontsize='15px'
                         >
                              BOOK NOW
                        </Button>
                        <Title
                            family='Roboto Slab'
                            color='#2e2e2e'
                            weight='700'   
                            size='25px'
                            fStyle='Normal'
                            margin='35px 0px 0px 10px'
                            align='left'
                        >
                            ₱1000/night
                        </Title>
                        </ButtonHolder>
                    </RoomContainerContentRight>
                </RoomContainer>
            </RoomContainerMain>
            <HorizontalLine></HorizontalLine>
            <RoomContainerMain>
                <RoomContainer>
                    <RoomContainerContentLeft>
                        <Title
                            color='#292929'
                            weight='700'   
                            size='33px'
                            fStyle='Normal'
                            margin='10px 0px 10px 0px'
                            align='right'
                        > 
                            Deluxe Room
                        </Title>
                        <Title
                            color='#8f805f'
                            weight='700'   
                            size='16px'
                            fStyle='Normal'
                            margin='10px 0px 0px 0px'
                            align='right'
                        > 
                            Ratings
                        </Title>
                        <RatingContainerRight></RatingContainerRight>
                        <Title
                            color='#8f805f'
                            weight='700'   
                            size='16px'
                            fStyle='Normal'
                            margin='10px 0px 0px 0px'
                            align='right'
                        > 
                            Services
                        </Title>
                        <ServicesContainer></ServicesContainer>
                        <Title
                            color='#8f805f'
                            weight='700'   
                            size='16px'
                            fStyle='Normal'
                            margin='10px 0px 0px 0px'
                            align='right'
                        > 
                            Occupancy
                        </Title>
                        <Title
                            family='Noticia Text'
                            color='#2e2e2e'
                            weight='400'   
                            size='17px'
                            fStyle='Normal'
                            margin='10px 0px 0px 10px'
                            align='right'
                        >
                            2 Adults and 1 Kid
                        </Title>
                        <ButtonHolder>
                        <Title
                            family='Roboto Slab'
                            color='#2e2e2e'
                            weight='700'   
                            size='25px'
                            fStyle='Normal'
                            margin='35px 10px 0px 10px'
                            align='left'
                        >
                            ₱1500/night
                        </Title>
                        <Button
                                whileHover={{ backgroundColor: "#2E2E2E", color: "white" }}
                                w='150px'
                                h='40px'
                                textcolor="black"
                                fam='Times New Roman'
                                weight='-400'
                                radius="0px"
                                border="1px solid #8F805F"
                                margin='30px 0px 0px 0px'
                                fontsize='15px'
                         >
                              BOOK NOW
                        </Button>
                        </ButtonHolder>
                    </RoomContainerContentLeft>
                </RoomContainer>
                <RoomContainerContentPhoto></RoomContainerContentPhoto>
            </RoomContainerMain>
            <BookingLegendsMain>
                <Title
                    color='#2e2e2e'
                    weight='400'   
                    size='26px'
                    fStyle='Normal'
                    margin='35px 0px 30px 10px'
                    align='center'
                >
                    Booking Legends
                </Title>
                <BookingLegendsContainer>
                    <BookingLegendsWhite></BookingLegendsWhite>
                    <Title
                        family='Noticia Text, serif'
                        weight='400'   
                        size='17px'
                        fStyle='Italic'
                        margin='0px 30px 0px 10px'
                        align='center'
                    >
                        Available Date
                    </Title>
                    <BookingLegendsRed></BookingLegendsRed>
                    <Title
                        family='Noticia Text, serif'
                        weight='400'   
                        size='17px'
                        fStyle='Italic'
                        margin='0px 30px 0px 10px'
                        align='center'
                    >
                        Not Available Date
                    </Title>
                    <BookingLegendsGreen></BookingLegendsGreen>
                    <Title
                        family='Noticia Text, serif'
                        weight='400'   
                        size='17px'
                        fStyle='Italic'
                        margin='0px 30px 0px 10px'
                        align='center'
                    >
                        Check In Date
                    </Title>
                    <BookingLegendsBlue></BookingLegendsBlue>
                    <Title
                        family='Noticia Text, serif'
                        weight='400'   
                        size='17px'
                        fStyle='Italic'
                        margin='0px 30px 0px 10px'
                        align='center'
                    >
                        Check Out Date
                    </Title>
                    <BookingLegendsDarkJade></BookingLegendsDarkJade>
                    <Title
                        family='Noticia Text, serif'
                        weight='400'   
                        size='17px'
                        fStyle='Italic'
                        margin='0px 30px 0px 10px'
                        align='center'
                    >
                        Period of Stay
                    </Title>
                </BookingLegendsContainer>
                <Title
                    color='#2e2e2e'
                    weight='400'   
                    size='26px'
                    fStyle='Normal'
                    margin='35px 0px 30px 10px'
                    align='center'
                >
                    Hotel Policies
                </Title>
                <BookingLegendsContainer>
                <LocationPinGreen></LocationPinGreen>
                    <Title
                        family='Noticia Text, serif'
                        weight='400'   
                        size='17px'
                        fStyle='Italic'
                        margin='0px 30px 0px 10px'
                        align='center'
                    >
                        Check-in from: 2 pm to 4 am on the next day
                    </Title>
                    <LocationPinRed></LocationPinRed>
                    <Title
                        family='Noticia Text, serif'
                        weight='400'   
                        size='17px'
                        fStyle='Italic'
                        margin='0px 30px 0px 10px'
                        align='center'
                    >
                        Curfew: 10:00 pm to 8:00 am
                    </Title>
                </BookingLegendsContainer>
                <BookingLegendsContainer>
                <LocationPinGreen></LocationPinGreen>
                    <Title
                        family='Noticia Text, serif'
                        weight='400'   
                        size='17px'
                        fStyle='Italic'
                        margin='0px 240px 0px 10px'
                        align='center'
                    >
                        Check-out before: 12 pm
                    </Title>
                    <LocationPinRed></LocationPinRed>
                    <Title
                        family='Noticia Text, serif'
                        weight='400'   
                        size='17px'
                        fStyle='Italic'
                        margin='0px 80px 0px 10px'
                        align='center'
                    >
                        Agre: 18 y/o to 65 y/o
                    </Title>
                </BookingLegendsContainer>
            </BookingLegendsMain>
    </Container>
  )
}
