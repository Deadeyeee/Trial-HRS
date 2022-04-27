import React, { useState } from 'react'
import { BlackTab, Container, ContainerGlobalColumn, ContainerGlobalRow, GrayTab, HeadContainer, TabContainer, TableContainer, Td, Th, Tr } from './style'
import { Title } from '../../../client/components/title/styles'
import { ContainerGlobal } from '../../components/container/container'
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine'
import { TextInput } from '../../../client/components/textBox/style'
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


import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import ActionButtonMessages from '../../components/actionButton/ActionButtonMessages';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import { Reservation } from '../analytics/Reservation'
import TimelineIcon from '@mui/icons-material/Timeline';
import Occupancy from '../analytics/Occupancy'

export const ReportContainer = () => {
    const [value, setValue] = useState(Date.now());
    const [valueEnd, setValueEnd] = useState(Date.now());
    const [valueOcc, setValueOcc] = useState(Date.now());
    const [outValue, setOutValue] = useState(Date.now() + 86400000);
    const nights = (outValue - value) / 86400000;
    console.log('nights' + nights)
    const color = "#c44242";
    const date = Date.now();
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


    const [value2, setValue2] = React.useState('1');
    const [value3, setValue3] = React.useState('1');

    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
    }

    const handleChange3 = (event, newValue) => {
        setValue3(newValue);
    }











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
                    Manage Reports
                </Title>
            </HeadContainer>


            <ContainerGlobal
                w='90%'
                h='auto'
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
                    Reservation Report
                </Title>
                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                >
                </HorizontalLine>

                <TabContext value={value2}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange2} aria-label="lab API tabs example">
                            <Tab label="Daily" value="1" />
                            <Tab label="Monthly" value="2" />
                            <Tab label="Quarterly" value="3" />
                            <Tab label="Yearly" value="4" />
                            <Tab label={<DonutSmallIcon />} value="5" />
                        </TabList>
                    </Box>


                    <TabPanel value="1" >
                        <ContainerGlobal
                            direction='column'
                            w='100%'
                            overflow='visible'>
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
                                        value={valueEnd}
                                        onChange={(newValue) => {
                                            setValueEnd(newValue);
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
                            <TableContainer>
                                <Tr>
                                    <Th align='center'>Reservation Number <ArrowDropDownIcon style={{ color: 'black' }} /> </Th>
                                    <Th align='center'>Guest's Name  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                                    <Th align='center'>Room Type  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                                    <Th align='center' style={{ width: '190px' }}>Room Number  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                                    <Th align='center'>Room Rate  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                                    <Th align='center'>Check in <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                                    <Th align='center'>Check out <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                                    <Th align='center'>Total Nights <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                                    <Th align='center'>Subtotal <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                                </Tr>
                                <Tr>
                                    <Td align='center'>091234568</Td>
                                    <Td align='center'>Pedro Juan</Td>
                                    <Td align='center'>Deluxe</Td>
                                    <Td align='center'>103</Td>
                                    <Td align='center'>PHP 1,500.00</Td>
                                    <Td align='center'>05/25/2021</Td>
                                    <Td align='center'>05/29/2021</Td>
                                    <Td align='center'>
                                        4
                                    </Td>

                                    <Td align='center'>PHP 6,000.00</Td>
                                </Tr>
                                <Tr>
                                    <Td align='center'>091234569</Td>
                                    <Td align='center'>Emerald Santino</Td>
                                    <Td align='center'>Family</Td>
                                    <Td align='center'>201</Td>
                                    <Td align='center'>PHP 2,500.00</Td>
                                    <Td align='center'>05/25/2021</Td>
                                    <Td align='center'>05/26/2021</Td>
                                    <Td align='center'>
                                        1
                                    </Td>

                                    <Td align='center'>PHP 2,500.00</Td>
                                </Tr>
                                <Tr>
                                    <Td align='center'>091234570</Td>
                                    <Td align='center'>Pedro Penduco</Td>
                                    <Td align='center'>Deluxe</Td>
                                    <Td align='center'>104</Td>
                                    <Td align='center'>PHP 1,500.00</Td>
                                    <Td align='center'>05/25/2021</Td>
                                    <Td align='center'>05/29/2021</Td>
                                    <Td align='center'>
                                        4
                                    </Td>

                                    <Td align='center'>PHP 6,000.00</Td>
                                </Tr>
                                <Tr>
                                    <Td align='center'>091234571</Td>
                                    <Td align='center'>Pedro Juan</Td>
                                    <Td align='center'>Premium</Td>
                                    <Td align='center'>102</Td>
                                    <Td align='center'>PHP 1,000.00</Td>
                                    <Td align='center'>03/04/2022</Td>
                                    <Td align='center'>03/08/2022</Td>
                                    <Td align='center'>
                                        4
                                    </Td>

                                    <Td align='center'>PHP 4,000.00</Td>
                                </Tr>



                            </TableContainer>

                            <HorizontalLine
                                bg='gray'
                                w='100%'
                                margin='0px 0px 20px 0px'
                            >
                            </HorizontalLine>
                            <Title
                                size='26px'
                                color='black'
                                family='Helvetica'
                                fstyle='normal'
                                weight='400'
                                align='left'
                                margin='0px 0px 0px auto'
                            >
                                Total Reservations: <b style={{ color: 'green' }}>4</b>
                            </Title>
                            <Title
                                size='26px'
                                color='black'
                                family='Helvetica'
                                fstyle='normal'
                                weight='400'
                                align='left'
                                margin='20px 0px 0px auto'
                            >
                                Total Income: <b style={{ color: 'green' }}>PHP 18,500.00</b>
                            </Title>

                            <Button
                                variant="contained"
                                size="large"

                                style={{ backgroundColor: '#2f2f2f', margin: '15px 0px 0px auto' }}>
                                Print Reservation report
                            </Button>
                        </ContainerGlobal>
                    </TabPanel>




                    <TabPanel value="2" style={{ width: '97%' }}>

                        <ContainerGlobal
                            direction='column'
                            w='100%'
                            overflow='visible'>
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
                                        views={['month', 'year']}
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

                                        views={['month', 'year']}
                                        label="End Date"
                                        value={valueEnd}
                                        onChange={(newValue) => {
                                            setValueEnd(newValue);
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
                            <TableContainer>
                                <Tr>
                                    <Th align='center'>Year <ArrowDropDownIcon style={{ color: 'black' }} /> </Th>
                                    <Th align='center'>Month <ArrowDropDownIcon style={{ color: 'black' }} /> </Th>
                                    <Th align='center'>Total Reservation  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                                    <Th align='center'>Quarter Income  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                                </Tr>
                                <Tr>
                                    <Td align='center'>2020</Td>
                                    <Td align='center'>January</Td>
                                    <Td align='center'>6</Td>

                                    <Td align='center'>PHP 22,200.00</Td>
                                </Tr>
                                <Tr>
                                    <Td align='center'>2020</Td>
                                    <Td align='center'>Feburuary</Td>
                                    <Td align='center'>6</Td>

                                    <Td align='center'>PHP 22,200.00</Td>
                                </Tr>
                                <Tr>
                                    <Td align='center'>2020</Td>
                                    <Td align='center'>March</Td>
                                    <Td align='center'>7</Td>

                                    <Td align='center'>PHP 30,363.00</Td>
                                </Tr>
                                <Tr>
                                    <Td align='center'>2020</Td>
                                    <Td align='center'>April</Td>
                                    <Td align='center'>7</Td>

                                    <Td align='center'>PHP 30,362.00</Td>
                                </Tr>




                            </TableContainer>

                            <HorizontalLine
                                bg='gray'
                                w='100%'
                                margin='0px 0px 20px 0px'
                            >
                            </HorizontalLine>

                            <Title
                                size='26px'
                                color='black'
                                family='Helvetica'
                                fstyle='normal'
                                weight='400'
                                align='left'
                                margin='0px 0px 0px auto'
                            >
                                Total Monthly Reservation : <b style={{ color: 'green' }}>26</b>
                            </Title>
                            <Title
                                size='26px'
                                color='black'
                                family='Helvetica'
                                fstyle='normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 0px auto'
                            >
                                Total Monthly Income: <b style={{ color: 'green' }}>PHP 105,125.00</b>
                            </Title>

                            <Button
                                variant="contained"
                                size="large"

                                style={{ backgroundColor: '#2f2f2f', margin: '15px 0px 0px auto' }}>
                                Print Reservation report
                            </Button>

                        </ContainerGlobal>
                    </TabPanel>





                    <TabPanel value="3" style={{ width: '97%' }}>

                        <ContainerGlobal
                            direction='column'
                            w='100%'
                            overflow='visible'>
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
                                        views={['year']}
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

                                        views={['year']}
                                        label="End Date"
                                        value={valueEnd}
                                        onChange={(newValue) => {
                                            setValueEnd(newValue);
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
                            <TableContainer>
                                <Tr>
                                    <Th align='center'>Year <ArrowDropDownIcon style={{ color: 'black' }} /> </Th>
                                    <Th align='center'>Quarter <ArrowDropDownIcon style={{ color: 'black' }} /> </Th>
                                    <Th align='center'>Total Reservation  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                                    <Th align='center'>Quarter Income  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                                </Tr>
                                <Tr>
                                    <Td align='center'>2020</Td>
                                    <Td align='center'>QUARTER 1</Td>
                                    <Td align='center'>26</Td>

                                    <Td align='center'>PHP 105,125.00</Td>
                                </Tr>
                                <Tr>
                                    <Td align='center'>2020</Td>
                                    <Td align='center'>QUARTER 2</Td>
                                    <Td align='center'>26</Td>

                                    <Td align='center'>PHP 105,125.00</Td>
                                </Tr>
                                <Tr>
                                    <Td align='center'>2020</Td>
                                    <Td align='center'>QUARTER 3</Td>
                                    <Td align='center'>26</Td>

                                    <Td align='center'>PHP 105,125.00</Td>
                                </Tr>
                                <Tr>
                                    <Td align='center'>2020</Td>
                                    <Td align='center'>QUARTER 4</Td>
                                    <Td align='center'>27</Td>

                                    <Td align='center'>PHP 105,125.00</Td>
                                </Tr>




                            </TableContainer>

                            <HorizontalLine
                                bg='gray'
                                w='100%'
                                margin='0px 0px 20px 0px'
                            >
                            </HorizontalLine>

                            <Title
                                size='26px'
                                color='black'
                                family='Helvetica'
                                fstyle='normal'
                                weight='400'
                                align='left'
                                margin='0px 0px 0px auto'
                            >
                                Total Reservation : <b style={{ color: 'green' }}>105</b>
                            </Title>
                            <Title
                                size='26px'
                                color='black'
                                family='Helvetica'
                                fstyle='normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 0px auto'
                            >
                                Total Income: <b style={{ color: 'green' }}>PHP 420,500.00</b>
                            </Title>

                            <Button
                                variant="contained"
                                size="large"

                                style={{ backgroundColor: '#2f2f2f', margin: '15px 0px 0px auto' }}>
                                Print Reservation report
                            </Button>
                        </ContainerGlobal>
                    </TabPanel>





                    <TabPanel value="4" style={{ width: '97%' }}>
                        <ContainerGlobal
                            direction='column'
                            w='100%'
                            overflow='visible'>

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
                                        views={['year']}
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

                                        views={['year']}
                                        label="End Date"
                                        value={valueEnd}
                                        onChange={(newValue) => {
                                            setValueEnd(newValue);
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
                            <TableContainer>
                                <Tr>
                                    <Th align='center'>Year <ArrowDropDownIcon style={{ color: 'black' }} /> </Th>
                                    <Th align='center'>Total Reservation  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                                    <Th align='center'>Annual Income  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                                </Tr>
                                <Tr>
                                    <Td align='center'>2020</Td>
                                    <Td align='center'>105</Td>

                                    <Td align='center'>PHP 420,500.00</Td>
                                </Tr>
                                <Tr>
                                    <Td align='center'>2019</Td>
                                    <Td align='center'>720</Td>

                                    <Td align='center'>PHP 3,262,000.00</Td>
                                </Tr>
                                <Tr>
                                    <Td align='center'>2018</Td>
                                    <Td align='center'>500</Td>

                                    <Td align='center'>PHP 2,262,000.00</Td>
                                </Tr>




                            </TableContainer>

                            <HorizontalLine
                                bg='gray'
                                w='100%'
                                margin='0px 0px 20px 0px'
                            >
                            </HorizontalLine>

                            <Title
                                size='26px'
                                color='black'
                                family='Helvetica'
                                fstyle='normal'
                                weight='400'
                                align='left'
                                margin='0px 0px 0px auto'
                            >
                                Total Anual Reservation : <b style={{ color: 'green' }}>1,325</b>
                            </Title>
                            <Title
                                size='26px'
                                color='black'
                                family='Helvetica'
                                fstyle='normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 0px auto'
                            >
                                Total Anual Income: <b style={{ color: 'green' }}>PHP 5,944,500.00</b>
                            </Title>

                            <Button
                                variant="contained"
                                size="large"

                                style={{ backgroundColor: '#2f2f2f', margin: '15px 0px 0px auto' }}>
                                Print Reservation report
                            </Button>
                        </ContainerGlobal>

                    </TabPanel>









                    <TabPanel value="5" style={{ width: '97%' }}>
                        <ContainerGlobal
                            direction='column'
                            w='100%'
                            overflow='visible'>

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
                                        views={['year']}
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

                                        views={['year']}
                                        label="End Date"
                                        value={valueEnd}
                                        onChange={(newValue) => {
                                            setValueEnd(newValue);
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
                            <ContainerGlobal margin='0px auto'
                                w='50%'>
                                <Reservation />
                            </ContainerGlobal>
                            <HorizontalLine
                                bg='gray'
                                w='100%'
                                margin='0px 0px 20px 0px'
                            >
                            </HorizontalLine>


                            <Button
                                variant="contained"
                                size="large"

                                style={{ backgroundColor: '#2f2f2f', margin: '15px 0px 0px auto' }}>
                                Print Visual report
                            </Button>
                        </ContainerGlobal>

                    </TabPanel>
                </TabContext>


            </ContainerGlobal>









            <ContainerGlobal
                w='90%'
                h='auto'
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
                    Average Room Occupancy
                </Title>
                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                >
                </HorizontalLine>

                <TabContext value={value3}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange3} aria-label="lab API tabs example">
                            <Tab label="Daily" value="1" />
                            <Tab label={<TimelineIcon />} value="2" title='Analytics' />
                        </TabList>
                    </Box>


                    <TabPanel value="1" style={{ width: '97%' }}>
                        <ContainerGlobal
                            direction='column'
                            w='100%'
                            overflow='visible'>
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
                                        label="From"
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
                                        label="To"
                                        value={valueOcc}
                                        onChange={(newValue) => {
                                            setValueOcc(newValue);
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
                            <TableContainer>
                                <Tr>
                                    <Th align='center'>From <ArrowDropDownIcon style={{ color: 'black' }} /> </Th>
                                    <Th align='center'>To  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                                    <Th align='center'>Average Room Occupied  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                                    <Th align='center'>Total Number of Rooms  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                                </Tr>
                                <Tr>
                                    <Td align='center'>03/04/2022</Td>
                                    <Td align='center'>03/08/2022</Td>
                                    <Td align='center'>45.4</Td>
                                    <Td align='center'>64</Td>
                                </Tr>




                            </TableContainer>

                            <HorizontalLine
                                bg='gray'
                                w='100%'
                                margin='0px 0px 20px 0px'
                            >
                            </HorizontalLine>
                            <Title
                                size='26px'
                                color='black'
                                family='Helvetica'
                                fstyle='normal'
                                weight='400'
                                align='left'
                                margin='0px 0px 0px auto'
                            >
                                Average Room Occupancy : <b style={{ color: 'green' }}>71%</b>
                            </Title>

                            <Button
                                variant="contained"
                                size="large"

                                style={{ backgroundColor: '#2f2f2f', margin: '15px 0px 0px auto' }}>
                                Print Average Room Occupancy
                            </Button>
                        </ContainerGlobal> </TabPanel>









                    <TabPanel value="2" style={{ width: '97%' }}>
                        <ContainerGlobal
                            direction='column'
                            w='100%'
                            overflow='visible'>
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
                                        views={['month', 'year']}
                                        label="From"
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

                                        views={['month', 'year']}
                                        label="To"
                                        value={valueOcc}
                                        onChange={(newValue) => {
                                            setValueOcc(newValue);
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

                            <ContainerGlobal
                                w='100%'
                                justify='center'
                            >
                                <Occupancy />
                            </ContainerGlobal>

                            <HorizontalLine
                                bg='gray'
                                w='100%'
                                margin='0px 0px 20px 0px'
                            >
                            </HorizontalLine>
                            <Title
                                size='26px'
                                color='black'
                                family='Helvetica'
                                fstyle='normal'
                                weight='400'
                                align='left'
                                margin='0px 0px 0px auto'
                            >
                                Average Room Occupancy : <b style={{ color: 'green' }}>47%</b>
                            </Title>

                            <Button
                                variant="contained"
                                size="large"

                                style={{ backgroundColor: '#2f2f2f', margin: '15px 0px 0px auto' }}>
                                Print Room Occupancy Visual Report
                            </Button>
                        </ContainerGlobal> </TabPanel>
                </TabContext>
            </ContainerGlobal >




        </Container >
    )
}
