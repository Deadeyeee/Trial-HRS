import React from 'react'
import { Button } from '../../components/button/styles'
import { Title } from '../../components/title/styles'
import { BrownTab, Container, FlexboxContainer, FlexboxContentMain, TableContainer, Td, Th, Tr } from './Styles'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';
import { CheckCircleOutline, Close, HighlightOffSharp } from '@mui/icons-material';
import logo from '../../images/logo.png';

import { useState } from 'react';
import { Box, CircularProgress, Grow, Modal } from '@mui/material';
const BookingCartPageCont = () => {
  const [bookingInformation, setBookingInformation] = useState([])
  const [grandTotal, setGrandTotal] = useState(0);


  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Please wait...')
  const [status, setStatus] = useState('loading')

  const handleOpenIsLoading = () => {
    setIsLoading(true);
    setStatus('loading')
    setLoadingMessage('Please wait...')
  }

  const handleCloseIsLoading = (status, link) => {

    if (status == 1 || status === undefined) {
      setStatus('loading')
      setLoadingMessage('')
    }
    else if (status == 2) {
      setStatus('success')
      setLoadingMessage('')
    }
    else if (status == 3) {
      setStatus('failed')
      setLoadingMessage('')
    }

    setTimeout(() => {
      setIsLoading(false);
      console.log(link)
      if (link !== undefined) {
        window.location = link;
      }
    }, 1000)
  }

  const loadingStatus = (value) => {
    if (value == 'loading') {
      return <CircularProgress></CircularProgress>;
    }
    else if (value == 'success') {
      return <Grow in={true}><CheckCircleOutline style={{ color: 'green', fontSize: '80px' }} /></Grow>;
    }
    else if (value == 'failed') {
      return <Grow in={true}><HighlightOffSharp style={{ color: 'red', fontSize: '80px' }} /></Grow>;
    }
  }

  useEffect(() => {

    if (JSON.parse(window.sessionStorage.getItem("AvailedRoom")).length == 0 || window.sessionStorage.getItem("AvailedRoom") == null) {
      window.location = "/booking"
    }
    setBookingInformation(JSON.parse(window.sessionStorage.getItem("AvailedRoom")))
  }, [])

  useEffect(() => {
    setGrandTotal(0);
    bookingInformation.map((item) => (
      setGrandTotal((prevValue) => prevValue + (item.roomRate * item.roomQuantity * item.nights))
    ))
  }, [bookingInformation])

  const numberFormat = (value) =>
    new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'PHP'
    }).format(value);

  const DeleteRoom = (index) => {
    bookingInformation.splice(index, 1);
    window.sessionStorage.setItem('AvailedRoom', JSON.stringify(bookingInformation))
    window.location.reload(false);

  }



  return (
    <Container>


      <Modal
        open={isLoading}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none'
        }}>
        <Box
          component='form'
          style={{
            height: '300px',
            width: '400px',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            overflowY: 'overlay',
            overflowX: 'hidden',
            borderRadius: '.5rem',
            position: 'relative',
            border: 'none'
            // margin: '50px 0px',

          }}>
          <div style={{ margin: '10px', display: 'flex', width: '400px', height: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <img src={logo} width="35%"></img>
            {loadingStatus(status)}
            <h1 style={{ fontWeight: 'normal', margin: '0px' }}>{loadingMessage}</h1>
          </div>
        </Box>
      </Modal>





      <FlexboxContainer>
        <Title
          color='#2e2e2e'
          weight='normal'
          size='50px'
          w='100%'
        >
          Booking Details
        </Title>
        <TableContainer
          cellspacing="0"
          cellpadding="0">
          <Tr>
            <Th align='center'>Room type</Th>
            <Th align='center'>Check in</Th>
            <Th align='center'>Check out</Th>
            <Th align='center'>Total nights</Th>
            <Th align='center'>Room quantity</Th>
            <Th align='center'>Rate per night</Th>
            <Th align='center'>Total amout due</Th>
            <Th align='center'>Action</Th>
          </Tr>
          {bookingInformation.map((item, index) => (

            <Tr>

              <Td align='center'>{item.roomName}</Td>
              <Td align='center'>{item.checkIn}</Td>
              <Td align='center'>{item.checkOut}</Td>
              <Td align='center'>{item.nights}</Td>
              <Td align='center'>{item.roomQuantity}</Td>
              <Td align='center'>{numberFormat(item.roomRate)}</Td>
              <Td align='center' style={{ color: 'red' }}>{numberFormat(item.roomRate * item.roomQuantity * item.nights)}</Td>
              <Td align='center'>
                <IconButton type="submit" sx={{ p: '8px', backgroundColor: 'rgb(255, 36, 0, 0.7)' }} aria-label="search" title='Delete' onClick={() => { DeleteRoom(index) }}>
                  <DeleteIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
                </IconButton></Td>
            </Tr>

          ))}
          <Tr rowSpan={2} style={{ backgroundColor: 'transparent' }}>
            <Td align='center' ></Td>
            <Td align='center'></Td>
            <Td align='center'></Td>
            <Td align='center'></Td>
            <Td colSpan={2} align='center' style={{ fontSize: '40px' }}>Grand Total:</Td>
            <Td align='center' style={{ fontSize: '40px', fontWeight: 'normal', color: 'red' }}>{numberFormat(grandTotal)}</Td>
            <Td align='center'></Td>
          </Tr>
        </TableContainer>


      </FlexboxContainer>
      <FlexboxContentMain>
        <Button
          // whileHover={{ backgroundColor: "#0C4426", color: "white" }}
          w='200px'
          h='60px'
          fam='Playfair Display, serif'
          weight='-400'
          fontStyle='Normal'
          radius="0px"
          border="1px solid #0C4426"
          margin='30px 0px 0px 0px'
          bg='#0C4426'
          textcolor='white'
          fontsize='23px'
          href='/guestInformation'
        >
          Proceed!
        </Button>
        <Button
          // whileHover={{ backgroundColor: "#0C4426", color: "white" }}
          w='180px'
          h='40px'
          textcolor="#0C4426"
          fam='Playfair Display, serif'
          weight='-400'
          fontStyle='Normal'
          radius="0px"
          border="1px solid #0C4426"
          margin='30px 0px 0px 0px'
          fontsize='23px'
          href='/booking'
        >
          Book more!
        </Button>

      </FlexboxContentMain>
    </Container>
  )
}

export default BookingCartPageCont