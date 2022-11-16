import React, { useEffect, useState } from 'react'
import { Title } from '../../components/title/styles'
import { BookingContent, BookingContentContainer, Container, PreviousBookingContainer, PreviousBookingContainerContent, Status, StatusContainer, BankContentContainer, BankTitleContainer, BrokenHorizontalLine, ChargeSummaryContainer, ChargeSummaryContentContainer, ReservationInformationContainer, ReservationInformationContentsContainer } from './Styles'
import { Button } from '../../components/button/styles';
import { MainContainer, MessagesTitleContainer } from '../clientMessagesCont/Styles';
import { TableContainer, Td, Th, Tr } from '../bookingCartPage/Styles';
import axios from 'axios';
import { ContainerGlobal } from '../../../admin/components/container/container';
import { HorizontalLine } from '../../components/horizontalLine/HorizontalLine';
import { apiKey } from '../../../apiKey';
import { Pagination } from '@mui/material';

const ClientBookingInfoCont = () => {
    useEffect(() => {
        document.title = "Profile | Bookings"
    }, [])


    const [reservation, setReservation] = useState([])
    const [activeReservation, setActiveReservation] = useState([])
    const [grandTotal, setGrandTotal] = useState(0);
    const [reservedBooking, setReservedBooking] = useState([])
    const [amenity, setAmenity] = useState([])
    const [orderedAmenity, setOrderedAmenity] = useState([])
    useEffect(() => {

    }, [])

    useEffect(() => {
        setGrandTotal(0);
        reservedBooking.map((item) => (
            setGrandTotal((prevValue) => prevValue + (item.reservation.payment.grandTotal))
        ))
    }, [reservedBooking])

    useEffect(() => {
        axios.get(apiKey + 'auth/verify-token').then((authUser) => {
            console.log(authUser.data)
            axios.get(apiKey + 'api/getAllReservation').then((getAllReservation) => {
                setReservation([])
                getAllReservation.data.map((item) => {
                    if (item.guestInformation.user.id == authUser.data.id) {
                        setReservation((oldData) => [...oldData, item])
                    }
                })
            }).catch((err) => {

            });
        }).catch((err) => {
            window.location = '/login'
        });
    }, [])

    useEffect(() => {
        if (reservation.length != 0) {
            new Date(Math.max.apply(null, reservation.map(function (items, index, arr) {
                console.log("filter", index)

                if (index == 0) {
                    setActiveReservation(items)
                }
            })));
        }
    }, [reservation])

    const numberFormat = (value) =>
        new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'PHP'
        }).format(value);


    useEffect(() => {
        console.log("activeReservation", activeReservation)
        axios.get(apiKey + 'api/getAllReservationSummary').then((result) => {
            setReservedBooking([])
            for (let index = 0; index < result.data.length; index++) {
                if (activeReservation.id == result.data[index].reservation_id) {
                    setReservedBooking((oldData) => [...oldData, result.data[index]])
                    console.log('ey')
                }
            }
        }).catch((err) => {
            console.log(err)

        });




        axios.get(apiKey + 'api/getAllOrderedAmenities').then((result) => {
            setOrderedAmenity(result.data.filter((obj) => obj.reservationSummary.reservation.id == activeReservation.id))
        }).catch((err) => {

        });


        axios.get(apiKey + 'api/getAllAmenities').then((result) => {
            setAmenity(result.data)
        }).catch((err) => {

        });

    }, [activeReservation])

    const view = (value) => {
        reservation.map((item) => {
            if (value == item.id) {
                setActiveReservation(item)
            }
        })
    }

    const reservationStatus = (value) => {
        if (value != null) {
            if (value.toLowerCase() == 'pending') {
                return <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%'
                }}>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='400'
                        size='37px'
                        fstyle='Normal'
                        margin='50px 0px 10px 0px'
                        align='Center'
                        size1000='20px'
                        margin1000='50px 0px 10px 0px'


                    >
                        Thank you for staying with us.
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='400'
                        size='25px'
                        fstyle='Normal'
                        size1000='20px'
                        margin1000='50px 0px 10px 0px'
                        align='Center'

                    >
                        Your reservation is <b style={{ color: '#c9d81c' }}>{value}</b> until confirmation of Bank Deposit/Transfer is made.
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='400'
                        size='25px'
                        fstyle='Normal'
                        margin='25px 0px 40px 0px'
                        size1000='20px'
                        margin1000='20px 0px 40px 0px'
                        align='Center'

                    >
                        <b>Instructions on how to make the payment:</b>
                    </Title>
                    <BankTitleContainer style={{ margin: 'auto', height: 'auto', alignItems: 'center' }}
                        w='50%'>
                        <ContainerGlobal
                            justify='space-between'
                            w='80%'>
                            <Title
                                family='raleway, sans-serif'
                                weight='700'
                                fstyle='Normal'
                                overflow='visible'
                                size='25px'
                                color='#2e2e2e'
                                align='left'
                                size1000='16px'
                            >
                                <b>BANK / E-Payment: </b>
                            </Title>
                            <Title
                                family='raleway, sans-serif'
                                weight='400'
                                fstyle='Normal'
                                size='25px'
                                color='#2e2e2e'
                                align='right'
                                size1000='16px'
                            >
                                {activeReservation.length != 0 ? activeReservation.payment.paymentMode.billerName : ""}
                            </Title>
                        </ContainerGlobal>

                        <ContainerGlobal
                            justify='space-between'
                            w='80%'>
                            <Title
                                family='raleway, sans-serif'
                                weight='700'
                                fstyle='Normal'
                                size='25px'
                                color='#2e2e2e'
                                align='left'
                                size1000='16px'
                            >
                                <b>Bank Address: </b>
                            </Title>
                            <Title
                                family='raleway, sans-serif'
                                weight='400'
                                fstyle='Normal'
                                size='25px'
                                color='#2e2e2e'
                                align='right'
                                size1000='16px'
                            >
                                Quezon City
                            </Title>
                        </ContainerGlobal>

                        <ContainerGlobal
                            justify='space-between'
                            w='80%'>
                            <Title
                                family='raleway, sans-serif'
                                weight='700'
                                fstyle='Normal'
                                size='25px'
                                color='#2e2e2e'
                                align='left'
                                size1000='16px'
                            >
                                <b>Account Name: </b>
                            </Title>
                            <Title
                                family='raleway, sans-serif'
                                weight='400'
                                fstyle='Normal'
                                size='25px'
                                color='#2e2e2e'
                                align='right'
                                size1000='16px'
                            >
                                {activeReservation.length != 0 ? activeReservation.payment.paymentMode.accountName : " "}
                            </Title>
                        </ContainerGlobal>

                        <ContainerGlobal
                            justify='space-between'
                            w='80%'>
                            <Title
                                family='raleway, sans-serif'
                                weight='700'
                                fstyle='Normal'
                                size='25px'
                                color='#2e2e2e'
                                align='left'
                                size1000='16px'
                            >
                                <b>Account Number: </b>
                            </Title>
                            <Title
                                family='raleway, sans-serif'
                                weight='400'
                                fstyle='Normal'
                                size='25px'
                                color='#2e2e2e'
                                align='right'
                                size1000='16px'
                            >
                                {activeReservation.length != 0 ? activeReservation.payment.paymentMode.accountNumber : ""}
                            </Title>
                        </ContainerGlobal>

                    </BankTitleContainer>
                    <BankContentContainer>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='center'
                            margin='0px 200px'
                            margin1000='30px 0px 20px 0px'
                            size1000='20px'
                            w='80%'
                        >
                            To confirm your reservation, <b>
                                please make your deposit amounting
                                {activeReservation.length != 0 ?
                                    activeReservation.payment.paymentType == 'Down Payment' ? ' ' +
                                        numberFormat(activeReservation.payment.grandTotal / 2) + ' until ' + new Date(new Date(activeReservation.reservationDate).getTime() + 60 * 60 * 24 * 1000).toLocaleDateString() + " " + new Date(activeReservation.reservationDate).toLocaleTimeString()
                                        :
                                        numberFormat(activeReservation.payment.grandTotal) + ' until ' + new Date(new Date(activeReservation.reservationDate).getTime() + 60 * 60 * 24 * 1000).toLocaleDateString() + " " + new Date(activeReservation.reservationDate).toLocaleTimeString()
                                    :
                                    ''
                                }.
                            </b> <br></br><br></br> Please email your proof of payment to <a target='_blank' href='mailto: Rm.LuxeHotel@gmail.com'>Rm.LuxeHotel@gmail.com</a> or upload it to your user account by <a href='/login'>logging in</a> to our website and going to the PAYMENT SECTION so we can verify the payment. Once your payment has been verified, you will receive a booking confirmation.
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='center'
                            margin='25px 200px'
                            margin1000='25px 100px'
                            size1000='20px'
                        >
                            For further information, please send an email to <a target='_blank' href='mailto: Rm.LuxeHotel@gmail.com'>Rm.LuxeHotel@gmail.com</a>, or <a href='/login'>message us</a> through your account. You will find the details of your reservation made below.
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='center'
                            margin='25px 200px'
                            margin1000='25px 100px'
                            size1000='20px'
                        >
                            NOTE: Unpaid fees within the given time period will result to <b>CANCELATION</b> of reservation.
                        </Title>
                    </BankContentContainer>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='36px'
                        color='#2e2e2e'
                        align='Center'
                        margin='60px 0px 0px 0px'
                        margin1000='60px 0px 0px 0px'
                        size1000='25px'
                    >
                        <b>Reservation Information</b>
                    </Title>
                    <ReservationInformationContainer
                        w='100%' >
                        <ReservationInformationContentsContainer>

                            <ContainerGlobal
                                justify='space-between'
                                w='100%'
                            >
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='100%'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Reservation Number:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    size1000='100%'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {activeReservation.reservationReferenceNumber}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    size1000='16px'
                                    align='left'
                                >
                                    Reservation Date:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='16px'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {new Date(activeReservation.reservationDate).toLocaleDateString()}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='16px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Payment Mode:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='16px'
                                    color='#2e2e2e'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {activeReservation.payment.paymentMode.paymentMode}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='16px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Payment Type:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='right'
                                    size1000='16px'
                                    w='50%'
                                >
                                    <b>  Down Payment</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size1000='16px'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Guest Name:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    size1000='16px'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {activeReservation.guestInformation.firstName}  {activeReservation.guestInformation.lastName}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size1000='16px'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Birthdate:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    size1000='16px'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {new Date(activeReservation.guestInformation.birthDate).toLocaleDateString()}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size1000='16px'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Nationality:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='16px'
                                    color='#2e2e2e'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {activeReservation.guestInformation.nationality}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='16px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Email Address:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    size1000='16px'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {activeReservation.guestInformation.user.email.toLowerCase()}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    size1000='16px'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Address:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    size1000='16px'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {activeReservation.guestInformation.address}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    size1000='16px'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Contact Number:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='16px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    <b> {activeReservation.guestInformation.user.contactNumber}</b>
                                </Title>
                            </ContainerGlobal>

                        </ReservationInformationContentsContainer>



                    </ReservationInformationContainer>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='36px'
                        color='#2e2e2e'
                        margin='0px 0px 30px 0px'
                        align='Center'
                    >
                        <b>Charge Summary</b>
                    </Title>
                    <ChargeSummaryContainer style={{ width: '100%', }}>
                        <TableContainer
                            className='tableCart'
                            style={{ width: 'auto' }}
                            cellspacing="0"
                            cellpadding="0">
                            <Tr bg="transparent">
                                <Th bg='#2E2E2E' color='white' align='center'>Booking status</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Room type</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Check in</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Check out</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Total nights</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Rate per night</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Total amout due</Th>
                            </Tr>
                            {reservedBooking.map((item, index) => (

                                <Tr style={index % 2 == 0 ? { backgroundColor: 'rgb(0,0,0,.1)' } : { backgroundColor: 'transparent' }}>

                                    <Td align='center' style={{ textTransform: 'capitalize' }}>{item.bookingStatus.toLowerCase()}</Td>
                                    <Td align='center'>{item.roomType}</Td>
                                    <Td align='center'>{new Date(item.checkInDate).toLocaleDateString()}</Td>
                                    <Td align='center'>{new Date(item.checkOutDate).toLocaleDateString()}</Td>
                                    <Td align='center'>{item.numberOfNights}</Td>
                                    <Td align='center'>{numberFormat(item.roomRate)}</Td>
                                    <Td align='center' style={{ color: 'red' }}>{numberFormat(item.total)}</Td>
                                </Tr>

                            ))}
                        </TableContainer>
                    </ChargeSummaryContainer>
                    <center>
                        <BrokenHorizontalLine></BrokenHorizontalLine>
                    </center>
                    <ChargeSummaryContainer style={{ margin: 'auto' }}>
                        <ChargeSummaryContentContainer>
                            <ContainerGlobal justify='space-between' gap='70px'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='26px'
                                    color='#2e2e2e'
                                    align='left'
                                    size1000='16px'
                                >
                                    <b>Discount:</b>
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='24px'
                                    // color='#13ed34'
                                    align='right'
                                    size1000='16px'
                                >
                                    {activeReservation.payment.discount.discountType}
                                </Title>
                            </ContainerGlobal>
                            {activeReservation.payment.paymentType == 'Down Payment' ?
                                <ContainerGlobal justify='space-between' gap='70px'>
                                    <Title
                                        family='raleway, sans-serif'
                                        weight='700'
                                        fstyle='Normal'
                                        size='26px'
                                        color='#2e2e2e'
                                        align='left'
                                        size1000='16px'
                                    >
                                        <b>Down Payment:</b>
                                    </Title>
                                    <Title
                                        family='Roboto Slab'
                                        weight='400'
                                        fstyle='Normal'
                                        size='24px'
                                        color='black'
                                        align='right'
                                        size1000='16px'
                                    >
                                        {numberFormat(parseFloat(grandTotal) / 2)}
                                    </Title>
                                </ContainerGlobal>
                                :
                                <ContainerGlobal justify='space-between' gap='70px'>
                                    <Title
                                        family='raleway, sans-serif'
                                        weight='700'
                                        fstyle='Normal'
                                        size='26px'
                                        color='#2e2e2e'
                                        align='left'
                                        size1000='16px'
                                    >
                                        <b>Full Payment:</b>
                                    </Title>
                                    <Title
                                        family='Roboto Slab'
                                        weight='400'
                                        fstyle='Normal'
                                        size='24px'
                                        color='black'
                                        align='right'
                                        size1000='16px'
                                    >
                                        {numberFormat(parseFloat(grandTotal))}
                                    </Title>
                                </ContainerGlobal>
                            }
                            <ContainerGlobal justify='space-between' gap='70px'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='24px'
                                    color='#2e2e2e'
                                    align='left'
                                    size1000='16px'
                                >
                                    <b>Amount Paid:</b>
                                </Title>
                                <Title
                                    family='Roboto Slab'
                                    weight='400'
                                    fstyle='Normal'
                                    size='24px'
                                    color='#1C9E60'
                                    align='right'
                                    size1000='16px'
                                >
                                    {numberFormat(activeReservation.payment.paymentMade)}
                                </Title>
                            </ContainerGlobal>

                            {/* {amenity.length != 0 && orderedAmenity.length != 0 ?
                                amenity.map((item) => (
                                    <ContainerGlobal justify='space-between' gap='70px'>
                                        <Title
                                            family='raleway, sans-serif'
                                            weight='400'
                                            fstyle='Normal'
                                            size='18px'
                                            color='#2e2e2e'
                                            align='left'
                                            size1000='12px'
                                        >
                                            <b> Total: {item.amenityName} ({orderedAmenity.filter((obj) => obj.amenity_id == item.id).map((item) => item.quantity).reduce((accu, value) => parseInt(accu) + parseInt(value), 0)})</b>
                                        </Title>
                                        <Title
                                            family='Roboto Slab'
                                            weight='400'
                                            fstyle='Normal'
                                            size='18px'
                                            color='#000000'
                                            align='right'
                                            size1000='12px'
                                        >
                                            {numberFormat(orderedAmenity.filter((obj) => obj.amenity_id == item.id).map((item) => item.total).reduce((accu, value) => parseFloat(accu) + parseFloat(value), 0))}
                                        </Title>
                                    </ContainerGlobal>
                                ))
                                : ''} */}

                            
                            <ContainerGlobal justify='space-between' gap='70px'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='24px'
                                    color='#2e2e2e'
                                    align='left'
                                    size1000='16px'
                                >
                                    <b>Grand Total:</b>
                                </Title>
                                <Title
                                    family='Roboto Slab'
                                    weight='400'
                                    fstyle='Normal'
                                    size='24px'
                                    color='#000000'
                                    align='right'
                                    size1000='16px'
                                >
                                    {numberFormat(parseFloat(grandTotal))}
                                </Title>
                            </ContainerGlobal>
                            <HorizontalLine
                                w='100%'
                                margin='10px 0px 0px 0px'
                            />

                            <ContainerGlobal justify='space-between' gap='70px'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='26px'
                                    color='#2e2e2e'
                                    align='left'
                                    size1000='16px'
                                >
                                    <b>Remaining Balance:</b>
                                </Title>
                                <Title
                                    family='Roboto Slab'
                                    weight='400'
                                    fstyle='Normal'
                                    size='24px'
                                    color='red'
                                    align='right'
                                    size1000='16px'
                                >
                                    {numberFormat(activeReservation.payment.grandTotal - activeReservation.payment.paymentMade)}
                                </Title>
                            </ContainerGlobal>
                        </ChargeSummaryContentContainer>
                    </ChargeSummaryContainer>
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '90%' }}>
                        <center >
                            <b style={{ fontSize: '19px' }}>Note that if you are eligible for a discount: </b>
                        </center>
                        <p style={{ fontSize: '17px' }}>
                            <b>For Downpayment:</b> It will only be applied upon check-in. Kindly present your valid id to
                            our frontdesk to confirm your discount. <br /><br />

                            <b>For Full Payment:</b> You will be subject for a refund. Kindly present your valid id to
                            our frontdesk to confirm your refund.
                        </p>
                    </div>
                </div>
            }
            else if (value.toLowerCase() == 'unsettled') {
                return <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%'
                }}>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='400'
                        size='37px'
                        fstyle='Normal'
                        margin='50px 0px 10px 0px'
                        align='Center'
                        overflow='visible'
                        margin1000='50px 0px 10px 0px'
                        size1000='25px'
                    >
                        Booking Reservation Cancelled
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='400'
                        size='25px'
                        fstyle='Normal'
                        margin='50px 0px 10px 0px'
                        align='Center'
                        margin1000='50px 0px 10px 0px'
                        size1000='20px'
                        overflow='visible'

                    >
                        Thank you for choosing RM Luxe Hotel,Your reservation is <b style={{ color: '#F44336' }}>CANCELLED </b>
                        due to unsettled fees. If you have already settled your payment yet received this message,
                        maybe your payment is not yet verified. Kindly disregard this and we will send you another email
                        once your booking is confirmed.
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='36px'
                        color='#2e2e2e'
                        align='Center'
                        margin='60px 0px 0px 0px'
                        margin1000='60px 0px 0px 0px'
                        size1000='25px'
                    >
                        <b>Reservation Information</b>
                    </Title>
                    <ReservationInformationContainer
                        w='100%' >
                        <ReservationInformationContentsContainer>

                            <ContainerGlobal
                                justify='space-between'
                                w='100%'
                            >
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='100%'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Reservation Number:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    size1000='100%'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {activeReservation.reservationReferenceNumber}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    size1000='16px'
                                    align='left'
                                >
                                    Reservation Date:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='16px'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {new Date(activeReservation.reservationDate).toLocaleDateString()}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='16px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Payment Mode:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='16px'
                                    color='#2e2e2e'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {activeReservation.payment.paymentMode.paymentMode}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='16px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Payment Type:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='right'
                                    size1000='16px'
                                    w='50%'
                                >
                                    <b>  Down Payment</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size1000='16px'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Guest Name:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    size1000='16px'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {activeReservation.guestInformation.firstName}  {activeReservation.guestInformation.lastName}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size1000='16px'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Birthdate:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    size1000='16px'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {new Date(activeReservation.guestInformation.birthDate).toLocaleDateString()}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size1000='16px'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Nationality:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='16px'
                                    color='#2e2e2e'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {activeReservation.guestInformation.nationality}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='16px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Email Address:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    size1000='16px'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {activeReservation.guestInformation.user.email.toLowerCase()}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    size1000='16px'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Address:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    size1000='16px'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {activeReservation.guestInformation.address}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    size1000='16px'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Contact Number:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='16px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    <b> {activeReservation.guestInformation.user.contactNumber}</b>
                                </Title>
                            </ContainerGlobal>

                        </ReservationInformationContentsContainer>



                    </ReservationInformationContainer>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='36px'
                        color='#2e2e2e'
                        margin='0px 0px 30px 0px'
                        align='Center'
                    >
                        <b>Charge Summary</b>
                    </Title>
                    <ChargeSummaryContainer style={{ width: '100%', }}>
                        <TableContainer
                            className='tableCart'
                            style={{ width: 'auto' }}
                            cellspacing="0"
                            cellpadding="0">
                            <Tr bg="transparent">
                                <Th bg='#2E2E2E' color='white' align='center'>Booking status</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Room type</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Check in</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Check out</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Total nights</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Rate per night</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Total amout due</Th>
                            </Tr>
                            {reservedBooking.map((item, index) => (

                                <Tr style={index % 2 == 0 ? { backgroundColor: 'rgb(0,0,0,.1)' } : { backgroundColor: 'transparent' }}>

                                    <Td align='center' style={{ textTransform: 'capitalize' }}>{item.bookingStatus.toLowerCase()}</Td>
                                    <Td align='center'>{item.roomType}</Td>
                                    <Td align='center'>{new Date(item.checkInDate).toLocaleDateString()}</Td>
                                    <Td align='center'>{new Date(item.checkOutDate).toLocaleDateString()}</Td>
                                    <Td align='center'>{item.numberOfNights}</Td>
                                    <Td align='center'>{numberFormat(item.roomRate)}</Td>
                                    <Td align='center' style={{ color: 'red' }}>{numberFormat(item.total)}</Td>
                                </Tr>

                            ))}
                        </TableContainer>
                    </ChargeSummaryContainer>
                    <center>
                        <BrokenHorizontalLine></BrokenHorizontalLine>
                    </center>
                    <ChargeSummaryContainer style={{ margin: 'auto' }}>
                        <ChargeSummaryContentContainer>
                            <ContainerGlobal justify='space-between' gap='70px'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='26px'
                                    color='#2e2e2e'
                                    align='left'
                                    size1000='16px'
                                >
                                    <b>Discount:</b>
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='24px'
                                    // color='#13ed34'
                                    align='right'
                                    size1000='16px'
                                >
                                    {activeReservation.payment.discount.discountType}
                                </Title>
                            </ContainerGlobal>
                            {activeReservation.payment.paymentType == 'Down Payment' ?
                                <ContainerGlobal justify='space-between' gap='70px'>
                                    <Title
                                        family='raleway, sans-serif'
                                        weight='700'
                                        fstyle='Normal'
                                        size='26px'
                                        color='#2e2e2e'
                                        align='left'
                                        size1000='16px'
                                    >
                                        <b>Down Payment:</b>
                                    </Title>
                                    <Title
                                        family='Roboto Slab'
                                        weight='400'
                                        fstyle='Normal'
                                        size='24px'
                                        color='black'
                                        align='right'
                                        size1000='16px'
                                    >
                                        {numberFormat(grandTotal / 2)}
                                    </Title>
                                </ContainerGlobal>
                                :
                                <ContainerGlobal justify='space-between' gap='70px'>
                                    <Title
                                        family='raleway, sans-serif'
                                        weight='700'
                                        fstyle='Normal'
                                        size='26px'
                                        color='#2e2e2e'
                                        align='left'
                                        size1000='16px'
                                    >
                                        <b>Full Payment:</b>
                                    </Title>
                                    <Title
                                        family='Roboto Slab'
                                        weight='400'
                                        fstyle='Normal'
                                        size='24px'
                                        color='black'
                                        align='right'
                                        size1000='16px'
                                    >
                                        {numberFormat(parseFloat(grandTotal))}
                                    </Title>
                                </ContainerGlobal>
                            }
                            <ContainerGlobal justify='space-between' gap='70px'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='24px'
                                    color='#2e2e2e'
                                    align='left'
                                    size1000='16px'
                                >
                                    <b>Amount Paid:</b>
                                </Title>
                                <Title
                                    family='Roboto Slab'
                                    weight='400'
                                    fstyle='Normal'
                                    size='24px'
                                    color='#1C9E60'
                                    align='right'
                                    size1000='16px'
                                >
                                    {numberFormat(activeReservation.payment.paymentMade)}
                                </Title>
                            </ContainerGlobal>
                            {amenity.length != 0 && orderedAmenity.length != 0 ?
                                amenity.map((item) => (
                                    <ContainerGlobal justify='space-between' gap='70px'>
                                        <Title
                                            family='raleway, sans-serif'
                                            weight='400'
                                            fstyle='Normal'
                                            size='18px'
                                            color='#2e2e2e'
                                            align='left'
                                            size1000='12px'
                                        >
                                            <b> Total: {item.amenityName} ({orderedAmenity.filter((obj) => obj.amenity_id == item.id).map((item) => item.quantity).reduce((accu, value) => parseInt(accu) + parseInt(value), 0)})</b>
                                        </Title>
                                        <Title
                                            family='Roboto Slab'
                                            weight='400'
                                            fstyle='Normal'
                                            size='18px'
                                            color='#000000'
                                            align='right'
                                            size1000='12px'
                                        >
                                            {numberFormat(orderedAmenity.filter((obj) => obj.amenity_id == item.id).map((item) => item.total).reduce((accu, value) => parseFloat(accu) + parseFloat(value), 0))}
                                        </Title>
                                    </ContainerGlobal>
                                ))
                                : ''}

                            {reservedBooking != 0 ? <ContainerGlobal justify='space-between' gap='70px'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='18px'
                                    color='#2e2e2e'
                                    align='left'
                                    size1000='12px'
                                >
                                    <b> Others:</b>
                                </Title>
                                <Title
                                    family='Roboto Slab'
                                    weight='400'
                                    fstyle='Normal'
                                    size='18px'
                                    color='#000000'
                                    align='right'
                                    size1000='12px'
                                >
                                    {numberFormat(reservedBooking.map((item) => item.others).reduce((accu, value) => parseFloat(accu) + parseFloat(value), 0))}
                                </Title>
                            </ContainerGlobal>
                                : ''}
                            <ContainerGlobal justify='space-between' gap='70px'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='24px'
                                    color='#2e2e2e'
                                    align='left'
                                    size1000='16px'
                                >
                                    <b>Grand Total:</b>
                                </Title>
                                <Title
                                    family='Roboto Slab'
                                    weight='400'
                                    fstyle='Normal'
                                    size='24px'
                                    color='#000000'
                                    align='right'
                                    size1000='16px'
                                >
                                    {numberFormat(parseFloat(grandTotal))}
                                </Title>
                            </ContainerGlobal>
                            <HorizontalLine
                                w='100%'
                                margin='10px 0px 0px 0px'
                            />

                            <ContainerGlobal justify='space-between' gap='70px'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='26px'
                                    color='#2e2e2e'
                                    align='left'
                                    size1000='16px'
                                >
                                    <b>Remaining Balance:</b>
                                </Title>
                                <Title
                                    family='Roboto Slab'
                                    weight='400'
                                    fstyle='Normal'
                                    size='24px'
                                    color='red'
                                    align='right'
                                    size1000='16px'
                                >
                                    {numberFormat(activeReservation.payment.grandTotal - activeReservation.payment.paymentMade)}
                                </Title>
                            </ContainerGlobal>
                        </ChargeSummaryContentContainer>
                    </ChargeSummaryContainer>
                </div>
            }
            else if (value.toLowerCase() == 'reserved') {
                return <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%'
                }}>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='400'
                        size='37px'
                        size1000='25px'
                        fstyle='Normal'
                        margin='50px 0px 10px 0px'
                        margin1000='25px 0px 10px 0px'
                        align='Center'
                        overflow='visible'
                    >
                        Thank you for choosing us for your stay.
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='400'
                        size='25px'
                        size1000='25px'
                        fstyle='Normal'
                        margin='50px 0px 10px 0px'
                        margin1000='50px 0px 10px 0px'
                        align='Center'
                        overflow='visible'

                    >
                        Thank you for choosing RM Luxe Hotel. Your reservation is <b style={{ color: 'green' }}>{value}</b>
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='36px'
                        color='#2e2e2e'
                        align='Center'
                        margin='60px 0px 0px 0px'
                        margin1000='60px 0px 0px 0px'
                        size1000='25px'
                    >
                        <b>Reservation Information</b>
                    </Title>
                    <ReservationInformationContainer
                        w='100%' >
                        <ReservationInformationContentsContainer>

                            <ContainerGlobal
                                justify='space-between'
                                w='100%'
                            >
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='100%'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Reservation Number:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    size1000='100%'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {activeReservation.reservationReferenceNumber}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    size1000='16px'
                                    align='left'
                                >
                                    Reservation Date:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='16px'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {new Date(activeReservation.reservationDate).toLocaleDateString()}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='16px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Payment Mode:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='16px'
                                    color='#2e2e2e'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {activeReservation.payment.paymentMode.paymentMode}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='16px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Payment Type:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='right'
                                    size1000='16px'
                                    w='50%'
                                >
                                    <b>  Down Payment</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size1000='16px'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Guest Name:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    size1000='16px'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {activeReservation.guestInformation.firstName}  {activeReservation.guestInformation.lastName}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size1000='16px'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Birthdate:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    size1000='16px'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {new Date(activeReservation.guestInformation.birthDate).toLocaleDateString()}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size1000='16px'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Nationality:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='16px'
                                    color='#2e2e2e'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {activeReservation.guestInformation.nationality}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='16px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Email Address:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    size1000='16px'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {activeReservation.guestInformation.user.email.toLowerCase()}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    size1000='16px'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Address:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    size1000='16px'
                                    align='right'
                                    w='50%'
                                >
                                    <b> {activeReservation.guestInformation.address}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                                w='100%'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    size1000='16px'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Contact Number:
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    size1000='16px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    <b> {activeReservation.guestInformation.user.contactNumber}</b>
                                </Title>
                            </ContainerGlobal>

                        </ReservationInformationContentsContainer>



                    </ReservationInformationContainer>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='36px'
                        color='#2e2e2e'
                        margin='0px 0px 30px 0px'
                        align='Center'
                    >
                        <b>Charge Summary</b>
                    </Title>
                    <ChargeSummaryContainer style={{ width: '100%', }}>
                        <TableContainer
                            className='tableCart'
                            style={{ width: 'auto' }}
                            cellspacing="0"
                            cellpadding="0">
                            <Tr bg="transparent">
                                <Th bg='#2E2E2E' color='white' align='center'>Booking status</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Room type</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Check in</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Check out</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Total nights</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Rate per night</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Total amout due</Th>
                            </Tr>
                            {reservedBooking.map((item, index) => (

                                <Tr style={index % 2 == 0 ? { backgroundColor: 'rgb(0,0,0,.1)' } : { backgroundColor: 'transparent' }}>

                                    <Td align='center' style={{ textTransform: 'capitalize' }}>{item.bookingStatus.toLowerCase()}</Td>
                                    <Td align='center'>{item.roomType}</Td>
                                    <Td align='center'>{new Date(item.checkInDate).toLocaleDateString()}</Td>
                                    <Td align='center'>{new Date(item.checkOutDate).toLocaleDateString()}</Td>
                                    <Td align='center'>{item.numberOfNights}</Td>
                                    <Td align='center'>{numberFormat(item.roomRate)}</Td>
                                    <Td align='center' style={{ color: 'red' }}>{numberFormat(item.total)}</Td>
                                </Tr>

                            ))}
                        </TableContainer>
                    </ChargeSummaryContainer>
                    <center>
                        <BrokenHorizontalLine></BrokenHorizontalLine>
                    </center>
                    <ChargeSummaryContainer style={{ margin: 'auto' }}>
                        <ChargeSummaryContentContainer>
                            <ContainerGlobal justify='space-between' gap='70px'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='26px'
                                    color='#2e2e2e'
                                    align='left'
                                    size1000='16px'
                                >
                                    <b>Discount:</b>
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='24px'
                                    // color='#13ed34'
                                    align='right'
                                    size1000='16px'
                                >
                                    {activeReservation.payment.discount.discountType}
                                </Title>
                            </ContainerGlobal>
                            {activeReservation.payment.paymentType == 'Down Payment' ?
                                <ContainerGlobal justify='space-between' gap='70px'>
                                    <Title
                                        family='raleway, sans-serif'
                                        weight='700'
                                        fstyle='Normal'
                                        size='26px'
                                        color='#2e2e2e'
                                        align='left'
                                        size1000='16px'
                                    >
                                        <b>Down Payment:</b>
                                    </Title>
                                    <Title
                                        family='Roboto Slab'
                                        weight='400'
                                        fstyle='Normal'
                                        size='24px'
                                        color='black'
                                        align='right'
                                        size1000='16px'
                                    >
                                        {numberFormat(grandTotal / 2)}
                                    </Title>
                                </ContainerGlobal>
                                :
                                <ContainerGlobal justify='space-between' gap='70px'>
                                    <Title
                                        family='raleway, sans-serif'
                                        weight='700'
                                        fstyle='Normal'
                                        size='26px'
                                        color='#2e2e2e'
                                        align='left'
                                        size1000='16px'
                                    >
                                        <b>Full Payment:</b>
                                    </Title>
                                    <Title
                                        family='Roboto Slab'
                                        weight='400'
                                        fstyle='Normal'
                                        size='24px'
                                        color='black'
                                        align='right'
                                        size1000='16px'
                                    >
                                        {numberFormat(parseFloat(grandTotal))}
                                    </Title>
                                </ContainerGlobal>
                            }
                            <ContainerGlobal justify='space-between' gap='70px'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='24px'
                                    color='#2e2e2e'
                                    align='left'
                                    size1000='16px'
                                >
                                    <b>Amount Paid:</b>
                                </Title>
                                <Title
                                    family='Roboto Slab'
                                    weight='400'
                                    fstyle='Normal'
                                    size='24px'
                                    color='#1C9E60'
                                    align='right'
                                    size1000='16px'
                                >
                                    {numberFormat(activeReservation.payment.paymentMade)}
                                </Title>
                            </ContainerGlobal>
                            {amenity.length != 0 && orderedAmenity.length != 0 ?
                                amenity.map((item) => (
                                    <ContainerGlobal justify='space-between' gap='70px'>
                                        <Title
                                            family='raleway, sans-serif'
                                            weight='400'
                                            fstyle='Normal'
                                            size='18px'
                                            color='#2e2e2e'
                                            align='left'
                                            size1000='12px'
                                        >
                                            <b> Total: {item.amenityName} ({orderedAmenity.filter((obj) => obj.amenity_id == item.id).map((item) => item.quantity).reduce((accu, value) => parseInt(accu) + parseInt(value), 0)})</b>
                                        </Title>
                                        <Title
                                            family='Roboto Slab'
                                            weight='400'
                                            fstyle='Normal'
                                            size='18px'
                                            color='#000000'
                                            align='right'
                                            size1000='12px'
                                        >
                                            {numberFormat(orderedAmenity.filter((obj) => obj.amenity_id == item.id).map((item) => item.total).reduce((accu, value) => parseFloat(accu) + parseFloat(value), 0))}
                                        </Title>
                                    </ContainerGlobal>
                                ))
                                : ''}

                            {reservedBooking != 0 ? <ContainerGlobal justify='space-between' gap='70px'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='18px'
                                    color='#2e2e2e'
                                    align='left'
                                    size1000='12px'
                                >
                                    <b> Others:</b>
                                </Title>
                                <Title
                                    family='Roboto Slab'
                                    weight='400'
                                    fstyle='Normal'
                                    size='18px'
                                    color='#000000'
                                    align='right'
                                    size1000='12px'
                                >
                                    {numberFormat(reservedBooking.map((item) => item.others).reduce((accu, value) => parseFloat(accu) + parseFloat(value), 0))}
                                </Title>
                            </ContainerGlobal>
                                : ''}
                            <ContainerGlobal justify='space-between' gap='70px'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='24px'
                                    color='#2e2e2e'
                                    align='left'
                                    size1000='16px'
                                >
                                    <b>Grand Total:</b>
                                </Title>
                                <Title
                                    family='Roboto Slab'
                                    weight='400'
                                    fstyle='Normal'
                                    size='24px'
                                    color='#000000'
                                    align='right'
                                    size1000='16px'
                                >
                                    {numberFormat(parseFloat(grandTotal))}
                                </Title>
                            </ContainerGlobal>
                            <HorizontalLine
                                w='100%'
                                margin='10px 0px 0px 0px'
                            />

                            <ContainerGlobal justify='space-between' gap='70px'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='26px'
                                    color='#2e2e2e'
                                    align='left'
                                    size1000='16px'
                                >
                                    <b>Remaining Balance:</b>
                                </Title>
                                <Title
                                    family='Roboto Slab'
                                    weight='400'
                                    fstyle='Normal'
                                    size='24px'
                                    color='red'
                                    align='right'
                                    size1000='16px'
                                >
                                    {numberFormat(activeReservation.payment.grandTotal - activeReservation.payment.paymentMade)}
                                </Title>
                            </ContainerGlobal>
                        </ChargeSummaryContentContainer>
                    </ChargeSummaryContainer>
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <center >
                            <b style={{ fontSize: '19px' }}>Note that if you are eligible for a discount: </b>
                        </center>
                        <p style={{ fontSize: '17px' }}>
                            <b>For Downpayment:</b> It will only be applied upon check-in. Kindly present your valid id to
                            our frontdesk to confirm your discount. <br /><br />

                            <b>For Full Payment:</b> You will be subject for a refund. Kindly present your valid id to
                            our frontdesk to confirm your refund.
                        </p>
                    </div>
                </div>
            }

        }
    }

    const reservationStatusStyle = (value) => {
        if (value.length != 0) {
            if (value == 'RESERVED') {
                return <ContainerGlobal
                    w='100px'
                    h='auto'
                    margin='0px auto'
                    bg='rgb(158,242,156)'
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
                        size='12px'
                        color='BLACK'
                        fstyle='normal'
                        display='inline'
                        padding='5px 10px'
                    >
                        {value.toLowerCase()}
                    </Title>
                </ContainerGlobal>
            }
            else if (value == 'PENDING') {
                return <ContainerGlobal
                    w='100px'
                    h='auto'
                    margin='0px auto'
                    bg='rgb(210,217,28)'
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
                        size='12px'
                        color='BLACK'
                        fstyle='normal'
                        display='inline'
                        padding='5px 10px'
                    >
                        {value.toLowerCase()}
                    </Title>
                </ContainerGlobal>
            }
            else if (value == 'DEPARTED') {
                return <ContainerGlobal
                    w='100px'
                    h='auto'
                    margin='0px auto'
                    bg='rgb(0, 255, 0, .2)'
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
                        size='12px'
                        color='BLACK'
                        fstyle='normal'
                        display='inline'
                        padding='5px 10px'
                    >
                        {value.toLowerCase()}
                    </Title>
                </ContainerGlobal>
            }
            else if (value == 'UNSETTLED') {
                return <ContainerGlobal
                    w='100px'
                    h='auto'
                    margin='0px auto'
                    bg='rgb(245,82,54)'
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
                        size='12px'
                        color='BLACK'
                        fstyle='normal'
                        display='inline'
                        padding='5px 10px'
                    >
                        cancelled
                    </Title>
                </ContainerGlobal>
            }
            else if (value == 'NO SHOW') {
                return <ContainerGlobal
                    w='100px'
                    h='auto'
                    margin='0px auto'
                    bg='rgb(255,40,0)'
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
                        size='12px'
                        color='BLACK'
                        fstyle='normal'
                        display='inline'
                        padding='5px 10px'
                    >
                        {value.toLowerCase()}
                    </Title>
                </ContainerGlobal>
            }
        }
    }


    const [reservationPage, setReservationPage] = useState(1)

    return (
        <Container>



            {activeReservation.length != 0 ?
                <Title
                    padding="20px 0px 20px 0px"
                    bg="#272727"
                    family="Playfair Display"
                    color="#BFAA7E"
                    weight="400"
                    size="50px"
                    fstyle="Normal"
                    margin="50px 0px 10px 0px"
                    align="Center"
                    w="65%"
                    size1000="200%"

                >
                    Reservation Status
                </Title>
                :
                ""}
            {activeReservation.length != 0 ?
                reservationStatus(activeReservation.reservationStatus)
                :
                <Title
                    margin='100px'
                    size1000='30px'
                    margin1000='30px 0px 40px 0px'
                >
                    Sorry but you don't have any reservations.
                </Title>

            }



            <MainContainer
                display='flex'
                height='450px'

                style={{ yOverflow: 'scroll', }}>
                <MessagesTitleContainer>
                    <Title
                        bg='#272727'
                        family='raleway, sans-serif'
                        color='white'
                        weight='400'
                        size='25px'
                        fstyle='Normal'
                        align='Center'
                        margin='20px'

                    >
                        Reservations
                    </Title>

                </MessagesTitleContainer>
                <div style={{ width: '100%', overflowY: 'auto' }}>
                    <TableContainer style={{ height: '100%', margin: '0px' }}
                        cellspacing="0"
                        cellpadding="0">
                        <Tr bg="transparent">
                            <Th bg='#DFD3B9' color='#2e2e2e' align='center'>Reservation Number</Th>
                            <Th bg='#DFD3B9' color='#2e2e2e' align='center'>Reservation Date</Th>
                            <Th bg='#DFD3B9' color='#2e2e2e' align='center'>Reservation Status</Th>
                            <Th bg='#DFD3B9' color='#2e2e2e' align='center'>action</Th>

                        </Tr>
                        {reservation
                            .slice((reservationPage - 1) * 6, reservationPage * 6)
                            .sort((a, b) => Date.parse(new Date(b.reservationDate)) - Date.parse(new Date(a.reservationDate)))
                            .map((item, index) => (

                                <Tr style={index % 2 == 0 ? { backgroundColor: 'transparent' } : { backgroundColor: 'rgb(0,0,0,.1)' }}>

                                    <Td style={item.id == activeReservation.id ? { backgroundColor: 'green', color: 'black' } : { backgroundColor: 'transparent' }} align='center'>{item.reservationReferenceNumber}</Td>
                                    <Td style={item.id == activeReservation.id ? { backgroundColor: 'green', color: 'black' } : { backgroundColor: 'transparent' }} align='center'>{new Date(item.reservationDate).toLocaleDateString()} {new Date(item.reservationDate).toLocaleTimeString()}</Td>
                                    <Td style={item.id == activeReservation.id ? { backgroundColor: 'green', color: 'black', fontWeight: 'bold' } : { backgroundColor: 'transparent' }} align='center'>{reservationStatusStyle(item.reservationStatus)}</Td>
                                    <Td style={item.id == activeReservation.id ? { backgroundColor: 'green', color: 'black' } : { backgroundColor: 'transparent' }} align='center'><a href="#" style={item.id == activeReservation.id ? { cursor: 'default', color: 'black' } : { cursor: 'pointer', color: 'blue' }} onClick={() => { view(item.id) }}>View</a></Td>
                                    {/* <Td align='center'>{item.numberOfNights}</Td>
                            <Td align='center'>{numberFormat(item.room.roomType.roomRate)}</Td>
                            <Td align='center' style={{ color: 'red' }}>{numberFormat(item.room.roomType.roomRate * item.numberOfNights)}</Td> */}
                                </Tr>

                            ))}
                    </TableContainer>

                </div>

            </MainContainer>

            <Pagination
                page={reservationPage}
                count={reservation.length != 0 && Math.ceil(reservation.length / 6)}
                onChange={(e, value) => {
                    setReservationPage(value)
                }}

                style={{
                    justifyContent: "center",
                    display: 'flex',
                    margin: '20px',
                }}
            />


        </Container>
    )
}

export default ClientBookingInfoCont