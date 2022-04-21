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
            <Th align='center'>Room No.</Th>
            <Th align='center'>Check In</Th>
            <Th align='center'>Check Out</Th>
            <Th align='center'>Price</Th>
            <Th align='center'>No. of Nights</Th>
            <Th align='center'>Amount</Th>
            <Th align='center'>Action</Th>
          </Tr>
          <Tr>
            <Td align='center'>101</Td>
            <Td align='center'>01/14/2022</Td>
            <Td align='center'>01/17/2022</Td>
            <Td align='center'>PHP 3000.00</Td>
            <Td align='center'>3</Td>
            <Td align='center'>PHP 9000.00</Td>
            <Td align='center'>
              <IconButton type="submit" sx={{ p: '8px', backgroundColor: 'rgb(255, 36, 0, 0.7)' }} aria-label="search" title='Delete'>
                    <DeleteIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
                </IconButton></Td>
          </Tr>
        </TableContainer>


      </FlexboxContainer>
      <FlexboxContentMain>
        <Button
          bg='#60553F'
          w='100px'
          h='30px'
          margin='5px 0px 0px 0px'
          padding='0.5px'
          fam='Raleway'
          fontStyle='normal'
        >
          Add More
        </Button>
        <Button
          bg='#60553F'
          w='100px'
          h='30px'
          margin='5px 0px 0px 0px'
          padding='0.5px'
          fam='Raleway'
          fontStyle='normal'
        >
          Continue
        </Button>
      </FlexboxContentMain>
    </Container>
  )
}

export default BookingCartPageCont