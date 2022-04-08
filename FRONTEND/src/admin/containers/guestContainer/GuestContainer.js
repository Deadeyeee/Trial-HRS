import React from 'react'
import { Title } from '../../../client/components/title/styles'
import { ContainerGlobal } from '../../components/container/container'
import { Container, HeadContainer, TableContainer, Td, Th, Tr } from './styles'

const GuestContainer = () => {
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
            Guests' Information
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
            <TableContainer>
            <Tr>
                    <Th align='center'>Booking No.</Th>
                    <Th align='center'>Guest's Name</Th>
                    <Th align='center'>Booking Date</Th>
                    <Th align='center'>Check in</Th>
                    <Th align='center'>Check out</Th>
                    <Th align='center'>Contact Info.</Th>
                    <Th align='center'>Action</Th>
                </Tr>
                <Tr>
                    <Td align='center'>091234568</Td>
                    <Td align='center'>Pedro Penduco</Td>
                    <Td align='center'>05/20/21</Td>
                    <Td align='center'>05/25/21</Td>
                    <Td align='center'>05/29/21</Td>
                    <Td align='center'>09164587455</Td>
                    <Td align='center'>...</Td>
                </Tr>
                <Tr>
                    <Td align='center'>091234568</Td>
                    <Td align='center'>Pedro Penduco</Td>
                    <Td align='center'>05/20/21</Td>
                    <Td align='center'>05/25/21</Td>
                    <Td align='center'>05/29/21</Td>
                    <Td align='center'>09164587455</Td>
                    <Td align='center'>...</Td>
                </Tr>
                <Tr>
                    <Td align='center'>091234568</Td>
                    <Td align='center'>Pedro Penduco</Td>
                    <Td align='center'>05/20/21</Td>
                    <Td align='center'>05/25/21</Td>
                    <Td align='center'>05/29/21</Td>
                    <Td align='center'>09164587455</Td>
                    <Td align='center'>...</Td>
                </Tr>
                <Tr>
                    <Td align='center'>091234568</Td>
                    <Td align='center'>Pedro Penduco</Td>
                    <Td align='center'>05/20/21</Td>
                    <Td align='center'>05/25/21</Td>
                    <Td align='center'>05/29/21</Td>
                    <Td align='center'>09164587455</Td>
                    <Td align='center'>...</Td>
                </Tr>
                <Tr>
                    <Td align='center'>091234568</Td>
                    <Td align='center'>Pedro Penduco</Td>
                    <Td align='center'>05/20/21</Td>
                    <Td align='center'>05/25/21</Td>
                    <Td align='center'>05/29/21</Td>
                    <Td align='center'>09164587455</Td>
                    <Td align='center'>...</Td>
                </Tr>
                <Tr>
                    <Td align='center'>091234568</Td>
                    <Td align='center'>Pedro Penduco</Td>
                    <Td align='center'>05/20/21</Td>
                    <Td align='center'>05/25/21</Td>
                    <Td align='center'>05/29/21</Td>
                    <Td align='center'>09164587455</Td>
                    <Td align='center'>...</Td>
                </Tr>
            </TableContainer>
        </ContainerGlobal>
    </Container>
  )
}

export default GuestContainer