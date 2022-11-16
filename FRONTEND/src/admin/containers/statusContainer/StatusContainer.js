import React, { useEffect, useRef, useState } from 'react'
import { Title } from '../../../client/components/title/styles'
import { ContainerGlobal } from '../../components/container/container'
import { Container, HeadContainer, TableContainer, Td, Th, Tr } from './style'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { FormControlLabel, FormControl, Modal, Radio, FormLabel, RadioGroup, Link } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Select from '@mui/material/Select';
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ActionButton from '../../components/actionButton/ActionButton';
import InformationForm from '../../../client/containers/informationForm/InformationForm';
import { AdminInformationForm, AdminInformationFormFilled, AdminInformationFormFilledEdit } from '../adminInformationForm/AdminInformationForm';
import Grow from '@mui/material/Grow';
import { apiKey } from '../../../apiKey';
import axios from 'axios';
import { Box } from '@mui/system';
import { InputContainer } from '../../../client/containers/informationForm/style';
import { Button2, FormButton } from '../../../client/components/button/styles';
import { nationalities } from '../../../nationalities';
import { Pagination } from '@mui/material'
import moment from 'moment';
import logo from '../../../client/images/logo.png'
import { CircularProgress } from '@mui/material';
import { CheckCircleOutline, Close, HighlightOffSharp } from '@mui/icons-material';
const StatusContainer = () => {
    let letters = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    let phoneNumberValidation = /^(09|\+639)\d{9}$/;
    let passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\| ])[A-Za-z\d -._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]{8,}/;




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

    const [roomPage, setRoomPage] = useState(1)

    const [value, setValue] = useState(Date.now());
    const color = "#c44242";
    const [age, setAge] = React.useState('');

    const [showDetails, setShowDetails] = useState(false);

    const [showDetails2, setShowDetails2] = useState(false);
    const [showDetails3, setShowDetails3] = useState(false);

    const [guests, setGuests] = useState([])
    const [reservationSummary, setReservationSummary] = useState([])

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('Juan');
    const [nationality, setNationality] = useState('');
    const [contactNumber, setcontactNumber] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [gender, setGender] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');



    const [userInformation, setUserInformation] = useState([])



    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [contactNumberError, setContactNumberError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [genderError, setGenderError] = useState('male');
    const [addressError, setAddressError] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [oldPasswordError, setOldPasswordError] = useState("");
    const [newPasswordError, setNewPasswordError] = useState("");


    const emailRef = useRef();
    const contactNumberRef = useRef();
    const userNameRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const oldPasswordRef = useRef();
    const newPasswordRef = useRef();

    const [accountActive, setAccountActive] = useState(true);

    useEffect(() => {

        axios.get(apiKey + "api/getAllGuest").then((result) => {
            setGuests(result.data.filter((obj) => obj.user.role != 'ADMIN' && obj.user.role != 'STAFF'))
            axios.get(apiKey + "api/getAllReservationSummary").then((result) => {
                setReservationSummary(result.data)
            }).catch((err) => {
                console.log(err)
            });

        }).catch((err) => {
            console.log(err)
        });

    }, [])

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleOpen = (value) => {
        setOpen(true)
        setFirstName(value.firstName);
        setLastName(value.lastName);
        setEmail(value.user.email);
        setcontactNumber(value.user.contactNumber);
        setBirthDay(value.birthDate);
        setNationality(value.nationality);
        setGender(value.gender);
        setAddress(value.address);
        setAccountActive(value.user.status)
        setUserInformation(value)
        setUsername(value.user.userName)

    };
    const handleClose = () => {
        setOpen(false)
        setFirstName('');
        setLastName('');
        setEmail('');
        setcontactNumber('');
        setBirthDay('');
        setNationality('');
        setGender('');
        setAddress('');
        setAccountActive(true)
        setUserInformation([])
        setUsername('')


    };
    const handleOpen2 = (value) => {
        setOpen2(true)
        setFirstName(value.firstName);
        setLastName(value.lastName);
        setEmail(value.user.email);
        setcontactNumber(value.user.contactNumber);
        setBirthDay(value.birthDate);
        setNationality(value.nationality);
        setGender(value.gender);
        setAddress(value.address);
        setUserInformation(value)
        setAccountActive(value.user.status)
        setUsername(value.user.userName)

    };
    const handleClose2 = () => {
        setOpen2(false)
        setFirstName('');
        setLastName('');
        setEmail('');
        setcontactNumber('');
        setBirthDay('');
        setNationality('');
        setGender('');
        setAddress('');
        setUserInformation([])
        setAccountActive(true)
        setUsername('')
    };


    const updateUser = (e) => {
        e.preventDefault();
        console.log('asdsa')
        if (firstNameError.length != 0) {
            firstNameRef.current.focus()
        }
        else if (lastNameError.length != 0) {
            lastNameRef.current.focus()

        }
        else if (contactNumberError.length != 0) {
            contactNumberRef.current.focus()

        }
        else {
            // handleOpenIsLoading();
            let formatNumber;
            if (contactNumber.slice(0, 3) == "+63") {

                formatNumber = contactNumber.replace("+63", "0");

            }
            else {
                formatNumber = contactNumber;
            }
            if (emailError.length == 0 && contactNumberError.length == 0 && userNameError.length == 0) {
                handleOpenIsLoading();
                axios.patch(apiKey + 'api/updateUsers/' + userInformation.user.id, {
                    email: email,
                    contactNumber: formatNumber,
                    status: accountActive,
                }).then((result) => {
                    console.log(result.data);
                    axios.patch(apiKey + 'api/updateGuest/' + userInformation.id, {
                        firstName: firstName,
                        lastName: lastName,
                        birthDate: new Date(Date.parse(new Date(birthDay)) + 86400000),
                        gender: gender,
                        address: address,
                        nationality: nationality
                    }).then((result) => {
                        console.log(result.data);
                        handleClose()
                        handleCloseIsLoading(2, '')
                        window.location.reload()
                    }).catch((err) => {
                        handleCloseIsLoading(3)

                    });
                }).catch((err) => {
                    handleCloseIsLoading(3)

                });


            }
        }

    }




    useEffect(() => {
        if (userInformation.length != 0) {
            if (userInformation.user.role != 'NON-USER') {

                axios.get(apiKey + 'api/getAllUsers').then((res) => {
                    console.log(res.data)
                    if (res.data.length != 0) {
                        res.data.map((item) => {
                            if (item.role != 'NON-USER' && item.id != userInformation.user.id) {

                                let formatNumber;
                                if (contactNumber.slice(0, 3) == "+63") {

                                    formatNumber = contactNumber.replace("+63", "0");

                                }
                                else {
                                    formatNumber = contactNumber;
                                }

                                if (item.email.toLowerCase() == email.toLowerCase()) {
                                    setEmailError("This email is already taken.")
                                }
                                else if (item.contactNumber == formatNumber) {
                                    setContactNumberError("This number is already taken.")

                                }
                            }

                        })
                    }
                }).catch((err) => {

                });
            }
        }

    }, [email, contactNumber, userInformation])







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
            }}>



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
                    Check guest list
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
                margin='20px 0px 30px 0px'
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
                    Guest lists
                </Title>

                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                ></HorizontalLine>




                <TableContainer>
                    <Tr>
                        <Th align='center'>User Id</Th>
                        <Th align='center'>User Name</Th>
                        <Th align='center'>Guest Name</Th>
                        <Th align='center'>Email</Th>
                        <Th align='center'>Total Bookings</Th>
                        <Th align='center'>Status</Th>
                        <Th align='center'>Account Type</Th>
                        <Th align='center'>Date Created</Th>
                        <Th align='center'>Action</Th>
                    </Tr>


                    {guests.length != 0 ?
                        guests
                            .sort((a, b) => a.firstName.localeCompare(b.firstName))
                            .filter((item) => {
                                if (startDateFilter != null && endDateFilter != null) {
                                    let filterDates = getDates(startDateFilter, endDateFilter);
                                    if (filterDates.includes(moment(item.created_at).format('YYYY-MM-DD'))) {
                                        return item
                                    }
                                }
                                else {
                                    return item
                                }
                            })
                            .filter((item) => {
                                if (search != '') {
                                    if (new Date(item.created_at).toLocaleDateString().includes(search)
                                        || (item.firstName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.firstName.toLowerCase() + ' ' + item.lastName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.lastName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.user.email.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.user.userName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.id.split('-')[0].toLowerCase()).toString().includes(search.toLowerCase())
                                    ) {
                                        return item;
                                    }
                                    else if ('non user'.includes(search.toLowerCase())) {
                                        return item.user.role == 'NON-USER'
                                    }
                                    else if ('user'.includes(search.toLowerCase())) {
                                        return item.user.role == 'CUSTOMER'
                                    }
                                    else if ('active'.includes(search.toLowerCase())) {
                                        return item.user.status == true
                                    }
                                    else if ('disabled'.includes(search.toLowerCase())) {
                                        return item.user.status == false
                                    }

                                }

                                else {
                                    return item
                                }
                            })
                            .slice((roomPage - 1) * 10, roomPage * 10)
                            .map((item) => (
                                <Tr>
                                    <Td align='center'>{item.id.split('-')[0]}</Td>
                                    <Td align='center'>{item.user.userName}</Td>
                                    <Td align='center' style={{ textTransform: 'capitalize' }}>{item.firstName.toLowerCase()} {item.lastName.toLowerCase()}</Td>
                                    <Td align='center'>{item.user.email}</Td>
                                    <Td align='center'>{reservationSummary.length != 0 ? reservationSummary.filter((obj) => (obj.reservation.guest_id == item.id)).length : 0}</Td>
                                    <Td align='center'>{item.user.status != false ?
                                        <ContainerGlobal
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
                                                Active
                                            </Title></ContainerGlobal>
                                        :
                                        <ContainerGlobal
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
                                                Disabled
                                            </Title></ContainerGlobal>
                                    }
                                    </Td>
                                    <Td align='center'>{item.user.role == 'NON-USER' ? 'Non user' : 'User'}</Td>
                                    <Td align='center'>{new Date(item.created_at).toLocaleDateString()}</Td>
                                    <Td align='center'><ActionButton
                                        dontShowDelete=''
                                        view={() => handleOpen2(item)}
                                        edit={() => handleOpen(item)}

                                    /></Td>
                                </Tr>
                            ))
                        : <Tr>
                            <Td align='center' colSpan={9}>Guest list is empty</Td>
                        </Tr>}


                </TableContainer>
                <ContainerGlobal
                    w='100%'
                    justify='center'>
                    <Pagination
                        page={roomPage}
                        count={guests.length != 0 && Math.ceil(guests.filter((item) => {
                            if (startDateFilter != null && endDateFilter != null) {
                                let filterDates = getDates(startDateFilter, endDateFilter);
                                if (filterDates.includes(moment(item.created_at).format('YYYY-MM-DD'))) {
                                    return item
                                }
                            }
                            else {
                                return item
                            }
                        })
                            .filter((item) => {
                                if (search != '') {
                                    if (new Date(item.created_at).toLocaleDateString().includes(search)
                                        || (item.firstName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.firstName.toLowerCase() + ' ' + item.lastName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.lastName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.user.email.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.user.userName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.id.split('-')[0].toLowerCase()).toString().includes(search.toLowerCase())
                                    ) {
                                        return item;
                                    }
                                    else if ('non user'.includes(search.toLowerCase())) {
                                        return item.user.role == 'NON-USER'
                                    }
                                    else if ('user'.includes(search.toLowerCase())) {
                                        return item.user.role == 'CUSTOMER'
                                    }
                                    else if ('active'.includes(search.toLowerCase())) {
                                        return item.user.status == true
                                    }
                                    else if ('disabled'.includes(search.toLowerCase())) {
                                        return item.user.status == false
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
                    onSubmit={updateUser}
                    style={{
                        height: 'auto',
                        width: '60vw',
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
                        position: 'relative',
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
                            Edit Guest
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
                        style={{
                            margin: '50px 0px 0px 0px'
                        }}>
                        <TextField
                            error={firstNameError.length != 0 ? true : false}
                            helperText={firstNameError.length != 0 ? firstNameError : ""}
                            placeholder='First Name'
                            label="First Name"
                            inputRef={firstNameRef}
                            variant="outlined"
                            value={firstName}

                            inputProps={{ maxLength: 80 }}
                            onChange={(e) => {
                                setFirstName(e.target.value)
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
                            inputProps={{ maxLength: 80 }}
                            onChange={(e) => {
                                setLastName(e.target.value)
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
                            inputProps={{ maxLength: 254 }}

                            onChange={(e) => {
                                setEmail(e.target.value)

                                setEmailError("")
                            }}
                            style={{ width: '55%', }}
                            inputRef={emailRef}
                            required />

                        <TextField
                            error={contactNumberError.length != 0 ? true : false}
                            helperText={contactNumberError.length != 0 ? contactNumberError : "ex. 09123456789 or +639123456789"}
                            placeholder='Contact Number e.g. 09123456789 or +639123456789'
                            label="Contact Number"
                            variant="outlined"
                            value={contactNumber}
                            onChange={(e) => {
                                setcontactNumber(e.target.value)

                                if (!phoneNumberValidation.test(e.target.value) && e.target.value.length != 0) {
                                    console.log('asda')
                                    setContactNumberError("Contact number is invalid. Please provide a valid contact number.")
                                }
                                else {
                                    setContactNumberError("")
                                }
                            }}
                            inputRef={contactNumberRef}

                            inputProps={{ maxLength: 13 }}
                            style={{ width: '55%', }}
                            required />
                    </InputContainer>


                    <InputContainer>

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker

                                views={['day', 'month', 'year']}
                                label="Birthday"
                                value={birthDay}
                                maxDate={new Date(Date.parse(new Date()) - 568025136000)}
                                minDate={new Date(Date.parse(new Date()) - 2524556160000)}
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
                                required
                                onChange={(event) => {
                                    setNationality(event.target.value);
                                }}
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
                                value={gender}
                                required
                                onChange={(e) => {
                                    setGender(e.target.value)
                                }}
                                name="row-radio-buttons-group">
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
                            required
                            inputProps={{ maxLength: 255 }} />



                    </InputContainer>

                    <InputContainer>
                        <TextField

                            placeholder='Username'
                            label="Username"
                            variant="outlined"
                            value={username}


                            disabled
                            style={{ width: '55%', }} />

                    </InputContainer>
                    <InputContainer>
                        <FormControl sx={{ width: 200, margin: '5px 0px' }} size="large" variant="standard">
                            <InputLabel id="demo-select-small" >Account Status</InputLabel>
                            <Select
                                style={{ color: 'black', textAlign: 'left', fontWeight: 'bold' }}
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={accountActive}
                                label="Menu"
                                onChange={(event) => {
                                    setAccountActive(event.target.value);
                                }}

                            >

                                <MenuItem value={false} >
                                    Disabled
                                </MenuItem>
                                <MenuItem value={true} >
                                    Active
                                </MenuItem>
                            </Select>
                        </FormControl>

                    </InputContainer>
                    <Button
                        variant="contained"
                        color='success'
                        type='submit'
                    >
                        Update
                    </Button>

                    <Button
                        variant="contained"
                        color='error'
                        onClick={handleClose}
                    >
                        Close
                    </Button>
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
                    onSubmit={updateUser}
                    style={{
                        height: 'auto',
                        width: '60vw',
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
                        position: 'relative',
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
                            View Guest
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
                        style={{
                            margin: '50px 0px 0px 0px'
                        }}>
                        <TextField
                            error={firstNameError.length != 0 ? true : false}
                            helperText={firstNameError.length != 0 ? firstNameError : ""}
                            placeholder='First Name'
                            label="First Name"
                            inputRef={firstNameRef}
                            variant="outlined"
                            value={firstName}

                            inputProps={{ maxLength: 80 }}
                            onChange={(e) => {
                                setFirstName(e.target.value)
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
                            error={lastNameError.length != 0 ? true : false}
                            helperText={lastNameError.length != 0 ? lastNameError : ""}
                            placeholder='Last Name'
                            label="Last Name"
                            variant="outlined"
                            inputRef={lastNameRef}
                            value={lastName}
                            inputProps={{ maxLength: 80 }}
                            onChange={(e) => {
                                setLastName(e.target.value)
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
                            error={emailError.length != 0 ? true : false}
                            helperText={emailError.length != 0 ? emailError : ""}
                            placeholder='Email'
                            label="Email"
                            variant="outlined"
                            type='email'
                            value={email}
                            inputProps={{ maxLength: 254 }}

                            onChange={(e) => {
                                setEmail(e.target.value)

                                setEmailError("")
                            }}
                            style={{ width: '55%', }}
                            inputRef={emailRef}
                            disabled />

                        <TextField
                            error={contactNumberError.length != 0 ? true : false}
                            helperText={contactNumberError.length != 0 ? contactNumberError : "ex. 09123456789 or +639123456789"}
                            placeholder='Contact Number e.g. 09123456789 or +639123456789'
                            label="Contact Number"
                            variant="outlined"
                            value={contactNumber}
                            onChange={(e) => {
                                setcontactNumber(e.target.value)

                                if (!phoneNumberValidation.test(e.target.value) && e.target.value.length != 0) {
                                    console.log('asda')
                                    setContactNumberError("Contact number is invalid. Please provide a valid contact number.")
                                }
                                else {
                                    setContactNumberError("")
                                }
                            }}
                            inputRef={contactNumberRef}

                            inputProps={{ maxLength: 13 }}
                            style={{ width: '55%', }}
                            disabled />
                    </InputContainer>


                    <InputContainer>

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker

                                views={['day', 'month', 'year']}
                                label="Birthday"
                                value={birthDay}
                                maxDate={new Date(Date.parse(new Date()) - 568025136000)}
                                minDate={new Date(Date.parse(new Date()) - 2524556160000)}
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
                                disabled
                                onChange={(event) => {
                                    setNationality(event.target.value);
                                }}
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
                                value={gender}
                                disabled
                                onChange={(e) => {
                                    setGender(e.target.value)
                                }}
                                name="row-radio-buttons-group">
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
                            disabled
                            inputProps={{ maxLength: 255 }} />



                    </InputContainer>
                    <InputContainer>
                        <TextField

                            placeholder='Username'
                            label="Username"
                            variant="outlined"
                            value={username}


                            disabled
                            style={{ width: '55%', }} />

                    </InputContainer>
                    <InputContainer>
                        <FormControl sx={{ width: 200, margin: '5px 0px' }} size="large" variant="standard">
                            <InputLabel id="demo-select-small" >Account Status</InputLabel>
                            <Select
                                style={{ color: 'black', textAlign: 'left', fontWeight: 'bold' }}
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={accountActive}
                                label="Menu"
                                onChange={(event) => {
                                    setAccountActive(event.target.value);
                                }}
                                disabled
                            >

                                <MenuItem value={false} >
                                    Disabled
                                </MenuItem>
                                <MenuItem value={true} >
                                    Active
                                </MenuItem>
                            </Select>
                        </FormControl>

                    </InputContainer>


                    <Button
                        variant="contained"
                        color='error'
                        onClick={handleClose2}
                    >
                        Close
                    </Button>
                </Box>
            </Modal>



        </Container>
    )
}

export default StatusContainer