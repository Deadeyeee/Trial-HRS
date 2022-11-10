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
import { useRef } from 'react'
import { Pagination } from '@mui/material'
import logo from '../../../client/images/logo.png'
import { CircularProgress, Grow } from '@mui/material';
import { CheckCircleOutline, Close, HighlightOffSharp } from '@mui/icons-material';

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
    const handleClose = () => {
        setOpen(false)
        setRoomNumber(0)
        setSelectedRoomType('')
    };


    const [roomPage, setRoomPage] = useState(1)

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => {
        setOpen2(false)
        setRoomNumber('')
        setSelectedRoomType('')
        setMaintenance('Vacant')
        setRoomId('')
    };


    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => {
        setOpen3(false)
        setRoomNumber('')
        setSelectedRoomType('')
        setMaintenance('Vacant')
        setRoomId('')
    };

    const [roomId, setRoomId] = React.useState('');

    const handleChange = (event) => {
        setSelectedRoomType(event.target.value);
    };

    const [roomNumber, setRoomNumber] = React.useState('');
    const [maintenance, setMaintenance] = React.useState('Vacant');
    const [selectedRoomType, setSelectedRoomType] = React.useState("")


    const [roomTypeValue, setRoomTypeValue] = React.useState([])
    const [roomValue, setRoomValue] = React.useState([])
    const [reservationSummary, setReservationSummary] = React.useState([])
    const [role, setRole] = useState('')

    useEffect(() => {


        axios.get(apiKey + "auth/verify-token").then((result) => {
            setRole(result.data.role)
        }).catch((err) => {

        });
        axios.get(apiKey + 'api/getAllRoomType').then((res) => {
            setRoomTypeValue(res.data.filter((obj) => obj.status == true))
            console.log(roomTypeValue)
        }).catch((err) => {
            console.log(err.res)
        })

        axios.get(apiKey + 'api/getAllRoom').then((res) => {
            setRoomValue(res.data.filter((obj) => obj.status == true))
            console.log(roomValue)
        }).catch((err) => {
            console.log(err.res)
        })
        axios.get(apiKey + 'api/getAllReservationSummary').then((res) => {
            setReservationSummary(res.data)
            console.log('res.data', res.data)
        }).catch((err) => {
            console.log(err.res)
        })
    }, [])


    const createRoom = (e) => {
        e.preventDefault();
        if (roomNumberError != '') {
            roomNumberRef.current.focus()
        } else {
            roomTypeValue.map((item) => {
                if (selectedRoomType === item.roomType) {
                    handleOpenIsLoading()
                    axios.post(apiKey + 'api/addRoom',
                        {
                            roomNumber: roomNumber,
                            roomStatus: maintenance,
                            roomType_id: item.id

                        }).then((res) => {
                            console.log(res.data)
                            handleClose();
                            // window.location.reload(false);
                            handleCloseIsLoading(2, '')
                        }).catch((err) => {
                            console.log(err.res)
                            handleCloseIsLoading(3)
                        })
                }
            })
        }
    }

    const editRoom = (e) => {
        e.preventDefault();
        if (roomNumberError != '') {
            roomNumberRef.current.focus()
        } else {
            handleOpenIsLoading()
            roomTypeValue.map((item) => {
                if (selectedRoomType === item.roomType) {
                    axios.patch(apiKey + 'api/updateRoom/' + roomId,
                        {
                            roomNumber: roomNumber,
                            roomStatus: maintenance,
                            roomType_id: item.id

                        }).then((res) => {
                            console.log(res.data)
                            handleClose3();
                            // window.location.reload(false);
                            handleCloseIsLoading(2, '')
                        }).catch((err) => {
                            console.log(err.res)
                            handleCloseIsLoading(3)
                        })
                }
            })
        }
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



    const [roomNumberError, setRoomNumberError] = useState('')
    const roomNumberRef = useRef();


    useEffect(() => {
        console.log(roomId)
        if (roomId != '') {
            axios.get(apiKey + 'api/getAllRoom').then((result) => {
                console.log(result.data)
                console.log("SHABU", result.data.filter((obj) => obj.roomNumber == roomNumber && obj.id != roomId))
                if (result.data.filter((obj) => obj.roomNumber == roomNumber && obj.id != roomId && obj.status == true).length != 0) {
                    setRoomNumberError('Room already exist!')
                } else {
                    setRoomNumberError('')

                }
            }).catch((err) => {
                console.log(err)
            });
        } else {
            axios.get(apiKey + 'api/getAllRoom').then((result) => {
                console.log(result.data)
                if (result.data.filter((obj) => obj.roomNumber == roomNumber && obj.status == true).length != 0) {
                    setRoomNumberError('Room already exist!')
                }
                else {
                    setRoomNumberError('')
                }
            }).catch((err) => {
                console.log(err)
            });
        }
    }, [roomNumber, roomId])


    const deleteRoom = (value) => {
        if (window.confirm('are you sure you want to delete this room?')) {
            handleOpenIsLoading()
            axios.patch(apiKey + 'api/updateRoom/' + value, {
                status: false
            }).then((result) => {
                console.log(result)
                // window.location = ''
                handleCloseIsLoading(2,'')
            }).catch((err) => {
                handleCloseIsLoading(3)
                console.log(err)

            });
        }
    }

    const [search, setSearch] = useState('')







	const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('Please wait...')
    const [status, setStatus] = useState('loading')


    const handleOpenIsLoading = () => {
        setIsLoading(true);
        setStatus('loading')
        setLoadingMessage('Please wait...')


        setTimeout(() => {
            handleCloseIsLoading(3)
        }, 90000)
    }



    const handleCloseIsLoading = (status, link) => {

        if (status == 1 || status === undefined) {
            setStatus('loading')
            setLoadingMessage('')
        }
        else if (status == 2) {
            setStatus('success')
            setLoadingMessage('')
        }
        else if (status == 3) {
            setStatus('failed')
            setLoadingMessage('Sorry, Something went wrong.')
        }

        setTimeout(() => {
            setIsLoading(false);
            console.log(link)
            if (link !== undefined) {
                window.location = link;
            }
        }, 1000)
    }

    const loadingStatus = (value) => {
        if (value == 'loading') {
            return <CircularProgress></CircularProgress>;
        }
        else if (value == 'success') {
            return <Grow in={true}><CheckCircleOutline style={{ color: 'green', fontSize: '80px' }} /></Grow>;
        }
        else if (value == 'failed') {
            return <Grow in={true}><HighlightOffSharp style={{ color: 'red', fontSize: '80px' }} /></Grow>;
        }
    }

    return (
        <Container>

            <Modal
                open={isLoading}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 'none'
                }}>
                <Box
                    component='form'
                    style={{
                        height: '300px',
                        width: '400px',
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflowY: 'overlay',
                        overflowX: 'hidden',
                        borderRadius: '.5rem',
                        position: 'relative',
                        border: 'none'
                        // margin: '50px 0px',

                    }}>
                    <div style={{ margin: '10px', display: 'flex', width: '400px', height: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                        <img src={logo} width="35%"></img>
                        {loadingStatus(status)}
                        <h1 style={{ fontWeight: 'normal', margin: '0px' }}>{loadingMessage}</h1>
                    </div>
                </Box>
            </Modal>












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
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
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
                        style={{ width: '100%' }} />
                    {/* <LocalizationProvider dateAdapter={AdapterDateFns}
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
                    </Button> */}



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
                        <Th align='center'>Room Number</Th>
                        <Th align='center'>Room Type</Th>
                        <Th align='center'>Check in</Th>
                        <Th align='center'>Check out</Th>
                        <Th align='center'>Room Status</Th>
                        <Th align='center'>Action</Th>
                    </Tr>
                    {roomValue
                        .slice((roomPage - 1) * 10, roomPage * 10)
                        .filter((item) => {
                            if (search != '') {
                                if (
                                    (item.roomNumber).toString().includes(search.toLowerCase())
                                    ||
                                    (item.roomType.roomType.toLowerCase()).toString().includes(search.toLowerCase())
                                ) {
                                    return item;
                                }
                                else if ('vacant'.includes(search.toLowerCase())) {
                                    if (reservationSummary.length != 0) {
                                        if (reservationSummary.filter((obj) => obj.bookingStatus == 'CHECKED-IN' && obj.room_id == item.id).length == 0 && item.roomStatus != 'Maintenance') {
                                            return item;
                                        }
                                    }
                                }
                                else if ('occupied'.includes(search.toLowerCase())) {
                                    if (reservationSummary.length != 0) {
                                        if (reservationSummary.filter((obj) => obj.bookingStatus == 'CHECKED-IN' && obj.room_id == item.id).length != 0) {
                                            return item;
                                        }
                                    }
                                }
                                else if ('maintenance'.includes(search.toLowerCase())) {

                                    return item.roomStatus == 'Maintenance';

                                }

                            }

                            else {
                                return item
                            }
                        })
                        .sort((a, b) => a.roomNumber - b.roomNumber).map((item) => (
                            <Tr>
                                <Td align='center'>{item.roomNumber}</Td>
                                <Td align='center'>{item.roomType.roomType}</Td>
                                <Td align='center'>{reservationSummary.length != 0 ? reservationSummary.filter((obj) => obj.bookingStatus == 'CHECKED-IN' && obj.room_id == item.id).length != 0 ? new Date(reservationSummary.filter((obj) => obj.bookingStatus == 'CHECKED-IN' && obj.room_id == item.id).map((item2) => item2.checkInDate)).toLocaleDateString() : '.........' : '.........'}</Td>
                                <Td align='center'>{reservationSummary.length != 0 ? reservationSummary.filter((obj) => obj.bookingStatus == 'CHECKED-IN' && obj.room_id == item.id).length != 0 ? new Date(reservationSummary.filter((obj) => obj.bookingStatus == 'CHECKED-IN' && obj.room_id == item.id).map((item2) => item2.checkOutDate)).toLocaleDateString() : '.........' : '.........'}</Td>
                                {
                                    reservationSummary.length != 0 ? reservationSummary.filter((obj) => obj.bookingStatus == 'CHECKED-IN' && obj.room_id == item.id).length != 0 ? roomStatusDesign('Occupied') : roomStatusDesign(item.roomStatus) : '.........'
                                }

                                <Td align='center'>
                                    {role != '' ? role == 'STAFF' ?
                                        <ActionButton
                                            dontShowDelete=''
                                            view={() => {
                                                view(item.id, item.roomNumber, item.roomType.roomType, item.roomStatus);

                                            }}
                                            edit={() => {
                                                edit(item.id, item.roomNumber, item.roomType.roomType, item.roomStatus);

                                            }}
                                        />
                                        :
                                        <ActionButton
                                            delete={() => deleteRoom(item.id)}
                                            view={() => {
                                                view(item.id, item.roomNumber, item.roomType.roomType, item.roomStatus);

                                            }}
                                            edit={() => {
                                                edit(item.id, item.roomNumber, item.roomType.roomType, item.roomStatus);

                                            }}
                                        />
                                        : ''
                                    }
                                </Td>
                            </Tr>
                        ))}

                </TableContainer>
                <ContainerGlobal
                    w='100%'
                    justify='center'>
                    <Pagination
                        page={roomPage}
                        count={roomValue.length != 0 && Math.ceil(roomValue.filter((item) => {
                            if (search != '') {
                                if (
                                    (item.roomNumber).toString().includes(search.toLowerCase())
                                    ||
                                    (item.roomType.roomType.toLowerCase()).toString().includes(search.toLowerCase())
                                ) {
                                    return item;
                                }
                                else if ('vacant'.includes(search.toLowerCase())) {
                                    if (reservationSummary.length != 0) {
                                        if (reservationSummary.filter((obj) => obj.bookingStatus == 'CHECKED-IN' && obj.room_id == item.id).length == 0 && item.roomStatus != 'Maintenance') {
                                            return item;
                                        }
                                    }
                                }
                                else if ('occupied'.includes(search.toLowerCase())) {
                                    if (reservationSummary.length != 0) {
                                        if (reservationSummary.filter((obj) => obj.bookingStatus == 'CHECKED-IN' && obj.room_id == item.id).length != 0) {
                                            return item;
                                        }
                                    }
                                }
                                else if ('maintenance'.includes(search.toLowerCase())) {

                                    return item.roomStatus == 'Maintenance';

                                }

                            }

                            else {
                                return item
                            }
                        }).length / 10)}
                        onChange={(e, value) => {

                            setRoomPage(value)
                        }}
                    />
                </ContainerGlobal>
            </ContainerGlobal>

            {role != '' ? role == 'STAFF' ? '' : <Button
                variant="contained"
                size="large"
                onClick={handleOpen}
                style={{ backgroundColor: '#2E2E2E', marginBottom: '20px' }}>
                Add Room
            </Button> : ''
            }










            <Modal
                open={open}
                onClose={handleClose}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Box
                    component='form'
                    onSubmit={createRoom}
                    style={{
                        height: 'auto',
                        width: 'auto',
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '0px 0px 30px 0px',
                        gap: '10px',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        overflowY: 'overlay',
                        overflowX: 'hidden',
                        borderRadius: '.5rem',
                        position: 'relative'
                        // margin: '50px 0px',

                    }}>
                    <div style={{
                        width: '100%',
                        height: '50px',
                        position: 'sticky',
                        top: 0,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        backgroundColor: 'black',
                        zIndex: '1',

                    }}>
                        <Title
                            size='16px'
                            color='white'
                            family='Helvetica'
                            fstyle='normal'
                            weight='bold'
                            align='left'
                            margin='0px auto 0px 10px'
                        >
                            Add Room
                        </Title>
                        <CloseIcon
                            onClick={handleClose}
                            style={{
                                color: 'white',
                                cursor: 'pointer',
                                margin: '10px',
                            }} />
                    </div>

                    <InputContainer
                        w='90%'
                        style={{ marginTop: '20px' }}
                    >
                        <TextField
                            error={roomNumberError.length != 0 ? true : false}
                            helperText={roomNumberError.length != 0 ? roomNumberError : ""}
                            placeholder='Room Number'
                            label="Room No."
                            variant="outlined"
                            value={roomNumber}
                            type='number'
                            inputRef={roomNumberRef}


                            onChange={(e) => {

                                setRoomNumberError('')
                                if (e.target.value > 999999999) {
                                    setRoomNumber(999999999)
                                }
                                else if (e.target.value < 0) {
                                    setRoomNumber(0)
                                }
                                else {
                                    setRoomNumber(parseInt(e.target.value))
                                    setRoomNumberError('')
                                }


                            }}
                            style={{ width: '50%', }}
                            required />

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
                                required
                            >
                                {roomTypeValue.map((item) => (

                                    <MenuItem value={item.roomType} required>{item.roomType}</MenuItem>
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
                        style={{ marginTop: '20px', }}>


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
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Box
                    component='form'
                    style={{
                        height: 'auto',
                        width: 'auto',
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '0px 0px 30px 0px',
                        gap: '10px',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        overflowY: 'overlay',
                        overflowX: 'hidden',
                        borderRadius: '.5rem',
                        position: 'relative'
                        // margin: '50px 0px',

                    }}>
                    <div style={{
                        width: '100%',
                        height: '50px',
                        position: 'sticky',
                        top: 0,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        backgroundColor: 'black',
                        zIndex: '1',

                    }}>
                        <Title
                            size='16px'
                            color='white'
                            family='Helvetica'
                            fstyle='normal'
                            weight='bold'
                            align='left'
                            margin='0px auto 0px 10px'
                        >
                            View Room
                        </Title>
                        <CloseIcon
                            onClick={handleClose2}
                            style={{
                                color: 'white',
                                cursor: 'pointer',
                                margin: '10px',
                            }} />
                    </div>

                    <InputContainer
                        w='90%'
                        style={{ marginTop: '20px' }}
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
                        style={{ marginTop: '20px', }}>

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
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Box
                    component='form'
                    onSubmit={editRoom}
                    style={{
                        height: 'auto',
                        width: 'auto',
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '0px 0px 30px 0px',
                        gap: '10px',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        overflowY: 'overlay',
                        overflowX: 'hidden',
                        borderRadius: '.5rem',
                        position: 'relative'
                        // margin: '50px 0px',

                    }}>
                    <div style={{
                        width: '100%',
                        height: '50px',
                        position: 'sticky',
                        top: 0,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        backgroundColor: 'black',
                        zIndex: '1',

                    }}>
                        <Title
                            size='16px'
                            color='white'
                            family='Helvetica'
                            fstyle='normal'
                            weight='bold'
                            align='left'
                            margin='0px auto 0px 10px'
                        >
                            Edit Room
                        </Title>
                        <CloseIcon
                            onClick={handleClose3}
                            style={{
                                color: 'white',
                                cursor: 'pointer',
                                margin: '10px',
                            }} />
                    </div>

                    <InputContainer
                        w='90%'
                        style={{ marginTop: '20px' }}
                    >
                        <TextField
                            error={roomNumberError.length != 0 ? true : false}
                            helperText={roomNumberError.length != 0 ? roomNumberError : ""}
                            placeholder='Room Number'
                            label="Room No."
                            inputRef={roomNumberRef}
                            variant="outlined"
                            value={roomNumber}
                            onChange={(e) => {
                                setRoomNumber(e.target.value);
                                setRoomNumberError('')
                            }}
                            style={{ width: '50%', }}
                            type='number'
                            required
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
                                required
                            >
                                {roomTypeValue.map((item) => (

                                    <MenuItem value={item.roomType} required>{item.roomType}</MenuItem>
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
                        style={{ marginTop: '20px', }}>

                        <Button variant="contained" size="large"
                            style={{ backgroundColor: '#50AA32' }}
                            type='submit'>
                            Save changes
                        </Button>
                        <Button variant="contained" size="large"
                            style={{ backgroundColor: '#FF2400' }}
                            onClick={handleClose3}>
                            Cancel
                        </Button>
                    </InputContainer>



                </Box>
            </Modal>





        </Container >
    )
}

export default RoomStatusContainer