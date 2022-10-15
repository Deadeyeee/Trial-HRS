import React, { useEffect, useRef, useState } from 'react'
import { BlackTab, Container, ContainerGlobalColumn, ContainerGlobalRow, GrayTab, HeadContainer, TabContainer, TableContainer, Td, Th, Tr } from './style'
import { Title } from '../../../client/components/title/styles'
import { ContainerGlobal } from '../../components/container/container'
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine'
import { TextInput } from '../../../client/components/textBox/style'
import TextField from '@mui/material/TextField';
import { Button as Button2, FormButton } from '../../../client/components/button/styles'
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
import { Badge, FormControlLabel, Radio, RadioGroup, TextareaAutosize, FormControl, Modal, Box, Checkbox, Link, FormLabel } from '@mui/material'
import { nationalities } from '../../../nationalities'
import { Global } from '@emotion/react'
import ActionButtonReservation from '../../components/actionButton/ActionButtonReservation'
import axios from 'axios'
import DateRangePicker from '../../../client/components/datePicker/DateRangePicker'
import DeleteIcon from '@mui/icons-material/Delete';
import { FlexboxContainer } from '../../../client/containers/bookingCartPage/Styles'
import { LabelDiv, Persons, TitleCalendarContainer } from '../../../client/containers/bookingPage/Styles'
import { ContainerFormContent, InputContainer } from '../../../client/containers/informationForm/style'
import TermsAndConditionsCont from '../../../client/containers/termsAndConditionsPage/TermsAndConditionsCont'
import * as moment from 'moment';


export const ReservationContainer = () => {
    let passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let letters = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    let phoneNumberValidation = /^(09|\+639)\d{9}$/;
    var Recaptcha = require('react-recaptcha');

    const [agreement, setAgreement] = useState(false)

    const [nationality, setNationality] = useState('Filipino');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthDay] = useState(new Date());
    const [gender, setGender] = useState('male');
    const [address, setAddress] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [nights, setNights] = useState();



    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [contactNumberError, setContactNumberError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [genderError, setGenderError] = useState('male');
    const [addressError, setAddressError] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const emailRef = useRef();
    const contactNumberRef = useRef();
    const userNameRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();


    const [value, setValue] = useState(Date.now());
    const [outValue, setOutValue] = useState(Date.now() + 86400000);
    // const nights = (outValue - value) / 86400000;
    // console.log('nights' + nights)
    const color = "#c44242";
    const [age, setAge] = React.useState('');
    const [adults, setAdults] = useState(2)
    const [kids, setKids] = useState(0)

    const [startDate, setStartDate] = useState(new Date().setHours(0, 0, 0, 0));
    const [endDate, setEndDate] = useState(new Date(new Date().getTime() + 86400000).setHours(0, 0, 0, 0));
    // const [nights, setNights] = useState();
    let minEndDate = new Date(startDate);
    minEndDate.setDate(minEndDate.getDate() + 1);


    const [paymentType, setPaymentType] = React.useState('Down Payment');
    const [paymentMethod, setPaymentMethod] = React.useState('');
    const [roomType, setRoomType] = React.useState('');
    const [discount, setDiscount] = React.useState('');
    const [roomNumber, setRoomNumber] = React.useState('');

    const [reservation, setReservation] = useState([]);

    const numberFormat = (value) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'PHP'
        }).format(value);

    // const [nationality, setNationality] = useState('Filipino')
    // console.log(outValue)
    const bday = new Date(2000, 11, 2,)


    // console.log(outValue)
    const [show, setShow] = useState(false);

    const [showDetails, setShowDetails] = useState(false);
    const [showEditDetails, setShowEditDetails] = useState(false);


    const [reservationSummary, setReservationSummary] = useState([]);
    const [availedRoom, setAvailedRoom] = useState([]);

    const [roomRate, setRoomRate] = useState(0);

    const [notAvailableRoom, setNotAvailableRoom] = useState([]);


    const [availableRooms, setAvailableRooms] = useState([]);

    const [roomTypeDb, setRoomTypeDb] = useState([]);

    const [paymentMode, setPaymentMode] = useState([]);
    const [discountDb, setDiscountDb] = useState([]);


    const [grandTotal, setGrandTotal] = useState(0);


    const [availedRoomId, setAvailedRoomId] = useState(0)
    function getDates(startDate, stopDate) {
        var dateArray = [];
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push(moment(currentDate).format('YYYY-MM-DD'))
            currentDate = moment(currentDate).add(1, 'days');
        }
        return dateArray;
    }


    useEffect(() => {
        axios.get('http://localhost:3001/api/getAllReservation').then((result) => {
            setReservation(result.data)
        }).catch((err) => {
            console.log(err)
        });

        axios.get('http://localhost:3001/api/getAllRoomType').then((result) => {
            setRoomTypeDb(result.data)
        }).catch((err) => {
            console.log(err)
        });

        axios.get('http://localhost:3001/api/getAllPaymentMode').then((result) => {
            setPaymentMode(result.data)
        }).catch((err) => {
            console.log(err)

        });
        axios.get('http://localhost:3001/api/getAllDiscount').then((result) => {
            setDiscountDb(result.data)
        }).catch((err) => {
            console.log(err)

        });
    }, [])

    useEffect(() => {
        if (roomTypeDb.length != 0) {
            roomTypeDb.map((item, index) => {
                if (index == 0) {
                    setRoomType(item.roomType);
                }
            })
        }
    }, [roomTypeDb])

    const addToCart = () => {
        setAvailedRoomId(availedRoomId + 1)

        let roomDetails = {
            id: availedRoomId,
            roomNumber: roomNumber,
            roomType: roomType,
            checkIn: startDate,
            checkOut: endDate,
            totalNights: nights,
            roomRate: roomRate,
        }

        setAvailedRoom((oldData) => [...oldData, roomDetails])

        setRoomNumber('');
    }

    // useEffect(()=>{
    //     if(roomType.length != 0){
    //         if(availableRooms.length != 0){
    //             for (let index = 0; index < availableRooms.length; index++) {
    //                 if(roomType == availableRooms[index].roomType.roomType){
    //                     setRoomNumber(availableRooms[index].roomNumber);
    //                     break;
    //                 }

    //             }
    //         }
    //     }
    // },[roomType])

    useEffect(() => {

        // setRoomType('')
        setRoomNumber('')

        if (roomType != '') {
            roomTypeDb.map((item) => (
                item.roomType == roomType ? setRoomRate(item.roomRate) : ""
            ))
        }


        if (discountDb.length != 0) {
            discountDb.map((item, index) => {
                if (index.discountType == 'No discount') {
                    setDiscount(item.discountType)
                }
            })
        }


        if (paymentMode.length != 0) {
            paymentMode.map((item, index) => {
                if (index == 0) {
                    setPaymentMethod(item.paymentMode)
                }
            })
        }
    }, [roomType, discountDb, paymentMode])


    useEffect(() => {
        setGrandTotal(0)
        if (availedRoom.length != 0) {
            availedRoom.map((item) => {
                setGrandTotal(grandTotal + (item.roomRate * item.totalNights))
            })
        }
    }, [availedRoom])

    useEffect(() => {

        if (startDate !== null && endDate !== null) {
            setNights(Math.floor((endDate - startDate) / (24 * 60 * 60 * 1000)));
        }
        else {
            setNights(0);
        }
    }, [startDate, endDate])

    useEffect(() => {

        setNotAvailableRoom([])
        axios.get('http://localhost:3001/api/getAllReservationSummary').then((result) => {
            for (let index = 0; index < result.data.length; index++) {
                if (result.data[index].reservation.reservationStatus == "PENDING" || result.data[index].reservation.reservationStatus == "RESERVED" || result.data[index].reservation.reservationStatus == "BOOKED") {
                    let systemDates = getDates(startDate, endDate);
                    systemDates.pop()
                    let dataBaseDates = getDates(result.data[index].checkInDate, result.data[index].checkOutDate);
                    dataBaseDates.pop()

                    loop1:
                    for (let i = 0; i < systemDates.length; i++) {
                        loop2:
                        for (let j = 0; j < dataBaseDates.length; j++) {
                            if (systemDates[i] == dataBaseDates[j]) {
                                setNotAvailableRoom((oldData) => [...oldData, result.data[index].room_id])
                                break loop1;
                            }
                            else {
                                console.log(false)
                            }
                        }

                    }


                }

            }

            if (availedRoom.length != 0) {

                for (let k = 0; k < availedRoom.length; k++) {
                    let systemDates = getDates(startDate, endDate);
                    systemDates.pop()
                    let availedRoomDate = getDates(availedRoom[k].checkIn, availedRoom[k].checkOut)
                    availedRoomDate.pop()

                    axios.get('http://localhost:3001/api/getAllRoom').then((result) => {
                        for (let index = 0; index < result.data.length; index++) {
                            loop1:
                            for (let l = 0; l < systemDates.length; l++) {
                                loop2:
                                for (let j = 0; j < availedRoomDate.length; j++) {

                                    console.log("availedRoom[k].roomNumber", availedRoom[k].roomNumber)
                                    console.log("result.data[index].roomNumber", result.data[index].roomNumber)
                                    if (systemDates[l] == availedRoomDate[j]) {
                                        if (availedRoom[k].roomNumber == result.data[index].roomNumber) {
                                            setNotAvailableRoom((oldData) => [...oldData, result.data[index].id])
                                            break loop1;
                                        }
                                    }
                                    else {
                                        console.log(false)
                                    }
                                }

                            }

                        }
                    }).catch((err) => {
                        console.log(err)
                    });
                }
            }

        }).catch((err) => {
            console.log(err)
        });
    }, [startDate, endDate, availedRoom])


    useEffect(() => {
        setRoomNumber('')
        axios.get('http://localhost:3001/api/getAllRoom').then((result) => {


            setAvailableRooms([])
            for (let index = 0; index < result.data.length; index++) {
                // console.log(result.data[index].roomType.roomType)
                if (!notAvailableRoom.includes(result.data[index].id) && result.data[index].roomStatus != 'Maintenance' && result.data[index].roomType.maxAdultOccupancy >= adults && result.data[index].roomType.maxKidsOccupancy >= kids) {
                    setAvailableRooms((oldData) => [...oldData, result.data[index]])
                    // console.log(result.data[index])
                }
            }
        }).catch((err) => {
            console.log(err)

        });
    }, [notAvailableRoom, startDate, endDate, kids, adults])
    // console.log(availableRooms)


    useEffect(() => {
        if (notAvailableRoom.length != 0) {
            console.log(notAvailableRoom)
            // console.log(availableRooms)

            // let counter = {};

            // availableRooms.forEach((item)=>{
            //     let key = JSON.stringify(item);
            //     counter[key] = (counter[key] || 0) + 1
            // })
            // console.log("counter", counter)
        }
    }, [notAvailableRoom])


    const getRoomQuantity = (value) => {
        // axios.get('http://localhost:3001/api/getAllReservationSummary').then((result) => {
        //     for (let i = 0; i < result.data.length; i++) {
        //         if (result.data[i].reservation_id == value) {
        //             setReservationSummary((oldData)=> [...oldData, result])
        //         }
        //     }
        // }).then((res)=>{console.log(roomQuantity)}).catch((err) => {

        // });
    }

    const badgeCount = (value) => {
        let counter = {};

        availableRooms.forEach((item) => {
            let key = JSON.stringify(item.roomType.roomType);
            counter[key] = (counter[key] || 0) + 1
        })
        for (let item in counter) {
            if (item.replaceAll('"', '') == value) {
                // console.log('item', counter[item])
                return counter[item]
            }

        }
    }

    const reservationStatusStyle = (value) => {
        if (value == 'RESERVED') {
            return <ContainerGlobal
                w='100px'
                h='auto'
                margin='0px auto'
                bg='rgb(0, 0, 255, .2)'
                direction='row'
                padding='2px 0px'
                justify='center'
                align='center'
                border='2px solid rgb(0, 0, 255)'
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
                    {value.toLowerCase()}
                </Title>
            </ContainerGlobal>
        }
        else if (value == 'PENDING') {
            return <ContainerGlobal
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
                    {value.toLowerCase()}
                </Title>
            </ContainerGlobal>
        }
        else if (value == 'DEPARTED') {
            return <ContainerGlobal
                w='100px'
                h='auto'
                margin='0px auto'
                bg='rgb(0, 255, 0, .2)'
                direction='row'
                padding='2px 0px'
                justify='center'
                align='center'
                border='2px solid rgb(0, 255, 0)'
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
                    {value.toLowerCase()}
                </Title>
            </ContainerGlobal>
        }
        else if (value == 'UNSETTLED') {
            return <ContainerGlobal
                w='100px'
                h='auto'
                margin='0px auto'
                bg='rgb(255, 0, 0, .2)'
                direction='row'
                padding='2px 0px'
                justify='center'
                align='center'
                border='2px solid rgb(255, 0, 0)'
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
                    {value.toLowerCase()}
                </Title>
            </ContainerGlobal>
        }
        else if (value == 'NO SHOW') {
            return <ContainerGlobal
                w='100px'
                h='auto'
                margin='0px auto'
                bg='rgb(0, 0, 0, .2)'
                direction='row'
                padding='2px 0px'
                justify='center'
                align='center'
                border='2px solid rgb(0, 0, 0)'
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
                    {value.toLowerCase()}
                </Title>
            </ContainerGlobal>
        }
    }

    // const WalkinModal = (
    //     <ContainerGlobal
    //         w='100%'
    //         h='100%'
    //         radius='none'
    //         justify='center'
    //         align='center'
    //         bg='rgb(46, 46, 46, 0.9)'
    //         index='1'
    //         overflow='auto'
    //         active
    //     >
    //         <ContainerGlobal
    //             w='auto'
    //             h='auto'
    //             bg='white'
    //             direction='column'
    //             padding='30px'
    //             gap='10px'
    //             justify='center'
    //             align='center'
    //             margin='400px 0px 40px 0px'
    //         >
    //             <Title
    //                 size='26px'
    //                 color='black'
    //                 family='Helvetica'
    //                 fstyle='normal'
    //                 weight='600'
    //                 align='left'
    //             >
    //                 Bookings details
    //             </Title>
    //             <HorizontalLine
    //                 bg='gray'
    //                 w='100%'
    //                 margin='0px'
    //             ></HorizontalLine>
    //             <ContainerGlobalRow>
    //                 <ContainerGlobalColumn>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'

    //                     >
    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Check In:
    //                         </Title>
    //                         <LocalizationProvider dateAdapter={AdapterDateFns}>
    //                             <DatePicker

    //                                 views={['day', 'month', 'year']}
    //                                 label="Check In"
    //                                 value={value}
    //                                 onChange={(newValue) => {
    //                                     setValue(newValue);
    //                                 }}
    //                                 renderInput={(params) =>
    //                                     <TextField
    //                                         {...params}
    //                                         sx={{
    //                                             svg: { color: 'black' },
    //                                             input: { color },
    //                                             label: { color },
    //                                             color: { color },
    //                                             input: { color: 'black', fontWeight: 'bold' },

    //                                         }}
    //                                         variant="standard"
    //                                         style={{ width: 200, margin: '5px 0px' }}
    //                                         helperText={null}
    //                                     />
    //                                 }
    //                             />

    //                         </LocalizationProvider>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Reservation No.:
    //                         </Title>
    //                         <TextField label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} value="2012127"
    //                             InputProps={{
    //                                 readOnly: true,
    //                             }}
    //                         />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Room Type:
    //                         </Title>
    //                         <FormControl sx={{ width: 200, margin: '5px 0px' }} size="large" variant="standard">
    //                             <InputLabel id="demo-select-small" >Room Type</InputLabel>
    //                             <Select
    //                                 style={{ color: 'black', textAlign: 'left' }}
    //                                 labelId="demo-select-small"
    //                                 id="demo-select-small"
    //                                 value={roomType}
    //                                 label="Menu"
    //                                 onChange={(event) => {
    //                                     setRoomType(event.target.value);
    //                                 }}

    //                             >
    //                                 <MenuItem value={'Family'}>
    //                                     <Badge badgeContent={9} color="success" style={{ marginTop: 10 }} title='40 Available rooms'>
    //                                         <ContainerGlobal
    //                                             margin='0px 15px 0px 0px'>
    //                                             Family Room
    //                                         </ContainerGlobal>
    //                                     </Badge>
    //                                 </MenuItem>
    //                                 <MenuItem value={'Deluxe'} >
    //                                     <Badge badgeContent={4} color="success" style={{ marginTop: 10 }} title='10 Available rooms'>
    //                                         <ContainerGlobal
    //                                             margin='0px 15px 0px 0px'>
    //                                             Deluxe Room
    //                                         </ContainerGlobal>
    //                                     </Badge></MenuItem>
    //                                 <MenuItem value={'Premium'} selected>
    //                                     <Badge badgeContent={5} color="success" style={{ marginTop: 10 }} title='5 Available rooms'>
    //                                         <ContainerGlobal
    //                                             margin='0px 15px 0px 0px'>
    //                                             Premium Room
    //                                         </ContainerGlobal>
    //                                     </Badge></MenuItem>
    //                             </Select>
    //                         </FormControl>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Room Number:
    //                         </Title>
    //                         <FormControl sx={{ width: 200, margin: '5px 0px' }} size="large" variant="standard">
    //                             <InputLabel id="demo-select-small" >Room Number</InputLabel>
    //                             <Select
    //                                 style={{ color: 'black', textAlign: 'left' }}
    //                                 labelId="demo-select-small"
    //                                 id="demo-select-small"
    //                                 value={roomNumber}
    //                                 label="Menu"
    //                                 onChange={(event) => {
    //                                     setRoomNumber(event.target.value);
    //                                 }}

    //                             >
    //                                 <MenuItem value={'R101'} selected>
    //                                     Room 101
    //                                 </MenuItem>
    //                                 <MenuItem value={'R102'} >
    //                                     Room 102
    //                                 </MenuItem>
    //                                 <MenuItem value={'R103'} disabled>
    //                                     Room 103
    //                                 </MenuItem>
    //                                 <MenuItem value={'R104'} >
    //                                     Room 104
    //                                 </MenuItem>
    //                                 <MenuItem value={'R105'} >
    //                                     Room 105
    //                                 </MenuItem>
    //                             </Select>
    //                         </FormControl>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Number of Adult:
    //                         </Title>
    //                         <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Number of Kids:
    //                         </Title>
    //                         <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>

    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Extra Bed:
    //                         </Title>
    //                         <TextField defaultValue='0' id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Extra Pillow:
    //                         </Title>
    //                         <TextField defaultValue='0' id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Extra Blanket:
    //                         </Title>
    //                         <TextField defaultValue='0' id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>
    //                 </ContainerGlobalColumn>
    //                 <ContainerGlobalColumn>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'

    //                     >
    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Check out:
    //                         </Title>
    //                         <LocalizationProvider dateAdapter={AdapterDateFns}>
    //                             <DatePicker

    //                                 views={['day', 'month', 'year']}
    //                                 label="Check out"
    //                                 value={outValue}
    //                                 onChange={(newValue) => {
    //                                     setOutValue(newValue);
    //                                 }}
    //                                 renderInput={(params) =>
    //                                     <TextField
    //                                         {...params}
    //                                         sx={{
    //                                             svg: { color: 'black' },
    //                                             input: { color },
    //                                             label: { color },
    //                                             color: { color },
    //                                             input: { color: 'black', fontWeight: 'bold' },

    //                                         }}
    //                                         variant="standard"
    //                                         style={{ width: 200, margin: '5px 0px' }}
    //                                         helperText={null}
    //                                     />
    //                                 }
    //                             />

    //                         </LocalizationProvider>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Total Nights:
    //                         </Title>
    //                         <TextField InputProps={{
    //                             readOnly: true,
    //                         }} value={nights}
    //                             id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Payment Method:
    //                         </Title>
    //                         <FormControl sx={{ width: 200, margin: '5px 0px' }} size="small" variant="standard">
    //                             <InputLabel id="demo-select-small" >Payment method</InputLabel>
    //                             <Select
    //                                 style={{ color: 'black', textAlign: 'left' }}
    //                                 labelId="demo-select-small"
    //                                 id="demo-select-small"
    //                                 value={paymentMethod}
    //                                 label="Menu"
    //                                 onChange={(event) => {
    //                                     setPaymentMethod(event.target.value);
    //                                 }
    //                                 }

    //                             >
    //                                 <MenuItem value={'Cash'} selected>Cash (pay at the hotel)</MenuItem>
    //                                 <MenuItem value={'Bank'} >Bank (Metro Bank)</MenuItem>
    //                                 <MenuItem value={'E-Payment'} selected>E-Payment (Gcash)</MenuItem>
    //                             </Select>
    //                         </FormControl>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Payment Type:
    //                         </Title>
    //                         <FormControl sx={{ width: 200, margin: '5px 0px' }} size="small" variant="standard">
    //                             <InputLabel id="demo-select-small" >Payment Type</InputLabel>
    //                             <Select
    //                                 style={{ color: 'black', textAlign: 'left' }}
    //                                 labelId="demo-select-small"
    //                                 id="demo-select-small"
    //                                 value={paymentType}
    //                                 label="Menu"
    //                                 onChange={(event) => {
    //                                     setPaymentType(event.target.value);
    //                                 }}

    //                             >

    //                                 <MenuItem value={'Full'} >Full payment</MenuItem>
    //                                 <MenuItem value={'Down Payment'} selected>Down Payment</MenuItem>
    //                             </Select>
    //                         </FormControl>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Discount:
    //                         </Title>
    //                         <FormControl sx={{ width: 200, margin: '5px 0px' }} size="small" variant="standard">
    //                             <InputLabel id="demo-select-small" >Discount</InputLabel>
    //                             <Select
    //                                 style={{ color: 'black', textAlign: 'left' }}
    //                                 labelId="demo-select-small"
    //                                 id="demo-select-small"
    //                                 value={discount}
    //                                 label="Menu"
    //                                 onChange={(event) => {
    //                                     setDiscount(event.target.value);
    //                                 }}

    //                             >

    //                                 <MenuItem value={'none'} >None</MenuItem>
    //                                 <MenuItem value={'senior'}>Senior Citizen</MenuItem>
    //                                 <MenuItem value={'pwd'}>PWD</MenuItem>
    //                             </Select>
    //                         </FormControl>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Downpayment:
    //                         </Title>
    //                         <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
    //                             value='0.00'
    //                             type='number'
    //                             InputProps={{
    //                                 readOnly: true,
    //                                 endAdornment: <InputAdornment position="end">PHP</InputAdornment>,
    //                             }}
    //                         />
    //                     </ContainerGlobal>

    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='600'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Grand Total:
    //                         </Title>
    //                         <TextField
    //                             id="outlined-basic"
    //                             label=""
    //                             type="number"
    //                             value='0.00'
    //                             variant="standard"
    //                             style={{ width: 200, margin: '5px 0px', fontWeight: 600 }}
    //                             InputProps={{
    //                                 readOnly: true,
    //                                 endAdornment: <InputAdornment position="end">PHP</InputAdornment>,
    //                             }}
    //                         />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='600'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Remaining Balance:
    //                         </Title>
    //                         <TextField
    //                             id="outlined-basic"
    //                             label=""
    //                             type="number"
    //                             value='0.00'
    //                             variant="standard"
    //                             style={{ width: 200, margin: '5px 0px', fontWeight: 600 }}
    //                             InputProps={{
    //                                 readOnly: true,
    //                                 endAdornment: <InputAdornment position="end">PHP</InputAdornment>,
    //                             }}
    //                         />
    //                     </ContainerGlobal>
    //                 </ContainerGlobalColumn>


    //             </ContainerGlobalRow>
    //             <Title
    //                 size='26px'
    //                 color='black'
    //                 family='Helvetica'
    //                 fstyle='normal'
    //                 weight='600'
    //                 align='left'
    //                 margin='50px 0px 0px 0px'
    //             >
    //                 Client details
    //             </Title>
    //             <HorizontalLine
    //                 bg='gray'
    //                 w='100%'
    //                 margin='0px'
    //             ></HorizontalLine>


    //             <ContainerGlobalRow>
    //                 <ContainerGlobalColumn>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             First Name:
    //                         </Title>
    //                         <TextField id="outlined-basic" label=""
    //                             value=''
    //                             variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'

    //                     >
    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Birthday:
    //                         </Title>
    //                         <LocalizationProvider dateAdapter={AdapterDateFns}>
    //                             <DatePicker

    //                                 views={['day', 'month', 'year']}
    //                                 label="Birthday"
    //                                 value={bday}
    //                                 onChange={(newValue) => {
    //                                     setValue(newValue);
    //                                 }}
    //                                 renderInput={(params) =>
    //                                     <TextField
    //                                         {...params}
    //                                         sx={{
    //                                             svg: { color: 'black' },
    //                                             input: { color },
    //                                             label: { color },
    //                                             color: { color },
    //                                             input: { color: 'black', fontWeight: 'bold' },

    //                                         }}

    //                                         variant="standard"
    //                                         style={{ width: 200, margin: '5px 0px' }}
    //                                         helperText={null}
    //                                     />
    //                                 }
    //                             />

    //                         </LocalizationProvider>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Contact Number:
    //                         </Title>
    //                         <TextField id="outlined-basic"
    //                             value=''
    //                             label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} type='number' />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >
    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Gender:
    //                         </Title>

    //                         <RadioGroup
    //                             aria-labelledby="demo-radio-buttons-group-label"
    //                             defaultValue="male"
    //                             name="radio-buttons-group"
    //                             style={{ width: 200 }}
    //                         >
    //                             <FormControlLabel value="female" control={<Radio />} label="Female" />
    //                             <FormControlLabel value="male" control={<Radio />} label="Male" />
    //                             <FormControlLabel value="other" control={<Radio />} label="Other" />
    //                         </RadioGroup>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Address:
    //                         </Title>
    //                         <TextField id="outlined-basic"
    //                             value=''
    //                             multiline
    //                             rows={4}
    //                             label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>

    //                 </ContainerGlobalColumn>

    //                 <ContainerGlobalColumn>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Last Name:
    //                         </Title>
    //                         <TextField id="outlined-basic" label=""
    //                             value=''
    //                             variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Email:
    //                         </Title>
    //                         <TextField id="outlined-basic"
    //                             value=''
    //                             label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Nationality:
    //                         </Title>
    //                         <FormControl sx={{ width: 200, margin: '5px 0px' }} size="small" variant="standard">
    //                             <InputLabel id="demo-select-small" >Nationality</InputLabel>
    //                             <Select
    //                                 style={{ color: 'black', textAlign: 'left' }}
    //                                 labelId="demo-select-small"
    //                                 id="demo-select-small"
    //                                 value={nationality}
    //                                 label="Menu"
    //                                 onChange={(event) => {
    //                                     setNationality(event.target.value);
    //                                 }}
    //                             >

    //                                 {nationalities.map(({ nationality }, index) => (
    //                                     <MenuItem value={nationality} >{nationality}</MenuItem>
    //                                 ))}
    //                             </Select>
    //                         </FormControl>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='hidden'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Special Instructions:
    //                         </Title>
    //                         <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
    //                             multiline
    //                             rows={4}
    //                         />
    //                     </ContainerGlobal>
    //                 </ContainerGlobalColumn>

    //             </ContainerGlobalRow>

    //             <ContainerGlobal
    //                 w='auto'
    //                 h='auto'
    //                 bg='none'
    //                 direction='row'
    //                 gap='10px'
    //                 justify='center'
    //                 align='center'
    //             >
    //                 <Button variant="contained" size="large"
    //                     style={{ backgroundColor: '#50AA32' }}
    //                     onClick={() => setShow(prev => !prev)}>
    //                     Confirm
    //                 </Button>
    //                 <Button variant="contained" size="large"
    //                     style={{ backgroundColor: '#FF2400' }}
    //                     onClick={() => setShow(prev => !prev)}>
    //                     Cancel
    //                 </Button>
    //             </ContainerGlobal>
    //         </ContainerGlobal>
    //     </ContainerGlobal>);


    // const viewDetails = (
    //     <ContainerGlobal
    //         w='100%'
    //         h='100%'
    //         radius='none'
    //         justify='center'
    //         align='center'
    //         bg='rgb(46, 46, 46, 0.9)'
    //         index='1'
    //         overflow='auto'
    //         active
    //     >
    //         <ContainerGlobal
    //             w='auto'
    //             h='auto'
    //             bg='white'
    //             direction='column'
    //             padding='30px'
    //             gap='10px'
    //             justify='center'
    //             align='center'
    //             margin='400px 0px 40px 0px'
    //         >
    //             <Title
    //                 size='26px'
    //                 color='black'
    //                 family='Helvetica'
    //                 fstyle='normal'
    //                 weight='600'
    //                 align='left'
    //             >
    //                 Bookings details
    //             </Title>
    //             <HorizontalLine
    //                 bg='gray'
    //                 w='100%'
    //                 margin='0px'
    //             ></HorizontalLine>
    //             <ContainerGlobalRow>
    //                 <ContainerGlobalColumn>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'

    //                     >
    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Check In:
    //                         </Title>
    //                         <LocalizationProvider dateAdapter={AdapterDateFns}>
    //                             <DatePicker

    //                                 views={['day', 'month', 'year']}
    //                                 label="Check In"
    //                                 value={value}
    //                                 onChange={(newValue) => {
    //                                     setValue(newValue);
    //                                 }}
    //                                 renderInput={(params) =>
    //                                     <TextField
    //                                         {...params}
    //                                         sx={{
    //                                             svg: { color: 'black' },
    //                                             input: { color },
    //                                             label: { color },
    //                                             color: { color },
    //                                             input: { color: 'black', fontWeight: 'bold' },

    //                                         }}

    //                                         variant="standard"
    //                                         style={{ width: 200, margin: '5px 0px' }}
    //                                         helperText={null}
    //                                     />
    //                                 }
    //                                 disabled
    //                             />

    //                         </LocalizationProvider>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Reservation No.:
    //                         </Title>
    //                         <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} value="2012127"
    //                             InputProps={{
    //                                 readOnly: true,
    //                             }}
    //                         />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Room Type:
    //                         </Title>
    //                         <FormControl sx={{ width: 200, margin: '5px 0px' }} size="large" variant="standard">
    //                             <InputLabel id="demo-select-small" >Room Type</InputLabel>
    //                             <Select
    //                                 style={{ color: 'black', textAlign: 'left' }}
    //                                 labelId="demo-select-small"
    //                                 id="demo-select-small"
    //                                 value={roomType}
    //                                 label="Menu"
    //                                 onChange={(event) => {
    //                                     setRoomType(event.target.value);
    //                                 }}
    //                                 disabled
    //                             >
    //                                 <MenuItem value={'Family'}>
    //                                     <Badge badgeContent={9} color="success" style={{ marginTop: 10 }} title='40 Available rooms'>
    //                                         <ContainerGlobal
    //                                             margin='0px 15px 0px 0px'>
    //                                             Family Room
    //                                         </ContainerGlobal>
    //                                     </Badge>
    //                                 </MenuItem>
    //                                 <MenuItem value={'Deluxe'} >
    //                                     <Badge badgeContent={4} color="success" style={{ marginTop: 10 }} title='10 Available rooms'>
    //                                         <ContainerGlobal
    //                                             margin='0px 15px 0px 0px'>
    //                                             Deluxe Room
    //                                         </ContainerGlobal>
    //                                     </Badge></MenuItem>
    //                                 <MenuItem value={'Premium'} selected>
    //                                     <Badge badgeContent={5} color="success" style={{ marginTop: 10 }} title='5 Available rooms'>
    //                                         <ContainerGlobal
    //                                             margin='0px 15px 0px 0px'>
    //                                             Premium Room
    //                                         </ContainerGlobal>
    //                                     </Badge></MenuItem>
    //                             </Select>
    //                         </FormControl>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Room Number:
    //                         </Title>
    //                         <FormControl sx={{ width: 200, margin: '5px 0px' }} size="large" variant="standard">
    //                             <InputLabel id="demo-select-small" >Room Number</InputLabel>
    //                             <Select
    //                                 style={{ color: 'black', textAlign: 'left' }}
    //                                 labelId="demo-select-small"
    //                                 id="demo-select-small"
    //                                 value={roomNumber}
    //                                 label="Menu"
    //                                 onChange={(event) => {
    //                                     setRoomNumber(event.target.value);
    //                                 }}
    //                                 disabled
    //                             >
    //                                 <MenuItem value={'R101'} selected>
    //                                     Room 101
    //                                 </MenuItem>
    //                                 <MenuItem value={'R102'} >
    //                                     Room 102
    //                                 </MenuItem>
    //                                 <MenuItem value={'R103'} disabled>
    //                                     Room 103
    //                                 </MenuItem>
    //                                 <MenuItem value={'R104'} >
    //                                     Room 104
    //                                 </MenuItem>
    //                                 <MenuItem value={'R105'} >
    //                                     Room 105
    //                                 </MenuItem>
    //                             </Select>
    //                         </FormControl>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Number of Adult:
    //                         </Title>
    //                         <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
    //                             InputProps={{
    //                                 readOnly: true,
    //                             }}
    //                             value='2'
    //                         />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Number of Kids:
    //                         </Title>
    //                         <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
    //                             InputProps={{
    //                                 readOnly: true,
    //                             }}
    //                             value='0' />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Extra Bed:
    //                         </Title>
    //                         <TextField
    //                             InputProps={{
    //                                 readOnly: true,
    //                             }}
    //                             defaultValue='0' id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Extra Pillow:
    //                         </Title>
    //                         <TextField
    //                             InputProps={{
    //                                 readOnly: true,
    //                             }}
    //                             defaultValue='0' id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Extra Blanket:
    //                         </Title>
    //                         <TextField
    //                             InputProps={{
    //                                 readOnly: true,
    //                             }}
    //                             defaultValue='0' id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>
    //                 </ContainerGlobalColumn>
    //                 <ContainerGlobalColumn>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'

    //                     >
    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Check out:
    //                         </Title>
    //                         <LocalizationProvider dateAdapter={AdapterDateFns}>
    //                             <DatePicker

    //                                 views={['day', 'month', 'year']}
    //                                 label="Check out"
    //                                 value={outValue}
    //                                 onChange={(newValue) => {
    //                                     setOutValue(newValue);
    //                                 }}
    //                                 renderInput={(params) =>
    //                                     <TextField
    //                                         {...params}
    //                                         sx={{
    //                                             svg: { color: 'black' },
    //                                             input: { color },
    //                                             label: { color },
    //                                             color: { color },
    //                                             input: { color: 'black', fontWeight: 'bold' },

    //                                         }}
    //                                         variant="standard"
    //                                         style={{ width: 200, margin: '5px 0px' }}
    //                                         helperText={null}
    //                                     />
    //                                 }
    //                                 disabled
    //                             />

    //                         </LocalizationProvider>
    //                     </ContainerGlobal>

    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Total Nights:
    //                         </Title>
    //                         <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
    //                             InputProps={{
    //                                 readOnly: true,
    //                             }}
    //                             value={nights} />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Payment Method:
    //                         </Title>
    //                         <FormControl sx={{ width: 200, margin: '5px 0px' }} size="small" variant="standard">
    //                             <InputLabel id="demo-select-small" >Payment method</InputLabel>
    //                             <Select
    //                                 style={{ color: 'black', textAlign: 'left' }}
    //                                 labelId="demo-select-small"
    //                                 id="demo-select-small"
    //                                 value={paymentMethod}
    //                                 label="Menu"
    //                                 onChange={(event) => {
    //                                     setPaymentMethod(event.target.value);
    //                                 }
    //                                 }
    //                                 disabled
    //                             >
    //                                 <MenuItem value={'Cash'} selected>Cash (pay at the hotel)</MenuItem>
    //                                 <MenuItem value={'Bank'} >Bank (Metro Bank)</MenuItem>
    //                                 <MenuItem value={'E-Payment'}>E-Payment (Gcash)</MenuItem>
    //                             </Select>
    //                         </FormControl>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Payment Type:
    //                         </Title>
    //                         <FormControl sx={{ width: 200, margin: '5px 0px' }} size="small" variant="standard">
    //                             <InputLabel id="demo-select-small" >Payment Type</InputLabel>
    //                             <Select
    //                                 style={{ color: 'black', textAlign: 'left' }}
    //                                 labelId="demo-select-small"
    //                                 id="demo-select-small"
    //                                 value={paymentType}
    //                                 label="Menu"
    //                                 onChange={(event) => {
    //                                     setPaymentType(event.target.value);
    //                                 }}
    //                                 disabled
    //                             >

    //                                 <MenuItem value={'Full'} >Full payment</MenuItem>
    //                                 <MenuItem value={'Down Payment'} selected>Down Payment</MenuItem>
    //                             </Select>
    //                         </FormControl>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Discount:
    //                         </Title>
    //                         <FormControl sx={{ width: 200, margin: '5px 0px' }} size="small" variant="standard">
    //                             <InputLabel id="demo-select-small" >Discount</InputLabel>
    //                             <Select
    //                                 style={{ color: 'black', textAlign: 'left' }}
    //                                 labelId="demo-select-small"
    //                                 id="demo-select-small"
    //                                 value={discount}
    //                                 label="Menu"
    //                                 onChange={(event) => {
    //                                     setDiscount(event.target.value);
    //                                 }}
    //                                 disabled

    //                             >

    //                                 <MenuItem value={'none'} >None</MenuItem>
    //                                 <MenuItem value={'senior'}>Senior Citizen</MenuItem>
    //                                 <MenuItem value={'pwd'}>PWD</MenuItem>
    //                             </Select>
    //                         </FormControl>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Downpayment:
    //                         </Title>
    //                         <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
    //                             value='600.00'
    //                             type='number'
    //                             InputProps={{
    //                                 readOnly: true,
    //                                 endAdornment: <InputAdornment position="end">PHP</InputAdornment>,
    //                             }}

    //                         />
    //                     </ContainerGlobal>

    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='600'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Grand Total:
    //                         </Title>
    //                         <TextField
    //                             id="outlined-basic"
    //                             label=""
    //                             type="number"
    //                             value='1200.00'
    //                             variant="standard"
    //                             style={{ width: 200, margin: '5px 0px', fontWeight: 600 }}
    //                             InputProps={{
    //                                 readOnly: true,
    //                                 endAdornment: <InputAdornment position="end">PHP</InputAdornment>,
    //                             }}
    //                         />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='600'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Remaining Balance:
    //                         </Title>
    //                         <TextField
    //                             id="outlined-basic"
    //                             label=""
    //                             type="number"
    //                             value='1200.00'
    //                             variant="standard"
    //                             style={{ width: 200, margin: '5px 0px', fontWeight: 600 }}
    //                             InputProps={{
    //                                 readOnly: true,
    //                                 endAdornment: <InputAdornment position="end">PHP</InputAdornment>,
    //                             }}
    //                         />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >
    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='600'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Reservation status:
    //                         </Title>

    //                         <RadioGroup
    //                             row
    //                             aria-labelledby="demo-radio-buttons-group-label"
    //                             defaultValue="Pending"
    //                             name="radio-buttons-group"
    //                             style={{ width: 'auto', margin: '10px 0px 0px 0px' }}

    //                         >
    //                             <ContainerGlobal>
    //                                 <ContainerGlobal
    //                                     direction='column'>
    //                                     <FormControlLabel value="Booked" control={<Radio />} label="Booked" disabled />
    //                                     <FormControlLabel value="Pending" control={<Radio />} label="Pending" disabled />
    //                                 </ContainerGlobal>
    //                                 <ContainerGlobal
    //                                     direction='column'>
    //                                     <FormControlLabel value="Unsettled" control={<Radio />} label="Unsettled" disabled />

    //                                 </ContainerGlobal>
    //                             </ContainerGlobal>
    //                         </RadioGroup>
    //                     </ContainerGlobal>
    //                 </ContainerGlobalColumn>


    //             </ContainerGlobalRow>
    //             <Title
    //                 size='26px'
    //                 color='black'
    //                 family='Helvetica'
    //                 fstyle='normal'
    //                 weight='600'
    //                 align='left'
    //                 margin='50px 0px 0px 0px'
    //             >
    //                 Client details
    //             </Title>
    //             <HorizontalLine
    //                 bg='gray'
    //                 w='100%'
    //                 margin='0px'
    //             ></HorizontalLine>


    //             <ContainerGlobalRow>
    //                 <ContainerGlobalColumn>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             First Name:
    //                         </Title>
    //                         <TextField id="outlined-basic" label=""
    //                             InputProps={{
    //                                 readOnly: true,
    //                             }}
    //                             value='Pedro'
    //                             variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'

    //                     >
    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Birthday:
    //                         </Title>
    //                         <LocalizationProvider dateAdapter={AdapterDateFns}>
    //                             <DatePicker

    //                                 views={['day', 'month', 'year']}
    //                                 label="Birthday"
    //                                 value={bday}
    //                                 onChange={(newValue) => {
    //                                     setValue(newValue);
    //                                 }}
    //                                 renderInput={(params) =>
    //                                     <TextField
    //                                         {...params}
    //                                         sx={{
    //                                             svg: { color: 'black' },
    //                                             input: { color },
    //                                             label: { color },
    //                                             color: { color },
    //                                             input: { color: 'black', fontWeight: 'bold' },

    //                                         }}

    //                                         variant="standard"
    //                                         style={{ width: 200, margin: '5px 0px' }}
    //                                         helperText={null}
    //                                     />
    //                                 }
    //                                 disabled
    //                             />

    //                         </LocalizationProvider>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Contact Number:
    //                         </Title>

    //                         <TextField id="outlined-basic"
    //                             InputProps={{
    //                                 readOnly: true,
    //                             }}
    //                             value='09291234567'
    //                             label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} type='number' />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >
    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Gender:
    //                         </Title>

    //                         <RadioGroup
    //                             aria-labelledby="demo-radio-buttons-group-label"
    //                             defaultValue="male"
    //                             name="radio-buttons-group"
    //                             style={{ width: 200 }}
    //                             disabled
    //                         >
    //                             <FormControlLabel value="female" control={<Radio />} label="Female" disabled />
    //                             <FormControlLabel value="male" control={<Radio />} label="Male" disabled />
    //                             <FormControlLabel value="other" control={<Radio />} label="Other" disabled />
    //                         </RadioGroup>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Address:
    //                         </Title>
    //                         <TextField id="outlined-basic"
    //                             value='Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401'
    //                             multiline
    //                             rows={4}
    //                             InputProps={{
    //                                 readOnly: true,
    //                             }}
    //                             label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>

    //                 </ContainerGlobalColumn>

    //                 <ContainerGlobalColumn>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Last Name:
    //                         </Title>
    //                         <TextField id="outlined-basic" label=""
    //                             InputProps={{
    //                                 readOnly: true,
    //                             }}
    //                             value='penduco'
    //                             variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Email:
    //                         </Title>
    //                         <TextField id="outlined-basic"
    //                             InputProps={{
    //                                 readOnly: true,
    //                             }}
    //                             value='pedropenduco@gmail.com'
    //                             label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Nationality:
    //                         </Title>
    //                         <FormControl sx={{ width: 200, margin: '5px 0px' }} size="small" variant="standard">
    //                             <InputLabel id="demo-select-small" >Nationality</InputLabel>
    //                             <Select
    //                                 style={{ color: 'black', textAlign: 'left' }}
    //                                 labelId="demo-select-small"
    //                                 id="demo-select-small"
    //                                 value={nationality}
    //                                 label="Menu"
    //                                 onChange={(event) => {
    //                                     setNationality(event.target.value);
    //                                 }}
    //                                 disabled
    //                             >

    //                                 {nationalities.map(({ nationality }, index) => (
    //                                     <MenuItem value={nationality} >{nationality}</MenuItem>
    //                                 ))}
    //                             </Select>
    //                         </FormControl>
    //                     </ContainerGlobal>

    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='hidden'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Special Instructions:
    //                         </Title>
    //                         <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
    //                             multiline
    //                             InputProps={{
    //                                 readOnly: true,
    //                             }}
    //                             rows={4}
    //                         />
    //                     </ContainerGlobal>

    //                 </ContainerGlobalColumn>

    //             </ContainerGlobalRow>

    //             <ContainerGlobal
    //                 w='auto'
    //                 h='auto'
    //                 bg='none'
    //                 direction='row'
    //                 gap='10px'
    //                 justify='center'
    //                 align='center'
    //             >
    //                 <Button variant="contained" size="large"
    //                     style={{ backgroundColor: '#50AA32' }}
    //                     onClick={() => setShowDetails(prev2 => !prev2)}>
    //                     Ok
    //                 </Button>
    //             </ContainerGlobal>
    //         </ContainerGlobal>
    //     </ContainerGlobal>);


    // const EditDetails = (
    //     <ContainerGlobal
    //         w='100%'
    //         h='100%'
    //         radius='none'
    //         justify='center'
    //         align='center'
    //         bg='rgb(46, 46, 46, 0.9)'
    //         index='1'
    //         overflow='auto'
    //         active
    //     >
    //         <ContainerGlobal
    //             w='auto'
    //             h='auto'
    //             bg='white'
    //             direction='column'
    //             padding='30px'
    //             gap='10px'
    //             justify='center'
    //             align='center'
    //             margin='400px 0px 40px 0px'
    //         >
    //             <Title
    //                 size='26px'
    //                 color='black'
    //                 family='Helvetica'
    //                 fstyle='normal'
    //                 weight='600'
    //                 align='left'
    //             >
    //                 Bookings details
    //             </Title>
    //             <HorizontalLine
    //                 bg='gray'
    //                 w='100%'
    //                 margin='0px'
    //             ></HorizontalLine>
    //             <ContainerGlobalRow>
    //                 <ContainerGlobalColumn>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'

    //                     >
    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Check In:
    //                         </Title>
    //                         <LocalizationProvider dateAdapter={AdapterDateFns}>
    //                             <DatePicker

    //                                 views={['day', 'month', 'year']}
    //                                 label="Check In"
    //                                 value={value}
    //                                 onChange={(newValue) => {
    //                                     setValue(newValue);
    //                                 }}
    //                                 renderInput={(params) =>
    //                                     <TextField
    //                                         {...params}
    //                                         sx={{
    //                                             svg: { color: 'black' },
    //                                             input: { color },
    //                                             label: { color },
    //                                             color: { color },
    //                                             input: { color: 'black', fontWeight: 'bold' },

    //                                         }}

    //                                         variant="standard"
    //                                         style={{ width: 200, margin: '5px 0px' }}
    //                                         helperText={null}
    //                                     />
    //                                 }
    //                             />

    //                         </LocalizationProvider>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Reservation No.:
    //                         </Title>
    //                         <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} value="2012127"
    //                             InputProps={{
    //                                 readOnly: true,
    //                             }}
    //                         />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Room Type:
    //                         </Title>
    //                         <FormControl sx={{ width: 200, margin: '5px 0px' }} size="large" variant="standard">
    //                             <InputLabel id="demo-select-small" >Room Type</InputLabel>
    //                             <Select
    //                                 style={{ color: 'black', textAlign: 'left' }}
    //                                 labelId="demo-select-small"
    //                                 id="demo-select-small"
    //                                 value={roomType}
    //                                 label="Menu"
    //                                 onChange={(event) => {
    //                                     setRoomType(event.target.value);
    //                                 }}

    //                             >
    //                                 <MenuItem value={'Family'}>
    //                                     <Badge badgeContent={9} color="success" style={{ marginTop: 10 }} title='40 Available rooms'>
    //                                         <ContainerGlobal
    //                                             margin='0px 15px 0px 0px'>
    //                                             Family Room
    //                                         </ContainerGlobal>
    //                                     </Badge>
    //                                 </MenuItem>
    //                                 <MenuItem value={'Deluxe'} >
    //                                     <Badge badgeContent={4} color="success" style={{ marginTop: 10 }} title='10 Available rooms'>
    //                                         <ContainerGlobal
    //                                             margin='0px 15px 0px 0px'>
    //                                             Deluxe Room
    //                                         </ContainerGlobal>
    //                                     </Badge></MenuItem>
    //                                 <MenuItem value={'Premium'} selected>
    //                                     <Badge badgeContent={5} color="success" style={{ marginTop: 10 }} title='5 Available rooms'>
    //                                         <ContainerGlobal
    //                                             margin='0px 15px 0px 0px'>
    //                                             Premium Room
    //                                         </ContainerGlobal>
    //                                     </Badge></MenuItem>
    //                             </Select>
    //                         </FormControl>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Room Number:
    //                         </Title>
    //                         <FormControl sx={{ width: 200, margin: '5px 0px' }} size="large" variant="standard">
    //                             <InputLabel id="demo-select-small" >Room Number</InputLabel>
    //                             <Select
    //                                 style={{ color: 'black', textAlign: 'left' }}
    //                                 labelId="demo-select-small"
    //                                 id="demo-select-small"
    //                                 value={roomNumber}
    //                                 label="Menu"
    //                                 onChange={(event) => {
    //                                     setRoomNumber(event.target.value);
    //                                 }}

    //                             >
    //                                 <MenuItem value={'R101'} selected>
    //                                     Room 101
    //                                 </MenuItem>
    //                                 <MenuItem value={'R102'} >
    //                                     Room 102
    //                                 </MenuItem>
    //                                 <MenuItem value={'R103'} disabled>
    //                                     Room 103
    //                                 </MenuItem>
    //                                 <MenuItem value={'R104'} >
    //                                     Room 104
    //                                 </MenuItem>
    //                                 <MenuItem value={'R105'} >
    //                                     Room 105
    //                                 </MenuItem>
    //                             </Select>
    //                         </FormControl>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Number of Adult:
    //                         </Title>
    //                         <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}

    //                             value='2'
    //                         />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Number of Kids:
    //                         </Title>
    //                         <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}

    //                             value='0' />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Extra Bed:
    //                         </Title>
    //                         <TextField
    //                             InputProps={{
    //                                 readOnly: true,
    //                             }}
    //                             defaultValue='0' id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Extra Pillow:
    //                         </Title>
    //                         <TextField
    //                             InputProps={{
    //                                 readOnly: true,
    //                             }}
    //                             defaultValue='0' id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Extra Blanket:
    //                         </Title>
    //                         <TextField
    //                             InputProps={{
    //                                 readOnly: true,
    //                             }}
    //                             defaultValue='0' id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>
    //                 </ContainerGlobalColumn>
    //                 <ContainerGlobalColumn>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'

    //                     >
    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Check out:
    //                         </Title>
    //                         <LocalizationProvider dateAdapter={AdapterDateFns}>
    //                             <DatePicker

    //                                 views={['day', 'month', 'year']}
    //                                 label="Check out"
    //                                 value={outValue}
    //                                 onChange={(newValue) => {
    //                                     setOutValue(newValue);
    //                                 }}
    //                                 renderInput={(params) =>
    //                                     <TextField
    //                                         {...params}
    //                                         sx={{
    //                                             svg: { color: 'black' },
    //                                             input: { color },
    //                                             label: { color },
    //                                             color: { color },
    //                                             input: { color: 'black', fontWeight: 'bold' },

    //                                         }}
    //                                         variant="standard"
    //                                         style={{ width: 200, margin: '5px 0px' }}
    //                                         helperText={null}
    //                                     />
    //                                 }
    //                             />

    //                         </LocalizationProvider>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Total Nights:
    //                         </Title>
    //                         <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
    //                             InputProps={{
    //                                 readOnly: true,
    //                             }}
    //                             value={nights} />
    //                     </ContainerGlobal>

    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Payment Method:
    //                         </Title>
    //                         <FormControl sx={{ width: 200, margin: '5px 0px' }} size="small" variant="standard">
    //                             <InputLabel id="demo-select-small" >Payment method</InputLabel>
    //                             <Select
    //                                 style={{ color: 'black', textAlign: 'left' }}
    //                                 labelId="demo-select-small"
    //                                 id="demo-select-small"
    //                                 value={paymentMethod}
    //                                 label="Menu"
    //                                 onChange={(event) => {
    //                                     setPaymentMethod(event.target.value);
    //                                 }
    //                                 }
    //                             >
    //                                 <MenuItem value={'Cash'} selected>Cash (pay at the hotel)</MenuItem>
    //                                 <MenuItem value={'Bank'} >Bank (Metro Bank)</MenuItem>
    //                                 <MenuItem value={'E-Payment'}>E-Payment (Gcash)</MenuItem>
    //                             </Select>
    //                         </FormControl>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Payment Type:
    //                         </Title>
    //                         <FormControl sx={{ width: 200, margin: '5px 0px' }} size="small" variant="standard">
    //                             <InputLabel id="demo-select-small" >Payment Type</InputLabel>
    //                             <Select
    //                                 style={{ color: 'black', textAlign: 'left' }}
    //                                 labelId="demo-select-small"
    //                                 id="demo-select-small"
    //                                 value={paymentType}
    //                                 label="Menu"
    //                                 onChange={(event) => {
    //                                     setPaymentType(event.target.value);
    //                                 }}
    //                             >

    //                                 <MenuItem value={'Full'} >Full payment</MenuItem>
    //                                 <MenuItem value={'Down Payment'} selected>Down Payment</MenuItem>
    //                             </Select>
    //                         </FormControl>
    //                     </ContainerGlobal>

    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Discount:
    //                         </Title>
    //                         <FormControl sx={{ width: 200, margin: '5px 0px' }} size="small" variant="standard">
    //                             <InputLabel id="demo-select-small" >Discount</InputLabel>
    //                             <Select
    //                                 style={{ color: 'black', textAlign: 'left' }}
    //                                 labelId="demo-select-small"
    //                                 id="demo-select-small"
    //                                 value={discount}
    //                                 label="Menu"
    //                                 onChange={(event) => {
    //                                     setDiscount(event.target.value);
    //                                 }}
    //                                 disabled
    //                             >

    //                                 <MenuItem value={'none'} >None</MenuItem>
    //                                 <MenuItem value={'senior'}>Senior Citizen</MenuItem>
    //                                 <MenuItem value={'pwd'}>PWD</MenuItem>
    //                             </Select>
    //                         </FormControl>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Downpayment:
    //                         </Title>
    //                         <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
    //                             value='600.00'
    //                             type='number'
    //                             InputProps={{
    //                                 readOnly: true,
    //                                 endAdornment: <InputAdornment position="end">PHP</InputAdornment>,
    //                             }}

    //                         />
    //                     </ContainerGlobal>

    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='600'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Grand Total:
    //                         </Title>
    //                         <TextField
    //                             id="outlined-basic"
    //                             label=""
    //                             type="number"
    //                             value='1200.00'
    //                             variant="standard"
    //                             style={{ width: 200, margin: '5px 0px', fontWeight: 600 }}
    //                             InputProps={{
    //                                 readOnly: true,
    //                                 endAdornment: <InputAdornment position="end">PHP</InputAdornment>,
    //                             }}
    //                         />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='600'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Remaining Balance:
    //                         </Title>
    //                         <TextField
    //                             id="outlined-basic"
    //                             label=""
    //                             type="number"
    //                             value='1200.00'
    //                             variant="standard"
    //                             style={{ width: 200, margin: '5px 0px', fontWeight: 600 }}
    //                             InputProps={{
    //                                 readOnly: true,
    //                                 endAdornment: <InputAdornment position="end">PHP</InputAdornment>,
    //                             }}
    //                         />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >
    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='600'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Reservation status:
    //                         </Title>

    //                         <RadioGroup
    //                             row
    //                             aria-labelledby="demo-radio-buttons-group-label"
    //                             defaultValue="Pending"
    //                             name="radio-buttons-group"
    //                             style={{ width: 'auto', margin: '10px 0px 0px 0px' }}

    //                         >
    //                             <ContainerGlobal>
    //                                 <ContainerGlobal
    //                                     direction='column'>
    //                                     <FormControlLabel value="Booked" control={<Radio />} label="Booked" />
    //                                     <FormControlLabel value="Pending" control={<Radio />} label="Pending" />
    //                                 </ContainerGlobal>
    //                                 <ContainerGlobal
    //                                     direction='column'>
    //                                     <FormControlLabel value="Unsettled" control={<Radio />} label="Unsettled" />

    //                                 </ContainerGlobal>
    //                             </ContainerGlobal>
    //                         </RadioGroup>
    //                     </ContainerGlobal>
    //                 </ContainerGlobalColumn>


    //             </ContainerGlobalRow>
    //             <Title
    //                 size='26px'
    //                 color='black'
    //                 family='Helvetica'
    //                 fstyle='normal'
    //                 weight='600'
    //                 align='left'
    //                 margin='50px 0px 0px 0px'
    //             >
    //                 Client details
    //             </Title>
    //             <HorizontalLine
    //                 bg='gray'
    //                 w='100%'
    //                 margin='0px'
    //             ></HorizontalLine>


    //             <ContainerGlobalRow>
    //                 <ContainerGlobalColumn>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             First Name:
    //                         </Title>
    //                         <TextField id="outlined-basic" label=""
    //                             value='Pedro'
    //                             variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'

    //                     >
    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Birthday:
    //                         </Title>
    //                         <LocalizationProvider dateAdapter={AdapterDateFns}>
    //                             <DatePicker

    //                                 views={['day', 'month', 'year']}
    //                                 label="Birthday"
    //                                 value={bday}
    //                                 onChange={(newValue) => {
    //                                     setValue(newValue);
    //                                 }}
    //                                 renderInput={(params) =>
    //                                     <TextField
    //                                         {...params}
    //                                         sx={{
    //                                             svg: { color: 'black' },
    //                                             input: { color },
    //                                             label: { color },
    //                                             color: { color },
    //                                             input: { color: 'black', fontWeight: 'bold' },

    //                                         }}

    //                                         variant="standard"
    //                                         style={{ width: 200, margin: '5px 0px' }}
    //                                         helperText={null}
    //                                     />
    //                                 }
    //                             />

    //                         </LocalizationProvider>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Contact Number:
    //                         </Title>
    //                         <TextField id="outlined-basic"
    //                             value='09291234567'
    //                             label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} type='number' />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >
    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Gender:
    //                         </Title>

    //                         <RadioGroup
    //                             aria-labelledby="demo-radio-buttons-group-label"
    //                             defaultValue="male"
    //                             name="radio-buttons-group"
    //                             style={{ width: 200 }}
    //                             disabled
    //                         >
    //                             <FormControlLabel value="female" control={<Radio />} label="Female" />
    //                             <FormControlLabel value="male" control={<Radio />} label="Male" />
    //                             <FormControlLabel value="other" control={<Radio />} label="Other" />
    //                         </RadioGroup>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Address:
    //                         </Title>
    //                         <TextField id="outlined-basic"
    //                             value='Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401'
    //                             multiline
    //                             rows={4}
    //                             label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>

    //                 </ContainerGlobalColumn>

    //                 <ContainerGlobalColumn>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Last Name:
    //                         </Title>
    //                         <TextField id="outlined-basic" label=""
    //                             value='penduco'
    //                             variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Email:
    //                         </Title>
    //                         <TextField id="outlined-basic"
    //                             value='pedropenduco@gmail.com'
    //                             label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='auto'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Nationality:
    //                         </Title>
    //                         <FormControl sx={{ width: 200, margin: '5px 0px' }} size="small" variant="standard">
    //                             <InputLabel id="demo-select-small" >Nationality</InputLabel>
    //                             <Select
    //                                 style={{ color: 'black', textAlign: 'left' }}
    //                                 labelId="demo-select-small"
    //                                 id="demo-select-small"
    //                                 value={nationality}
    //                                 label="Menu"
    //                                 onChange={(event) => {
    //                                     setNationality(event.target.value);
    //                                 }}
    //                             >

    //                                 {nationalities.map(({ nationality }, index) => (
    //                                     <MenuItem value={nationality} >{nationality}</MenuItem>
    //                                 ))}
    //                             </Select>
    //                         </FormControl>
    //                     </ContainerGlobal>
    //                     <ContainerGlobal
    //                         w='420px'
    //                         h='auto'
    //                         direction='row'
    //                         gap='10px'
    //                         justify='space-between'
    //                         align='center'
    //                         overflow='hidden'

    //                     >

    //                         <Title
    //                             size='20px'
    //                             color='Black'
    //                             family='Helvetica'
    //                             fstyle='Normal'
    //                             weight='400'
    //                             align='left'
    //                             margin='15px 0px 20px 0px'
    //                         >
    //                             Special Instructions:
    //                         </Title>
    //                         <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
    //                             multiline
    //                             rows={4}
    //                         />
    //                     </ContainerGlobal>
    //                 </ContainerGlobalColumn>

    //             </ContainerGlobalRow>

    //             <ContainerGlobal
    //                 w='auto'
    //                 h='auto'
    //                 bg='none'
    //                 direction='row'
    //                 gap='10px'
    //                 justify='center'
    //                 align='center'
    //             >
    //                 <Button variant="contained" size="large"
    //                     style={{ backgroundColor: '#50AA32' }}
    //                     onClick={() => setShowEditDetails(prev2 => !prev2)}>
    //                     Save changes
    //                 </Button>
    //                 <Button variant="contained" size="large"
    //                     style={{ backgroundColor: '#FF2400' }}
    //                     onClick={() => setShowEditDetails(prev2 => !prev2)}>
    //                     Cancel
    //                 </Button>
    //             </ContainerGlobal>
    //         </ContainerGlobal>
    //     </ContainerGlobal>);




    const [bookingInformation, setBookingInformation] = useState([])
    // const [grandTotal, setGrandTotal] = useState(0);

    const DeleteRoom = (index) => {
        // setAvailedRoom(availedRoom.filter((o, i) => index !== i));

        setAvailedRoom(oldData => oldData.filter(obj => {
            return obj.id !== index;
        }));
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
                    Manage Reservations
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
                            <MenuItem value={'Reservation Date'}>Reservation Date</MenuItem>
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
                    Reservations
                </Title>
                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                >
                </HorizontalLine>
                <TableContainer>
                    <Tr>
                        <Th align='center'>Reservation Date <ArrowDropUpIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Reservation Number <ArrowDropDownIcon style={{ color: 'black' }} /> </Th>
                        <Th align='center'>Guest's Name  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Room Quantity <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Remaining Balance<ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Reservation Status  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Action</Th>
                    </Tr>
                    {reservation.length != 0 ?
                        reservation.map((item) => (
                            <Tr>
                                <Td align='center'>{new Date(item.reservationDate).toLocaleDateString()}</Td>
                                <Td align='center'>{item.reservationReferenceNumber}</Td>
                                <Td align='center'>{item.guestInformation.firstName}, {item.guestInformation.lastName}</Td>
                                <Td align='center'>{getRoomQuantity(item.id)}</Td>
                                <Td align='center'>{numberFormat(item.payment.balance)}</Td>
                                <Td align='center'>
                                    {reservationStatusStyle(item.reservationStatus)}

                                </Td>

                                <Td align='center'><ActionButtonReservation

                                    view={() => setShowDetails(prev => !prev)}
                                    edit={() => setShowEditDetails(prev => !prev)}
                                /></Td>
                            </Tr>
                        ))
                        : ""}
                    {/* <Tr>
                        <Td align='center'>091243568</Td>
                        <Td align='center'>Berna Boddit</Td>
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
                                    Booked
                                </Title></ContainerGlobal></Td>

                        <Td align='center'>
                            <ActionButtonReservation
                                paid
                                view={() => setShowDetails(prev => !prev)}
                                edit={() => setShowEditDetails(prev => !prev)}
                            />
                        </Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>093224568</Td>
                        <Td align='center'>Hurarric Gaturn</Td>
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
                                    Booked
                                </Title></ContainerGlobal>
                        </Td>

                        <Td align='center'><ActionButtonReservation paid /></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>091212568</Td>
                        <Td align='center'>Kiehl Jam</Td>
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
                                    Unsettled
                                </Title>
                            </ContainerGlobal>
                        </Td>

                        <Td align='center'><ActionButtonReservation unsettled /></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>095434568</Td>
                        <Td align='center'>Hadjustim Karas</Td>
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
                                    Booked
                                </Title></ContainerGlobal>
                        </Td>

                        <Td align='center'><ActionButtonReservation paid /></Td>
                    </Tr> */}


                </TableContainer>

            </ContainerGlobal>

            <Button variant="contained" size="large"
                style={{ backgroundColor: '#2E2E2E' }}
                onClick={() => setShow(prev => !prev)}>
                Walk-in / Reservation
            </Button>


            {/* <Grow in={showDetails}>{viewDetails}</Grow>
            <Grow in={showEditDetails}>{EditDetails}</Grow>
            <Grow in={show}>{WalkinModal}</Grow> */}

            <Modal
                open={true}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Box
                    component='div' style={{
                        height: '75vh',
                        width: '80vw',
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
                        backgroundColor: 'black',
                        zIndex: '1',

                    }}>
                        <CloseIcon style={{
                            color: 'white',
                            cursor: 'pointer',
                            margin: '10px',
                        }} />
                    </div>


                    <Title
                        size='26px'
                        color='white'
                        family='Helvetica'
                        fstyle='normal'
                        weight='600'
                        align='left'
                        bg='#2E2E2E'
                        margin='40px 0px 0px 0px'
                        padding='10px 15px'
                        borderRadius='.5rem'
                    >
                        Reservation details
                    </Title>
                    <TitleCalendarContainer
                        style={{
                            width: '100%',
                            margin: '0px'
                        }}
                    >
                        <DateRangePicker
                            startDate={startDate}
                            nights={nights}
                            endDate={endDate}
                            onChangeStartDate={(date) => setStartDate(date)}
                            onChangeEndDate={(date) => setEndDate(date)}
                            minDateStart={new Date()}
                            maxDateStart={new Date(endDate)}
                            minDateEnd={minEndDate}

                        // minDate={new Date()}
                        />
                        <Persons>
                            <LabelDiv>
                                <TextInput
                                    style={{ fontWeight: 'bold', fontSize: '1.1vw' }}
                                    family='Roboto Slab'
                                    width="5vw"
                                    placeholder="No. of Adults"
                                    align="center"
                                    borderColor='black'
                                    margins='0px'
                                    value={adults}
                                    max={4}
                                    min={1}
                                    type='number'
                                    onChange={(e) => {
                                        setAdults(e.target.value);
                                    }}
                                    height='3vw'
                                >

                                </TextInput>
                                <Title
                                    size='1.1vw'
                                    weight="Bold">

                                    Adults
                                </Title>
                            </LabelDiv>
                            <LabelDiv>


                                <TextInput
                                    style={{ fontWeight: 'bold', fontSize: '1.1vw' }}
                                    family='Roboto Slab'
                                    width="5vw"
                                    placeholder="No. of Adults"
                                    align="center"
                                    borderColor='black'
                                    margins='0px'
                                    max={2}
                                    min={0}
                                    value={kids}
                                    type='number'
                                    onChange={(e) => {
                                        setKids(e.target.value);
                                    }}
                                    height='3vw'
                                ></TextInput>

                                <Title
                                    size='1.1vw'
                                    weight="bold">

                                    Kids
                                </Title>
                            </LabelDiv>
                        </Persons>
                    </TitleCalendarContainer>
                    <ContainerGlobalRow
                        style={{ marginTop: '50px' }}>

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
                                        {roomTypeDb.length != 0 ? roomTypeDb.map((item) => (
                                            <MenuItem value={item.roomType}
                                                disabled={badgeCount(item.roomType) == null ? true : false}
                                            >
                                                <Badge badgeContent={badgeCount(item.roomType)} color="success" style={{ marginTop: 10 }} title='40 Available rooms'>
                                                    <ContainerGlobal
                                                        margin='0px 15px 0px 0px'>
                                                        {item.roomType}
                                                    </ContainerGlobal>
                                                </Badge>
                                            </MenuItem>))
                                            :
                                            ""}
                                        {/* <MenuItem value={'Deluxe'} >
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
                                        </Badge></MenuItem> */}
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
                                margin='0px 0px 20px 0px'

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
                                        required
                                    >

                                        {availableRooms.length != 0 || roomType != '' ?
                                            availableRooms.map((item) => (
                                                item.roomType.roomType == roomType ? <MenuItem value={item.roomNumber}>
                                                    Room {item.roomNumber}
                                                </MenuItem> : <MenuItem style={{ display: 'none' }}></MenuItem>
                                            ))
                                            : ""}
                                        {/* <MenuItem value={'R101'} selected>
                                            Room 101
                                        </MenuItem> */}
                                        {/* <MenuItem value={'R102'} >
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
                                        </MenuItem> */}
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
                                    Room rate per night:
                                </Title>
                                <TextField value={numberFormat(roomRate)} id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />

                            </ContainerGlobal>
                            <Button variant="contained" onClick={() => { addToCart() }} disabled={roomType != '' && roomNumber != '' && roomRate != 0 ? false : true} >Add</Button>


                            {/* 
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
                            </ContainerGlobal> */}
                        </ContainerGlobalColumn>


                    </ContainerGlobalRow>

                    <hr style={{ width: '100%' }}></hr>
                    <Title
                        size='26px'
                        color='white'
                        family='Helvetica'
                        fstyle='normal'
                        weight='600'
                        align='left'
                        bg='#2E2E2E'
                        margin='40px 0px 0px 0px'
                        padding='10px 15px'
                        borderRadius='.5rem'
                    >
                        Reservation cart
                    </Title>
                    {/* <HorizontalLine
                        bg='gray'
                        w='100%'
                        margin='0px'
                    ></HorizontalLine> */}

                    <ContainerGlobalRow
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%'
                        }}
                    >
                        <FlexboxContainer
                            w='100%'
                            margin='0px'
                            padding='0px'
                            style={{
                                backgroundColor: 'transparent',
                            }}>

                            <TableContainer
                                cellspacing="0"
                                cellpadding="0">
                                <Tr>
                                    <Th align='center' color='black'>Room number</Th>
                                    <Th align='center' color='black'>Room type</Th>
                                    <Th align='center' color='black'>Check in</Th>
                                    <Th align='center' color='black'>Check out</Th>
                                    <Th align='center' color='black'>Total nights</Th>
                                    <Th align='center' color='black'>Rate per night</Th>
                                    <Th align='center' color='black'>Total amout due</Th>
                                    <Th align='center' color='black'>Action</Th>
                                </Tr>
                                {availedRoom.length != 0 ?

                                    availedRoom.map((item, index) => (
                                        <Tr>

                                            <Td align='center'>{item.roomNumber}</Td>
                                            <Td align='center'>{item.roomType}</Td>
                                            <Td align='center'>{new Date(item.checkIn).toLocaleDateString()}</Td>
                                            <Td align='center'>{new Date(item.checkOut).toLocaleDateString()}</Td>
                                            <Td align='center'>{item.totalNights}</Td>
                                            <Td align='center'>{numberFormat(item.roomRate)}</Td>
                                            <Td align='center' style={{ color: 'red' }}>{numberFormat(item.roomRate * item.totalNights)}</Td>
                                            <Td align='center'>
                                                <IconButton type="submit" sx={{ p: '8px', backgroundColor: 'rgb(255, 36, 0, 0.7)' }} aria-label="search" title='Delete' onClick={() => { DeleteRoom(item.id) }}>
                                                    <DeleteIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
                                                </IconButton></Td>
                                        </Tr>

                                    ))
                                    :

                                    ""}
                                {/* <Tr rowSpan={2} style={{ backgroundColor: 'transparent' }}>
                                    <Td align='center' ></Td>
                                    <Td align='center'></Td>
                                    <Td align='center'></Td>
                                    <Td align='center'></Td>
                                    <Td colSpan={2} align='center' style={{ fontSize: '16px' }}>Grand Total:</Td>
                                    <Td align='center' style={{ fontSize: '16px', fontWeight: 'normal', color: 'red' }}>{numberFormat(grandTotal)}</Td>
                                    <Td align='center'></Td>
                                </Tr> */}
                            </TableContainer>


                        </FlexboxContainer>
                    </ContainerGlobalRow>

                    <hr style={{ width: '100%' }}></hr>
                    <Title
                        size='26px'
                        color='white'
                        family='Helvetica'
                        fstyle='normal'
                        weight='600'
                        align='left'
                        bg='#2E2E2E'
                        margin='40px 0px 10px 0px'
                        padding='10px 15px'
                        borderRadius='.5rem'
                    >
                        Payment details
                    </Title>


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
                                    Payment Mode:
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
                                        {paymentMode.length != 0 ? paymentMode.map((item) => (
                                            <MenuItem value={item.paymentMode} selected>{item.paymentMode}</MenuItem>

                                        )) : ""}
                                        {/* <MenuItem value={'Cash'} selected>Cash (pay at the hotel)</MenuItem>
                                        <MenuItem value={'Bank'} >Bank (Metro Bank)</MenuItem>
                                        <MenuItem value={'E-Payment'} selected>E-Payment (Gcash)</MenuItem> */}
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

                                        <MenuItem value={'Full Payment'} >Full payment</MenuItem>
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

                                    >
                                        {discountDb.length != 0 ? discountDb.map((item, index) => (
                                            <MenuItem value={item.discountType} >{item.discountType}</MenuItem>

                                        )) : ""}

                                        {/* <MenuItem value={'none'} >None</MenuItem>
                                        <MenuItem value={'senior'}>Senior Citizen</MenuItem>
                                        <MenuItem value={'pwd'}>PWD</MenuItem> */}
                                    </Select>
                                </FormControl>
                            </ContainerGlobal>

                        </ContainerGlobalColumn>
                        <ContainerGlobalColumn>


                            {paymentType != '' || paymentType != null ?
                                paymentType == 'Full Payment' ?
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
                                            Full payment:
                                        </Title>
                                        <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
                                            value={numberFormat(grandTotal)}
                                            type="text"
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        /> </ContainerGlobal>
                                    :
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
                                            Down payment:
                                        </Title>
                                        <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
                                            value={numberFormat(grandTotal / 2)}
                                            type="text"
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        /> </ContainerGlobal> : ""
                            }
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
                                    Payment Made:
                                </Title>
                                <TextField id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }}
                                    value={numberFormat(0)}
                                    type="text"
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
                                    weight='600'
                                    align='left'
                                    margin='15px 0px 20px 0px'
                                >
                                    Grand Total:
                                </Title>
                                <TextField
                                    id="outlined-basic"
                                    label=""
                                    type="text"
                                    value={numberFormat(grandTotal)}
                                    variant="standard"
                                    style={{ width: 200, margin: '5px 0px', fontWeight: 600 }}
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
                                    weight='600'
                                    align='left'
                                    margin='15px 0px 20px 0px'
                                >
                                    Remaining Balance:
                                </Title>
                                <TextField
                                    id="outlined-basic"
                                    label=""
                                    type="text"
                                    value={numberFormat(grandTotal)}
                                    variant="standard"
                                    style={{ width: 200, margin: '5px 0px', fontWeight: 600 }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </ContainerGlobal>
                        </ContainerGlobalColumn>
                    </ContainerGlobalRow>

                    <hr style={{ width: '100%' }}></hr>
                    <Title
                        size='26px'
                        color='white'
                        family='Helvetica'
                        fstyle='normal'
                        weight='600'
                        align='left'
                        bg='#2E2E2E'
                        margin='40px 0px 10px 0px'
                        padding='10px 15px'
                        borderRadius='.5rem'
                    >
                        Guest details
                    </Title>



                    <ContainerGlobalRow>
                        <ContainerFormContent >

                            <InputContainer>
                                <TextField
                                    error={firstNameError.length != 0 ? true : false}
                                    helperText={firstNameError.length != 0 ? firstNameError : ""}
                                    placeholder='First Name'
                                    label="First Name"
                                    inputRef={firstNameRef}
                                    variant="outlined"
                                    value={firstName}
                                    onChange={(e) => {
                                        setFirstName(e.target.value.toLocaleLowerCase())
                                        if (!letters.test(e.target.value) && e.target.value.length != 0) {
                                            setFirstNameError("Invalid first name. Please type letters only.")
                                        }
                                        else {
                                            setFirstNameError("")
                                        }
                                    }}
                                    style={{ width: '55%', }}
                                    required />

                                <TextField
                                    error={lastNameError.length != 0 ? true : false}
                                    helperText={lastNameError.length != 0 ? lastNameError : ""}
                                    placeholder='Last Name'
                                    label="Last Name"
                                    variant="outlined"
                                    inputRef={lastNameRef}
                                    value={lastName}
                                    onChange={(e) => {
                                        setLastName(e.target.value.toLocaleLowerCase())
                                        if (!letters.test(e.target.value) && e.target.value.length != 0) {
                                            setLastNameError("Invalid last name. Please type letters only.")
                                        }
                                        else {
                                            setLastNameError("")
                                        }

                                    }}
                                    style={{ width: '55%', }}
                                    required />
                            </InputContainer>


                            <InputContainer>
                                <TextField
                                    error={emailError.length != 0 ? true : false}
                                    helperText={emailError.length != 0 ? emailError : ""}
                                    placeholder='Email'
                                    label="Email"
                                    variant="outlined"
                                    type='email'
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)

                                        setEmailError("")
                                    }}
                                    style={{ width: '55%', }}
                                    inputRef={emailRef}
                                    required />

                                <TextField
                                    error={contactNumberError.length != 0 ? true : false}
                                    helperText={contactNumberError.length != 0 ? contactNumberError : ""}
                                    placeholder='Contact Number e.g. 09123456789 or +639123456789'
                                    label="Contact Number"
                                    variant="outlined"
                                    value={contactNumber}
                                    onChange={(e) => {
                                        setContactNumber(e.target.value)

                                        if (!phoneNumberValidation.test(e.target.value) && e.target.value.length != 0) {
                                            setContactNumberError("Contact number is invalid. Please provide a valid contact number.")
                                        }
                                        else {
                                            setContactNumberError("")
                                        }
                                    }}
                                    inputRef={contactNumberRef}
                                    style={{ width: '55%', }}
                                    required />
                            </InputContainer>


                            <InputContainer>

                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker

                                        views={['day', 'month', 'year']}
                                        label="Birthday"
                                        value={birthday}
                                        onChange={(newValue) => {
                                            setBirthDay(newValue);
                                        }}
                                        renderInput={(params) =>
                                            <TextField
                                                {...params}
                                                variant="standard"
                                                style={{ width: "55%", margin: '5px 0px' }}
                                                helperText={null}
                                                required
                                            />
                                        }
                                    />

                                </LocalizationProvider>

                                <FormControl sx={{ width: "55%", margin: '5px 0px' }} size="small" variant="standard">
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
                                        required
                                    >

                                        {nationalities.map(({ nationality }, index) => (
                                            <MenuItem value={nationality} >{nationality}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </InputContainer>

                            <InputContainer
                                justify='center'>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label"
                                        style={{ textAlign: 'center', }} >Gender</FormLabel>
                                    <RadioGroup
                                        row

                                        error={genderError.length != 0 ? true : false}
                                        helperText={genderError.length != 0 ? genderError : ""}
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        defaultValue="male"
                                        value={gender}
                                        name="row-radio-buttons-group"
                                        onChange={(e) => {
                                            setGender(e.target.value)
                                        }}
                                        required
                                    >
                                        <FormControlLabel
                                            value="male"
                                            control={<Radio />}
                                            label="Male"
                                        />
                                        <FormControlLabel
                                            value="female"
                                            control={<Radio />}
                                            label="Female"
                                        />
                                        <FormControlLabel
                                            value="other"
                                            control={<Radio />}
                                            label="Other"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </InputContainer>


                            <InputContainer>
                                <TextField
                                    error={addressError.length != 0 ? true : false}
                                    helperText={addressError.length != 0 ? addressError : ""}
                                    placeholder='Complete Address'
                                    label="Complete Address"
                                    variant="outlined"
                                    type='text'
                                    value={address}
                                    onChange={(e) => {
                                        setAddress(e.target.value)
                                    }}
                                    multiline
                                    rows={4}
                                    style={{ width: '95%', }}
                                    required />

                            </InputContainer>
                            <p><h1 style={{ display: 'inline' }}>Create an account </h1>(optional)*</p>
                            <InputContainer>
                                <TextField

                                    error={userNameError.length != 0 ? true : false}
                                    helperText={userNameError.length != 0 ? userNameError : ""}
                                    placeholder='Username'
                                    label="Username"
                                    variant="outlined"
                                    inputRef={userNameRef}
                                    value={userName}
                                    onChange={(e) => {
                                        setUserName(e.target.value)
                                        setUserNameError("")
                                    }}
                                    required={password.length != 0 ? true : false}
                                    style={{ width: '55%', }} />

                                <TextField
                                    error={passwordError.length != 0 ? true : false}
                                    helperText={passwordError.length != 0 ? passwordError : ""}
                                    placeholder='Password'
                                    label="Password"
                                    type='password'
                                    variant="outlined"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                        if (!passwordValidation.test(e.target.value) && e.target.value.length != 0) {
                                            setPasswordError("Password must have a minimum of eight characters, at least one letter and one number.")
                                        }
                                        else {
                                            setPasswordError("")
                                        }
                                    }}
                                    style={{ width: '55%', }}
                                    required={userName.length != 0 ? true : false}
                                />
                            </InputContainer>



                            {/* <Recaptcha
                                sitekey="6LdJnrkeAAAAAOt5k6Gz1_Op5iBm0Jm75Sl4PME_"
                                render="explicit"
                                onloadCallback={callback}
                            /> */}


                            {/* <FormButton
                                whileHover={{ backgroundColor: "#0C4426", color: "white" }}
                                w='200px'
                                h='60px'
                                textcolor="#0C4426"
                                fam='Playfair Display, serif'
                                weight='-400'
                                fontStyle='Normal'
                                radius="0px"
                                border="1px solid #0C4426"
                                margin='30px 0px 0px 0px'
                                fontsize='23px'
                                // href='/billingSummary'
                                type='submit'
                                value='Continue'
                            >

                            </FormButton>
                            <Button
                                whileHover={{ color: "#0C4426" }}
                                w='100px'
                                h='40px'
                                textcolor='#FFFFFF'
                                fam='Times New Roman, serif'
                                weight='-400'
                                fontStyle='Italic'
                                radius="0px"
                                margin='20px 0px 40px 0px'
                                fontsize='16px'
                                bg='#FF9292'
                                href='/bookingCart'
                            >
                                Cancel
                            </Button> */}
                        </ContainerFormContent>
                    </ContainerGlobalRow>
                    <br></br>
                    <Button variant="contained" color='success'>Create reservation</Button>
                    <Button variant="contained" color='error'>Close</Button>
                </Box>
            </Modal>

        </Container>
    )
}
