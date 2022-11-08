import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ButtonHolder, Container, HorizontalLine, RatingContainer, RoomContainer, RoomContainerContentLeft, RoomContainerContentPhoto, RoomContainerContentRight, RoomContainerMain, ServicesContainer, TitleCalendarContainer, RatingContainerRight, BookingLegendsMain, BookingLegendsContainer, BookingLegends, BookingLegendsWhite, BookingLegendsRed, BookingLegendsGreen, BookingLegendsBlue, BookingLegendsDarkJade, LocationPinRed, Services, LabelDiv, Persons } from './Styles'
import { Title } from '../../components/title/styles';
import { Button } from '../../components/button/styles';
import { TextInput } from '../../components/textBox/style';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import TvIcon from '@mui/icons-material/Tv';
import ShowerIcon from '@mui/icons-material/Shower';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import PersonIcon from '@mui/icons-material/Person';
import DateRangePicker from '../../components/datePicker/DateRangePicker'
import Background from '../../images/RoomsIMG/premium.jpg'
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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PendingIcon from '@mui/icons-material/Pending';
import ImageSlider from '../../components/imageSlider/ImageSlider';
import * as moment from 'moment';
import { Badge } from '@mui/material';
import { borderRadius } from '@mui/system';
import { apiKey } from '../../../apiKey';
export const BookingPageCont = () => {
    const ratingValue = 3.6;
    const [roomType, setRoomType] = useState([])
    const [adults, setAdults] = useState(2)
    const [kids, setKids] = useState(0)
    const [usedServices, setUsedServices] = useState([])
    const [startDate, setStartDate] = useState(new Date(new Date().setHours(0, 0, 0, 0)));
    const [endDate, setEndDate] = useState(new Date(new Date(new Date().getTime() + 86400000).setHours(0, 0, 0, 0)));
    const [nights, setNights] = useState();
    const [room, setRoom] = useState([]);
    const [availbleRoomType, setAvailableRoomType] = useState([]);
    const [notAvailableRoom, setNotAvailableRoom] = useState([]);
    const [bookedRooms, setBookedRooms] = useState(window.sessionStorage.getItem('AvailedRoom') != null ? JSON.parse(window.sessionStorage.getItem('AvailedRoom')) : []);
    const [bookFilter, setBookFilter] = useState(0)

    const [roomTypeImagesDb, setRoomTypeImagesDb] = useState([])

    let uniqueAvailbleRoomType = [... new Set(availbleRoomType)]

    useEffect(() => {
        if (window.sessionStorage.getItem('AvailedRoom') != null) {
            setBookedRooms(JSON.parse(window.sessionStorage.getItem('AvailedRoom')))
        }


    }, [bookFilter])

    // useEffect(() => {
    //     if (window.sessionStorage.getItem('AvailedRoom') != null) {
    //         setBookedRooms(JSON.parse(window.sessionStorage.getItem('AvailedRoom')))
    //     }
    // }, [])



    useEffect(() => {
        axios.get(apiKey + 'api/getAllRoomTypeImages').then((result) => {
            // for (let index = 0; index < result.data.length; index++) {
            //     if (result.data[index].roomType_id == id) {
            //         setRoomTypeImagesDb((oldData) => [...oldData, result.data[index].roomImages])
            //     }

            // }
            setRoomTypeImagesDb(result.data)
        }).catch((err) => {
            console.lot(err)
        });

        if (window.sessionStorage.getItem('endDate') != null || window.sessionStorage.getItem('kids') != null || window.sessionStorage.getItem('guest') != null || window.sessionStorage.getItem('startDate') != null) {

            setEndDate(new Date(window.sessionStorage.getItem('endDate')))
            setStartDate(new Date(window.sessionStorage.getItem('startDate')))
            setAdults(parseInt(window.sessionStorage.getItem('guest')))
            setKids(parseInt(window.sessionStorage.getItem('kids')))
            window.sessionStorage.clear();
        }
    }, [])




    useEffect(() => {
        if (bookedRooms.length != 0) {
            for (let index = 0; index < bookedRooms.length; index++) {
                let systemDates = getDates(startDate, endDate);
                systemDates.pop()
                let availedRoomDates = getDates(bookedRooms[index].checkIn, bookedRooms[index].checkOut);
                availedRoomDates.pop()


                loop1:
                for (let i = 0; i < systemDates.length; i++) {
                    loop2:
                    for (let j = 0; j < availedRoomDates.length; j++) {
                        if (systemDates[i] == availedRoomDates[j]) {
                            bookedRooms[index].roomID.map((value) => {

                                setNotAvailableRoom((oldData) => [...oldData, value])
                            })
                            break loop1;
                        }
                        else {
                            console.log(false)
                        }
                    }

                }
            }
        }
        else {
        }
    }, [bookedRooms])
    useEffect(() => {

        if (startDate !== null && endDate !== null) {
            setNights(Math.floor((endDate - startDate) / (24 * 60 * 60 * 1000)));
        }
        else {
            setNights(0);
        }
        // if () {
        //     alert('ey')
        //     // setEndDate(new Date(Date.now(startDate)).setHours(0, 0, 0, 0) )
        // }
        // console.log("ugh: ", new Date(startDate).getTime() + 86400000)
        if (Date.parse(startDate) >= Date.parse(endDate)) {
            // setEndDate(new Date(startDate).getTime() + 86400000)
            setEndDate(new Date(Date.parse(startDate) + 86400000))
        }

        if (Date.parse(endDate) - Date.parse(startDate) > 2629800000) {
            alert('For period of stay longer than 30 night(s), please call Tel:(+632) 8628-0768 / Cell No:(+63) 9176300113 or send an email to rm.luxehotel@gmail.com')
            setEndDate(new Date(Date.parse(startDate) + 2629800000))
        }
        // if(startDate )
    }, [startDate, endDate])

    const getNotAvailableRoom = async () => {
        try {
            let result = await axios.get(apiKey + 'api/getAllReservationSummary')
            for (let index = 0; index < result.data.length; index++) {
                if (result.data[index].bookingStatus == "PENDING" || result.data[index].bookingStatus == "RESERVED" || result.data[index].bookingStatus == "CHECKED-IN") {
                    let systemDates = getDates(startDate, endDate);
                    systemDates.pop()
                    let dataBaseDates = getDates(result.data[index].checkInDate, result.data[index].checkOutDate);
                    dataBaseDates.pop()

                    loop1:
                    for (let i = 0; i < systemDates.length; i++) {
                        loop2:
                        for (let j = 0; j < dataBaseDates.length; j++) {
                            if (systemDates[i] == dataBaseDates[j]) {
                                setNotAvailableRoom((oldData) => [...oldData, result.data[index].room_id])
                                break loop1;
                            }
                            else {
                                console.log(false)
                            }
                        }

                    }
                }

            }


        } catch (error) {
            console.log(error.data)
        }
    }

    const getRooms = async () => {
        try {
            let res = await axios.get(apiKey + 'api/getAllRoom')
            setRoom([])
            res.data.map((item) => {
                if (item.roomStatus !== "Maintenance" && item.status != false) {
                    setRoom((oldData) => [...oldData, item])
                }
            })


        } catch (error) {
            console.log(error.data)

        }
    }

    // const getRoomtypes = async () => {
    //     try {
    //         let res = await axios.get(apiKey + 'api/getAllRoomType')
    //         setRoomType([])
    //         res.data.map((item) => {
    //             if (item.maxAdultOccupancy >= adults && item.maxKidsOccupancy >= kids) {
    //                 setRoomType((oldData) => [...oldData, item])
    //             }
    //         })

    //         console.log(roomType)

    //     } catch (error) {
    //         console.log(error.data)
    //     }
    // }

    const getUsedServices = async () => {
        try {
            let res = await axios.get(apiKey + 'api/getAllUsedServices')
            setUsedServices(res.data)

        } catch (error) {
            console.log(error.data)

        }
    }
    useEffect(() => {
        getNotAvailableRoom();
        getRooms();
        // getRoomtypes();
        getUsedServices()
        window.sessionStorage.removeItem('checkIn')
        window.sessionStorage.removeItem('checkOut')
        window.sessionStorage.removeItem('nights')
        window.sessionStorage.removeItem('kid')
        window.sessionStorage.removeItem('adult')
        window.sessionStorage.removeItem('rooms')

        // axios.get(apiKey+'api/getAllReservationSummary').then((result) => {
        //     setNotAvailableRoom([])
        //     for (let index = 0; index < result.data.length; index++) {
        //         if (result.data[index].reservation.reservationStatus == "PENDING" || result.data[index].reservation.reservationStatus == "RESERVED" || result.data[index].reservation.reservationStatus == "BOOKED") {
        //             let systemDates = getDates(startDate, endDate);
        //             systemDates.pop()
        //             let dataBaseDates = getDates(result.data[index].checkInDate, result.data[index].checkOutDate);
        //             dataBaseDates.pop()

        //             loop1:
        //             for (let i = 0; i < systemDates.length; i++) {
        //                 loop2:
        //                 for (let j = 0; j < dataBaseDates.length; j++) {
        //                     if (systemDates[i] == dataBaseDates[j]) {
        //                         setNotAvailableRoom((oldData) => [...oldData, result.data[index].room_id])
        //                         break loop1;
        //                     }
        //                     else {
        //                         console.log(false)
        //                     }
        //                 }

        //             }
        //         }

        //     }
        // }).catch((err) => {

        // });

        // axios.get(apiKey+'api/getAllRoom').then((res) => {

        //     setRoom([])
        //     res.data.map((item) => {
        //         console.log(item.roomStatus)
        //         if (item.roomStatus !== "Maintenance") {
        //             setRoom((oldData) => [...oldData, item])
        //         }
        //     })
        // }).catch((err) => {
        //     console.log(err.data)
        // })


        // axios.get(apiKey+'api/getAllRoomType').then((res) => {
        //     setRoomType([])
        //     res.data.map((item) => {
        //         if (item.maxAdultOccupancy >= adults && item.maxKidsOccupancy >= kids) {
        //             setRoomType((oldData) => [...oldData, item])
        //         }
        //     })
        // }).catch((err) => {
        //     console.log(err.data)
        // })

        // console.log("roomTypeAvailable1:", roomType)


        // axios.get(apiKey+'api/getAllUsedServices').then((res) => {
        //     setUsedServices(res.data)
        // }).catch((err) => {
        //     console.log(err.data)
        // })

    }, [bookFilter, bookedRooms])

    useEffect(() => {
        room.map((value, index) => {
            if (notAvailableRoom.includes(value.id)) {
                room.splice(index, 1)
            }
        })
    }, [room, notAvailableRoom])
    // setAvailableRoomType([])

    useEffect(() => {
        setAvailableRoomType([])
        room.map((value) => {
            // console.log(value.roomType.id)
            if (value.roomStatus !== "Maintenance") {
                setAvailableRoomType((oldData) => [...oldData, value.roomType.id])
            }
        })
    }, [room])

    const bookFilterDate = () => {
        setBookFilter(bookFilter + 1)
        setNotAvailableRoom([])

    }


    // useEffect(() => {
    //     roomType.map((item, index) => {
    //         if (uniqueAvailbleRoomType.includes(item.id) === false) {
    //             roomType.splice(index, 1)
    //         }

    //     })
    // }, [roomType, uniqueAvailbleRoomType])

    useEffect(() => {
        // if (roomType !== null) {
        //     roomType.map((item, index) => {
        //         if (uniqueAvailbleRoomType.includes(item.id) === false) {
        //             roomType.splice(index, 1)
        //         }

        //         console.log("sliced")
        //     })
        // }
        // console.log(roomType)

        axios.get(apiKey + 'api/getAllRoomType').then((res) => {
            setRoomType(res.data.filter((item) => {
                if (item.maxAdultOccupancy >= adults && item.maxKidsOccupancy >= kids && uniqueAvailbleRoomType.includes(item.id) == true && item.status == true) {
                    return item;
                }
            }

            ))

        }).catch((err) => {
            console.log(err)

        });


    }, [availbleRoomType])

    const bookRoom = (roomTypeId) => {
        const checkIn = new Date(startDate)
        const checkOut = new Date(endDate)
        let roomThatCanBeReserve = [];
        room.map((value) => {
            if (value.roomType.id == roomTypeId) {
                roomThatCanBeReserve.push(value.id)
            }
        })

        window.sessionStorage.setItem('checkIn', checkIn.toLocaleDateString())
        window.sessionStorage.setItem('checkOut', checkOut.toLocaleDateString())
        window.sessionStorage.setItem('nights', nights)
        window.sessionStorage.setItem('rooms', JSON.stringify(roomThatCanBeReserve))
        window.sessionStorage.setItem('adult', adults)
        window.sessionStorage.setItem('kid', kids)

        window.location = '/booking/room/' + roomTypeId;
    }

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
        new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'PHP'
        }).format(value);

    let minEndDate = new Date(startDate);
    minEndDate.setDate(minEndDate.getDate() + 1);


    function getDates(startDate, stopDate) {
        var dateArray = [];
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push(moment(currentDate).format('YYYY-MM-DD'))
            currentDate = moment(currentDate).add(1, 'days');
        }
        return dateArray;
    }
    return (

        <Container>
            <Title
                color='#bfaa7e'
                weight='normal'
                size='3.5vw'
                size1000='40px'
                margin='1vw 0px 1vw 0px'
                margin1000='1vw 0px 1vw 0px'
            >
                Bookings
            </Title>
            <HorizontalLine
                w="50%"></HorizontalLine>
            <TitleCalendarContainer>
                <DateRangePicker
                    startDate={startDate}
                    nights={nights}
                    endDate={endDate}
                    onChangeStartDate={(date) => setStartDate(date)}
                    onChangeEndDate={(date) => setEndDate(date)}
                    minDateStart={new Date()}
                    // maxDateStart={new Date(endDate)}
                    minDateEnd={minEndDate}
                    maxDateStart={new Date(Date.now() + 31556926000)}

                // maxDateEnd={new Date(Date.parse(startDate) + 2629800000)}
                // minDate={new Date()}
                />

                <Persons>
                    <LabelDiv>
                        <TextInput
                            style={{ fontWeight: 'bold' }}
                            family='Roboto Slab'
                            width="10vw"
                            placeholder="No. of Adults"
                            align="center"
                            borderColor='black'
                            fontSize='16px'
                            margins='0px'
                            value={adults}
                            max={4}
                            min={1}
                            type='number'
                            onChange={(e) => {
                                setAdults(e.target.value);
                            }}
                            height='3vw'
                            className='inputPerson'
                        >

                        </TextInput>
                        <Title
                            size='1.1vw'
                            size1000='12px'

                            weight="Bold">

                            Adults
                        </Title>
                    </LabelDiv>
                    <LabelDiv>


                        <TextInput
                            style={{ fontWeight: 'bold' }}
                            family='Roboto Slab'
                             width="10vw"
                             fontSize='16px'
                            placeholder="No. of Kids"
                            align="center"
                            borderColor='black'
                            margins='0px'
                            max={2}
                            min={0}
                            value={kids}
                            type='number'
                            onChange={(e) => {
                                setKids(e.target.value);
                            }}
                            height='3vw'
                            className='inputPerson'
                        ></TextInput>

                        <Title
                            size1000='12px'
                            size='1.1vw'
                            weight="bold">

                            Kids
                        </Title>
                    </LabelDiv>
                </Persons>
                <Button
                    whileHover={{ backgroundColor: "#2E2E2E", color: "white" }}
                    w='auto'
                    h='auto'
                    textcolor="black"
                    fam='Times New Roman'
                    weight='400'
                    fontStyle='Italic'
                    radius="0px"
                    padding='10px 50px'
                    
                    border="1px solid #8F805F"
                    // fontsize='1.1vw'
                    className='buttonBook'
                    onClick={() => { bookFilterDate(); }}
                >

                    Book now!!
                </Button>
            </TitleCalendarContainer>



            <div>
                <Title
                    color='#2e2e2e'
                    weight='normal'
                    size='3vw'
                    size1000='40px'

                >
                    Available Rooms
                    {bookedRooms.length != 0 ?
                        <Badge
                            badgeContent={bookedRooms.length} color="primary"
                            style={
                                {
                                    cursor: 'pointer',
                                    margin: '0px 0px 0px 20px',
                                    padding: '10px',
                                    backgroundColor: '#bfaa7e',
                                    borderRadius: '100%'
                                }
                            }
                            onClick={() => {
                                window.location = '/bookingCart'
                            }}
                        >
                            <ShoppingCartIcon color="action" />
                        </Badge>
                        :
                        ""}
                </Title>
            </div>


            <HorizontalLine
                w="30%"
            ></HorizontalLine>

            {
                roomType.length == 0 ?
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column' }}>
                        <Title
                            color='#898585'
                            weight='500'
                            size='3vw'
                            margin='20px 0px 0px 0px'
                            family='Roboto Slab'

                        >
                            No available rooms in your preffered date(s). Please pick another one.

                        </Title>
                        {/* <Button
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
                            href=''
                        >
                            Book this now!
                        </Button> */}
                    </div>
                    :
                    roomType.sort((a, b) => a.roomRate - b.roomRate).map((item, index, arr) => (
                        <RoomContainerMain>
                            <Title
                                color='#292929'
                                weight='700'
                                size='33px'
                                fStyle='Normal'
                                margin='10px 0px 10px 0px'
                                align='left'
                                family='Roboto Slab'
                                size1000='30px'
                            >
                                {item.roomType}
                            </Title>
                            <RoomContainer>
                                {/* <RoomContainerContentPhoto
                                    src={Background}>

                                </RoomContainerContentPhoto> */}
                                <div
                                    style={{ display: 'inline-block', }}
                                    className='imageSlider'
                                >
                                    <ImageSlider roomImages={roomTypeImagesDb.length != 0 ? roomTypeImagesDb.filter((itemRoomImage) => (itemRoomImage.roomType_id == item.id)).map((obj) => (obj.roomImages)) : null} />
                                </div>
                                <RoomContainerContentRight>

                                    <Title
                                        color='#8f805f'
                                        weight='700'
                                        size='20px'
                                        fStyle='Normal'
                                        margin='10px 0px 0px 0px'
                                        align='left'
                                        size1000='20px'
                                        margin1000='10px 0px 0px 0px'

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
                                        size='20px'
                                        fStyle='Normal'
                                        margin='10px 0px 0px 0px'
                                        align='left'
                                        size1000='20px'
                                        margin1000='20px 0px 0px 0px'
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
                                        margin1000='0px 0px 20px 0px'
                                    >
                                        {item.maxAdultOccupancy} Adult(s) and {item.maxKidsOccupancy} Kid(s) only
                                    </Title>

                                    <Title
                                        color='#8f805f'
                                        weight='700'
                                        size='20px'
                                        fstyle='Normal'
                                        margin1000='20px 0px 0px 0px'
                                        margin='20px 0px 0px 0px'
                                        align='left'
                                    >
                                        Price
                                    </Title>
                                    <Title
                                        family='Roboto Slab'
                                        color='#2e2e2e'
                                        weight='700'
                                        size1000='17px'
                                        size='25px'
                                        fStyle='Normal'
                                        margin1000='0px 0px 20px 0px'
                                        margin='15px 0px 0px 10px'
                                        align='left'

                                    >
                                        {numberFormat(item.roomRate)}/night
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
                                            onClick={() => {
                                                bookRoom(item.id);
                                            }}
                                        >
                                            Book now!
                                        </Button>

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
                            size='20px'
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
                            size='20px'
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
                            size='20px'
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