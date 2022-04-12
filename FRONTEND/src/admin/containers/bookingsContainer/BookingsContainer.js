import React from 'react'
import { BlackTab, Container, ContainerGlobalColumn, ContainerGlobalRow, GrayTab, HeadContainer, TabContainer, TableContainer, Td, Th, Tr } from './style'
import { Title } from '../../../client/components/title/styles'
import { ContainerGlobal } from '../../components/container/container'
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine'
import { TextInput } from '../../../client/components/textBox/style'

const BookingsContainer = () => {
  return (
    <Container>
        <HeadContainer>
            <Title
                size='20px'
                color='white'
                family='Helvetica'
                fstyle='normal'
                weight='600'
                align='left'
                margin='20px 0px 20px 30px'
            >
            Add A Booking Reservation
            </Title>
        </HeadContainer>

        <ContainerGlobal
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 1 }}
            w='90%'
            h='5vh'
            bg='white'
            direction='column'
            padding='30px'
            margin='20px 0px 10px 0px'
            gap='10px'
        >
        </ContainerGlobal>



        <ContainerGlobal
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 1 }}
            w='90%'
            h='60vh'
            bg='white'
            direction='column'
            padding='30px'
            margin='20px 0px 50px 0px'
            gap='10px'
        >
        <Title
            size='26px'
            color='black'
            family='Helvetica'
            fstyle='normal'
            weight='600'
            align='left'
        >
        Bookings
        </Title>
        <HorizontalLine
            bg='gray'
            w='100%'
            margin='0px'
        >
        </HorizontalLine>
            <TableContainer>
                <Tr>
                    <Th align='center'>Booking No.</Th>
                    <Th align='center'>Guest's Name</Th>
                    <Th align='center'>Booking Date</Th>
                    <Th align='center'>Check in</Th>
                    <Th align='center'>Check out</Th>
                    <Th align='center'>Status</Th>
                    <Th align='center'>Action</Th>
                </Tr>
                <Tr>
                    <Td align='center'>091234568</Td>
                    <Td align='center'>Pedro Penduco</Td>
                    <Td align='center'>05/20/21</Td>
                    <Td align='center'>05/25/21</Td>
                    <Td align='center'>05/29/21</Td>
                    <Td align='center'>
                    <Title
                        family='Helvetica'
                        size='12px'
                        color='BLACK'
                        fstyle='normal'
                        bg='rgb(118, 185, 71, .2)'
                        display='inline'
                        padding='5px 10px'
                        borderRadius='.5rem'
                        border='2px solid rgb(118, 185, 71)'
                        >
                        Paid
                    </Title>
                    </Td>
                    <Td align='center'>...</Td>
                </Tr>
                <Tr>
                    <Td align='center'>091224568</Td>
                    <Td align='center'>Pedro Penduco</Td>
                    <Td align='center'>05/20/21</Td>
                    <Td align='center'>05/25/21</Td>
                    <Td align='center'>05/29/21</Td>
                    <Td align='center'>
                    <Title
                        family='Helvetica'
                        size='12px'
                        color='BLACK'
                        fstyle='normal'
                        bg='rgb(118, 185, 71, .2)'
                        display='inline'
                        padding='5px 10px'
                        borderRadius='.5rem'
                        border='2px solid rgb(118, 185, 71)'
                        >
                        Paid
                    </Title></Td>
                    <Td align='center'>...</Td>
                </Tr>
                <Tr>
                    <Td align='center'>091234568</Td>
                    <Td align='center'>Pedro Penduco</Td>
                    <Td align='center'>05/20/21</Td>
                    <Td align='center'>05/25/21</Td>
                    <Td align='center'>05/29/21</Td>
                    <Td align='center'>
                    <Title
                        family='Helvetica'
                        size='12px'
                        color='BLACK'
                        fstyle='normal'
                        bg='rgb(244,194,194, .2)'
                        display='inline'
                        padding='5px 10px'
                        borderRadius='.5rem'
                        border='2px solid rgb(255, 36, 0)'
                        >
                        Canceled
                    </Title></Td>
                    <Td align='center'>...</Td>
                </Tr>
                <Tr>
                    <Td align='center'>091234568</Td>
                    <Td align='center'>Pedro Penduco</Td>
                    <Td align='center'>05/20/21</Td>
                    <Td align='center'>05/25/21</Td>
                    <Td align='center'>05/29/21</Td>
                    <Td align='center'>
                    <Title
                        family='Helvetica'
                        size='12px'
                        color='BLACK'
                        fstyle='normal'
                        bg='rgb(118, 185, 71, .2)'
                        display='inline'
                        padding='5px 10px'
                        borderRadius='.5rem'
                        border='2px solid rgb(118, 185, 71)'
                        >
                        Paid
                    </Title>
                    </Td>
                    <Td align='center'>...</Td>
                </Tr>
                <Tr>
                    <Td align='center'>091234568</Td>
                    <Td align='center'>Pedro Penduco</Td>
                    <Td align='center'>05/20/21</Td>
                    <Td align='center'>05/25/21</Td>
                    <Td align='center'>05/29/21</Td>
                    <Td align='center'>
                    <Title
                        family='Helvetica'
                        size='12px'
                        color='BLACK'
                        fstyle='normal'
                        bg='rgb(253, 161, 114, .2)'
                        display='inline'
                        padding='5px 10px'
                        borderRadius='.5rem'
                        border='2px solid rgb(255, 215, 0)'
                        >
                        Pending
                    </Title></Td>
                    <Td align='center'>...</Td>
                </Tr>
                <Tr>
                    <Td align='center'>091234568</Td>
                    <Td align='center'>Pedro Penduco</Td>
                    <Td align='center'>05/20/21</Td>
                    <Td align='center'>05/25/21</Td>
                    <Td align='center'>05/29/21</Td>
                    <Td align='center'>
                    <Title
                        family='Helvetica'
                        size='12px'
                        color='BLACK'
                        fstyle='normal'
                        bg='rgb(244,194,194, .2)'
                        display='inline'
                        padding='5px 10px'
                        borderRadius='.5rem'
                        border='2px solid rgb(255, 36, 0)'
                        >
                        Canceled
                    </Title></Td>
                    <Td align='center'>...</Td>
                </Tr>
            </TableContainer>
        </ContainerGlobal>
        <TabContainer>
        <BlackTab>
                <Title
                    size='20px'
                    color='white'
                    family='Helvetica'
                    fstyle='bold'
                    weight='600'
                    align='center'
                    margin='15px 0px 20px 0px'
                >
                Reservation Details
                </Title>
            </BlackTab>
            <GrayTab>
                <Title
                    size='18px'
                    color='white'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='center'
                    margin='15px 0px 20px 0px'
                >
                Client Details
                </Title>
            </GrayTab>
        </TabContainer>
        <ContainerGlobal
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 1 }}
            w='90%'
            h='auto'
            bg='white'
            direction='column'
            padding='30px'
            margin='0px 0px 50px 0px'
            gap='10px'
            justify='center'
            align='center'
        >
            <ContainerGlobalRow>
                <ContainerGlobalColumn>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='15px 0px 20px 0px'
                    >
                    Check In:
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='15px 0px 20px 0px'
                    >
                    Reservation No.:
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='15px 0px 20px 0px'
                    >
                    Payment Method:
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='15px 0px 20px 0px'
                    >
                    Downpayment:
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='bold'
                        weight='600'
                        align='Left'
                        margin='15px 0px 20px 0px'
                    >
                    Total Amount:
                    </Title>
                </ContainerGlobalColumn>
                <ContainerGlobalColumn>
                    <TextInput
                        margins='10px 0px 10px 0px'
                        fontStyle='italic'
                        width='200px'
                        padding='0px 0px 0px 10px'
                        background='#E1DACA'
                        placeholder='Message'
                    >
                        
                    </TextInput>
                    <TextInput
                        margins='10px 0px 10px 0px'
                        fontStyle='italic'
                        width='200px'
                        padding='0px 0px 0px 10px'
                        background='#E1DACA'
                        placeholder='Message'
                    >
                        
                    </TextInput>
                    <TextInput
                        margins='10px 0px 10px 0px'
                        fontStyle='italic'
                        width='200px'
                        padding='0px 0px 0px 10px'
                        background='#E1DACA'
                        placeholder='Message'
                    >
                        
                    </TextInput>
                    <TextInput
                        margins='10px 0px 10px 0px'
                        fontStyle='italic'
                        width='200px'
                        padding='0px 0px 0px 10px'
                        background='#E1DACA'
                        placeholder='Message'
                    >
                        
                    </TextInput>
                    <TextInput
                        margins='10px 0px 0px 0px'
                        fontStyle='italic'
                        width='200px'
                        padding='0px 0px 0px 10px'
                        background='#E1DACA'
                        placeholder='Message'
                    >
                        
                    </TextInput>
                </ContainerGlobalColumn>
                <ContainerGlobalColumn>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='15px 0px 20px 0px'
                    >
                    Check Out:
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='15px 0px 20px 0px'
                    >
                    Room Type:
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='15px 0px 20px 0px'
                    >
                    Number of Persons:
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='15px 0px 20px 0px'
                    >
                    Number of Days:
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='600'
                        align='Left'
                        margin='15px 0px 20px 0px'
                    >
                    REMAINING BALANCE:
                    </Title>
                </ContainerGlobalColumn>
                <ContainerGlobalColumn>
                    <TextInput
                        margins='10px 0px 10px 0px'
                        fontStyle='italic'
                        width='200px'
                        padding='0px 0px 0px 10px'
                        background='#E1DACA'
                        placeholder='Message'
                    >
                        
                    </TextInput>
                    <TextInput
                        margins='10px 0px 10px 0px'
                        fontStyle='italic'
                        width='200px'
                        padding='0px 0px 0px 10px'
                        background='#E1DACA'
                        placeholder='Message'
                    >
                        
                    </TextInput>
                    <TextInput
                        margins='10px 0px 10px 0px'
                        fontStyle='italic'
                        width='200px'
                        padding='0px 0px 0px 10px'
                        background='#E1DACA'
                        placeholder='Message'
                    >
                        
                    </TextInput>
                    <TextInput
                        margins='10px 0px 10px 0px'
                        fontStyle='italic'
                        width='200px'
                        padding='0px 0px 0px 10px'
                        background='#E1DACA'
                        placeholder='Message'
                    >
                        
                    </TextInput>
                    <TextInput
                        margins='10px 0px 0px 0px'
                        fontStyle='italic'
                        width='200px'
                        padding='0px 0px 0px 10px'
                        background='#E1DACA'
                        placeholder='Message'
                    >
                        
                    </TextInput>
                </ContainerGlobalColumn>
            </ContainerGlobalRow>
        </ContainerGlobal>
        <TabContainer>
            <GrayTab>
                <Title
                    size='20px'
                    color='white'
                    family='Helvetica'
                    fstyle='bold'
                    weight='600'
                    align='center'
                    margin='15px 0px 20px 0px'
                >
                Reservation Details
                </Title>
            </GrayTab>
            <BlackTab>
                <Title
                    size='18px'
                    color='white'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='center'
                    margin='15px 0px 20px 0px'
                >
                Client Details
                </Title>
            </BlackTab>   
        </TabContainer>
        <ContainerGlobal
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 1 }}
            w='90%'
            h='auto'
            bg='white'
            direction='column'
            padding='30px'
            margin='0px 0px 50px 0px'
            gap='10px'
            justify='center'
            align='center'
        >
            <ContainerGlobalRow>
                <ContainerGlobalColumn>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='15px 0px 20px 0px'
                    >
                    First Name:
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='15px 0px 20px 0px'
                    >
                    Birthday:
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='15px 0px 20px 0px'
                    >
                    Address:
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='15px 0px 20px 0px'
                    >
                    Contact Number
                    </Title>
                </ContainerGlobalColumn>
                <ContainerGlobalColumn>
                    <TextInput
                        margins='10px 0px 10px 0px'
                        fontStyle='italic'
                        width='200px'
                        padding='0px 0px 0px 10px'
                        background='#E1DACA'
                        placeholder='Message'
                    >
                        
                    </TextInput>
                    <TextInput
                        margins='10px 0px 10px 0px'
                        fontStyle='italic'
                        width='200px'
                        padding='0px 0px 0px 10px'
                        background='#E1DACA'
                        placeholder='Message'
                    >
                        
                    </TextInput>
                    <TextInput
                        margins='10px 0px 10px 0px'
                        fontStyle='italic'
                        width='200px'
                        padding='0px 0px 0px 10px'
                        background='#E1DACA'
                        placeholder='Message'
                    >
                        
                    </TextInput>
                    <TextInput
                        margins='10px 0px 10px 0px'
                        fontStyle='italic'
                        width='200px'
                        padding='0px 0px 0px 10px'
                        background='#E1DACA'
                        placeholder='Message'
                    >
                        
                    </TextInput>
                </ContainerGlobalColumn>
                <ContainerGlobalColumn>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='15px 0px 20px 0px'
                    >
                    Last Name:
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='15px 0px 20px 0px'
                    >
                    Email:
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='15px 0px 20px 0px'
                    >
                    Nationality
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='15px 0px 20px 0px'
                    >
                    Notes
                    </Title>
                </ContainerGlobalColumn>
                <ContainerGlobalColumn>
                    <TextInput
                        margins='10px 0px 10px 0px'
                        fontStyle='italic'
                        width='200px'
                        padding='0px 0px 0px 10px'
                        background='#E1DACA'
                        placeholder='Message'
                    >
                        
                    </TextInput>
                    <TextInput
                        margins='10px 0px 10px 0px'
                        fontStyle='italic'
                        width='200px'
                        padding='0px 0px 0px 10px'
                        background='#E1DACA'
                        placeholder='Message'
                    >
                        
                    </TextInput>
                    <TextInput
                        margins='10px 0px 10px 0px'
                        fontStyle='italic'
                        width='200px'
                        padding='0px 0px 0px 10px'
                        background='#E1DACA'
                        placeholder='Message'
                    >
                        
                    </TextInput>
                    <TextInput
                            margins='10px 0px 0px 0px'
                            fontStyle='italic'
                            width='375px'
                            padding='0px 0px 80px 10px'
                            background='#E1DACA'
                            placeholder='Message'
                            >

                            </TextInput>
                </ContainerGlobalColumn>
            </ContainerGlobalRow>
        </ContainerGlobal>
    </Container>
  )
}

export default BookingsContainer