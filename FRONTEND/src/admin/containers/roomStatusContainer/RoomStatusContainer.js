import React from 'react'
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine'
import { Title } from '../../../client/components/title/styles'
import { ContainerGlobal } from '../../components/container/container'
import { Container, HeadContainer, TableContainer, Td, Th, Tr } from './style'

const RoomStatusContainer = () => {
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
                    Room Availability and Status
                </Title>
            </HeadContainer>
            <ContainerGlobal>


            </ContainerGlobal>
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
                    Room Status
                </Title>
                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                >
                </HorizontalLine>
                <TableContainer>
                    <Tr>
                        <Th align='center'>Room No.</Th>
                        <Th align='center'>Room Type</Th>
                        <Th align='center'>Booking Date</Th>
                        <Th align='center'>Check in</Th>
                        <Th align='center'>Check out</Th>
                        <Th align='center'>Room Status</Th>
                        <Th align='center'>Action</Th>
                    </Tr>
                    <Tr>
                        <Td align='center'>101</Td>
                        <Td align='center'>Deluxe</Td>
                        <Td align='center'>.........</Td>
                        <Td align='center'>.........</Td>
                        <Td align='center'>.........</Td>
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
                                Vacant
                            </Title>
                        </Td>
                        <Td align='center'>...</Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>102</Td>
                        <Td align='center'>Deluxe</Td>
                        <Td align='center'>.........</Td>
                        <Td align='center'>.........</Td>
                        <Td align='center'>.........</Td>
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
                                Vacant
                            </Title></Td>
                        <Td align='center'>...</Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>103</Td>
                        <Td align='center'>Premium</Td>
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
                                Occupied
                            </Title></Td>
                        <Td align='center'>...</Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>104</Td>
                        <Td align='center'>Deluxe</Td>
                        <Td align='center'>.........</Td>
                        <Td align='center'>.........</Td>
                        <Td align='center'>.........</Td>
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
                                Vacant
                            </Title>
                        </Td>
                        <Td align='center'>...</Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>105</Td>
                        <Td align='center'>Premium</Td>
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
                                Pending Balance
                            </Title></Td>
                        <Td align='center'>...</Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>106</Td>
                        <Td align='center'>Deluxe</Td>
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
                                Occupied
                            </Title></Td>
                        <Td align='center'>...</Td>
                    </Tr>
                </TableContainer>
            </ContainerGlobal>

        </Container>
    )
}

export default RoomStatusContainer