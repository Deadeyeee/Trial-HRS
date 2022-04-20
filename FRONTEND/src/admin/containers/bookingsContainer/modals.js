import React, { useState } from 'react'
import { ContainerGlobalColumn, ContainerGlobalRow, GrayTab, HeadContainer, TabContainer, TableContainer, Td, Th, Tr } from './style'
import { Title } from '../../../client/components/title/styles'
import { ContainerGlobal } from '../../components/container/container'
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Badge } from '@mui/material'



export const WalkinModal = () => {
    const [value, setValue] = useState(new Date());
    const [outValue, setOutValue] = useState(new Date());
    const color = "#c44242";

    const [paymentType, setPaymentType] = React.useState('');
    const [paymentMethod, setPaymentMethod] = React.useState('');
    const [roomType, setRoomType] = React.useState('');

    const [show, setShow] = useState(false);


    const checkout = outValue + 86400000;
    return (
        <ContainerGlobal
            w='100%'
            h='100%'
            radius='none'
            justify='center'
            align='center'
            bg='rgb(46, 46, 46, 0.5)'
            index='1'
            overflow='auto'
            active
        >
            <ContainerGlobal
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 1 }}
                w='auto'
                h='auto'
                bg='white'
                direction='column'
                padding='30px'
                gap='10px'
                justify='center'
                align='center'
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
                                    value={checkout}
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
                                Room Type:
                            </Title>
                            <FormControl sx={{ width: 200, margin: '5px 0px' }} size="large" variant="standard">
                                <InputLabel id="demo-select-small" >Payment method</InputLabel>
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
                                        <Badge badgeContent={40} color="success" style={{ marginTop: 10 }} title='40 Available rooms'>
                                            <ContainerGlobal
                                                margin='0px 15px 0px 0px'>
                                                Family Room
                                            </ContainerGlobal>
                                        </Badge>
                                    </MenuItem>
                                    <MenuItem value={'Deluxe'} >
                                        <Badge badgeContent={10} color="success" style={{ marginTop: 10 }} title='10 Available rooms'>
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
                                Number of Days:
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
                                Birthday:
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
                                Address:
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
                                Contact Number:
                            </Title>
                            <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
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
                                Email:
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
                                Nationality:
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
};