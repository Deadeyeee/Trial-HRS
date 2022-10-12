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
        if (value == 'PENDING') {
            return <Title
            family='raleway, sans-serif'
            color='yellow'
            weight='700'
            size='24px'
            fstyle='Normal'
            align='Center'
        >{value}</Title>
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
                Payment Status
            </Title>
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
                    {activeReservation.length != 0 ? activeReservation.reservationReferenceNumber : ''}
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

                {activeReservation.length != 0 ? paymentStatusStyle(activeReservation.payment.paymentStatus.toUpperCase()) : ''}
            </StatusContainer>
            <Title
                family='poppins, sans-serif'
                weight='700'
                fstyle='Normal'
                size='15px'
                color='#ff4040'
                align='center'
                margin='10px 0px 20px 0px'
            >
                <b>***Please make your deposit. Three days before your Check-In Date to confirm your reservation***</b>
            </Title>
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
            </Title>
            <PhotoBox>
                {activeReservation.length != 0 ?
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
                    :
                    ""

                }

            </PhotoBox>
            <div style={{ width: '700px', display: 'flex', justifyContent: 'center' }}>
                <p style={{ color: 'red' }}>{previewImageError}</p>
                <a target="_blank" href={previewImage}><img src={previewImage} width='200px' height='auto' style={{ border: '1px solid black', cursor: 'pointer' }} /></a>
            </div>
            <Box
                component='form'
                onSubmit={uploadImage}
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
                    Save
                </Button2>
            </Box>


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
                                    <Td style={item.id == activeReservation.id ? { backgroundColor: 'green', color: 'black' } : { backgroundColor: 'transparent' }} align='center'>{item.payment.paymentMade}</Td>
                                    <Td style={item.id == activeReservation.id ? { backgroundColor: 'green', color: 'black' } : { backgroundColor: 'transparent' }} align='center'>{item.payment.balance}</Td>
                                    <Td style={item.id == activeReservation.id ? { backgroundColor: 'green', color: 'black' } : { backgroundColor: 'transparent' }} align='center'>{item.payment.grandTotal}</Td>
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