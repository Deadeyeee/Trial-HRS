
import React, { useEffect, useState } from 'react'
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
import axios from 'axios'




const PaymentContainer = () => {
    const [value, setValue] = useState(Date.now());
    const [outValue, setOutValue] = useState(Date.now() + 86400000);
    const nights = (outValue - value) / 86400000;
    console.log('nights' + nights)
    const color = "#c44242";
    const [age, setAge] = React.useState('');

    const [paymentType, setPaymentType] = React.useState('Down Payment');
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
    const [showReceipt, setShowReceipt] = useState(false);


    const [reservations, setReservations] = useState([]);

const getRoomQuantity = (value) =>{
    let count = 0;
    axios.get('http://localhost:3001/api/getAllReservationSummary').then(result => console.log(result.data.length) ).catch((err) => {
        
    });
}
    useEffect(() => {
        axios.get('http://localhost:3001/api/getAllReservation').then((result) => {
            setReservations(result.data)
        }).catch((err) => {

        });
    }, [])



    const numberFormat = (value) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'PHP'
        }).format(value);

    useEffect(()=>{
        console.log(reservations)
    }, [reservations])

    const viewDetails = (
        <ContainerGlobal
            w='100%'
            h='100%'
            radius='none'
            justify='center'
            align='center'
            bg='rgb(46, 46, 46, 0.9)'
            index='1'
            overflow='auto'
            active
        >
            <ContainerGlobal
                w='auto'
                h='auto'
                bg='white'
                direction='column'
                padding='30px'
                gap='10px'
                justify='center'
                align='center'
                margin='400px 0px 40px 0px'
            >
                <Title
                    size='26px'
                    color='black'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Bookings details
                </Title>
                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                ></HorizontalLine>
                <ContainerGlobal
                    gap='60px'>
                    <ContainerGlobalColumn>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'

                        >
                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Check In:
                            </Title>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker

                                    views={['day', 'month', 'year']}
                                    label="Check In"
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

                                            variant="standard"
                                            style={{ width: 200, margin: '5px 0px' }}
                                            helperText={null}
                                        />
                                    }
                                    disabled
                                />

                            </LocalizationProvider>
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Reservation Number:
                            </Title>
                            <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} value="2012127"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

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
                            <FormControl sx={{ width: 200, margin: '5px 0px' }} size="large" variant="standard">
                                <InputLabel id="demo-select-small" >Room Type</InputLabel>
                                <Select
                                    style={{ color: 'black', textAlign: 'left' }}
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={roomType}
                                    label="Menu"
                                    onChange={(event) => {
                                        setRoomType(event.target.value);
                                    }}
                                    disabled
                                >
                                    <MenuItem value={'Family'}>
                                        <Badge badgeContent={9} color="success" style={{ marginTop: 10 }} title='40 Available rooms'>
                                            <ContainerGlobal
                                                margin='0px 15px 0px 0px'>
                                                Family Room
                                            </ContainerGlobal>
                                        </Badge>
                                    </MenuItem>
                                    <MenuItem value={'Deluxe'} >
                                        <Badge badgeContent={4} color="success" style={{ marginTop: 10 }} title='10 Available rooms'>
                                            <ContainerGlobal
                                                margin='0px 15px 0px 0px'>
                                                Deluxe Room
                                            </ContainerGlobal>
                                        </Badge></MenuItem>
                                    <MenuItem value={'Premium'} selected>
                                        <Badge badgeContent={5} color="success" style={{ marginTop: 10 }} title='5 Available rooms'>
                                            <ContainerGlobal
                                                margin='0px 15px 0px 0px'>
                                                Premium Room
                                            </ContainerGlobal>
                                        </Badge></MenuItem>
                                </Select>
                            </FormControl>
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Room Number:
                            </Title>
                            <FormControl sx={{ width: 200, margin: '5px 0px' }} size="large" variant="standard">
                                <InputLabel id="demo-select-small" >Room Number</InputLabel>
                                <Select
                                    style={{ color: 'black', textAlign: 'left' }}
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={roomNumber}
                                    label="Menu"
                                    onChange={(event) => {
                                        setRoomNumber(event.target.value);
                                    }}
                                    disabled
                                >
                                    <MenuItem value={'R101'} selected>
                                        Room 101
                                    </MenuItem>
                                    <MenuItem value={'R102'} >
                                        Room 102
                                    </MenuItem>
                                    <MenuItem value={'R103'} disabled>
                                        Room 103
                                    </MenuItem>
                                    <MenuItem value={'R104'} >
                                        Room 104
                                    </MenuItem>
                                    <MenuItem value={'R105'} >
                                        Room 105
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Number of Adult:
                            </Title>
                            <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
                                InputProps={{
                                    readOnly: true,
                                }}
                                value='2'
                            />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Number of Kids:
                            </Title>
                            <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
                                InputProps={{
                                    readOnly: true,
                                }}
                                value='0' />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Extra Bed:
                            </Title>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                defaultValue='0' id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Extra Pillow:
                            </Title>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                defaultValue='0' id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Extra Blanket:
                            </Title>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                defaultValue='0' id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Others:
                            </Title>
                            <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
                                value='00.00'
                                type='number'
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: <InputAdornment position="end">PHP</InputAdornment>,
                                }}

                            />
                        </ContainerGlobal>
                    </ContainerGlobalColumn>
                    <ContainerGlobalColumn>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'

                        >
                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Check out:
                            </Title>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker

                                    views={['day', 'month', 'year']}
                                    label="Check out"
                                    value={outValue}
                                    onChange={(newValue) => {
                                        setOutValue(newValue);
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
                                            variant="standard"
                                            style={{ width: 200, margin: '5px 0px' }}
                                            helperText={null}
                                        />
                                    }
                                    disabled
                                />

                            </LocalizationProvider>
                        </ContainerGlobal>

                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Total Nights:
                            </Title>
                            <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={nights} />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

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
                            <FormControl sx={{ width: 200, margin: '5px 0px' }} size="small" variant="standard">
                                <InputLabel id="demo-select-small" >Payment method</InputLabel>
                                <Select
                                    style={{ color: 'black', textAlign: 'left' }}
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={paymentMethod}
                                    label="Menu"
                                    onChange={(event) => {
                                        setPaymentMethod(event.target.value);
                                    }
                                    }
                                    disabled
                                >
                                    <MenuItem value={'Cash'} selected>Cash (pay at the hotel)</MenuItem>
                                    <MenuItem value={'Bank'} >Bank (Metro Bank)</MenuItem>
                                    <MenuItem value={'E-Payment'}>E-Payment (Gcash)</MenuItem>
                                </Select>
                            </FormControl>
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Payment Type:
                            </Title>
                            <FormControl sx={{ width: 200, margin: '5px 0px' }} size="small" variant="standard">
                                <InputLabel id="demo-select-small" >Payment Type</InputLabel>
                                <Select
                                    style={{ color: 'black', textAlign: 'left' }}
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={paymentType}
                                    label="Menu"
                                    onChange={(event) => {
                                        setPaymentType(event.target.value);
                                    }}
                                    disabled
                                >

                                    <MenuItem value={'Full'} >Full payment</MenuItem>
                                    <MenuItem value={'Down Payment'} selected>Down Payment</MenuItem>
                                </Select>
                            </FormControl>
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Discount:
                            </Title>
                            <FormControl sx={{ width: 200, margin: '5px 0px' }} size="small" variant="standard">
                                <InputLabel id="demo-select-small" >Discount</InputLabel>
                                <Select
                                    style={{ color: 'black', textAlign: 'left' }}
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={discount}
                                    label="Menu"
                                    onChange={(event) => {
                                        setDiscount(event.target.value);
                                    }}
                                    disabled

                                >

                                    <MenuItem value={'none'} >None</MenuItem>
                                    <MenuItem value={'senior'}>Senior Citizen</MenuItem>
                                    <MenuItem value={'pwd'}>PWD</MenuItem>
                                </Select>
                            </FormControl>
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

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
                            <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
                                value='600.00'
                                type='number'
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: <InputAdornment position="end">PHP</InputAdornment>,
                                }}

                            />
                        </ContainerGlobal>

                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='600'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Grand Total:
                            </Title>
                            <TextField
                                id="outlined-basic"
                                label=""
                                type="number"
                                value='1200.00'
                                variant="standard"
                                style={{ width: 200, margin: '5px 0px', fontWeight: 600 }}
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: <InputAdornment position="end">PHP</InputAdornment>,
                                }}
                            />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='600'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Paid Amount:
                            </Title>
                            <TextField
                                id="outlined-basic"
                                label=""
                                type="number"
                                value='600.00'
                                variant="standard"
                                style={{ width: 200, margin: '5px 0px', fontWeight: 600 }}
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: <InputAdornment position="end">PHP</InputAdornment>,
                                }}
                            />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='600'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Remaining Balance:
                            </Title>
                            <TextField
                                id="outlined-basic"
                                label=""
                                type="number"
                                value='600.00'
                                variant="standard"
                                style={{ width: 200, margin: '5px 0px', fontWeight: 600 }}
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: <InputAdornment position="end">PHP</InputAdornment>,
                                }}
                            />
                        </ContainerGlobal>

                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >
                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='600'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Payment status:
                            </Title>

                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Pending"
                                name="radio-buttons-group"
                                style={{ width: 'auto', margin: '10px 0px 0px 0px' }}

                            >
                                <ContainerGlobal>
                                    <ContainerGlobal
                                        direction='column'>
                                        <FormControlLabel value="Pending" control={<Radio />} label="Pending" disabled />
                                        <FormControlLabel value="Paid" control={<Radio />} label="Paid" disabled />
                                    </ContainerGlobal>
                                    <ContainerGlobal
                                        direction='column'>
                                        <FormControlLabel value="Cancelled" control={<Radio />} label="Cancelled" disabled />

                                    </ContainerGlobal>
                                </ContainerGlobal>
                            </RadioGroup>
                        </ContainerGlobal>
                    </ContainerGlobalColumn>


                </ContainerGlobal>
                <Title
                    size='26px'
                    color='black'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                    margin='50px 0px 0px 0px'
                >
                    Client details
                </Title>
                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                ></HorizontalLine>


                <ContainerGlobal
                    gap='60px'>
                    <ContainerGlobalColumn>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

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
                            <TextField id="outlined-basic" label=""
                                InputProps={{
                                    readOnly: true,
                                }}
                                value='Pedro'
                                variant="standard" style={{ width: 200, margin: '5px 0px' }} />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'

                        >
                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Birthday:
                            </Title>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker

                                    views={['day', 'month', 'year']}
                                    label="Birthday"
                                    value={bday}
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

                                            variant="standard"
                                            style={{ width: 200, margin: '5px 0px' }}
                                            helperText={null}
                                        />
                                    }
                                    disabled
                                />

                            </LocalizationProvider>
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Contact Number:
                            </Title>

                            <TextField id="outlined-basic"
                                InputProps={{
                                    readOnly: true,
                                }}
                                value='09291234567'
                                label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} type='number' />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >
                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Gender:
                            </Title>

                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="male"
                                name="radio-buttons-group"
                                style={{ width: 200 }}
                                disabled
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" disabled />
                                <FormControlLabel value="male" control={<Radio />} label="Male" disabled />
                                <FormControlLabel value="other" control={<Radio />} label="Other" disabled />
                            </RadioGroup>
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

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
                            <TextField id="outlined-basic"
                                value='Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401'
                                multiline
                                rows={4}
                                InputProps={{
                                    readOnly: true,
                                }}
                                label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
                        </ContainerGlobal>

                    </ContainerGlobalColumn>

                    <ContainerGlobalColumn>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

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
                            <TextField id="outlined-basic" label=""
                                InputProps={{
                                    readOnly: true,
                                }}
                                value='Juan'
                                variant="standard" style={{ width: 200, margin: '5px 0px' }} />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Email:
                            </Title>
                            <TextField id="outlined-basic"
                                InputProps={{
                                    readOnly: true,
                                }}
                                value='pedropenduco@gmail.com'
                                label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Nationality:
                            </Title>
                            <FormControl sx={{ width: 200, margin: '5px 0px' }} size="small" variant="standard">
                                <InputLabel id="demo-select-small" >Nationality</InputLabel>
                                <Select
                                    style={{ color: 'black', textAlign: 'left' }}
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={nationality}
                                    label="Menu"
                                    onChange={(event) => {
                                        setNationality(event.target.value);
                                    }}
                                    disabled
                                >

                                    {nationalities.map(({ nationality }, index) => (
                                        <MenuItem value={nationality} >{nationality}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </ContainerGlobal>

                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='hidden'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Special Instructions:
                            </Title>
                            <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
                                multiline
                                InputProps={{
                                    readOnly: true,
                                }}
                                rows={4}
                            />
                        </ContainerGlobal>

                    </ContainerGlobalColumn>

                </ContainerGlobal>

                <ContainerGlobal
                    w='auto'
                    h='auto'
                    bg='none'
                    direction='row'
                    gap='10px'
                    justify='center'
                    align='center'
                >
                    <Button variant="contained" size="large"
                        style={{ backgroundColor: '#50AA32' }}
                        onClick={() => setShowDetails(prev2 => !prev2)}>
                        Ok
                    </Button>
                </ContainerGlobal>
            </ContainerGlobal>
        </ContainerGlobal>);




    const EditDetails = (
        <ContainerGlobal
            w='100%'
            h='100%'
            radius='none'
            justify='center'
            align='center'
            bg='rgb(46, 46, 46, 0.9)'
            index='1'
            overflow='auto'
            active
        >
            <ContainerGlobal
                w='auto'
                h='auto'
                bg='white'
                direction='column'
                padding='30px'
                gap='10px'
                justify='center'
                align='center'
                margin='400px 0px 40px 0px'
            >
                <Title
                    size='26px'
                    color='black'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Bookings details
                </Title>
                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                ></HorizontalLine>
                <ContainerGlobal
                    gap='60px'>
                    <ContainerGlobalColumn>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'

                        >
                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Check In:
                            </Title>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker

                                    views={['day', 'month', 'year']}
                                    label="Check In"
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

                                            variant="standard"
                                            style={{ width: 200, margin: '5px 0px' }}
                                            helperText={null}
                                        />
                                    }
                                    disabled
                                />

                            </LocalizationProvider>
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Reservation Number:
                            </Title>
                            <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} value="2012127"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

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
                            <FormControl sx={{ width: 200, margin: '5px 0px' }} size="large" variant="standard">
                                <InputLabel id="demo-select-small" >Room Type</InputLabel>
                                <Select
                                    style={{ color: 'black', textAlign: 'left' }}
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={roomType}
                                    label="Menu"
                                    onChange={(event) => {
                                        setRoomType(event.target.value);
                                    }}
                                    disabled
                                >
                                    <MenuItem value={'Family'}>
                                        <Badge badgeContent={9} color="success" style={{ marginTop: 10 }} title='40 Available rooms'>
                                            <ContainerGlobal
                                                margin='0px 15px 0px 0px'>
                                                Family Room
                                            </ContainerGlobal>
                                        </Badge>
                                    </MenuItem>
                                    <MenuItem value={'Deluxe'} >
                                        <Badge badgeContent={4} color="success" style={{ marginTop: 10 }} title='10 Available rooms'>
                                            <ContainerGlobal
                                                margin='0px 15px 0px 0px'>
                                                Deluxe Room
                                            </ContainerGlobal>
                                        </Badge></MenuItem>
                                    <MenuItem value={'Premium'} selected>
                                        <Badge badgeContent={5} color="success" style={{ marginTop: 10 }} title='5 Available rooms'>
                                            <ContainerGlobal
                                                margin='0px 15px 0px 0px'>
                                                Premium Room
                                            </ContainerGlobal>
                                        </Badge></MenuItem>
                                </Select>
                            </FormControl>
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Room Number:
                            </Title>
                            <FormControl sx={{ width: 200, margin: '5px 0px' }} size="large" variant="standard">
                                <InputLabel id="demo-select-small" >Room Number</InputLabel>
                                <Select
                                    style={{ color: 'black', textAlign: 'left' }}
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={roomNumber}
                                    label="Menu"
                                    onChange={(event) => {
                                        setRoomNumber(event.target.value);
                                    }}
                                    disabled
                                >
                                    <MenuItem value={'R101'} selected>
                                        Room 101
                                    </MenuItem>
                                    <MenuItem value={'R102'} >
                                        Room 102
                                    </MenuItem>
                                    <MenuItem value={'R103'} disabled>
                                        Room 103
                                    </MenuItem>
                                    <MenuItem value={'R104'} >
                                        Room 104
                                    </MenuItem>
                                    <MenuItem value={'R105'} >
                                        Room 105
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Number of Adult:
                            </Title>
                            <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
                                InputProps={{
                                    readOnly: true,
                                }}
                                value='2'
                            />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Number of Kids:
                            </Title>
                            <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
                                InputProps={{
                                    readOnly: true,
                                }}
                                value='0' />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Extra Bed:
                            </Title>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                defaultValue='0' id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Extra Pillow:
                            </Title>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                defaultValue='0' id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Extra Blanket:
                            </Title>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                defaultValue='0' id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Others:
                            </Title>
                            <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
                                value='00.00'
                                type='number'
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: <InputAdornment position="end">PHP</InputAdornment>,
                                }}

                            />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='600'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Payment Recieve:
                            </Title>
                            <TextField id="outlined-basic" label="" variant="standard" style={{ width: 130, margin: '5px 0px 5px auto' }}
                                defaultValue='00.00'
                                type='number'
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">PHP</InputAdornment>,
                                }}

                            />
                            <Button variant="contained" size="small"
                                style={{ backgroundColor: '#50AA32' }}>
                                Enter
                            </Button>
                        </ContainerGlobal>
                    </ContainerGlobalColumn>
                    <ContainerGlobalColumn>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'

                        >
                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Check out:
                            </Title>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker

                                    views={['day', 'month', 'year']}
                                    label="Check out"
                                    value={outValue}
                                    onChange={(newValue) => {
                                        setOutValue(newValue);
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
                                            variant="standard"
                                            style={{ width: 200, margin: '5px 0px' }}
                                            helperText={null}
                                        />
                                    }
                                    disabled
                                />

                            </LocalizationProvider>
                        </ContainerGlobal>

                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Total Nights:
                            </Title>
                            <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={nights} />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

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
                            <FormControl sx={{ width: 200, margin: '5px 0px' }} size="small" variant="standard">
                                <InputLabel id="demo-select-small" >Payment method</InputLabel>
                                <Select
                                    style={{ color: 'black', textAlign: 'left' }}
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={paymentMethod}
                                    label="Menu"
                                    onChange={(event) => {
                                        setPaymentMethod(event.target.value);
                                    }
                                    }
                                    disabled
                                >
                                    <MenuItem value={'Cash'} selected>Cash (pay at the hotel)</MenuItem>
                                    <MenuItem value={'Bank'} >Bank (Metro Bank)</MenuItem>
                                    <MenuItem value={'E-Payment'}>E-Payment (Gcash)</MenuItem>
                                </Select>
                            </FormControl>
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Payment Type:
                            </Title>
                            <FormControl sx={{ width: 200, margin: '5px 0px' }} size="small" variant="standard">
                                <InputLabel id="demo-select-small" >Payment Type</InputLabel>
                                <Select
                                    style={{ color: 'black', textAlign: 'left' }}
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={paymentType}
                                    label="Menu"
                                    onChange={(event) => {
                                        setPaymentType(event.target.value);
                                    }}
                                    disabled
                                >

                                    <MenuItem value={'Full'} >Full payment</MenuItem>
                                    <MenuItem value={'Down Payment'} selected>Down Payment</MenuItem>
                                </Select>
                            </FormControl>
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Discount:
                            </Title>
                            <FormControl sx={{ width: 200, margin: '5px 0px' }} size="small" variant="standard">
                                <InputLabel id="demo-select-small" >Discount</InputLabel>
                                <Select
                                    style={{ color: 'black', textAlign: 'left' }}
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={discount}
                                    label="Menu"
                                    onChange={(event) => {
                                        setDiscount(event.target.value);
                                    }}
                                    disabled

                                >

                                    <MenuItem value={'none'} >None</MenuItem>
                                    <MenuItem value={'senior'}>Senior Citizen</MenuItem>
                                    <MenuItem value={'pwd'}>PWD</MenuItem>
                                </Select>
                            </FormControl>
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

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
                            <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
                                value='600.00'
                                type='number'
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: <InputAdornment position="end">PHP</InputAdornment>,
                                }}

                            />
                        </ContainerGlobal>

                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='600'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Grand Total:
                            </Title>
                            <TextField
                                id="outlined-basic"
                                label=""
                                type="number"
                                value='1200.00'
                                variant="standard"
                                style={{ width: 200, margin: '5px 0px', fontWeight: 600 }}
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: <InputAdornment position="end">PHP</InputAdornment>,
                                }}
                            />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='600'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Paid Amount:
                            </Title>
                            <TextField
                                id="outlined-basic"
                                label=""
                                type="number"
                                value='600.00'
                                variant="standard"
                                style={{ width: 200, margin: '5px 0px', fontWeight: 600 }}
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: <InputAdornment position="end">PHP</InputAdornment>,
                                }}
                            />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='600'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Remaining Balance:
                            </Title>
                            <TextField
                                id="outlined-basic"
                                label=""
                                type="number"
                                value='600.00'
                                variant="standard"
                                style={{ width: 200, margin: '5px 0px', fontWeight: 600 }}
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: <InputAdornment position="end">PHP</InputAdornment>,
                                }}
                            />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >
                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='600'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Payment status:
                            </Title>

                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Pending"
                                name="radio-buttons-group"
                                style={{ width: 'auto', margin: '10px 0px 0px 0px' }}

                            >
                                <ContainerGlobal>
                                    <ContainerGlobal
                                        direction='column'>
                                        <FormControlLabel value="Pending" control={<Radio />} label="Pending" disabled />
                                        <FormControlLabel value="Paid" control={<Radio />} label="Paid" disabled />
                                    </ContainerGlobal>
                                    <ContainerGlobal
                                        direction='column'>
                                        <FormControlLabel value="Cancelled" control={<Radio />} label="Cancelled" />

                                    </ContainerGlobal>
                                </ContainerGlobal>
                            </RadioGroup>
                        </ContainerGlobal>
                    </ContainerGlobalColumn>


                </ContainerGlobal>
                <Title
                    size='26px'
                    color='black'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                    margin='50px 0px 0px 0px'
                >
                    Client details
                </Title>
                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                ></HorizontalLine>


                <ContainerGlobal
                    gap='60px'>
                    <ContainerGlobalColumn>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

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
                            <TextField id="outlined-basic" label=""
                                InputProps={{
                                    readOnly: true,
                                }}
                                value='Pedro'
                                variant="standard" style={{ width: 200, margin: '5px 0px' }} />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'

                        >
                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Birthday:
                            </Title>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker

                                    views={['day', 'month', 'year']}
                                    label="Birthday"
                                    value={bday}
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

                                            variant="standard"
                                            style={{ width: 200, margin: '5px 0px' }}
                                            helperText={null}
                                        />
                                    }
                                    disabled
                                />

                            </LocalizationProvider>
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Contact Number:
                            </Title>

                            <TextField id="outlined-basic"
                                InputProps={{
                                    readOnly: true,
                                }}
                                value='09291234567'
                                label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} type='number' />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >
                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Gender:
                            </Title>

                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="male"
                                name="radio-buttons-group"
                                style={{ width: 200 }}
                                disabled
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" disabled />
                                <FormControlLabel value="male" control={<Radio />} label="Male" disabled />
                                <FormControlLabel value="other" control={<Radio />} label="Other" disabled />
                            </RadioGroup>
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

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
                            <TextField id="outlined-basic"
                                value='Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401'
                                multiline
                                rows={4}
                                InputProps={{
                                    readOnly: true,
                                }}
                                label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
                        </ContainerGlobal>

                    </ContainerGlobalColumn>

                    <ContainerGlobalColumn>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

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
                            <TextField id="outlined-basic" label=""
                                InputProps={{
                                    readOnly: true,
                                }}
                                value='juan'
                                variant="standard" style={{ width: 200, margin: '5px 0px' }} />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Email:
                            </Title>
                            <TextField id="outlined-basic"
                                InputProps={{
                                    readOnly: true,
                                }}
                                value='pedropenduco@gmail.com'
                                label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
                        </ContainerGlobal>
                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Nationality:
                            </Title>
                            <FormControl sx={{ width: 200, margin: '5px 0px' }} size="small" variant="standard">
                                <InputLabel id="demo-select-small" >Nationality</InputLabel>
                                <Select
                                    style={{ color: 'black', textAlign: 'left' }}
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={nationality}
                                    label="Menu"
                                    onChange={(event) => {
                                        setNationality(event.target.value);
                                    }}
                                    disabled
                                >

                                    {nationalities.map(({ nationality }, index) => (
                                        <MenuItem value={nationality} >{nationality}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </ContainerGlobal>

                        <ContainerGlobal
                            w='420px'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='hidden'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 20px 0px'
                            >
                                Special Instructions:
                            </Title>
                            <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
                                multiline
                                InputProps={{
                                    readOnly: true,
                                }}
                                rows={4}
                            />
                        </ContainerGlobal>

                    </ContainerGlobalColumn>

                </ContainerGlobal>

                <ContainerGlobal
                    w='auto'
                    h='auto'
                    bg='none'
                    direction='row'
                    gap='10px'
                    justify='center'
                    align='center'
                >
                    <Button variant="contained" size="large"
                        style={{ backgroundColor: '#50AA32' }}
                        onClick={() => setShowEditDetails(prev2 => !prev2)}>
                        Save changes
                    </Button>
                    <Button variant="contained" size="large"
                        onClick={() => setShowEditDetails(prev2 => !prev2)}
                        title='Available after remaining balance is settled.'
                    >
                        Print Reciept
                    </Button>
                    <Button variant="contained" size="large"
                        style={{ backgroundColor: '#FF2400' }}
                        onClick={() => setShowEditDetails(prev2 => !prev2)}>
                        Cancel
                    </Button>
                </ContainerGlobal>
            </ContainerGlobal>
        </ContainerGlobal>);



    const receipt = (
        <ContainerGlobal
            w='100%'
            h='100%'
            radius='none'
            justify='center'
            align='center'
            bg='rgb(46, 46, 46, 0.9)'
            index='1'
            overflow='auto'
            active
        >

            <ContainerGlobal


                w='80%'
                h='auto'
                bg='white'
                justify='center'
                align='center'
                padding='0px 0px 20px 0px'
                direction='column'>

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

                <Title
                    size='30px'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    RMC REALTY AND REAL ESTATE DEVELOPMENT CORPORATION
                </Title>
                <Title
                    size='16px'
                    family='Helvetica'
                    fstyle='italic'
                    weight='400'
                    align='left'
                    margin='0px 0px 0px 0px'
                >
                    68 Cenacle Drive Sanville 5 Culiat Quezon City
                </Title>
                <Title
                    size='16px'
                    family='Helvetica'
                    fstyle='italic'
                    weight='400'
                    align='left'
                    margin='0px 0px 50px 0px'
                >
                    VAT Reg. TIN: 009-988-067-000
                </Title>
                <ContainerGlobal
                    gap='60px'>
                    <ContainerGlobal


                        w='100%'
                        h='auto'
                        // bg='white'
                        direction='column'
                        margin='0px 10px 50px 0px'
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
                            Client details
                        </Title>
                        <HorizontalLine
                            bg='gray'
                            w='100%'
                            margin='0px'
                        ></HorizontalLine>
                        <ContainerGlobalRow>
                            <ContainerGlobal
                                gap='20px'>
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
                                        Pedro
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
                                        Juan
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
                                        09292333312
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
                                        Cecilia Chapman 711...
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
                                        PedroJuan@gmail.com
                                    </Title>
                                </ContainerGlobalColumn>
                            </ContainerGlobal>
                        </ContainerGlobalRow>
                    </ContainerGlobal>

                    <ContainerGlobal


                        w='100%'
                        h='auto'
                        // bg='white'
                        direction='column'
                        margin='0px 0px 50px 10px'
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
                            Booking Receipt
                        </Title>
                        <HorizontalLine
                            bg='gray'
                            w='100%'
                            margin='0px'
                        ></HorizontalLine>
                        <ContainerGlobalRow>
                            <ContainerGlobal
                                gap='20px'>
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
                                        Reservation Number:
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
                                        Total Nights:
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
                                        Room:
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
                                        Adults:
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
                                        W='500px'
                                    >
                                        Discount:
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
                                        VATable:
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
                                        VAT-Tax:
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
                                        03/04/2022

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
                                        03/08/20222
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
                                        Premium Room 102
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
                                        2
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
                                        PHP 2,000.00
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
                                        PHP 7,142.85
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
                                        PHP 857.15
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
                                        PHP 8,000.00
                                    </Title>
                                </ContainerGlobalColumn>
                            </ContainerGlobal>
                        </ContainerGlobalRow>
                    </ContainerGlobal>
                </ContainerGlobal>

                <Button variant="contained" size="large"
                    onClick={() => setShowReceipt(prev2 => !prev2)}
                    title='Available after remaining balance is settled.'
                    style={{ backgroundColor: '#948566' }}
                >
                    Print Reciept
                </Button>
            </ContainerGlobal>


        </ContainerGlobal>
    );
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
                    Payments
                </Title>

                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                ></HorizontalLine>
                <TableContainer>
                    <Tr>
                        <Th align='center' style={{ fontSize: '' }}>Reservation Number</Th>
                        <Th align='center'>Guest's Name </Th>
                        <Th align='center'>Payment Type</Th>
                        <Th align='center'>Discount Type</Th>
                        <Th align='center'>Payment Made</Th>
                        <Th align='center'>Remaining Balance</Th>
                        <Th align='center'>Grand Total</Th>
                        <Th align='center'>Proof of Payment</Th>
                        <Th align='center'>Payment Status</Th>
                        <Th align='center'>Action</Th>
                    </Tr>


                    {reservations.length != 0 ?
                        reservations.map((item) => (
                            <Tr>
                                <Td align='center'>{item.reservationReferenceNumber}</Td>
                                <Td align='center'>{item.guestInformation.firstName.toLowerCase()} {item.guestInformation.lastName.toLowerCase()}</Td>
                                <Td align='center'>{item.payment.paymentType}</Td>
                                <Td align='center'>{item.payment.discount.discountType}</Td>
                                <Td align='center'>{numberFormat(item.payment.paymentMade)}</Td>
                                <Td align='center'>{numberFormat(item.payment.balance)}</Td>
                                <Td align='center'>{numberFormat(item.payment.grandTotal)}</Td>
                                <Td align='center'>{item.payment.paymentImage != null ? "Uploaded" : "Empty"}</Td>
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
                                            {item.payment.paymentStatus}
                                        </Title>
                                    </ContainerGlobal>
                                </Td>
                                <Td align='center'><ActionButtonPayment
                                    view={() => setShowDetails(prev => !prev)}
                                    pay={() => setShowEditDetails(prev => !prev)}
                                /></Td>
                            </Tr>
                        ))
                        :
                        ""}
                    {/* <Tr>
                        <Td align='center'>094534568</Td>
                        <Td align='center'>Berna Boddit</Td>
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
                        <Td align='center'><ActionButtonPayment paid

                            print={() => setShowReceipt(prev => !prev)} /></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>095644568</Td>
                        <Td align='center'>Hurarric Gaturn</Td>
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
                        <Td align='center'><ActionButtonPayment /></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>095432368</Td>
                        <Td align='center'>Kiehl Jam</Td>
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
                        <Td align='center'><ActionButtonPayment paid /></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>091114568</Td>
                        <Td align='center'>Hadjustim Karas</Td>
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
                        <Td align='center'><ActionButtonPayment /></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>094444568</Td>
                        <Td align='center'>Piyung Hiu</Td>
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
                        <Td align='center'><ActionButtonPayment /></Td>
                    </Tr> */}
                </TableContainer>

            </ContainerGlobal>

            <Grow in={showDetails}>{viewDetails}</Grow>
            <Grow in={showEditDetails}>{EditDetails}</Grow>
            <Grow in={showReceipt}>{receipt}</Grow>





        </Container>
    )
}

export default PaymentContainer