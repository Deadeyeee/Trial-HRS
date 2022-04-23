import React from 'react'
import { Title } from '../../../client/components/title/styles'
import { Container, HeadContainer, SummaryContainer, SummaryDescription, SummaryIcon, SummaryPlate, TableContainer, Td, Th, Tr } from './style'
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import { Doughnut } from 'react-chartjs-2'
import { Chart as CharJS } from 'chart.js/auto'
import { ContainerGlobal } from '../../components/container/container';
import { Reservation } from '../frontAnalytics/Reservation';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine';
import Occupancy from '../frontAnalytics/Occupancy';
import ActionButton from '../../components/actionButton/ActionButton';


const DashboardContainer = () => {
    const Dates = new Date(Date.now());
const DateNow = Dates.toString().split(' ');
    return (
        <Container>
            <HeadContainer>
                <ContainerGlobal align='center'>
                    <ContainerGlobal direction='column'>
                        <Title
                            size='20px'
                            color='white'
                            family='Helvetica'
                            fstyle='normal'
                            weight='600'
                            align='left'
                            margin='20px 0px 10px 30px'
                        >
                            DASHBOARD
                        </Title>
                        <Title
                            size='14px'
                            color='#d3bc9a'
                            family='arial'
                            fstyle='normal'
                            weight='normal'
                            align='left'
                            margin='0px 0px 20px 30px'
                        >
                            Hello, <b>Juan Dela Cruz!</b> Welcome back! Here's what's going on with your business.
                        </Title>
                    </ContainerGlobal>
                    <Title
                        size='20px'
                        color='white'
                        family='Helvetica'
                        fstyle='normal'
                        weight='400'
                        align='left'
                        margin='0px 20px 0px auto'
                    >
                        {DateNow[0] + " " + DateNow[1] +" " + DateNow[2] +" " +DateNow[3] +" " + DateNow[4]  }
                    </Title>
                </ContainerGlobal>
            </HeadContainer>
            <SummaryContainer>
                <SummaryPlate
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 1 }}
                >
                    <SummaryIcon
                        bg='#E1C340'
                    >
                        <BedroomChildOutlinedIcon
                            style={{
                                width: '40px',
                                height: '40px',
                            }}></BedroomChildOutlinedIcon>
                    </SummaryIcon>

                    <SummaryDescription>
                        <Title
                            size='14px'
                            color='black'
                            family='arial'
                            fstyle='normal'
                            weight='600'
                            align='left'
                        >
                            Currently Booked
                        </Title>
                        <Title
                            size='36px'
                            color='#E1C340'
                            family='arial'
                            fstyle='normal'
                            weight='normal'
                            align='left'
                        >
                            36
                        </Title>
                    </SummaryDescription>
                </SummaryPlate>


                <SummaryPlate
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 1 }}
                >
                    <SummaryIcon
                        bg='#76B947'>
                        <CheckCircleOutlineOutlinedIcon
                            style={{
                                width: '40px',
                                height: '40px',
                            }} />
                    </SummaryIcon>

                    <SummaryDescription>
                        <Title
                            size='14px'
                            color='black'
                            family='arial'
                            fstyle='normal'
                            weight='600'
                            align='left'
                        >
                            Expected Check-in
                        </Title>
                        <Title
                            size='36px'
                            color='#76B947'
                            family='arial'
                            fstyle='normal'
                            weight='normal'
                            align='left'
                        >
                            10
                        </Title>
                    </SummaryDescription>
                </SummaryPlate>


                <SummaryPlate
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 1 }}
                >
                    <SummaryIcon
                        bg='#E7625F'>
                        <CancelOutlinedIcon
                            style={{
                                width: '40px',
                                height: '40px',
                            }} />
                    </SummaryIcon>

                    <SummaryDescription>
                        <Title
                            size='14px'
                            color='black'
                            family='arial'
                            fstyle='normal'
                            weight='600'
                            align='left'
                        >
                            Expected Check-out
                        </Title>
                        <Title
                            size='36px'
                            color='#E7625F'
                            family='arial'
                            fstyle='normal'
                            weight='normal'
                            align='left'
                        >
                            4
                        </Title>
                    </SummaryDescription>
                </SummaryPlate>


                <SummaryPlate
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 1 }}
                >
                    <SummaryIcon
                        bg='#189AB4'>
                        <MeetingRoomOutlinedIcon
                            style={{
                                width: '40px',
                                height: '40px',
                            }} />
                    </SummaryIcon>

                    <SummaryDescription>
                        <Title
                            size='14px'
                            color='black'
                            family='arial'
                            fstyle='normal'
                            weight='600'
                            align='left'
                        >
                            Available Rooms
                        </Title>
                        <Title
                            size='36px'
                            color='#189AB4'
                            family='arial'
                            fstyle='normal'
                            weight='normal'
                            align='left'
                        >
                            4
                        </Title>
                    </SummaryDescription>
                </SummaryPlate>

            </SummaryContainer>
            <ContainerGlobal
                w='94%'
                h='auto'
                overflow='none'
                justify='space-between'
            >
                <ContainerGlobal

                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 1 }}
                    w='30%'
                    h='460px'
                    bg='white'
                    direction='column'
                    padding='30px'

                    gap='10px'
                    justify='center'
                >

                    <Title
                        size='26px'
                        color='black'
                        family='Helvetica'
                        fstyle='normal'
                        weight='600'
                        align='left'
                    >
                        Reservations
                    </Title>


                    <HorizontalLine
                        bg='gray'
                        w='100%'
                        margin='0px'

                    ></HorizontalLine>
                    <Reservation />


                </ContainerGlobal>
                <ContainerGlobal

                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 1 }}
                    w='61%'
                    h='460px'
                    bg='white'
                    direction='column'
                    padding='30px'

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
                        Occupancy Rate
                    </Title>


                    <HorizontalLine
                        bg='gray'
                        w='100%'
                        margin='0px'

                    ></HorizontalLine>
                    <ContainerGlobal

                        w='100%'
                        h='100%'
                        justify='center'

                        gap='10px'
                    >
                        <Occupancy />
                    </ContainerGlobal>

                </ContainerGlobal>
            </ContainerGlobal>
            <ContainerGlobal
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 1 }}
                w='90%'
                h='auto'
                bg='white'
                direction='column'
                padding='30px'
                margin='20px 0px 10px 0px'
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
                    Bookings <a style={{ fontSize: '12px' }} href='/frontdesk/booking'>(view)</a>
                </Title>


                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'

                ></HorizontalLine>

                <TableContainer>
                    <Tr>
                        <Th align='center'>Customer  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Phone  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Room Type  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Check in  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Check out  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Status  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Action</Th>
                    </Tr>
                    <Tr>

                        <Td align='center'>Pedro Penduco</Td>
                        <Td align='center'>091234568</Td>
                        <Td align='center'>Deluxe Room</Td>
                        <Td align='center'>05/25/21</Td>
                        <Td align='center'>05/29/21</Td>
                        <Td align='center'>
                            <ContainerGlobal
                                w='100px'
                                h='auto'
                                margin='0px auto'
                                bg='rgb(118, 185, 71, .2)'
                                direction='row'
                                padding='2px 0px'
                                justify='center'
                                align='center'
                                border='2px solid rgb(118, 185, 71)'
                                gap='10px'
                                borderRadius='.5rem'
                            >

                                <Title
                                    family='Helvetica'
                                    size='12px'
                                    color='BLACK'
                                    fstyle='normal'
                                    display='inline'
                                    padding='5px 10px'
                                >
                                    Paid
                                </Title></ContainerGlobal>
                        </Td>
                        <Td align='center'><ActionButton /></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>Pedro Penduco</Td>
                        <Td align='center'>091234568</Td>
                        <Td align='center'>Deluxe Room</Td>
                        <Td align='center'>05/25/21</Td>
                        <Td align='center'>05/29/21</Td>
                        <Td align='center'>
                            <ContainerGlobal
                                w='100px'
                                h='auto'
                                margin='0px auto'
                                bg='rgb(118, 185, 71, .2)'
                                direction='row'
                                padding='2px 0px'
                                justify='center'
                                align='center'
                                border='2px solid rgb(118, 185, 71)'
                                gap='10px'
                                borderRadius='.5rem'
                            >

                                <Title
                                    family='Helvetica'
                                    size='12px'
                                    color='BLACK'
                                    fstyle='normal'
                                    display='inline'
                                    padding='5px 10px'
                                >
                                    Paid
                                </Title></ContainerGlobal></Td>
                        <Td align='center'><ActionButton /></Td>
                    </Tr>
                    <Tr>

                        <Td align='center'>Pedro Penduco</Td>
                        <Td align='center'>091234568</Td>
                        <Td align='center'>Deluxe Room</Td>
                        <Td align='center'>05/25/21</Td>
                        <Td align='center'>05/29/21</Td>
                        <Td align='center'>
                            <ContainerGlobal
                                w='100px'
                                h='auto'
                                margin='0px auto'
                                bg='rgb(118, 185, 71, .2)'
                                direction='row'
                                padding='2px 0px'
                                justify='center'
                                align='center'
                                border='2px solid rgb(118, 185, 71)'
                                gap='10px'
                                borderRadius='.5rem'
                            >

                                <Title
                                    family='Helvetica'
                                    size='12px'
                                    color='BLACK'
                                    fstyle='normal'
                                    display='inline'
                                    padding='5px 10px'
                                >
                                    Paid
                                </Title></ContainerGlobal></Td>
                        <Td align='center'><ActionButton /></Td>
                    </Tr>
                </TableContainer>
            </ContainerGlobal>

        </Container>
    )
}

export default DashboardContainer