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
import { FormControlLabel, FormControl, Modal, FormLabel, RadioGroup, Radio } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Select from '@mui/material/Select';
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ActionButton from '../../components/actionButton/ActionButton';
import { AdminInformationFormFilledEditUser, AdminInformationFormFilledUser, AdminInformationFormUser } from '../adminInformationForm/AdminInformationFormUser';
import Grow from '@mui/material/Grow';
import Edit from '@mui/icons-material/Edit';
import { apiKey } from '../../../apiKey';
import axios from 'axios';
import { Box } from '@mui/system';
import { ContainerGlobalRow } from '../reservationContainer/style';
import { ContainerForm, ContainerFormContent, InputContainer } from '../adminInformationForm/style';
import { nationalities } from '../../../nationalities';
import { Pagination } from '@mui/material'
import logo from '../../../client/images/logo.png'
import { CircularProgress } from '@mui/material';
import { CheckCircleOutline, Close, HighlightOffSharp } from '@mui/icons-material';
const UserListContainer = () => {
    let passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\| ])[A-Za-z\d -._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]{8,}/;
    let letters = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    let phoneNumberValidation = /^(09|\+639)\d{9}$/;
    let userNameValidation = /^\S*$/;
    const [roomPage, setRoomPage] = useState(1)
    const [value, setValue] = useState(Date.now());
    const color = "#c44242";
    const [age, setAge] = React.useState('');


    const [showDetails, setShowDetails] = useState(false);

    const [showDetails2, setShowDetails2] = useState(false);
    const [showDetails3, setShowDetails3] = useState(false);



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
    const [nationality, setNationality] = useState('Filipino');
    const [accountType, setAccountType] = useState('STAFF');



    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [contactNumberError, setContactNumberError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [genderError, setGenderError] = useState('male');
    const [accountTypeError, setAccountTypeError] = useState('male');
    const [addressError, setAddressError] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const emailRef = useRef();
    const contactNumberRef = useRef();
    const userNameRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();





    const [guests, setGuests] = useState([])
    const [reservationSummary, setReservationSummary] = useState([])


    const [openCreate, setOpenCreate] = useState(false);


    const handleOpenCreate = () => {
        setOpenCreate(true)
    }

    const handleCloseCreate = () => {
        setOpenCreate(false)
    }


    const [guestInformation, setGuestInformation] = useState([])
    const [openView, setOpenView] = useState(false);


    const handleOpenView = (value) => {
        setOpenView(true)
        setAccountActive(value.user.status)
        setGuestInformation(value)
    }

    const handleCloseView = () => {
        setOpenView(false)
        setAccountActive(true)
        setGuestInformation([])

    }


    const [openEdit, setOpenEdit] = useState(false);

    const [accountActive, setAccountActive] = useState(true);

    const handleOpenEdit = (value) => {
        setOpenEdit(true)
        setGuestInformation(value)
        setFirstName(value.firstName)
        setLastName(value.lastName)
        setUserName(value.user.userName)
        setEmail(value.user.email)
        setContactNumber(value.user.contactNumber)
        setBirthDay(value.birthDate)
        setGender(value.gender)
        setAddress(value.address)
        setAccountType(value.user.role)
        setAccountActive(value.user.status)
    }

    const handleCloseEdit = () => {
        setOpenEdit(false)
        setGuestInformation([])
        setFirstName('')
        setLastName('')
        setUserName('')
        setEmail('')
        setContactNumber('')
        setBirthDay('')
        setGender('')
        setAddress('')
        setAccountType('')
        setAccountActive(true)

    }



    useEffect(() => {

        axios.get(apiKey + "api/getAllGuest").then((result) => {
            setGuests(result.data.filter((obj) => obj.user.role != 'NON-USER' && obj.user.role != 'CUSTOMER'))
            axios.get(apiKey + "api/getAllReservationSummary").then((result) => {
                setReservationSummary(result.data)
            }).catch((err) => {
                console.log(err)
            });

        }).catch((err) => {
            console.log(err)
        });

    }, [])


    useEffect(() => {
        axios.get(apiKey + 'api/getAllUsers').then((res) => {
            if (res.data.length != 0) {
                res.data.map((item) => {
                    if (guestInformation.length == 0) {
                        if (item.role != 'NON-USER') {

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
                            else if (item.userName.toLowerCase() == userName.toLowerCase()) {
                                setUserNameError("This userName is already taken.")

                            }
                        }
                    }
                    else {
                        if (item.role != 'NON-USER' && item.id != guestInformation.user.id) {

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
                            else if (item.userName.toLowerCase() == userName.toLowerCase()) {
                                setUserNameError("This userName is already taken.")

                            }
                        }
                    }

                })
            }
        }).catch((err) => {

        });
    }, [userName, email, contactNumber, password])





    const createGuestInformation = (e) => {
        e.preventDefault();
        let formatNumber;
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
        else {
            axios.get(apiKey + 'api/getAllUsers').then((res) => {
                if (emailError.length == 0 && contactNumberError.length == 0 && userNameError.length == 0) {
                    handleOpenIsLoading()
                    axios.post(apiKey + 'api/addUser', {
                        userName: userName,
                        contactNumber: formatNumber,
                        email: email,
                        password: password,
                        role: accountType,
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
                                handleCloseCreate()
                                // window.location.reload();
                            handleCloseIsLoading(2, '')
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
                        console.log(err)
                    });
                }
            }).catch((err) => {
                console.log(err)
            })
        }
        // axios.post(apiKey+'api/addUser', {
        //     userName: userName,
        //     contactNumber: contactNumber,
        //     email: email,
        //     password: password,
        // }).then((res)=>{
        //     console.log(res.data);
        //     axios.post(apiKey+'api/addGuest', {

        //     })
        // }).catch((err)=>{
        //     console.log(err.res);
        // })

    }


    const [accountInformation, setAccountInformation] = useState([]);

    useEffect(() => {
        axios.get(apiKey + "auth/verify-token").then((response) => {
            setAccountInformation(response.data)
        }).catch((e) => {
            if (e.response.data === "Unauthorized") {
                window.location = '/'
            }
        })
    }, [])



    const updateGuestInformation = (e) => {
        e.preventDefault();
        let formatNumber;
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
        else {
            axios.get(apiKey + 'api/getAllUsers').then((res) => {
                if (emailError.length == 0 && contactNumberError.length == 0 && userNameError.length == 0) {
                    handleOpenIsLoading()
                    axios.patch(apiKey + 'api/updateUsers/' + guestInformation.user.id, {
                        email: email,
                        contactNumber: formatNumber,
                        userName: userName,
                        status: accountActive,
                    }).then((result) => {
                        console.log(result.data);
                        axios.patch(apiKey + 'api/updateGuest/' + guestInformation.id, {
                            firstName: firstName,
                            lastName: lastName,
                            birthDate: new Date(Date.parse(new Date(birthday))+ 86400000),
                            gender: gender,
                            address: address,
                            nationality: nationality,
                        }).then((result) => {
                            console.log(result.data);
                            handleCloseEdit()
                            // window.location.reload()
                            handleCloseIsLoading(2, '')
                        }).catch((err) => {
                            handleCloseIsLoading(3)
                            console.log(err);

                        });
                    }).catch((err) => {
                        handleCloseIsLoading(3)
                        console.log(err);


                    });
                }
            }).catch((err) => {
                console.log(err)
            })
        }
        // axios.post(apiKey+'api/addUser', {
        //     userName: userName,
        //     contactNumber: contactNumber,
        //     email: email,
        //     password: password,
        // }).then((res)=>{
        //     console.log(res.data);
        //     axios.post(apiKey+'api/addGuest', {

        //     })
        // }).catch((err)=>{
        //     console.log(err.res);
        // })

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
                    onSubmit={createGuestInformation}
                    style={{
                        height: '75vh',
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
                            Create admin account
                        </Title>
                        <CloseIcon
                            onClick={handleCloseCreate}
                            style={{
                                color: 'white',
                                cursor: 'pointer',
                                margin: '10px',
                            }} />
                    </div>




                    <ContainerGlobalRow style={{ marginTop: '20px' }}>
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
                                    inputProps={{ maxLength: 80 }}

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
                                    inputProps={{ maxLength: 80 }}

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
                                    helperText={contactNumberError.length != 0 ? contactNumberError : ""}
                                    placeholder='Contact Number e.g. 09123456789 or +639123456789'
                                    label="Contact Number"
                                    variant="outlined"
                                    value={contactNumber}
                                    inputProps={{ maxLength: 13 }}

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
                                    style={{ width: '100%', }}
                                    required />

                            </InputContainer>
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
                                            console.log('asda')
                                            setUserNameError("Invalid username.")
                                        }
                                        else {

                                            setUserNameError("")
                                        }
                                    }}
                                    inputProps={{ maxLength: 40 }}

                                    required
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
                                    required
                                />
                            </InputContainer>

                            <InputContainer
                                justify='center'>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label"
                                        style={{ textAlign: 'center', }} >Account type</FormLabel>
                                    <RadioGroup
                                        row
                                        error={accountTypeError.length != 0 ? true : false}
                                        helperText={accountTypeError.length != 0 ? accountTypeError : ""}
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        value={accountType}
                                        name="row-radio-buttons-group"
                                        onChange={(e) => {
                                            setAccountType(e.target.value)
                                        }}
                                        required
                                    >
                                        <FormControlLabel
                                            value="STAFF"
                                            control={<Radio />}
                                            label="Front Desk"
                                        />
                                        <FormControlLabel
                                            value="ADMIN"
                                            control={<Radio />}
                                            label="Admin"
                                        />
                                    </RadioGroup>
                                </FormControl>
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
                    <Button variant="contained" color='success' type='submit'>Create account</Button>
                    <Button variant="contained" color='error' onClick={handleCloseCreate} >Close</Button>
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
                    onSubmit={createGuestInformation}
                    style={{
                        height: '75vh',
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
                            View account
                        </Title>
                        <CloseIcon
                            onClick={handleCloseView}
                            style={{
                                color: 'white',
                                cursor: 'pointer',
                                margin: '10px',
                            }} />
                    </div>




                    <ContainerGlobalRow style={{ marginTop: '20px' }}>
                        <ContainerFormContent >

                            <InputContainer>
                                <TextField
                                    error={firstNameError.length != 0 ? true : false}
                                    helperText={firstNameError.length != 0 ? firstNameError : ""}
                                    placeholder='First Name'
                                    label="First Name"
                                    inputRef={firstNameRef}
                                    variant="outlined"
                                    value={guestInformation.length != 0 ? guestInformation.firstName : ''}
                                    onChange={(e) => {
                                        setFirstName(e.target.value.toLocaleLowerCase())
                                        if (!letters.test(e.target.value) && e.target.value.length != 0) {
                                            setFirstNameError("Invalid first name. Please type letters only.")
                                        }
                                        else {
                                            setFirstNameError("")
                                        }
                                    }}
                                    inputProps={{ maxLength: 80 }}

                                    style={{ width: '55%', }}
                                    disabled />

                                <TextField
                                    error={lastNameError.length != 0 ? true : false}
                                    helperText={lastNameError.length != 0 ? lastNameError : ""}
                                    placeholder='Last Name'
                                    label="Last Name"
                                    variant="outlined"
                                    inputRef={lastNameRef}
                                    value={guestInformation.length != 0 ? guestInformation.lastName : ''}
                                    onChange={(e) => {
                                        setLastName(e.target.value.toLocaleLowerCase())
                                        if (!letters.test(e.target.value) && e.target.value.length != 0) {
                                            setLastNameError("Invalid last name. Please type letters only.")
                                        }
                                        else {
                                            setLastNameError("")
                                        }

                                    }}
                                    inputProps={{ maxLength: 80 }}

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
                                    value={guestInformation.length != 0 ? guestInformation.user.email : ''}
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
                                    helperText={contactNumberError.length != 0 ? contactNumberError : ""}
                                    placeholder='Contact Number e.g. 09123456789 or +639123456789'
                                    label="Contact Number"
                                    variant="outlined"
                                    value={guestInformation.length != 0 ? guestInformation.user.contactNumber : ''}
                                    inputProps={{ maxLength: 13 }}

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
                                        value={guestInformation.length != 0 ? new Date(guestInformation.birthDate) : ''}

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
                                        value={guestInformation.length != 0 ? guestInformation.nationality : ''}

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
                                        style={{ textAlign: 'center', }} >Gender</FormLabel>
                                    <RadioGroup
                                        row
                                        error={genderError.length != 0 ? true : false}
                                        helperText={genderError.length != 0 ? genderError : ""}
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        defaultValue="male"
                                        value={guestInformation.length != 0 ? guestInformation.gender : ''}
                                        name="row-radio-buttons-group"
                                        onChange={(e) => {
                                            setGender(e.target.value)
                                        }}
                                        disabled
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
                                    error={addressError.length != 0 ? true : false}
                                    helperText={addressError.length != 0 ? addressError : ""}
                                    placeholder='Complete Address'
                                    label="Complete Address"
                                    variant="outlined"
                                    type='text'
                                    value={guestInformation.length != 0 ? guestInformation.address : ''}

                                    onChange={(e) => {
                                        setAddress(e.target.value)
                                    }}
                                    multiline
                                    rows={4}
                                    inputProps={{ maxLength: 255 }}
                                    style={{ width: '100%', }}
                                    disabled />

                            </InputContainer>
                            <InputContainer>
                                <TextField

                                    error={userNameError.length != 0 ? true : false}
                                    helperText={userNameError.length != 0 ? userNameError : ""}
                                    placeholder='Username'
                                    label="Username"
                                    variant="outlined"
                                    inputRef={userNameRef}
                                    value={guestInformation.length != 0 ? guestInformation.user.userName : ''}
                                    onChange={(e) => {
                                        setUserName(e.target.value)
                                        if (!userNameValidation.test(e.target.value) && e.target.value.length != 0) {
                                            console.log('asda')
                                            setUserNameError("Invalid username.")
                                        }
                                        else {

                                            setUserNameError("")
                                        }
                                    }}
                                    inputProps={{ maxLength: 40 }}

                                    disabled
                                    style={{ width: '55%', }} />


                            </InputContainer>

                            <InputContainer
                                justify='center'>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label"
                                        style={{ textAlign: 'center', }} >Account type</FormLabel>
                                    <RadioGroup
                                        row
                                        error={accountTypeError.length != 0 ? true : false}
                                        helperText={accountTypeError.length != 0 ? accountTypeError : ""}
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        value={guestInformation.length != 0 ? guestInformation.user.role : ''}
                                        name="row-radio-buttons-group"
                                        onChange={(e) => {
                                            setAccountType(e.target.value)
                                        }}
                                        disabled
                                    >
                                        <FormControlLabel
                                            value="STAFF"
                                            control={<Radio disabled />}
                                            label="Front Desk"
                                        />
                                        <FormControlLabel
                                            value="ADMIN"
                                            control={<Radio disabled />}
                                            label="Admin"
                                        />
                                    </RadioGroup>
                                </FormControl>
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
                    <Button variant="contained" color='error' onClick={handleCloseView}>Close</Button>
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
                    onSubmit={updateGuestInformation}
                    style={{
                        height: '75vh',
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
                            Edit admin account
                        </Title>
                        <CloseIcon
                            onClick={handleCloseEdit}
                            style={{
                                color: 'white',
                                cursor: 'pointer',
                                margin: '10px',
                            }} />
                    </div>




                    <ContainerGlobalRow style={{ marginTop: '20px' }}>
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
                                    inputProps={{ maxLength: 80 }}

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
                                    inputProps={{ maxLength: 80 }}

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
                                    helperText={contactNumberError.length != 0 ? contactNumberError : ""}
                                    placeholder='Contact Number e.g. 09123456789 or +639123456789'
                                    label="Contact Number"
                                    variant="outlined"
                                    value={contactNumber}
                                    inputProps={{ maxLength: 13 }}

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
                                    style={{ width: '100%', }}
                                    required />

                            </InputContainer>
                            <InputContainer>
                                <TextField

                                    placeholder='Username'
                                    label="Username"
                                    variant="outlined"
                                    value={userName}
                                    inputProps={{ maxLength: 40 }}

                                    disabled
                                    style={{ width: '55%', }} />


                            </InputContainer>

                            <InputContainer
                                justify='center'>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label"
                                        style={{ textAlign: 'center', }} >Account type</FormLabel>
                                    <RadioGroup
                                        row
                                        error={accountTypeError.length != 0 ? true : false}
                                        helperText={accountTypeError.length != 0 ? accountTypeError : ""}
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        value={accountType}
                                        name="row-radio-buttons-group"
                                        onChange={(e) => {
                                            setAccountType(e.target.value)
                                        }}
                                        required
                                    >
                                        <FormControlLabel
                                            value="STAFF"
                                            control={<Radio />}
                                            label="Front Desk"
                                        />
                                        <FormControlLabel
                                            value="ADMIN"
                                            control={<Radio />}
                                            label="Admin"
                                        />
                                    </RadioGroup>
                                </FormControl>
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
                    <Button variant="contained" color='success' type='submit'>Save changes</Button>
                    <Button variant="contained" color='error' onClick={handleCloseEdit} >Close</Button>
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
                    Check hotel user list
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
                        style={{ width: '98%' }} />




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
                    Hotel User List
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
                        <Th align='center'>Name</Th>
                        <Th align='center'>Status</Th>
                        <Th align='center'>Account Type</Th>
                        <Th align='center'>Action</Th>
                    </Tr>
                    {guests.length != 0 && accountInformation.length != 0 ?
                        guests
                            .filter((obj) => obj.user.id != accountInformation.id)
                            .filter((item) => {
                                if (search != '') {
                                    if ((item.firstName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.firstName.toLowerCase() + ' ' + item.lastName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.lastName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.user.userName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.id.split('-')[0].toLowerCase()).toString().includes(search.toLowerCase())
                                    ) {
                                        return item;
                                    }
                                    else if ('front desk'.includes(search.toLowerCase())) {
                                        return item.user.role == 'STAFF'
                                    }
                                    else if ('admin'.includes(search.toLowerCase())) {
                                        return item.user.role == 'ADMIN'
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
                            .sort((a, b) => a.firstName.localeCompare(b.firstName))
                            .slice((roomPage - 1) * 10, roomPage * 10)
                            .map((item) => (
                                <Tr>
                                    <Td align='center'>{item.id.split('-')[0]}</Td>
                                    <Td align='center'>{item.user.userName}</Td>
                                    <Td align='center' style={{textTransform: 'capitalize'}}>{item.firstName.toLowerCase()} {item.lastName.toLowerCase()}</Td>
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
                                    }</Td>
                                    <Td align='center'>{item.user.role == "ADMIN" ? 'Admin' : 'Front Desk'}</Td>
                                    <Td align='center'><ActionButton
                                        dontShowDelete=''
                                        view={() => handleOpenView(item)}
                                        edit={() => handleOpenEdit(item)}

                                    /></Td>
                                </Tr>
                            ))
                        : <Tr>
                        <Td align='center' colSpan={6}>Hotel user list is empty</Td>
                    </Tr>}

                </TableContainer>

                <ContainerGlobal
                    w='100%'
                    justify='center'>
                    <Pagination
                        page={roomPage}
                        count={guests.length != 0 && Math.ceil(guests.filter((obj) => obj.user.id != accountInformation.id)
                            .filter((item) => {
                                if (search != '') {
                                    if ((item.firstName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.firstName.toLowerCase() + ' ' + item.lastName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.lastName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.user.userName.toLowerCase()).toString().includes(search.toLowerCase())
                                        || (item.id.split('-')[0].toLowerCase()).toString().includes(search.toLowerCase())
                                    ) {
                                        return item;
                                    }
                                    else if ('front desk'.includes(search.toLowerCase())) {
                                        return item.user.role == 'STAFF'
                                    }
                                    else if ('admin'.includes(search.toLowerCase())) {
                                        return item.user.role == 'ADMIN'
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
            <Button variant="contained" size="large"
                style={{ backgroundColor: '#2E2E2E' }}
                onClick={() => handleOpenCreate()}
            >
                Create User Account
            </Button>



        </Container>
    )
}

export default UserListContainer