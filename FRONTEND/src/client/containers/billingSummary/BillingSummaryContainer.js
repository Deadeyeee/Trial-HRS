import React from 'react'
import { Title } from '../../components/title/styles'
import { BrownTab, Container, FlexboxContainer, HeadContainer, TabContainer, TableColumn, TableContainer, TableRow, Td, Th, Tr } from './Styles'

const BillingSummaryContainer = () => {
  return (
    <Container>
        <FlexboxContainer>
        <HeadContainer>
            <Title
                size='20px'
                color='#C59537'
                family='Raleway'
                fstyle='normal'
                weight='500'
                align='left'
                margin='20px 0px 20px 30px'
            >
                Guest Information
            </Title>
        </HeadContainer>
        <TabContainer>
        <TableContainer>
        <Title
                size='15px'
                color='#2e2e2e'
                family='Raleway'
                fstyle='normal'
                weight='500'
                align='left'
                margin='20px 0px 20px 30px'
            >
                Name: PEDRO PENDUCO
            </Title>
            <Title
                size='15px'
                color='#2e2e2e'
                family='Raleway'
                fstyle='normal'
                weight='500'
                align='left'
                margin='20px 0px 20px 30px'
            >
                Contact Number: 09213223112
            </Title>
        </TableContainer>
        <TableContainer>
        <Title
                size='15px'
                color='#2e2e2e'
                family='Raleway'
                fstyle='normal'
                weight='500'
                align='left'
                margin='20px 0px 20px 30px'
            >
                Transaction Date: 2022-03-22 2:31PM
            </Title>
        </TableContainer>
        </TabContainer>
        <TabContainer>
            <HeadContainer>
            <Title
                size='20px'
                color='#C59537'
                family='Raleway'
                fstyle='normal'
                weight='500'
                align='left'
                margin='20px 0px 20px 30px'
            >
                Mode of Payment:
            </Title>
            </HeadContainer>
            <HeadContainer>
            <Title
                size='20px'
                color='#C59537'
                family='Raleway'
                fstyle='normal'
                weight='500'
                align='left'
                margin='20px 0px 20px 30px'
            >
                Type of Payment:
            </Title>
            </HeadContainer>
        </TabContainer>
        <TabContainer>
        <TableContainer>
        <Title
                size='15px'
                color='#2e2e2e'
                family='Raleway'
                fstyle='normal'
                weight='500'
                align='left'
                margin='20px 0px 20px 30px'
            >
                Cash:
            </Title>
            <Title
                size='15px'
                color='#2e2e2e'
                family='Raleway'
                fstyle='normal'
                weight='500'
                align='left'
                margin='20px 0px 20px 30px'
            >
                Bank:
            </Title>
        </TableContainer>
        <TableContainer>
        <Title
                size='15px'
                color='#2e2e2e'
                family='Raleway'
                fstyle='normal'
                weight='500'
                align='left'
                margin='20px 0px 20px 30px'
            >
                Installment:
            </Title>
            <Title
                size='15px'
                color='#2e2e2e'
                family='Raleway'
                fstyle='normal'
                weight='500'
                align='left'
                margin='20px 0px 20px 30px'
            >
                Full Payment:
            </Title>
        </TableContainer>
        </TabContainer>
        <TableContainer>
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
          <Td align='center'>...</Td>
        </Tr>
      </TableContainer>
      <BrownTab></BrownTab>
      <HeadContainer>
            <Title
                size='20px'
                color='#C59537'
                family='Raleway'
                fstyle='normal'
                weight='500'
                align='left'
                margin='20px 0px 20px 30px'
            >
                Payment Details
            </Title>
        </HeadContainer>
        <TabContainer>
        <TableContainer>
        <Title
                size='25px'
                color='#2e2e2e'
                family='Raleway'
                fstyle='normal'
                weight='700'
                align='Right'
                margin='20px 0px 20px 30px'
            >
                Total Amount: PHP 9,000.00
            </Title>
        </TableContainer>
        </TabContainer>
      </FlexboxContainer>
    </Container>
  )
}

export default BillingSummaryContainer