import React from 'react'
import { Button } from '../../components/button/styles'
import { Title } from '../../components/title/styles'
import { BrownTab, Container, FlexboxContainer, FlexboxContentMain, TableContainer, Td, Th, Tr } from './Styles'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
const BookingCartPageCont = () => {
  return (
    <Container>
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
            <Th align='center'>Room number</Th>
            <Th align='center'>Room type</Th>
            <Th align='center'>Check in</Th>
            <Th align='center'>Check out</Th>
            <Th align='center'>Total nights</Th>
            <Th align='center'>Rate per night</Th>
            <Th align='center'>Total amout due</Th>
            {/* <Th align='center'>Action</Th> */}
          </Tr>
          <Tr>
            <Td align='center'>102</Td>
            <Td align='center'>Premium Room</Td>
            <Td align='center'>03/04/2022</Td>
            <Td align='center'>03/08/20222</Td>
            <Td align='center'>4</Td>
            <Td align='center'>PHP 2,000.00</Td>
            <Td align='center' style={{color: 'red'}}>PHP 8,000.00</Td>
            {/* <Td align='center'>
              <IconButton type="submit" sx={{ p: '8px', backgroundColor: 'rgb(255, 36, 0, 0.7)' }} aria-label="search" title='Delete'>
                    <DeleteIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
                </IconButton></Td> */}
          </Tr>
        </TableContainer>


      </FlexboxContainer>
      <FlexboxContentMain>
      <Button
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
                 href='/guestInformation'
            >
                Proceed
            </Button>
            <Button
                 whileHover={{ color: "#0C4426" }}
                 w='100px'
                 h='40px'
                 textcolor='#FFFFFF'
                 fam='Times New Roman, serif'
                 weight='-400'
                 fontStyle='Italic'
                 radius="0px"
                 margin='20px 0px 40px 0px'
                 fontsize='16px'
                 bg='#FF9292'
                 href = '/booking/room'
            >
                Cancel
            </Button>
      </FlexboxContentMain>
    </Container>
  )
}

export default BookingCartPageCont