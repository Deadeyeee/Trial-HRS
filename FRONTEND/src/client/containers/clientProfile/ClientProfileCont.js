import React, { useEffect, useRef, useState } from 'react'
import { ButtonHolder, Container, ProfileContent, ProfileContentContainer, ProfileInformationContent } from './styles'
import { Title } from '../../components/title/styles';
import { Button, Button2 } from '../../components/button/styles';
import { InputContainer } from '../informationForm/style';
import { FormButton } from '../../components/button/styles'
import { ContainerGlobal } from '../../../admin/components/container/container';
import { HorizontalLine } from '../../components/horizontalLine/HorizontalLine';
import { nationalities } from '../../../nationalities'

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormLabel from '@mui/material/FormLabel';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { FormControlLabel, FormControl, Radio, RadioGroup } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { apiKey } from '../../../apiKey';
import { CircularProgress, Grow } from '@mui/material';
import { CheckCircleOutline, Close, HighlightOffSharp } from '@mui/icons-material';
import logo from '../../images/logo.png';
import zIndex from '@mui/material/styles/zIndex';

const style = {
    position: 'absolute',
    display: 'flex',
    gap: '30px',
    top: '50%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center ',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 'auto',
    overflow: 'scroll',
    width: '35%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '0.5rem',
    p: '20px 50px',
};

const ClientProfileCont = () => {
    let letters = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    let phoneNumberValidation = /^(09|\+639)\d{9}$/;

    const [paymentOption, setPaymentOption] = useState("");
    const [displayBanks, setDisplayBanks] = useState("");
    const [displayWallets, setDisplayWallets] = useState("");
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('Juan');
    const [nationality, setNationality] = useState('');
    const [contactNumber, setcontactNumber] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [gender, setGender] = useState('');

    const [userInformation, setUserInformation] = useState([])
    const [value, setValue] = useState(Date.now());
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        // window.confirm("any unsaved changes will be lost");
        if (window.confirm("any unsaved changes will be lost.")) {

            setOpen(false)
        } else {
            setOpen(true)
        }
    };
    const bday = new Date(2000, 11, 2,);

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


    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('Please wait...')
    const [status, setStatus] = useState('loading')

    const handleOpenIsLoading = () => {
        setIsLoading(true);
        setStatus('loading')
        setLoadingMessage('Please wait...')
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






    useEffect(() => {
        axios.get(apiKey + 'auth/verify-token').then((result) => {
            axios.get(apiKey + 'api/getAllGuest').then((guest) => {
                guest.data.map((item) => {
                    if (result.data.id == item.user_id) {

                        setUserInformation(item)
                    }
                })
                console.log(guest.data)
            }).catch((err) => {

            });
        }).catch((err) => {
            console.log(err)
        });
    }, [])

    useEffect(() => {
        if (userInformation.length != 0) {
            setFirstName(userInformation.firstName);
            setLastName(userInformation.lastName);
            setEmail(userInformation.user.email);
            setcontactNumber(userInformation.user.contactNumber);
            setBirthDay(userInformation.birthDate);
            setNationality(userInformation.nationality.charAt(0).toUpperCase() + userInformation.nationality.slice(1));
            setGender(userInformation.gender);
            setAddress(userInformation.address);
        }
    }, [userInformation, open])



    useEffect(() => {
        if (userInformation.length != 0) {
            if (userInformation.user.role != 'NON-USER') {

                axios.get(apiKey + 'api/getAllUsers').then((res) => {
                    if (res.data.length != 0) {
                        res.data.map((item) => {
                            if (item.role != 'NON-USER' && item.id != userInformation.user.id) {
                                if (item.email.toLowerCase() == email.toLowerCase()) {
                                    setEmailError("This email is already taken.")
                                }
                                else if (item.contactNumber == contactNumber) {
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
            handleOpenIsLoading();
            if (emailError.length == 0 && contactNumberError.length == 0 && userNameError.length == 0) {
                axios.patch(apiKey + 'api/updateUsers/' + userInformation.user.id, {
                    email: email,
                    contactNumber: contactNumber,

                }).then((result) => {
                    console.log(result.data);
                    axios.patch(apiKey + 'api/updateGuest/' + userInformation.id, {
                        firstName: firstName,
                        lastName: lastName,
                        birthDate: birthDay,
                        gender: gender,
                        address: address,
                        nationality: nationality
                    }).then((result) => {
                        console.log(result.data);
                        handleCloseIsLoading(2, '')
                        // window.location.reload()
                    }).catch((err) => {
                        handleCloseIsLoading(3)

                    });
                }).catch((err) => {
                    handleCloseIsLoading(3)

                });


            }
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
                    border: 'none',
                    zIndex: '7 !important'
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



            <Title
                color='#bfaa7e'
                weight='400'
                size='66px'
                fstyle='Normal'
                margin='100px 0px 10px 0px'
                align='Center'
            >
                Welcome
            </Title>
            <ProfileContentContainer>
                <ProfileContent>
                    <ContainerGlobal
                        justify='space-between'
                    >
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            First Name:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            <b>{userInformation.length != 0 ? userInformation.firstName.toLowerCase() : ""}</b>
                        </Title>
                    </ContainerGlobal>
                    <ContainerGlobal
                        justify='space-between'
                    >
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            Last Name:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            <b>{userInformation.length != 0 ? userInformation.lastName.toLowerCase() : ""}</b>
                        </Title>
                    </ContainerGlobal>
                    <ContainerGlobal
                        justify='space-between'
                    >
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            Email Address:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            <b>{userInformation.length != 0 ? userInformation.user.email.toLowerCase() : ""}</b>
                        </Title>
                    </ContainerGlobal>
                    <ContainerGlobal
                        justify='space-between'
                    >
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            Contact Number:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            <b>{userInformation.length != 0 ? userInformation.user.contactNumber.toLowerCase() : ""}</b>
                        </Title>
                    </ContainerGlobal>
                    <ContainerGlobal
                        justify='space-between'
                    >
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            Birth Day:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            <b>{userInformation.length != 0 ? new Date(userInformation.birthDate).toLocaleDateString() : ""}</b>
                        </Title>
                    </ContainerGlobal>
                    <ContainerGlobal
                        justify='space-between'
                    >
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            Nationality:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            <b>{userInformation.length != 0 ? userInformation.nationality.toLowerCase() : ""}</b>
                        </Title>
                    </ContainerGlobal>
                    <ContainerGlobal
                        justify='space-between'
                    >
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            Gender:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            <b>{userInformation.length != 0 ? userInformation.gender.toLowerCase() : ""}</b>
                        </Title>
                    </ContainerGlobal>
                    <ContainerGlobal
                        justify='space-between'
                        gap='200px'
                    >
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                        >
                            Address
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Normal'
                            size='25px'
                            color='#2e2e2e'
                            align='left'
                            width=''
                        >
                            <b>{userInformation.length != 0 ? userInformation.address : ""}</b>
                        </Title>
                    </ContainerGlobal>
                </ProfileContent>
            </ProfileContentContainer>

            <ButtonHolder>
                <Button
                    whileHover={{ backgroundColor: "#302B20", color: "white" }}
                    w='125px'
                    h='40px'
                    textcolor="white"
                    fam='raleway'
                    weight='-400'
                    fontStyle='normal'
                    radius="0px"
                    border="1px solid #8F805F"
                    margin='30px 0px 0px 0px'
                    fontsize='16px'
                    bg='#282626'
                    onClick={handleOpen}
                >
                    Edit
                </Button>
            </ButtonHolder>

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
                        height: '75vh',
                        width: '70vw',
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
                            Edit Profile
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
                            inputRef={firstNameRef}

                            placeholder='First Name'
                            label="First Name"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);

                                if (!letters.test(e.target.value) && e.target.value.length != 0) {
                                    setFirstNameError("Invalid first name. Please type letters only.")
                                }
                                else {
                                    setFirstNameError("")
                                }
                            }}
                            variant="outlined"
                            style={{ width: '55%', }}
                            required />

                        <TextField
                            error={lastNameError.length != 0 ? true : false}
                            helperText={lastNameError.length != 0 ? lastNameError : ""}
                            placeholder='Last Name'
                            label="Last Name"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value)
                                if (!letters.test(e.target.value) && e.target.value.length != 0) {
                                    setLastNameError("Invalid last name. Please type letters only.")
                                }
                                else {
                                    setLastNameError("")
                                }
                            }}
                            inputRef={lastNameRef}
                            variant="outlined"
                            style={{ width: '55%', }}
                            required />
                    </InputContainer>

                    <InputContainer>
                        <TextField
                            placeholder='Email'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)

                                setEmailError("")
                            }}
                            inputRef={emailRef}
                            label="Email"
                            variant="outlined"
                            type='email'
                            style={{ width: '55%', }}
                            required />

                        <TextField
                            error={contactNumberError.length != 0 ? true : false}
                            helperText={contactNumberError.length != 0 ? contactNumberError : ""}
                            placeholder='Contact Number'
                            label="Contact Number"
                            value={contactNumber}
                            onChange={(e) => {
                                setcontactNumber(e.target.value);
                                if (!phoneNumberValidation.test(e.target.value) && e.target.value.length != 0) {
                                    setContactNumberError("Contact number is invalid. Please provide a valid contact number.")
                                }
                                else {
                                    setContactNumberError("")
                                }
                            }}
                            variant="outlined"
                            type='tel'
                            style={{ width: '55%', }}
                            required />
                    </InputContainer>


                    <InputContainer>

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker

                                views={['day', 'month', 'year']}
                                label="Birthday"
                                value={birthDay}
                                required
                                onChange={(newValue) => {
                                    setBirthDay(newValue);
                                }}
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        variant="standard"
                                        style={{ width: "55%", margin: '5px 0px' }}
                                        helperText={null}
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
                                defaultValue={nationality}
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
                            placeholder='Address'
                            label="Address"
                            variant="outlined"
                            multiline
                            rows={4}
                            value={address}
                            required
                            onChange={(e) => {
                                setAddress(e.target.value)
                            }}
                            style={{ width: '100%', }} />



                    </InputContainer>
                    <InputContainer>
                        {userInformation.length != 0 && userInformation.user.role != 'NON-USER' ?
                            <Link
                                href="#">Change Password
                            </Link>
                            :
                            ""
                        }
                    </InputContainer>

                    <Button2
                        whileHover={{ backgroundColor: "#2E2E2E", color: "white" }}
                        w='150px'
                        h='40px'
                        textcolor="black"
                        fam='Times New Roman'
                        weight='-400'
                        radius="0px"
                        border="1px solid #8F805F"
                        margin='30px 0px 0px 0px'
                        fontsize='15px'
                        type='submit'>
                            Update
                    </Button2>

                    <FormButton
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
                        value='Cancel'
                        onClick={handleClose}>
                    </FormButton>
                </Box>
            </Modal>


        </Container>
    )
}

export default ClientProfileCont