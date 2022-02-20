import React from 'react'
import { ButtonHolder, CalendarContainer, Container, HorizontalLine, RatingContainer, RoomContainer, RoomContainerContentLeft, RoomContainerContentPhoto, RoomContainerContentRight, RoomContainerMain, ServicesContainer, TitleCalendarContainer, RatingContainerRight, BookingLegendsMain, BookingLegendsContainer, BookingLegends, BookingLegendsWhite, BookingLegendsRed, BookingLegendsGreen, BookingLegendsBlue, BookingLegendsDarkJade, LocationPinRed, LocationPinGreen, Services, LabelDiv } from './Styles'
import { Title } from '../../components/title/styles';
import { Button } from '../../components/button/styles';
import { TextInput } from '../../components/textBox/style';
import Rating from '@mui/material/Rating';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import TvIcon from '@mui/icons-material/Tv';
import ShowerIcon from '@mui/icons-material/Shower';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import PersonIcon from '@mui/icons-material/Person';
import DatePicker from '../../components/datePicker/DatePicker'

export const BookingPageCont = () => {
    const ratingValue = 3.6;

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
            <HorizontalLine
                w="20%"></HorizontalLine>
            <TitleCalendarContainer>
                <DatePicker></DatePicker>
                
                <LabelDiv>
                    <Title
                        color='black'
                        size='15px'
                        margin='0px 0px auto 0px'
                    >
                        
                    Adults
                    </Title>

                    <TextInput
                    width="120px"
                    placeholder="No. of Adults"
                    align="center"
                    borderColor='black'
                    >

                    </TextInput>
                </LabelDiv>
                <LabelDiv>
                    <Title
                        color='black'
                        size='15px'
                        margin='0px 0px auto 0px'
                    >
                        
                    Kids
                    </Title>

                    
                    <TextInput
                    width="120px"
                    placeholder="No. of Kids"
                    align="center"
                    borderColor='black'
                    >

                    </TextInput>
                </LabelDiv>
            </TitleCalendarContainer>

            <Button
                whileHover={{ backgroundColor: "#2E2E2E", color: "white" }}
                w='250px'
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
                Book now!!
            </Button>

            <Title
                color='#2e2e2e'
                weight='normal'
                size='66px'
                margin='200px 0px 30px 0px'
            >
                Available Rooms

            </Title>

            <HorizontalLine
                w="30%"
            ></HorizontalLine>
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
                        <RatingContainer>
                            <Title
                                family="Lato"
                                fontStyle="normal"
                                size="15px"
                                margin="0px 10px 0px 0px"
                            >{ratingValue}</Title>

                            <Rating

                                size="large"
                                value={ratingValue}
                                precision={0.1}
                            ></Rating>


                            <Title
                                family="times new roman"
                                // weight="normal"
                                fontStyle="normal"
                                size="15px"
                                margin="0px 0px 0px 20px"
                            >200 People love it!</Title>
                        </RatingContainer>
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
                        <ServicesContainer>
                            <Services>
                                <NetworkWifiIcon
                                    style={{ color: "#bfaa7e" }}
                                />
                                <Title
                                    family="Arial"
                                    size="12px"
                                >
                                    Free Wifi
                                </Title>
                            </Services>


                            <Services>
                                <TvIcon
                                    style={{ color: "#bfaa7e" }}
                                />
                                <Title
                                    family="Arial"
                                    size="12px"
                                >
                                    Television
                                </Title>
                            </Services>


                            <Services>
                                <ShowerIcon
                                    style={{ color: "#bfaa7e" }}
                                />
                                <Title
                                    family="Arial"
                                    size="12px"
                                >
                                    Washroom
                                </Title>
                            </Services>



                        </ServicesContainer>
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
                                Book now!
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
            <HorizontalLine
                w="20%"></HorizontalLine>
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
                            Delux Room
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
                        <RatingContainer>
                            <Title
                                family="Lato"
                                fontStyle="normal"
                                size="15px"
                                margin="0px 10px 0px 0px"
                            >{ratingValue}</Title>

                            <Rating

                                size="large"
                                value={ratingValue}
                                precision={0.1}
                            ></Rating>


                            <Title
                                family="times new roman"
                                // weight="normal"
                                fontStyle="normal"
                                size="15px"
                                margin="0px 0px 0px 20px"
                            >100 People love it!</Title>
                        </RatingContainer>
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
                        <ServicesContainer>
                            <Services>
                                <NetworkWifiIcon
                                    style={{ color: "#bfaa7e" }}
                                />
                                <Title
                                    family="Arial"
                                    size="12px"
                                >
                                    Free Wifi
                                </Title>
                            </Services>


                            <Services>
                                <TvIcon
                                    style={{ color: "#bfaa7e" }}
                                />
                                <Title
                                    family="Arial"
                                    size="12px"
                                >
                                    Television
                                </Title>
                            </Services>


                            <Services>
                                <ShowerIcon
                                    style={{ color: "#bfaa7e" }}
                                />
                                <Title
                                    family="Arial"
                                    size="12px"
                                >
                                    Washroom
                                </Title>
                            </Services>



                        </ServicesContainer>
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
                                Book now!
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
                                ₱1500/night
                            </Title>
                        </ButtonHolder>
                    </RoomContainerContentRight>
                </RoomContainer>
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
                        size='12px'
                        fStyle='normal'
                        margin='0px 30px 0px 10px'
                        align='center'
                    >
                        Available Date
                    </Title>
                    <BookingLegendsRed></BookingLegendsRed>
                    <Title
                        family='Noticia Text, serif'
                        weight='400'
                        size='12px'
                        fStyle='normal'
                        margin='0px 30px 0px 10px'
                        align='center'
                    >
                        Not Available Date
                    </Title>
                    <BookingLegendsGreen></BookingLegendsGreen>
                    <Title
                        family='Noticia Text, serif'
                        weight='400'
                        size='12px'
                        fStyle='normal'
                        margin='0px 30px 0px 10px'
                        align='center'
                    >
                        Check In Date / Check Out Date
                    </Title>
                    <BookingLegendsDarkJade></BookingLegendsDarkJade>
                    <Title
                        family='Noticia Text, serif'
                        weight='400'
                        size='12px'
                        fStyle='normal'
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
                    <LocationOnIcon
                        style={{ color: "green" }}
                    />
                    <Title
                        family='Noticia Text, serif'
                        weight='400'
                        size='12px'
                        fStyle='normal'
                        margin='0px auto 0px 10px'
                        align='center'
                    >
                        Check-in from: 2 pm to 4 am on the next day
                    </Title>
                    <TimeToLeaveIcon
                    />
                    <Title
                        family='Noticia Text, serif'
                        weight='400'
                        size='12px'
                        fStyle='normal'
                        margin='0px 30px 0px 10px'
                        align='center'
                    >
                        Curfew: 10:00 pm to 8:00 am
                    </Title>
                </BookingLegendsContainer>
                <BookingLegendsContainer>

                    <TimeToLeaveIcon
                        style={{ color: "red" }}
                    />
                    <Title
                        family='Noticia Text, serif'
                        weight='400'
                        size='12px'
                        fStyle='normal'
                        margin='0px auto 0px 10px'
                        align='center'
                    >
                        Check-out before: 12 pm
                    </Title>
                    <PersonIcon
                    />
                    <Title
                        family='Noticia Text, serif'
                        weight='400'
                        size='12px'
                        fStyle='normal'
                        margin='0px 80px 0px 10px'
                        align='center'
                    >
                        age: 18 y/o to 65 y/o
                    </Title>
                </BookingLegendsContainer>
            </BookingLegendsMain>
        </Container>
    )
}
