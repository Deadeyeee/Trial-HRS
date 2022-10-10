import { Services, ButtonHolder, Container, ContentContainerHolder, RatingContainer, RoomContainer, RoomContainerContentPhoto, RoomContainerContentRight, RoomContainerMain, ServicesContainer, RoomPicture, } from './Styles'
import { Title } from '../../components/title/styles';
import { Button } from '../../components/button/styles';
import Rating from '@mui/material/Rating';

import React, { useEffect, useRef, useState } from 'react'
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
import { TextInput } from '../../components/textBox/style';
import Slider from "react-slick";
import ImageSlider from '../../components/imageSlider/ImageSlider.js';
import { letterSpacing } from '@mui/system';
import { TextField } from '@mui/material';

export const BookingChildPageCont = () => {

    let { id } = useParams();
    const [roomType, setRoomType] = useState([])
    const [usedServices, setUsedServices] = useState([])
    const [roomQuantity, setRoomQuantity] = useState(1)
    const [adult, setAdult] = useState(window.sessionStorage.getItem('adult'))
    const [kid, setKid] = useState(window.sessionStorage.getItem('kid'))
    const [specialInstruction, setSpecialInstruction] = useState("")
    const [availedRooms, setAvailedRooms] = useState([])

    const { roomquantityRef, kidRef, adultRef } = useRef();
    const addRoom = () => {

        if (roomQuantity > availedRooms.length) {
            setRoomQuantity(availedRooms.length);
            roomquantityRef.current.focus();
        }
        else if (roomQuantity < 1) {
            setRoomQuantity(1);
        }
        else if (kid > roomType.maxKidsOccupancy) {
            setKid(roomType.maxKidsOccupancy);
            kidRef.current.focus();
        }
        else if (kid < 0) {
            setKid(0);
        }
        else if (adult > roomType.maxAdultOccupancy) {
            setAdult(roomType.maxAdultOccupancy);
            adult.current.focus();
        }
        else if (adult < 1) {
            setAdult(1);
        }
        else {
            let listOfRoomAvail = [];
            for (let index = 0; index < roomQuantity; index++) {
                listOfRoomAvail.push(availedRooms[index])
            }

            if (window.sessionStorage.getItem('AvailedRoom') == null) {
                let items =
                    [{
                        "id": id,
                        "roomName": roomType.roomType,
                        "roomRate": roomType.roomRate,
                        "roomQuantity": roomQuantity,
                        "checkIn": window.sessionStorage.getItem('checkIn'),
                        "checkOut": window.sessionStorage.getItem('checkOut'),
                        "nights": window.sessionStorage.getItem('nights'),
                        "roomID": listOfRoomAvail,
                        "kid": kid,
                        "adult": adult,
                        "specialInstruction": specialInstruction,
                    }]
                window.sessionStorage.setItem('AvailedRoom', JSON.stringify(items))
            }
            else {
                let items =
                {
                    "id": id,
                    "roomName": roomType.roomType,
                    "roomRate": roomType.roomRate,
                    "roomQuantity": roomQuantity,
                    "checkIn": window.sessionStorage.getItem('checkIn'),
                    "checkOut": window.sessionStorage.getItem('checkOut'),
                    "nights": window.sessionStorage.getItem('nights'),
                    "roomID": listOfRoomAvail,
                    "kid": kid,
                    "adult": adult,
                    "specialInstruction": specialInstruction,
                }
                const existingAvailedRooms = JSON.parse(window.sessionStorage.getItem("AvailedRoom"))
                existingAvailedRooms.push(items)
                window.sessionStorage.setItem('AvailedRoom', JSON.stringify(existingAvailedRooms))
                // window.sessionStorage.setItem('AvailedRoom', JSON.stringify())

            }

            window.sessionStorage.removeItem('checkIn')
            window.sessionStorage.removeItem('checkOut')
            window.sessionStorage.removeItem('nights')
            window.sessionStorage.removeItem('kid')
            window.sessionStorage.removeItem('adult')
            window.location = '/bookingCart'
        }
    }

    useEffect(() => {
        console.log("asd : ",window.sessionStorage.getItem('rooms'))
        if (window.sessionStorage.getItem('checkIn') == null || window.sessionStorage.getItem('checkOut') == null || window.sessionStorage.getItem('nights') == null || window.sessionStorage.getItem('rooms') == null || window.sessionStorage.getItem('rooms') == "[]") {
            window.location = '/booking'
        }
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
        setAvailedRooms(JSON.parse(window.sessionStorage.getItem('rooms')));

        

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

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

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

                    <div
                        style={{ width: '550px', display: 'inline-block', }}
                    >
                        <ImageSlider />
                    </div>
                    <RoomContainerContentRight>
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
                                size="20px"

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
                                align='left'
                            >
                                Occupancy:
                            </Title>
                            <ContainerGlobal
                                align='flex-end'
                            >
                                <TextInput
                                    onChange={(e) => {
                                        setAdult(e.target.value);
                                    }}
                                    value={adult}
                                    family="Roboto Slab"
                                    type="number"
                                    // ref={emailref}
                                    widthFocus="0px"
                                    width='10%'
                                    fontSize='25px'
                                    indent='5px'
                                    radiusFocus="0px"
                                    border="0 0 1px"
                                    background='white'
                                    align='center'
                                    margins='0px 0px 0px 15px'
                                    // defaultValue="1"
                                    weight='bold'
                                    height='100%'
                                    min="1"
                                    ref={adultRef}
                                    max={roomType.maxAdultOccupancy}
                                    required

                                ></TextInput>
                                <Title
                                    family='Times New Roman, times, serif'
                                    color='#292929'
                                    weight='normal'
                                    size='20px'
                                    fStyle='Normal'
                                    margin='0px 0px 0px 5px'
                                    align='left'
                                >
                                    <b></b> adult/s (max of {roomType.maxAdultOccupancy})
                                </Title>
                                <TextInput
                                    onChange={(e) => {
                                        setKid(e.target.value);
                                    }}
                                    value={kid}
                                    family="Roboto Slab"
                                    type="number"
                                    // ref={emailref}
                                    widthFocus="0px"
                                    width='10%'
                                    fontSize='25px'
                                    indent='5px'
                                    radiusFocus="0px"
                                    border="0 0 1px"
                                    background='white'
                                    align='center'
                                    margins='0px 0px 0px 15px'
                                    // defaultValue="1"
                                    weight='bold'
                                    min="1"
                                    ref={kidRef}
                                    max={roomType.maxKidsOccupancy}
                                    required

                                ></TextInput>
                                <Title
                                    family='Times New Roman, times, serif'
                                    color='#292929'
                                    weight='normal'
                                    size='20px'
                                    fStyle='Normal'
                                    margin='0px 0px 0px 5px'
                                    align='left'
                                >
                                    <b></b> kid/s (max of {roomType.maxKidsOccupancy})
                                </Title>
                            </ContainerGlobal>
                        </ContentContainerHolder>
                        <ContentContainerHolder>
                            <Title
                                color='#2e2e2e'
                                weight='400'
                                size='25px'
                                fStyle='Normal'
                                margin='0px 0px 0px 0px'
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
                                margin='0px 0px 0px 83px'
                                align='left'
                            >
                                <b>{numberFormat(roomType.roomRate * roomQuantity)}</b>/night
                            </Title>

                        </ContentContainerHolder>
                        <ContentContainerHolder>
                            <Title
                                color='#2e2e2e'
                                weight='400'
                                size='25px'
                                fStyle='Normal'
                                margin='0px 20px 0px 0px'
                                align='left'
                            >
                                Room quantity:
                            </Title>
                            <TextInput
                                onChange={(e) => {
                                    setRoomQuantity(e.target.value);
                                }}
                                value={roomQuantity}
                                family="Roboto Slab"
                                type="number"
                                // ref={emailref}
                                widthFocus="0px"
                                width='15%'
                                fontSize='25px'
                                indent='5px'
                                radiusFocus="0px"
                                border="0 0 1px"
                                background='white'
                                align='center'
                                margins='0px 10px 0px 0px'
                                // defaultValue="1"
                                weight='bold'
                                height='100%'
                                min="1"
                                ref={roomquantityRef}
                                max={availedRooms.length}
                                required

                            >
                            </TextInput>
                            <Description
                                align="left"
                                width="auto"
                                size="20px"
                                line="50px"


                            >{availedRooms.length} room left</Description>
                        </ContentContainerHolder>
                        <ContentContainerHolder>
                            <Title
                                color='#2e2e2e'
                                weight='400'
                                size='25px'
                                fStyle='Normal'
                                margin='0px 20px 0px 0px'
                                align='left'
                            >
                                Special Instruction:
                            </Title>
                            <TextField
                                placeholder='Special Instruction'
                                label="Special Instruction"
                                variant="outlined"
                                type='textarea'
                                multiline
                                rows={4}
                                value={specialInstruction}
                                onChange={(e) => {
                                    setSpecialInstruction(e.target.value)
                                }}
                                style={{ width: '95%', }}
                            />

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
                onClick={addRoom}
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
        </Container >
    )
}
