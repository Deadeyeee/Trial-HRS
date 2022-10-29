import React, { useEffect, useState } from 'react'
import { BankContentContainer, BankDetailsContainer, BankTitleContainer, BrokenHorizontalLine, ButtonHolder, ChargeSummaryContainer, ChargeSummaryContentContainer, Container, GeneratedAccountContainer, GeneratedAccountContentContainer, GeneratedAccountContents, HorizontalLine, ReservationInformationContainer, ReservationInformationContentsContainer } from './Styles'
import { Title } from '../../components/title/styles';
import { Button } from '../../components/button/styles';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ContainerGlobal } from '../../../admin/components/container/container';
import { TableContainer, Td, Th, Tr } from '../bookingCartPage/Styles'
import { apiKey } from '../../../apiKey';

function BookingConfirmationCont() {

    const [reservedBooking, setReservationBooking] = useState([]);
    const { id } = useParams();
    const [grandTotal, setGrandTotal] = useState(0);
    const [reservationInfo, setReservationInfo] = useState([]);
    const [logedIn, setLogedIn] = useState(false);
    useEffect(() => {
        axios.get(apiKey + 'api/getAllReservationSummary').then((result) => {
            setReservationBooking([])
            for (let index = 0; index < result.data.length; index++) {
                if (id == result.data[index].reservation_id) {
                    setReservationBooking((oldData) => [...oldData, result.data[index]])
                    console.log('ey')
                }
            }
        }).catch((err) => {
            console.log(err)

        });

        axios.get(apiKey + 'api/getReservation/' + id).then((result) => {
            setReservationInfo(result.data)
        }).catch((err) => {
            console.log(err)

        });

        axios.get(apiKey+"auth/verify-token").then((response) => {
            if (response.status === 200) {
                setLogedIn(true)
            }
            else{
                setLogedIn(false)
            }
        });
    }, [])

    useEffect(() => {
        setGrandTotal(0);
        reservedBooking.map((item) => (
            setGrandTotal((prevValue) => prevValue + (item.room.roomType.roomRate * item.numberOfNights))
        ))
    }, [reservedBooking])



    useEffect(() => {
        console.log(reservedBooking)
    }, [reservedBooking])



    const numberFormat = (value) =>
        new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'PHP'
        }).format(value);


    const reservationStatus = (value) => {
        console.log(value)
        if (value != null) {
            if (value.toLowerCase() == 'pending') {
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
                    Your reservation is <b style={{ color: '#c9d81c' }}>{value}</b> until confirmation of Bank Deposit/Transfer is made.
                </Title>
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
        }
    }
    return (
        <Container>
            <Title
                weight='400'
                size='66px'
                fstyle='Normal'
                margin='100px 0px 10px 0px'
                align='Center'
                color='#bfaa7e'
            >
                Booking Confirmation
            </Title>
            <HorizontalLine></HorizontalLine>
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
                Thank you for choosing <b>RM Luxe Hotel</b>
            </Title>
            {
                reservationInfo != [] && reservationStatus(reservationInfo.reservationStatus)
            }
            <Title
                family='raleway, sans-serif'
                color='#292929'
                weight='400'
                size='25px'
                fstyle='Normal'
                margin='25px 0px 10px 0px'
                align='Center'

            >
                <b>Instructions on how to make the payment:</b>
            </Title>
            <Title
                family='raleway, sans-serif'
                color='#292929'
                overflow='visible'
                weight='400'
                size='25px'
                fstyle='Normal'
                margin='25px 0px 10px 0px'
                align='Center'

            >
                Deposit payment through our bank account:
            </Title>
            <BankDetailsContainer>

                <BankTitleContainer>
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
                            {reservationInfo.length != 0 && reservationInfo.payment.paymentMode.billerName}
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
                            {reservationInfo.length != 0 && reservationInfo.payment.paymentMode.accountName}
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
                            {reservationInfo.length != 0 && reservationInfo.payment.paymentMode.accountNumber}
                        </Title>
                    </ContainerGlobal>

                </BankTitleContainer>


            </BankDetailsContainer>
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
                    To confirm your reservation, <b>
                        please make your deposit amounting
                        {reservationInfo.length != 0 ?
                            reservationInfo.payment.paymentType == 'Down Payment' ? ' ' +
                                numberFormat(reservationInfo.payment.grandTotal / 2) + ' until ' + new Date(new Date(reservationInfo.reservationDate).getTime() + 60 * 60 * 24 * 1000).toLocaleDateString() + " " + new Date(reservationInfo.reservationDate).toLocaleTimeString()
                                :
                                numberFormat(reservationInfo.payment.grandTotal) + ' until ' + new Date(new Date(reservationInfo.reservationDate).getTime() + 60 * 60 * 24 * 1000).toLocaleDateString() + " " + new Date(reservationInfo.reservationDate).toLocaleTimeString()
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
                >
                    For further information, please send an email to <a target='_blank' href='mailto: Rm.LuxeHotel@gmail.com'>Rm.LuxeHotel@gmail.com</a>, or <a href='/login'>message us</a> through your account. You will find the details of your reservation made below.
                </Title>
            </BankContentContainer>
            <Title
                family='poppins, sans-serif'
                weight='700'
                fstyle='Normal'
                size='36px'
                color='#ff4040'
                align='center'
                margin='10px 0px 25px 0px'
            >
                <b>***IMPORTANT***</b>
            </Title>
            <GeneratedAccountContainer>
                {/* <Title
                    family='raleway, sans-serif'
                    weight='700'
                    fstyle='Normal'
                    size='36px'
                    color='#2e2e2e'
                    align='center'
                    margin='25px 200px'
                >
                    <b>Your User Account</b>
                </Title>
                <GeneratedAccountContentContainer>
                    <GeneratedAccountContents>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                            margin='25px 200px'
                        >
                            User Name
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                            margin='25px 200px'
                        >
                            Password
                        </Title>
                    </GeneratedAccountContents>
                    <GeneratedAccountContents>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                            margin='25px 100px'
                        >
                            <b>: Pedrojuan001221</b>
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                            margin='25px 100px'
                        >
                            <b>: ********</b>
                        </Title>
                    </GeneratedAccountContents>
                </GeneratedAccountContentContainer> */}
                <Title
                    family='raleway, sans-serif'
                    weight='700'
                    fstyle='Italic'
                    size='25px'
                    color='#2e2e2e'
                    align='Center'
                    margin='10px 60px 10px 60px'
                >
                    <b>Please Check your email for your log in information to check your reservation status. Send your proof of payment, Check your informations, and message us.</b>
                </Title>
            </GeneratedAccountContainer>
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
            <ReservationInformationContainer>

                <ReservationInformationContentsContainer>
                    <ContainerGlobal
                        justify='space-between'
                    >
                        {/* <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            Reservation Number.
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            <b>: 091234568</b>
                        </Title> */}
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
                            Reservation Number:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            <b>{reservationInfo.length != 0 && reservationInfo.reservationReferenceNumber}</b>
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
                            Reservation Date:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            <b>{reservationInfo.length != 0 && new Date(reservationInfo.reservationDate).toLocaleDateString()}</b>
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
                            Payment Mode:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            <b>{reservationInfo.length != 0 && reservationInfo.payment.paymentMode.paymentMode}</b>
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
                            Payment Type:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            <b>{reservationInfo.length != 0 && reservationInfo.payment.paymentType}</b>
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
                            Guest Name:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            <b>{reservationInfo.length != 0 && reservationInfo.guestInformation.firstName.toLowerCase()}  {reservationInfo.length != 0 && reservationInfo.guestInformation.lastName.toLowerCase()}</b>
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
                            Birthdate:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            <b>{reservationInfo.length != 0 && new Date(reservationInfo.guestInformation.birthDate).toLocaleDateString()}</b>
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
                            Nationality:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            <b>{reservationInfo.length != 0 && reservationInfo.guestInformation.nationality.toLowerCase()}</b>
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
                            Email Address:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            <b>{reservationInfo.length != 0 && reservationInfo.guestInformation.user.email.toLowerCase()}</b>
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
                            Address:
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
                            <b>{reservationInfo.length != 0 && reservationInfo.guestInformation.address.toLowerCase()}</b>
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
                            Contact Number:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            <b>{reservationInfo.length != 0 && reservationInfo.guestInformation.user.contactNumber.toLowerCase()}</b>
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
                        <Th bg='transparent' color='#2e2e2e' align='center'>Room type</Th>
                        <Th bg='transparent' color='#2e2e2e' align='center'>Check in</Th>
                        <Th bg='transparent' color='#2e2e2e' align='center'>Check out</Th>
                        <Th bg='transparent' color='#2e2e2e' align='center'>Total nights</Th>
                        <Th bg='transparent' color='#2e2e2e' align='center'>Rate per night</Th>
                        <Th bg='transparent' color='#2e2e2e' align='center'>Total amout due</Th>
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
            <BrokenHorizontalLine></BrokenHorizontalLine>
            <ChargeSummaryContainer>
                <ChargeSummaryContentContainer>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='30px'
                        color='#2e2e2e'
                        align='left'
                        margin='0px 100px 0px 0px'
                    >
                        <b>Grand Total:</b>
                    </Title>
                </ChargeSummaryContentContainer>
                <ChargeSummaryContentContainer>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fstyle='Normal'
                        size='30px'
                        color='#13ed34'
                        align='left'
                        margin='0px 0px 0px 100px'
                    >
                        {numberFormat(grandTotal)}
                    </Title>
                </ChargeSummaryContentContainer>

            </ChargeSummaryContainer>
            <center style={{ marginBottom: '40px', }}>
                <b>NOTE!:</b> Discount will only take effect upon check-in. Please present your valid id to our frontdesk to confirm your discount. Thank you
            </center>
            <ButtonHolder>
                <Button
                    whileHover={{ backgroundColor: "#302B20", color: "white" }}
                    w='200px'
                    h='60px'
                    textcolor="black"
                    fam='Times New Roman'
                    weight='-400'
                    fontStyle='Italic'
                    radius="0px"
                    border="1px solid #8F805F"
                    margin='30px 100px 0px 0px'
                    fontsize='16px'
                    bg='#DFD3B9'
                    href={logedIn == false? '/login' : '/client/profile'}
                >
                    {logedIn == false? 'Login' : 'Go to profile'}
                </Button>
                <Button
                    whileHover={{ backgroundColor: "#White", color: "black" }}
                    w='200px'
                    h='60px'
                    textcolor="white"
                    fam='Times New Roman'
                    weight='-400'
                    fontStyle='Italic'
                    radius="0px"
                    border="1px solid #8F805F"
                    margin='30px 0px 0px 100px'
                    fontsize='16px'
                    bg='#2e2e2e'
                >
                    Print/Save as PDF
                </Button>
            </ButtonHolder>
        </Container>
    )
}

export default BookingConfirmationCont