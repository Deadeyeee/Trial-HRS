import React, { useState } from 'react'
import { Title } from '../../../client/components/title/styles'
import { ContainerGlobal } from '../../components/container/container'
import { Container, HeadContainer, TableContainer, Td, Th, Tr } from './style'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { FormControlLabel, FormControl } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Select from '@mui/material/Select';
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ActionButton from '../../components/actionButton/ActionButton';

const UserListContainer = () => {

    const [value, setValue] = useState(Date.now());
    const color = "#c44242";
    const [age, setAge] = React.useState('');


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
                w='90%'
                h='auto'
                bg='WHITE'
                direction='column'
                align='center'
                padding='10px 30px'
                margin='20px 0px 10px 0px'
                gap='10px'
            >
                <ContainerGlobal
                    w='100%'
                    h='7vh'
                    bg='none'
                    direction='row'
                    overflow='visible'
                    align='center'
                    justify='center'
                    gap='10px'
                >
                    <TextField
                        id="outlined-basic"
                        label="Search..."
                        variant="outlined"
                        sx={{
                            input: { color: 'black', fontWeight: 'bold' },

                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>

                            ),
                        }}
                        style={{ width: '98%' }} />




                </ContainerGlobal>
            </ContainerGlobal>


            <ContainerGlobal
                w='90%'
                h='55vh'
                bg='white'
                direction='column'
                padding='30px'
                margin='20px 0px 20px 0px'
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
                    User List
                </Title>

                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                ></HorizontalLine>


                <TableContainer>
                    <Tr>
                        <Th align='center'>User Id <ArrowDropDownIcon style={{ color: 'black' }}/></Th>
                        <Th align='center'>Username <ArrowDropDownIcon style={{ color: 'black' }}/></Th>
                        <Th align='center'>Name <ArrowDropDownIcon style={{ color: 'black' }}/></Th>
                        <Th align='center'>Status <ArrowDropDownIcon style={{ color: 'black' }}/></Th>
                        <Th align='center'>Position <ArrowDropDownIcon style={{ color: 'black' }}/></Th>
                        <Th align='center'>Action</Th>
                    </Tr>
                    <Tr>
                        <Td align='center'>EA9323</Td>
                        <Td align='center'>FDSK1</Td>
                        <Td align='center'>Shirly Tuz</Td>
                        <Td align='center'>Connected</Td>
                        <Td align='center'>Front Desk</Td>
                        <Td align='center'><ActionButton /></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>EA9324</Td>
                        <Td align='center'>FDSK2</Td>
                        <Td align='center'>Kenzie Agil</Td>
                        <Td align='center'>Connected</Td>
                        <Td align='center'>Front Desk</Td>
                        <Td align='center'><ActionButton /></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>EA9325</Td>
                        <Td align='center'>FDSK3</Td>
                        <Td align='center'>Junsef Martin</Td>
                        <Td align='center'>Connected</Td>
                        <Td align='center'>Front Desk</Td>
                        <Td align='center'><ActionButton /></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>EA9326</Td>
                        <Td align='center'>FDSK4</Td>
                        <Td align='center'>Pitir Olibar</Td>
                        <Td align='center'>Connected</Td>
                        <Td align='center'>Front Desk</Td>
                        <Td align='center'><ActionButton /></Td>
                    </Tr>
                </TableContainer>
            </ContainerGlobal>
            <Button variant="contained" size="large"
                style={{ backgroundColor: '#2E2E2E' }}>
                Create User Account
            </Button>
        </Container>
    )
}

export default UserListContainer