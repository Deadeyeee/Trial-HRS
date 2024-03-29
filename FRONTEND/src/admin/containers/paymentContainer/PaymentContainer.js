
import React, { useEffect, useRef, useState } from 'react'
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine'
import { TextInput } from '../../../client/components/textBox/style'
import { Title } from '../../../client/components/title/styles'
import { BlackTab, Container, ContainerGlobalColumn, ContainerGlobalRow, GrayTab, HeadContainer, HeadContainerSmall, TabContainer, TableContainer, Td, Th, Tr } from './style'
import { ContainerGlobal } from '../../components/container/container'
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
import { Badge, FormControlLabel, Radio, RadioGroup, TextareaAutosize, FormControl, Modal, Box, Typography, Checkbox, FormLabel } from '@mui/material'
import { nationalities } from '../../../nationalities'
import { Global } from '@emotion/react'
import ActionButtonReservation from '../../components/actionButton/ActionButtonReservation'
import ActionButtonPayment from '../../components/actionButton/ActionButtonPayment'
import axios from 'axios'
import OfficialReceipt from '../../pages/officialReceipt/OfficialReceipt'
import { apiKey } from '../../../apiKey'
import moment from 'moment'
import { LabelDiv, Persons, TitleCalendarContainer } from '../../../client/containers/bookingPage/Styles'
import DateRangePicker from '../../../client/components/datePicker/DateRangePicker'
import { ContainerFormContent, InputContainer } from '../../../client/containers/informationForm/style'
import { FlexboxContainer } from '../../../client/containers/bookingCartPage/Styles'
import { PhotoBox } from '../../../client/containers/clientPaymentInfo/Styles'

import { Pagination } from '@mui/material'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const PaymentContainer = () => {


    let letters = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    let phoneNumberValidation = /^(09|\+639)\d{9}$/;
    const [roomPage, setRoomPage] = useState(1)
    const [value, setValue] = useState(Date.now());
    const [outValue, setOutValue] = useState(Date.now() + 86400000);
    const color = "#c44242";
    const [age, setAge] = React.useState('');

    const [paymentType, setPaymentType] = React.useState('Down Payment');
    const [paymentMethod, setPaymentMethod] = React.useState('Cash');
    const [discount, setDiscount] = React.useState('none');


    const [nationality, setNationality] = useState('Filipino')
    console.log(outValue)


    console.log(outValue)


    const [openUpload, setOpenUpload] = useState(false);
    const [uploadLink, setUploadLink] = useState('');
    const [reservationSelected, setReservationSelected] = useState([]);





    const [reservationInformation, setReservationInformation] = useState([]);

    const [openEdit, setOpenEdit] = useState(false);
    const [openView, setOpenView] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [openPrint, setOpenPrint] = useState(false);

    const [reservations, setReservations] = useState([]);
    const [paymentValue, setPaymentValue] = useState(0);


    const [open, setOpen] = React.useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthDay] = useState(new Date());
    const [gender, setGender] = useState('male');
    const [address, setAddress] = useState("");



    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [contactNumberError, setContactNumberError] = useState("");
    const [emailError, setEmailError] = useState("");

    const emailRef = useRef();
    const contactNumberRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();



    const [startDate, setStartDate] = useState(new Date().setHours(0, 0, 0, 0));
    let minEndDate = new Date(startDate);
    minEndDate.setDate(minEndDate.getDate() + 1);


    const numberFormat = (value) =>
        new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'PHP'
        }).format(value);

    // const [nationality, setNationality] = useState('Filipino')
    // console.log(outValue)
    let reservationDate = Date.now()

    // console.log(outValue)





    const [reservationStatus, setReservationStatus] = useState('');

    const [paymentMode, setPaymentMode] = useState([]);
    const [discountDb, setDiscountDb] = useState([]);
    const [discountValid, setDiscountValid] = useState(false);

    const [paymentModeId, setPaymentModeId] = useState("");
    const [discountId, setDiscountId] = useState("");
    const [grandTotal, setGrandTotal] = useState(0);





    const [editReservationId, setEditReservationId] = useState('');


    const [reservationSummaryInfo, setReservationSummaryInfo] = useState([])
    let formatNumber;

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



    const [amenities, setAmenities] = useState([]);




    const [previewImage, setPreviewImage] = useState('')
    const [previewImageError, setPreviewImageError] = useState('')
    const [imageToUpload, setImageToUpload] = useState([])


    useEffect(() => {
        axios.get(apiKey + 'api/getAllReservation').then((result) => {
            setReservations(result.data)
        }).catch((err) => {

        });
    }, [])


    useEffect(() => {
        console.log(reservations)
    }, [reservations])


    const handleCloseEdit = () => {
        setOpenEdit(false)
        setReservationInformation([])
        setReservationSummaryInfo([])
        setOrderedAmenities([])
        setAmenities([])
        setPaymentValue(0)
        setPreviewImage('')
        setPreviewImageError('')
        setImageToUpload([])
    }
    const handleClosePrint = () => {
        setOpenPrint(false)
        setReservationInformation([])

    }
    const handleCloseUpdate = () => {
        setOpenUpdate(false)
        setReservationInformation([])
        setReservationSummaryInfo([])
        setOrderedAmenities([])
        setAmenities([])
        setPaymentValue(0)
        setPreviewImage('')
        setPreviewImageError('')
        setImageToUpload([])
    }
    const handleCloseView = () => {
        setOpenView(false)
        setReservationInformation([])
        setReservationSummaryInfo([])
        setOrderedAmenities([])
        setAmenities([])

    }
    const [orderedAmenities, setOrderedAmenities] = useState([])

    const handleOpenEdit = (value) => {
        setOpenEdit(true)
        console.log(value.reservationReferenceNumber)
        setReservationInformation(value)
        axios.get(apiKey + 'api/getAllReservationSummary').then((result) => {
            console.log(result.data)
            console.log(value.id)
            setReservationSummaryInfo(result.data.filter((obj) => obj.reservation_id == value.id))
        }).catch((err) => {

        });
        axios.get(apiKey + 'api/getAllOrderedAmenities').then((result) => {

            setOrderedAmenities(result.data.filter((obj) => obj.reservationSummary.reservation_id == value.id))
        }).catch((err) => {

        });

        axios.get(apiKey + 'api/getAllAmenities').then((result) => {

            setAmenities(result.data)
        }).catch((err) => {

        });
    }

    const handleOpenView = (value) => {
        setOpenView(true)
        console.log(value.reservationReferenceNumber)
        setReservationInformation(value)
        axios.get(apiKey + 'api/getAllReservationSummary').then((result) => {
            console.log(result.data)
            console.log(value.id)
            setReservationSummaryInfo(result.data.filter((obj) => obj.reservation_id == value.id))
        }).catch((err) => {

        });
        axios.get(apiKey + 'api/getAllOrderedAmenities').then((result) => {

            setOrderedAmenities(result.data.filter((obj) => obj.reservationSummary.reservation_id == value.id))
        }).catch((err) => {

        });

        axios.get(apiKey + 'api/getAllAmenities').then((result) => {

            setAmenities(result.data)
        }).catch((err) => {

        });
    }

    const handleOpenPrint = (value) => {
        // setOpenPrint(true)
        setReservationInformation(value)

        axios.get(apiKey + 'api/getAllReceipt').then((result) => {
            if (result.data.length != 0) {
                if (value.payment.paymentStatus == 'partial') {
                    if (result.data.filter((obj) => obj.reservation_id == value.id && obj.type == 'ack').length == 0) {
                        axios.post(apiKey + 'api/addReceipt', {
                            reservation_id: value.id,
                            type: 'ack',
                        }).then((result) => {
                            console.log(result.data)
                            setOpenPrint(true)
                        }).catch((err) => {
                            console.log(err)

                        });
                    }
                    else {
                        setOpenPrint(true)

                    }
                }
                else {
                    if (result.data.filter((obj) => obj.reservation_id == value.id && obj.type == 'or').length == 0) {
                        axios.post(apiKey + 'api/addReceipt', {
                            reservation_id: value.id,
                            type: 'or',
                        }).then((result) => {
                            console.log(result.data)
                            setOpenPrint(true)
                        }).catch((err) => {
                            console.log(err)

                        });
                    }
                    else {
                        setOpenPrint(true)

                    }
                }
            }
            else {
                if (value.payment.paymentStatus == 'partial') {
                    axios.post(apiKey + 'api/addReceipt', {
                        reservation_id: value.id,
                        type: 'ack',
                    }).then((result) => {
                            console.log(result.data)
                            setOpenPrint(true)

                    }).catch((err) => {
                        console.log(err)

                    });
                }
                else {
                    axios.post(apiKey + 'api/addReceipt', {
                        reservation_id: value.id,
                        type: 'or',
                    }).then((result) => {
                            console.log(result.data)
                            setOpenPrint(true)

                    }).catch((err) => {
                        console.log(err)

                    });
                }
            }
        }).catch((err) => {
            console.log(err)

        });

    }
    const handleOpenUpdate = (value) => {
        setOpenUpdate(true)
        console.log(value.reservationReferenceNumber)
        setReservationInformation(value)
        setReservationStatus(value.payment.paymentStatus)
        setPaymentMethod(value.payment.paymentMode.paymentMode)
        setDiscount(value.payment.discount.discountType)
        setPaymentType(value.payment.paymentType)
        setDiscountValid(value.payment.discountValid)
        setGrandTotal(value.payment.grandTotal)
        axios.get(apiKey + 'api/getAllReservationSummary').then((result) => {
            console.log(result.data)
            console.log(value.id)
            setReservationSummaryInfo(result.data.filter((obj) => obj.reservation_id == value.id))
        }).catch((err) => {
            console.log(err)

        });
        axios.get(apiKey + 'api/getAllOrderedAmenities').then((result) => {

            setOrderedAmenities(result.data.filter((obj) => obj.reservationSummary.reservation_id == value.id))
        }).catch((err) => {
            console.log(err)

        });

        axios.get(apiKey + 'api/getAllAmenities').then((result) => {

            setAmenities(result.data)
        }).catch((err) => {
            console.log(err)

        });


    }

    useEffect(() => {
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


    const handleOpenUpload = (value) => {
        setOpenUpload(true);
        setUploadLink(value.payment.paymentImage);
        setReservationSelected(value)

    }

    const handleCloseUpload = (value) => {
        setOpenUpload(false);
        setReservationSelected([])
        setUploadLink('');
    }



    const approveReceipt = () => {
        let paymentMade = 0;
        if (reservationSelected.payment.paymentType == "Down Payment") {
            paymentMade = reservationSelected.payment.grandTotal / 2;
        }
        else if (reservationSelected.payment.paymentType == "Full Payment") {
            paymentMade = reservationSelected.payment.grandTotal;
        }
        axios.patch(apiKey + 'api/updateGrandTotal/' + reservationSelected.payment.id, {
            paymentMade: paymentMade,
        }).then((result) => {
            console.log(result.data)

            axios.patch(apiKey + 'api/updateReservation/' + reservationSelected.id, {
                reservationStatus: 'RESERVED',
            }).then((result) => {
                console.log(result.data)
                axios.get(apiKey + 'api/getAllReservationSummary').then((result) => {
                    console.log(result.data)
                    result.data.filter((obj) => obj.reservation_id == reservationSelected.id).map((item, index, arr) => {
                        axios.patch(apiKey + 'api/updateReservationSummary/' + item.id, {
                            bookingStatus: 'RESERVED'
                        }).then((result) => {
                            console.log(result.data)
                            console.log(item.reservation.payment.paymentMode.paymentMode)
                            console.log(index)
                            // console.log(index)

                        }).catch((err) => {
                            console.log(err)

                        });
                        if (index == arr.length - 1) {
                            axios.post(apiKey + 'api/sendReservationEmail', {
                                email: item.reservation.guestInformation.user.email.toLocaleLowerCase(),
                                birthDay: item.reservation.guestInformation.birthDate,
                                nationality: item.reservation.guestInformation.nationality.toLocaleLowerCase(),
                                emailAddress: item.reservation.guestInformation.user.email.toLocaleLowerCase(),
                                address: item.reservation.guestInformation.address,
                                contactNumber: item.reservation.guestInformation.user.contactNumber,
                                firstName: item.reservation.guestInformation.firstName.toLocaleLowerCase(),
                                lastName: item.reservation.guestInformation.lastName.toLocaleLowerCase(),
                                reservationStatus: item.reservation.reservationStatus,
                                accountName: item.reservation.payment.paymentMode.accountName,
                                accountNumber: item.reservation.payment.paymentMode.accountNumber,
                                paymentType: item.reservation.payment.paymentType,
                                paymentMode: item.reservation.payment.paymentMode.paymentMode,
                                reservationNumber: item.reservation.reservationReferenceNumber,
                                reservationDate: new Date(item.reservation.reservationDate).toLocaleDateString() + " " + new Date(item.reservation.reservationDate).toLocaleTimeString(),
                                reservationId: item.reservation.id,
                                role: item.reservation.guestInformation.user.role,
                                grandTotal: item.reservation.payment.grandTotal,
                                discountType: item.reservation.payment.discount.discountType,
                                expirationDate: new Date(new Date(item.reservation.reservationDate).getTime() + 60 * 60 * 24 * 1000).toLocaleDateString() + " " + new Date(item.reservation.reservationDate).toLocaleTimeString(),
                                amountPaid: item.reservation.payment.paymentMade,
                                // payment: ,
                                // reservedRooms: ,
                            }).then((result) => {
                                console.log(result)
                                window.location.reload();

                            }).catch((err) => {
                                console.log(err)

                            });

                        }
                    })
                }).catch((err) => {
                    console.log(err)

                });
            }).catch((err) => {
                console.log(err)

            });


        }).catch((err) => {
            console.log(err)
        });
    }



    const declineReciept = () => {

        const formData = new FormData();

        formData.append('paymentImage', 'asdsa');
        formData.append('paymentStatus', 'reciept declined');
        axios.post(apiKey + 'api/deleteImage', {
            filePath: reservationSelected.payment.paymentImage
        }).then((result) => {
            console.log(result.data)
            axios.patch(apiKey + 'api/updatePaymentPhoto/' + reservationSelected.payment.id, formData).then((result) => {
                console.log(result.data)

                axios.post(apiKey + 'api/sendReservationEmail', {
                    email: reservationSelected.guestInformation.user.email.toLocaleLowerCase(),
                    birthDay: reservationSelected.guestInformation.birthDate,
                    nationality: reservationSelected.guestInformation.nationality.toLocaleLowerCase(),
                    emailAddress: reservationSelected.guestInformation.user.email.toLocaleLowerCase(),
                    address: reservationSelected.guestInformation.address,
                    contactNumber: reservationSelected.guestInformation.user.contactNumber,
                    firstName: reservationSelected.guestInformation.firstName.toLocaleLowerCase(),
                    lastName: reservationSelected.guestInformation.lastName.toLocaleLowerCase(),
                    reservationStatus: 'proof declined',
                    accountName: reservationSelected.payment.paymentMode.accountName,
                    accountNumber: reservationSelected.payment.paymentMode.accountNumber,
                    paymentType: reservationSelected.payment.paymentType,
                    paymentMode: reservationSelected.payment.paymentMode.paymentMode,
                    reservationNumber: reservationSelected.reservationReferenceNumber,
                    reservationDate: new Date(reservationSelected.reservationDate).toLocaleDateString() + " " + new Date(reservationSelected.reservationDate).toLocaleTimeString(),
                    reservationId: reservationSelected.id,
                    role: reservationSelected.guestInformation.user.role,
                    grandTotal: reservationSelected.payment.grandTotal,
                    discountType: reservationSelected.payment.discount.discountType,
                    expirationDate: new Date(new Date(reservationSelected.reservationDate).getTime() + 60 * 60 * 24 * 1000).toLocaleDateString() + " " + new Date(reservationSelected.reservationDate).toLocaleTimeString(),
                    amountPaid: reservationSelected.payment.paymentMade,
                    // payment: ,
                    // reservedRooms: ,
                }).then((result) => {
                    console.log(result)
                    window.location.reload();

                }).catch((err) => {
                    console.log(err)

                });
            }).catch((err) => {
                console.log(err.data)

            });
        }).catch((err) => {

        })


        // let paymentMade = 0;
        // if (reservationSelected.payment.paymentType == "Down Payment") {
        //     paymentMade = reservationSelected.payment.grandTotal / 2;
        // }
        // else if (reservationSelected.payment.paymentType == "Full Payment") {
        //     paymentMade = reservationSelected.payment.grandTotal;
        // }
        // axios.patch(apiKey+'api/updateGrandTotal/' + reservationSelected.payment.id, {
        //     paymentMade: paymentMade,
        // }).then((result) => {
        //     console.log(result.data)

        //     axios.patch(apiKey+'api/updateReservation/' + reservationSelected.id, {
        //         reservationStatus: 'RESERVED',
        //     }).then((result) => {
        //         console.log(result.data)
        //         axios.get(apiKey+'api/getAllReservationSummary').then((result) => {
        //             console.log(result.data)
        //             result.data.map((item, index, arr) => {
        //                 if (item.reservation_id == reservationSelected.id) {
        //                     axios.patch(apiKey+'api/updateReservationSummary/' + item.id, {
        //                         bookingStatus: 'RESERVED'
        //                     }).then((result) => {
        //                         console.log(result.data)
        //                         console.log(item.reservation.payment.paymentMode.paymentMode)
        //                         console.log(index)
        //                         // console.log(index)

        //                     }).catch((err) => {
        //                         console.log(err)

        //                     });
        //                 }
        //                 if (index == arr.length - 1) {
        //                     axios.post(apiKey+'api/sendReservationEmail', {
        //                         email: item.reservation.guestInformation.user.email.toLocaleLowerCase(),
        //                         birthDay: item.reservation.guestInformation.birthDate,
        //                         nationality: item.reservation.guestInformation.nationality.toLocaleLowerCase(),
        //                         emailAddress: item.reservation.guestInformation.user.email.toLocaleLowerCase(),
        //                         address: item.reservation.guestInformation.address,
        //                         contactNumber: item.reservation.guestInformation.user.contactNumber,
        //                         firstName: item.reservation.guestInformation.firstName.toLocaleLowerCase(),
        //                         lastName: item.reservation.guestInformation.lastName.toLocaleLowerCase(),
        //                         reservationStatus: item.reservation.reservationStatus,
        //                         accountName: item.reservation.payment.paymentMode.accountName,
        //                         accountNumber: item.reservation.payment.paymentMode.accountNumber,
        //                         paymentType: item.reservation.payment.paymentType,
        //                         paymentMode: item.reservation.payment.paymentMode.paymentMode,
        //                         reservationNumber: item.reservation.reservationReferenceNumber,
        //                         reservationDate: new Date(item.reservation.reservationDate).toLocaleDateString() + " " + new Date(item.reservation.reservationDate).toLocaleTimeString(),
        //                         reservationId: item.reservation.id,
        //                         role: item.reservation.guestInformation.user.role,
        //                         grandTotal: item.reservation.payment.grandTotal,
        //                         discountType: item.reservation.payment.discount.discountType,
        //                         expirationDate: new Date(new Date(item.reservation.reservationDate).getTime() + 60 * 60 * 24 * 1000).toLocaleDateString() + " " + new Date(item.reservation.reservationDate).toLocaleTimeString(),
        //                         amountPaid: item.reservation.payment.paymentMade,
        //                         // payment: ,
        //                         // reservedRooms: ,
        //                     }).then((result) => {
        //                         console.log(result)
        //                         window.location.reload();

        //                     }).catch((err) => {
        //                         console.log(err)

        //                     });

        //                 }
        //             })
        //         }).catch((err) => {
        //             console.log(err)

        //         });
        //     }).catch((err) => {
        //         console.log(err)

        //     });


        // }).catch((err) => {
        //     console.log(err)
        // });
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



    const payNow = () => {
        console.log('reservationInformation.payment.id', reservationInformation.payment.paymentMade)
        console.log('reservationInformation.payment.id', parseFloat(reservationInformation.payment.paymentMade) + parseFloat(paymentValue))

        axios.patch(apiKey + 'api/updateGrandTotal/' + reservationInformation.payment.id, {
            paymentMade: parseFloat(reservationInformation.payment.paymentMade) + parseFloat(paymentValue),
        }).then((result) => {
            console.log(result.data)
            //partial
            console.log(reservationInformation.reservationStatus)
            if (reservationInformation.reservationStatus == 'PENDING') {
                console.log(result.data.paymentType)
                if (result.data.paymentType == 'Down Payment') {
                    if (result.data.paymentMade >= result.data.grandTotal / 2) {
                        axios.patch(apiKey + 'api/updateReservation/' + reservationInformation.id, {
                            reservationStatus: 'RESERVED',
                        }).then((result) => {
                            console.log(result.data)
                            axios.get(apiKey + 'api/getAllReservationSummary').then((result) => {
                                console.log(result.data)
                                result.data.filter((obj) => obj.reservation_id == reservationInformation.id).map((item, index, arr) => {
                                    axios.patch(apiKey + 'api/updateReservationSummary/' + item.id, {
                                        bookingStatus: 'RESERVED'
                                    }).then((result) => {
                                        console.log(result.data)
                                        console.log(item.reservation.payment.paymentMode.paymentMode)
                                        console.log(index)
                                        // console.log(index)

                                    }).catch((err) => {
                                        console.log(err)

                                    });
                                    if (index == arr.length - 1) {
                                        axios.post(apiKey + 'api/sendReservationEmail', {
                                            email: item.reservation.guestInformation.user.email.toLocaleLowerCase(),
                                            birthDay: item.reservation.guestInformation.birthDate,
                                            nationality: item.reservation.guestInformation.nationality.toLocaleLowerCase(),
                                            emailAddress: item.reservation.guestInformation.user.email.toLocaleLowerCase(),
                                            address: item.reservation.guestInformation.address,
                                            contactNumber: item.reservation.guestInformation.user.contactNumber,
                                            firstName: item.reservation.guestInformation.firstName.toLocaleLowerCase(),
                                            lastName: item.reservation.guestInformation.lastName.toLocaleLowerCase(),
                                            reservationStatus: item.reservation.reservationStatus,
                                            accountName: item.reservation.payment.paymentMode.accountName,
                                            accountNumber: item.reservation.payment.paymentMode.accountNumber,
                                            paymentType: item.reservation.payment.paymentType,
                                            paymentMode: item.reservation.payment.paymentMode.paymentMode,
                                            reservationNumber: item.reservation.reservationReferenceNumber,
                                            reservationDate: new Date(item.reservation.reservationDate).toLocaleDateString() + " " + new Date(item.reservation.reservationDate).toLocaleTimeString(),
                                            reservationId: item.reservation.id,
                                            role: item.reservation.guestInformation.user.role,
                                            grandTotal: item.reservation.payment.grandTotal,
                                            discountType: item.reservation.payment.discount.discountType,
                                            expirationDate: new Date(new Date(item.reservation.reservationDate).getTime() + 60 * 60 * 24 * 1000).toLocaleDateString() + " " + new Date(item.reservation.reservationDate).toLocaleTimeString(),
                                            amountPaid: item.reservation.payment.paymentMade,
                                            // payment: ,
                                            // reservedRooms: ,
                                        }).then((result) => {
                                            console.log(result)
                                            window.location.reload();

                                        }).catch((err) => {
                                            console.log(err)

                                        });

                                    }
                                })
                            }).catch((err) => {
                                console.log(err)

                            });
                        }).catch((err) => {
                            console.log(err)

                        });

                    }
                    else {
                        window.location.reload();

                    }
                }
                else if (result.data.paymentType == 'Full Payment') {
                    console.log(reservationInformation.reservationReferenceNumber)
                    if (result.data.paymentMade == result.data.grandTotal) {
                        axios.patch(apiKey + 'api/updateReservation/' + reservationInformation.id, {
                            reservationStatus: 'RESERVED',
                        }).then((result) => {
                            console.log(result.data)
                            axios.get(apiKey + 'api/getAllReservationSummary').then((result) => {
                                console.log(result.data)
                                result.data.filter((obj) => obj.reservation_id == reservationInformation.id).map((item, index, arr) => {

                                    axios.patch(apiKey + 'api/updateReservationSummary/' + item.id, {
                                        bookingStatus: 'RESERVED'
                                    }).then((result) => {
                                        console.log(result.data)
                                        console.log(item.reservation.payment.paymentMode.paymentMode)
                                        console.log(index)
                                        // console.log(index)

                                    }).catch((err) => {
                                        console.log(err)

                                    });

                                    if (index == arr.length - 1) {
                                        axios.post(apiKey + 'api/sendReservationEmail', {
                                            email: item.reservation.guestInformation.user.email.toLocaleLowerCase(),
                                            birthDay: item.reservation.guestInformation.birthDate,
                                            nationality: item.reservation.guestInformation.nationality.toLocaleLowerCase(),
                                            emailAddress: item.reservation.guestInformation.user.email.toLocaleLowerCase(),
                                            address: item.reservation.guestInformation.address,
                                            contactNumber: item.reservation.guestInformation.user.contactNumber,
                                            firstName: item.reservation.guestInformation.firstName.toLocaleLowerCase(),
                                            lastName: item.reservation.guestInformation.lastName.toLocaleLowerCase(),
                                            reservationStatus: item.reservation.reservationStatus,
                                            accountName: item.reservation.payment.paymentMode.accountName,
                                            accountNumber: item.reservation.payment.paymentMode.accountNumber,
                                            paymentType: item.reservation.payment.paymentType,
                                            paymentMode: item.reservation.payment.paymentMode.paymentMode,
                                            reservationNumber: item.reservation.reservationReferenceNumber,
                                            reservationDate: new Date(item.reservation.reservationDate).toLocaleDateString() + " " + new Date(item.reservation.reservationDate).toLocaleTimeString(),
                                            reservationId: item.reservation.id,
                                            role: item.reservation.guestInformation.user.role,
                                            grandTotal: item.reservation.payment.grandTotal,
                                            discountType: item.reservation.payment.discount.discountType,
                                            expirationDate: new Date(new Date(item.reservation.reservationDate).getTime() + 60 * 60 * 24 * 1000).toLocaleDateString() + " " + new Date(item.reservation.reservationDate).toLocaleTimeString(),
                                            amountPaid: item.reservation.payment.paymentMade,
                                            // payment: ,
                                            // reservedRooms: ,
                                        }).then((result) => {
                                            console.log(result)
                                            window.location.reload();

                                        }).catch((err) => {
                                            console.log(err)

                                        });

                                    }
                                })
                            }).catch((err) => {
                                console.log(err)

                            });
                        }).catch((err) => {
                            console.log(err)

                        });

                    }
                    else {
                        window.location.reload();

                    }
                }
            }
            else {

                window.location.reload()
            }
        }).catch((err) => {
            console.log(err)
        })
    }


    const imgTypes = ['image/png', 'image/jpeg',]
    const handleUpload = (e) => {
        setImageToUpload(e.target.files[0])
        console.log(e.target.files[0])
        if (e.target.files.length == 0) {
            setPreviewImage(null)
            setPreviewImageError('No image selected.')
        }
        else {
            let selectedFile = e.target.files[0];
            if (selectedFile) {
                if (selectedFile && imgTypes.includes(selectedFile.type)) {
                    setPreviewImage(URL.createObjectURL(selectedFile));
                    setPreviewImageError('')
                }
                else {
                    setPreviewImage(null)
                    setPreviewImageError('Invalid file type. Please provide jpg/jpeg/png image type only.')
                }
            }
            else {

            }
        }
    }

    const uploadImage = (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append('paymentImage', imageToUpload)
        if (previewImageError.length == 0 && imageToUpload.length != 0) {
            if (reservationInformation.payment.paymentImage != null) {
                axios.post(apiKey + 'api/deleteImage', {
                    filePath: reservationInformation.payment.paymentImage,
                }).then((result) => {
                    console.log(result.data)
                    axios.patch(apiKey + 'api/updatePaymentPhoto/' + reservationInformation.payment.id, formData).then((result) => {
                        console.log(result.data)
                        window.location.reload()
                    }).catch((err) => {
                        console.log(err.data)

                    });
                }).catch((err) => {
                    console.log(err.data)

                });
            }
            else {
                console.log(reservationInformation.payment.paymentImage)
                axios.patch(apiKey + 'api/updatePaymentPhoto/' + reservationInformation.payment.id, formData).then((result) => {
                    console.log(result.data)
                    window.location.reload()
                }).catch((err) => {
                    console.log(err.data)

                });
            }
        }
    }

    const savePayment = (e) => {
        e.preventDefault();

        axios.patch(apiKey + "api/updatePayment/" + reservationInformation.payment.id, {
            discount_id: discountId,
            paymentMode_id: paymentModeId,
            paymentType: paymentType,
            discountValid: discountValid
        }).then((payment) => {
            axios.patch(apiKey + 'api/updateGrandTotal/' + reservationInformation.payment.id, {
                paymentMade: parseFloat(reservationInformation.payment.paymentMade),
            }).then((result) => {
                console.log(result.data)
                if (imageToUpload.length != 0) {
                    const formData = new FormData();
                    formData.append('paymentImage', imageToUpload)
                    if (previewImageError.length == 0 && imageToUpload.length != 0) {
                        if (reservationInformation.payment.paymentImage != null) {
                            axios.post(apiKey + 'api/deleteImage', {
                                filePath: reservationInformation.payment.paymentImage,
                            }).then((result) => {
                                console.log(result.data)
                                axios.patch(apiKey + 'api/updatePaymentPhoto/' + reservationInformation.payment.id, formData).then((result) => {
                                    console.log(result.data)
                                    window.location.reload()
                                }).catch((err) => {
                                    console.log(err.data)

                                });
                            }).catch((err) => {
                                console.log(err.data)

                            });
                        }
                        else {
                            console.log(reservationInformation.payment.paymentImage)
                            axios.patch(apiKey + 'api/updatePaymentPhoto/' + reservationInformation.payment.id, formData).then((result) => {
                                console.log(result.data)
                                window.location.reload()
                            }).catch((err) => {
                                console.log(err.data)

                            });
                        }
                    }
                }
                else {
                    window.location.reload()
                }
            }).catch((err) => {
                console.log(err)

            });




        }).catch((err) => {
            console.log(err)
        })
    }

    const updadatePaymentStatus = () => {
        axios.patch(apiKey + 'api/updatePayment/' + reservationInformation.payment.id, {
            paymentStatus: reservationStatus,
            grandTotal: reservationInformation.payment.grandTotal,
            paymentMade: reservationInformation.payment.paymentMade,
        }).then((result) => {
            console.log(result.data)
            window.location.reload()
        }).catch((err) => {
            console.log(err)
        });
    }

    const downloadReceipt = () => {
        // window.location.href = '/admin/officialReceipt/download' + reservationInformation.id
        if (reservationInformation.payment.balance == 0) {
            window.open('/admin/officialReceipt/' + reservationInformation.id + '_download', '_blank');
            handleClosePrint();
        }
        else if (reservationInformation.payment.balance != 0 && reservationInformation.payment.balance != reservationInformation.payment.grandTotal) {
            window.open('/admin/acknowledgementReceipt/' + reservationInformation.id + '_download', '_blank');
            handleClosePrint();
        }

    }
    const printReceipt = () => {
        if (reservationInformation.payment.balance == 0) {
            window.open('/admin/officialReceipt/' + reservationInformation.id + '_print', '_blank');
            handleClosePrint();
        }
        else if (reservationInformation.payment.balance != 0 && reservationInformation.payment.balance != reservationInformation.payment.grandTotal) {
            window.open('/admin/acknowledgementReceipt/' + reservationInformation.id + '_print', '_blank');
            handleClosePrint();
        }
    }

    const viewReceipt = () => {
        if (reservationInformation.payment.balance == 0) {
            window.open('/admin/officialReceipt/' + reservationInformation.id + '_view', '_blank');
            handleClosePrint();
        }
        else if (reservationInformation.payment.balance != 0 && reservationInformation.payment.balance != reservationInformation.payment.grandTotal) {
            window.open('/admin/acknowledgementReceipt/' + reservationInformation.id + '_view', '_blank');
            handleClosePrint();
        }
    }
    return (
        <Container
            style={{
                height: 'auto'
            }}>

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
                    Payments
                </Title>

                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                ></HorizontalLine>
                <TableContainer
                    fontsize='.8vw'
                >
                    <Tr>
                        <Th align='center' style={{ fontSize: '' }}>Reservation Date</Th>
                        <Th align='center' style={{ fontSize: '' }}>Reservation Number</Th>
                        <Th align='center'>Guest's Name </Th>
                        <Th align='center'>Payment Type</Th>
                        <Th align='center'>Discount Type</Th>
                        <Th align='center'>Grand Total</Th>
                        <Th align='center'>Payment Made</Th>
                        <Th align='center'>Remaining Balance</Th>
                        <Th align='center'>Proof of Payment</Th>
                        <Th align='center'>Payment Status</Th>
                        <Th align='right'>Action</Th>
                    </Tr>


                    {reservations.length != 0 ?
                        reservations
                            .slice((roomPage - 1) * 10, roomPage * 10)
                            .sort((a, b) => a.reservationReferenceNumber - b.reservationReferenceNumber)
                            .map((item) => (
                                <Tr>
                                    <Td align='center'>{new Date(item.reservationDate).toLocaleDateString()}</Td>
                                    <Td align='center'>{item.reservationReferenceNumber}</Td>
                                    <Td align='center'>{item.guestInformation.firstName.toLowerCase()}, {item.guestInformation.lastName.toLowerCase()}</Td>
                                    <Td align='center'>{item.payment.paymentType}</Td>
                                    <Td align='center'>{item.payment.discount.discountType}</Td>

                                    <Td align='center'>{numberFormat(item.payment.grandTotal)}</Td>
                                    <Td align='center'>{numberFormat(item.payment.paymentMade)}</Td>
                                    <Td align='center'>{numberFormat(item.payment.balance)}</Td>
                                    <Td align='center'>{item.payment.paymentImage != null ? <a style={{ color: 'blue', cursor: 'pointer' }} onClick={() => { handleOpenUpload(item) }}>Uploaded</a> : "Empty"}</Td>
                                    <Td align='center'>
                                        {paymentStatusStyle(item.payment.paymentStatus)}

                                    </Td>
                                    <Td align='right'><ActionButtonPayment
                                        view={() => handleOpenView(item)}
                                        edit={() => handleOpenUpdate(item)}
                                        pay={() => handleOpenEdit(item)}
                                        print={() => handleOpenPrint(item)}
                                        printDisable={item.payment.paymentType == 'Full Payment' ?
                                            item.payment.paymentMade == 0 || item.payment.balance != 0 ? true : false
                                            :
                                            item.payment.paymentMade == 0 ? true : false
                                        }
                                    /></Td>
                                </Tr>
                            ))
                        :
                        ""}

                </TableContainer>
                <ContainerGlobal
                    w='100%'
                    justify='center'>
                    <Pagination
                        page={roomPage}
                        count={reservations.length != 0 && Math.ceil(reservations.length / 10)}
                        onChange={(e, value) => {

                            setRoomPage(value)
                        }}
                    />
                </ContainerGlobal>
            </ContainerGlobal>
































            {/* Approve upload payment Modal */}
            <Modal
                open={openUpload}
                onClose={handleCloseUpload}
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
                        width: '50vw',
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        overflowY: 'overlay',
                        overflowX: 'hidden',
                        padding: '0px 0px 20px 0px',
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
                            Proof of payment
                        </Title>
                        <CloseIcon
                            onClick={handleCloseUpload}
                            style={{
                                color: 'white',
                                cursor: 'pointer',
                                margin: '10px',
                            }} />
                    </div>

                    <ContainerGlobal w='100%' h='100%' direction='column' align='center' justify='center' gap='40px'>

                        <ContainerGlobal w='80%' h='80%' justify='center' align='center' >
                            {
                                reservationSelected.length != 0 &&
                                    reservationSelected.payment.paymentImage != null ?
                                    <a href={apiKey + uploadLink} target="_blank"><img src={apiKey + '' + uploadLink} width="50%" height='auto' /></a>
                                    :
                                    <h1>No Proof of payment uploaded</h1>
                            }
                        </ContainerGlobal>

                        <ContainerGlobal gap='20px'>
                            <Button disabled={reservationSelected.length != 0 ? reservationSelected.payment.paymentStatus == 'pending' || reservationSelected.payment.paymentStatus == 'cancelled' || reservationSelected.payment.paymentStatus == 'reciept declined' ? false : true : ""} variant="contained" color="success" onClick={() => { approveReceipt() }}>Approve</Button>
                            <Button disabled={reservationSelected.length != 0 ? reservationSelected.payment.paymentStatus == 'pending' || reservationSelected.payment.paymentStatus == 'cancelled'|| reservationSelected.payment.paymentStatus == 'reciept declined' ? false : true : ""} variant="contained" color="error" onClick={() => { declineReciept() }}>Decline</Button>
                        </ContainerGlobal>
                        <Button variant="contained" onClick={() => {
                            handleCloseUpload()
                        }}>Close</Button>
                    </ContainerGlobal>
                </Box>

            </Modal>


            {/* Payment modal */}
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
                            Payment
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
                        margin='40px 0px 10px 0px'
                        padding='10px 15px'
                        borderRadius='.5rem'
                    >
                        Payment details
                    </Title>

                    <ContainerGlobalRow>
                        <ContainerGlobalColumn>
                            <ContainerGlobal
                                w='auto'
                                h='auto'
                                direction='row'
                                gap='10px'
                                justify='space-between'
                                align='center'
                                overflow='auto'

                            >

                                <Title
                                    size='20px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='Normal'
                                    weight='bold'
                                    align='left'
                                    margin='15px 0px 20px 0px'
                                >
                                    Reservation Reference Number:
                                </Title>
                                <Title
                                    size='20px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='italic'
                                    weight='normal'
                                    align='left'
                                    margin='15px 0px 20px 0px'
                                >
                                    {reservationInformation.length != 0 && reservationInformation.reservationReferenceNumber}
                                </Title>

                            </ContainerGlobal>
                            <ContainerGlobal
                                w='auto'
                                h='auto'
                                direction='row'
                                gap='10px'
                                justify='space-between'
                                align='center'
                                overflow='auto'

                            >

                                <Title
                                    size='20px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='Normal'
                                    weight='bold'
                                    align='left'
                                    margin='15px 0px 20px 0px'
                                >
                                    Payment Status:
                                </Title>
                                <Title
                                    size='20px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='italic'
                                    weight='normal'
                                    align='left'
                                    margin='15px 0px 20px 0px'
                                >
                                    {reservationInformation.length != 0 ? reservationInformation.payment.paymentStatus : 'none'}
                                </Title>

                            </ContainerGlobal>
                        </ContainerGlobalColumn>
                    </ContainerGlobalRow>
                    <ContainerGlobalRow
                        style={{ gap: '50px' }}
                    >


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
                                    {reservationInformation.length != 0 ? reservationInformation.payment.paymentMode.paymentMode : ""}
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
                                    {reservationInformation.length != 0 ? reservationInformation.payment.paymentType : ""}
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
                                    {reservationInformation.length != 0 ? reservationInformation.payment.discount.discountType : ""}
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
                                            checked={reservationInformation.length != 0 ? reservationInformation.payment.discountValid == true ? true : false : ""}
                                            disabled
                                        />
                                    }
                                    label="Discount Verified?" />
                            </ContainerGlobal>

                        </ContainerGlobalColumn>
                        <ContainerGlobalColumn>
                            {reservationInformation.length != 0 ?
                                reservationInformation.payment.paymentType == 'Full Payment' ? <ContainerGlobal
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
                                        value={reservationInformation.length != 0 ? numberFormat(reservationInformation.payment.grandTotal) : ""}
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
                                            value={reservationInformation.length != 0 ? numberFormat(reservationInformation.payment.grandTotal / 2) : ""}
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
                                    value={reservationInformation.length != 0 ? numberFormat(reservationInformation.payment.paymentMade) : ""}
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
                                    value={reservationInformation.length != 0 ? numberFormat(reservationInformation.payment.grandTotal) : ""}
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
                                    value={reservationInformation.length != 0 ? numberFormat(reservationInformation.payment.balance) : ""}
                                    variant="standard"
                                    style={{ width: 200, margin: '5px 0px', fontWeight: 600 }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </ContainerGlobal>
                        </ContainerGlobalColumn>
                    </ContainerGlobalRow>
                    <ContainerGlobalRow>
                        <ContainerGlobal
                            w='auto'
                            h='auto'
                            direction='row'
                            gap='10px'
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
                                Payment made:
                            </Title>
                            <TextField
                                value={paymentValue}
                                onChange={(e) => {
                                    if (e.target.value < 0 - reservationInformation.payment.paymentMade) {
                                        setPaymentValue(0 - reservationInformation.payment.paymentMade);
                                    }
                                    else if (e.target.value > reservationInformation.payment.grandTotal - reservationInformation.payment.paymentMade) {
                                        setPaymentValue(parseFloat(reservationInformation.payment.grandTotal) - parseFloat(reservationInformation.payment.paymentMade))
                                    }
                                    else {
                                        setPaymentValue(e.target.value);
                                    }
                                }}
                                type='number'
                                id="outlined-basic"
                                label=""
                                variant="standard"
                                onBlur={(e) => {
                                    if (e.target.value == '') {
                                        setPaymentValue(0)
                                    }
                                }}
                                onFocus={(e) => {
                                    e.target.select()
                                }}
                                style={{ width: 150, margin: '5px 0px', fontWeight: 'bold' }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            ₱
                                        </InputAdornment>

                                    ),
                                }}
                            />
                            <Button onClick={() => { payNow() }} disabled={paymentValue == 0 || paymentValue == '' ? true : false} variant='contained' size='small' color='success'>Pay now</Button>

                        </ContainerGlobal>
                    </ContainerGlobalRow>
                    <ContainerGlobalRow>
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
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 0px 0px'
                            >
                                Proof of payment:
                            </Title>
                            {reservationInformation.length != 0 ?
                                <PhotoBox
                                    style={{ padding: '10px' }}>
                                    <div style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
                                        {reservationInformation.payment.paymentImage != null ?
                                            <a target='_blank' href={apiKey + '' + reservationInformation.payment.paymentImage}><img src={apiKey + '' + reservationInformation.payment.paymentImage} style={{ width: '100%', height: 'auto' }} /></a>
                                            : <Title
                                                bg='white'
                                                family='raleway, sans-serif'
                                                color='#BFA698'
                                                weight='400'
                                                size='25px'
                                                fstyle='Normal'

                                                align='Center'
                                            >
                                                No Image Uploaded
                                            </Title>
                                        }
                                    </div>

                                </PhotoBox>
                                :
                                ""

                            }
                            {/* <Button onClick={() => { }} disabled={reservationInformation.length != 0 && reservationInformation.payment.paymentImage != null ? true : false} variant='contained' size='small' color='success'>Upload</Button> */}
                            <Box
                                component='form'
                                onSubmit={uploadImage}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                <div style={{ width: '700px', display: 'flex', justifyContent: 'center' }}>
                                    <p style={{ color: 'red' }}>{previewImageError}</p>
                                    <a target="_blank" href={previewImage}><img src={previewImage} width='200px' height='auto' style={{ border: '1px solid black', cursor: 'pointer' }} /></a>
                                </div>
                                <div
                                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <FormButton
                                        w='200px'
                                        h='30px'
                                        border="none"
                                        margin='20px 0px 0px 0px'
                                        fontsize='16px'
                                        type='file'
                                        textcolor='black'
                                        id='upload'
                                        onChange={handleUpload}
                                    // disabled={reservationInformation.length != 0 && reservationInformation.payment.paymentImage ? true : false}
                                    />
                                    <Button
                                        disabled={previewImageError.length != 0 || previewImage.length == 0 ? true : false}
                                        onClick={uploadImage}
                                        type='submit'
                                        variant='contained'
                                        size='small'
                                        color='success'
                                    >
                                        Upload
                                    </Button>
                                </div>
                            </Box>
                        </ContainerGlobal>
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
                        Charge Summary
                    </Title>
                    <ContainerGlobalRow
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '95%',
                            flexDirection: 'column'
                        }}
                    >


                        <ContainerGlobal
                            w='auto'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='bold'
                                align='left'
                                margin='15px 0px 0px 0px'
                            >
                                Booking summary:
                            </Title>


                        </ContainerGlobal>
                    </ContainerGlobalRow>
                    <ContainerGlobalRow
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '95%'
                        }}
                    >

                        <FlexboxContainer
                            w='70%'
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
                                    <Th align='left' color='black'>Room number</Th>
                                    <Th align='center' color='black'>Room type</Th>
                                    {/* <Th align='center' color='black'>Check in</Th>
                                    <Th align='center' color='black'>Check out</Th>
                                    <Th align='center' color='black'>Adults</Th>
                                    <Th align='center' color='black'>Kids</Th> */}
                                    <Th align='center' color='black'>Total nights</Th>
                                    <Th align='center' color='black'>Rate per night</Th>
                                    <Th align='right' color='black'>Total amout due</Th>
                                </Tr>
                                {reservationSummaryInfo.length != 0 ?

                                    reservationSummaryInfo.map((item, index) => (
                                        <Tr>

                                            <Td align='left' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{item.roomNumber}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{item.roomType}</Td>
                                            {/* <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{new Date(item.checkInDate).toLocaleDateString()}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{new Date(item.checkOutDate).toLocaleDateString()}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{item.adults}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{item.kids}</Td> */}
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{item.numberOfNights}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{numberFormat(item.roomRate)}</Td>
                                            <Td align='right' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: 'red' }}>{numberFormat(item.total)}</Td>


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
                    <ContainerGlobalRow
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '95%',
                            flexDirection: 'column',
                            gap: '10px'
                        }}
                    >
                        <ContainerGlobal
                            w='auto'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='bold'
                                align='left'
                                margin='45px 0px 0px 0px'
                            >
                                Additional Charges Summary:
                            </Title>


                        </ContainerGlobal>
                        {/* 
                        <ContainerGlobal
                            w='400px'
                            h='auto'
                            direction='row'
                            gap='40px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='normal'
                                align='left'
                            >
                                Additional Matress:
                            </Title>
                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='normal'
                                align='left'
                            >
                                {orderedAmenities.length != 0 && orderedAmenities.filter((obj) => obj.amenity.amenityName == "Extra Mattress").map((item) => item.quantity).reduce((accumulator, value) => accumulator + value)}x
                            </Title>


                        </ContainerGlobal>
                        <ContainerGlobal
                            w='400px'
                            h='auto'
                            direction='row'
                            gap='40px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='normal'
                                align='left'
                            >
                                Additional Pillow:
                            </Title>
                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='normal'
                                align='left'
                            >
                                {orderedAmenities.length != 0 && orderedAmenities.filter((obj) => obj.amenity.amenityName == "Extra Pillow").map((item) => item.quantity).reduce((accumulator, value) => accumulator + value)}x
                            </Title>


                        </ContainerGlobal>
                        <ContainerGlobal
                            w='400px'
                            h='auto'
                            direction='row'
                            gap='40px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='normal'
                                align='left'
                            >
                                Additional Blanket:
                            </Title>
                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='normal'
                                align='left'
                            >
                                {orderedAmenities.length != 0 && orderedAmenities.filter((obj) => obj.amenity.amenityName == "Extra Blanket").map((item) => item.quantity).reduce((accumulator, value) => accumulator + value)}x
                            </Title>


                        </ContainerGlobal>
                        <ContainerGlobal
                            w='400px'
                            h='auto'
                            direction='row'
                            gap='40px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='normal'
                                align='left'
                            >
                                Additional Time(/hour):
                            </Title>
                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='normal'
                                align='left'
                            >
                                {orderedAmenities.length != 0 && orderedAmenities.filter((obj) => obj.amenity.amenityName == "Extra Time(Rate/hour)").map((item) => item.quantity).reduce((accumulator, value) => accumulator + value)}x
                            </Title>


                        </ContainerGlobal>
                        <ContainerGlobal
                            w='400px'
                            h='auto'
                            direction='row'
                            gap='40px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='normal'
                                align='left'
                            >
                                Additional Pillow:
                            </Title>
                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='normal'
                                align='left'
                            >
                                {orderedAmenities.length != 0 && orderedAmenities.filter((obj) => obj.amenity.amenityName == "Extra Pillow").map((item) => item.quantity).reduce((accumulator, value) => accumulator + value)}x
                            </Title>


                        </ContainerGlobal>
                        <ContainerGlobal
                            w='400px'
                            h='auto'
                            direction='row'
                            gap='40px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='normal'
                                align='left'
                            >
                                Others:
                            </Title>
                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='normal'
                                align='left'
                            >
                                {reservationSummaryInfo.length != 0 && numberFormat(reservationSummaryInfo.map((item) => item.others).reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value)))}
                            </Title>


                        </ContainerGlobal> */}
                    </ContainerGlobalRow>
                    <ContainerGlobalRow
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '95%'
                        }}
                    >

                        <FlexboxContainer
                            w='70%'
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
                                    <Th align='left' color='black'>Additionals</Th>
                                    <Th align='center' color='black'>Quantity</Th>
                                    <Th align='center' color='black'>Rate</Th>
                                    <Th align='right' color='black'>Total Amount Due</Th>
                                </Tr>
                                {amenities.length != 0 ?

                                    amenities.map((item, index) => (
                                        <Tr>

                                            <Td align='left'>{item.amenityName}</Td>
                                            <Td align='center'>{orderedAmenities.filter((obj) => obj.amenity.amenityName == item.amenityName).map((item) => item.quantity).reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value), 0)}</Td>
                                            <Td align='center'>{numberFormat(parseFloat(orderedAmenities.filter((obj) => obj.amenity.amenityName == item.amenityName).map((item, index, array) => index == 0 && item.amenityRate)))}</Td>
                                            <Td align='right' style={{ color: 'red' }}>{numberFormat(orderedAmenities.filter((obj) => obj.amenity.amenityName == item.amenityName).map((item) => item.total).reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value), 0))}</Td>
                                            {/* <Td align='center'>{item.adults}</Td>
                                            <Td align='center'>{item.kids}</Td>
                                            <Td align='center'>{item.numberOfNights}</Td>
                                            <Td align='center'>{numberFormat(item.room.roomType.roomRate)}</Td>
                                            <Td align='center'>{numberFormat(item.room.roomType.roomRate * item.numberOfNights)}</Td> */}


                                        </Tr>

                                    ))
                                    :

                                    ""}
                                <Tr>

                                    <Td align='left'><i>Others</i></Td>
                                    <Td align='center'></Td>
                                    <Td align='center'></Td>
                                    <Td align='right' style={{ color: 'red' }}>{reservationSummaryInfo.length != 0 && numberFormat(reservationSummaryInfo.map((item) => item.others).reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value), 0))}</Td>



                                </Tr>

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
                                    value={reservationInformation.length != 0 ? reservationInformation.guestInformation.firstName.toLocaleLowerCase() : ""}
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
                                    value={reservationInformation.length != 0 ? reservationInformation.guestInformation.lastName.toLocaleLowerCase() : ""}
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
                                    value={reservationInformation.length != 0 ? reservationInformation.guestInformation.user.email.toLocaleLowerCase() : ""}
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
                                    value={reservationInformation.length != 0 ? reservationInformation.guestInformation.user.contactNumber : ""}
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
                                        value={reservationInformation.length != 0 ? reservationInformation.guestInformation.birthDate : ""}
                                        onChange={(newValue) => {
                                            setBirthDay(newValue);
                                        }}
                                        renderInput={(params) =>
                                            <TextField
                                                {...params}
                                                variant="standard"
                                                style={{ width: "55%", margin: '5px 0px' }}
                                                helperText={null}

                                                disabled
                                            />
                                        }
                                        disabled
                                    />

                                </LocalizationProvider>

                                <FormControl sx={{ width: "55%", margin: '5px 0px' }} size="small" variant="standard">
                                    <InputLabel id="demo-select-small" >Nationality</InputLabel>
                                    <Select
                                        style={{ color: 'black', textAlign: 'left' }}
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={reservationInformation.length != 0 ? reservationInformation.guestInformation.nationality : ""}
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
                                        value={reservationInformation.length != 0 ? reservationInformation.guestInformation.gender : ""}
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
                                    value={reservationInformation.length != 0 ? reservationInformation.guestInformation.address : ""}
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
                        handleCloseEdit()
                    }}>Close</Button>
                </Box>
            </Modal>

            {/* View Payment modal */}
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
                            View Payment
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
                        margin='40px 0px 10px 0px'
                        padding='10px 15px'
                        borderRadius='.5rem'
                    >
                        Payment details
                    </Title>

                    <ContainerGlobalRow>
                        <ContainerGlobalColumn>
                            <ContainerGlobal
                                w='auto'
                                h='auto'
                                direction='row'
                                gap='10px'
                                justify='space-between'
                                align='center'
                                overflow='auto'

                            >

                                <Title
                                    size='20px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='Normal'
                                    weight='bold'
                                    align='left'
                                    margin='15px 0px 20px 0px'
                                >
                                    Reservation Reference Number:
                                </Title>
                                <Title
                                    size='20px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='italic'
                                    weight='normal'
                                    align='left'
                                    margin='15px 0px 20px 0px'
                                >
                                    {reservationInformation.length != 0 && reservationInformation.reservationReferenceNumber}
                                </Title>

                            </ContainerGlobal>
                            <ContainerGlobal
                                w='auto'
                                h='auto'
                                direction='row'
                                gap='10px'
                                justify='space-between'
                                align='center'
                                overflow='auto'

                            >

                                <Title
                                    size='20px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='Normal'
                                    weight='bold'
                                    align='left'
                                    margin='15px 0px 20px 0px'
                                >
                                    Payment Status:
                                </Title>
                                <Title
                                    size='20px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='italic'
                                    weight='normal'
                                    align='left'
                                    margin='15px 0px 20px 0px'
                                >
                                    {reservationInformation.length != 0 && reservationInformation.payment.paymentStatus}
                                </Title>

                            </ContainerGlobal>
                        </ContainerGlobalColumn>
                    </ContainerGlobalRow>
                    <ContainerGlobalRow
                        style={{ gap: '50px' }}
                    >


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
                                    {reservationInformation.length != 0 ? reservationInformation.payment.paymentMode.paymentMode : ""}
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
                                    {reservationInformation.length != 0 ? reservationInformation.payment.paymentType : ""}
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
                                    {reservationInformation.length != 0 ? reservationInformation.payment.discount.discountType : ""}
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
                                            checked={reservationInformation.length != 0 ? reservationInformation.payment.discountValid == true ? true : false : ""}
                                            disabled
                                        />
                                    }
                                    label="Discount Verified?" />
                            </ContainerGlobal>

                        </ContainerGlobalColumn>
                        <ContainerGlobalColumn>
                            {reservationInformation.length != 0 ?
                                reservationInformation.payment.paymentType == 'Full Payment' ? <ContainerGlobal
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
                                        value={reservationInformation.length != 0 ? numberFormat(reservationInformation.payment.grandTotal) : ""}
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
                                            value={reservationInformation.length != 0 ? numberFormat(reservationInformation.payment.grandTotal / 2) : ""}
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
                                    value={reservationInformation.length != 0 ? numberFormat(reservationInformation.payment.paymentMade) : ""}
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
                                    value={reservationInformation.length != 0 ? numberFormat(reservationInformation.payment.grandTotal) : ""}
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
                                    value={reservationInformation.length != 0 ? numberFormat(reservationInformation.payment.balance) : ""}
                                    variant="standard"
                                    style={{ width: 200, margin: '5px 0px', fontWeight: 600 }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </ContainerGlobal>
                        </ContainerGlobalColumn>
                    </ContainerGlobalRow>

                    <ContainerGlobalRow>
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
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 0px 0px'
                            >
                                Proof of payment:
                            </Title>
                            {reservationInformation.length != 0 ?
                                <PhotoBox
                                    style={{ padding: '10px' }}>
                                    <div style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
                                        {reservationInformation.payment.paymentImage != null ?
                                            <a target='_blank' href={apiKey + '' + reservationInformation.payment.paymentImage}><img src={apiKey + '' + reservationInformation.payment.paymentImage} style={{ width: '100%', height: 'auto' }} /></a>
                                            : <Title
                                                bg='white'
                                                family='raleway, sans-serif'
                                                color='#BFA698'
                                                weight='400'
                                                size='25px'
                                                fstyle='Normal'

                                                align='Center'
                                            >
                                                No Image Uploaded
                                            </Title>
                                        }
                                    </div>

                                </PhotoBox>
                                :
                                ""

                            }
                            {/* <Button onClick={() => { }} disabled={reservationInformation.length != 0 && reservationInformation.payment.paymentImage != null ? true : false} variant='contained' size='small' color='success'>Upload</Button> */}

                        </ContainerGlobal>
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
                        Charge Summary
                    </Title>
                    <ContainerGlobalRow
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '95%',
                            flexDirection: 'column'
                        }}
                    >


                        <ContainerGlobal
                            w='auto'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='bold'
                                align='left'
                                margin='15px 0px 0px 0px'
                            >
                                Booking summary:
                            </Title>


                        </ContainerGlobal>
                    </ContainerGlobalRow>
                    <ContainerGlobalRow
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '95%'
                        }}
                    >

                        <FlexboxContainer
                            w='70%'
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
                                    <Th align='left' color='black'>Room number</Th>
                                    <Th align='center' color='black'>Room type</Th>
                                    {/* <Th align='center' color='black'>Check in</Th>
                                    <Th align='center' color='black'>Check out</Th>
                                    <Th align='center' color='black'>Adults</Th>
                                    <Th align='center' color='black'>Kids</Th> */}
                                    <Th align='center' color='black'>Total nights</Th>
                                    <Th align='center' color='black'>Rate per night</Th>
                                    <Th align='right' color='black'>Total amout due</Th>
                                </Tr>
                                {reservationSummaryInfo.length != 0 ?

                                    reservationSummaryInfo.map((item, index) => (
                                        <Tr>

                                            <Td align='left' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{item.roomNumber}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{item.roomType}</Td>
                                            {/* <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{new Date(item.checkInDate).toLocaleDateString()}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{new Date(item.checkOutDate).toLocaleDateString()}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{item.adults}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{item.kids}</Td> */}
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{item.numberOfNights}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{numberFormat(item.roomRate)}</Td>
                                            <Td align='right' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: 'red' }}>{numberFormat(item.total)}</Td>


                                        </Tr>

                                    ))
                                    :

                                    ""}

                            </TableContainer>


                        </FlexboxContainer>
                    </ContainerGlobalRow>
                    <ContainerGlobalRow
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '95%',
                            flexDirection: 'column',
                            gap: '10px'
                        }}
                    >
                        <ContainerGlobal
                            w='auto'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='bold'
                                align='left'
                                margin='45px 0px 0px 0px'
                            >
                                Additional Charges Summary:
                            </Title>


                        </ContainerGlobal>

                    </ContainerGlobalRow>
                    <ContainerGlobalRow
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '95%'
                        }}
                    >

                        <FlexboxContainer
                            w='70%'
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
                                    <Th align='left' color='black'>Additionals</Th>
                                    <Th align='center' color='black'>Quantity</Th>
                                    <Th align='center' color='black'>Rate</Th>
                                    <Th align='right' color='black'>Total Amount Due</Th>
                                </Tr>
                                {amenities.length != 0 ?

                                    amenities.map((item, index) => (
                                        <Tr>

                                            <Td align='left'>{item.amenityName}</Td>
                                            <Td align='center'>{orderedAmenities.filter((obj) => obj.amenity.amenityName == item.amenityName).map((item) => item.quantity).reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value), 0)}</Td>
                                            <Td align='center'>{numberFormat(parseFloat(orderedAmenities.filter((obj) => obj.amenity.amenityName == item.amenityName).map((item, index, array) => index == 0 && item.amenityRate)))}</Td>
                                            <Td align='right' style={{ color: 'red' }}>{numberFormat(orderedAmenities.filter((obj) => obj.amenity.amenityName == item.amenityName).map((item) => item.total).reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value), 0))}</Td>
                                            {/* <Td align='center'>{item.adults}</Td>
                                            <Td align='center'>{item.kids}</Td>
                                            <Td align='center'>{item.numberOfNights}</Td>
                                            <Td align='center'>{numberFormat(item.room.roomType.roomRate)}</Td>
                                            <Td align='center'>{numberFormat(item.room.roomType.roomRate * item.numberOfNights)}</Td> */}


                                        </Tr>

                                    ))
                                    :

                                    ""}
                                <Tr>

                                    <Td align='left'><i>Others</i></Td>
                                    <Td align='center'></Td>
                                    <Td align='center'></Td>
                                    <Td align='right' style={{ color: 'red' }}>{reservationSummaryInfo.length != 0 && numberFormat(reservationSummaryInfo.map((item) => item.others).reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value), 0))}</Td>



                                </Tr>

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
                                    value={reservationInformation.length != 0 ? reservationInformation.guestInformation.firstName.toLocaleLowerCase() : ""}
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
                                    value={reservationInformation.length != 0 ? reservationInformation.guestInformation.lastName.toLocaleLowerCase() : ""}
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
                                    value={reservationInformation.length != 0 ? reservationInformation.guestInformation.user.email.toLocaleLowerCase() : ""}
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
                                    value={reservationInformation.length != 0 ? reservationInformation.guestInformation.user.contactNumber : ""}
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
                                        value={reservationInformation.length != 0 ? reservationInformation.guestInformation.birthDate : ""}
                                        onChange={(newValue) => {
                                            setBirthDay(newValue);
                                        }}
                                        renderInput={(params) =>
                                            <TextField
                                                {...params}
                                                variant="standard"
                                                style={{ width: "55%", margin: '5px 0px' }}
                                                helperText={null}

                                                disabled
                                            />
                                        }
                                        disabled
                                    />

                                </LocalizationProvider>

                                <FormControl sx={{ width: "55%", margin: '5px 0px' }} size="small" variant="standard">
                                    <InputLabel id="demo-select-small" >Nationality</InputLabel>
                                    <Select
                                        style={{ color: 'black', textAlign: 'left' }}
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={reservationInformation.length != 0 ? reservationInformation.guestInformation.nationality : ""}
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
                                        value={reservationInformation.length != 0 ? reservationInformation.guestInformation.gender : ""}
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
                                    value={reservationInformation.length != 0 ? reservationInformation.guestInformation.address : ""}
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


            {/* Edit Payment Modal */}
            <Modal
                open={openUpdate}
                onClose={handleCloseUpdate}
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
                            Edit Payment
                        </Title>
                        <CloseIcon
                            onClick={handleCloseUpdate}
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
                        margin='40px 0px 10px 0px'
                        padding='10px 15px'
                        borderRadius='.5rem'
                    >
                        Payment details
                    </Title>

                    <ContainerGlobalRow>
                        <ContainerGlobalColumn>
                            <ContainerGlobal
                                w='auto'
                                h='auto'
                                direction='row'
                                gap='10px'
                                justify='space-between'
                                align='center'
                                overflow='auto'

                            >

                                <Title
                                    size='20px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='Normal'
                                    weight='bold'
                                    align='left'
                                    margin='15px 0px 20px 0px'
                                >
                                    Reservation Reference Number:
                                </Title>
                                <Title
                                    size='20px'
                                    color='Black'
                                    family='Helvetica'
                                    fstyle='italic'
                                    weight='normal'
                                    align='left'
                                    margin='15px 0px 20px 0px'
                                >
                                    {reservationInformation.length != 0 && reservationInformation.reservationReferenceNumber}
                                </Title>

                            </ContainerGlobal>

                        </ContainerGlobalColumn>
                    </ContainerGlobalRow>
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
                                Payment Status:
                            </Title>

                            <FormControl sx={{ width: 200, margin: '5px 0px' }} size="large" variant="standard">
                                <InputLabel id="demo-select-small" >Payment Status</InputLabel>
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

                                    <MenuItem value='pending' >
                                        Pending
                                    </MenuItem>
                                    <MenuItem value='fully paid' >
                                        Fully Paid
                                    </MenuItem>
                                    <MenuItem value='partial' >
                                        Partial
                                    </MenuItem>
                                    <MenuItem value='cancelled' >
                                        Cancelled
                                    </MenuItem>
                                    <MenuItem value='reciept declined' >
                                        Reciept Declined
                                    </MenuItem>


                                </Select>
                            </FormControl>
                            <Button onClick={() => { updadatePaymentStatus() }} size="small" variant='contained' style={reservationInformation.length != 0 && reservationInformation.payment.paymentStatus == reservationStatus ? { display: 'none' } : { display: '' }}>Update</Button>
                        </ContainerGlobal>
                    </ContainerGlobalRow>
                    <ContainerGlobalRow
                        style={{ gap: '50px' }}
                    >


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
                                            <MenuItem value={item.paymentMode}>{item.paymentMode}</MenuItem>

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
                                        <MenuItem value={'Down Payment'} >Down Payment</MenuItem>
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
                                                if (reservationInformation.payment.discountValid == true) {

                                                    setDiscountValid(false)
                                                    setGrandTotal(reservationInformation.payment.grandTotal / 0.80 * 1.12)

                                                }
                                                else if (reservationInformation.payment.discountValid == false) {

                                                    setGrandTotal(reservationInformation.payment.grandTotal)
                                                    setDiscountValid(false)
                                                }
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
                                                if (reservationInformation.payment.discountValid == true) {
                                                    if (e.target.checked) {
                                                        setDiscountValid(true)
                                                        setGrandTotal(reservationInformation.payment.grandTotal)

                                                    }
                                                    else {
                                                        setDiscountValid(false)
                                                        setGrandTotal(reservationInformation.payment.grandTotal / 0.80 * 1.12)
                                                    }
                                                }
                                                else if (reservationInformation.payment.discountValid == false) {
                                                    if (e.target.checked) {
                                                        setDiscountValid(true)
                                                        setGrandTotal(reservationInformation.payment.grandTotal / 1.12 * 0.80)
                                                    }
                                                    else {
                                                        setGrandTotal(reservationInformation.payment.grandTotal)
                                                        setDiscountValid(false)
                                                    }
                                                }
                                            }}
                                        />
                                    }
                                    label="Discount Verified?" />
                            </ContainerGlobal>

                        </ContainerGlobalColumn>
                        <ContainerGlobalColumn>
                            {reservationInformation.length != 0 ?
                                paymentType == 'Full Payment' ? <ContainerGlobal
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
                                        value={reservationInformation.length != 0 ? numberFormat(grandTotal) : ""}
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
                                            value={reservationInformation.length != 0 ? numberFormat(grandTotal / 2) : ""}
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
                                    value={reservationInformation.length != 0 ? numberFormat(reservationInformation.payment.paymentMade) : ""}
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
                                    value={reservationInformation.length != 0 ? numberFormat(grandTotal) : ""}
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
                                    value={reservationInformation.length != 0 ? numberFormat(parseFloat(grandTotal) - parseFloat(reservationInformation.payment.paymentMade)) : ""}
                                    variant="standard"
                                    style={{ width: 200, margin: '5px 0px', fontWeight: 600 }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </ContainerGlobal>
                        </ContainerGlobalColumn>
                    </ContainerGlobalRow>

                    <ContainerGlobalRow>
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
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='400'
                                align='left'
                                margin='15px 0px 0px 0px'
                            >
                                Proof of payment:
                            </Title>
                            {reservationInformation.length != 0 ?
                                <PhotoBox
                                    style={{ padding: '10px' }}>
                                    <div style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
                                        {reservationInformation.payment.paymentImage != null ?
                                            <a target='_blank' href={apiKey + '' + reservationInformation.payment.paymentImage}><img src={apiKey + '' + reservationInformation.payment.paymentImage} style={{ width: '100%', height: 'auto' }} /></a>
                                            : <Title
                                                bg='white'
                                                family='raleway, sans-serif'
                                                color='#BFA698'
                                                weight='400'
                                                size='25px'
                                                fstyle='Normal'

                                                align='Center'
                                            >
                                                No Image Uploaded
                                            </Title>
                                        }
                                    </div>

                                </PhotoBox>
                                :
                                ""

                            }
                            {/* <Button onClick={() => { }} disabled={reservationInformation.length != 0 && reservationInformation.payment.paymentImage != null ? true : false} variant='contained' size='small' color='success'>Upload</Button> */}
                            <Box
                                component='form'
                                onSubmit={uploadImage}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                <div style={{ width: '700px', display: 'flex', justifyContent: 'center' }}>
                                    <p style={{ color: 'red' }}>{previewImageError}</p>
                                    <a target="_blank" href={previewImage}><img src={previewImage} width='200px' height='auto' style={{ border: '1px solid black', cursor: 'pointer' }} /></a>
                                </div>
                                <div
                                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <FormButton
                                        w='200px'
                                        h='30px'
                                        border="none"
                                        margin='0px 0px 30px 0px'
                                        fontsize='16px'
                                        type='file'
                                        textcolor='black'
                                        id='upload'
                                        onChange={handleUpload}
                                    // disabled={reservationInformation.length != 0 && reservationInformation.payment.paymentImage ? true : false}
                                    />

                                </div>
                            </Box>
                        </ContainerGlobal>

                    </ContainerGlobalRow>
                    <ContainerGlobalRow>
                        <Button
                            onClick={savePayment}
                            type='submit'
                            variant='contained'
                            size='small'
                            color='success'
                        >
                            Save
                        </Button>
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
                        Charge Summary
                    </Title>
                    <ContainerGlobalRow
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '95%',
                            flexDirection: 'column'
                        }}
                    >


                        <ContainerGlobal
                            w='auto'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='bold'
                                align='left'
                                margin='15px 0px 0px 0px'
                            >
                                Booking summary:
                            </Title>


                        </ContainerGlobal>
                    </ContainerGlobalRow>
                    <ContainerGlobalRow
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '95%'
                        }}
                    >

                        <FlexboxContainer
                            w='70%'
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
                                    <Th align='left' color='black'>Room number</Th>
                                    <Th align='center' color='black'>Room type</Th>
                                    {/* <Th align='center' color='black'>Check in</Th>
                                    <Th align='center' color='black'>Check out</Th>
                                    <Th align='center' color='black'>Adults</Th>
                                    <Th align='center' color='black'>Kids</Th> */}
                                    <Th align='center' color='black'>Total nights</Th>
                                    <Th align='center' color='black'>Rate per night</Th>
                                    <Th align='right' color='black'>Total amout due</Th>
                                </Tr>
                                {reservationSummaryInfo.length != 0 ?

                                    reservationSummaryInfo.map((item, index) => (
                                        <Tr>

                                            <Td align='left' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{item.roomNumber}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{item.roomType}</Td>
                                            {/* <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{new Date(item.checkInDate).toLocaleDateString()}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{new Date(item.checkOutDate).toLocaleDateString()}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{item.adults}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{item.kids}</Td> */}
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{item.numberOfNights}</Td>
                                            <Td align='center' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: '' }}>{numberFormat(item.roomRate)}</Td>
                                            <Td align='right' style={item.id == editReservationId ? { backgroundColor: 'green', color: 'white' } : { backgroundColor: '', color: 'red' }}>{numberFormat(item.total)}</Td>


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
                    <ContainerGlobalRow
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '95%',
                            flexDirection: 'column',
                            gap: '10px'
                        }}
                    >
                        <ContainerGlobal
                            w='auto'
                            h='auto'
                            direction='row'
                            gap='10px'
                            justify='space-between'
                            align='center'
                            overflow='auto'

                        >

                            <Title
                                size='20px'
                                color='Black'
                                family='Helvetica'
                                fstyle='Normal'
                                weight='bold'
                                align='left'
                                margin='45px 0px 0px 0px'
                            >
                                Additional Charges Summary:
                            </Title>


                        </ContainerGlobal>
                    </ContainerGlobalRow>
                    <ContainerGlobalRow
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '95%'
                        }}
                    >

                        <FlexboxContainer
                            w='70%'
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
                                    <Th align='left' color='black'>Additionals</Th>
                                    <Th align='center' color='black'>Quantity</Th>
                                    <Th align='center' color='black'>Rate</Th>
                                    <Th align='right' color='black'>Total Amount Due</Th>
                                </Tr>
                                {amenities.length != 0 ?

                                    amenities.map((item, index) => (
                                        <Tr>

                                            <Td align='left'>{item.amenityName}</Td>
                                            <Td align='center'>{orderedAmenities.filter((obj) => obj.amenity.amenityName == item.amenityName).map((item) => item.quantity).reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value), 0)}</Td>
                                            <Td align='center'>{numberFormat(parseFloat(orderedAmenities.filter((obj) => obj.amenity.amenityName == item.amenityName).map((item, index, array) => index == 0 && item.amenityRate)))}</Td>
                                            <Td align='right' style={{ color: 'red' }}>{numberFormat(orderedAmenities.filter((obj) => obj.amenity.amenityName == item.amenityName).map((item) => item.total).reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value), 0))}</Td>
                                            {/* <Td align='center'>{item.adults}</Td>
                                            <Td align='center'>{item.kids}</Td>
                                            <Td align='center'>{item.numberOfNights}</Td>
                                            <Td align='center'>{numberFormat(item.room.roomType.roomRate)}</Td>
                                            <Td align='center'>{numberFormat(item.room.roomType.roomRate * item.numberOfNights)}</Td> */}


                                        </Tr>

                                    ))
                                    :

                                    ""}
                                <Tr>

                                    <Td align='left'><i>Others</i></Td>
                                    <Td align='center'></Td>
                                    <Td align='center'></Td>
                                    <Td align='right' style={{ color: 'red' }}>{reservationSummaryInfo.length != 0 && numberFormat(reservationSummaryInfo.map((item) => item.others).reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value), 0))}</Td>



                                </Tr>

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
                                    value={reservationInformation.length != 0 ? reservationInformation.guestInformation.firstName.toLocaleLowerCase() : ""}
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
                                    value={reservationInformation.length != 0 ? reservationInformation.guestInformation.lastName.toLocaleLowerCase() : ""}
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
                                    value={reservationInformation.length != 0 ? reservationInformation.guestInformation.user.email.toLocaleLowerCase() : ""}
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
                                    value={reservationInformation.length != 0 ? reservationInformation.guestInformation.user.contactNumber : ""}
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
                                        value={reservationInformation.length != 0 ? reservationInformation.guestInformation.birthDate : ""}
                                        onChange={(newValue) => {
                                            setBirthDay(newValue);
                                        }}
                                        renderInput={(params) =>
                                            <TextField
                                                {...params}
                                                variant="standard"
                                                style={{ width: "55%", margin: '5px 0px' }}
                                                helperText={null}
                                                disabled
                                            />
                                        }
                                        disabled
                                    />

                                </LocalizationProvider>

                                <FormControl sx={{ width: "55%", margin: '5px 0px' }} size="small" variant="standard">
                                    <InputLabel id="demo-select-small" >Nationality</InputLabel>
                                    <Select
                                        style={{ color: 'black', textAlign: 'left' }}
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={reservationInformation.length != 0 ? reservationInformation.guestInformation.nationality : ""}
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
                                        value={reservationInformation.length != 0 ? reservationInformation.guestInformation.gender : ""}
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
                                    value={reservationInformation.length != 0 ? reservationInformation.guestInformation.address : ""}
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
                        handleCloseUpdate()
                    }}>Close</Button>
                </Box>
            </Modal>

            {/* Open Print modal */}
            <Modal
                open={openPrint}
                onClose={handleClosePrint}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Box
                    component='form'
                    // onSubmit={addReservation}
                    style={{
                        height: 'auto',
                        width: '30vw',
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        overflowY: 'overlay',
                        overflowX: 'hidden',
                        padding: '0px 0px 20px 0px',
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
                            Print or Download receipt
                        </Title>
                        <CloseIcon
                            onClick={handleClosePrint}
                            style={{
                                color: 'white',
                                cursor: 'pointer',
                                margin: '10px',
                            }} />
                    </div>
                    <ContainerGlobal direction='column' align='center' justify='center' gap='40px' margin='20px 0px'>

                        <ContainerGlobal gap='20px'>
                            <Button variant="contained" style={{ width: '150px', backgroundColor: '#948566' }} onClick={() => { viewReceipt() }} >View</Button>
                            <Button variant="contained" color='success' style={{ width: '150px' }} onClick={() => { downloadReceipt() }}>Download</Button>
                            <Button variant="contained" style={{ width: '150px' }} onClick={() => { printReceipt() }}>Print</Button>
                        </ContainerGlobal>
                    </ContainerGlobal>
                </Box>

            </Modal>
        </Container >
    )
}

export default PaymentContainer