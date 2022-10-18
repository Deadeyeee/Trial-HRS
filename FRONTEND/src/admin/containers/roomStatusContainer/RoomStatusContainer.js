import React, { useEffect, useState } from 'react'
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
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios'
import { apiKey } from '../../../apiKey'


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



    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);


    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);

    const [roomId, setRoomId] = React.useState('');

    const handleChange = (event) => {
        setSelectedRoomType(event.target.value);
    };

    const [roomNumber, setRoomNumber] = React.useState('');
    const [maintenance, setMaintenance] = React.useState('Vacant');
    const [selectedRoomType, setSelectedRoomType] = React.useState("")


    const [roomTypeValue, setRoomTypeValue] = React.useState([])
    const [roomValue, setRoomValue] = React.useState([])

    useEffect(() => {
        axios.get(apiKey+'api/getAllRoomType').then((res) => {
            setRoomTypeValue(res.data)
            console.log(roomTypeValue)
        }).catch((err) => {
            console.log(err.res)
        })

        axios.get(apiKey+'api/getAllRoom').then((res) => {
            setRoomValue(res.data)
            console.log(roomValue)
        }).catch((err) => {
            console.log(err.res)
        })
    }, [])

    const createRoom = (e) => {
        e.preventDefault();
        roomTypeValue.map((item) => {
            if (selectedRoomType === item.roomType) {
                axios.post(apiKey+'api/addRoom',
                    {
                        roomNumber: roomNumber,
                        roomStatus: maintenance,
                        roomType_id: item.id

                    }).then((res) => {
                        console.log(res.data)
                        handleClose();
                        window.location.reload(false);
                    }).catch((err) => {
                        console.log(err.res)
                    })
            }
        })
    }

    const editRoom = (e) => {
        e.preventDefault();
        roomTypeValue.map((item) => {
            if (selectedRoomType === item.roomType) {
                axios.patch(apiKey+'api/updateRoom/' + roomId,
                    {
                        roomNumber: roomNumber,
                        roomStatus: maintenance,
                        roomType_id: item.id

                    }).then((res) => {
                        console.log(res.data)
                        handleClose3();
                        window.location.reload(false);
                    }).catch((err) => {
                        console.log(err.res)
                    })
            }
        })
    }


    const view = (roomId, roomNumber, roomType, roomStatus) => {
        setRoomNumber(roomNumber)
        setSelectedRoomType(roomType)
        setMaintenance(roomStatus)
        setRoomId(roomId)
        handleOpen2();
    }
    const edit = (roomId, roomNumber, roomType, roomStatus) => {
        setRoomNumber(roomNumber)
        setSelectedRoomType(roomType)
        setMaintenance(roomStatus)
        setRoomId(roomId)
        handleOpen3();
    }


    const roomStatusDesign = (roomStatus) => {
        if (roomStatus === "Vacant") {
            return <Td align='center'>
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
                        {roomStatus}
                    </Title>
                </ContainerGlobal>
            </Td>
        }
        else if (roomStatus === "Maintenance") {
            return <Td align='center'>
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
                        {roomStatus}
                    </Title>
                </ContainerGlobal>
            </Td>
        }
        else if (roomStatus === "Occupied") {
            return <Td align='center'>
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
                    </Title>
                </ContainerGlobal>
            </Td>
        }
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
                        <Th align='center'>Room Number <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Room Type <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Booking Date <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Check in <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Check out <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Room Status <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Action</Th>
                    </Tr>
                    {roomValue.map((item) => (
                        <Tr>
                            <Td align='center'>{item.roomNumber}</Td>
                            <Td align='center'>{item.roomType.roomType}</Td>
                            <Td align='center'>.........</Td>
                            <Td align='center'>.........</Td>
                            <Td align='center'>.........</Td>
                            {roomStatusDesign(item.roomStatus)}

                            <Td align='center'><ActionButton
                                view={() => {
                                    view(item.id, item.roomNumber, item.roomType.roomType, item.roomStatus);

                                }}
                                edit={() => {
                                    edit(item.id, item.roomNumber, item.roomType.roomType, item.roomStatus);

                                }}
                            /></Td>
                        </Tr>
                    ))}

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
                <Box sx={style}
                    component='form'
                    onSubmit={createRoom}
                >
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
                            value={roomNumber}
                            onChange={(e) => {
                                setRoomNumber(e.target.value)
                            }}
                            style={{ width: '50%', }} />

                        <FormControl
                            variant="outlined"
                            sx={{ width: '50%', }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Room Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={selectedRoomType}
                                // defaultValue={roomTypeValue[0].roomType}
                                onChange={handleChange}
                                label="roomType"
                            >
                                {roomTypeValue.map((item) => (

                                    <MenuItem value={item.roomType}>{item.roomType}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                    </InputContainer>

                    <InputContainer>

                        <FormGroup>
                            <FormControlLabel control={<Checkbox
                                value={maintenance}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setMaintenance("Maintenance")
                                    }
                                    else {
                                        setMaintenance("Vacant")
                                    }
                                }}
                                size='large' />} label='Mark as Under "Maintenance"' />
                        </FormGroup>
                    </InputContainer>

                    <InputContainer
                        style={{ marginTop: '40px', }}>


                        <Button variant="contained" size="large"
                            style={{ backgroundColor: '#50AA32' }}
                            type='submit'>
                            Add
                        </Button>
                        <Button variant="contained" size="large"
                            style={{ backgroundColor: '#FF2400' }}
                            onClick={handleClose}>
                            Cancel
                        </Button>
                    </InputContainer>


                </Box>
            </Modal>





            <Modal
                open={open2}
                onClose={handleClose2}
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
                        View Room
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
                            defaultValue={roomNumber}
                            style={{ width: '50%', }}
                            inputProps={{ readOnly: true, }}
                        />

                        <FormControl
                            variant="outlined"
                            sx={{ width: '50%', }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Room Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={selectedRoomType}
                                onChange={handleChange}
                                label="roomType"
                                disabled
                            >
                                {roomTypeValue.map((item) => (

                                    <MenuItem value={item.roomType}>{item.roomType}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                    </InputContainer>


                    <InputContainer>

                        <FormGroup>
                            <FormControlLabel control={<Checkbox
                                checked={maintenance == "Maintenance" ? true : false}
                                value={maintenance}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setMaintenance("Maintenance")
                                    }
                                    else {
                                        setMaintenance("Vacant")
                                    }
                                }}
                                size='large' disabled />} label='Mark as Under "Maintenance"' />
                        </FormGroup>
                    </InputContainer>

                    <InputContainer
                        style={{ marginTop: '40px', }}>

                        <Button variant="contained" size="large"
                            style={{ backgroundColor: '#50AA32' }}
                            onClick={handleClose2}>
                            OK
                        </Button>

                    </InputContainer>



                </Box>
            </Modal>






            <Modal
                open={open3}
                onClose={handleClose3}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}
                component='form'
                onSubmit={editRoom}>
                    <Title
                        size='33px'
                        color='black'
                        family='Helvetica'
                        fstyle='normal'
                        weight='600'
                        align='left'
                        margin='0px 0px 20px 0px'
                    >
                        Edit Room
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
                            value={roomNumber}
                            onChange={(e) => {
                                setRoomNumber(e.target.value);
                            }}
                            style={{ width: '50%', }}
                            type='number'
                        />

                        <FormControl
                            variant="outlined"
                            sx={{ width: '50%', }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Room Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={selectedRoomType}
                                onChange={handleChange}
                                label="roomType"

                            >
                                {roomTypeValue.map((item) => (

                                    <MenuItem value={item.roomType}>{item.roomType}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                    </InputContainer>


                    <InputContainer>

                        <FormGroup>
                            <FormControlLabel control={<Checkbox
                                checked={maintenance === "Maintenance" ? true : false}
                                value={maintenance}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setMaintenance("Maintenance")
                                    }
                                    else {
                                        setMaintenance("Vacant")
                                    }
                                }}
                                size='large' />} label='Mark as Under "Maintenance"' />
                        </FormGroup>
                    </InputContainer>

                    <InputContainer
                        style={{ marginTop: '40px', }}>

                        <Button variant="contained" size="large"
                            style={{ backgroundColor: '#50AA32' }}
                            type='submit'>
                            Save changes
                        </Button>
                        <Button variant="contained" size="large"
                            style={{ backgroundColor: '#FF2400' }}
                            onClick={handleClose}>
                            Cancel
                        </Button>
                    </InputContainer>



                </Box>
            </Modal>
        </Container>
    )
}

export default RoomStatusContainer