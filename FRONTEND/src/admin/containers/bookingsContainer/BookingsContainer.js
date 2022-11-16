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
import { Badge, FormControlLabel, Radio, RadioGroup, TextareaAutosize, FormControl, Modal, Box, Checkbox, FormLabel, Pagination } from '@mui/material'
import { nationalities } from '../../../nationalities'
import { Global } from '@emotion/react'
import axios from 'axios'
import { FlexboxContainer } from '../../../client/containers/bookingCartPage/Styles'

import { apiKey } from '../../../apiKey'
import moment from 'moment'
import { ContainerFormContent, InputContainer } from '../../../client/containers/informationForm/style'
import DateRangePicker from '../../../client/components/datePicker/DateRangePicker'
import { LabelDiv, Persons, TitleCalendarContainer } from '../../../client/containers/bookingPage/Styles'

import logo from '../../../client/images/logo.png'
import { CircularProgress } from '@mui/material';
import { CheckCircleOutline, Close, HighlightOffSharp } from '@mui/icons-material';

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

    const [startDate, setStartDate] = useState(new Date(new Date().setHours(0, 0, 0, 0)));
    const [endDate, setEndDate] = useState(new Date(new Date(new Date().getTime() + 86400000).setHours(0, 0, 0, 0)));
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
            setReservarionSummary(result.data.filter((obj) => obj.reservation.reservationStatus == 'RESERVED'))
        }).catch((err) => {
            console.log(err)

        });
        axios.get(apiKey + 'api/getAllRoomType').then((result) => {
            setRoomTypeDb(result.data.filter((obj) => obj.status == true))
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
        // if () {
        //     alert('ey')
        //     // setEndDate(new Date(Date.now(startDate)).setHours(0, 0, 0, 0) )
        // }
        // console.log("ugh: ", new Date(startDate).getTime() + 86400000)
        if (Date.parse(startDate) >= Date.parse(endDate)) {
            // setEndDate(new Date(startDate).getTime() + 86400000)
            setEndDate(new Date(Date.parse(startDate) + 86400000))
        }


        // if(startDate )
    }, [startDate, endDate])

    const updadateBookingStatus = () => {
        handleOpenIsLoading()
        axios.patch(apiKey + 'api/updateReservationSummary/' + reservationSummaryInfo.id, {
            bookingStatus: reservationStatus,
        }).then((result) => {
            console.log(result.data)
            // window.location.reload()
            handleCloseIsLoading(2, '')
        }).catch((err) => {
            handleCloseIsLoading(3)
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

    const [roomPage, setRoomPage] = useState(1)

    useLayoutEffect(() => {

        axios.get(apiKey + 'api/getAllRoom').then((result) => {
            setAvailableRooms(result.data.filter((obj) => (!notAvailableRoom.includes(obj.id) && obj.roomStatus != 'Maintenance' && obj.roomType.maxAdultOccupancy >= adults && obj.roomType.maxKidsOccupancy >= kids && obj.status != false)))

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
                    handleOpenIsLoading();
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
                                            axios.patch(apiKey + 'api/updateGrandTotal/' + reservationSummaryInfo.reservation.payment.id, {
                                                paymentMade: reservationSummaryInfo.reservation.payment.paymentMade,
                                            }).then((result) => {
                                                console.log(result.data)
                                            }).catch((err) => {
                                                handleCloseIsLoading(3)
                                                console.log(err)

                                            })
                                        }).catch((err) => {
                                            handleCloseIsLoading(3)
                                            console.log(err)

                                        });
                                    }
                                    else if (result.data[index].amenity.amenityName == "Extra Blanket") {
                                        axios.patch(apiKey + 'api/updateOrderedAmenities/' + result.data[index].id, {
                                            quantity: extraBlanket,
                                        }).then((result) => {
                                            console.log(result.data)
                                            axios.patch(apiKey + 'api/updateGrandTotal/' + reservationSummaryInfo.reservation.payment.id, {
                                                paymentMade: reservationSummaryInfo.reservation.payment.paymentMade,
                                            }).then((result) => {
                                                console.log(result.data)
                                            }).catch((err) => {
                                                handleCloseIsLoading(3)
                                                console.log(err)

                                            })
                                        }).catch((err) => {
                                            handleCloseIsLoading(3)
                                            console.log(err)

                                        });
                                    }
                                    else if (result.data[index].amenity.amenityName == "Extra Pillow") {
                                        axios.patch(apiKey + 'api/updateOrderedAmenities/' + result.data[index].id, {
                                            quantity: extraPillow,
                                        }).then((result) => {
                                            console.log(result.data)
                                            axios.patch(apiKey + 'api/updateGrandTotal/' + reservationSummaryInfo.reservation.payment.id, {
                                                paymentMade: reservationSummaryInfo.reservation.payment.paymentMade,
                                            }).then((result) => {
                                                console.log(result.data)
                                            }).catch((err) => {
                                                handleCloseIsLoading(3)
                                                console.log(err)

                                            })
                                        }).catch((err) => {
                                            handleCloseIsLoading(3)
                                            console.log(err)

                                        });
                                    }
                                    else if (result.data[index].amenity.amenityName == "Extra Time(Rate/hour)") {
                                        axios.patch(apiKey + 'api/updateOrderedAmenities/' + result.data[index].id, {
                                            quantity: extraTime,
                                        }).then((result) => {
                                            console.log(result.data)
                                            axios.patch(apiKey + 'api/updateGrandTotal/' + reservationSummaryInfo.reservation.payment.id, {
                                                paymentMade: reservationSummaryInfo.reservation.payment.paymentMade,
                                            }).then((result) => {
                                                console.log(result.data)
                                            }).catch((err) => {
                                                handleCloseIsLoading(3)
                                                console.log(err)

                                            })
                                        }).catch((err) => {
                                            handleCloseIsLoading(3)
                                            console.log(err)

                                        });
                                    }
                                    else if (result.data[index].amenity.amenityName == "Extra Person") {
                                        axios.patch(apiKey + 'api/updateOrderedAmenities/' + result.data[index].id, {
                                            quantity: extraPerson,
                                        }).then((result) => {
                                            console.log(result.data)
                                            axios.patch(apiKey + 'api/updateGrandTotal/' + reservationSummaryInfo.reservation.payment.id, {
                                                paymentMade: reservationSummaryInfo.reservation.payment.paymentMade,
                                            }).then((result) => {
                                                console.log(result.data)
                                            }).catch((err) => {
                                                handleCloseIsLoading(3)
                                                console.log(err)

                                            })
                                        }).catch((err) => {
                                            handleCloseIsLoading(3)
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
                                        // window.location.reload()
                                        handleCloseIsLoading(2, '')
                                    }).catch((err) => {
                                        handleCloseIsLoading(3)
                                        console.log(err)

                                    })
                                }



                            }
                        }).catch((err) => {
                            handleCloseIsLoading(3)
                            console.log(err)
                        });

                    }).catch((err) => {
                        handleCloseIsLoading(3)
                        console.log(err)
                    });
                }

            }
        }).catch((err) => {
            handleCloseIsLoading(3)
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
                    receipt declined
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
                bg='rgb(255,165,0, .2)'
                direction='row'
                padding='2px 0px'
                justify='center'
                align='center'
                border='2px solid rgb(255,165,0)'
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
        else if (value == 'CANCELLED') {
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



    const [search, setSearch] = useState('')
    const [endDateFilter, setEndDateFilter] = useState(null)
    const [startDateFilter, setStartDateFilter] = useState(null)
    const [categoryMenu, setCategoryMenu] = useState(null)

    useEffect(() => {
        if (startDateFilter != null && endDateFilter != null) {
            if (Date.parse(startDateFilter) > Date.parse(endDateFilter)) {
                // setEndDate(new Date(startDate).getTime() + 86400000)
                setEndDateFilter(new Date(Date.parse(startDateFilter) + 86400000))
            }
        }
    }, [startDateFilter, endDateFilter])



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
        <Container
            style={{
                height: 'auto'
            }}
        >


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
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
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
                            value={startDateFilter}
                            onChange={(newValue) => {
                                setStartDateFilter(newValue);
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
                            minDate={startDateFilter}
                            value={endDateFilter}
                            onChange={(newValue) => {
                                setEndDateFilter(newValue);
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
                        <InputLabel id="demo-select-small" >Category</InputLabel>
                        <Select
                            style={{ color: 'black', fontWeight: 'bold' }}
                            labelId="roomType-select-small"
                            id="demo-select-small"
                            value={categoryMenu}
                            label="Menu"
                            onChange={(event) => {
                                setCategoryMenu(event.target.value);
                            }}

                        >

                            <MenuItem value={'Check-in'} selected>Check-in</MenuItem>
                            <MenuItem value={'Check-out'}>Check-out</MenuItem>
                        </Select>
                    </FormControl>

                    {startDateFilter != null || endDateFilter != null || categoryMenu != null ?
                        <IconButton onClick={() => {
                            setStartDateFilter(null)
                            setEndDateFilter(null)
                            setCategoryMenu(null)
                            setSearch('')
                        }}>
                            <CloseIcon />
                        </IconButton>
                        : ''}

                </ContainerGlobal>
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
                        <Th align='center'>Booking Number </Th>
                        <Th align='center'>Guest's Name </Th>
                        <Th align='center'>Reservation Number</Th>
                        {/* <Th align='center'>Room Type</Th> */}
                        <Th align='center'>Room Number </Th>
                        {/* <Th align='center'>Reservation Number </Th> */}
                        <Th align='center'>Check in</Th>
                        <Th align='center'>Check out</Th>
                        <Th align='center'>Payment Status </Th>
                        <Th align='center'>Booking Status </Th>
                        <Th align='center'>Action</Th>
                    </Tr>


                    {reservationSummary.length != 0 ?
                        reservationSummary
                            .filter((item) => {


                                if (startDateFilter != null && endDateFilter != null && categoryMenu != null) {
                                    if (categoryMenu == 'Check-in') {
                                        let filterDates = getDates(startDateFilter, endDateFilter);
                                        if (filterDates.includes(moment(item.checkInDate).format('YYYY-MM-DD'))) {
                                            return item
                                        }
                                    }
                                    else if (categoryMenu == 'Check-out') {
                                        let filterDates = getDates(startDateFilter, endDateFilter);
                                        if (filterDates.includes(moment(item.checkOutDate).format('YYYY-MM-DD'))) {
                                            return item
                                        }
                                    }
                                }
                                else {
                                    return item
                                }
                            })
                            .filter((item) => {
                                if (search != '') {
                                    if (
                                        new Date(item.checkInDate).toLocaleDateString().includes(search)
                                        || new Date(item.checkOutDate).toLocaleDateString().includes(search)
                                        || item.reservation.reservationReferenceNumber.toString().includes(search)
                                        || item.bookingReferenceNumber.toString().includes(search)
                                        || (item.reservation.guestInformation.firstName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.reservation.guestInformation.firstName.toLowerCase() + ' ' + item.reservation.guestInformation.lastName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.reservation.guestInformation.lastName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.bookingStatus.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.reservation.payment.paymentStatus.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.roomNumber).toString().includes(search.toLowerCase())
                                    ) {
                                        return item;
                                    }
                                    else if ('cancelled'.includes(search.toLowerCase())) {
                                        return item.reservationStatus == 'UNSETTLED'
                                    }
                                }

                                else {
                                    return item
                                }
                            })
                            .filter((obj) => (obj.bookingReferenceNumber).toString().includes(searchValue) || (obj.reservation.reservationReferenceNumber).toString().includes(searchValue) || (obj.reservation.guestInformation.firstName).includes(searchValue) || (obj.reservation.guestInformation.lastName).includes(searchValue))
                            .sort((a, b) => b.bookingReferenceNumber - a.bookingReferenceNumber)
                            .slice((roomPage - 1) * 10, roomPage * 10)
                            .map((item) => (
                                <Tr>
                                    <Td align='center'>{item.bookingReferenceNumber}</Td>
                                    <Td align='center' style={{textTransform: 'capitalize'}}>{item.reservation.guestInformation.firstName.toLowerCase()} {item.reservation.guestInformation.lastName.toLowerCase()}</Td>
                                    <Td align='center'>{item.reservation.reservationReferenceNumber}</Td>

                                    {/* <Td align='center'>{item.room.roomType.roomType}</Td> */}
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
                                            dontShowDelete=''
                                        />
                                    </Td>
                                </Tr>
                            ))
                        :
                        <Tr>
                            <Td align='center' colSpan={9}>Booking is empty</Td>
                        </Tr>
                    }


                </TableContainer>

                <ContainerGlobal
                    w='100%'
                    justify='center'>
                    <Pagination
                        page={roomPage}
                        count={reservationSummary.length != 0 && Math.ceil(reservationSummary.filter((item) => {


                            if (startDateFilter != null && endDateFilter != null && categoryMenu != null) {
                                if (categoryMenu == 'Check-in') {
                                    let filterDates = getDates(startDateFilter, endDateFilter);
                                    if (filterDates.includes(moment(item.checkInDate).format('YYYY-MM-DD'))) {
                                        return item
                                    }
                                }
                                else if (categoryMenu == 'Check-out') {
                                    let filterDates = getDates(startDateFilter, endDateFilter);
                                    if (filterDates.includes(moment(item.checkOutDate).format('YYYY-MM-DD'))) {
                                        return item
                                    }
                                }
                            }
                            else {
                                return item
                            }
                        })
                            .filter((item) => {
                                if (search != '') {
                                    if (
                                        new Date(item.checkInDate).toLocaleDateString().includes(search)
                                        || new Date(item.checkOutDate).toLocaleDateString().includes(search)
                                        || item.reservation.reservationReferenceNumber.toString().includes(search)
                                        || item.bookingReferenceNumber.toString().includes(search)
                                        || (item.reservation.guestInformation.firstName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.reservation.guestInformation.firstName.toLowerCase() + ' ' + item.reservation.guestInformation.lastName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.reservation.guestInformation.lastName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.bookingStatus.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.reservation.payment.paymentStatus.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.roomNumber).toString().includes(search.toLowerCase())
                                    ) {
                                        return item;
                                    }
                                    else if ('cancelled'.includes(search.toLowerCase())) {
                                        return item.reservationStatus == 'UNSETTLED'
                                    }
                                }

                                else {
                                    return item
                                }
                            })
                            .filter((obj) => (obj.bookingReferenceNumber).toString().includes(searchValue) || (obj.reservation.reservationReferenceNumber).toString().includes(searchValue) || (obj.reservation.guestInformation.firstName).includes(searchValue) || (obj.reservation.guestInformation.lastName).includes(searchValue)).length / 10)}
                        onChange={(e, value) => {

                            setRoomPage(value)
                        }}
                    />
                </ContainerGlobal>
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
                            View Booking
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
                                <Title
                                    size='20px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='Normal'
                                    weight='bold'
                                    align='right'
                                    margin='15px 0px 20px 0px'
                                >
                                    {reservationSummaryInfo.length != 0 ? reservationSummaryInfo.roomType : ''}
                                </Title>
                                {/* <FormControl sx={{ width: 200, margin: '5px 0px' }} size="large" variant="standard">
                                    <InputLabel id="demo-select-small" >Room Type</InputLabel>
                                    <Select
                                        style={{ color: 'black', textAlign: 'left' }}
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.roomType : ''}
                                        label="Menu"
                                        disabled

                                    >
                                        

                                    </Select>
                                </FormControl> */}
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
                                <Title
                                    size='20px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='Normal'
                                    weight='bold'
                                    align='right'
                                    margin='15px 0px 20px 0px'
                                >
                                    {reservationSummaryInfo.length != 0 ? reservationSummaryInfo.roomNumber : ''}
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
                                    Room rate per night:
                                </Title>
                                <Title
                                    size='20px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='Normal'
                                    weight='bold'
                                    align='right'
                                    margin='15px 0px 20px 0px'
                                >
                                    {reservationSummaryInfo.length != 0 ? numberFormat(reservationSummaryInfo.roomRate) : ''}

                                </Title>

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
                                        setOthers(e.target.value);
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
                                overflow='visible'

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
                                        style={{ width: '95%', overflow: 'visible' }}

                                        InputProps={{
                                            readOnly: true,
                                        }}
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
                                    align='right'
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
                                    align='right'
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
                                    align='right'
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
                                    disabled />

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
                                    disabled />
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
                                    disabled />

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
                                    disabled />
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
                                        disabled
                                        renderInput={(params) =>
                                            <TextField
                                                {...params}
                                                variant="standard"
                                                style={{ width: "55%", margin: '5px 0px' }}
                                                helperText={null}
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                                disabled
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
                                        disabled

                                    >

                                        {nationalities.map(({ nationality }, index) => (
                                            <MenuItem value={nationality} disabled>{nationality}</MenuItem>
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
                                        disabled
                                    >
                                        <FormControlLabel
                                            value="male"
                                            control={<Radio

                                                disabled
                                            />}
                                            label="Male"
                                        />
                                        <FormControlLabel
                                            value="female"
                                            control={<Radio

                                                disabled
                                            />}
                                            label="Female"
                                        />
                                        <FormControlLabel
                                            value="other"
                                            control={<Radio

                                                disabled
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


                                    disabled />

                            </InputContainer>


                            <InputContainer>
                                <TextField

                                    placeholder='Username'
                                    label="Username"
                                    variant="outlined"
                                    inputRef={userNameRef}
                                    value={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.guestInformation.user.userName : ""}
                                    

                                    disabled
                                    style={{ width: '55%', }} />

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
                                <InputLabel id="demo-select-small" >Booking Status</InputLabel>
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
                                    <MenuItem value='CHECKED-IN' disabled={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.reservationStatus == 'PENDING' || reservationSummaryInfo.reservation.reservationStatus == 'UNSETTLED' || parseInt(reservationSummaryInfo.reservation.payment.balance) != 0 ? true : false : false}>
                                        Checked-in
                                    </MenuItem>
                                    <MenuItem value='CHECKED-OUT' disabled={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.payment.paymentStatus != 'fully paid' || reservationSummaryInfo.bookingStatus != 'CHECKED-IN' ? true : false : false}>
                                        Checked-out
                                    </MenuItem>
                                    <MenuItem value='NO-SHOW' disabled={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.bookingStatus != 'PENDING' && reservationSummaryInfo.bookingStatus != 'RESERVED' ? true : false : false}>
                                        No-Show
                                    </MenuItem>
                                    <MenuItem value='CANCELLED' disabled={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.bookingStatus != 'PENDING' && reservationSummaryInfo.bookingStatus != 'CANCELLED' ? true : false : false}>
                                        Cancelled
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
                                                <Badge badgeContent={badgeCount(item.roomType)} color="success" style={{ marginTop: 10, zIndex: 0 }} title='40 Available rooms'>
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

                                        setOthers(e.target.value);
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
                                overflow='visible'

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
                                    align='right'
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
                                    align='right'
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
                                    align='right'
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


                                    style={{ width: '55%', }}
                                    disabled />

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
                                    disabled />
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
                                    disabled />

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
                                    disabled />
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
                                        disabled
                                        renderInput={(params) =>
                                            <TextField
                                                {...params}
                                                variant="standard"
                                                style={{ width: "55%", margin: '5px 0px' }}
                                                helperText={null}
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                                disabled
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
                                        disabled
                                    >

                                        {nationalities.map(({ nationality }, index) => (
                                            <MenuItem value={nationality} disabled>{nationality}</MenuItem>
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
                                        disabled
                                    >
                                        <FormControlLabel
                                            value="male"
                                            control={<Radio

                                                disabled
                                            />}
                                            label="Male"
                                        />
                                        <FormControlLabel
                                            value="female"
                                            control={<Radio

                                                disabled
                                            />}
                                            label="Female"
                                        />
                                        <FormControlLabel
                                            value="other"
                                            control={<Radio

                                                disabled
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
                                    disabled
                                />

                            </InputContainer>

                            <InputContainer>
                                <TextField

                                    placeholder='Username'
                                    label="Username"
                                    variant="outlined"
                                    inputRef={userNameRef}
                                    value={reservationSummaryInfo.length != 0 ? reservationSummaryInfo.reservation.guestInformation.user.userName : ""}
                                    

                                    disabled
                                    style={{ width: '55%', }} />

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