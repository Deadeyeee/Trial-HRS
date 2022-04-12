import React from 'react'
import { Title } from '../../../client/components/title/styles'
import { ContainerGlobal } from '../../components/container/container'
import { Container, HeadContainer, TableContainer, Td, Th, Tr } from './style'

const UserListContainer = () => {
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
            Users
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
                    <Th align='center'>User Id</Th>
                    <Th align='center'>Username</Th>
                    <Th align='center'>Name</Th>
                    <Th align='center'>Status</Th>
                    <Th align='center'>Position</Th>
                    <Th align='center'>Action</Th>
                </Tr>
                <Tr>
                    <Td align='center'>EA9323</Td>
                    <Td align='center'>FDSK1</Td>
                    <Td align='center'>Shirly Tuz</Td>
                    <Td align='center'>Connected</Td>
                    <Td align='center'>Front Desk</Td>
                    <Td align='center'>...</Td>
                </Tr>
                <Tr>
                    <Td align='center'>EA9324</Td>
                    <Td align='center'>FDSK2</Td>
                    <Td align='center'>Kenzie Agil</Td>
                    <Td align='center'>Connected</Td>
                    <Td align='center'>Front Desk</Td>
                    <Td align='center'>...</Td>
                </Tr>
                <Tr>
                    <Td align='center'>EA9325</Td>
                    <Td align='center'>FDSK3</Td>
                    <Td align='center'>Junsef Martin</Td>
                    <Td align='center'>Connected</Td>
                    <Td align='center'>Front Desk</Td>
                    <Td align='center'>...</Td>
                </Tr>
                <Tr>
                    <Td align='center'>EA9326</Td>
                    <Td align='center'>FDSK4</Td>
                    <Td align='center'>Pitir Olibar</Td>
                    <Td align='center'>Connected</Td>
                    <Td align='center'>Front Desk</Td>
                    <Td align='center'>...</Td>
                </Tr>
            </TableContainer>
        </ContainerGlobal>
    </Container>
  )
}

export default UserListContainer