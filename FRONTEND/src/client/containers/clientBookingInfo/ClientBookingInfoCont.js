import React, { useEffect, useState } from 'react'
import { Title } from '../../components/title/styles'
import { BookingContent, BookingContentContainer, Container, PreviousBookingContainer, PreviousBookingContainerContent, Status, StatusContainer } from './Styles'
import { Button } from '../../components/button/styles';
import { MainContainer, MessagesTitleContainer } from '../clientMessagesCont/Styles';
import { TableContainer, Td, Th, Tr } from '../bookingCartPage/Styles';
import axios from 'axios';
import { ContainerGlobal } from '../../../admin/components/container/container';
import { BankContentContainer, BankTitleContainer, BrokenHorizontalLine, ChargeSummaryContainer, ChargeSummaryContentContainer, ReservationInformationContainer, ReservationInformationContentsContainer } from '../bookingConfirmation/Styles';

const ClientBookingInfoCont = () => {
    useEffect(() => {
        document.title = "Profile | Bookings"
    }, [])


    const [reservation, setReservation] = useState([])
    const [activeReservation, setActiveReservation] = useState([])
    const [grandTotal, setGrandTotal] = useState(0);
    const [reservedBooking, setReservedBooking] = useState([])
    useEffect(() => {

    }, [])

    useEffect(() => {
        setGrandTotal(0);
        reservedBooking.map((item) => (
            setGrandTotal((prevValue) => prevValue + (item.room.roomType.roomRate * item.numberOfNights))
        ))
    }, [reservedBooking])

    useEffect(() => {
        axios.get('http://localhost:3001/auth/verify-token').then((authUser) => {
            console.log(authUser.data)
            axios.get('http://localhost:3001/api/getAllReservation').then((getAllReservation) => {
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

                if (index == 1) {
                    setActiveReservation(items)
                }
            })));
        }
    }, [reservation])

    const numberFormat = (value) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'PHP'
        }).format(value);


    useEffect(() => {
        console.log("activeReservation", activeReservation)
        axios.get('http://localhost:3001/api/getAllReservationSummary').then((result) => {
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
                return <div style={{ width: '95%' }}>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='400'
                        size='37px'
                        fstyle='Normal'
                        margin='50px 0px 10px 0px'
                        align='Center'
                        overflow='visible'
                    >
                        Thank you for staying with us.
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='400'
                        size='25px'
                        fstyle='Normal'
                        margin='50px 0px 10px 0px'
                        align='Center'
                        overflow='visible'

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
                        align='Center'

                    >
                        <b>Instructions on how to make the payment:</b>
                    </Title>
                    <BankTitleContainer style={{ margin: 'auto', }}
                        w='50%'>
                        <ContainerGlobal
                            justify='space-between'>
                            <Title
                                family='raleway, sans-serif'
                                weight='700'
                                fstyle='Normal'
                                overflow='visible'
                                size='25px'
                                color='#2e2e2e'
                                align='left'
                            >
                                <b>BANK / E-Payment: </b>
                            </Title>
                            <Title
                                family='raleway, sans-serif'
                                weight='400'
                                fstyle='Normal'
                                size='25px'
                                color='#2e2e2e'
                                align='left'
                            >
                                {activeReservation.length != 0 ? activeReservation.payment.paymentMode.billerName : ""}
                            </Title>
                        </ContainerGlobal>

                        <ContainerGlobal
                            justify='space-between'>
                            <Title
                                family='raleway, sans-serif'
                                weight='700'
                                fstyle='Normal'
                                size='25px'
                                color='#2e2e2e'
                                align='left'
                            >
                                <b>Bank Address: </b>
                            </Title>
                            <Title
                                family='raleway, sans-serif'
                                weight='400'
                                fstyle='Normal'
                                size='25px'
                                color='#2e2e2e'
                                align='left'
                            >
                                Quezon City
                            </Title>
                        </ContainerGlobal>

                        <ContainerGlobal
                            justify='space-between'>
                            <Title
                                family='raleway, sans-serif'
                                weight='700'
                                fstyle='Normal'
                                size='25px'
                                color='#2e2e2e'
                                align='left'
                            >
                                <b>Account Name: </b>
                            </Title>
                            <Title
                                family='raleway, sans-serif'
                                weight='400'
                                fstyle='Normal'
                                size='25px'
                                color='#2e2e2e'
                                align='left'
                            >
                                {activeReservation.length != 0 ? activeReservation.payment.paymentMode.accountName : " "}
                            </Title>
                        </ContainerGlobal>

                        <ContainerGlobal
                            justify='space-between'>
                            <Title
                                family='raleway, sans-serif'
                                weight='700'
                                fstyle='Normal'
                                size='25px'
                                color='#2e2e2e'
                                align='left'
                            >
                                <b>Account Number: </b>
                            </Title>
                            <Title
                                family='raleway, sans-serif'
                                weight='400'
                                fstyle='Normal'
                                size='25px'
                                color='#2e2e2e'
                                align='left'
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
                        >

                            To confirm your reservation, please make your deposit amounting within the next 24 hours. Please email your proof of payment to <b>(COMPANY EMAIL)</b> or upload it in the PAYMENT TAB section so we can verify the payment. Once your payment has been verified, you will receive a booking confirmation.
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='center'
                            margin='25px 200px'
                        >
                            For further information, please send an email to (Company email), or <a href='/login'>message us</a> through your account. You will find the details of your reservation made below.
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
                    >
                        <b>Reservation Information</b>
                    </Title>
                    <ReservationInformationContainer
                        w='100%'>
                        <ReservationInformationContentsContainer>

                            <ContainerGlobal
                                justify='space-between'
                            >
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Reservation Date.
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    <b>: {new Date(activeReservation.reservationDate).toLocaleDateString()}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                            >
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Payment Mode
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    <b>: {activeReservation.payment.paymentMode.paymentMode}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                            >
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Payment Type
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    <b>:  Down Payment</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                            >
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Guest Name
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    <b>: {activeReservation.guestInformation.firstName.toLowerCase()}  {activeReservation.guestInformation.lastName.toLowerCase()}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                            >
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Birthdate
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    <b>: {new Date(activeReservation.guestInformation.birthDate).toLocaleDateString()}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                            >
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Nationality
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    <b>: {activeReservation.guestInformation.nationality.toLowerCase()}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                            >
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Email Address
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    <b>: {activeReservation.guestInformation.user.email.toLowerCase()}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                            >
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Address
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                    width=''
                                >
                                    <b>: {activeReservation.guestInformation.address.toLowerCase()}</b>
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal
                                justify='space-between'
                            >
                                <Title
                                    family='raleway, sans-serif'
                                    weight='400'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    Contact Number
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='25px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    <b>: {activeReservation.guestInformation.user.contactNumber.toLowerCase()}</b>
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
                    <ChargeSummaryContainer>
                        <TableContainer
                            cellspacing="0"
                            cellpadding="0">
                            <Tr bg="transparent">
                                <Th bg='#2E2E2E' color='white' align='center'>Room type</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Check in</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Check out</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Total nights</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Rate per night</Th>
                                <Th bg='#2E2E2E' color='white' align='center'>Total amout due</Th>
                            </Tr>
                            {reservedBooking.map((item, index) => (

                                <Tr style={index % 2 == 0 ? { backgroundColor: 'rgb(0,0,0,.1)' } : { backgroundColor: 'transparent' }}>

                                    <Td align='center'>{item.room.roomType.roomType}</Td>
                                    <Td align='center'>{new Date(item.checkInDate).toLocaleDateString()}</Td>
                                    <Td align='center'>{new Date(item.checkOutDate).toLocaleDateString()}</Td>
                                    <Td align='center'>{item.numberOfNights}</Td>
                                    <Td align='center'>{numberFormat(item.room.roomType.roomRate)}</Td>
                                    <Td align='center' style={{ color: 'red' }}>{numberFormat(item.room.roomType.roomRate * item.numberOfNights)}</Td>
                                </Tr>

                            ))}
                        </TableContainer>
                    </ChargeSummaryContainer>
                    <center>
                        <BrokenHorizontalLine></BrokenHorizontalLine>
                    </center>
                    <ChargeSummaryContainer>
                        <ChargeSummaryContentContainer>
                            <ContainerGlobal justify='space-between' gap='70px'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='26px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    <b>Discount</b>
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='26px'
                                    // color='#13ed34'
                                    align='left'
                                >
                                    : {activeReservation.payment.discount.discountType}
                                </Title>
                            </ContainerGlobal>
                            <ContainerGlobal justify='space-between' gap='70px'>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='30px'
                                    color='#2e2e2e'
                                    align='left'
                                >
                                    <b>Grand Total</b>
                                </Title>
                                <Title
                                    family='raleway, sans-serif'
                                    weight='700'
                                    fstyle='Normal'
                                    size='30px'
                                    color='#13ed34'
                                    align='left'
                                >
                                    : {numberFormat(grandTotal)}
                                </Title>
                            </ContainerGlobal>
                        </ChargeSummaryContentContainer>
                        <ChargeSummaryContentContainer>

                        </ChargeSummaryContentContainer>
                    </ChargeSummaryContainer>
                    <center style={{ marginBottom: '40px', }}>
                        <b>NOTE!:</b> Discount will only take effect upon check-in. Please present your valid id to our frontdesk to confirm your discount. Thank you
                    </center>
                </div>
            }
            else if (value.toLowerCase() == 'unsettled') {
                return <Title
                    family='raleway, sans-serif'
                    color='#292929'
                    weight='400'
                    size='25px'
                    fstyle='Normal'
                    margin='50px 0px 10px 0px'
                    align='Center'
                    overflow='visible'

                >
                    Sorry your reservation is <b style={{ color: '#d61b1b' }}>CANCELLED</b> due to unsetteled balance. Thank you.
                </Title>
            }
            else if (value.toLowerCase() == 'reserved') {
                return <Title
                    family='raleway, sans-serif'
                    color='#292929'
                    weight='400'
                    size='25px'
                    fstyle='Normal'
                    margin='50px 0px 10px 0px'
                    align='Center'
                    overflow='visible'

                >
                    Your reservation status is now  <b style={{ color: '#1bd31b' }}>{value}</b> until confirmation of Bank Deposit/Transfer is made.
                </Title>
            }
            else if (value.toLowerCase() == 'booked') {
                return <Title
                    family='raleway, sans-serif'
                    color='#292929'
                    weight='400'
                    size='25px'
                    fstyle='Normal'
                    margin='50px 0px 10px 0px'
                    align='Center'
                    overflow='visible'

                >
                    Your reservation status is now  <b style={{ color: '#1bd31b' }}>{value}</b> until confirmation of Bank Deposit/Transfer is made.
                </Title>
            }
            else if (value.toLowerCase() == 'departed') {
                return <Title
                    family='raleway, sans-serif'
                    color='#292929'
                    weight='400'
                    size='25px'
                    fstyle='Normal'
                    margin='50px 0px 10px 0px'
                    align='Center'
                    overflow='visible'

                >
                    Your reservation status is now  <b style={{ color: '#1bd31b' }}>{value}</b> until confirmation of Bank Deposit/Transfer is made.
                </Title>
            }
            else if (value.toLowerCase() == 'no show') {
                return <Title
                    family='raleway, sans-serif'
                    color='#292929'
                    weight='400'
                    size='25px'
                    fstyle='Normal'
                    margin='50px 0px 10px 0px'
                    align='Center'
                    overflow='visible'

                >
                    Your reservation status is now  <b style={{ color: '#1bd31b' }}>{value}</b> until confirmation of Bank Deposit/Transfer is made.
                </Title>
            }
        }
    }

    return (
        <Container>
            <Title
                padding='15px 80px 15px 80px'
                bg='#272727'
                family='raleway, sans-serif'
                color='white'
                weight='400'
                size='25px'
                fstyle='Normal'
                margin='50px 0px 10px 0px'
                align='Center'
            >
                Booking Status
            </Title>


            {activeReservation.length != 0 ?
                reservationStatus(activeReservation.reservationStatus)
                : ""}



            <MainContainer
                display='flex'
                height='450px'>
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
                <TableContainer
                    cellspacing="0"
                    cellpadding="0">
                    <Tr bg="transparent">
                        <Th bg='#DFD3B9' color='#2e2e2e' align='center'>Reservation Number</Th>
                        <Th bg='#DFD3B9' color='#2e2e2e' align='center'>Reservation Date</Th>
                        <Th bg='#DFD3B9' color='#2e2e2e' align='center'>Reservation Status</Th>
                        <Th bg='#DFD3B9' color='#2e2e2e' align='center'>action</Th>

                    </Tr>
                    {reservation.map((item, index) => (

                        <Tr style={index % 2 == 0 ? { backgroundColor: 'transparent' } : { backgroundColor: 'rgb(0,0,0,.1)' }}>

                            <Td align='center'>{item.reservationReferenceNumber}</Td>
                            <Td align='center'>{new Date(item.reservationDate).toLocaleDateString()} {new Date(item.reservationDate).toLocaleTimeString()}</Td>
                            <Td align='center'>{item.reservationStatus}</Td>
                            <Td align='center'><a style={{cursor: 'pointer', color: 'blue'}} onClick={() => { view(item.id) }}>view</a></Td>
                            {/* <Td align='center'>{item.numberOfNights}</Td>
                            <Td align='center'>{numberFormat(item.room.roomType.roomRate)}</Td>
                            <Td align='center' style={{ color: 'red' }}>{numberFormat(item.room.roomType.roomRate * item.numberOfNights)}</Td> */}
                        </Tr>

                    ))}
                </TableContainer>

            </MainContainer>



        </Container>
    )
}

export default ClientBookingInfoCont