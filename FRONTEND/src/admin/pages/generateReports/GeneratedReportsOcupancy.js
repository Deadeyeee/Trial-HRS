import React, { useEffect, useState } from "react";
import { ContainerGlobal } from "../../components/container/container";
import logo from "../../../client/images/logo.png";
import { Title } from "../../../client/components/title/styles";
import "./GenerateReports.css";
import axios from "axios";
import moment from "moment";
import { apiKey } from "../../../apiKey";
import { useParams } from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";
import { Reservation } from "../../containers/analytics/Reservation";
import Occupancy from "../../containers/analytics/Occupancy";
const GeneratedReportsOcupancy = () => {

    const bookingStatusStyle = (value) => {
        if (value == 'PENDING') {
            return <ContainerGlobal

                h='auto'
                margin='0px auto'
                bg='rgb(205, 161, 65, .2)'
                direction='row'
                padding='2px 0px'
                justify='center'
                align='center'
                border='2px solid rgb(205, 161, 65)'
                gap='10px'
                borderRadius='.5rem'
            >
                <Title
                    family='Helvetica'
                    size='.7vw'
                    color='BLACK'
                    fstyle='normal'
                    display='inline'

                >
                    {value.toLowerCase()}
                </Title>
            </ContainerGlobal>
        }
        else if (value == 'RESERVED') {
            return <ContainerGlobal

                h='auto'
                margin='0px auto'
                bg='rgb(0, 0, 255, .2)'
                direction='row'
                padding='2px 0px'
                justify='center'
                align='center'
                border='2px solid rgb(0, 0, 255)'
                gap='10px'
                borderRadius='.5rem'
            >
                <Title
                    family='Helvetica'
                    size='.7vw'
                    color='BLACK'
                    fstyle='normal'
                    display='inline'

                >
                    {value.toLowerCase()}
                </Title>
            </ContainerGlobal>
        }
        else if (value == 'CHECKED-IN') {
            return <ContainerGlobal

                h='auto'
                margin='0px auto'
                bg='rgb(0, 255, 0, .2)'
                direction='row'
                padding='2px 0px'
                justify='center'
                align='center'
                border='2px solid rgb(0, 255, 0)'
                gap='10px'
                borderRadius='.5rem'
            >
                <Title
                    family='Helvetica'
                    size='.7vw'
                    color='BLACK'
                    fstyle='normal'
                    display='inline'

                >
                    {value.toLowerCase()}
                </Title>
            </ContainerGlobal>
        }
        else if (value == 'NO-SHOW') {
            return <ContainerGlobal

                h='auto'
                margin='0px auto'
                bg='rgb(255, 0, 0, .2)'
                direction='row'
                padding='2px 0px'
                justify='center'
                align='center'
                border='2px solid rgb(255, 0, 0)'
                gap='10px'
                borderRadius='.5rem'
            >
                <Title
                    family='Helvetica'
                    size='.7vw'
                    color='BLACK'
                    fstyle='normal'
                    display='inline'

                >
                    {value.toLowerCase()}
                </Title>
            </ContainerGlobal>
        }
        else if (value == 'CHECKED-OUT') {
            return <ContainerGlobal

                h='auto'
                margin='0px auto'
                bg='rgb(0, 0, 0, .2)'
                direction='row'
                padding='2px 0px'
                justify='center'
                align='center'
                border='2px solid rgb(0, 0, 0)'
                gap='10px'
                borderRadius='.5rem'
            >
                <Title
                    family='Helvetica'
                    size='.7vw'
                    color='BLACK'
                    fstyle='normal'
                    display='inline'

                >
                    {value.toLowerCase()}
                </Title>
            </ContainerGlobal>
        }
    }


    const reservationStatusStyle = (value) => {
        if (value == 'RESERVED') {
            return <ContainerGlobal

                h='auto'
                margin='0px auto'
                bg='rgb(0, 0, 255, .2)'
                direction='row'
                padding='2px 0px'
                justify='center'
                align='center'
                border='2px solid rgb(0, 0, 255)'
                gap='10px'
                borderRadius='.5rem'
            >
                <Title
                    family='Helvetica'
                    size='.7vw'
                    color='BLACK'
                    fstyle='normal'
                    display='inline'

                >
                    {value.toLowerCase()}
                </Title>
            </ContainerGlobal>
        }
        else if (value == 'PENDING') {
            return <ContainerGlobal

                h='auto'
                margin='0px auto'
                bg='rgb(253, 161, 114, .2)'
                direction='row'
                padding='2px 0px'
                justify='center'
                align='center'
                border='2px solid rgb(255, 215, 0)'
                gap='10px'
                borderRadius='.5rem'
            >
                <Title
                    family='Helvetica'
                    size='.7vw'
                    color='BLACK'
                    fstyle='normal'
                    display='inline'

                >
                    {value.toLowerCase()}
                </Title>
            </ContainerGlobal>
        }
        else if (value == 'DEPARTED') {
            return <ContainerGlobal

                h='auto'
                margin='0px auto'
                bg='rgb(0, 255, 0, .2)'
                direction='row'
                padding='2px 0px'
                justify='center'
                align='center'
                border='2px solid rgb(0, 255, 0)'
                gap='10px'
                borderRadius='.5rem'
            >
                <Title
                    family='Helvetica'
                    size='.7vw'
                    color='BLACK'
                    fstyle='normal'
                    display='inline'

                >
                    {value.toLowerCase()}
                </Title>
            </ContainerGlobal>
        }
        else if (value == 'UNSETTLED') {
            return <ContainerGlobal

                h='auto'
                margin='0px auto'
                bg='rgb(255, 0, 0, .2)'
                direction='row'
                padding='2px 0px'
                justify='center'
                align='center'
                border='2px solid rgb(255, 0, 0)'
                gap='10px'
                borderRadius='.5rem'
            >
                <Title
                    family='Helvetica'
                    size='.7vw'
                    color='BLACK'
                    fstyle='normal'
                    display='inline'

                >
                    {value.toLowerCase()}
                </Title>
            </ContainerGlobal>
        }
        else if (value == 'NO SHOW') {
            return <ContainerGlobal

                h='auto'
                margin='0px auto'
                bg='rgb(0, 0, 0, .2)'
                direction='row'
                padding='2px 0px'
                justify='center'
                align='center'
                border='2px solid rgb(0, 0, 0)'
                gap='10px'
                borderRadius='.5rem'
            >
                <Title
                    family='Helvetica'
                    size='.7vw'
                    color='BLACK'
                    fstyle='normal'
                    display='inline'

                >
                    {value.toLowerCase()}
                </Title>
            </ContainerGlobal>
        }
    }


    const paymentStatusStyle = (value) => {
        if (value == 'pending') {
            return <ContainerGlobal

                h='auto'
                margin='0px auto'
                bg='rgb(205, 161, 65, .2)'
                direction='row'
                padding='2px 0px'
                justify='center'
                align='center'
                border='2px solid rgb(205, 161, 65)'
                gap='10px'
                borderRadius='.5rem'
            >
                <Title
                    family='Helvetica'
                    size='.7vw'
                    color='BLACK'
                    fstyle='normal'
                    display='inline'

                >
                    {value}
                </Title>
            </ContainerGlobal>
        }
        else if (value == 'partial') {
            return <ContainerGlobal

                h='auto'
                margin='0px auto'
                bg='rgb(0, 0, 255, .2)'
                direction='row'
                padding='2px 0px'
                justify='center'
                align='center'
                border='2px solid rgb(0, 0, 255)'
                gap='10px'
                borderRadius='.5rem'
            >
                <Title
                    family='Helvetica'
                    size='.7vw'
                    color='BLACK'
                    fstyle='normal'
                    display='inline'

                >
                    {value}
                </Title>
            </ContainerGlobal>
        }
        else if (value == 'fully paid') {
            return <ContainerGlobal

                h='auto'
                margin='0px auto'
                bg='rgb(0, 255, 0, .2)'
                direction='row'
                padding='2px 0px'
                justify='center'
                align='center'
                border='2px solid rgb(0, 255, 0)'
                gap='10px'
                borderRadius='.5rem'
            >
                <Title
                    family='Helvetica'
                    size='.7vw'
                    color='BLACK'
                    fstyle='normal'
                    display='inline'

                >
                    {value}
                </Title>
            </ContainerGlobal>
        }
        else if (value == 'cancelled') {
            return <ContainerGlobal

                h='auto'
                margin='0px auto'
                bg='rgb(255, 0, 0, .2)'
                direction='row'
                padding='2px 0px'
                justify='center'
                align='center'
                border='2px solid rgb(255, 0, 0)'
                gap='10px'
                borderRadius='.5rem'
            >
                <Title
                    family='Helvetica'
                    size='.7vw'
                    color='BLACK'
                    fstyle='normal'
                    display='inline'

                >
                    {value}
                </Title>
            </ContainerGlobal>
        }
        else if (value == 'reciept declined') {
            return <ContainerGlobal

                h='auto'
                margin='0px auto'
                bg='rgb(0, 0, 0, .2)'
                direction='row'
                padding='2px 0px'
                justify='center'
                align='center'
                border='2px solid rgb(0, 0, 0)'
                gap='10px'
                borderRadius='.5rem'
            >
                <Title
                    family='Helvetica'
                    size='.7vw'
                    color='BLACK'
                    fstyle='normal'
                    display='inline'

                >
                    {value}
                </Title>
            </ContainerGlobal>
        }
    }

    const { id } = useParams();

    const [reservationSummary, setReservationSummary] = useState([])
    const [reservation, setReservation] = useState([])
    const [amenity, setAmenity] = useState([])
    const [orderedAmenity, setOrderedAmenity] = useState([])

    const [room, setRoom] = useState([])

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


    const numberFormat = (value) =>
        new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'PHP'
        }).format(value);


    const [reportType, setReportType] = useState(id.split('_')[0])
    const [reservationMenuDaily, setReservationMenuDaily] = useState(id.split('_')[1])
    const [startDate, setStartDate] = useState(id.split('_')[2].replaceAll('-', '/'))
    const [endDate, setEndDate] = useState(id.split('_')[3].replaceAll('-', '/'))

    const [ocupancyDates, setOcupancyDates] = useState(getDates(new Date(id.split('_')[2].replaceAll('-', '/')), new Date(id.split('_')[3].replaceAll('-', '/'))));


    const [yearlyOcupancyDates, setYearlyOcupancyDates] = useState(getDates(new Date(id.split('_')[2].replaceAll('-', '/')), new Date(id.split('_')[3].replaceAll('-', '/'))));

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
                            if (reportType == 'detailed') {
                                window.print()
                            }
                            else {
                                setTimeout(() => {

                                    window.print()
                                }, 2000);
                            }
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
        <div style={{ width: 'auto', height: '80px' }}>
            <ContainerGlobal radius='0px'
                direction="column"
                align="center"
                justify="center"
                margin="0px 20px 20px 20px"
            >
                <ContainerGlobal
                    radius="0px"
                    direction="row"
                    align="flex-start"
                    margin="20px 0px 0px 0px"
                    w="100%"

                >
                    <img src={logo} width="12%" height="12%" ></img>
                </ContainerGlobal>
                <ContainerGlobal radius='0px' direction="column" align="flex-Start" w="100%">

                    <ContainerGlobal radius='0px' w="100%" align="flex-start" justify="space-between">
                        <ContainerGlobal radius='0px' direction="column">
                            <Title family="Belleza" size="1.5vw" fstyle="none" weight="400" >
                                68 Cenacle Drive Sanville Subdivision, Quezon City, 1128 Metro
                                Manila
                            </Title>
                            <Title family="Belleza" size="1.5vw" fstyle="none" weight="400">
                                rm.luxehotel@gmail.com
                            </Title>
                            <Title family="Belleza" size="1.5vw" fstyle="none" weight="400">
                                0956 672 8906
                            </Title>
                            <Title family="Belleza" size="1.5vw" fstyle="none" weight="400">
                                {new Date(Date.now()).toLocaleDateString()}
                            </Title>
                        </ContainerGlobal>
                    </ContainerGlobal>
                </ContainerGlobal>

                {reportType == 'detailed' ?
                    <ContainerGlobal radius='0px' w="100%" direction="column" align="center" margin="0px 0px 50px 0px" overflow='visible'>
                        <ContainerGlobal radius='0px'
                            direction="column"
                            margin="20px 0px 0px 0px"
                            align="center"
                        >
                            <Title family="Roboto Slab" size="3vw" fstyle="none" weight="">
                                Average Room Occupancy Report
                            </Title>
                        </ContainerGlobal>
                        <ContainerGlobal radius='0px'
                            direction="column"
                            margin="20px 0px 0px 0px"
                            align="center"
                            overflow='visible'
                        >
                            <Title family="arial" size="1.5vw" weight="normal" fstyle='normal'>
                                {new Date(startDate).toDateString()}  - {new Date(endDate).toDateString()}
                            </Title>
                        </ContainerGlobal>

                        {/* <hr style={{ width: "100%" }} /> */}


                        <ContainerGlobal radius='0px' w="100%" direction="column" overflow='visible'>
                            <ContainerGlobal radius='0px' w="100%" direction="column" overflow='visible'>
                                <ContainerGlobal radius='0px' w="100%" justify="space-between">
                                </ContainerGlobal>

                                <div
                                    style={{
                                        width: '100%'
                                    }}
                                >
                                    <table
                                        className="reportTable"
                                        style={{
                                            width: "100%",
                                            fontSize: '.7vw',
                                        }}
                                    >
                                        <tr>
                                            <th>Date</th>
                                            <th>Total rooms occupied </th>
                                            <th>Total Number of Rooms </th>
                                            <th>Average Room Occupied</th>
                                        </tr>
                                        {ocupancyDates.length != 0 ?
                                            ocupancyDates
                                                .map((item) => (
                                                    <tr>
                                                        <td>{new Date(item).toLocaleDateString()}</td>
                                                        <td>
                                                            {
                                                                reservationSummary.length != 0 && room.length ?
                                                                    reservationSummary
                                                                        .filter((obj) => obj.bookingStatus == 'CHECKED-IN' || obj.bookingStatus == 'CHECKED-OUT')
                                                                        .filter((obj) => {
                                                                            let bookedDates = getDates(obj.checkInDate, obj.checkOutDate)
                                                                            bookedDates.pop()
                                                                            if (bookedDates.includes(moment(item).format('YYYY-MM-DD'))) {
                                                                                return obj
                                                                            }

                                                                        }).length
                                                                    : 0
                                                            }
                                                        </td>
                                                        <td>{room.length != 0 ? room.length : 0}</td>
                                                        <td>
                                                            {
                                                                reservationSummary.length != 0 && room.length != 0 ?
                                                                    parseFloat(reservationSummary
                                                                        .filter((obj) => obj.bookingStatus == 'CHECKED-IN' || obj.bookingStatus == 'CHECKED-OUT')
                                                                        .filter((obj) => {
                                                                            let bookedDates = getDates(obj.checkInDate, obj.checkOutDate)
                                                                            bookedDates.pop()
                                                                            if (bookedDates.includes(moment(item).format('YYYY-MM-DD'))) {
                                                                                return obj
                                                                            }

                                                                        }).length / room.length * 100).toFixed(2)
                                                                    : 0
                                                            }%
                                                        </td>
                                                    </tr>
                                                ))
                                            :
                                            ''
                                        }



                                    </table>
                                </div>
                            </ContainerGlobal>
                        </ContainerGlobal>

                        {/* <hr style={{ width: "100%" }} /> */}



                        <ContainerGlobal radius='0px' w="100%" direction="column">
                            <ContainerGlobal radius='0px'
                                w="100%"
                                direction="column"
                                gap="10px"
                                align="flex-end"
                            >
                                <ContainerGlobal radius='0px' w="40%" justify="space-between">
                                    <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">Average Room Occupancy:</Title>
                                    <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400" color="#074D25">
                                        {
                                            ocupancyDates.length != 0 && reservationSummary.length != 0 && room.length != 0 ?
                                                parseFloat(
                                                    ocupancyDates.map((item) => (
                                                        reservationSummary
                                                            .filter((obj) => obj.bookingStatus == 'CHECKED-IN' || obj.bookingStatus == 'CHECKED-OUT')
                                                            .filter((obj) => {
                                                                let bookedDates = getDates(obj.checkInDate, obj.checkOutDate)
                                                                bookedDates.pop()
                                                                if (bookedDates.includes(moment(item).format('YYYY-MM-DD'))) {
                                                                    return obj
                                                                }

                                                            }).length / room.length * 100
                                                    )).reduce((accu, value) => accu + value, 0) / ocupancyDates.length
                                                ).toFixed(2)
                                                : 0
                                        }%
                                    </Title>
                                </ContainerGlobal>

                            </ContainerGlobal>
                        </ContainerGlobal>
                    </ContainerGlobal>
                    :

                    <ContainerGlobal radius='0px' w="100%" direction="column" align="center" margin="0px 0px 50px 0px" overflow='visible'>
                        <ContainerGlobal radius='0px'
                            direction="column"
                            margin="20px 0px 0px 0px"
                            align="center"
                        >
                            <Title family="Roboto Slab" size="3vw" fstyle="none" weight="">
                                Average Room Occupancy Visual Report
                            </Title>
                        </ContainerGlobal>
                        <ContainerGlobal radius='0px'
                            direction="column"
                            margin="20px 0px 0px 0px"
                            align="center"
                            overflow='visible'
                        >
                            <Title family="arial" size="1.5vw" weight="normal" fstyle='normal'>
                                {new Date(startDate).toDateString()}  - {new Date(endDate).toDateString()}
                            </Title>
                        </ContainerGlobal>

                        {/* <hr style={{ width: "100%" }} /> */}




                        <ContainerGlobal
                            margin='0px auto'
                            justify='center'
                            w='800px'
                            overflow='visible'>
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

                        <ContainerGlobal radius='0px' w="800px" direction="column">
                            <ContainerGlobal radius='0px'
                                w="100%"
                                direction="column"
                                gap="10px"
                                align="flex-end"
                            >
                                <ContainerGlobal radius='0px' w="40%" justify="space-between">
                                    <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">Average Room Occupancy:</Title>
                                    <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400" color="#074D25">
                                        {
                                            ocupancyDates.length != 0 && reservationSummary.length != 0 && room.length != 0 ?
                                                parseFloat(
                                                    ocupancyDates.map((item) => (
                                                        reservationSummary
                                                            .filter((obj) => obj.bookingStatus == 'CHECKED-IN' || obj.bookingStatus == 'CHECKED-OUT')
                                                            .filter((obj) => {
                                                                let bookedDates = getDates(obj.checkInDate, obj.checkOutDate)
                                                                bookedDates.pop()
                                                                if (bookedDates.includes(moment(item).format('YYYY-MM-DD'))) {
                                                                    return obj
                                                                }

                                                            }).length / room.length * 100
                                                    )).reduce((accu, value) => accu + value, 0) / ocupancyDates.length
                                                ).toFixed(2)
                                                : 0
                                        }%
                                    </Title>
                                </ContainerGlobal>

                            </ContainerGlobal>
                        </ContainerGlobal>
                    </ContainerGlobal>
                }
            </ContainerGlobal>
        </div>
    );
};

export default GeneratedReportsOcupancy;