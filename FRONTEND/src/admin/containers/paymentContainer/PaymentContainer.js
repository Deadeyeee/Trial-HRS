import React from 'react'
import { TextInput } from '../../../client/components/textBox/style'
import { Title } from '../../../client/components/title/styles'
import { ContainerGlobal } from '../../components/container/container'
import { BlackTab, Container, ContainerGlobalColumn, ContainerGlobalRow, GrayTab, HeadContainer, HeadContainerSmall, TabContainer, TableContainer, Td, Th, Tr } from './style'

const PaymentContainer = () => {
  return (
    <Container>


        {/*PAYMENT INFORMATION */}
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
            Payment Details
            </Title>
        </HeadContainer>
        <TabContainer>
                <BlackTab>
                    <Title
                        size='20px'
                        color='white'
                        family='Helvetica'
                        fstyle='bold'
                        weight='600'
                        align='center'
                        margin='15px 0px 0px 0px'
                    >
                    Payment Information
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
                    Check-In Payment
                    </Title>
                </GrayTab>
                <GrayTab>
                    <Title
                        size='18px'
                        color='white'
                        family='Helvetica'
                        fstyle='normal'
                        wei ght='600'
                        align='center'
                        margin='15px 0px 20px 0px'
                    >
                    Check-Out Payment
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
        >
            <TableContainer>
            <Tr>
                <Th align='center'>Booking No.</Th>
                <Th align='center'>Guest's Name</Th>
                <Th align='center'>Room Type</Th>
                <Th align='center'>Room No.</Th>
                <Th align='center'>Status</Th>
                <Th align='center'>Action</Th>
            </Tr>
            <Tr>
                <Td align='center'>20212304393</Td>
                <Td align='center'>Pedro Penduco</Td>
                <Td align='center'>Deluxe Room</Td>
                <Td align='center'>101</Td>
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
                <Td align='center'>20212304393</Td>
                <Td align='center'>Pedro Penduco</Td>
                <Td align='center'>Deluxe Room</Td>
                <Td align='center'>102</Td>
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
                <Td align='center'>20212304393</Td>
                <Td align='center'>Pedro Penduco</Td>
                <Td align='center'>Premium Room</Td>
                <Td align='center'>103</Td>
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
                <Td align='center'>20212304393</Td>
                <Td align='center'>Pedro Penduco</Td>
                <Td align='center'>Deluxe Room</Td>
                <Td align='center'>104</Td>
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
                <Td align='center'>20212304393</Td>
                <Td align='center'>Pedro Penduco</Td>
                <Td align='center'>Premium Room</Td>
                <Td align='center'>105</Td>
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
                <Td align='center'>20212304393</Td>
                <Td align='center'>Pedro Penduco</Td>
                <Td align='center'>Deluxe Room</Td>
                <Td align='center'>106</Td>
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
            </TableContainer>
    </ContainerGlobal>




    {/*CHECK IN PAYMENT */}
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
            Payment Details
            </Title>
    </HeadContainer>
        <TabContainer>
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
                    Payment Information
                    </Title>
                </GrayTab>
                <BlackTab>
                    <Title
                        size='20px'
                        color='white'
                        family='Helvetica'
                        fstyle='bold'
                        weight='600'
                        align='center'
                        margin='15px 0px 0px 0px'
                    >
                    Check-In Payment
                    </Title>
                </BlackTab>
                <GrayTab>
                    <Title
                        size='18px'
                        color='white'
                        family='Helvetica'
                        fstyle='normal'
                        wei ght='600'
                        align='center'
                        margin='15px 0px 20px 0px'
                    >
                    Check-Out Payment
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
    >
        <TableContainer>
         <Tr>
                <Th align='center'>Booking No.</Th>
                <Th align='center'>Guest's Name</Th>
                <Th align='center'>Room Type</Th>
                <Th align='center'>Room No.</Th>
                <Th align='center'>Status</Th>
                <Th align='center'>Action</Th>
            </Tr>
            <Tr>
                <Td align='center'>20212304393</Td>
                <Td align='center'>Pedro Penduco</Td>
                <Td align='center'>Deluxe Room</Td>
                <Td align='center'>101</Td>
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
                Check-In
                </Title></Td>
                <Td align='center'>...</Td>
            </Tr>
            <Tr>
                <Td align='center'>20212304393</Td>
                <Td align='center'>Pedro Penduco</Td>
                <Td align='center'>Deluxe Room</Td>
                <Td align='center'>102</Td>
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
                Check-In
                </Title></Td>
                <Td align='center'>...</Td>
            </Tr>
            <Tr>
                <Td align='center'>20212304393</Td>
                <Td align='center'>Pedro Penduco</Td>
                <Td align='center'>Premium Room</Td>
                <Td align='center'>103</Td>
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
                Check-In
                </Title></Td>
                <Td align='center'>...</Td>
            </Tr>
            <Tr>
                <Td align='center'>20212304393</Td>
                <Td align='center'>Pedro Penduco</Td>
                <Td align='center'>Deluxe Room</Td>
                <Td align='center'>104</Td>
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
                Check-In
                </Title>
                </Td>
                <Td align='center'>...</Td>
            </Tr>
            <Tr>
                <Td align='center'>20212304393</Td>
                <Td align='center'>Pedro Penduco</Td>
                <Td align='center'>Premium Room</Td>
                <Td align='center'>105</Td>
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
                Check-In
                </Title></Td>
                <Td align='center'>...</Td>
            </Tr>
            <Tr>
                <Td align='center'>20212304393</Td>
                <Td align='center'>Pedro Penduco</Td>
                <Td align='center'>Deluxe Room</Td>
                <Td align='center'>106</Td>
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
                Check-In
                </Title></Td>
                <Td align='center'>...</Td>
            </Tr>
            </TableContainer>
    </ContainerGlobal>




    {/*CHECK IN STATUS */}
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
            Check-In Status
            </Title>
        </HeadContainer>

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
                    Check-In:
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
                    Reference No.:
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
                    Check-Out:
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



    {/*CHECK-OUt PAYMENT */}
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
            Payment Information
            </Title>
    </HeadContainer>
    <TabContainer>
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
                    Payment Information
                    </Title>
                </GrayTab>
                <GrayTab>
                    <Title
                        size='18px'
                        color='white'
                        family='Helvetica'
                        fstyle='normal'
                        wei ght='600'
                        align='center'
                        margin='15px 0px 20px 0px'
                    >
                    Check-In Payment
                    </Title>
                </GrayTab>
                <BlackTab>
                    <Title
                        size='20px'
                        color='white'
                        family='Helvetica'
                        fstyle='bold'
                        weight='600'
                        align='center'
                        margin='15px 0px 0px 0px'
                    >
                    Check-Out Payment
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
    >
        <TableContainer>
         <Tr>
                <Th align='center'>Booking No.</Th>
                <Th align='center'>Guest's Name</Th>
                <Th align='center'>Room Type</Th>
                <Th align='center'>Room No.</Th>
                <Th align='center'>Status</Th>
                <Th align='center'>Action</Th>
            </Tr>
            <Tr>
                <Td align='center'>20212304393</Td>
                <Td align='center'>Pedro Penduco</Td>
                <Td align='center'>Deluxe Room</Td>
                <Td align='center'>101</Td>
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
                    Check-Out
                </Title></Td>
                <Td align='center'>...</Td>
            </Tr>
            <Tr>
                <Td align='center'>20212304393</Td>
                <Td align='center'>Pedro Penduco</Td>
                <Td align='center'>Deluxe Room</Td>
                <Td align='center'>102</Td>
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
                    Check-Out
                </Title></Td>
                <Td align='center'>...</Td>
            </Tr>
            <Tr>
                <Td align='center'>20212304393</Td>
                <Td align='center'>Pedro Penduco</Td>
                <Td align='center'>Premium Room</Td>
                <Td align='center'>103</Td>
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
                   Check-Out
                </Title></Td>
                <Td align='center'>...</Td>
            </Tr>
            </TableContainer>
    </ContainerGlobal>




    {/*CHECK OUT STATUS */}
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
            Check-Out Status
            </Title>
        </HeadContainer>

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
                    Check-In:
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
                    Check-In Time:
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
                    Reference No.:
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
                    Remaining Balance:
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
                    Check-Out:
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
                    Check-Out Time:
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
                    Number of Accomodation Days:
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
                        width='200px'
                        padding='0px 0px 0px 10px'
                        background='#E1DACA'
                        placeholder='Message'
                    >
                        
                    </TextInput>
                </ContainerGlobalColumn>
            </ContainerGlobalRow>
    </ContainerGlobal>





    {/*OFFICIAL RECEIPT */}
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
        Official Receipt
        </Title>
    </HeadContainer>

    <ContainerGlobalRow>
    {/*CLIENT DETAILS RECEIPT CONTAINER */}
    <ContainerGlobal
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 1 }}
        w='100%'
        h='auto'
        bg='white'
        direction='column'
        padding='30px'
        margin='0px 10px 50px 0px'
        gap='10px'
    
    >
        <HeadContainerSmall>
            <Title
            size='20px'
            color='white'
            family='Helvetica'
            fstyle='normal'
            weight='600'
            align='left'
            margin='20px 0px 20px 30px'
        >
        Client Details
        </Title>
        </HeadContainerSmall>
        <ContainerGlobalRow>
            <ContainerGlobal>
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
                    Contact No.
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
                    Nationality
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='bold'
                        weight='400'
                        align='Left'
                        margin='15px 0px 20px 0px'
                    >
                    Email Address:
                    </Title>
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
                    Pedro Penduco
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
                    Penduco
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
                    09456253545
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
                    1 Hungary Drive 
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
                    Filipino
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='bold'
                        weight='400'
                        align='Left'
                        margin='15px 0px 20px 0px'
                    >
                    pedropenduco@gmail.com
                    </Title>
                    </ContainerGlobalColumn>
                </ContainerGlobal>
            </ContainerGlobalRow>
        </ContainerGlobal>

        <ContainerGlobal
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 1 }}
        w='100%'
        h='auto'
        bg='white'
        direction='column'
        padding='30px'
        margin='0px 0px 50px 10px'
        gap='10px'
    
    >
        <HeadContainerSmall>
            <Title
            size='20px'
            color='white'
            family='Helvetica'
            fstyle='normal'
            weight='600'
            align='left'
            margin='20px 0px 20px 30px'
        >
        Booking Receipt
        </Title>
        </HeadContainerSmall>
        <ContainerGlobalRow>
            <ContainerGlobal>
            <ContainerGlobalColumn>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='0px 0px 20px 0px'
                    >
                    Reference No.:
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='0px 0px 20px 0px'
                    >
                    Check-In Date:
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='0px 0px 20px 0px'
                    >
                    Check-Out Date:
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='0px 0px 20px 0px'
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
                        margin='0px 0px 20px 0px'
                    >
                    No. of Persons:
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='0px 0px 20px 0px'
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
                        margin='0px 0px 20px 0px'
                    >
                    Room Cost:
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='0px 0px 20px 0px'
                    >
                    12% Tax
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='0px 0px 20px 0px'
                    >
                    Senior/PWD Discount:
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='600'
                        align='left'
                        margin='0px 0px 20px 0px'
                    >
                    TOTAL COST:
                    </Title>
            </ContainerGlobalColumn>
            <ContainerGlobalColumn>
            <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='0px 0px 20px 0px'
                    >
                    2021019293848
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='0px 0px 20px 0px'
                    >
                    04/16/21
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='0px 0px 20px 0px'
                    >
                    04/22/21
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='0px 0px 20px 0px'
                    >
                    Premium Room
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='0px 0px 20px 0px'
                    >
                    4
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='0px 0px 20px 0px'
                    >
                    Cash
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='0px 0px 20px 0px'
                    >
                    PHP 5,000.00
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='0px 0px 20px 0px'
                    >
                    PHP 600.00
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='400'
                        align='left'
                        margin='0px 0px 20px 0px'
                    >
                    Not Qualified
                    </Title>
                    <Title
                        size='20px'
                        color='Black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='600'
                        align='left'
                        margin='0px 0px 20px 0px'
                    >
                    PHP 30,000.00
                    </Title>
                    </ContainerGlobalColumn>
                </ContainerGlobal>
            </ContainerGlobalRow>
        </ContainerGlobal>
        </ContainerGlobalRow>

    
    

    </Container>
  )
}

export default PaymentContainer