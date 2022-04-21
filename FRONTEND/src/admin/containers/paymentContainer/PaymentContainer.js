
import React, { useState } from 'react'
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine'
import { TextInput } from '../../../client/components/textBox/style'
import { Title } from '../../../client/components/title/styles'
import { BlackTab, Container, ContainerGlobalColumn, ContainerGlobalRow, GrayTab, HeadContainer, HeadContainerSmall, TabContainer, TableContainer, Td, Th, Tr } from './style'

import { ContainerGlobal } from '../../components/container/container'
import TextField from '@mui/material/TextField';
import { Button as Button2 } from '../../../client/components/button/styles'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ActionButton from '../../components/actionButton/ActionButton'
import Grow from '@mui/material/Grow';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Badge, FormControlLabel, Radio, RadioGroup, TextareaAutosize, FormControl } from '@mui/material'
import { nationalities } from '../../../nationalities'
import { Global } from '@emotion/react'
import ActionButtonReservation from '../../components/actionButton/ActionButtonReservation'
import ActionButtonPayment from '../../components/actionButton/ActionButtonPayment'
const PaymentContainer = () => {
    const [value, setValue] = useState(Date.now());
    const [outValue, setOutValue] = useState(Date.now() + 86400000);
    const nights = (outValue - value) / 86400000;
    console.log('nights' + nights)
    const color = "#c44242";
    const [age, setAge] = React.useState('');

    const [paymentType, setPaymentType] = React.useState('Installment');
    const [paymentMethod, setPaymentMethod] = React.useState('Cash');
    const [roomType, setRoomType] = React.useState('Deluxe');
    const [discount, setDiscount] = React.useState('none');
    const [roomNumber, setRoomNumber] = React.useState('R101');


    const [nationality, setNationality] = useState('Filipino')
    console.log(outValue)
    const bday = new Date(2000, 11, 2,)


    console.log(outValue)
    const [show, setShow] = useState(false);

    const [showDetails, setShowDetails] = useState(false);
    const [showEditDetails, setShowEditDetails] = useState(false);
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
                    Manage Payments
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
                        style={{ width: 500 }} />
                    <LocalizationProvider dateAdapter={AdapterDateFns}
                    >
                        <DatePicker
                            views={['day', 'month', 'year']}
                            label="Start Date"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) =>
                                <TextField
                                    {...params}
                                    sx={{
                                        svg: { color: 'black' },
                                        input: { color },
                                        label: { color },
                                        color: { color },
                                        input: { color: 'black', fontWeight: 'bold' },

                                    }}
                                    style={{ width: 200, margin: '0px 0px 0px 20px' }}
                                    helperText={null}
                                />
                            }
                        />

                    </LocalizationProvider>
                    <ArrowForwardIcon />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker

                            views={['day', 'month', 'year']}
                            label="End Date"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) =>
                                <TextField
                                    {...params}
                                    sx={{
                                        svg: { color: 'black' },
                                        input: { color },
                                        label: { color },
                                        color: { color },
                                        input: { color: 'black', fontWeight: 'bold' },

                                    }}
                                    style={{ width: 200 }}
                                    helperText={null}
                                />
                            }
                        />

                    </LocalizationProvider>
                    <FormControl sx={{ m: 1, minWidth: 120, }} size="small">
                        <InputLabel id="demo-select-small" >Menu</InputLabel>
                        <Select
                            style={{ color: 'black', fontWeight: 'bold' }}
                            labelId="roomType-select-small"
                            id="demo-select-small"
                            value={age}
                            label="Menu"
                            onChange={(event) => {
                                setAge(event.target.value);
                            }}

                        >

                            <MenuItem value={'Check-in'} selected>Check-in</MenuItem>
                            <MenuItem value={'Check-out'}>Check-out</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained"
                        style={{ backgroundColor: 'rgb(80, 170, 50)' }}
                        startIcon={<FilterAltIcon />}>
                        Filter
                    </Button>
                    <Button variant="contained"
                        style={{ backgroundColor: 'rgb(255, 36, 0)' }}
                        startIcon={<CloseIcon />}>
                        clear
                    </Button>



                </ContainerGlobal>
            </ContainerGlobal>

            <ContainerGlobal
                w='90%'
                h='65vh'
                bg='white'
                direction='column'
                padding='30px'
                margin='0px 0px 50px 0px'
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
                    Payments
                </Title>

                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                ></HorizontalLine>
                <TableContainer>
                    <Tr>
                        <Th align='center'>Booking Number <ArrowDropDownIcon style={{ color: 'black' }}/></Th>
                        <Th align='center'>Guest's Name <ArrowDropDownIcon style={{ color: 'black' }}/></Th>
                        <Th align='center'>Room Type <ArrowDropDownIcon style={{ color: 'black' }}/></Th>
                        <Th align='center'>Room Number <ArrowDropDownIcon style={{ color: 'black' }}/></Th>
                        <Th align='center'>Check in <ArrowDropDownIcon style={{ color: 'black' }}/></Th>
                        <Th align='center'>Check out <ArrowDropDownIcon style={{ color: 'black' }}/></Th>
                        <Th align='center'>Balance <ArrowDropDownIcon style={{ color: 'black' }}/></Th>
                        <Th align='center'>Status <ArrowDropDownIcon style={{ color: 'black' }}/></Th>
                        <Th align='center'>Action <ArrowDropDownIcon style={{ color: 'black' }}/></Th>
                    </Tr>
                    <Tr>
                        <Td align='center'>20212304393</Td>
                        <Td align='center'>Pedro Penduco</Td>
                        <Td align='center'>Deluxe Room</Td>
                        <Td align='center'>101</Td>
                        <Td align='center'>03/04/2022</Td>
                        <Td align='center'>03/06/2022</Td>
                        <Td align='center'>00.00 PHP</Td>
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
                        <Td align='center'><ActionButtonPayment/></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>20212304393</Td>
                        <Td align='center'>Pedro Penduco</Td>
                        <Td align='center'>Deluxe Room</Td>
                        <Td align='center'>102</Td>
                        <Td align='center'>01/04/2022</Td>
                        <Td align='center'>01/06/2022</Td>
                        <Td align='center'>00.00 PHP</Td>
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
                        <Td align='center'><ActionButtonPayment/></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>20212304393</Td>
                        <Td align='center'>Pedro Penduco</Td>
                        <Td align='center'>Premium Room</Td>
                        <Td align='center'>103</Td>
                        <Td align='center'>01/04/2022</Td>
                        <Td align='center'>01/06/2022</Td>
                        <Td align='center'>600.00 PHP</Td>
                        <Td align='center'>
                            <ContainerGlobal
                                w='100px'
                                h='auto'
                                margin='0px auto'
                                bg='rgb(253, 161, 114, .2)'
                                direction='row'
                                padding='2px 0px'
                                justify='center'
                                align='center'
                                border='2px solid rgb(255, 215, 0)'
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
                                    Pending
                                </Title>
                            </ContainerGlobal></Td>
                        <Td align='center'><ActionButtonPayment/></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>20212304393</Td>
                        <Td align='center'>Pedro Penduco</Td>
                        <Td align='center'>Deluxe Room</Td>
                        <Td align='center'>104</Td>
                        <Td align='center'>01/04/2022</Td>
                        <Td align='center'>01/06/2022</Td>
                        <Td align='center'>00.00 PHP</Td>
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
                        <Td align='center'><ActionButtonPayment/></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>20212304393</Td>
                        <Td align='center'>Pedro Penduco</Td>
                        <Td align='center'>Premium Room</Td>
                        <Td align='center'>105</Td>
                        <Td align='center'>01/04/2022</Td>
                        <Td align='center'>01/06/2022</Td>
                        <Td align='center'>500.00 PHP</Td>
                        <Td align='center'>
                        <ContainerGlobal
                                w='100px'
                                h='auto'
                                margin='0px auto'
                                bg='rgb(253, 161, 114, .2)'
                                direction='row'
                                padding='2px 0px'
                                justify='center'
                                align='center'
                                border='2px solid rgb(255, 215, 0)'
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
                                    Pending
                                </Title>
                            </ContainerGlobal></Td>
                        <Td align='center'><ActionButtonPayment/></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>20212304393</Td>
                        <Td align='center'>Pedro Penduco</Td>
                        <Td align='center'>Deluxe Room</Td>
                        <Td align='center'>106</Td>
                        <Td align='center'>01/04/2022</Td>
                        <Td align='center'>01/06/2022</Td>
                        <Td align='center'>800.00 PHP</Td>
                        <Td align='center'>
                        <ContainerGlobal
                                w='100px'
                                h='auto'
                                margin='0px auto'
                                bg='rgb(253, 161, 114, .2)'
                                direction='row'
                                padding='2px 0px'
                                justify='center'
                                align='center'
                                border='2px solid rgb(255, 215, 0)'
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
                                    Pending
                                </Title>
                            </ContainerGlobal></Td>
                        <Td align='center'><ActionButtonPayment/></Td>
                    </Tr>
                </TableContainer>

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