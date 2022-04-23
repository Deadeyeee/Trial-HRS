import React, { useState } from 'react'
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine'
import { Title } from '../../../client/components/title/styles'
import { ContainerGlobal } from '../../components/container/container'
import { Container, HeadContainer, TableContainer, Td, Th, Tr } from './style'
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { InputContainer } from '../../../client/containers/informationForm/style';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ActionButton from '../../components/actionButton/ActionButton'

const style = {
    position: 'absolute',
    display: 'flex',
    top: '50%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center ',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    height: 'auto',
    overflow: 'hidden',
    width: '40%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: '20px 30px 40px 30px',
    borderRadius: '.5rem',
};

const RoomStatusContainer = () => {

    const [value, setValue] = useState(Date.now());
    const color = "#c44242";
    const [age, setAge] = React.useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [roomType, setroomType] = React.useState('');

    const handleChange = (event) => {
        setroomType(event.target.value);
    };

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
                        <Th align='center'>Room Number <ArrowDropDownIcon style={{ color: 'black' }}/></Th>
                        <Th align='center'>Room Type <ArrowDropDownIcon style={{ color: 'black' }}/></Th>
                        <Th align='center'>Booking Date <ArrowDropDownIcon style={{ color: 'black' }}/></Th>
                        <Th align='center'>Check in <ArrowDropDownIcon style={{ color: 'black' }}/></Th>
                        <Th align='center'>Check out <ArrowDropDownIcon style={{ color: 'black' }}/></Th>
                        <Th align='center'>Room Status <ArrowDropDownIcon style={{ color: 'black' }}/></Th>
                        <Th align='center'>Action</Th>
                    </Tr>
                    <Tr>
                        <Td align='center'>101</Td>
                        <Td align='center'>Deluxe</Td>
                        <Td align='center'>.........</Td>
                        <Td align='center'>.........</Td>
                        <Td align='center'>.........</Td>
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
                                    Vacant
                                </Title></ContainerGlobal>
                        </Td>
                        <Td align='center'><ActionButton/></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>102</Td>
                        <Td align='center'>Deluxe</Td>
                        <Td align='center'>.........</Td>
                        <Td align='center'>.........</Td>
                        <Td align='center'>.........</Td>
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
                                    Vacant
                                </Title></ContainerGlobal></Td>
                        <Td align='center'><ActionButton/></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>103</Td>
                        <Td align='center'>Premium</Td>
                        <Td align='center'>05/20/21</Td>
                        <Td align='center'>05/25/21</Td>
                        <Td align='center'>05/29/21</Td>
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
                                    Occupied
                                </Title></ContainerGlobal></Td>
                        <Td align='center'><ActionButton/></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>104</Td>
                        <Td align='center'>Deluxe</Td>
                        <Td align='center'>.........</Td>
                        <Td align='center'>.........</Td>
                        <Td align='center'>.........</Td>
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
                                    Vacant
                                </Title></ContainerGlobal>
                        </Td>
                        <Td align='center'><ActionButton/></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>105</Td>
                        <Td align='center'>Premium</Td>
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
                                    Maintenance
                                </Title></ContainerGlobal></Td>
                        <Td align='center'><ActionButton/></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>106</Td>
                        <Td align='center'>Deluxe</Td>
                        <Td align='center'>05/20/21</Td>
                        <Td align='center'>05/25/21</Td>
                        <Td align='center'>05/29/21</Td>
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
                                    Occupied
                                </Title></ContainerGlobal></Td>
                        <Td align='center'><ActionButton/></Td>
                    </Tr>
                </TableContainer>
            </ContainerGlobal>
            <Button
                variant="contained"
                size="large"
                onClick={handleOpen}
                style={{ backgroundColor: '#2E2E2E' }}>
                Add Room
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Title
                        size='33px'
                        color='black'
                        family='Helvetica'
                        fstyle='normal'
                        weight='600'
                        align='left'
                        margin='0px 0px 20px 0px'
                    >
                        Add Room
                    </Title>

                    <HorizontalLine
                        bg='gray'
                        w='100%'
                        margin='0px 0px 40px 0px'
                    ></HorizontalLine>

                    <InputContainer
                        w='90%'
                    >
                        <TextField
                            placeholder='Room Number'
                            label="Room No."
                            variant="outlined"
                            style={{ width: '50%', }} />

                        <FormControl
                            variant="outlined"
                            sx={{ width: '50%', }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Room Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={roomType}
                                onChange={handleChange}
                                label="roomType"
                            >
                                <MenuItem value={"Family"}>Family</MenuItem>
                                <MenuItem value={"Premium"}>Premium</MenuItem>
                                <MenuItem value={"Deluxe"}>Deluxe</MenuItem>
                            </Select>
                        </FormControl>

                    </InputContainer>

                    <InputContainer
                        style={{ marginTop: '40px', }}>

                        <Button
                            variant="contained"
                            size="large"
                            style={{ backgroundColor: "rgba(219, 51, 51, 1)" }}
                            onClick={handleClose}>
                            Cancel
                        </Button>

                        <Button
                            variant="contained"
                            size="large"
                            style={{ backgroundColor: '#0C4426' }}
                            onClick={handleClose}>
                            Add
                        </Button>

                    </InputContainer>
                </Box>
            </Modal>
        </Container>
    )
}

export default RoomStatusContainer