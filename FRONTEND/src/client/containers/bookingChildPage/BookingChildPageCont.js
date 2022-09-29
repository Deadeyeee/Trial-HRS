import { Services, ButtonHolder, Container, ContentContainerHolder, RatingContainer, RoomContainer, RoomContainerContentPhoto, RoomContainerContentRight, RoomContainerMain, ServicesContainer, } from './Styles'
import { Title } from '../../components/title/styles';
import { Button } from '../../components/button/styles';
import Rating from '@mui/material/Rating';

import React, { useEffect, useState } from 'react'
import { Description } from '../../components/paragraph/style';
import Background from '../../images/RoomsIMG/premium.jpg'
import noimage from '../../images/RoomsIMG/noimage.png'
import { ContainerGlobal } from '../../../admin/components/container/container';
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
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import TvIcon from '@mui/icons-material/Tv';
import ShowerIcon from '@mui/icons-material/Shower';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export const BookingChildPageCont = () => {

    const { id } = useParams();
    const ratingValue = 3.6;
    const [roomType, setRoomType] = useState([])
    const [usedServices, setUsedServices] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/getRoomType/' + id).then((res) => {
            setRoomType(res.data)
            console.log(roomType)
        }).catch((err) => {
            console.log(err.data)
        })

        axios.get('http://localhost:3001/api/getAllUsedServices').then((res) => {
            setUsedServices([])
            for (let index = 0; index < res.data.length; index++) {
                if (res.data[index].roomType_id === id) {
                    setUsedServices(oldData => [...oldData, res.data[index]])
                }


            }
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
                weight='400'
                size='66px'
                fStyle='Normal'
                margin='70px 0px 30px 0px'
                align='Center'
                color='#bfaa7e'
            >
                {roomType.roomType}
            </Title>
            <RoomContainerMain>
                <RoomContainer>
                    <ContainerGlobal
                        direction='column'
                        justify='center'
                        align='center'
                        radius='none'
                        w='550px'>


                        <RoomContainerContentPhoto
                            link={Background} />

                        <ContainerGlobal
                            radius='none'
                            justify='space-around'
                            w='100%'
                            align='center'
                            padding='5px 0px 5px 0px'
                            bg='rgb(46, 46, 46, 0.2)'>
                            <RoomContainerContentPhoto
                                link={Background}
                                w='80px'
                                h='80px'
                                cursor='pointer'
                                border='5px solid #977535' />
                            <RoomContainerContentPhoto
                                link={noimage}
                                w='80px'
                                h='80px'
                                cursor='pointer' />
                            <RoomContainerContentPhoto
                                link={noimage}
                                w='80px'
                                h='80px'
                                cursor='pointer' />
                            <RoomContainerContentPhoto
                                link={noimage}
                                w='80px'
                                h='80px'
                                cursor='pointer' />
                            <RoomContainerContentPhoto
                                link={noimage}
                                w='80px'
                                h='80px'
                                cursor='pointer' />
                            <RoomContainerContentPhoto
                                link={noimage}
                                w='80px'
                                h='80px'
                                cursor='pointer' />
                        </ContainerGlobal>

                    </ContainerGlobal>
                    <RoomContainerContentRight>
                        <ContentContainerHolder>
                            <Title
                                color='#2e2e2e'
                                weight='400'
                                size='25px'
                                fStyle='Normal'
                                margin='0px 40px 0px 0px'
                                align='left'
                            >
                                Services:
                            </Title>
                            <ServicesContainer>
                                {usedServices.map((item) => (
                                    serviceIcon(item.service.servicesName)
                                ))}
                            </ServicesContainer>
                        </ContentContainerHolder>
                        <ContentContainerHolder>
                            <Title
                                color='#2e2e2e'
                                weight='400'
                                size='25px'
                                fStyle='Normal'
                                margin='0px 15px 0px 0px'
                                align='left'

                            >
                                Description:
                            </Title>
                            <Description
                                align="left"
                                width="450px"
                                size="15"

                            >
                                {roomType.roomDescription}
                            </Description>
                        </ContentContainerHolder>
                        <ContentContainerHolder>
                            <Title
                                color='#2e2e2e'
                                weight='400'
                                size='25px'
                                fStyle='Normal'
                                margin='4px 0px 0px 0px'
                                align='left'
                            >
                                Occupancy:
                            </Title>
                            <Title
                                family='Times New Roman, times, serif'
                                color='#292929'
                                weight='normal'
                                size='25px'
                                fStyle='Normal'
                                margin='10px 0px 0px 15px'
                                align='left'
                            >
                                <b>{roomType.maxAdultOccupancy}</b> adults
                            </Title>
                            <Title
                                family='Times New Roman, times, serif'
                                color='#292929'
                                weight='normal'
                                size='25px'
                                fStyle='Normal'
                                margin='10px 0px 0px 15px'
                                align='left'
                            >
                                <b>{roomType.maxKidsOccupancy}</b> kids
                            </Title>
                        </ContentContainerHolder>
                        <ContentContainerHolder>
                            <Title
                                color='#2e2e2e'
                                weight='400'
                                size='25px'
                                fStyle='Normal'
                                margin='10px 0px 0px 0px'
                                align='left'
                            >
                                Price:
                            </Title>
                            <Title
                                family='Roboto Slab'
                                color='#2e2e2e'
                                weight='700'
                                size='25px'
                                fStyle='Normal'
                                margin='8px 0px 0px 83px'
                                align='left'
                            >
                                <b>{numberFormat(roomType.roomRate)}</b>/night
                            </Title>

                        </ContentContainerHolder>
                    </RoomContainerContentRight>
                </RoomContainer>
            </RoomContainerMain>
            <Button
                whileHover={{ backgroundColor: "#0C4426", color: "white" }}
                w='200px'
                h='60px'
                textcolor="#0C4426"
                fam='Playfair Display, serif'
                weight='-400'
                fontStyle='Normal'
                radius="0px"
                border="1px solid #0C4426"
                margin='30px 0px 0px 0px'
                fontsize='23px'
                href='/bookingCart'
            >
                Book this now!
            </Button>
            <Button
                whileHover={{ color: "#0C4426" }}
                w='100px'
                h='40px'
                textcolor='#FFFFFF'
                fam='Times New Roman, serif'
                weight='-400'
                fontStyle='Italic'
                radius="0px"
                margin='20px 0px 40px 0px'
                fontsize='16px'
                bg='#FF9292'
                href='/booking'
            >
                Cancel
            </Button>
        </Container>
    )
}
