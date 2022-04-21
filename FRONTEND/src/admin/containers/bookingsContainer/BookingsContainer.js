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


const BookingsContainer = () => {
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
    const [show, setShow] = useState(false);

    const [showDetails, setShowDetails] = useState(false);
    const [showEditDetails, setShowEditDetails] = useState(false);
    const bday = new Date(2000, 11, 2,)

    const WalkinModal = (
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
                <ContainerGlobalRow>
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
                                Reservation No.:
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
                            <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
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
                            <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
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
                            <TextField defaultValue='0' id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
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
                            <TextField defaultValue='0' id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
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
                            <TextField defaultValue='0' id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
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
                            <TextField InputProps={{
                                readOnly: true,
                            }} value={nights}
                                id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
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

                                >
                                    <MenuItem value={'Cash'} selected>Cash (pay at the hotel)</MenuItem>
                                    <MenuItem value={'Bank'} >Bank (Metro Bank)</MenuItem>
                                    <MenuItem value={'E-Payment'} selected>E-Payment (Gcash)</MenuItem>
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

                                >

                                    <MenuItem value={'Full'} >Full payment</MenuItem>
                                    <MenuItem value={'Installment'} selected>Installment payment</MenuItem>
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
                                value='0.00'
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
                                value='0.00'
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
                                value='0.00'
                                variant="standard"
                                style={{ width: 200, margin: '5px 0px', fontWeight: 600 }}
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: <InputAdornment position="end">PHP</InputAdornment>,
                                }}
                            />
                        </ContainerGlobal>
                    </ContainerGlobalColumn>


                </ContainerGlobalRow>
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


                <ContainerGlobalRow>
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
                                value=''
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
                                value=''
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
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
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
                                value=''
                                multiline
                                rows={4}
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
                                value=''
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
                                value=''
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
                                rows={4}
                            />
                        </ContainerGlobal>
                    </ContainerGlobalColumn>

                </ContainerGlobalRow>

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
                        onClick={() => setShow(prev => !prev)}>
                        Confirm
                    </Button>
                    <Button variant="contained" size="large"
                        style={{ backgroundColor: '#FF2400' }}
                        onClick={() => setShow(prev => !prev)}>
                        Cancel
                    </Button>
                </ContainerGlobal>
            </ContainerGlobal>
        </ContainerGlobal>);


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
                <ContainerGlobalRow>
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
                                Reservation No.:
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
                                    <MenuItem value={'Installment'} selected>Installment payment</MenuItem>
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
                                Remaining Balance:
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
                                Booking status:
                            </Title>

                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Departed"
                                name="radio-buttons-group"
                                style={{ width: 'auto', margin: '10px 0px 0px 0px' }}

                            >
                                <ContainerGlobal>
                                    <ContainerGlobal
                                        direction='column'>
                                        <FormControlLabel value="Reserved" control={<Radio />} label="Reserved" disabled />
                                        <FormControlLabel value="Arrived" control={<Radio />} label="Arrived" disabled />
                                    </ContainerGlobal>
                                    <ContainerGlobal
                                        direction='column'><FormControlLabel value="Departed" control={<Radio />} label="Departed" disabled />
                                        <FormControlLabel value="NoShow" control={<Radio />} label="No Show" disabled />
                                    </ContainerGlobal>
                                </ContainerGlobal>
                            </RadioGroup>
                        </ContainerGlobal>
                    </ContainerGlobalColumn>


                </ContainerGlobalRow>
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


                <ContainerGlobalRow>
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
                                value='penduco'
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

                </ContainerGlobalRow>

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
                <ContainerGlobalRow>
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
                                Reservation No.:
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
                                >

                                    <MenuItem value={'Full'} >Full payment</MenuItem>
                                    <MenuItem value={'Installment'} selected>Installment payment</MenuItem>
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
                                Remaining Balance:
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
                                Booking status:
                            </Title>

                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Reserved"
                                name="radio-buttons-group"
                                style={{ width: 'auto', margin: '10px 0px 0px 0px' }}

                            >
                                <ContainerGlobal>
                                    <ContainerGlobal
                                        direction='column'>
                                        <FormControlLabel value="Reserved" control={<Radio />} label="Reserved" />
                                        <FormControlLabel value="Arrived" control={<Radio />} label="Arrived" />
                                    </ContainerGlobal>
                                    <ContainerGlobal
                                        direction='column'>
                                        <FormControlLabel value="Departed" control={<Radio />} label="Departed" />
                                        <FormControlLabel value="NoShow" control={<Radio />} label="No Show" />
                                    </ContainerGlobal>
                                </ContainerGlobal>
                            </RadioGroup>
                        </ContainerGlobal>
                    </ContainerGlobalColumn>


                </ContainerGlobalRow>
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


                <ContainerGlobalRow>
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
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
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
                                value='penduco'
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
                                rows={4}
                            />
                        </ContainerGlobal>
                    </ContainerGlobalColumn>

                </ContainerGlobalRow>

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
                        style={{ backgroundColor: '#FF2400' }}
                        onClick={() => setShowEditDetails(prev2 => !prev2)}>
                        Cancel
                    </Button>
                </ContainerGlobal>
            </ContainerGlobal>
        </ContainerGlobal>);













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
                    Add A Booking Reservation
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
                            <MenuItem value={'Booked Date'}>Booked Date</MenuItem>
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
                h='60vh'
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
                    Bookings
                </Title>
                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                >
                </HorizontalLine>
                <TableContainer>
                    <Tr>
                        <Th align='center'>Booking No. <ArrowDropDownIcon style={{ color: 'black' }} /> </Th>
                        <Th align='center'>Guest's Name  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Booking Date <ArrowDropUpIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Check in <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Check out <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Payment Status  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Booking Status  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Action  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                    </Tr>
                    <Tr>
                        <Td align='center'>091234568</Td>
                        <Td align='center'>Pedro Penduco</Td>
                        <Td align='center'>05/20/21</Td>
                        <Td align='center'>05/25/21</Td>
                        <Td align='center'>05/26/21</Td>
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
                                    Departed
                                </Title></ContainerGlobal>
                        </Td>
                        <Td align='center'>
                            <ActionButton
                                view={() => setShowDetails(prev => !prev)}
                                edit={() => setShowEditDetails(prev => !prev)}
                            />
                        </Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>091224568</Td>
                        <Td align='center'>Pedro Penduco</Td>
                        <Td align='center'>05/20/21</Td>
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
                        <Td align='center'>
                            <ContainerGlobal
                                w='100px'
                                h='auto'
                                margin='0px auto'
                                bg='rgb(33, 114, 255, .2)'
                                direction='row'
                                padding='2px 0px'
                                justify='center'
                                align='center'
                                border='2px solid rgb(33, 114, 255)'
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
                                    Arrived
                                </Title></ContainerGlobal>
                        </Td>
                        <Td align='center'><ActionButton /></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>091234568</Td>
                        <Td align='center'>Pedro Penduco</Td>
                        <Td align='center'>05/20/21</Td>
                        <Td align='center'>05/25/21</Td>
                        <Td align='center'>05/27/21</Td>
                        <Td align='center'>
                            <ContainerGlobal
                                w='100px'
                                h='auto'
                                margin='0px auto'
                                bg='rgb(244,194,194, .2)'
                                direction='row'
                                padding='2px 0px'
                                justify='center'
                                align='center'
                                border='2px solid rgb(255, 36, 0)'
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
                                    Cancelled
                                </Title>
                            </ContainerGlobal>
                        </Td>
                        <Td align='center'>
                            <ContainerGlobal
                                w='100px'
                                h='auto'
                                margin='0px auto'
                                bg='rgb(244,194,194, .2)'
                                direction='row'
                                padding='2px 0px'
                                justify='center'
                                align='center'
                                border='2px solid rgb(255, 36, 0)'
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
                                    No show
                                </Title>
                            </ContainerGlobal>
                        </Td>
                        <Td align='center'><ActionButton /></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>091234568</Td>
                        <Td align='center'>Pedro Penduco</Td>
                        <Td align='center'>05/20/21</Td>
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
                        <Td align='center'>
                            <ContainerGlobal
                                w='100px'
                                h='auto'
                                margin='0px auto'
                                bg='rgb(32, 219, 213, .2)'
                                direction='row'
                                padding='2px 0px'
                                justify='center'
                                align='center'
                                border='2px solid rgb(32, 219, 213)'
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
                                    Reserved
                                </Title></ContainerGlobal>
                        </Td>
                        <Td align='center'><ActionButton /></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>091234568</Td>
                        <Td align='center'>Pedro Penduco</Td>
                        <Td align='center'>05/20/21</Td>
                        <Td align='center'>05/25/21</Td>
                        <Td align='center'>05/29/21</Td>
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
                            </ContainerGlobal>
                        </Td>
                        <Td align='center'>
                            <ContainerGlobal
                                w='100px'
                                h='auto'
                                margin='0px auto'
                                bg='rgb(32, 219, 213, .2)'
                                direction='row'
                                padding='2px 0px'
                                justify='center'
                                align='center'
                                border='2px solid rgb(32, 219, 213)'
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
                                    Reserved
                                </Title></ContainerGlobal>
                        </Td>
                        <Td align='center'><ActionButton /></Td>
                    </Tr>

                </TableContainer>
            </ContainerGlobal>


            <Button variant="contained" size="large"
                style={{ backgroundColor: '#2E2E2E' }}
                onClick={() => setShow(prev => !prev)}>
                Walk-in / Reservation
            </Button>



            <Grow in={show}>{WalkinModal}</Grow>
            <Grow in={showDetails}>{viewDetails}</Grow>
            <Grow in={showEditDetails}>{EditDetails}</Grow>

        </Container>
    )
}

export default BookingsContainer