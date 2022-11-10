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
import { Badge, FormControlLabel, Radio, RadioGroup, TextareaAutosize, FormControl, Modal, Box, Checkbox, Link, FormLabel, Pagination } from '@mui/material'
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
import EditIcon from '@mui/icons-material/Edit';
import { apiKey } from '../../../apiKey'


import logo from '../../../client/images/logo.png'
import { CircularProgress } from '@mui/material';
import { CheckCircleOutline, Close, HighlightOffSharp } from '@mui/icons-material';

export const ReservationContainer = () => {
    let passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\| ])[A-Za-z\d -._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]{8,}/;
    let letters = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    let phoneNumberValidation = /^(09|\+639)\d{9}$/;
    let userNameValidation = /^\S*$/;

    const [agreement, setAgreement] = useState(false)

    const [nationality, setNationality] = useState('Filipino');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthDay] = useState(new Date(Date.parse(new Date()) - 568025136000));
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


    const [value, setValue] = useState(Date.now());
    const [outValue, setOutValue] = useState(Date.now() + 86400000);
    // const nights = (outValue - value) / 86400000;
    // console.log('nights' + nights)
    const color = "#c44242";
    const [age, setAge] = React.useState('');
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


    const [reservationSummary, setReservationSummary] = useState([]);
    const [availedRoom, setAvailedRoom] = useState([]);

    const [roomRate, setRoomRate] = useState(0);

    const [notAvailableRoom, setNotAvailableRoom] = useState([]);


    const [availableRooms, setAvailableRooms] = useState([]);
    const [reservationStatus, setReservationStatus] = useState('');
    const [reservationStatusConst, setReservationStatusConst] = useState('');

    const [roomTypeDb, setRoomTypeDb] = useState([]);
    const [openCreate, setOpenCreate] = useState(false);
    const [openView, setOpenView] = useState(false);
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


    //Close events
    const handleCloseCreate = () => {
        setOpenCreate(false)
        setAvailedRoom([])
    }

    const handleCloseView = () => {
        setOpenView(false)
        setReservationInfo([])
        setReservationSummaryInfo([])

    }

    const handleCloseEdit = () => {
        setOpenEdit(false)
        setGrandTotalValue('')
        setPaymentMadeValue('')
        setRemainingBalanceValue('')
        setPaymentMethod('')
        setDiscount('')
        setPaymentType('')
        setFirstName('')
        setLastName('')
        setEmail('')
        setContactNumber('')
        setBirthDay(new Date(Date.parse(new Date()) - 568025136000))
        setNationality('Filipino')
        setGender('')
        setAddress('')
        setUserName('')
        setReservationStatus('')
        setEditReservationId('')


    }


    //open Events
    const handleOpenCreate = () => {
        setOpenCreate(true)
    }

    const handleOpenView = (value) => {
        setOpenView(true)
        axios.get(apiKey + 'api/getReservation/' + value).then((result) => {
            setReservationInfo(result.data)
        }).catch((err) => {

        });

        axios.get(apiKey + 'api/getAllReservationSummary').then((result) => {
            setReservationSummaryInfo([])
            for (let index = 0; index < result.data.length; index++) {
                if (result.data[index].reservation_id == value) {
                    setReservationSummaryInfo((oldData) => [...oldData, result.data[index]])
                }

            }
        }).catch((err) => {

        });

    }

    const [editReservationInfo, setEditReservationInfo] = useState([]);


    const updadateReservationStatus = () => {
        handleOpenIsLoading()
        axios.patch(apiKey + 'api/updateReservation/' + editReservationInfo.id, {
            reservationStatus: reservationStatus,
        }).then((result) => {
            console.log(reservationStatus)
            if (reservationStatus == 'UNSETTLED') {
                axios.get(apiKey + 'api/getReservation/' + editReservationInfo.id).then((result) => {
                    axios.post(apiKey + 'api/sendReservationEmail', {
                        email: result.data.guestInformation.user.email,
                        birthDay: result.data.guestInformation.birthDate,
                        nationality: result.data.guestInformation.nationality,
                        emailAddress: result.data.guestInformation.user.email,
                        address: result.data.guestInformation.address,
                        contactNumber: result.data.guestInformation.user.contactNumber,
                        firstName: result.data.guestInformation.firstName,
                        lastName: result.data.guestInformation.lastName,
                        reservationStatus: result.data.reservationStatus,
                        accountName: result.data.payment.paymentMode.accountName,
                        accountNumber: result.data.payment.paymentMode.accountNumber,
                        paymentType: result.data.payment.paymentType,
                        paymentMode: result.data.payment.paymentMode.paymentMode,
                        reservationNumber: result.data.reservationReferenceNumber,
                        reservationDate: new Date(result.data.reservationDate).toLocaleDateString() + " " + new Date(result.data.reservationDate).toLocaleTimeString(),
                        reservationId: result.data.id,
                        role: result.data.guestInformation.user.role,
                        grandTotal: result.data.payment.grandTotal,
                        discountType: result.data.payment.discount.discountType,
                        expirationDate: new Date(new Date(result.data.reservationDate).getTime() + 60 * 60 * 24 * 1000).toLocaleDateString() + " " + new Date(result.data.reservationDate).toLocaleTimeString(),
                        amountPaid: result.data.payment.paymentMade,
                        // payment: ,
                        // reservedRooms: ,
                    }).then((result) => {
                        console.log(result)
                        axios.get(apiKey + 'api/getAllReservationSummary').then((result) => {
                            result.data.filter((item) => item.reservation.id == editReservationInfo.id).map((item, index, array) => {
                                axios.patch(apiKey + 'api/updateReservationSummary/' + item.id, {
                                    bookingStatus: 'CANCELLED'
                                }).then((result) => {
                                    if (index == array.length - 1) {
                                        // window.location.reload();
                                        handleCloseIsLoading(2, '')
                                    }
                                }).catch((err) => {
                                    handleCloseIsLoading(3)
                                    console.log(err)

                                });
                            })
                        }).catch((err) => {
                            handleCloseIsLoading(3)
                            console.log(err)

                        });

                    }).catch((err) => {
                        handleCloseIsLoading(3)
                        console.log(err)

                    });
                }).catch((err) => {
                    handleCloseIsLoading(3)
                    console.log(err)

                });
            }
            else if (reservationStatus == 'RESERVED') {
                axios.get(apiKey + 'api/getReservation/' + editReservationInfo.id).then((result) => {
                    axios.post(apiKey + 'api/sendReservationEmail', {
                        email: result.data.guestInformation.user.email,
                        birthDay: result.data.guestInformation.birthDate,
                        nationality: result.data.guestInformation.nationality,
                        emailAddress: result.data.guestInformation.user.email,
                        address: result.data.guestInformation.address,
                        contactNumber: result.data.guestInformation.user.contactNumber,
                        firstName: result.data.guestInformation.firstName,
                        lastName: result.data.guestInformation.lastName,
                        reservationStatus: result.data.reservationStatus,
                        accountName: result.data.payment.paymentMode.accountName,
                        accountNumber: result.data.payment.paymentMode.accountNumber,
                        paymentType: result.data.payment.paymentType,
                        paymentMode: result.data.payment.paymentMode.paymentMode,
                        reservationNumber: result.data.reservationReferenceNumber,
                        reservationDate: new Date(result.data.reservationDate).toLocaleDateString() + " " + new Date(result.data.reservationDate).toLocaleTimeString(),
                        reservationId: result.data.id,
                        role: result.data.guestInformation.user.role,
                        grandTotal: result.data.payment.grandTotal,
                        discountType: result.data.payment.discount.discountType,
                        expirationDate: new Date(new Date(result.data.reservationDate).getTime() + 60 * 60 * 24 * 1000).toLocaleDateString() + " " + new Date(result.data.reservationDate).toLocaleTimeString(),
                        amountPaid: result.data.payment.paymentMade,
                        // payment: ,
                        // reservedRooms: ,
                    }).then((result) => {
                        console.log(result)
                        axios.get(apiKey + 'api/getAllReservationSummary').then((result) => {
                            result.data.filter((item) => item.reservation.id == editReservationInfo.id).map((item, index, array) => {
                                axios.patch(apiKey + 'api/updateReservationSummary/' + item.id, {
                                    bookingStatus: 'RESERVED'
                                }).then((result) => {
                                    if (index == array.length - 1) {
                                        // window.location.reload();
                                        handleCloseIsLoading(2, '')
                                    }
                                }).catch((err) => {
                                    handleCloseIsLoading(3)
                                    console.log(err)

                                });
                            })
                        }).catch((err) => {
                            handleCloseIsLoading(3)
                            console.log(err)

                        });

                    }).catch((err) => {
                        handleCloseIsLoading(3)
                        console.log(err)

                    });
                }).catch((err) => {
                    handleCloseIsLoading(3)
                    console.log(err)

                });
            }
            else if (reservationStatus == 'PENDING') {
                axios.get(apiKey + 'api/getReservation/' + editReservationInfo.id).then((result) => {
                    axios.post(apiKey + 'api/sendReservationEmail', {
                        email: result.data.guestInformation.user.email,
                        birthDay: result.data.guestInformation.birthDate,
                        nationality: result.data.guestInformation.nationality,
                        emailAddress: result.data.guestInformation.user.email,
                        address: result.data.guestInformation.address,
                        contactNumber: result.data.guestInformation.user.contactNumber,
                        firstName: result.data.guestInformation.firstName,
                        lastName: result.data.guestInformation.lastName,
                        reservationStatus: result.data.reservationStatus,
                        accountName: result.data.payment.paymentMode.accountName,
                        accountNumber: result.data.payment.paymentMode.accountNumber,
                        paymentType: result.data.payment.paymentType,
                        paymentMode: result.data.payment.paymentMode.paymentMode,
                        reservationNumber: result.data.reservationReferenceNumber,
                        reservationDate: new Date(result.data.reservationDate).toLocaleDateString() + " " + new Date(result.data.reservationDate).toLocaleTimeString(),
                        reservationId: result.data.id,
                        role: result.data.guestInformation.user.role,
                        grandTotal: result.data.payment.grandTotal,
                        discountType: result.data.payment.discount.discountType,
                        expirationDate: new Date(new Date(result.data.reservationDate).getTime() + 60 * 60 * 24 * 1000).toLocaleDateString() + " " + new Date(result.data.reservationDate).toLocaleTimeString(),
                        amountPaid: result.data.payment.paymentMade,
                        // payment: ,
                        // reservedRooms: ,
                    }).then((result) => {
                        console.log(result)
                        axios.get(apiKey + 'api/getAllReservationSummary').then((result) => {
                            result.data.filter((item) => item.reservation.id == editReservationInfo.id).map((item, index, array) => {
                                axios.patch(apiKey + 'api/updateReservationSummary/' + item.id, {
                                    bookingStatus: 'PENDING'
                                }).then((result) => {
                                    if (index == array.length - 1) {
                                        // window.location.reload();
                                        handleCloseIsLoading(2, '')
                                    }
                                }).catch((err) => {
                                    handleCloseIsLoading(3)
                                    console.log(err)

                                });
                            })
                        }).catch((err) => {
                            handleCloseIsLoading(3)
                            console.log(err)

                        });

                    }).catch((err) => {
                        handleCloseIsLoading(3)
                        console.log(err)

                    });
                }).catch((err) => {
                    handleCloseIsLoading(3)
                    console.log(err)

                });
            }
            else {
                // window.location.reload()
                handleCloseIsLoading(2, '')
            }
        }).catch((err) => {
            handleCloseIsLoading(3)
            console.log(err)
        });
    }


    const handleOpenEdit = (value) => {
        setOpenEdit(true)
        axios.get(apiKey + 'api/getReservation/' + value).then((result) => {
            // setReservationInfo(result.data)

            setGrandTotalValue(result.data.payment.grandTotal)
            setPaymentMadeValue(result.data.payment.paymentMade)
            setRemainingBalanceValue(result.data.payment.balance)
            setPaymentMethod(result.data.payment.paymentMode.paymentMode)
            setDiscount(result.data.payment.discount.discountType)
            setPaymentType(result.data.payment.paymentType)
            setFirstName(result.data.guestInformation.firstName)
            setLastName(result.data.guestInformation.lastName)
            setEmail(result.data.guestInformation.user.email)
            setContactNumber(result.data.guestInformation.user.contactNumber)
            setBirthDay(result.data.guestInformation.birthDate)
            setNationality(result.data.guestInformation.nationality)
            setGender(result.data.guestInformation.gender)
            setAddress(result.data.guestInformation.address)
            setUserName(result.data.guestInformation.user.userName)
            setReservationStatus(result.data.reservationStatus)
            setReservationStatusConst(result.data.reservationStatus)
            setEditPaymentId(result.data.payment.id)
            setEditReservationInfo(result.data)
        }).catch((err) => {
            console.log(err)
        });

        axios.get(apiKey + 'api/getAllReservationSummary').then((result) => {
            setReservationSummaryInfo([])
            for (let index = 0; index < result.data.length; index++) {
                if (result.data[index].reservation_id == value) {
                    setReservationSummaryInfo((oldData) => [...oldData, result.data[index]])
                }

            }
        }).catch((err) => {

        });

    }

    useEffect(() => {
        if (userName.length != '' || password.length != '') {
            axios.get(apiKey + 'api/getAllUsers').then((res) => {
                if (res.data.length != 0) {
                    let formatNumber;
                    if (contactNumber.slice(0, 3) == "+63") {

                        formatNumber = contactNumber.replace("+63", "0");

                    }
                    else {
                        formatNumber = contactNumber;
                    }

                    res.data.map((item) => {
                        if (item.role != 'NON-USER') {
                            if (item.email.toLowerCase() == email.toLowerCase()) {
                                setEmailError("This email is already taken.")
                            }
                            else if (item.contactNumber == formatNumber) {
                                setContactNumberError("This number is already taken.")

                            }
                            else if (item.userName.toLowerCase() == userName.toLowerCase()) {
                                setUserNameError("This userName is already taken.")

                            }
                        }

                    })
                }
            }).catch((err) => {

            });
        }
        else {
            setContactNumberError("")
            setUserNameError("")
            setEmailError("")

        }
    }, [userName, email, contactNumber])

    useEffect(() => {
        axios.get(apiKey + 'api/getAllReservation').then((result) => {
            setReservation(result.data)
        }).catch((err) => {
            console.log(err)
        });
        axios.get(apiKey + 'api/getAllReservationSummary').then((result) => {
            setNumberOfRooms(result.data)
        }).catch((err) => {
            console.log(err)
        });

        axios.get(apiKey + 'api/getAllRoomType').then((result) => {
            setRoomTypeDb(result.data.filter((obj) => obj.status == true))
        }).catch((err) => {
            console.log(err)
        });

        axios.get(apiKey + 'api/getAllPaymentMode').then((result) => {
            setPaymentMode(result.data)
        }).catch((err) => {
            console.log(err)

        });
        axios.get(apiKey + 'api/getAllDiscount').then((result) => {
            setDiscountDb(result.data)
        }).catch((err) => {
            console.log(err)

        });
    }, [])


    useEffect(() => {
        // if (roomTypeDb.length != 0) {
        //     roomTypeDb.map((item, index) => {
        //         if (index == 0) {
        //             setRoomType(item.roomType);
        //         }
        //     })
        // }
    }, [roomTypeDb])

    const addToCart = () => {
        setAvailedRoomId(availedRoomId + 1)
        axios.get(apiKey + 'api/getAllRoom').then((result) => {
            for (let index = 0; index < result.data.length; index++) {
                if (result.data[index].roomNumber == roomNumber) {
                    let roomDetails = {
                        id: result.data[index].id,
                        roomNumber: roomNumber,
                        roomType: roomType,
                        checkIn: startDate,
                        checkOut: endDate,
                        totalNights: nights,
                        roomRate: roomRate,
                        kids: kids,
                        adults: adults,
                        specialInstrcution: specialInstrcution,
                    }

                    console.log(roomDetails.specialInstrcution)
                    setAvailedRoom((oldData) => [...oldData, roomDetails])
                    setRoomNumber('');
                    setSpecialInstruction('')
                    break;
                }

            }
        }).catch((err) => {

        });



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


        setRoomNumber('')

        if (roomType != '') {
            roomTypeDb.map((item) => (

                item.roomType == roomType ? setRoomRate(item.roomRate) : ""

            ))
        }
        console.log(roomRate)

        if (discountDb.length != 0) {
            discountDb.map((item) => {
                if (item.discountType == 'No discount') {
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

        if (availedRoom.length != 0) {
            availedRoom.map((item) => {
                console.log("item.id", item.id)
            })
            if (discountValid == false) {
                setGrandTotal(availedRoom.reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value.roomRate * value.totalNights), 0))
                // availedRoom.map((item) => {
                //     setGrandTotal(availedRoom.reduce((accumulator, value)=> accumulator + (value.roomRate * value.totalNights)))
                // })
            }
            else {

                availedRoom.map((item) => {
                    setGrandTotal(availedRoom.reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value.roomRate * value.totalNights), 0) / 1.12 * 0.80)

                    // setGrandTotal(grandTotal + ((item.roomRate * item.totalNights) / 0.80 * 1.12))
                })
            }
        }
        else {
            setGrandTotal(0)
        }
    }, [availedRoom, discountValid])


    useEffect(() => {
        if (discount != '') {
            discountDb.map((item) => {
                if (discount == item.discountType) {
                    setDiscountId(item.id)
                }
            })
        }

        if (paymentMethod != '') {
            paymentMode.map((item) => {
                if (paymentMethod == item.paymentMode) {
                    setPaymentModeId(item.id)
                }
            })
        }
    }, [discount, paymentMode])

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





    useEffect(() => {

        if (editReservationId == '') {
            axios.get(apiKey + 'api/getAllReservationSummary').then((result) => {
                setNotAvailableRoom([])
                for (let index = 0; index < result.data.length; index++) {
                    if (result.data[index].bookingStatus == "PENDING" || result.data[index].bookingStatus == "RESERVED" || result.data[index].bookingStatus == "CHECKED-IN") {
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

                        axios.get(apiKey + 'api/getAllRoom').then((result) => {
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
        }
        else {

            axios.get(apiKey + 'api/getAllReservationSummary').then((result) => {
                setNotAvailableRoom([])
                for (let index = 0; index < result.data.length; index++) {
                    if ((result.data[index].bookingStatus == "PENDING" || result.data[index].bookingStatus == "RESERVED" || result.data[index].bookingStatus == "CHECKED-IN") && result.data[index].id != editReservationId) {
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


            }).catch((err) => {
                console.log(err)
            });
        }
    }, [startDate, endDate, availedRoom, editReservationId])


    useEffect(() => {
        if (editReservationId == '') {
            setRoomNumber('')
        }
        axios.get(apiKey + 'api/getAllRoom').then((result) => {


            setAvailableRooms([])
            for (let index = 0; index < result.data.length; index++) {
                // console.log(result.data[index].roomType.roomType)
                if (!notAvailableRoom.includes(result.data[index].id) && result.data[index].roomStatus != 'Maintenance' && result.data[index].roomType.maxAdultOccupancy >= adults && result.data[index].roomType.maxKidsOccupancy >= kids && result.data[index].status != false) {
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
                    cancelled
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






    const [bookingInformation, setBookingInformation] = useState([])
    // const [grandTotal, setGrandTotal] = useState(0);

    const DeleteRoom = (index) => {
        // setAvailedRoom(availedRoom.filter((o, i) => index !== i));

        setAvailedRoom(oldData => oldData.filter(obj => {
            return obj.id !== index;
        }));
    }

    const EditRoom = (value) => {
        // setAvailedRoom(availedRoom.filter((o, i) => index !== i));
        setEditReservationId(value)
        axios.get(apiKey + 'api/getReservationSummary/' + value).then((result) => {
            console.log("result.data.room.roomNumber", result.data.specialInstrcution)
            setStartDate(new Date(result.data.checkInDate))
            setEndDate(new Date(result.data.checkOutDate))
            setNights(result.data.numberOfNights)
            setKids(result.data.kids)
            setAdults(result.data.adults)
            setRoomType(result.data.room.roomType.roomType)
            setRoomNumber(result.data.room.roomNumber)
            setRoomRate(result.data.room.roomType.roomRate)
            setSpecialInstruction(result.data.specialInstrcution)
        }).catch((err) => {

        });
    }


    const deleteBooking = (id, paymentId, paymentMade) => {
        if (window.confirm('are you sure you want to delete this?')) {
            axios.get(apiKey + 'api/getAllOrderedAmenities').then((result) => {
                for (let index = 0; index < result.data.length; index++) {
                    if (result.data[index].reservationSummary_id == id) {
                        axios.delete(apiKey + 'api/deleteOrderedAmenities/' + result.data[index].id).then((result) => {
                            console.log(result.data)
                            axios.get(apiKey + 'api/getAllOrderedAmenities').then((result) => {
                                if (result.data.filter((obj) => obj.reservationSummary_id == id).length == 0) {
                                    axios.delete(apiKey + 'api/deleteReservationSummary/' + id).then((result) => {
                                        console.log(result.data)
                                        axios.patch(apiKey + 'api/updateGrandTotal/' + editReservationInfo.payment.id, {
                                            paymentMade: editReservationInfo.payment.paymentMade,
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
            setEditReservationId('')
        }

    }

    const addReservation = async (e) => {

        e.preventDefault();
        axios.post(apiKey + 'api/validateAvailedDates', {
            availedRoomData: availedRoom,
        }).then((result) => {
            if (result.data == true) {
                console.log('EY')
                if (contactNumber.slice(0, 3) == "+63") {

                    formatNumber = contactNumber.replace("+63", "0");
                }
                else {
                    formatNumber = contactNumber;
                }

                if (firstNameError.length != 0) {
                    firstNameRef.current.focus()
                }
                else if (lastNameError.length != 0) {
                    lastNameRef.current.focus()

                }
                else if (contactNumberError.length != 0) {
                    contactNumberRef.current.focus()

                }
                else if (userNameError.length != 0) {
                    userNameRef.current.focus()
                }
                else if (emailError.length != 0) {
                    emailRef.current.focus()
                }
                else {
                    if (userName != '' || password != '') {
                        if (emailError.length == 0 && contactNumberError.length == 0 && userNameError.length == 0) {
                            handleOpenIsLoading()
                            axios.post(apiKey + 'api/addUser', {
                                userName: userName,
                                contactNumber: formatNumber,
                                email: email,
                                password: password,
                            }).then((user) => {
                                console.log(user.data);
                                axios.post(apiKey + 'api/addGuest', {
                                    firstName: firstName,
                                    lastName: lastName,
                                    birthDate: birthday,
                                    gender: gender,
                                    address: address,
                                    nationality: nationality,
                                    user_id: user.data.account.id,
                                }).then((guest) => {
                                    console.log(guest.data);
                                    axios.post(apiKey + "api/addPayment", {
                                        paymentMade: 0,
                                        discount_id: discountId,
                                        paymentMode_id: paymentModeId,
                                        paymentType: paymentType,
                                        grandTotal: 0,
                                        balance: 0,
                                        discountValid: discountValid
                                    }).then((payment) => {

                                        console.log(payment.data)
                                        axios.post(apiKey + "api/addReservation", {
                                            reservationDate: reservationDate,
                                            guest_id: guest.data.new_guest.id,
                                            payment_id: payment.data.new_payment.id
                                        }).then((reservation) => {
                                            console.log(reservation.data)
                                            for (let index = 0; index < availedRoom.length; index++) {
                                                let items = {
                                                    checkInDate: availedRoom[index].checkIn,
                                                    checkOutDate: availedRoom[index].checkOut,
                                                    kids: availedRoom[index].kids,
                                                    adults: availedRoom[index].adults,
                                                    numberOfNights: availedRoom[index].totalNights,
                                                    reservation_id: reservation.data.new_reservation.id,
                                                    room_id: availedRoom[index].id,
                                                    specialInstrcution: availedRoom[index].specialInstrcution,

                                                    // numberOfAdults:
                                                    // numberOfKids:
                                                }
                                                axios.post(apiKey + "api/addReservationSummary", items).then((reservationSummary) => {
                                                    axios.get(apiKey + "api/getAllAmenities").then((amenities) => {
                                                        for (let index = 0; index < amenities.data.length; index++) {
                                                            axios.post(apiKey + "api/addOrderedAmenities", {
                                                                amenity_id: amenities.data[index].id,
                                                                reservationSummary_id: reservationSummary.data.new_reservationSummary.id,
                                                            }).then((result) => {
                                                                console.log(result.data)
                                                            }).catch((err) => {
                                                                handleCloseIsLoading(3)
                                                                console.log(err)

                                                            });
                                                        }
                                                    }).catch((err) => {
                                                        console.log(err)
                                                    });
                                                    console.log(reservationSummary.data)
                                                    axios.get(apiKey + 'api/getPayment/' + payment.data.new_payment.id).then((getPayment) => {

                                                        if (index == availedRoom.length - 1) {
                                                            axios.patch(apiKey + 'api/updateGrandTotal/' + payment.data.new_payment.id, {
                                                                paymentMade: getPayment.data.paymentMade,
                                                            }).then((result) => {
                                                                console.log(result.data)
                                                                axios.post(apiKey + 'api/sendReservationEmail', {
                                                                    email: user.data.account.email,
                                                                    birthDay: guest.data.new_guest.birthDate,
                                                                    nationality: guest.data.new_guest.nationality,
                                                                    emailAddress: user.data.account.email,
                                                                    address: guest.data.new_guest.address,
                                                                    contactNumber: user.data.account.contactNumber,
                                                                    firstName: guest.data.new_guest.firstName,
                                                                    lastName: guest.data.new_guest.lastName,
                                                                    reservationStatus: reservation.data.new_reservation.reservationStatus,
                                                                    accountName: getPayment.data.paymentMode.accountName,
                                                                    accountNumber: getPayment.data.paymentMode.accountNumber,
                                                                    paymentType: getPayment.data.paymentType,
                                                                    paymentMode: getPayment.data.paymentMode.paymentMode,
                                                                    reservationNumber: reservation.data.new_reservation.reservationReferenceNumber,
                                                                    reservationDate: new Date(reservation.data.new_reservation.reservationDate).toLocaleDateString() + " " + new Date(reservation.data.new_reservation.reservationDate).toLocaleTimeString(),
                                                                    reservationId: reservation.data.new_reservation.id,
                                                                    role: user.data.account.role,
                                                                    grandTotal: result.data.grandTotal,
                                                                    discountType: result.data.discount.discountType,
                                                                    expirationDate: new Date(new Date(reservation.data.new_reservation.reservationDate).getTime() + 60 * 60 * 24 * 1000).toLocaleDateString() + " " + new Date(reservation.data.new_reservation.reservationDate).toLocaleTimeString(),

                                                                    // payment: ,
                                                                    // reservedRooms: ,
                                                                }).then((result) => {
                                                                    console.log(result)
                                                                    console.log(reservationSummary.data)
                                                                    // window.location.reload()
                                                                    handleCloseIsLoading(2, '')
                                                                }).catch((err) => {
                                                                    handleCloseIsLoading(3)
                                                                    console.log(err)

                                                                });
                                                            }).catch((err) => {
                                                                axios.delete(apiKey + 'api/deleteReservationSummary/' + reservationSummary.data.new_reservationSummary.id).then((result) => {
                                                                    console.log(result)
                                                                    axios.delete(apiKey + 'api/deleteReservation/' + reservation.data.new_reservation.id).then((result) => {
                                                                        console.log(result)
                                                                        axios.delete(apiKey + 'api/deletePayment/' + payment.data.new_payment.id).then((result) => {
                                                                            console.log(result)
                                                                            axios.delete(apiKey + 'api/deleteGuest/' + guest.data.new_guest.id).then((result) => {
                                                                                console.log(result)
                                                                                axios.delete(apiKey + 'api/deleteUser/' + user.data.account.id).then((result) => {

                                                                                    handleCloseIsLoading(3)
                                                                                    console.log(result)

                                                                                }).catch((err) => {
                                                                                    handleCloseIsLoading(3)
                                                                                    console.log(err)
                                                                                });
                                                                            }).catch((err) => {
                                                                                handleCloseIsLoading(3)
                                                                                console.log(err)
                                                                            });
                                                                        }).catch((err) => {
                                                                            handleCloseIsLoading(3)
                                                                            console.log(err)
                                                                        });
                                                                    }).catch((err) => {
                                                                        handleCloseIsLoading(3)
                                                                        console.log(err)
                                                                    });
                                                                }).catch((err) => {
                                                                    handleCloseIsLoading(3)
                                                                    console.log(err)
                                                                });


                                                            });
                                                        }
                                                    }).catch((err) => {
                                                        handleCloseIsLoading(3)
                                                        console.log(err)

                                                    })
                                                }).catch((err) => {
                                                    handleCloseIsLoading(3)
                                                    console.log(err)

                                                });
                                            }
                                        }).catch((err) => {
                                            handleCloseIsLoading(3)
                                            console.log(err)
                                            axios.delete(apiKey + 'api/deletePayment/' + payment.data.new_payment.id).then((result) => {
                                                console.log(result)
                                                axios.delete(apiKey + 'api/deleteGuest/' + guest.data.new_guest.id).then((result) => {
                                                    console.log(result)
                                                    axios.delete(apiKey + 'api/deleteUser/' + user.data.account.id).then((result) => {
                                                        handleCloseIsLoading(3)
                                                        console.log(result)
                                                    }).catch((err) => {
                                                        handleCloseIsLoading(3)
                                                        console.log(err)
                                                    });
                                                }).catch((err) => {
                                                    handleCloseIsLoading(3)
                                                    console.log(err)
                                                });
                                            }).catch((err) => {
                                                handleCloseIsLoading(3)
                                                console.log(err)
                                            });

                                        });
                                    }).catch((err) => {
                                        console.log(err)
                                        axios.delete(apiKey + 'api/deleteGuest/' + guest.data.new_guest.id).then((result) => {
                                            console.log(result)
                                            axios.delete(apiKey + 'api/deleteUser/' + user.data.account.id).then((result) => {
                                                handleCloseIsLoading(3)
                                                console.log(result)
                                            }).catch((err) => {
                                                handleCloseIsLoading(3)
                                                console.log(err)
                                            });
                                        }).catch((err) => {
                                            handleCloseIsLoading(3)
                                            console.log(err)
                                        });

                                    });
                                }).catch((err) => {
                                    axios.delete(apiKey + 'api/deleteUser/' + user.data.account.id).then((result) => {
                                        handleCloseIsLoading(3)
                                        console.log(result)
                                    }).catch((err) => {
                                        handleCloseIsLoading(3)
                                        console.log(err)
                                    });
                                });
                            }).catch((err) => {
                                handleCloseIsLoading(3)
                                console.log(err.res)
                            });
                        }

                    }
                    else {
                        if (emailError.length == 0 && contactNumberError.length == 0 && userNameError.length == 0) {
                            handleOpenIsLoading()
                            axios.post(apiKey + 'api/addUser', {
                                userName: null,
                                contactNumber: formatNumber,
                                email: email,
                                password: null,
                                role: 'NON-USER',
                            }).then((user) => {
                                console.log(user.data);
                                axios.post(apiKey + 'api/addGuest', {
                                    firstName: firstName,
                                    lastName: lastName,
                                    birthDate: birthday,
                                    gender: gender,
                                    address: address,
                                    nationality: nationality,
                                    user_id: user.data.account.id,
                                }).then((guest) => {
                                    console.log(guest.data);
                                    axios.post(apiKey + "api/addPayment", {
                                        paymentMade: 0,
                                        discount_id: discountId,
                                        paymentMode_id: paymentModeId,
                                        paymentType: paymentType,
                                        grandTotal: 0,
                                        balance: 0,
                                        discountValid: discountValid
                                    }).then((payment) => {
                                        console.log(payment.data)
                                        axios.post(apiKey + "api/addReservation", {
                                            reservationDate: reservationDate,
                                            guest_id: guest.data.new_guest.id,
                                            payment_id: payment.data.new_payment.id
                                        }).then((reservation) => {
                                            console.log(reservation.data)
                                            axios.patch(apiKey + 'api/updateUsers/' + user.data.account.id, {
                                                password: reservation.data.new_reservation.reservationReferenceNumber + guest.data.new_guest.lastName,
                                                userName: reservation.data.new_reservation.reservationReferenceNumber,
                                            }).then((patchUser) => {
                                                console.log(patchUser.data)
                                            }).catch((err) => {
                                                handleCloseIsLoading(3)
                                                console.log(err)
                                            });
                                            for (let index = 0; index < availedRoom.length; index++) {
                                                let items = {
                                                    checkInDate: availedRoom[index].checkIn,
                                                    checkOutDate: availedRoom[index].checkOut,
                                                    kids: availedRoom[index].kids,
                                                    adults: availedRoom[index].adults,
                                                    numberOfNights: availedRoom[index].totalNights,
                                                    reservation_id: reservation.data.new_reservation.id,
                                                    room_id: availedRoom[index].id,
                                                    specialInstrcution: availedRoom[index].specialInstrcution,
                                                    // numberOfAdults:
                                                    // numberOfKids:
                                                }
                                                axios.post(apiKey + "api/addReservationSummary", items).then((reservationSummary) => {
                                                    console.log(reservationSummary.data)
                                                    axios.get(apiKey + "api/getAllAmenities").then((amenities) => {
                                                        for (let index = 0; index < amenities.data.length; index++) {
                                                            axios.post(apiKey + "api/addOrderedAmenities", {
                                                                amenity_id: amenities.data[index].id,
                                                                reservationSummary_id: reservationSummary.data.new_reservationSummary.id,
                                                            }).then((result) => {
                                                                console.log(result.data)
                                                            }).catch((err) => {
                                                                handleCloseIsLoading(3)
                                                                console.log(err)

                                                            });
                                                        }
                                                    }).catch((err) => {
                                                        handleCloseIsLoading(3)
                                                        console.log(err)
                                                    });
                                                    axios.get(apiKey + 'api/getPayment/' + payment.data.new_payment.id).then((getPayment) => {

                                                        if (index == availedRoom.length - 1) {
                                                            axios.patch(apiKey + 'api/updateGrandTotal/' + payment.data.new_payment.id, {
                                                                paymentMade: getPayment.data.paymentMade,
                                                            }).then((result) => {
                                                                console.log(result.data)
                                                                axios.post(apiKey + 'api/sendReservationEmail', {
                                                                    email: user.data.account.email.toLocaleLowerCase(),
                                                                    birthDay: guest.data.new_guest.birthDate,
                                                                    nationality: guest.data.new_guest.nationality,
                                                                    emailAddress: user.data.account.email.toLocaleLowerCase(),
                                                                    address: guest.data.new_guest.address,
                                                                    contactNumber: user.data.account.contactNumber,
                                                                    firstName: guest.data.new_guest.firstName.toLocaleLowerCase(),
                                                                    lastName: guest.data.new_guest.lastName,
                                                                    reservationStatus: reservation.data.new_reservation.reservationStatus,
                                                                    accountName: getPayment.data.paymentMode.accountName,
                                                                    accountNumber: getPayment.data.paymentMode.accountNumber,
                                                                    paymentType: getPayment.data.paymentType,
                                                                    paymentMode: getPayment.data.paymentMode.paymentMode,
                                                                    reservationNumber: reservation.data.new_reservation.reservationReferenceNumber,
                                                                    reservationDate: new Date(reservation.data.new_reservation.reservationDate).toLocaleDateString() + " " + new Date(reservation.data.new_reservation.reservationDate).toLocaleTimeString(),
                                                                    reservationId: reservation.data.new_reservation.id,
                                                                    role: user.data.account.role,
                                                                    grandTotal: result.data.grandTotal,
                                                                    discountType: result.data.discount.discountType,
                                                                    expirationDate: new Date(new Date(reservation.data.new_reservation.reservationDate).getTime() + 60 * 60 * 24 * 1000).toLocaleDateString() + " " + new Date(reservation.data.new_reservation.reservationDate).toLocaleTimeString(),

                                                                    // payment: ,
                                                                    // reservedRooms: ,
                                                                }).then((result) => {
                                                                    console.log(result)
                                                                    console.log(reservationSummary.data)
                                                                    // window.location.reload()
                                                                    handleCloseIsLoading(2, '')
                                                                }).catch((err) => {
                                                                    handleCloseIsLoading(3)
                                                                    console.log(err)

                                                                });
                                                            }).catch((err) => {
                                                                axios.delete(apiKey + 'api/deleteReservationSummary/' + reservationSummary.data.new_reservationSummary.id).then((result) => {
                                                                    console.log(result)
                                                                    axios.delete(apiKey + 'api/deleteReservation/' + reservation.data.new_reservation.id).then((result) => {
                                                                        console.log(result)
                                                                        axios.delete(apiKey + 'api/deletePayment/' + payment.data.new_payment.id).then((result) => {
                                                                            console.log(result)
                                                                            axios.delete(apiKey + 'api/deleteGuest/' + guest.data.new_guest.id).then((result) => {
                                                                                console.log(result)
                                                                                axios.delete(apiKey + 'api/deleteUser/' + user.data.account.id).then((result) => {

                                                                                    handleCloseIsLoading(3)
                                                                                    console.log(result)

                                                                                }).catch((err) => {
                                                                                    handleCloseIsLoading(3)
                                                                                    console.log(err)
                                                                                });
                                                                            }).catch((err) => {
                                                                                handleCloseIsLoading(3)
                                                                                console.log(err)
                                                                            });
                                                                        }).catch((err) => {
                                                                            handleCloseIsLoading(3)
                                                                            console.log(err)
                                                                        });
                                                                    }).catch((err) => {
                                                                        handleCloseIsLoading(3)
                                                                        console.log(err)
                                                                    });
                                                                }).catch((err) => {
                                                                    handleCloseIsLoading(3)
                                                                    console.log(err)
                                                                });


                                                            });
                                                        }
                                                    }).catch((err) => {
                                                        handleCloseIsLoading(3)
                                                        console.log(err)

                                                    })
                                                }).catch((err) => {
                                                    handleCloseIsLoading(3)
                                                    console.log(err)

                                                });
                                            }
                                        }).catch((err) => {
                                            console.log(err)
                                            axios.delete(apiKey + 'api/deletePayment/' + payment.data.new_payment.id).then((result) => {
                                                console.log(result)
                                                axios.delete(apiKey + 'api/deleteGuest/' + guest.data.new_guest.id).then((result) => {
                                                    console.log(result)
                                                    axios.delete(apiKey + 'api/deleteUser/' + user.data.account.id).then((result) => {
                                                        handleCloseIsLoading(3)
                                                        console.log(result)
                                                    }).catch((err) => {
                                                        handleCloseIsLoading(3)
                                                        console.log(err)
                                                    });
                                                }).catch((err) => {
                                                    handleCloseIsLoading(3)
                                                    console.log(err)
                                                });
                                            }).catch((err) => {
                                                handleCloseIsLoading(3)
                                                console.log(err)
                                            });

                                        });
                                    }).catch((err) => {
                                        console.log(err)
                                        axios.delete(apiKey + 'api/deleteGuest/' + guest.data.new_guest.id).then((result) => {
                                            console.log(result)
                                            axios.delete(apiKey + 'api/deleteUser/' + user.data.account.id).then((result) => {
                                                handleCloseIsLoading(3)
                                                console.log(result)
                                            }).catch((err) => {
                                                handleCloseIsLoading(3)
                                                console.log(err)
                                            });
                                        }).catch((err) => {
                                            handleCloseIsLoading(3)
                                            console.log(err)
                                        });

                                    });
                                }).catch((err) => {
                                    axios.delete(apiKey + 'api/deleteUser/' + user.data.account.id).then((result) => {
                                        handleCloseIsLoading(3)
                                        console.log(result)
                                    }).catch((err) => {
                                        handleCloseIsLoading(3)
                                        console.log(err)
                                    });
                                });
                            }).catch((err) => {
                                handleCloseIsLoading(3)
                                console.log(err.res)
                            });
                        }
                    }
                }
            }
            else {
                setAvailableRooms([])
                window.alert('Sorry the rooms have been reserved online.')
                window.location = ''
            }
        }).catch((err) => {

        });


    }
    const [roomPage, setRoomPage] = useState(1)

    const saveReservationSummary = () => {
        axios.get(apiKey + 'api/getAllRoom').then((room) => {
            for (let index = 0; index < room.data.length; index++) {
                if (room.data[index].roomNumber == roomNumber) {
                    handleOpenIsLoading()
                    axios.patch(apiKey + 'api/updateReservationSummary/' + editReservationId, {
                        checkInDate: startDate,
                        checkOutDate: endDate,
                        numberOfNights: nights,
                        kids: kids,
                        adults: adults,
                        specialInstrcution: specialInstrcution,
                        room_id: room.data[index].id,
                    }).then((result) => {
                        console.log(result.data)
                        axios.patch(apiKey + 'api/updateGrandTotal/' + editPaymentId, {
                            paymentMade: paymentMadeValue,
                        }).then((result) => {
                            console.log(result.data)
                            //partial
                            // window.location.reload()

                            handleCloseIsLoading(2, '')
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
        }).catch((err) => {
            console.log(err)

        });
    }

    const addReservationSummary = () => {
        axios.get(apiKey + 'api/getAllRoom').then((room) => {
            for (let index = 0; index < room.data.length; index++) {
                if (room.data[index].roomNumber == roomNumber) {
                    let items = {
                        checkInDate: startDate,
                        checkOutDate: endDate,
                        kids: kids,
                        adults: adults,
                        numberOfNights: nights,
                        reservation_id: editReservationId,
                        room_id: room.data[index].id,
                        specialInstrcution: specialInstrcution,
                        reservation_id: editReservationInfo.id,
                        bookingStatus: editReservationInfo.reservationStatus == 'PENDING' || editReservationInfo.reservationStatus == 'RESERVED' ? editReservationInfo.reservationStatus : 'NO-SHOW'
                        // numberOfAdults:
                        // numberOfKids:
                    }
                    handleOpenIsLoading()
                    axios.post(apiKey + "api/addReservationSummary", items).then((reservationSummary) => {
                        console.log(reservationSummary.data)
                        axios.get(apiKey + "api/getAllAmenities").then((amenities) => {
                            for (let index = 0; index < amenities.data.length; index++) {
                                axios.post(apiKey + "api/addOrderedAmenities", {
                                    amenity_id: amenities.data[index].id,
                                    reservationSummary_id: reservationSummary.data.new_reservationSummary.id,
                                }).then((result) => {
                                    console.log(result.data)
                                    if (index == amenities.data.length - 1) {
                                        axios.patch(apiKey + 'api/updateGrandTotal/' + editPaymentId, {
                                            paymentMade: paymentMadeValue,
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
                                }).catch((err) => {
                                    handleCloseIsLoading(3)
                                    console.log(err)

                                });
                            }
                        }).catch((err) => {
                            handleCloseIsLoading(3)
                            console.log(err)
                        });

                    }).catch((err) => {
                        handleCloseIsLoading(3)
                        console.log(err)

                    })
                }

            }
        }).catch((err) => {
            console.log(err)

        });

    }

    const deleteReservation = (value) => {
        if (window.confirm('are you sure you want to delete this?')) {
            axios.get(apiKey + 'api/getNumberOfRooms/' + value).then((rooms) => {
                console.log(rooms.data)
                if (rooms.data.length == 0) {
                    axios.delete(apiKey + 'api/deleteReservation/' + value).then((result) => {
                        console.log(result.data)
                        axios.delete(apiKey + 'api/deletePayment/' + rooms.data.payment_id).then((result) => {
                            console.log(result.data)
                            window.location.reload();
                        }).catch((err) => {
                            console.log(err)
                        });
                    }).catch((err) => {
                        console.log(err)
                    });
                }
                else {
                    for (let index = 0; index < rooms.data.length; index++) {

                        axios.get(apiKey + 'api/getAllOrderedAmenities').then((result) => {
                            for (let index2 = 0; index2 < result.data.length; index2++) {
                                if (result.data[index].reservationSummary_id == rooms.data[index].id) {
                                    axios.delete(apiKey + 'api/deleteOrderedAmenities/' + result.data[index2].id).then((result) => {
                                        console.log(result.data)
                                        axios.get(apiKey + 'api/getAllOrderedAmenities').then((result) => {
                                            if (result.data.filter((obj) => obj.reservationSummary_id == rooms.data[index].id).length == 0) {
                                                axios.delete(apiKey + 'api/deleteReservationSummary/' + rooms.data[index].id).then((result) => {
                                                    console.log(rooms.data.length - 1)
                                                    console.log(index)
                                                    if (index == rooms.data.length - 1) {
                                                        console.log('PASOK')
                                                        axios.delete(apiKey + 'api/deleteReservation/' + value).then((result) => {
                                                            console.log(result.data)

                                                            axios.delete(apiKey + 'api/deletePayment/' + rooms.data.payment_id).then((result) => {
                                                                console.log(result.data)
                                                                window.location.reload();
                                                            }).catch((err) => {
                                                                console.log(err)
                                                            });
                                                        }).catch((err) => {
                                                            console.log(err)
                                                        });
                                                    }
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
                }
            }).catch((err) => {
                console.log(err)

            });
        }
    }

    const [search, setSearch] = useState('')
    const [endDateFilter, setEndDateFilter] = useState(null)
    const [startDateFilter, setStartDateFilter] = useState(null)

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
                            value={endDateFilter}
                            onChange={(newValue) => {
                                setEndDateFilter(newValue);
                            }}
                            minDate={startDateFilter}
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

                    {startDateFilter != null || endDateFilter != null ?
                        <IconButton onClick={() => {
                            setStartDateFilter(null)
                            setEndDateFilter(null)
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
                        <Th align='center'>Reservation Date</Th>
                        <Th align='center'>Reservation Number </Th>
                        <Th align='center'>Guest's Name </Th>
                        <Th align='center'>No. of Rooms</Th>
                        <Th align='center'>Remaining Balance</Th>
                        <Th align='center'>Reservation Status </Th>
                        <Th align='center'>Action</Th>
                    </Tr>
                    {reservation.length != 0 ?
                        reservation
                            .slice((roomPage - 1) * 10, roomPage * 10)
                            .filter((item) => {
                                if (startDateFilter != null && endDateFilter != null) {
                                    let filterDates = getDates(startDateFilter, endDateFilter);
                                    if (filterDates.includes(moment(item.reservationDate).format('YYYY-MM-DD'))) {
                                        return item
                                    }
                                }
                                else {
                                    return item
                                }
                            })
                            .sort((a, b) => Date.parse(new Date(b.reservationDate)) - Date.parse(new Date(a.reservationDate)))
                            .filter((item) => {
                                if (search != '') {
                                    if (new Date(item.reservationDate).toLocaleDateString().includes(search)
                                        || item.reservationReferenceNumber.toString().includes(search)
                                        || (item.guestInformation.firstName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.guestInformation.firstName.toLowerCase() + ' ' + item.guestInformation.lastName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.guestInformation.lastName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.reservationStatus.toLowerCase()).toString().includes(search.toLowerCase())
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
                            .map((item) => (
                                <Tr>
                                    <Td align='center'>{new Date(item.reservationDate).toLocaleDateString()}</Td>
                                    <Td align='center'>{item.reservationReferenceNumber}</Td>
                                    <Td align='center'>{item.guestInformation.firstName}, {item.guestInformation.lastName}</Td>
                                    <Td align='center'>{numberOfRooms.length != 0 ? numberOfRooms.filter((obj) => obj.reservation_id == item.id).length : ''}</Td>
                                    <Td align='center'>{numberFormat(item.payment.balance)}</Td>
                                    <Td align='center'>
                                        {reservationStatusStyle(item.reservationStatus)}

                                    </Td>

                                    <Td align='center'><ActionButtonReservation
                                        view={() => handleOpenView(item.id)}
                                        edit={() => handleOpenEdit(item.id)}

                                        dontShowDelete=''
                                    /></Td>
                                </Tr>
                            ))
                        :

                        <Tr>
                            <Td align='center' colSpan={7}>Reservation is empty</Td>
                        </Tr>}



                </TableContainer>
                <ContainerGlobal
                    w='100%'
                    justify='center'>
                    <Pagination
                        page={roomPage}
                        count={reservation.length != 0 && Math.ceil(reservation.filter((item) => {
                            if (startDateFilter != null && endDateFilter != null) {
                                let filterDates = getDates(startDateFilter, endDateFilter);
                                if (filterDates.includes(moment(item.reservationDate).format('YYYY-MM-DD'))) {
                                    return item
                                }
                            }
                            else {
                                return item
                            }
                        })
                            .sort((a, b) => Date.parse(new Date(b.reservationDate)) - Date.parse(new Date(a.reservationDate)))
                            .filter((item) => {
                                if (search != '') {
                                    if (new Date(item.reservationDate).toLocaleDateString().includes(search)
                                        || item.reservationReferenceNumber.toString().includes(search)
                                        || (item.guestInformation.firstName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.guestInformation.firstName.toLowerCase() + ' ' + item.guestInformation.lastName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.guestInformation.lastName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.reservationStatus.toLowerCase()).toString().includes(search.toLowerCase())
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
                            }).length / 10)}
                        onChange={(e, value) => {

                            setRoomPage(value)
                        }}
                    />
                </ContainerGlobal>
            </ContainerGlobal>

            <Button variant="contained" size="large"
                style={{ backgroundColor: '#2E2E2E', marginBottom: '20px' }}
                onClick={() => {
                    handleOpenCreate()
                }}>
                Walk-in / Reservation
            </Button>


            {/* <Grow in={showDetails}>{viewDetails}</Grow>
            <Grow in={showEditDetails}>{EditDetails}</Grow>
            <Grow in={show}>{WalkinModal}</Grow> */}

















            <Modal
                open={openCreate}
                onClose={handleCloseCreate}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Box
                    component='form'
                    onSubmit={addReservation}
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
                            Create Walk-In / Reservation
                        </Title>
                        <CloseIcon
                            onClick={handleCloseCreate}
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
                                        if (e.target.value <= 0) {
                                            setAdults(1);
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
                                <TextField value={numberFormat(roomRate * nights)} disabled id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px', fontWeight: 'bold' }} />

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

                                            if (event.target.value == "No discount") {
                                                setDiscountValid(false)
                                            }
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
                                    disabled={discount == "No discount" ? true : false}
                                    style={{ width: 200, margin: '5px 0px' }}
                                    control={
                                        <Checkbox
                                            checked={discountValid === true ? true : false}
                                            value={discountValid}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setDiscountValid(true)
                                                    setGrandTotal(0)
                                                }
                                                else {
                                                    setDiscountValid(false)
                                                    setGrandTotal(0)
                                                }
                                            }}
                                        />
                                    }
                                    label="Discount Verified?" />
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
                                    inputProps={{ maxLength: 80 }}

                                    required />

                                <TextField
                                    error={lastNameError.length != 0 ? true : false}
                                    helperText={lastNameError.length != 0 ? lastNameError : ""}
                                    placeholder='Last Name'
                                    label="Last Name"
                                    variant="outlined"
                                    inputRef={lastNameRef}
                                    value={lastName}
                                    inputProps={{ maxLength: 80 }}

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
                                    inputProps={{ maxLength: 254 }}

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
                                    inputProps={{ maxLength: 13 }}
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

                                        maxDate={new Date(Date.parse(new Date()) - 568025136000)}
                                        minDate={new Date(Date.parse(new Date()) - 2524556160000)}
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
                                    inputProps={{ maxLength: 255 }}
                                    style={{ width: '95%', }}
                                    required />

                            </InputContainer>
                            {/* <p><h1 style={{ display: 'inline' }}>Create an account </h1>(optional)*</p>
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
                                        if (!userNameValidation.test(e.target.value) && e.target.value.length != 0) {
                                            setUserNameError("Invalid username.")
                                        }
                                        else {

                                            setUserNameError("")
                                        }
                                    }}
                                    inputProps={{ maxLength: 40 }}
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
                                            setPasswordError("Password must have a minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.")

                                        }
                                        else {
                                            setPasswordError("")
                                        }
                                    }}
                                    style={{ width: '55%', }}
                                    required={userName.length != 0 ? true : false}
                                />
                            </InputContainer> */}



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
                    <Button variant="contained" color='success' type='submit' disabled={availedRoom.length == 0 ? true : false}>Create reservation</Button>
                    <Button variant="contained" color='error' onClick={() => handleCloseCreate()}>Close</Button>
                </Box>
            </Modal>

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
                        Reservation Reference Number
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
                                    {reservationInfo.length != 0 ? reservationInfo.reservationReferenceNumber : ""}
                                </Title>
                            </ContainerGlobal>



                        </ContainerGlobalColumn>


                    </ContainerGlobalRow>
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
                        Reservation Status
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
                                    {

                                        reservationInfo.length != 0 ? reservationInfo.reservationStatus == 'UNSETTLED' ? 'CANCELLED' : reservationInfo.reservationStatus : ""
                                    }
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
                        Reservation cart
                    </Title>


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
                                    <Th align='center' color='black'>Adults</Th>
                                    <Th align='center' color='black'>Kids</Th>
                                    <Th align='center' color='black'>Total nights</Th>
                                    <Th align='center' color='black'>Rate per night</Th>
                                    <Th align='center' color='black'>Total amout due</Th>
                                </Tr>
                                {reservationSummaryInfo.length != 0 ?

                                    reservationSummaryInfo.map((item, index) => (
                                        <Tr>

                                            <Td align='center'>{item.room.roomNumber}</Td>
                                            <Td align='center'>{item.room.roomType.roomType}</Td>
                                            <Td align='center'>{new Date(item.checkInDate).toLocaleDateString()}</Td>
                                            <Td align='center'>{new Date(item.checkOutDate).toLocaleDateString()}</Td>
                                            <Td align='center'>{item.adults}</Td>
                                            <Td align='center'>{item.kids}</Td>
                                            <Td align='center'>{item.numberOfNights}</Td>
                                            <Td align='center'>{numberFormat(item.room.roomType.roomRate)}</Td>
                                            <Td align='center' style={{ color: 'red' }}>{numberFormat(item.total)}</Td>

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
                                <Title
                                    size='20px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='Normal'
                                    weight='bold'
                                    align='left'
                                    margin='15px 0px 20px 0px'
                                >
                                    {reservationInfo.length != 0 ? reservationInfo.payment.paymentMode.paymentMode : ""}
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
                                    {reservationInfo.length != 0 ? reservationInfo.payment.paymentType : ""}
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
                                    {reservationInfo.length != 0 ? reservationInfo.payment.discount.discountType : ""}
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
                                            checked={reservationInfo.length != 0 ? reservationInfo.payment.discountValid == true ? true : false : ""}
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
                                        value={reservationInfo.length != 0 ? numberFormat(reservationInfo.payment.grandTotal) : ""}
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
                                            value={reservationInfo.length != 0 ? numberFormat(reservationInfo.payment.grandTotal / 2) : ""}
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
                                    value={reservationInfo.length != 0 ? numberFormat(reservationInfo.payment.paymentMade) : ""}
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
                                    value={reservationInfo.length != 0 ? numberFormat(reservationInfo.payment.grandTotal) : ""}
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
                                    value={reservationInfo.length != 0 ? numberFormat(reservationInfo.payment.balance) : ""}
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
                                    value={reservationInfo.length != 0 ? reservationInfo.guestInformation.firstName.toLocaleLowerCase() : ""}
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
                                    value={reservationInfo.length != 0 ? reservationInfo.guestInformation.lastName.toLocaleLowerCase() : ""}
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
                                    value={reservationInfo.length != 0 ? reservationInfo.guestInformation.user.email.toLocaleLowerCase() : ""}
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
                                    value={reservationInfo.length != 0 ? reservationInfo.guestInformation.user.contactNumber : ""}
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
                                        value={reservationInfo.length != 0 ? reservationInfo.guestInformation.birthDate : ""}
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
                                        value={reservationInfo.length != 0 ? reservationInfo.guestInformation.nationality : ""}
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
                                            <MenuItem value={nationality}

                                                disabled
                                            >{nationality}</MenuItem>
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
                                        value={reservationInfo.length != 0 ? reservationInfo.guestInformation.gender : ""}
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
                                    value={reservationInfo.length != 0 ? reservationInfo.guestInformation.address : ""}
                                    onChange={(e) => {
                                        setAddress(e.target.value)
                                    }}
                                    multiline
                                    rows={4}
                                    style={{ width: '95%', }}

                                    disabled />

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
                    onSubmit={addReservation}
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
                            Edit Reservation
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
                        Reservation details
                    </Title>
                    <ContainerGlobalRow
                        style={{
                            margin: '50px 0px'
                        }}
                    >
                        <ContainerGlobal
                            w='auto'
                            h='auto'
                            direction='row'
                            gap='20px'
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
                            // margin='15px 0px 20px 0px'
                            >
                                Reservation Status:
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

                                    <MenuItem value='PENDING'
                                        disabled={editReservationInfo.length != 0 ? editReservationInfo.payment.paymentStatus == 'pending' || editReservationInfo.payment.paymentStatus == 'reciept declined' || editReservationInfo.reservationStatus == 'PENDING' ? false : true : false}
                                    >
                                        Pending
                                    </MenuItem>
                                    <MenuItem value='RESERVED'
                                        disabled={editReservationInfo.length != 0 ? editReservationInfo.payment.paymentStatus == 'partial' || editReservationInfo.payment.paymentStatus == 'fully paid' || editReservationInfo.reservationStatus == 'RESERVED' ? false : true : false}
                                    >
                                        Reserved
                                    </MenuItem>
                                    <MenuItem value='UNSETTLED'>
                                        Cancelled
                                    </MenuItem>


                                </Select>
                            </FormControl>
                            <Button onClick={() => { updadateReservationStatus() }} size="small" variant='contained' style={reservationStatusConst == reservationStatus ? { display: 'none' } : { display: '' }}>Update</Button>
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
                                <TextField value={numberFormat(roomRate)} id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px' }} />

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
                                    Total amount due:
                                </Title>
                                <TextField value={numberFormat(roomRate * nights)} disabled id="outlined-basic" label="" variant="standard" style={{ width: 200, margin: '5px 0px', fontWeight: 'bold' }} />

                            </ContainerGlobal>



                            {editReservationId != '' ?
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
                                        <Button style={{ width: '100px' }} variant="contained" color='error' onClick={() => { setEditReservationId('') }} disabled={roomType != '' && roomNumber != '' && roomRate != 0 ? false : true} >Cancel</Button>

                                    </ContainerGlobal>

                                </ContainerGlobal>
                                :
                                <Button style={editReservationId != '' ? { display: 'none' } : { display: '' }} variant="contained" onClick={() => { addReservationSummary() }} disabled={roomType != '' && roomNumber != '' && roomRate != 0 ? false : true} >Add</Button>
                            }
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
                                style={{ padding: '0px 10px' }}
                                cellspacing="0"
                                cellpadding="0">
                                <Tr>
                                    <Th align='center' color='black'>Room number</Th>
                                    <Th align='center' color='black'>Room type</Th>
                                    <Th align='center' color='black'>Check in</Th>
                                    <Th align='center' color='black'>Check out</Th>
                                    <Th align='center' color='black'>Adults</Th>
                                    <Th align='center' color='black'>Kids</Th>
                                    <Th align='center' color='black'>Total nights</Th>
                                    <Th align='center' color='black'>Rate per night</Th>
                                    <Th align='center' color='black'>Total amout due</Th>
                                    <Th align='center' color='black'>Action</Th>
                                </Tr>
                                {reservationSummaryInfo.length != 0 ?

                                    reservationSummaryInfo.map((item, index) => (
                                        <Tr>

                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{item.room.roomNumber}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{item.room.roomType.roomType}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{new Date(item.checkInDate).toLocaleDateString()}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{new Date(item.checkOutDate).toLocaleDateString()}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{item.adults}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{item.kids}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{item.numberOfNights}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{numberFormat(item.room.roomType.roomRate)}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: 'red' }}>{numberFormat(item.total)}</Td>

                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>


                                                {item.id == editReservationId ?
                                                    <ContainerGlobal
                                                        justify='center'
                                                        gap='20px'
                                                    >
                                                        <IconButton sx={{ p: '8px', backgroundColor: '#D2C3A4' }} aria-label="search" title='Edit' onClick={() => { setEditReservationId('') }}>
                                                            <CloseIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
                                                        </IconButton>

                                                    </ContainerGlobal>
                                                    :
                                                    <ContainerGlobal
                                                        justify='center'
                                                        gap='20px'
                                                    >
                                                        <IconButton sx={{ p: '8px', backgroundColor: '#D2C3A4' }} aria-label="search" title='Edit' onClick={() => { EditRoom(item.id) }}>
                                                            <EditIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
                                                        </IconButton>
                                                    </ContainerGlobal>}


                                            </Td>
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
                                <Title
                                    size='20px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='Normal'
                                    weight='bold'
                                    align='left'
                                    margin='15px 0px 20px 0px'
                                >
                                    {paymentMethod}
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
                                    {paymentType}
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
                                    {discount}
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
                                    style={{ width: 200, margin: '5px 0px' }}
                                    control={
                                        <Checkbox
                                            checked={discountValid === true ? true : false}
                                            value={discountValid}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setDiscountValid(true)
                                                    setGrandTotal(0)
                                                }
                                                else {
                                                    setDiscountValid(false)
                                                    setGrandTotal(0)
                                                }
                                            }}
                                        />
                                    }
                                    label="Discount Verified?" />
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
                                            value={numberFormat(grandTotalValue)}
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
                                            value={numberFormat(grandTotalValue / 2)}
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
                                    value={numberFormat(paymentMadeValue)}
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
                                    value={numberFormat(grandTotalValue)}
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
                                    value={numberFormat(remainingBalanceValue)}
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

                                    disabled />

                                <TextField
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

                                    disabled />
                            </InputContainer>


                            <InputContainer>
                                <TextField
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

                                    disabled />

                                <TextField
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

                                    disabled />
                            </InputContainer>


                            <InputContainer>

                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker

                                        views={['day', 'month', 'year']}
                                        label="Birthday"
                                        value={birthday}
                                        onChange={(newValue) => {
                                            setBirthDay(newValue);
                                        }} disabled
                                        renderInput={(params) =>
                                            <TextField
                                                {...params}
                                                variant="standard"
                                                style={{ width: "55%", margin: '5px 0px' }}
                                                helperText={null}

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
                            </InputContainer>

                            <InputContainer
                                justify='center'>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label"
                                        style={{ textAlign: 'center', }} >Gender</FormLabel>
                                    <RadioGroup
                                        row

                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        defaultValue="male"
                                        value={gender}
                                        name="row-radio-buttons-group"
                                        onChange={(e) => {
                                            setGender(e.target.value)
                                        }}

                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    >
                                        <FormControlLabel
                                            value="male"
                                            control={<Radio disabled />}
                                            label="Male"
                                        />
                                        <FormControlLabel
                                            value="female"
                                            control={<Radio disabled />}
                                            label="Female"
                                        />
                                        <FormControlLabel
                                            value="other"
                                            control={<Radio disabled />}
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
                                    value={address}
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
                                    value={userName}
                                    onChange={(e) => {
                                        setUserName(e.target.value)
                                        setUserNameError("")
                                    }}

                                    disabled
                                    style={{ width: '55%', }} />

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
                    <Button variant="contained" color='error' onClick={handleCloseEdit}>Close</Button>
                </Box>
            </Modal>



        </Container >
    )
}
