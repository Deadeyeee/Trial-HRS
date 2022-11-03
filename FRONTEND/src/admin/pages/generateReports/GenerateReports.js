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
const GeneratedReports = () => {

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

    useEffect(() => {

        axios.get(apiKey + 'api/getAllReservation/').then((result) => {
            setReservation(result.data)

            axios.get(apiKey + 'api/getAllReservationSummary').then((result) => {
                setReservationSummary(result.data)

                axios.get(apiKey + 'api/getAllOrderedAmenities').then((result) => {
                    setOrderedAmenity(result.data)


                    axios.get(apiKey + 'api/getAllAmenities').then((result) => {
                        setAmenity(result.data)
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
                                Reservation report
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
                                            <th>Booking number</th>
                                            <th>Reservation date</th>
                                            <th>Reservation status</th>
                                            <th>Guest's name</th>
                                            <th>Room tymepe</th>
                                            <th>Room number</th>
                                            <th>Room rate</th>
                                            <th>Check in</th>
                                            <th>Check out</th>
                                            <th>Total nights</th>
                                            <th>Booking status</th>
                                            <th>Payment status</th>
                                            <th>Paid amount</th>
                                            <th>Total amount</th>
                                        </tr>
                                        {reservationSummary.length != 0 &&
                                            reservationSummary
                                                .filter((obj) => {
                                                    let filterDates = getDates(startDate, endDate);

                                                    if (reservationMenuDaily == 'reservationDate' || reservationMenuDaily == 'all') {
                                                        if (filterDates.includes(moment(obj.reservation.reservationDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'checkIn') {
                                                        if (filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'checkOut') {
                                                        if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'RSreserved') {
                                                        if (filterDates.includes(moment(obj.reservation.reservationDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'RSpending') {
                                                        if (filterDates.includes(moment(obj.reservation.reservationDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'RScancelled') {
                                                        if (filterDates.includes(moment(obj.reservation.reservationDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'BSpending') {
                                                        if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'BSreserved') {
                                                        if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'BScheckedIn') {
                                                        if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'BScheckedOut') {
                                                        if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'BSnoShow') {
                                                        if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'PSpartial') {
                                                        if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'PSfullyPaid') {
                                                        if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'PSreceiptDeclined') {
                                                        if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'PSpending') {
                                                        if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'PScancelled') {
                                                        if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else {
                                                        return obj;
                                                    }

                                                })
                                                .filter((obj) => {
                                                    if (reservationMenuDaily == 'RSreserved') {
                                                        if (obj.reservation.reservationStatus.toLowerCase() == 'reserved') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'RSpending') {
                                                        if (obj.reservation.reservationStatus.toLowerCase() == 'pending') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'RScancelled') {
                                                        if (obj.reservation.reservationStatus.toLowerCase() == 'cancelled') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'BSpending') {
                                                        if (obj.bookingStatus.toLowerCase() == 'pending') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'BSreserved') {
                                                        if (obj.bookingStatus.toLowerCase() == 'reserved') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'BScheckedIn') {
                                                        if (obj.bookingStatus.toLowerCase() == 'checked-in') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'BScheckedOut') {
                                                        if (obj.bookingStatus.toLowerCase() == 'checked-out') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'BSnoShow') {
                                                        if (obj.bookingStatus.toLowerCase() == 'no show') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'PSpartial') {
                                                        if (obj.reservation.payment.paymentStatus.toLowerCase() == 'partial') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'PSfullyPaid') {
                                                        if (obj.reservation.payment.paymentStatus.toLowerCase() == 'fully paid') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'PSreceiptDeclined') {
                                                        if (obj.reservation.payment.paymentStatus.toLowerCase() == 'reciept declined') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'PSpending') {
                                                        if (obj.reservation.payment.paymentStatus.toLowerCase() == 'pending') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'PScancelled') {
                                                        if (obj.reservation.payment.paymentStatus.toLowerCase() == 'cancelled') {
                                                            return obj;
                                                        }
                                                    }
                                                    else {
                                                        return obj;
                                                    }
                                                })
                                                .sort((a, b) => {
                                                    if (a.bookingReferenceNumber < b.bookingReferenceNumber) {
                                                        return -1;
                                                    }
                                                })
                                                .map((item) => (
                                                    <tr>
                                                        <td>{item.bookingReferenceNumber}</td>
                                                        <td>{new Date(item.reservation.reservationDate).toLocaleDateString()}</td>
                                                        <td>{reservationStatusStyle(item.reservation.reservationStatus)}</td>
                                                        <td>{item.reservation.guestInformation.firstName.toLowerCase()} {item.reservation.guestInformation.lastName.toLowerCase()}</td>
                                                        <td>{item.room.roomType.roomType}</td>
                                                        <td>{item.room.roomNumber}</td>
                                                        <td>{numberFormat(item.room.roomType.roomRate)}</td>
                                                        <td>{new Date(item.checkInDate).toLocaleDateString()}</td>
                                                        <td>{new Date(item.checkOutDate).toLocaleDateString()}</td>
                                                        <td>{item.numberOfNights}</td>
                                                        <td>{bookingStatusStyle(item.bookingStatus)}</td>
                                                        <td>{paymentStatusStyle(item.reservation.payment.paymentStatus)}</td>
                                                        <td>{
                                                            orderedAmenity.length != 0
                                                                ?
                                                                item.reservation.payment.discountValid == true ?
                                                                    numberFormat(
                                                                        parseFloat((((item.room.roomType.roomRate * item.numberOfNights) + (parseFloat(item.others)) + (orderedAmenity.filter((obj) => obj.reservationSummary_id == item.id).map((obj) => obj.quantity * parseFloat(obj.amenity.amenityRate)).reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value), 0))) / 1.12 * .80) / item.reservation.payment.grandTotal) * parseFloat(item.reservation.payment.paymentMade)
                                                                    )
                                                                    :

                                                                    numberFormat(
                                                                        parseFloat((((item.room.roomType.roomRate * item.numberOfNights) + (parseFloat(item.others)) + (orderedAmenity.filter((obj) => obj.reservationSummary_id == item.id).map((obj) => obj.quantity * parseFloat(obj.amenity.amenityRate)).reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value), 0)))) / item.reservation.payment.grandTotal) * parseFloat(item.reservation.payment.paymentMade)
                                                                    )
                                                                :
                                                                ''
                                                        }
                                                        </td>
                                                        <td>{
                                                            orderedAmenity.length != 0
                                                                ?
                                                                item.reservation.payment.discountValid == true ?
                                                                    numberFormat(((item.room.roomType.roomRate * item.numberOfNights) + (parseFloat(item.others)) + (orderedAmenity.filter((obj) => obj.reservationSummary_id == item.id).map((obj) => obj.quantity * parseFloat(obj.amenity.amenityRate)).reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value), 0))) / 1.12 * .80)
                                                                    :
                                                                    numberFormat((item.room.roomType.roomRate * item.numberOfNights) + (parseFloat(item.others)) + (orderedAmenity.filter((obj) => obj.reservationSummary_id == item.id).map((obj) => obj.quantity * parseFloat(obj.amenity.amenityRate)).reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value), 0)))
                                                                :
                                                                ''
                                                        }
                                                        </td>
                                                    </tr>
                                                ))}


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
                                    <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">Total Reservation:</Title>
                                    <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400" color="#074D25">{
                                        reservationSummary.length != 0 && reservationSummary
                                            .filter((obj) => {
                                                let filterDates = getDates(startDate, endDate);

                                                if (reservationMenuDaily == 'reservationDate' || reservationMenuDaily == 'all') {
                                                    if (filterDates.includes(moment(obj.reservation.reservationDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'checkIn') {
                                                    if (filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'checkOut') {
                                                    if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'RSreserved') {
                                                    if (filterDates.includes(moment(obj.reservation.reservationDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'RSpending') {
                                                    if (filterDates.includes(moment(obj.reservation.reservationDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'RScancelled') {
                                                    if (filterDates.includes(moment(obj.reservation.reservationDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'BSpending') {
                                                    if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'BSreserved') {
                                                    if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'BScheckedIn') {
                                                    if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'BScheckedOut') {
                                                    if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'BSnoShow') {
                                                    if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'PSpartial') {
                                                    if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'PSfullyPaid') {
                                                    if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'PSreceiptDeclined') {
                                                    if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'PSpending') {
                                                    if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'PScancelled') {
                                                    if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else {
                                                    return obj;
                                                }

                                            })
                                            .filter((obj) => {
                                                if (reservationMenuDaily == 'RSreserved') {
                                                    if (obj.reservation.reservationStatus.toLowerCase() == 'reserved') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'RSpending') {
                                                    if (obj.reservation.reservationStatus.toLowerCase() == 'pending') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'RScancelled') {
                                                    if (obj.reservation.reservationStatus.toLowerCase() == 'cancelled') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'BSpending') {
                                                    if (obj.bookingStatus.toLowerCase() == 'pending') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'BSreserved') {
                                                    if (obj.bookingStatus.toLowerCase() == 'reserved') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'BScheckedIn') {
                                                    if (obj.bookingStatus.toLowerCase() == 'checked-in') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'BScheckedOut') {
                                                    if (obj.bookingStatus.toLowerCase() == 'checked-out') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'BSnoShow') {
                                                    if (obj.bookingStatus.toLowerCase() == 'no show') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'PSpartial') {
                                                    if (obj.reservation.payment.paymentStatus.toLowerCase() == 'partial') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'PSfullyPaid') {
                                                    if (obj.reservation.payment.paymentStatus.toLowerCase() == 'fully paid') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'PSreceiptDeclined') {
                                                    if (obj.reservation.payment.paymentStatus.toLowerCase() == 'reciept declined') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'PSpending') {
                                                    if (obj.reservation.payment.paymentStatus.toLowerCase() == 'pending') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'PScancelled') {
                                                    if (obj.reservation.payment.paymentStatus.toLowerCase() == 'cancelled') {
                                                        return obj;
                                                    }
                                                }
                                                else {
                                                    return obj;
                                                }
                                            })
                                            .sort((a, b) => {
                                                if (a.bookingReferenceNumber < b.bookingReferenceNumber) {
                                                    return -1;
                                                }
                                            }).length}</Title>
                                </ContainerGlobal>
                                <ContainerGlobal radius='0px' w="40%" justify="space-between">
                                    <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">Total Income:</Title>
                                    <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400" color="#074D25">{
                                        reservationSummary.length != 0 ?
                                            numberFormat(reservationSummary
                                                .filter((obj) => {
                                                    let filterDates = getDates(startDate, endDate);

                                                    if (reservationMenuDaily == 'reservationDate' || reservationMenuDaily == 'all') {
                                                        if (filterDates.includes(moment(obj.reservation.reservationDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'checkIn') {
                                                        if (filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'checkOut') {
                                                        if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'RSreserved') {
                                                        if (filterDates.includes(moment(obj.reservation.reservationDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'RSpending') {
                                                        if (filterDates.includes(moment(obj.reservation.reservationDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'RScancelled') {
                                                        if (filterDates.includes(moment(obj.reservation.reservationDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'BSpending') {
                                                        if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'BSreserved') {
                                                        if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'BScheckedIn') {
                                                        if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'BScheckedOut') {
                                                        if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'BSnoShow') {
                                                        if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'PSpartial') {
                                                        if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'PSfullyPaid') {
                                                        if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'PSreceiptDeclined') {
                                                        if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'PSpending') {
                                                        if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'PScancelled') {
                                                        if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                            return obj;
                                                        }
                                                    }
                                                    else {
                                                        return obj;
                                                    }

                                                })
                                                .filter((obj) => {
                                                    if (reservationMenuDaily == 'RSreserved') {
                                                        if (obj.reservation.reservationStatus.toLowerCase() == 'reserved') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'RSpending') {
                                                        if (obj.reservation.reservationStatus.toLowerCase() == 'pending') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'RScancelled') {
                                                        if (obj.reservation.reservationStatus.toLowerCase() == 'cancelled') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'BSpending') {
                                                        if (obj.bookingStatus.toLowerCase() == 'pending') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'BSreserved') {
                                                        if (obj.bookingStatus.toLowerCase() == 'reserved') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'BScheckedIn') {
                                                        if (obj.bookingStatus.toLowerCase() == 'checked-in') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'BScheckedOut') {
                                                        if (obj.bookingStatus.toLowerCase() == 'checked-out') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'BSnoShow') {
                                                        if (obj.bookingStatus.toLowerCase() == 'no show') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'PSpartial') {
                                                        if (obj.reservation.payment.paymentStatus.toLowerCase() == 'partial') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'PSfullyPaid') {
                                                        if (obj.reservation.payment.paymentStatus.toLowerCase() == 'fully paid') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'PSreceiptDeclined') {
                                                        if (obj.reservation.payment.paymentStatus.toLowerCase() == 'reciept declined') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'PSpending') {
                                                        if (obj.reservation.payment.paymentStatus.toLowerCase() == 'pending') {
                                                            return obj;
                                                        }
                                                    }
                                                    else if (reservationMenuDaily == 'PScancelled') {
                                                        if (obj.reservation.payment.paymentStatus.toLowerCase() == 'cancelled') {
                                                            return obj;
                                                        }
                                                    }
                                                    else {
                                                        return obj;
                                                    }
                                                })
                                                .sort((a, b) => {
                                                    if (a.bookingReferenceNumber < b.bookingReferenceNumber) {
                                                        return -1;
                                                    }
                                                })
                                                .map((item) => (
                                                    orderedAmenity.length != 0 ?
                                                        item.reservation.payment.discountValid == true ?
                                                            parseFloat((((item.room.roomType.roomRate * item.numberOfNights) + (parseFloat(item.others)) + (orderedAmenity.filter((obj) => obj.reservationSummary_id == item.id).map((obj) => obj.quantity * parseFloat(obj.amenity.amenityRate)).reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value), 0))) / 1.12 * .80) / item.reservation.payment.grandTotal) * parseFloat(item.reservation.payment.paymentMade)
                                                            :
                                                            parseFloat((((item.room.roomType.roomRate * item.numberOfNights) + (parseFloat(item.others)) + (orderedAmenity.filter((obj) => obj.reservationSummary_id == item.id).map((obj) => obj.quantity * parseFloat(obj.amenity.amenityRate)).reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value), 0)))) / item.reservation.payment.grandTotal) * parseFloat(item.reservation.payment.paymentMade)

                                                        : ''
                                                )).reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value), 0))
                                            : numberFormat(0)}</Title>
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
                                Reservation visual report
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
                            w='700px'
                            overflow='visible'>
                            <Reservation
                                confirmed={reservationSummary != 0 ?
                                    reservationSummary.filter((obj) => obj.reservation.reservationStatus == 'RESERVED').filter((obj) => {
                                        let filterDate = getDates(startDate, endDate);

                                        if (filterDate.includes(moment(obj.checkInDate).format('YYYY-MM-DD')) == true || filterDate.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) == true) {
                                            return obj
                                        }
                                    }).length
                                    : ''}
                                cancelled={reservationSummary != 0 ?
                                    reservationSummary.filter((obj) => obj.reservation.reservationStatus == 'UNSETTLED').filter((obj) => {
                                        let filterDate = getDates(startDate, endDate);

                                        if (filterDate.includes(moment(obj.checkInDate).format('YYYY-MM-DD')) == true || filterDate.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) == true) {
                                            return obj
                                        }
                                    }).length
                                    : ''}
                                pending={reservationSummary != 0 ?
                                    reservationSummary.filter((obj) => obj.reservation.reservationStatus == 'PENDING').filter((obj) => {
                                        let filterDate = getDates(startDate, endDate);

                                        if (filterDate.includes(moment(obj.checkInDate).format('YYYY-MM-DD')) == true || filterDate.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) == true) {
                                            return obj
                                        }
                                    }).length
                                    : ''}
                            />
                        </ContainerGlobal>

                        {/* <hr style={{ width: "100%" }} /> */}



                        {/* <ContainerGlobal radius='0px' w="100%" direction="column">
                        <ContainerGlobal radius='0px'
                            w="100%"
                            direction="column"
                            gap="10px"
                            align="flex-end"
                        >
                            <ContainerGlobal radius='0px' w="40%" justify="space-between">
                                <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">Total Reservation:</Title>
                                <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400" color="#074D25">{
                                    reservationSummary.length != 0 && reservationSummary
                                        .filter((obj) => {
                                            let filterDates = getDates(startDate, endDate);

                                            if (reservationMenuDaily == 'reservationDate' || reservationMenuDaily == 'all') {
                                                if (filterDates.includes(moment(obj.reservation.reservationDate).format('YYYY-MM-DD'))) {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'checkIn') {
                                                if (filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'checkOut') {
                                                if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD'))) {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'RSreserved') {
                                                if (filterDates.includes(moment(obj.reservation.reservationDate).format('YYYY-MM-DD'))) {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'RSpending') {
                                                if (filterDates.includes(moment(obj.reservation.reservationDate).format('YYYY-MM-DD'))) {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'RScancelled') {
                                                if (filterDates.includes(moment(obj.reservation.reservationDate).format('YYYY-MM-DD'))) {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'BSpending') {
                                                if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'BSreserved') {
                                                if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'BScheckedIn') {
                                                if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'BScheckedOut') {
                                                if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'BSnoShow') {
                                                if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'PSpartial') {
                                                if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'PSfullyPaid') {
                                                if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'PSreceiptDeclined') {
                                                if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'PSpending') {
                                                if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'PScancelled') {
                                                if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                    return obj;
                                                }
                                            }
                                            else {
                                                return obj;
                                            }

                                        })
                                        .filter((obj) => {
                                            if (reservationMenuDaily == 'RSreserved') {
                                                if (obj.reservation.reservationStatus.toLowerCase() == 'reserved') {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'RSpending') {
                                                if (obj.reservation.reservationStatus.toLowerCase() == 'pending') {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'RScancelled') {
                                                if (obj.reservation.reservationStatus.toLowerCase() == 'cancelled') {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'BSpending') {
                                                if (obj.bookingStatus.toLowerCase() == 'pending') {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'BSreserved') {
                                                if (obj.bookingStatus.toLowerCase() == 'reserved') {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'BScheckedIn') {
                                                if (obj.bookingStatus.toLowerCase() == 'checked-in') {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'BScheckedOut') {
                                                if (obj.bookingStatus.toLowerCase() == 'checked-out') {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'BSnoShow') {
                                                if (obj.bookingStatus.toLowerCase() == 'no show') {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'PSpartial') {
                                                if (obj.reservation.payment.paymentStatus.toLowerCase() == 'partial') {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'PSfullyPaid') {
                                                if (obj.reservation.payment.paymentStatus.toLowerCase() == 'fully paid') {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'PSreceiptDeclined') {
                                                if (obj.reservation.payment.paymentStatus.toLowerCase() == 'reciept declined') {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'PSpending') {
                                                if (obj.reservation.payment.paymentStatus.toLowerCase() == 'pending') {
                                                    return obj;
                                                }
                                            }
                                            else if (reservationMenuDaily == 'PScancelled') {
                                                if (obj.reservation.payment.paymentStatus.toLowerCase() == 'cancelled') {
                                                    return obj;
                                                }
                                            }
                                            else {
                                                return obj;
                                            }
                                        })
                                        .sort((a, b) => {
                                            if (a.bookingReferenceNumber < b.bookingReferenceNumber) {
                                                return -1;
                                            }
                                        }).length}</Title>
                            </ContainerGlobal>
                            <ContainerGlobal radius='0px' w="40%" justify="space-between">
                                <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">Total Income:</Title>
                                <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400" color="#074D25">{
                                    reservationSummary.length != 0 ?
                                        numberFormat(reservationSummary
                                            .filter((obj) => {
                                                let filterDates = getDates(startDate, endDate);

                                                if (reservationMenuDaily == 'reservationDate' || reservationMenuDaily == 'all') {
                                                    if (filterDates.includes(moment(obj.reservation.reservationDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'checkIn') {
                                                    if (filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'checkOut') {
                                                    if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'RSreserved') {
                                                    if (filterDates.includes(moment(obj.reservation.reservationDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'RSpending') {
                                                    if (filterDates.includes(moment(obj.reservation.reservationDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'RScancelled') {
                                                    if (filterDates.includes(moment(obj.reservation.reservationDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'BSpending') {
                                                    if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'BSreserved') {
                                                    if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'BScheckedIn') {
                                                    if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'BScheckedOut') {
                                                    if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'BSnoShow') {
                                                    if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'PSpartial') {
                                                    if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'PSfullyPaid') {
                                                    if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'PSreceiptDeclined') {
                                                    if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'PSpending') {
                                                    if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'PScancelled') {
                                                    if (filterDates.includes(moment(obj.checkOutDate).format('YYYY-MM-DD')) || filterDates.includes(moment(obj.checkInDate).format('YYYY-MM-DD'))) {
                                                        return obj;
                                                    }
                                                }
                                                else {
                                                    return obj;
                                                }

                                            })
                                            .filter((obj) => {
                                                if (reservationMenuDaily == 'RSreserved') {
                                                    if (obj.reservation.reservationStatus.toLowerCase() == 'reserved') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'RSpending') {
                                                    if (obj.reservation.reservationStatus.toLowerCase() == 'pending') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'RScancelled') {
                                                    if (obj.reservation.reservationStatus.toLowerCase() == 'cancelled') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'BSpending') {
                                                    if (obj.bookingStatus.toLowerCase() == 'pending') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'BSreserved') {
                                                    if (obj.bookingStatus.toLowerCase() == 'reserved') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'BScheckedIn') {
                                                    if (obj.bookingStatus.toLowerCase() == 'checked-in') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'BScheckedOut') {
                                                    if (obj.bookingStatus.toLowerCase() == 'checked-out') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'BSnoShow') {
                                                    if (obj.bookingStatus.toLowerCase() == 'no show') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'PSpartial') {
                                                    if (obj.reservation.payment.paymentStatus.toLowerCase() == 'partial') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'PSfullyPaid') {
                                                    if (obj.reservation.payment.paymentStatus.toLowerCase() == 'fully paid') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'PSreceiptDeclined') {
                                                    if (obj.reservation.payment.paymentStatus.toLowerCase() == 'reciept declined') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'PSpending') {
                                                    if (obj.reservation.payment.paymentStatus.toLowerCase() == 'pending') {
                                                        return obj;
                                                    }
                                                }
                                                else if (reservationMenuDaily == 'PScancelled') {
                                                    if (obj.reservation.payment.paymentStatus.toLowerCase() == 'cancelled') {
                                                        return obj;
                                                    }
                                                }
                                                else {
                                                    return obj;
                                                }
                                            })
                                            .sort((a, b) => {
                                                if (a.bookingReferenceNumber < b.bookingReferenceNumber) {
                                                    return -1;
                                                }
                                            })
                                            .map((item) => (
                                                orderedAmenity.length != 0 ?
                                                    item.reservation.payment.discountValid == true ?
                                                        parseFloat((((item.room.roomType.roomRate * item.numberOfNights) + (parseFloat(item.others)) + (orderedAmenity.filter((obj) => obj.reservationSummary_id == item.id).map((obj) => obj.quantity * parseFloat(obj.amenity.amenityRate)).reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value), 0))) / 1.12 * .80) / item.reservation.payment.grandTotal) * parseFloat(item.reservation.payment.paymentMade)
                                                        :
                                                        parseFloat((((item.room.roomType.roomRate * item.numberOfNights) + (parseFloat(item.others)) + (orderedAmenity.filter((obj) => obj.reservationSummary_id == item.id).map((obj) => obj.quantity * parseFloat(obj.amenity.amenityRate)).reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value), 0)))) / item.reservation.payment.grandTotal) * parseFloat(item.reservation.payment.paymentMade)

                                                    : ''
                                            )).reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value), 0))
                                        : numberFormat(0)}</Title>
                            </ContainerGlobal>
                        </ContainerGlobal>
                    </ContainerGlobal> */}
                    </ContainerGlobal>
                }
            </ContainerGlobal>
        </div>
    );
};

export default GeneratedReports;