import React, { useEffect, useState } from 'react'
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
import axios from 'axios';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AirIcon from '@mui/icons-material/Air';
import GroupsIcon from '@mui/icons-material/Groups';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import LiquorIcon from '@mui/icons-material/Liquor';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import HotelIcon from '@mui/icons-material/Hotel';
import KingBedIcon from '@mui/icons-material/KingBed';
import KitchenIcon from '@mui/icons-material/Kitchen';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import PendingIcon from '@mui/icons-material/Pending';

export const BookingPageCont = () => {
    const ratingValue = 3.6;
    const [roomType, setRoomType] = useState([])
    const [usedServices, setUsedServices] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/getAllRoomType').then((res) => {
            setRoomType(res.data)
        }).catch((err) => {
            console.log(err.data)
        })

        axios.get('http://localhost:3001/api/getAllUsedServices').then((res) => {
            setUsedServices(res.data)
        }).catch((err) => {
            console.log(err.data)
        })

    }, [])


    const serviceIcon = (service) => {
        if (service === 'Free Wifi') {
            return <Services><NetworkWifiIcon style={{ color: "#bfaa7e" }} /><Title family="Arial" size="12px" >{service}</Title></Services>
        }
        else if (service === "Car Parking") {
            return <Services><DirectionsCarIcon style={{ color: "#bfaa7e" }} /><Title family="Arial" size="12px" >{service}</Title></Services>
        }
        else if (service === "Television") {
            return <Services><TvIcon style={{ color: "#bfaa7e" }} /><Title family="Arial" size="12px" >{service}</Title></Services>
        }
        else if (service === "Aircondition") {
            return <Services><AirIcon style={{ color: "#bfaa7e" }} /><Title family="Arial" size="12px" >{service}</Title></Services>
        }
        else if (service === "Reception") {
            return <Services><GroupsIcon style={{ color: "#bfaa7e" }} /><Title family="Arial" size="12px" >{service}</Title></Services>
        }
        else if (service === "Smoking") {
            return <Services><SmokingRoomsIcon style={{ color: "#bfaa7e" }} /><Title family="Arial" size="12px" >{service}</Title></Services>
        }
        else if (service === "Toiletries") {
            return <Services><SanitizerIcon style={{ color: "#bfaa7e" }} /><Title family="Arial" size="12px" >{service}</Title></Services>
        }
        else if (service === "Clean Washroom") {
            return <Services><ShowerIcon style={{ color: "#bfaa7e" }} /><Title family="Arial" size="12px" >{service}</Title></Services>
        }
        else if (service === "Water Bottle") {
            return <Services><LiquorIcon style={{ color: "#bfaa7e" }} /><Title family="Arial" size="12px" >{service}</Title></Services>
        }
        else if (service === "Quality Linen") {
            return <Services><HotelIcon style={{ color: "#bfaa7e" }} /><Title family="Arial" size="12px" >{service}</Title></Services>
        }
        else if (service === "Towel") {
            return <Services><DryCleaningIcon style={{ color: "#bfaa7e" }} /><Title family="Arial" size="12px" >{service}</Title></Services>
        }
        else if (service === "Bed") {
            return <Services><KingBedIcon style={{ color: "#bfaa7e" }} /><Title family="Arial" size="12px" >{service}</Title></Services>
        }
        else if (service === "Refrigerator") {
            return <Services><KitchenIcon style={{ color: "#bfaa7e" }} /><Title family="Arial" size="12px" >{service}</Title></Services>
        }
        else if (service === "Oven") {
            return <Services><MicrowaveIcon style={{ color: "#bfaa7e" }} /><Title family="Arial" size="12px" >{service}</Title></Services>
        }
        else {
            return <Services><PendingIcon style={{ color: "#bfaa7e" }} /><Title family="Arial" size="12px" >{service}</Title></Services>
        }


    }

    const numberFormat = (value) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'PHP'
        }).format(value);

    return (

        <Container>
            <Title
                color='#bfaa7e'
                weight='normal'
                size='3.5vw'
                margin='1vw 0px 1vw 0px'
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
                            family='Roboto Slab'
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
                            style={{ fontWeight: 'bold', fontSize: '1.1vw' }}
                            family='Roboto Slab'
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

            {roomType.map((item, index, arr) => (
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
                                {item.roomType}
                            </Title>
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
                                {usedServices.map((usedServicesItem) => (
                                    usedServicesItem.roomType_id === item.id ? serviceIcon(usedServicesItem.service.servicesName) : ""
                                ))}
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
                                {item.maxAdultOccupancy} Adults only
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
                                {item.maxKidsOccupancy} Kids only
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
                                    href={'/booking/room/'+ item.id}
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
                                    {numberFormat(item.roomRate)}/night
                                </Title>
                            </ButtonHolder>
                        </RoomContainerContentRight>
                    </RoomContainer>

                    {index + 1 == arr.length ? "" : <HorizontalLine w="50%"></HorizontalLine>}
                </RoomContainerMain>
            ))}

            {/* <RoomContainerMain>
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
            </RoomContainerMain> */}
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
