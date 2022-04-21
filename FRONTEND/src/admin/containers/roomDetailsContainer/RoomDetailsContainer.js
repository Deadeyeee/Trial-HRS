import React from 'react'
import Button from '@mui/material/Button';
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine'
import { Title } from '../../../client/components/title/styles'
import { ContainerGlobal } from '../../components/container/container'
import { Container, HeadContainer, TableContainer, Td, Th, Tr } from './style'

const RoomDetailsContainer = () => {
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
            Room Details
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
        Room Details
        </Title>
        <HorizontalLine
            bg='gray'
            w='100%'
            margin='0px'
         >
        </HorizontalLine>
        <TableContainer>
        <Tr>
            <Th align='center'>Room Type</Th>
            <Th align='center'>Weekday Rate</Th>
            <Th align='center'>Weekend Rate</Th>
            <Th align='center'>Addtional Service</Th>
            <Th align='center'>Action</Th>
        </Tr>
        <Tr>
            <Td align='center'>Family Room</Td>
            <Td align='center'>PHP 2,500</Td>
            <Td align='center'>PHP 2,700</Td>
            <Td align='center'>.........</Td>
            <Td align='center'>...</Td>
        </Tr>
        <Tr>
            <Td align='center'>Premium Room</Td>
            <Td align='center'>PHP 3,500</Td>
            <Td align='center'>PHP 3,700</Td>
            <Td align='center'>.........</Td>
            <Td align='center'>...</Td>
        </Tr>
        <Tr>
            <Td align='center'>Deluxe Room</Td>
            <Td align='center'>PHP 5,000</Td>
            <Td align='center'>PHP 5,200</Td>
            <Td align='center'>.........</Td>
            <Td align='center'>...</Td>
        </Tr>
        </TableContainer>
        </ContainerGlobal>
        <Button variant="contained" size="large"
                style={{ backgroundColor: '#2E2E2E' }}>
                Add
        </Button>
    </Container>
  )
}

export default RoomDetailsContainer