import React, { useEffect, useState } from 'react'
import { Container, PhotoBox } from './Styles'
import { Title } from '../../components/title/styles'
import { Button, Button2, FormButton } from '../../components/button/styles';
import { Status, StatusContainer } from '../clientBookingInfo/Styles';
import { TableContainer, Td, Th, Tr } from '../bookingCartPage/Styles'
import { ChargeSummaryContainer } from '../bookingConfirmation/Styles';
import { MainContainer, MessagesTitleContainer } from '../clientMessagesCont/Styles';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { Box, padding } from '@mui/system';

const ClientPaymentInfoCont = () => {
    const [activeReservation, setActiveReservation] = useState([])
    const [reservation, setReservation] = useState([])
    const [previewImage, setPreviewImage] = useState('')
    const [previewImageError, setPreviewImageError] = useState('')
    const [imageToUpload, setImageToUpload] = useState([])
    const numberFormat = (value) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'PHP'
        }).format(value);

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

                if (index == 0) {
                    setActiveReservation(items)
                }
            })));
        }
    }, [reservation])

    const view = (value) => {
        reservation.map((item) => {
            if (value == item.id) {
                setActiveReservation(item)
            }
        })
    }

    const imgTypes = ['image/png', 'image/jpeg',]
    const handleUpload = (e) => {
        setImageToUpload(e.target.files[0])
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && imgTypes.includes(selectedFile.type)) {
                setPreviewImage(URL.createObjectURL(selectedFile));
                setPreviewImageError('')
            }
            else {
                setPreviewImage(null)
                setPreviewImageError('Invalid file type. Please provide jpg/jpeg/png image type only.')
            }
        }
        else {

        }
    }

    const uploadImage = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('paymentImage', imageToUpload)
        if (previewImageError.length == 0 && imageToUpload.length != 0) {
            if (activeReservation.payment.paymentImage != null) {
                axios.post('http://localhost:3001/api/deleteImage', {
                    filePath: activeReservation.payment.paymentImage,
                }).then((result) => {
                    console.log(result.data)
                    axios.patch('http://localhost:3001/api/updatePaymentPhoto/' + activeReservation.payment.id, formData).then((result) => {
                        console.log(result.data)
                        window.location.reload()
                    }).catch((err) => {
                        console.log(err.data)

                    });
                }).catch((err) => {
                    console.log(err.data)

                });
            }
            else {
                console.log(activeReservation.payment.paymentImage)
                axios.patch('http://localhost:3001/api/updatePaymentPhoto/' + activeReservation.payment.id, formData).then((result) => {
                    console.log(result.data)
                    window.location.reload()
                }).catch((err) => {
                    console.log(err.data)

                });
            }
        }
    }

    const paymentStatusStyle = (value) => {
        if (value.payment.paymentStatus.toUpperCase() == 'PENDING') {
            return <div>
                <StatusContainer>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='normal'
                        size='24px'
                        fstyle='Normal'
                        align='Center'
                    >
                        Reservation reference Number:
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='700'
                        size='24px'
                        fstyle='Normal'
                        align='Center'
                    >
                        {value.reservationReferenceNumber}
                    </Title>
                </StatusContainer>
                <StatusContainer>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='normal'
                        size='24px'
                        fstyle='Normal'
                        align='Center'
                    >
                        Payment Status:
                    </Title>

                    <Title
                        family='raleway, sans-serif'
                        color='#CDA141'
                        weight='700'
                        size='24px'
                        fstyle='Normal'
                        align='Center'
                    >{value.payment.paymentStatus.toUpperCase()}</Title>
                </StatusContainer>
                <Title
                    family='poppins, sans-serif'
                    weight='700'
                    fstyle='Normal'
                    size='20px'
                    color='black'
                    align='center'
                    margin='10px 100px 20px 100px'
                >
                    <p style={{ fontWeight: 'normal' }}>To confirm your reservation please make your deposit amounting <b>{value.payment.paymentType == 'Down Payment' ? numberFormat(value.payment.grandTotal / 2) : numberFormat(value.payment.grandTotal)}</b> within the next 24 hours.<br></br> <i>"{value.length != 0 ? new Date(new Date(value.reservationDate).getTime() + 60 * 60 * 24 * 1000).toLocaleDateString() + " " + new Date(value.reservationDate).toLocaleTimeString() : ''}"</i></p>
                </Title>
            </div>
        }
        else if (value.payment.paymentStatus.toUpperCase() == 'FULLY PAID') {
            return <div>
                <StatusContainer>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='normal'
                        size='24px'
                        fstyle='Normal'
                        align='Center'
                    >
                        Reservation reference Number:
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='700'
                        size='24px'
                        fstyle='Normal'
                        align='Center'
                    >
                        {value.reservationReferenceNumber}
                    </Title>
                </StatusContainer>
                <StatusContainer>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='normal'
                        size='24px'
                        fstyle='Normal'
                        align='Center'
                    >
                        Payment Status:
                    </Title>

                    <Title
                        family='raleway, sans-serif'
                        color='green'
                        weight='700'
                        size='24px'
                        fstyle='Normal'
                        align='Center'
                    >{value.payment.paymentStatus.toUpperCase()}</Title>
                </StatusContainer>
                <Title
                    family='poppins, sans-serif'
                    weight='700'
                    fstyle='Normal'
                    size='20px'
                    color='black'
                    align='center'
                    margin='10px 100px 20px 100px'
                >
                    <p style={{ fontWeight: 'normal' }}> Your payment has been verified. Thank you!</p>
                </Title>
            </div>
        }
        else if (value.payment.paymentStatus.toUpperCase() == 'PARTIAL') {
            return <div>
                <StatusContainer>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='normal'
                        size='24px'
                        fstyle='Normal'
                        align='Center'
                    >
                        Reservation reference Number:
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='700'
                        size='24px'
                        fstyle='Normal'
                        align='Center'
                    >
                        {value.reservationReferenceNumber}
                    </Title>
                </StatusContainer>
                <StatusContainer>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='normal'
                        size='24px'
                        fstyle='Normal'
                        align='Center'
                    >
                        Payment Status:
                    </Title>

                    <Title
                        family='raleway, sans-serif'
                        color='blue'
                        weight='700'
                        size='24px'
                        fstyle='Normal'
                        align='Center'
                    >{value.payment.paymentStatus.toUpperCase()}</Title>
                </StatusContainer>
                <Title
                    family='poppins, sans-serif'
                    weight='700'
                    fstyle='Normal'
                    size='20px'
                    color='black'
                    align='center'
                    margin='10px 100px 20px 100px'
                >
                    <p style={{ fontWeight: 'normal' }}> Your payment has been varified. Thank you!</p>
                </Title>
            </div>
        }
        else if (value.payment.paymentStatus.toUpperCase() == 'CANCELLED') {
            return <div>
                <StatusContainer>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='normal'
                        size='24px'
                        fstyle='Normal'
                        align='Center'
                    >
                        Reservation reference Number:
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='700'
                        size='24px'
                        fstyle='Normal'
                        align='Center'
                    >
                        {value.reservationReferenceNumber}
                    </Title>
                </StatusContainer>
                <StatusContainer>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='normal'
                        size='24px'
                        fstyle='Normal'
                        align='Center'
                    >
                        Payment Status:
                    </Title>

                    <Title
                        family='raleway, sans-serif'
                        color='red'
                        weight='700'
                        size='24px'
                        fstyle='Normal'
                        align='Center'
                    >{value.payment.paymentStatus.toUpperCase()}</Title>
                </StatusContainer>
                <Title
                    family='poppins, sans-serif'
                    weight='700'
                    fstyle='Normal'
                    size='20px'
                    color='black'
                    align='center'
                    margin='10px 100px 20px 100px'
                >
                    <p style={{ fontWeight: 'normal' }}> Thank you for choosing RM Luxe Hotel. Unfortunately, your payment has been <b>CANCELLED </b> due to unsettled fees. If you have already send your proof of payment yet received this message, maybe your payment is not yet verified. Kindly disregard this and we will send you another email and update your payment status once your booking is confirmed.</p>
                </Title>
            </div>
        }
        else if (value.payment.paymentStatus.toUpperCase() == 'RECIEPT DECLINED') {
            return <div>
                <StatusContainer>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='normal'
                        size='24px'
                        fstyle='Normal'
                        align='Center'
                    >
                        Reservation reference Number:
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='700'
                        size='24px'
                        fstyle='Normal'
                        align='Center'
                    >
                        {value.reservationReferenceNumber}
                    </Title>
                </StatusContainer>
                <StatusContainer>
                    <Title
                        family='raleway, sans-serif'
                        color='#292929'
                        weight='normal'
                        size='24px'
                        fstyle='Normal'
                        align='Center'
                    >
                        Payment Status:
                    </Title>

                    <Title
                        family='raleway, sans-serif'
                        color='red'
                        weight='700'
                        size='24px'
                        fstyle='Normal'
                        align='Center'
                    >{value.payment.paymentStatus.toUpperCase()}</Title>
                </StatusContainer>
                <Title
                    family='poppins, sans-serif'
                    weight='700'
                    fstyle='Normal'
                    size='20px'
                    color='black'
                    align='center'
                    margin='10px 100px 20px 100px'
                >
                    <p style={{ fontWeight: 'normal' }}> The proof of payment that you have uploaded may not be verified either because of the image quality. Kindly upload a clear and valid photo of your receipt for verification. Thank you!</p>
                </Title>
            </div>
        }
    }
    return (
        <Container>
            {activeReservation.length != 0 ?
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
                    Upload Proof of Payment
                </Title> : ""}

            {activeReservation.length != 0 ?
                <div>

                    {paymentStatusStyle(activeReservation)}
                </div>
                :
                <Title
                    margin='100px'
                >Sorry but you don't have any reservations to pay.</Title>
            }


            {activeReservation.length != 0 ?
                <PhotoBox>
                    <div style={{ width: '95%', height: 'auto', overflow: 'hidden', padding: '10px' }}>
                        {activeReservation.payment.paymentImage != null ?
                            <a target='_blank' href={'http://localhost:3001/' + activeReservation.payment.paymentImage}><img src={'http://localhost:3001/' + activeReservation.payment.paymentImage} style={{ width: '100%', height: 'auto' }} /></a>
                            : <Title
                                bg='white'
                                family='raleway, sans-serif'
                                color='#BFA698'
                                weight='400'
                                size='25px'
                                fstyle='Normal'

                                align='Center'
                            >
                                No Image Uploaded
                            </Title>
                        }
                    </div>

                </PhotoBox>
                :
                ""

            }

            {activeReservation.length != 0 ?
                <Box
                    component='form'
                    onSubmit={uploadImage}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                    <div style={{ width: '700px', display: 'flex', justifyContent: 'center' }}>
                        <p style={{ color: 'red' }}>{previewImageError}</p>
                        <a target="_blank" href={previewImage}><img src={previewImage} width='200px' height='auto' style={{ border: '1px solid black', cursor: 'pointer' }} /></a>
                    </div>
                    {activeReservation.payment.paymentStatus == 'partial' || activeReservation.payment.paymentStatus == 'fully paid' || activeReservation.payment.paymentStatus == 'cancelled' ? "" : <div
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <FormButton
                            w='200px'
                            h='30px'
                            border="none"
                            margin='20px 0px 0px 0px'
                            fontsize='16px'
                            type='file'
                            textcolor='black'
                            id='upload'
                            onChange={handleUpload}
                        />
                        <Button2
                            // whileHover={{ backgroundColor: "#302B20", color: "#A3987D" }}
                            w='150px'
                            h='40px'
                            textcolor='#A3987D'
                            fam='raleway'
                            weight='-400'
                            fontStyle='normal'
                            radius="0px"
                            border="1px solid #9E9174"
                            margin='10px 0px 90px 0px'
                            fontsize='16px'
                            bg={previewImageError.length != 0 || previewImage.length == 0 ? 'rgb(0,0,0,0.2)' : '#302B20'}
                            disabled={previewImageError.length != 0 || previewImage.length == 0 ? true : false}
                            // onClick={uploadImage}
                            type='submit'
                        >
                            Upload
                        </Button2></div>}
                </Box>
                :
                ""}


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
                <div style={{ width: '100%', overflowY: 'auto' }}>
                    <TableContainer style={{ height: '100%', margin: '0px' }}
                        cellspacing="0"
                        cellpadding="0">
                        <Tr bg="transparent">
                            <Th bg='#DFD3B9' color='#2e2e2e' align='center'>Reservation Number</Th>
                            <Th bg='#DFD3B9' color='#2e2e2e' align='center'>Payment Type</Th>
                            <Th bg='#DFD3B9' color='#2e2e2e' align='center'>Payment Made</Th>
                            <Th bg='#DFD3B9' color='#2e2e2e' align='center'>Remaining Balance</Th>
                            <Th bg='#DFD3B9' color='#2e2e2e' align='center'>Grand total</Th>
                            <Th bg='#DFD3B9' color='#2e2e2e' align='center'>Payment Status</Th>
                            <Th bg='#DFD3B9' color='#2e2e2e' align='center'>Proof of Payment</Th>
                            <Th bg='#DFD3B9' color='#2e2e2e' align='center'>Actions</Th>

                        </Tr>
                        {
                            reservation.map((item, index) => (

                                <Tr style={index % 2 == 0 ? { backgroundColor: 'transparent' } : { backgroundColor: 'rgb(0,0,0,.1)' }}>

                                    <Td style={item.id == activeReservation.id ? { backgroundColor: 'green', color: 'black' } : { backgroundColor: 'transparent' }} align='center'>{item.reservationReferenceNumber}</Td>
                                    <Td style={item.id == activeReservation.id ? { backgroundColor: 'green', color: 'black' } : { backgroundColor: 'transparent' }} align='center'>{item.payment.paymentType}</Td>
                                    <Td style={item.id == activeReservation.id ? { backgroundColor: 'green', color: 'black' } : { backgroundColor: 'transparent' }} align='center'>{numberFormat(item.payment.paymentMade)}</Td>
                                    <Td style={item.id == activeReservation.id ? { backgroundColor: 'green', color: 'black' } : { backgroundColor: 'transparent' }} align='center'>{numberFormat(item.payment.balance)}</Td>
                                    <Td style={item.id == activeReservation.id ? { backgroundColor: 'green', color: 'black' } : { backgroundColor: 'transparent' }} align='center'>{numberFormat(item.payment.grandTotal)}</Td>
                                    <Td style={item.id == activeReservation.id ? { backgroundColor: 'green', color: 'black' } : { backgroundColor: 'transparent' }} align='center'>{item.payment.paymentStatus}</Td>
                                    <Td style={item.id == activeReservation.id ? { backgroundColor: 'green', color: 'black' } : { backgroundColor: 'transparent' }} align='center'>{item.payment.paymentImage != null ? "Uploaded" : "Not uploaded"}</Td>
                                    <Td style={item.id == activeReservation.id ? { backgroundColor: 'green', color: 'black' } : { backgroundColor: 'transparent' }} align='center'><a style={item.id == activeReservation.id ? { cursor: 'normal', color: 'black' } : { cursor: 'pointer', color: 'blue' }} onClick={() => { view(item.id); document.getElementById("upload").value = ""; setPreviewImage('') }}>view</a></Td>
                                    {/* <Td align='center'>{item.numberOfNights}</Td>
                                <Td align='center'>{numberFormat(item.room.roomType.roomRate)}</Td>
                                <Td align='center' style={{ color: 'red' }}>{numberFormat(item.room.roomType.roomRate * item.numberOfNights)}</Td> */}
                                </Tr>

                            ))
                        }
                    </TableContainer>
                </div>


            </MainContainer>

        </Container>
    )
}

export default ClientPaymentInfoCont