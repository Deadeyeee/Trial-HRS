import React from 'react'
import { ButtonHolder, CalendarContainer, Container, HorizontalLine, RatingContainer, RoomContainer, RoomContainerContentLeft, RoomContainerContentPhoto, RoomContainerContentRight, RoomContainerMain, ServicesContainer, TitleCalendarContainer, RatingContainerRight, BookingLegendsMain, BookingLegendsContainer, BookingLegends, BookingLegendsWhite, BookingLegendsRed, BookingLegendsGreen, BookingLegendsBlue, BookingLegendsDarkJade, LocationPinRed, LocationPinGreen, Services, LabelDiv, Persons } from './Styles'
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
import DateRangePicker from '../../components/datePicker/DateRangePicker'
import Background from '../../images/RoomsIMG/premium.jpg'
import Background2 from '../../images/RoomsIMG/delux.jpg'
import { ContainerGlobal } from '../../../admin/components/container/container';

export const BookingPageCont = () => {
    const ratingValue = 3.6;

    return (

        <Container>
            <Title
                color='#bfaa7e'
                weight='normal'
                size='5vw'
                margin='4vw 0px 4vw 0px'
            >
                Bookings
            </Title>
            <HorizontalLine
                w="50%"></HorizontalLine>
            <TitleCalendarContainer>
                <DateRangePicker></DateRangePicker>

                <Persons>
                    <LabelDiv>
                        <TextInput
                            style={{ fontWeight: 'bold', fontSize: '1.1vw' }}
                            family= 'Roboto Slab'
                            width="5vw"
                            placeholder="No. of Adults"
                            align="center"
                            borderColor='black'
                            margins='0px'
                            value='2'
                            height='3vw'
                        >

                        </TextInput>
                        <Title
                            size='1.1vw'
                            weight="Bold">

                            Adults
                        </Title>
                    </LabelDiv>
                    <LabelDiv>


                        <TextInput
                            style={{  fontWeight: 'bold', fontSize: '1.1vw' }}
                            family= 'Roboto Slab'
                            width="5vw"
                            placeholder="No. of Adults"
                            align="center"
                            borderColor='black'
                            margins='0px'
                            value='0'
                            height='3vw'
                        ></TextInput>

                        <Title
                            size='1.1vw'
                            weight="bold">

                            Kids
                        </Title>
                    </LabelDiv>
                </Persons>
                <Button
                    whileHover={{ backgroundColor: "#2E2E2E", color: "white" }}
                    w='10vw'
                    h='2vw'
                    textcolor="black"
                    fam='Times New Roman'
                    weight='400'
                    fontStyle='Italic'
                    radius="0px"
                    border="1px solid #8F805F"
                    fontsize='1.1vw'

                    onClick={() => { window.location.href = '/booking' }}
                >
                    Book now!!
                </Button>
            </TitleCalendarContainer>



            <Title
                color='#2e2e2e'
                weight='normal'
                size='3vw'

            >
                Available Rooms

            </Title>

            <HorizontalLine
                w="30%"
            ></HorizontalLine>
            <RoomContainerMain>
                <RoomContainer>
                    <RoomContainerContentPhoto
                        src={Background}></RoomContainerContentPhoto>
                    <RoomContainerContentRight>
                        <Title
                            color='#292929'
                            weight='700'
                            size='33px'
                            fStyle='Normal'
                            margin='10px 0px 10px 0px'
                            align='left'
                            family='Roboto Slab'
                        >
                            Premium room 102
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
                                family='Roboto Slab'
                                fontStyle="normal"
                                size="15px"
                                margin="0px 10px 0px 0px"
                            >{ratingValue}</Title>

                            <Rating
                                readOnly
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
                            family='Roboto Slab'
                            color='#2e2e2e'
                            weight='700'
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
                                href='/booking/room'
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
                                ₱2,000/night
                            </Title>
                        </ButtonHolder>
                    </RoomContainerContentRight>
                </RoomContainer>
            </RoomContainerMain>
            <HorizontalLine
                w="50%"></HorizontalLine>
            <RoomContainerMain>
                <RoomContainer>
                    <RoomContainerContentPhoto
                        src={Background2}></RoomContainerContentPhoto>
                    <RoomContainerContentRight>
                        <Title
                            family='Roboto Slab'
                            color='#292929'
                            weight='700'
                            size='33px'
                            fStyle='Normal'
                            margin='10px 0px 10px 0px'
                            align='left'
                        >
                            Deluxe room 201
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
                                family='Roboto Slab'
                                fontStyle="normal"
                                size="15px"
                                margin="0px 10px 0px 0px"
                            >{ratingValue}</Title>

                            <Rating
                                readOnly
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
                            family='Roboto Slab'
                            color='#2e2e2e'
                            weight='700'
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
                                ₱1,200/night
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
                    <ContainerGlobal
                        justify='center'
                        align='center'
                    >
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
                    </ContainerGlobal>
                    <ContainerGlobal
                        justify='center'
                        align='center'
                    >
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
                    </ContainerGlobal>
                    <ContainerGlobal
                        justify='center'
                        align='center'
                    >
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
                    </ContainerGlobal>
                    <ContainerGlobal
                        justify='center'
                        align='center'
                    >
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

                    </ContainerGlobal>
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
                    <ContainerGlobal
                        justify='center'
                        align='center'
                    >
                        <LocationOnIcon
                            style={{ color: "green" }}
                        />
                        <Title
                            family='Noticia Text, serif'
                            weight='400'
                            size='12px'
                            fStyle='normal'
                            align='center'
                        >
                            <b>Check-in from</b>: 2 pm to 4 am on the next day
                        </Title>
                    </ContainerGlobal>
                    <ContainerGlobal
                        justify='center'
                        align='center'
                    >
                        <TimeToLeaveIcon
                        />
                        <Title
                            family='Noticia Text, serif'
                            weight='400'
                            size='12px'
                            fStyle='normal'
                            align='center'
                        >
                            <b>Curfew</b>: 10:00 pm to 8:00 am
                        </Title>
                    </ContainerGlobal>
                    <ContainerGlobal
                        justify='center'
                        align='center'
                    >
                        <TimeToLeaveIcon
                            style={{ color: "red" }}
                        />
                        <Title
                            family='Noticia Text, serif'
                            weight='400'
                            size='12px'
                            fStyle='normal'
                            align='center'
                        >
                            <b>Check-out before</b>: 12 pm
                        </Title>
                    </ContainerGlobal>
                    <ContainerGlobal
                        justify='center'
                        align='center'
                    >
                        <PersonIcon
                        />
                        <Title
                            family='Noticia Text, serif'
                            weight='400'
                            size='12px'
                            fStyle='normal'
                            align='center'
                        >
                            <b>age</b>: 18 y/o to 65 y/o
                        </Title>
                    </ContainerGlobal>
                </BookingLegendsContainer>

            </BookingLegendsMain>
        </Container>
    )
}
