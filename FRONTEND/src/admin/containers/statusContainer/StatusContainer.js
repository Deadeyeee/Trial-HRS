import React from 'react'
import { Title } from '../../../client/components/title/styles'
import { ContainerGlobal } from '../../components/container/container'
import { Container, HeadContainer, TableContainer, Td, Th, Tr } from './style'

const StatusContainer = () => {
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
            Check Status of Clients
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
                    <Th align='center'>Name</Th>
                    <Th align='center'>Total Bookings</Th>
                    <Th align='center'>Status</Th>
                    <Th align='center'>Account Created</Th>
                    <Th align='center'>Last Seen</Th>
                    <Th align='center'>Action</Th>
                </Tr>
                <Tr>
                    <Td align='center'>Don G.</Td>
                    <Td align='center'>5</Td>
                    <Td align='center'>Active</Td>
                    <Td align='center'>01/15/21</Td>
                    <Td align='center'>10/24/21</Td>
                    <Td align='center'>...</Td>
                </Tr>
                <Tr>
                    <Td align='center'>Kwasimodo H.</Td>
                    <Td align='center'>4</Td>
                    <Td align='center'>Inactive</Td>
                    <Td align='center'>04/15/21</Td>
                    <Td align='center'>9/24/21</Td>
                    <Td align='center'>...</Td>
                </Tr>
                <Tr>
                    <Td align='center'>Yumiyacha L.</Td>
                    <Td align='center'>4</Td>
                    <Td align='center'>Active</Td>
                    <Td align='center'>02/14/21</Td>
                    <Td align='center'>10/27/21</Td>
                    <Td align='center'>...</Td>
                </Tr>
                <Tr>
                    <Td align='center'>Don Gachapon.</Td>
                    <Td align='center'>4</Td>
                    <Td align='center'>Inactive</Td>
                    <Td align='center'>07/5/21</Td>
                    <Td align='center'>9/2/21</Td>
                    <Td align='center'>...</Td>
                </Tr>
                <Tr>
                    <Td align='center'>Crystal A.</Td>
                    <Td align='center'>6</Td>
                    <Td align='center'>Active</Td>
                    <Td align='center'>09/18/21</Td>
                    <Td align='center'>10/8/21</Td>
                    <Td align='center'>...</Td>
                </Tr>
                <Tr>
                    <Td align='center'>Amelrie K.</Td>
                    <Td align='center'>7</Td>
                    <Td align='center'>Inactive</Td>
                    <Td align='center'>02/19/21</Td>
                    <Td align='center'>07/2/21</Td>
                    <Td align='center'>...</Td>
                </Tr>
            </TableContainer>
        </ContainerGlobal>
    </Container>
  )
}

export default StatusContainer