import React, { useEffect, useState } from 'react'
import { Title } from '../../../client/components/title/styles'
import { Container, HeadContainer, SummaryContainer, SummaryDescription, SummaryIcon, SummaryPlate, TableContainer, Td, Th, Tr } from './style'
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import { Doughnut } from 'react-chartjs-2'
import { Chart as CharJS } from 'chart.js/auto'
import { ContainerGlobal } from '../../components/container/container';
import { Reservation } from '../analytics/Reservation';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine';
import Occupancy from '../analytics/Occupancy';
import ActionButton from '../../components/actionButton/ActionButton';
import { apiKey } from '../../../apiKey';
import axios from 'axios';
import moment from 'moment';

const DashboardContainer = () => {

    const Dates = new Date(Date.now());
    const DateNow = Dates.toString().split(' ');


    const [reservationSummary, setReservationSummary] = useState([])
    const [reservation, setReservation] = useState([])
    const [amenity, setAmenity] = useState([])
    const [room, setRoom] = useState([])
    const [orderedAmenity, setOrderedAmenity] = useState([])
    const [yearOccupancyRate, setYearOccupancyRate] = useState(new Date(new Date().getFullYear(), 0, 1))


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

    const [yearlyOcupancyDates, setYearlyOcupancyDates] = useState([]);


    useEffect(() => {
        setYearlyOcupancyDates(getDates(yearOccupancyRate, new Date(new Date(yearOccupancyRate).getFullYear(), 11, 31)))
    }, [yearOccupancyRate])

    useEffect(() => {
        axios.get(apiKey + 'api/getAllReservation/').then((result) => {
            setReservation(result.data)

            axios.get(apiKey + 'api/getAllReservationSummary').then((result) => {
                setReservationSummary(result.data)

                axios.get(apiKey + 'api/getAllOrderedAmenities').then((result) => {
                    setOrderedAmenity(result.data)


                    axios.get(apiKey + 'api/getAllAmenities').then((result) => {
                        setAmenity(result.data)
                        axios.get(apiKey + 'api/getAllRoom').then((result) => {
                            setRoom(result.data)

                        }).catch((err) => {
                            console.log(err)
                        });
                    }).catch((err) => {
                        console.log(err)
                    });
                }).catch((err) => {
                    console.log(err)
                });
            }).catch((err) => {
                console.log(err)
            });
        }).catch((err) => {
            console.log(err)

        });
    }, [])


    return (
        <Container>
            <HeadContainer>
                <ContainerGlobal align='center'>
                    <ContainerGlobal direction='column'>
                        <Title
                            size='20px'
                            color='white'
                            family='Helvetica'
                            fstyle='normal'
                            weight='600'
                            align='left'
                            margin='20px 0px 10px 30px'
                        >
                            DASHBOARD
                        </Title>
                        <Title
                            size='14px'
                            color='#d3bc9a'
                            family='arial'
                            fstyle='normal'
                            weight='normal'
                            align='left'
                            margin='0px 0px 20px 30px'
                        >
                            Hello, <b>Juan Dela Cruz!</b> Welcome back! Here's what's going on with your business.
                        </Title>
                    </ContainerGlobal>
                    <Title
                        size='20px'
                        color='white'
                        family='Helvetica'
                        fstyle='normal'
                        weight='400'
                        align='left'
                        margin='0px 20px 0px auto'
                    >
                        {DateNow[0] + " " + DateNow[1] + " " + DateNow[2] + " " + DateNow[3] + " " + DateNow[4]}
                    </Title>
                </ContainerGlobal>
            </HeadContainer>
            <SummaryContainer>
                <SummaryPlate
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 1 }}
                >
                    <SummaryIcon
                        bg='#E1C340'
                    >
                        <BedroomChildOutlinedIcon
                            style={{
                                width: '40px',
                                height: '40px',
                            }}></BedroomChildOutlinedIcon>
                    </SummaryIcon>

                    <SummaryDescription>
                        <Title
                            size='14px'
                            color='black'
                            family='arial'
                            fstyle='normal'
                            weight='600'
                            align='left'
                        >
                            Currently Booked
                        </Title>
                        <Title
                            size='36px'
                            color='#E1C340'
                            family='arial'
                            fstyle='normal'
                            weight='normal'
                            align='left'
                        >
                            36
                        </Title>
                    </SummaryDescription>
                </SummaryPlate>


                <SummaryPlate
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 1 }}
                >
                    <SummaryIcon
                        bg='#76B947'>
                        <CheckCircleOutlineOutlinedIcon
                            style={{
                                width: '40px',
                                height: '40px',
                            }} />
                    </SummaryIcon>

                    <SummaryDescription>
                        <Title
                            size='14px'
                            color='black'
                            family='arial'
                            fstyle='normal'
                            weight='600'
                            align='left'
                        >
                            Expected Check-in
                        </Title>
                        <Title
                            size='36px'
                            color='#76B947'
                            family='arial'
                            fstyle='normal'
                            weight='normal'
                            align='left'
                        >
                            10
                        </Title>
                    </SummaryDescription>
                </SummaryPlate>


                <SummaryPlate
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 1 }}
                >
                    <SummaryIcon
                        bg='#E7625F'>
                        <CancelOutlinedIcon
                            style={{
                                width: '40px',
                                height: '40px',
                            }} />
                    </SummaryIcon>

                    <SummaryDescription>
                        <Title
                            size='14px'
                            color='black'
                            family='arial'
                            fstyle='normal'
                            weight='600'
                            align='left'
                        >
                            Expected Check-out
                        </Title>
                        <Title
                            size='36px'
                            color='#E7625F'
                            family='arial'
                            fstyle='normal'
                            weight='normal'
                            align='left'
                        >
                            4
                        </Title>
                    </SummaryDescription>
                </SummaryPlate>


                <SummaryPlate
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 1 }}
                >
                    <SummaryIcon
                        bg='#189AB4'>
                        <MeetingRoomOutlinedIcon
                            style={{
                                width: '40px',
                                height: '40px',
                            }} />
                    </SummaryIcon>

                    <SummaryDescription>
                        <Title
                            size='14px'
                            color='black'
                            family='arial'
                            fstyle='normal'
                            weight='600'
                            align='left'
                        >
                            Available Rooms
                        </Title>
                        <Title
                            size='36px'
                            color='#189AB4'
                            family='arial'
                            fstyle='normal'
                            weight='normal'
                            align='left'
                        >
                            4
                        </Title>
                    </SummaryDescription>
                </SummaryPlate>

            </SummaryContainer>
            <ContainerGlobal
                w='94%'
                h='auto'
                overflow='none'
                justify='space-between'
                gap='20px'
            >
                <ContainerGlobal

                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 1 }}
                    w='50%'
                    h='50vh'
                    bg='white'
                    direction='column'
                    padding='30px'

                    gap='10px'
                    justify='center'
                >

                    <Title
                        size='26px'
                        color='black'
                        family='Helvetica'
                        fstyle='normal'
                        weight='600'
                        align='left'
                    >
                        Reservations <a style={{ fontSize: '12px' }} href='/admin/report'>(view)</a>
                    </Title>


                    <HorizontalLine
                        bg='gray'
                        w='100%'
                        margin='0px'

                    ></HorizontalLine>

                    <ContainerGlobal

                        w='100%'
                        h='100%'
                        justify='center'

                        align='center'
                    >
                        <Reservation
                            confirmed={reservationSummary != 0 ?
                                reservationSummary.filter((obj) => obj.reservation.reservationStatus == 'RESERVED').filter((obj) => {
                                    let filterDate = getDates(new Date(Date.now()), new Date(Date.now()));

                                    if (filterDate.includes(moment(obj.checkInDate).format('YYYY-MM-DD')) == true || filterDate.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) == true) {
                                        return obj
                                    }
                                }).length
                                : ''}
                            cancelled={reservationSummary != 0 ?
                                reservationSummary.filter((obj) => obj.reservation.reservationStatus == 'CANCELLED').filter((obj) => {
                                    let filterDate = getDates(new Date(Date.now()), new Date(Date.now()));

                                    if (filterDate.includes(moment(obj.checkInDate).format('YYYY-MM-DD')) == true || filterDate.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) == true) {
                                        return obj
                                    }
                                }).length
                                : ''}
                            pending={reservationSummary != 0 ?
                                reservationSummary.filter((obj) => obj.reservation.reservationStatus == 'PENDING').filter((obj) => {
                                    let filterDate = getDates(new Date(Date.now()), new Date(Date.now()));

                                    if (filterDate.includes(moment(obj.checkInDate).format('YYYY-MM-DD')) == true || filterDate.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) == true) {
                                        return obj
                                    }
                                }).length
                                : ''}
                        />
                    </ContainerGlobal>


                </ContainerGlobal>
                <ContainerGlobal

                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 1 }}
                    w='50%'
                    h='50vh'
                    bg='white'
                    direction='column'
                    padding='30px'

                    gap='10px'
                >
                    <Title
                        size='26px'
                        color='black'
                        family='Helvetica'
                        fstyle='normal'
                        weight='600'
                        align='left'
                    >
                        Occupancy Rate <a style={{ fontSize: '12px' }} href='/admin/report'>(view)</a>
                    </Title>


                    <HorizontalLine
                        bg='gray'
                        w='100%'
                        margin='0px'

                    ></HorizontalLine>
                    <ContainerGlobal

                        w='100%'
                        h='100%'
                        justify='center'

                        align='center'
                    >
                        <Occupancy
                                    January={
                                        parseFloat(yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '01')
                                            .map((item) => (
                                                reservationSummary
                                                    .filter((obj) => obj.bookingStatus == 'CHECKED-IN' || obj.bookingStatus == 'CHECKED-OUT')
                                                    .filter((obj) => {
                                                        let bookedDates = getDates(obj.checkInDate, obj.checkOutDate)
                                                        bookedDates.pop()
                                                        if (bookedDates.includes(moment(item).format('YYYY-MM-DD'))) {
                                                            return obj
                                                        }

                                                    }).length / room.length * 100
                                            )).reduce((accu, value) => accu + value, 0) / yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '01').length).toFixed(2)
                                    }
                                    February={
                                        parseFloat(yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '02')
                                            .map((item) => (
                                                reservationSummary
                                                    .filter((obj) => obj.bookingStatus == 'CHECKED-IN' || obj.bookingStatus == 'CHECKED-OUT')
                                                    .filter((obj) => {
                                                        let bookedDates = getDates(obj.checkInDate, obj.checkOutDate)
                                                        bookedDates.pop()
                                                        if (bookedDates.includes(moment(item).format('YYYY-MM-DD'))) {
                                                            return obj
                                                        }

                                                    }).length / room.length * 100
                                            )).reduce((accu, value) => accu + value, 0) / yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '02').length).toFixed(2)
                                    }
                                    March={
                                        parseFloat(yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '03')
                                            .map((item) => (
                                                reservationSummary
                                                    .filter((obj) => obj.bookingStatus == 'CHECKED-IN' || obj.bookingStatus == 'CHECKED-OUT')
                                                    .filter((obj) => {
                                                        let bookedDates = getDates(obj.checkInDate, obj.checkOutDate)
                                                        bookedDates.pop()
                                                        if (bookedDates.includes(moment(item).format('YYYY-MM-DD'))) {
                                                            return obj
                                                        }

                                                    }).length / room.length * 100
                                            )).reduce((accu, value) => accu + value, 0) / yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '03').length).toFixed(2)
                                    }
                                    April={
                                        parseFloat(yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '04')
                                            .map((item) => (
                                                reservationSummary
                                                    .filter((obj) => obj.bookingStatus == 'CHECKED-IN' || obj.bookingStatus == 'CHECKED-OUT')
                                                    .filter((obj) => {
                                                        let bookedDates = getDates(obj.checkInDate, obj.checkOutDate)
                                                        bookedDates.pop()
                                                        if (bookedDates.includes(moment(item).format('YYYY-MM-DD'))) {
                                                            return obj
                                                        }

                                                    }).length / room.length * 100
                                            )).reduce((accu, value) => accu + value, 0) / yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '04').length).toFixed(2)
                                    }
                                    May={
                                        parseFloat(yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '05')
                                            .map((item) => (
                                                reservationSummary
                                                    .filter((obj) => obj.bookingStatus == 'CHECKED-IN' || obj.bookingStatus == 'CHECKED-OUT')
                                                    .filter((obj) => {
                                                        let bookedDates = getDates(obj.checkInDate, obj.checkOutDate)
                                                        bookedDates.pop()
                                                        if (bookedDates.includes(moment(item).format('YYYY-MM-DD'))) {
                                                            return obj
                                                        }

                                                    }).length / room.length * 100
                                            )).reduce((accu, value) => accu + value, 0) / yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '05').length).toFixed(2)
                                    }
                                    June={
                                        parseFloat(yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '06')
                                            .map((item) => (
                                                reservationSummary
                                                    .filter((obj) => obj.bookingStatus == 'CHECKED-IN' || obj.bookingStatus == 'CHECKED-OUT')
                                                    .filter((obj) => {
                                                        let bookedDates = getDates(obj.checkInDate, obj.checkOutDate)
                                                        bookedDates.pop()
                                                        if (bookedDates.includes(moment(item).format('YYYY-MM-DD'))) {
                                                            return obj
                                                        }

                                                    }).length / room.length * 100
                                            )).reduce((accu, value) => accu + value, 0) / yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '06').length).toFixed(2)
                                    }
                                    July={
                                        parseFloat(yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '07')
                                            .map((item) => (
                                                reservationSummary
                                                    .filter((obj) => obj.bookingStatus == 'CHECKED-IN' || obj.bookingStatus == 'CHECKED-OUT')
                                                    .filter((obj) => {
                                                        let bookedDates = getDates(obj.checkInDate, obj.checkOutDate)
                                                        bookedDates.pop()
                                                        if (bookedDates.includes(moment(item).format('YYYY-MM-DD'))) {
                                                            return obj
                                                        }

                                                    }).length / room.length * 100
                                            )).reduce((accu, value) => accu + value, 0) / yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '07').length).toFixed(2)
                                    }
                                    August={
                                        parseFloat(yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '08')
                                            .map((item) => (
                                                reservationSummary
                                                    .filter((obj) => obj.bookingStatus == 'CHECKED-IN' || obj.bookingStatus == 'CHECKED-OUT')
                                                    .filter((obj) => {
                                                        let bookedDates = getDates(obj.checkInDate, obj.checkOutDate)
                                                        bookedDates.pop()
                                                        if (bookedDates.includes(moment(item).format('YYYY-MM-DD'))) {
                                                            return obj
                                                        }

                                                    }).length / room.length * 100
                                            )).reduce((accu, value) => accu + value, 0) / yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '08').length).toFixed(2)
                                    }
                                    September={
                                        parseFloat(yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '09')
                                            .map((item) => (
                                                reservationSummary
                                                    .filter((obj) => obj.bookingStatus == 'CHECKED-IN' || obj.bookingStatus == 'CHECKED-OUT')
                                                    .filter((obj) => {
                                                        let bookedDates = getDates(obj.checkInDate, obj.checkOutDate)
                                                        bookedDates.pop()
                                                        if (bookedDates.includes(moment(item).format('YYYY-MM-DD'))) {
                                                            return obj
                                                        }

                                                    }).length / room.length * 100
                                            )).reduce((accu, value) => accu + value, 0) / yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '09').length).toFixed(2)
                                    }
                                    October={
                                        parseFloat(yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '10')
                                            .map((item) => (
                                                reservationSummary
                                                    .filter((obj) => obj.bookingStatus == 'CHECKED-IN' || obj.bookingStatus == 'CHECKED-OUT')
                                                    .filter((obj) => {
                                                        let bookedDates = getDates(obj.checkInDate, obj.checkOutDate)
                                                        bookedDates.pop()
                                                        if (bookedDates.includes(moment(item).format('YYYY-MM-DD'))) {
                                                            return obj
                                                        }

                                                    }).length / room.length * 100
                                            )).reduce((accu, value) => accu + value, 0) / yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '10').length).toFixed(2)
                                    }
                                    November={
                                        parseFloat(yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '11')
                                            .map((item) => (
                                                reservationSummary
                                                    .filter((obj) => obj.bookingStatus == 'CHECKED-IN' || obj.bookingStatus == 'CHECKED-OUT')
                                                    .filter((obj) => {
                                                        let bookedDates = getDates(obj.checkInDate, obj.checkOutDate)
                                                        bookedDates.pop()
                                                        if (bookedDates.includes(moment(item).format('YYYY-MM-DD'))) {
                                                            return obj
                                                        }

                                                    }).length / room.length * 100
                                            )).reduce((accu, value) => accu + value, 0) / yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '11').length).toFixed(2)
                                    }
                                    December={
                                        parseFloat(yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '12')
                                            .map((item) => (
                                                reservationSummary
                                                    .filter((obj) => obj.bookingStatus == 'CHECKED-IN' || obj.bookingStatus == 'CHECKED-OUT')
                                                    .filter((obj) => {
                                                        let bookedDates = getDates(obj.checkInDate, obj.checkOutDate)
                                                        bookedDates.pop()
                                                        if (bookedDates.includes(moment(item).format('YYYY-MM-DD'))) {
                                                            return obj
                                                        }

                                                    }).length / room.length * 100
                                            )).reduce((accu, value) => accu + value, 0) / yearlyOcupancyDates.filter((obj) => obj.split('-')[1] == '12').length).toFixed(2)
                                    }
                                />
                    </ContainerGlobal>

                </ContainerGlobal>
            </ContainerGlobal>
            <ContainerGlobal
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 1 }}
                w='90%'
                h='auto'
                bg='white'
                direction='column'
                padding='30px'
                margin='20px 0px 10px 0px'
                gap='10px'
            >

                <Title
                    size='26px'
                    color='black'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Bookings <a style={{ fontSize: '12px' }} href='/admin/booking'>(view)</a>
                </Title>


                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'

                ></HorizontalLine>

                <TableContainer>
                    <Tr>
                        <Th align='center'>Customer  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Phone  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Room Type  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Check in  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Check out  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Status  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Action</Th>
                    </Tr>
                    <Tr>

                        <Td align='center'>Berna Boddit</Td>
                        <Td align='center'>091234568</Td>
                        <Td align='center'>Deluxe Room</Td>
                        <Td align='center'>05/25/21</Td>
                        <Td align='center'>05/29/21</Td>
                        <Td align='center'>
                            <ContainerGlobal
                                w='100px'
                                h='auto'
                                margin='0px auto'
                                bg='rgb(118, 185, 71, .2)'
                                direction='row'
                                padding='2px 0px'
                                justify='center'
                                align='center'
                                border='2px solid rgb(118, 185, 71)'
                                gap='10px'
                                borderRadius='.5rem'
                            >

                                <Title
                                    family='Helvetica'
                                    size='12px'
                                    color='BLACK'
                                    fstyle='normal'
                                    display='inline'
                                    padding='5px 10px'
                                >
                                    Paid
                                </Title></ContainerGlobal>
                        </Td>
                        <Td align='center'><ActionButton /></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>Hurarric Gaturn</Td>
                        <Td align='center'>091234568</Td>
                        <Td align='center'>Deluxe Room</Td>
                        <Td align='center'>05/25/21</Td>
                        <Td align='center'>05/29/21</Td>
                        <Td align='center'>
                            <ContainerGlobal
                                w='100px'
                                h='auto'
                                margin='0px auto'
                                bg='rgb(118, 185, 71, .2)'
                                direction='row'
                                padding='2px 0px'
                                justify='center'
                                align='center'
                                border='2px solid rgb(118, 185, 71)'
                                gap='10px'
                                borderRadius='.5rem'
                            >

                                <Title
                                    family='Helvetica'
                                    size='12px'
                                    color='BLACK'
                                    fstyle='normal'
                                    display='inline'
                                    padding='5px 10px'
                                >
                                    Paid
                                </Title></ContainerGlobal></Td>
                        <Td align='center'><ActionButton /></Td>
                    </Tr>
                    <Tr>

                        <Td align='center'>Kiehl Jam</Td>
                        <Td align='center'>091234568</Td>
                        <Td align='center'>Deluxe Room</Td>
                        <Td align='center'>05/25/21</Td>
                        <Td align='center'>05/29/21</Td>
                        <Td align='center'>
                            <ContainerGlobal
                                w='100px'
                                h='auto'
                                margin='0px auto'
                                bg='rgb(118, 185, 71, .2)'
                                direction='row'
                                padding='2px 0px'
                                justify='center'
                                align='center'
                                border='2px solid rgb(118, 185, 71)'
                                gap='10px'
                                borderRadius='.5rem'
                            >

                                <Title
                                    family='Helvetica'
                                    size='12px'
                                    color='BLACK'
                                    fstyle='normal'
                                    display='inline'
                                    padding='5px 10px'
                                >
                                    Paid
                                </Title></ContainerGlobal></Td>
                        <Td align='center'><ActionButton /></Td>
                    </Tr>
                </TableContainer>
            </ContainerGlobal>

        </Container>
    )
}

export default DashboardContainer