import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
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
import { Badge, FormControlLabel, Radio, RadioGroup, TextareaAutosize, FormControl, Modal, Box, Checkbox, FormLabel } from '@mui/material'
import { nationalities } from '../../../nationalities'
import { Global } from '@emotion/react'
import axios from 'axios'
import { FlexboxContainer } from '../../../client/containers/bookingCartPage/Styles'

import { apiKey } from '../../../apiKey'
import moment from 'moment'
import { ContainerFormContent, InputContainer } from '../../../client/containers/informationForm/style'
import DateRangePicker from '../../../client/components/datePicker/DateRangePicker'
import { LabelDiv, Persons, TitleCalendarContainer } from '../../../client/containers/bookingPage/Styles'


const BookingsContainer = () => {
    const [value, setValue] = useState(Date.now());
    const [outValue, setOutValue] = useState(Date.now() + 86400000);
    const color = "#c44242";
    const [age, setAge] = React.useState('');


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


    const [downPaymentValue, setDownPaymentValue] = useState(0)
    const [paymentMadeValue, setPaymentMadeValue] = useState(0)
    const [grandTotalValue, setGrandTotalValue] = useState(0)
    const [remainingBalanceValue, setRemainingBalanceValue] = useState(0)

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
    const [specialInstrcution, setSpecialInstruction] = React.useState('');

    const [reservation, setReservation] = useState([]);

    const numberFormat = (value) =>
        new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'PHP'
        }).format(value);

    // const [nationality, setNationality] = useState('Filipino')
    // console.log(outValue)
    const bday = new Date(2000, 11, 2,)
    let reservationDate = Date.now()

    // console.log(outValue)
    const [show, setShow] = useState(false);

    const [showDetails, setShowDetails] = useState(false);
    const [showEditDetails, setShowEditDetails] = useState(false);


    const [availedRoom, setAvailedRoom] = useState([]);

    const [roomRate, setRoomRate] = useState(0);

    const [notAvailableRoom, setNotAvailableRoom] = useState([]);


    const [availableRooms, setAvailableRooms] = useState([]);
    const [reservationStatus, setReservationStatus] = useState('');
    const [reservationStatusConst, setReservationStatusConst] = useState('');

    const [roomTypeDb, setRoomTypeDb] = useState([]);
    const [openCreate, setOpenCreate] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const [paymentMode, setPaymentMode] = useState([]);
    const [discountDb, setDiscountDb] = useState([]);
    const [discountValid, setDiscountValid] = useState(false);

    const [paymentModeId, setPaymentModeId] = useState("");
    const [discountId, setDiscountId] = useState("");
    const [grandTotal, setGrandTotal] = useState(0);


    const [editPaymentId, setEditPaymentId] = useState('');



    const [editReservationId, setEditReservationId] = useState('');


    const [reservationInfo, setReservationInfo] = useState([])
    const [reservationSummaryInfo, setReservationSummaryInfo] = useState([])
    let formatNumber;

    const [numberOfRooms, setNumberOfRooms] = useState([]);

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





    const [extraMattress, setExtraMattress] = useState(0);
    const [extraPillow, setExtraPillow] = useState(0);
    const [extraBlanket, setExtraBlanket] = useState(0);
    const [extraPerson, setExtraPerson] = useState(0);
    const [extraTime, setExtraTime] = useState(0);
    const [others, setOthers] = useState(0);


    const [amenities, setAmenities] = useState([]);




    const [openView, setOpenView] = useState(false);

    const handleCloseView = () => {
        setOpenView(false)
        setReservationInfo([])
        setReservationSummaryInfo([])
        setStartDate('')
        setEndDate('')
        setKids('')
        setAdults('')
        setSpecialInstruction('')
        setRoomType('')
        setRoomNumber('')
        setOthers(0)
        setExtraBlanket(0)
        setExtraMattress(0)
        setExtraPerson(0)
        setExtraPillow(0)
        setExtraTime(0)

    }


    const handleOpenView = (value) => {
        setOpenView(true)
        axios.get(apiKey + 'api/getReservationSummary/' + value).then((result) => {
            setReservationSummaryInfo(result.data)
            setStartDate(new Date(result.data.checkInDate))
            setEndDate(new Date(result.data.checkOutDate))
            setKids(result.data.kids)
            setAdults(result.data.adults)
            setSpecialInstruction(result.data.specialInstrcution)
            setRoomType(result.data.room.roomType.roomType)
            setRoomNumber(result.data.room.roomNumber)
            setOthers(result.data.others)
            axios.get(apiKey + 'api/getAllOrderedAmenities').then((result) => {
                for (let index = 0; index < result.data.length; index++) {
                    if (result.data[index].reservationSummary_id == value) {
                        if (result.data[index].amenity.amenityName == "Extra Mattress") {
                            setExtraMattress(result.data[index].quantity)
                        }
                        else if (result.data[index].amenity.amenityName == "Extra Blanket") {
                            setExtraBlanket(result.data[index].quantity)
                        }
                        else if (result.data[index].amenity.amenityName == "Extra Pillow") {
                            setExtraPillow(result.data[index].quantity)
                        }
                        else if (result.data[index].amenity.amenityName == "Extra Time(Rate/hour)") {
                            setExtraTime(result.data[index].quantity)
                        }
                        else if (result.data[index].amenity.amenityName == "Extra Person") {
                            setExtraPerson(result.data[index].quantity)
                        }
                    }
                }
            }).catch((err) => {
                console.log(err)
            });
        }).catch((err) => {
            console.log(err)
        });


    }

    const handleCloseEdit = () => {
        setOpenEdit(false)
        setReservationInfo([])
        setReservationSummaryInfo([])
        setOthers(0)
        setExtraBlanket(0)
        setExtraMattress(0)
        setExtraPerson(0)
        setExtraPillow(0)
        setExtraTime(0)

    }

    const handleOpenEdit = (value) => {
        setOpenEdit(true)
        axios.get(apiKey + 'api/getReservationSummary/' + value).then((result) => {
            setReservationSummaryInfo(result.data)
            setStartDate(new Date(result.data.checkInDate))
            setEndDate(new Date(result.data.checkOutDate))
            setKids(result.data.kids)
            setAdults(result.data.adults)
            setSpecialInstruction(result.data.specialInstrcution)
            setRoomType(result.data.room.roomType.roomType)
            setRoomNumber(result.data.room.roomNumber)
            setReservationStatus(result.data.bookingStatus)
            setOthers(result.data.others)
            axios.get(apiKey + 'api/getAllOrderedAmenities').then((result) => {
                for (let index = 0; index < result.data.length; index++) {
                    if (result.data[index].reservationSummary_id == value) {
                        if (result.data[index].amenity.amenityName == "Extra Mattress") {
                            setExtraMattress(result.data[index].quantity)
                        }
                        else if (result.data[index].amenity.amenityName == "Extra Blanket") {
                            setExtraBlanket(result.data[index].quantity)
                        }
                        else if (result.data[index].amenity.amenityName == "Extra Pillow") {
                            setExtraPillow(result.data[index].quantity)
                        }
                        else if (result.data[index].amenity.amenityName == "Extra Time(Rate/hour)") {
                            setExtraTime(result.data[index].quantity)
                        }
                        else if (result.data[index].amenity.amenityName == "Extra Person") {
                            setExtraPerson(result.data[index].quantity)
                        }
                    }
                }
            }).catch((err) => {
                console.log(err)
            });

        }).catch((err) => {
            console.log(err)
        });



    }

    const [reservationSummary, setReservarionSummary] = useState([]);

    useLayoutEffect(() => {
        axios(apiKey + 'api/getAllReservationSummary').then((result) => {
            setReservarionSummary(result.data)
        }).catch((err) => {
            console.log(err)

        });
        axios.get(apiKey + 'api/getAllRoomType').then((result) => {
            setRoomTypeDb(result.data)
        }).catch((err) => {
            console.log(err)
        });

        axios.get(apiKey + 'api/getAllAmenities').then((result) => {
            console.log(result.data)
            setAmenities(result.data)
        }).catch((err) => {
            console.log(err)
        });
    }, [])



    useEffect(() => {


        // setRoomNumber('')

        if (roomType != '') {
            roomTypeDb.map((item) => (
                item.roomType == roomType ? setRoomRate(item.roomRate) : ""
            ))
        }


        // if (discountDb.length != 0) {
        //     discountDb.map((item) => {
        //         if (item.discountType == 'No discount') {
        //             setDiscount(item.discountType)
        //         }
        //     })
        // }


        // if (paymentMode.length != 0) {
        //     paymentMode.map((item, index) => {
        //         if (index == 0) {
        //             setPaymentMethod(item.paymentMode)
        //         }
        //     })
        // }

    }, [roomType])
    useEffect(() => {

        if (startDate !== null && endDate !== null) {
            setNights(Math.floor((endDate - startDate) / (24 * 60 * 60 * 1000)));
        }
        else {
            setNights(0);
        }
    }, [startDate, endDate])

    const updadateBookingStatus = () => {
        axios.patch(apiKey + 'api/updateReservationSummary/' + reservationSummaryInfo.id, {
            bookingStatus: reservationStatus,
        }).then((result) => {
            console.log(result.data)
            window.location.reload()
        }).catch((err) => {
            console.log(err)
        });
    }

    useEffect(() => {

        axios.get(apiKey + 'api/getAllReservationSummary').then((result) => {
            setNotAvailableRoom([])
            // setNotAvailableRoom(
            //     result.data.filter((obj) => {
            //         if ((obj.bookingStatus == "PENDING" || obj.bookingStatus == "RESERVED" || obj.bookingStatus == "CHECKED-IN") && obj.id != reservationSummaryInfo.id) {
            //             return obj
            //         }
            //     }).filter((obj) => {
            //         let systemDates = getDates(startDate, endDate);
            //         systemDates.pop()
            //         let dataBaseDates = getDates(obj.checkInDate, obj.checkOutDate);
            //         dataBaseDates.pop()

            //         loop1:
            //         for (let i = 0; i < systemDates.length; i++) {
            //             loop2:
            //             for (let j = 0; j < dataBaseDates.length; j++) {
            //                 if (systemDates[i] == dataBaseDates[j]) {
            //                     return obj
            //                     break loop1;
            //                 }
            //                 else {
            //                     console.log(false)
            //                 }
            //             }

            //         }
            //     }).map((item) => item.room_id))

            // console.log("NOT AVAILABLE dATES: ", result.data.filter((obj) => {
            //     if ((obj.bookingStatus == "PENDING" || obj.bookingStatus == "RESERVED" || obj.bookingStatus == "CHECKED-IN") && obj.id != reservationSummaryInfo.id) {
            //         return obj
            //     }
            // }).filter((obj) => {
            //     let systemDates = getDates(startDate, endDate);
            //     systemDates.pop()
            //     let dataBaseDates = getDates(obj.checkInDate, obj.checkOutDate);
            //     dataBaseDates.pop()

            //     loop1:
            //     for (let i = 0; i < systemDates.length; i++) {
            //         loop2:
            //         for (let j = 0; j < dataBaseDates.length; j++) {
            //             if (systemDates[i] == dataBaseDates[j]) {
            //                 return obj
            //                 break loop1;
            //             }
            //             else {
            //                 console.log(false)
            //             }
            //         }

            //     }
            // }).map((item) => item.room_id))


            for (let index = 0; index < result.data.length; index++) {
                if ((result.data[index].bookingStatus == "PENDING" || result.data[index].bookingStatus == "RESERVED" || result.data[index].bookingStatus == "CHECKED-IN") && result.data[index].id != reservationSummaryInfo.id) {
                    let systemDates = getDates(startDate, endDate);
                    systemDates.pop()
                    let dataBaseDates = getDates(result.data[index].checkInDate, result.data[index].checkOutDate);
                    dataBaseDates.pop()

                    loop1:
                    for (let i = 0; i < systemDates.length; i++) {
                        loop2:
                        for (let j = 0; j < dataBaseDates.length; j++) {
                            if (systemDates[i] == dataBaseDates[j]) {
                                console.log('previous loop: ', result.data[index].room_id)
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


        }).catch((err) => {
            console.log(err)
        });

    }, [startDate, endDate, reservationSummaryInfo])


    useLayoutEffect(() => {

        axios.get(apiKey + 'api/getAllRoom').then((result) => {
            setAvailableRooms(result.data.filter((obj) => (!notAvailableRoom.includes(obj.id) && obj.roomStatus != 'Maintenance' && obj.roomType.maxAdultOccupancy >= adults && obj.roomType.maxKidsOccupancy >= kids)))

            // for (let index = 0; index < result.data.length; index++) {
            //     if (!notAvailableRoom.includes(result.data[index].id) && result.data[index].roomStatus != 'Maintenance' && result.data[index].roomType.maxAdultOccupancy >= adults && result.data[index].roomType.maxKidsOccupancy >= kids) {
            //         setAvailableRooms((oldData) => [...oldData, result.data[index]])
            //     }

            // }
            if (roomType != '') {
                if (result.data.filter((obj) => (!notAvailableRoom.includes(obj.id) && obj.roomStatus != 'Maintenance' && obj.roomType.maxAdultOccupancy >= adults && obj.roomType.maxKidsOccupancy >= kids)).filter((obj) => (obj.roomType.roomType == roomType)).length == 0) {
                    // setRoomType('')
                    setRoomNumber('')
                }

                if (reservationSummaryInfo.length != 0) {
                    if (roomType == reservationSummaryInfo.room.roomType.roomType) {
                        setRoomNumber(reservationSummaryInfo.room.roomNumber)
                    }
                }
            }

        }).catch((err) => {
            console.log(err)

        });

    }, [notAvailableRoom, startDate, endDate, kids, adults, roomType])


    useEffect(() => {
        if (availableRooms.length != 0) {
            console.log("availableRooms", availableRooms)
            if (availableRooms.filter((obj) => (obj.roomType.roomType == roomType)).length == 0) {
                // setRoomType('')
                // setRoomNumber('')
            }
        }
    }, [availableRooms, roomType, startDate, endDate, kids, adults])

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

    const saveReservationSummary = () => {
        axios.get(apiKey + 'api/getAllRoom').then((room) => {
            for (let index = 0; index < room.data.length; index++) {
                if (room.data[index].roomNumber == roomNumber) {
                    axios.patch(apiKey + 'api/updateReservationSummary/' + reservationSummaryInfo.id, {
                        checkInDate: startDate,
                        checkOutDate: endDate,
                        numberOfNights: nights,
                        kids: kids,
                        adults: adults,
                        specialInstrcution: specialInstrcution,
                        room_id: room.data[index].id,
                        others: others,
                    }).then((result) => {
                        console.log(result.data)
                        axios.get(apiKey + 'api/getAllOrderedAmenities').then((result) => {
                            for (let index = 0; index < result.data.length; index++) {
                                if (result.data[index].reservationSummary_id == reservationSummaryInfo.id) {
                                    if (result.data[index].amenity.amenityName == "Extra Mattress") {
                                        axios.patch(apiKey + 'api/updateOrderedAmenities/' + result.data[index].id, {
                                            quantity: extraMattress,
                                        }).then((result) => {
                                            console.log(result.data)
                                        }).catch((err) => {
                                            console.log(err)

                                        });
                                    }
                                    else if (result.data[index].amenity.amenityName == "Extra Blanket") {
                                        axios.patch(apiKey + 'api/updateOrderedAmenities/' + result.data[index].id, {
                                            quantity: extraBlanket,
                                        }).then((result) => {
                                            console.log(result.data)
                                        }).catch((err) => {
                                            console.log(err)

                                        });
                                    }
                                    else if (result.data[index].amenity.amenityName == "Extra Pillow") {
                                        axios.patch(apiKey + 'api/updateOrderedAmenities/' + result.data[index].id, {
                                            quantity: extraPillow,
                                        }).then((result) => {
                                            console.log(result.data)
                                        }).catch((err) => {
                                            console.log(err)

                                        });
                                    }
                                    else if (result.data[index].amenity.amenityName == "Extra Time(Rate/hour)") {
                                        axios.patch(apiKey + 'api/updateOrderedAmenities/' + result.data[index].id, {
                                            quantity: extraTime,
                                        }).then((result) => {
                                            console.log(result.data)
                                        }).catch((err) => {
                                            console.log(err)

                                        });
                                    }
                                    else if (result.data[index].amenity.amenityName == "Extra Person") {
                                        axios.patch(apiKey + 'api/updateOrderedAmenities/' + result.data[index].id, {
                                            quantity: extraPerson,
                                        }).then((result) => {
                                            console.log(result.data)
                                        }).catch((err) => {
                                            console.log(err)

                                        });
                                    }
                                }


                                if (index == result.data.length - 1) {
                                    axios.patch(apiKey + 'api/updateGrandTotal/' + reservationSummaryInfo.reservation.payment.id, {
                                        paymentMade: reservationSummaryInfo.reservation.payment.paymentMade,
                                    }).then((result) => {
                                        console.log(result.data)
                                        //partial
                                        window.location.reload()
                                    }).catch((err) => {
                                        console.log(err)

                                    })
                                }
                            }
                        }).catch((err) => {
                            console.log(err)
                        });

                    }).catch((err) => {
                        console.log(err)
                    });
                }

            }
        }).catch((err) => {
            console.log(err)

        });
    }

    const paymentStatusStyle = (value) => {
        if (value == 'pending') {
            return <ContainerGlobal
                w='100px'
                h='auto'
                margin='0px auto'
                bg='rgb(205, 161, 65, .2)'
                direction='row'
                padding='2px 0px'
                justify='center'
                align='center'
                border='2px solid rgb(205, 161, 65)'
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
                    {value}
                </Title>
            </ContainerGlobal>
        }
        else if (value == 'partial') {
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
                    {value}
                </Title>
            </ContainerGlobal>
        }
        else if (value == 'fully paid') {
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
                    {value}
                </Title>
            </ContainerGlobal>
        }
        else if (value == 'cancelled') {
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
                    {value}
                </Title>
            </ContainerGlobal>
        }
        else if (value == 'reciept declined') {
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
                    {value}
                </Title>
            </ContainerGlobal>
        }
    }


    const bookingStatusStyle = (value) => {
        if (value == 'PENDING') {
            return <ContainerGlobal
                w='100px'
                h='auto'
                margin='0px auto'
                bg='rgb(205, 161, 65, .2)'
                direction='row'
                padding='2px 0px'
                justify='center'
                align='center'
                border='2px solid rgb(205, 161, 65)'
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
        else if (value == 'RESERVED') {
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
        else if (value == 'CHECKED-IN') {
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
        else if (value == 'NO-SHOW') {
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
        else if (value == 'CHECKED-OUT') {
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


    const deleteBooking = (id) => {
        if (window.confirm("Are you sure you want to delete this?")) {
            axios.get(apiKey + 'api/getAllOrderedAmenities').then((result) => {
                for (let index = 0; index < result.data.length; index++) {
                    if (result.data[index].reservationSummary_id == id) {
                        axios.delete(apiKey + 'api/deleteOrderedAmenities/' + result.data[index].id).then((result) => {
                            console.log(result.data)
                            axios.get(apiKey + 'api/getAllOrderedAmenities').then((result) => {
                                if (result.data.filter((obj) => obj.reservationSummary_id == id).length == 0) {
                                    axios.delete(apiKey + 'api/deleteReservationSummary/' + id).then((result) => {
                                        console.log(result.data)
                                        axios.patch(apiKey + 'api/updateGrandTotal/' + reservationSummaryInfo.reservation.payment.id, {
                                            paymentMade: reservationSummaryInfo.reservation.payment.paymentMade,
                                        }).then((result) => {
                                            console.log(result.data)
                                            //partial
                                            window.location.reload()
                                        }).catch((err) => {
                                            console.log(err)

                                        })
                                    }).catch((err) => {
                                        console.log(err)
                                    });
                                }
                            }).catch((err) => {
                                console.log(err)
                            });
                        }).catch((err) => {
                            console.log(err)
                        });
                    }



                }
            }).catch((err) => {
                console.log(err)
            });
        }
        else {

        }

    }
    const [searchValue, setSearchValue] = useState('')

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
                        value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e.target.value)
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
                        <Th align='center'>Booking Number <ArrowDropDownIcon style={{ color: 'black' }} /> </Th>
                        <Th align='center'>Guest's Name  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Room Type <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Room Number  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        {/* <Th align='center'>Reservation Number  <ArrowDropDownIcon style={{ color: 'black' }} /></Th> */}
                        <Th align='center'>Check in <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Check out <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Payment Status  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Booking Status  <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Action</Th>
                    </Tr>


                    {reservationSummary.length != 0 ?
                        reservationSummary.filter((obj) => (obj.bookingReferenceNumber).toString().includes(searchValue) || (obj.reservation.reservationReferenceNumber).toString().includes(searchValue) || (obj.reservation.guestInformation.firstName).includes(searchValue) || (obj.reservation.guestInformation.lastName).includes(searchValue)).map((item) => (
                            <Tr>
                                <Td align='center'>{item.bookingReferenceNumber}</Td>
                                <Td align='center'>{item.reservation.guestInformation.firstName.toLowerCase()}, {item.reservation.guestInformation.lastName.toLowerCase()}</Td>
                                <Td align='center'>{item.room.roomType.roomType}</Td>
                                <Td align='center'>{item.room.roomNumber}</Td>
                                {/* <Td align='center'>{item.reservation.reservationReferenceNumber}</Td> */}
                                <Td align='center'>{new Date(item.checkInDate).toLocaleDateString()}</Td>
                                <Td align='center'>{new Date(item.checkOutDate).toLocaleDateString()}</Td>
                                <Td align='center'>
                                    {paymentStatusStyle(item.reservation.payment.paymentStatus)}
                                </Td>
                                <Td align='center'>
                                    {bookingStatusStyle(item.bookingStatus)}
                                </Td>
                                <Td align='center'>
                                    <ActionButton
                                        view={() => handleOpenView(item.id)}
                                        edit={() => handleOpenEdit(item.id)}
                                        delete={() => deleteBooking(item.id)}
                                    />
                                </Td>
                            </Tr>
                        ))
                        :
                        ''}


                </TableContainer>
            </ContainerGlobal>


            <Modal
                open={openView}
                onClose={handleCloseView}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Box
                    component='form'
                    // onSubmit={addReservation}
                    style={{
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
                            View Reservation
                        </Title>
                        <CloseIcon
                            onClick={handleCloseView}
                            style={{
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
                        Booking Reference Number
                    </Title>

                    <ContainerGlobalRow
                        style={{ marginTop: '10px' }}>

                        <ContainerGlobalColumn>

                            <ContainerGlobal
                                w='auto'
                                h='auto'
                                direction='column'
                                gap='10px'
                                justify='space-between'
                                align='center'
                                overflow='auto'

                            >


                                <Title
                                    size='26px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='Normal'
                                    weight='bold'
                                    align='left'
                                    margin='15px 0px 20px 0px'
                                >
                                    {reservationSummaryInfo.length != 0 ? reservationSummaryInfo.bookingReferenceNumber : ""}
                                </Title>
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
                        margin='40px 0px 0px 0px'
                        padding='10px 15px'
                        borderRadius='.5rem'
                    >
                        Booking Details
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
                            startDateDisabled={true}
                            endDateDisabled={true}

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
                                        if (e.target.value <= 0) {
                                            setAdults(1);
                                        }
                                        else if (e.target.value >= 5) {
                                            setAdults(4);
                                        }
                                        else {
                                            setAdults(e.target.value);
                                        }
                                    }}
                                    height='3vw'
                                    disabled
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
                                        if (e.target.value <= 0) {
                                            setKids(0);
                                        }
                                        else if (e.target.value >= 3) {
                                            setKids(2);
                                        }
                                        else {
                                            setKids(e.target.value);
                                        }
                                    }}
                                    height='3vw'
                                    disabled
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
                                        disabled

                                    >
                                        {roomTypeDb.length != 0 ? roomTypeDb.map((item) => (
                                            <MenuItem value={item.roomType}
                                                disabled={badgeCount(item.roomType) == null ? true : false}
                                            >
                                                <ContainerGlobal
                                                    margin='0px 15px 0px 0px'>
                                                    {item.roomType}
                                                </ContainerGlobal>
                                            </MenuItem>))
                                            :
                                            ""}

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
                                        disabled
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
                                <TextField value={numberFormat(roomRate)} disabled id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />

                            </ContainerGlobal>




                        </ContainerGlobalColumn>
                        <ContainerGlobalColumn>

                            <ContainerGlobal
                                w='320px'
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
                                >
                                    Extra Mattress <i style={{ fontSize: '16px' }}>({numberFormat(amenities.length != 0 && amenities.filter((obj) => obj.amenityName == 'Extra Mattress').map((item) => item.amenityRate))})</i>:
                                </Title>
                                <TextField
                                    disabled
                                    value={extraMattress}
                                    onChange={(e) => {
                                        if (e.target.value < 0) {
                                            setExtraMattress(0);
                                        }
                                        else {
                                            setExtraMattress(e.target.value);
                                        }
                                    }}
                                    type='number' id="outlined-basic"
                                    label=""
                                    variant="standard"
                                    style={{ width: 50, margin: '5px 0px', fontWeight: 'bold', }}
                                // InputProps={{
                                //     endAdornment: (
                                //         <InputAdornment position="end">
                                //             x
                                //         </InputAdornment>

                                //     ),
                                // }}
                                />

                            </ContainerGlobal>
                            <ContainerGlobal
                                w='320px'
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
                                >
                                    Extra Pillow <i style={{ fontSize: '16px' }}>({numberFormat(amenities.length != 0 && amenities.filter((obj) => obj.amenityName == 'Extra Pillow').map((item) => item.amenityRate))})</i>:
                                </Title>
                                <TextField
                                    value={extraPillow}
                                    onChange={(e) => {
                                        if (e.target.value < 0) {
                                            setExtraPillow(0);
                                        }
                                        else {
                                            setExtraPillow(e.target.value);
                                        }
                                    }}
                                    disabled
                                    type='number'
                                    id="outlined-basic"
                                    label=""
                                    variant="standard"
                                    style={{ width: 50, margin: '5px 0px', fontWeight: 'bold', }}
                                // InputProps={{
                                //     endAdornment: (
                                //         <InputAdornment position="end">
                                //             x
                                //         </InputAdornment>

                                //     ),
                                // }}
                                />
                            </ContainerGlobal>
                            <ContainerGlobal
                                w='320px'
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
                                >
                                    Extra Blanket <i style={{ fontSize: '16px' }}>({numberFormat(amenities.length != 0 && amenities.filter((obj) => obj.amenityName == 'Extra Blanket').map((item) => item.amenityRate))})</i>:
                                </Title>
                                <TextField
                                    value={extraBlanket}
                                    onChange={(e) => {
                                        if (e.target.value < 0) {
                                            setExtraBlanket(0);
                                        }
                                        else {
                                            setExtraBlanket(e.target.value);
                                        }
                                    }}
                                    disabled
                                    type='number'
                                    id="outlined-basic"
                                    label=""
                                    variant="standard"
                                    style={{ width: 50, margin: '5px 0px', fontWeight: 'bold', }}
                                // InputProps={{
                                //     endAdornment: (
                                //         <InputAdornment position="end">
                                //             x
                                //         </InputAdornment>

                                //     ),
                                // }}
                                />
                            </ContainerGlobal>
                            <ContainerGlobal
                                w='320px'
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
                                >
                                    Extra Person <i style={{ fontSize: '16px' }}>({numberFormat(amenities.length != 0 && amenities.filter((obj) => obj.amenityName == 'Extra Person').map((item) => item.amenityRate))})</i>:
                                </Title>
                                <TextField
                                    value={extraPerson}
                                    onChange={(e) => {
                                        if (e.target.value < 0) {
                                            setExtraPerson(0);
                                        }
                                        else {
                                            setExtraPerson(e.target.value);
                                        }
                                    }}
                                    disabled
                                    type='number'
                                    id="outlined-basic"
                                    label=""
                                    variant="standard"
                                    style={{ width: 50, margin: '5px 0px', fontWeight: 'bold', }}
                                // InputProps={{
                                //     endAdornment: (
                                //         <InputAdornment position="end">
                                //             x
                                //         </InputAdornment>

                                //     ),
                                // }}
                                />
                            </ContainerGlobal>
                            <ContainerGlobal
                                w='320px'
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
                                >
                                    Extra Time <i style={{ fontSize: '16px' }}>({numberFormat(amenities.length != 0 && amenities.filter((obj) => obj.amenityName == 'Extra Time(Rate/hour)').map((item) => item.amenityRate))}/hour)</i>:
                                </Title>
                                <TextField
                                    value={extraTime}
                                    onChange={(e) => {
                                        if (e.target.value < 0) {
                                            setExtraTime(0);
                                        }
                                        else {
                                            setExtraTime(e.target.value);
                                        }

                                    }}
                                    disabled
                                    type='number'
                                    id="outlined-basic"
                                    label=""
                                    variant="standard"
                                    style={{ width: 50, margin: '5px 0px', fontWeight: 'bold', }}
                                // InputProps={{
                                //     endAdornment: (
                                //         <InputAdornment position="end">
                                //             x
                                //         </InputAdornment>

                                //     ),
                                // }}
                                />
                            </ContainerGlobal>
                            <ContainerGlobal
                                w='320px'
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
                                <TextField
                                    value={others}
                                    onChange={(e) => {
                                        if (e.target.value < 0) {
                                            setOthers(0);
                                        }
                                        else {
                                            setOthers(e.target.value);
                                        }
                                    }}
                                    type='number'
                                    id="outlined-basic"
                                    label=""
                                    disabled
                                    variant="standard"
                                    style={{ width: 200, margin: '5px 0px', fontWeight: 'bold' }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                ₱
                                            </InputAdornment>

                                        ),
                                    }}
                                />

                            </ContainerGlobal>



                        </ContainerGlobalColumn>


                    </ContainerGlobalRow>
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
                                    Total amount due:
                                </Title>
                                <TextField
                                    value={
                                        amenities.length != 0 &&
                                        numberFormat(
                                            (roomRate * nights) + parseFloat(extraMattress * amenities.filter((obj) => obj.amenityName == "Extra Mattress").map((item) => item.amenityRate))
                                            + parseFloat(extraPillow * amenities.filter((obj) => obj.amenityName == "Extra Pillow").map((item) => item.amenityRate))
                                            + parseFloat(extraBlanket * amenities.filter((obj) => obj.amenityName == "Extra Blanket").map((item) => item.amenityRate))
                                            + parseFloat(extraPerson * amenities.filter((obj) => obj.amenityName == "Extra Person").map((item) => item.amenityRate))
                                            + parseFloat(extraTime * amenities.filter((obj) => obj.amenityName == "Extra Time(Rate/hour)").map((item) => item.amenityRate))
                                            + parseFloat(others)
                                        )
                                    }
                                    disabled
                                    id="outlined-basic"
                                    label=""
                                    variant="standard"
                                    style={{ width: 200, margin: '5px 0px', fontWeight: 'bold' }} />

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
                                <InputContainer>
                                    <TextField
                                        placeholder='Special Instruction'
                                        label="Special Instruction"
                                        variant="outlined"
                                        type='text'
                                        value={specialInstrcution}
                                        onChange={(e) => {
                                            setSpecialInstruction(e.target.value)
                                        }}
                                        multiline
                                        rows={4}
                                        style={{ width: '95%', }}


                                        required />

                                </InputContainer>
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
                                <Title
                                    size='20px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='Normal'
                                    weight='bold'
                                    align='left'
                                    margin='15px 0px 20px 0px'
                                >
                                    {reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.payment.paymentMode.paymentMode : ""}
                                </Title>

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
                                <Title
                                    size='20px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='Normal'
                                    weight='bold'
                                    align='left'
                                    margin='15px 0px 20px 0px'
                                >
                                    {reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.payment.paymentType : ""}
                                </Title>

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

                                <Title
                                    size='20px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='Normal'
                                    weight='bold'
                                    align='left'
                                    margin='15px 0px 20px 0px'
                                >
                                    {reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.payment.discount.discountType : ""}
                                </Title>

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

                                </Title>
                                <FormControlLabel
                                    disabled
                                    control={
                                        <Checkbox
                                            checked={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.payment.discountValid == true ? true : false : ""}
                                            disabled
                                        />
                                    }
                                    label="Discount Verified?" />
                            </ContainerGlobal>

                        </ContainerGlobalColumn>
                        <ContainerGlobalColumn>
                            {reservationInfo.length != 0 ?
                                reservationInfo.payment.paymentType == 'Full Payment' ? <ContainerGlobal
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
                                        value={reservationSummaryInfo.length != 0 ? numberFormat(reservationSummaryInfo.reservationInfo.payment.grandTotal) : ""}
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
                                            value={reservationSummaryInfo.length != 0 ? numberFormat(reservationSummaryInfo.reservation.payment.grandTotal / 2) : ""}
                                            type="text"
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        /> </ContainerGlobal>
                                : ""}


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
                                    value={reservationSummaryInfo.length != 0 ? numberFormat(reservationSummaryInfo.reservation.payment.paymentMade) : ""}
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
                                    value={reservationSummaryInfo.length != 0 ? numberFormat(reservationSummaryInfo.reservation.payment.grandTotal) : ""}
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
                                    value={reservationSummaryInfo.length != 0 ? numberFormat(reservationSummaryInfo.reservation.payment.balance) : ""}
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
                                    placeholder='First Name'
                                    label="First Name"
                                    inputRef={firstNameRef}
                                    variant="outlined"
                                    value={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.guestInformation.firstName.toLocaleLowerCase() : ""}
                                    onChange={(e) => {
                                        setFirstName(e.target.value.toLocaleLowerCase())
                                        if (!letters.test(e.target.value) && e.target.value.length != 0) {
                                            setFirstNameError("Invalid first name. Please type letters only.")
                                        }
                                        else {
                                            setFirstNameError("")
                                        }
                                    }}

                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    style={{ width: '55%', }}
                                    required />

                                <TextField
                                    placeholder='Last Name'
                                    label="Last Name"
                                    variant="outlined"
                                    inputRef={lastNameRef}
                                    value={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.guestInformation.lastName.toLocaleLowerCase() : ""}
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
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    required />
                            </InputContainer>


                            <InputContainer>
                                <TextField
                                    placeholder='Email'
                                    label="Email"
                                    variant="outlined"
                                    type='email'
                                    value={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.guestInformation.user.email.toLocaleLowerCase() : ""}
                                    onChange={(e) => {
                                        setEmail(e.target.value)

                                        setEmailError("")
                                    }}
                                    style={{ width: '55%', }}
                                    inputRef={emailRef}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    required />

                                <TextField
                                    placeholder='Contact Number e.g. 09123456789 or +639123456789'
                                    label="Contact Number"
                                    variant="outlined"
                                    value={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.guestInformation.user.contactNumber : ""}
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
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    required />
                            </InputContainer>


                            <InputContainer>

                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker

                                        views={['day', 'month', 'year']}
                                        label="Birthday"
                                        value={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.guestInformation.birthDate : ""}
                                        onChange={(newValue) => {
                                            setBirthDay(newValue);
                                        }}
                                        renderInput={(params) =>
                                            <TextField
                                                {...params}
                                                variant="standard"
                                                style={{ width: "55%", margin: '5px 0px' }}
                                                helperText={null}
                                                InputProps={{
                                                    readOnly: true,
                                                }}
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
                                        value={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.guestInformation.nationality : ""}
                                        label="Menu"
                                        onChange={(event) => {
                                            setNationality(event.target.value);
                                        }}
                                        InputProps={{
                                            readOnly: true,
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
                                        style={{ textAlign: 'center', color: 'black' }} >Gender</FormLabel>
                                    <RadioGroup
                                        row

                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        defaultValue="male"
                                        value={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.guestInformation.gender : ""}
                                        name="row-radio-buttons-group"
                                        onChange={(e) => {
                                            setGender(e.target.value)
                                        }}
                                        required
                                    >
                                        <FormControlLabel
                                            value="male"
                                            control={<Radio

                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                            />}
                                            label="Male"
                                        />
                                        <FormControlLabel
                                            value="female"
                                            control={<Radio

                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                            />}
                                            label="Female"
                                        />
                                        <FormControlLabel
                                            value="other"
                                            control={<Radio

                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                            />}
                                            label="Other"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </InputContainer>


                            <InputContainer>
                                <TextField
                                    placeholder='Complete Address'
                                    label="Complete Address"
                                    variant="outlined"
                                    type='text'
                                    value={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.guestInformation.address : ""}
                                    onChange={(e) => {
                                        setAddress(e.target.value)
                                    }}
                                    multiline
                                    rows={4}
                                    style={{ width: '95%', }}

                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    required />

                            </InputContainer>




                        </ContainerFormContent>
                    </ContainerGlobalRow>
                    <br></br>
                    <Button variant="contained" color='error' onClick={() => {
                        handleCloseView()
                    }}>Close</Button>
                </Box>
            </Modal>


            <Modal
                open={openEdit}
                onClose={handleCloseEdit}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Box
                    component='form'
                    // onSubmit={addReservation}
                    style={{
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
                            Edit Booking
                        </Title>
                        <CloseIcon
                            onClick={handleCloseEdit}
                            style={{
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
                        Booking Reference Number
                    </Title>

                    <ContainerGlobalRow
                        style={{ marginTop: '10px' }}>

                        <ContainerGlobalColumn>

                            <ContainerGlobal
                                w='auto'
                                h='auto'
                                direction='column'
                                gap='10px'
                                justify='space-between'
                                align='center'
                                overflow='auto'

                            >


                                <Title
                                    size='26px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='Normal'
                                    weight='bold'
                                    align='left'
                                    margin='15px 0px 20px 0px'
                                >
                                    {reservationSummaryInfo.length != 0 ? reservationSummaryInfo.bookingReferenceNumber : ""}
                                </Title>
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
                        margin='40px 0px 0px 0px'
                        padding='10px 15px'
                        borderRadius='.5rem'
                    >
                        Booking Details
                    </Title>

                    <ContainerGlobalRow>
                        <ContainerGlobal
                            w='auto'
                            h='auto'
                            direction='row'
                            gap='20px'
                            justify='space-between'
                            align='center'
                            overflow='auto'
                            margin='20px 0px'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                            // margin='15px 0px 20px 0px'
                            >
                                Booking Status:
                            </Title>

                            <FormControl sx={{ width: 200, margin: '5px 0px' }} size="large" variant="standard">
                                <InputLabel id="demo-select-small" >Reservation Status</InputLabel>
                                <Select
                                    style={{ color: 'black', textAlign: 'left', fontWeight: 'bold' }}
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={reservationStatus}
                                    label="Menu"
                                    onChange={(event) => {
                                        setReservationStatus(event.target.value);
                                    }}
                                >

                                    <MenuItem value='PENDING' disabled={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.reservationStatus == 'RESERVED' ? true : false : false}>
                                        Pending
                                    </MenuItem>
                                    <MenuItem value='RESERVED' disabled={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.reservationStatus == 'PENDING' || reservationSummaryInfo.reservation.reservationStatus == 'UNSETTLED' ? true : false : false}>
                                        Reserved
                                    </MenuItem>
                                    <MenuItem value='CHECKED-IN' disabled={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.reservationStatus == 'PENDING' || reservationSummaryInfo.reservation.reservationStatus == 'UNSETTLED' ? true : false : false}>
                                        Checked-in
                                    </MenuItem>
                                    <MenuItem value='CHECKED-OUT' disabled={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.reservationStatus == 'PENDING' || reservationSummaryInfo.reservation.reservationStatus == 'UNSETTLED' ? true : false : false}>
                                        Checked-out
                                    </MenuItem>
                                    <MenuItem value='NO-SHOW' >
                                        No-Show
                                    </MenuItem>


                                </Select>
                            </FormControl>
                            <Button onClick={() => { updadateBookingStatus() }} size="small" variant='contained' style={reservationSummaryInfo.bookingStatus == reservationStatus ? { display: 'none' } : { display: '' }}>Update</Button>
                        </ContainerGlobal>
                    </ContainerGlobalRow>
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
                            startDateDisabled={false}
                            endDateDisabled={false}

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
                                        if (e.target.value <= 0) {
                                            setAdults(1);
                                        }
                                        else if (e.target.value >= 5) {
                                            setAdults(4);
                                        }
                                        else {
                                            setAdults(e.target.value);
                                        }
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
                                        if (e.target.value <= 0) {
                                            setKids(0);
                                        }
                                        else if (e.target.value >= 3) {
                                            setKids(2);
                                        }
                                        else {
                                            setKids(e.target.value);
                                        }
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
                                            setRoomNumber('')

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
                                <TextField value={numberFormat(roomRate)} disabled id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />

                            </ContainerGlobal>




                        </ContainerGlobalColumn>
                        <ContainerGlobalColumn>

                            <ContainerGlobal
                                w='320px'
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
                                >
                                    Extra Mattress <i style={{ fontSize: '16px' }}>({numberFormat(amenities.length != 0 && amenities.filter((obj) => obj.amenityName == 'Extra Mattress').map((item) => item.amenityRate))})</i>:
                                </Title>
                                <TextField
                                    value={extraMattress}
                                    onChange={(e) => {
                                        if (e.target.value < 0) {
                                            setExtraMattress(0);
                                        }
                                        else {
                                            setExtraMattress(e.target.value);
                                        }
                                    }}
                                    type='number' id="outlined-basic"
                                    label=""
                                    variant="standard"
                                    style={{ width: 50, margin: '5px 0px', fontWeight: 'bold', }}
                                // InputProps={{
                                //     endAdornment: (
                                //         <InputAdornment position="end">
                                //             x
                                //         </InputAdornment>

                                //     ),
                                // }}
                                />

                            </ContainerGlobal>
                            <ContainerGlobal
                                w='320px'
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
                                >
                                    Extra Pillow <i style={{ fontSize: '16px' }}>({numberFormat(amenities.length != 0 && amenities.filter((obj) => obj.amenityName == 'Extra Pillow').map((item) => item.amenityRate))})</i>:
                                </Title>
                                <TextField
                                    value={extraPillow}
                                    onChange={(e) => {
                                        if (e.target.value < 0) {
                                            setExtraPillow(0);
                                        }
                                        else {
                                            setExtraPillow(e.target.value);
                                        }
                                    }}
                                    type='number'
                                    id="outlined-basic"
                                    label=""
                                    variant="standard"
                                    style={{ width: 50, margin: '5px 0px', fontWeight: 'bold', }}
                                // InputProps={{
                                //     endAdornment: (
                                //         <InputAdornment position="end">
                                //             x
                                //         </InputAdornment>

                                //     ),
                                // }}

                                />
                            </ContainerGlobal>
                            <ContainerGlobal
                                w='320px'
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
                                >
                                    Extra Blanket <i style={{ fontSize: '16px' }}>({numberFormat(amenities.length != 0 && amenities.filter((obj) => obj.amenityName == 'Extra Blanket').map((item) => item.amenityRate))})</i>:
                                </Title>
                                <TextField
                                    value={extraBlanket}
                                    onChange={(e) => {
                                        if (e.target.value < 0) {
                                            setExtraBlanket(0);
                                        }
                                        else {
                                            setExtraBlanket(e.target.value);
                                        }
                                    }}
                                    type='number'
                                    id="outlined-basic"
                                    label=""
                                    variant="standard"
                                    style={{ width: 50, margin: '5px 0px', fontWeight: 'bold', }}
                                // InputProps={{
                                //     endAdornment: (
                                //         <InputAdornment position="end">
                                //             x
                                //         </InputAdornment>

                                //     ),
                                // }}
                                />
                            </ContainerGlobal>
                            <ContainerGlobal
                                w='320px'
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
                                >
                                    Extra Person <i style={{ fontSize: '16px' }}>({numberFormat(amenities.length != 0 && amenities.filter((obj) => obj.amenityName == 'Extra Person').map((item) => item.amenityRate))})</i>:
                                </Title>
                                <TextField
                                    value={extraPerson}
                                    onChange={(e) => {
                                        if (e.target.value < 0) {
                                            setExtraPerson(0);
                                        }
                                        else {
                                            setExtraPerson(e.target.value);
                                        }
                                    }}
                                    type='number'
                                    id="outlined-basic"
                                    label=""
                                    variant="standard"
                                    style={{ width: 50, margin: '5px 0px', fontWeight: 'bold', }}
                                // InputProps={{
                                //     endAdornment: (
                                //         <InputAdornment position="end">
                                //             x
                                //         </InputAdornment>

                                //     ),
                                // }}
                                />
                            </ContainerGlobal>
                            <ContainerGlobal
                                w='320px'
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
                                >
                                    Extra Time <i style={{ fontSize: '16px' }}>({numberFormat(amenities.length != 0 && amenities.filter((obj) => obj.amenityName == 'Extra Time(Rate/hour)').map((item) => item.amenityRate))}/hour)</i>:
                                </Title>
                                <TextField
                                    value={extraTime}
                                    onChange={(e) => {
                                        if (e.target.value < 0) {
                                            setExtraTime(0);
                                        }
                                        else {
                                            setExtraTime(e.target.value);
                                        }

                                    }}
                                    type='number'
                                    id="outlined-basic"
                                    label=""
                                    variant="standard"
                                    style={{ width: 50, margin: '5px 0px', fontWeight: 'bold', }}
                                // InputProps={{
                                //     endAdornment: (
                                //         <InputAdornment position="end">
                                //             x
                                //         </InputAdornment>

                                //     ),
                                // }}
                                />
                            </ContainerGlobal>
                            <ContainerGlobal
                                w='320px'
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
                                <TextField
                                    value={others}
                                    onChange={(e) => {
                                        if (e.target.value < 0) {
                                            setOthers(0);
                                        }
                                        else {
                                            setOthers(e.target.value);
                                        }
                                    }}
                                    type='number'
                                    id="outlined-basic"
                                    label=""
                                    variant="standard"
                                    style={{ width: 200, margin: '5px 0px', fontWeight: 'bold' }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                ₱
                                            </InputAdornment>

                                        ),
                                    }}
                                />

                            </ContainerGlobal>



                        </ContainerGlobalColumn>


                    </ContainerGlobalRow>
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
                                    Total amount due:
                                </Title>
                                <TextField
                                    value={
                                        amenities.length != 0 &&
                                        numberFormat(
                                            (roomRate * nights) + parseFloat(extraMattress * amenities.filter((obj) => obj.amenityName == "Extra Mattress").map((item) => item.amenityRate))
                                            + parseFloat(extraPillow * amenities.filter((obj) => obj.amenityName == "Extra Pillow").map((item) => item.amenityRate))
                                            + parseFloat(extraBlanket * amenities.filter((obj) => obj.amenityName == "Extra Blanket").map((item) => item.amenityRate))
                                            + parseFloat(extraPerson * amenities.filter((obj) => obj.amenityName == "Extra Person").map((item) => item.amenityRate))
                                            + parseFloat(extraTime * amenities.filter((obj) => obj.amenityName == "Extra Time(Rate/hour)").map((item) => item.amenityRate))
                                            + parseFloat(others)
                                        )
                                    }
                                    disabled
                                    id="outlined-basic"
                                    label=""
                                    variant="standard"
                                    style={{ width: 200, margin: '5px 0px', fontWeight: 'bold' }} />

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
                                <InputContainer>
                                    <TextField
                                        placeholder='Special Instruction'
                                        label="Special Instruction"
                                        variant="outlined"
                                        type='text'
                                        value={specialInstrcution}
                                        onChange={(e) => {
                                            setSpecialInstruction(e.target.value)
                                        }}
                                        multiline
                                        rows={4}
                                        style={{ width: '95%', }}


                                        required />

                                </InputContainer>
                            </ContainerGlobal>

                            <ContainerGlobal
                                margin='20px 0px 0px 0px'
                                direction='column'
                                align='center'
                                justify='center'
                                gap='20px'>
                                <ContainerGlobal
                                    align='center'
                                    justify='center'
                                    gap='20px'>
                                    <Button style={{ width: '100px' }} color='success' variant="contained" onClick={() => { saveReservationSummary() }} disabled={roomType != '' && roomNumber != '' && roomRate != 0 ? false : true} >Save</Button>

                                </ContainerGlobal>

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
                                <Title
                                    size='20px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='Normal'
                                    weight='bold'
                                    align='left'
                                    margin='15px 0px 20px 0px'
                                >
                                    {reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.payment.paymentMode.paymentMode : ""}
                                </Title>

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
                                <Title
                                    size='20px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='Normal'
                                    weight='bold'
                                    align='left'
                                    margin='15px 0px 20px 0px'
                                >
                                    {reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.payment.paymentType : ""}
                                </Title>

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

                                <Title
                                    size='20px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='Normal'
                                    weight='bold'
                                    align='left'
                                    margin='15px 0px 20px 0px'
                                >
                                    {reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.payment.discount.discountType : ""}
                                </Title>

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

                                </Title>
                                <FormControlLabel
                                    disabled
                                    control={
                                        <Checkbox
                                            checked={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.payment.discountValid == true ? true : false : ""}
                                            disabled
                                        />
                                    }
                                    label="Discount Verified?" />
                            </ContainerGlobal>

                        </ContainerGlobalColumn>
                        <ContainerGlobalColumn>
                            {reservationInfo.length != 0 ?
                                reservationInfo.payment.paymentType == 'Full Payment' ? <ContainerGlobal
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
                                        value={reservationSummaryInfo.length != 0 ? numberFormat(reservationSummaryInfo.reservationInfo.payment.grandTotal) : ""}
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
                                            value={reservationSummaryInfo.length != 0 ? numberFormat(reservationSummaryInfo.reservation.payment.grandTotal / 2) : ""}
                                            type="text"
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        /> </ContainerGlobal>
                                : ""}


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
                                    value={reservationSummaryInfo.length != 0 ? numberFormat(reservationSummaryInfo.reservation.payment.paymentMade) : ""}
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
                                    value={reservationSummaryInfo.length != 0 ? numberFormat(reservationSummaryInfo.reservation.payment.grandTotal) : ""}
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
                                    value={reservationSummaryInfo.length != 0 ? numberFormat(reservationSummaryInfo.reservation.payment.balance) : ""}
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
                                    placeholder='First Name'
                                    label="First Name"
                                    inputRef={firstNameRef}
                                    variant="outlined"
                                    value={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.guestInformation.firstName.toLocaleLowerCase() : ""}
                                    onChange={(e) => {
                                        setFirstName(e.target.value.toLocaleLowerCase())
                                        if (!letters.test(e.target.value) && e.target.value.length != 0) {
                                            setFirstNameError("Invalid first name. Please type letters only.")
                                        }
                                        else {
                                            setFirstNameError("")
                                        }
                                    }}

                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    style={{ width: '55%', }}
                                    required />

                                <TextField
                                    placeholder='Last Name'
                                    label="Last Name"
                                    variant="outlined"
                                    inputRef={lastNameRef}
                                    value={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.guestInformation.lastName.toLocaleLowerCase() : ""}
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
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    required />
                            </InputContainer>


                            <InputContainer>
                                <TextField
                                    placeholder='Email'
                                    label="Email"
                                    variant="outlined"
                                    type='email'
                                    value={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.guestInformation.user.email.toLocaleLowerCase() : ""}
                                    onChange={(e) => {
                                        setEmail(e.target.value)

                                        setEmailError("")
                                    }}
                                    style={{ width: '55%', }}
                                    inputRef={emailRef}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    required />

                                <TextField
                                    placeholder='Contact Number e.g. 09123456789 or +639123456789'
                                    label="Contact Number"
                                    variant="outlined"
                                    value={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.guestInformation.user.contactNumber : ""}
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
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    required />
                            </InputContainer>


                            <InputContainer>

                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker

                                        views={['day', 'month', 'year']}
                                        label="Birthday"
                                        value={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.guestInformation.birthDate : ""}
                                        onChange={(newValue) => {
                                            setBirthDay(newValue);
                                        }}
                                        renderInput={(params) =>
                                            <TextField
                                                {...params}
                                                variant="standard"
                                                style={{ width: "55%", margin: '5px 0px' }}
                                                helperText={null}
                                                InputProps={{
                                                    readOnly: true,
                                                }}
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
                                        value={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.guestInformation.nationality : ""}
                                        label="Menu"
                                        onChange={(event) => {
                                            setNationality(event.target.value);
                                        }}
                                        InputProps={{
                                            readOnly: true,
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
                                        style={{ textAlign: 'center', color: 'black' }} >Gender</FormLabel>
                                    <RadioGroup
                                        row

                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        defaultValue="male"
                                        value={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.guestInformation.gender : ""}
                                        name="row-radio-buttons-group"
                                        onChange={(e) => {
                                            setGender(e.target.value)
                                        }}
                                        required
                                    >
                                        <FormControlLabel
                                            value="male"
                                            control={<Radio

                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                            />}
                                            label="Male"
                                        />
                                        <FormControlLabel
                                            value="female"
                                            control={<Radio

                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                            />}
                                            label="Female"
                                        />
                                        <FormControlLabel
                                            value="other"
                                            control={<Radio

                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                            />}
                                            label="Other"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </InputContainer>


                            <InputContainer>
                                <TextField
                                    placeholder='Complete Address'
                                    label="Complete Address"
                                    variant="outlined"
                                    type='text'
                                    value={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.guestInformation.address : ""}
                                    onChange={(e) => {
                                        setAddress(e.target.value)
                                    }}
                                    multiline
                                    rows={4}
                                    style={{ width: '95%', }}

                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    required />

                            </InputContainer>




                        </ContainerFormContent>
                    </ContainerGlobalRow>
                    <br></br>
                    <Button variant="contained" color='error' onClick={() => {
                        handleCloseEdit()
                    }}>Close</Button>
                </Box>
            </Modal>
        </Container>
    )
}

export default BookingsContainer