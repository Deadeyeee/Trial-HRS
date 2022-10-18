import React, { useLayoutEffect, useState, useEffect, useRef } from 'react'
import { FormButton, Button } from '../../components/button/styles'
import { HorizontalLine } from '../../components/horizontalLine/HorizontalLine'
import { Description } from '../../components/paragraph/style'
import { TextInput } from '../../components/textBox/style'
import { Title } from '../../components/title/styles'
import { ContainerChild, ContainerSummary, Container, ContainerForm, GenderContainer, InputContainer, BookingSummaryContainer, LeftColumn, RightColumn, DeatilsContainer, ContainerFormContent } from './style'
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers';
import InputLabel from '@mui/material/InputLabel';
import { Badge, FormControlLabel, Radio, RadioGroup, TextareaAutosize, FormControl } from '@mui/material'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { nationalities } from '../../../nationalities'
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TermsAndConditionsCont from "../termsAndConditionsPage/TermsAndConditionsCont";
import axios from 'axios'
import { apiKey } from '../../../apiKey'


const style = {
    position: 'absolute',
    display: 'flex',
    top: '50%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center ',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '80vh',
    overflow: 'scroll',
    width: '1500px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const InformationForm = () => {
    let passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let letters = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    let phoneNumberValidation = /^(09|\+639)\d{9}$/;
    var Recaptcha = require('react-recaptcha');

    var callback = function () {
        console.log('Done!!!!');
    };
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
    let formatNumber;
    useEffect(() => {


        // if (paymentOption === "E-Wallet payment") {
        //     setDisplayWallets("flex");
        //     setDisplayBanks("none");
        // }
        // else if (paymentOption === "Bank payment") {
        //     setDisplayBanks("flex");
        //     setDisplayWallets("none");
        // }
        // else {
        //     setDisplayBanks("none");
        //     setDisplayWallets("none");
        // }
    }, [])

    // let payments = ["Pay at hotel", "Bank payment", "E-Wallet payment"];
    // let banks = ["BDO", "PNB", "BPI"];
    // let eWallets = ["Gcash", "Paymaya"];

    useEffect(() => {
        axios.get(apiKey+'auth/verify-token').then((result) => {
            if(result.data.role != 'NON-USER'){
                window.location = '/billingSummary'
            }
        }).catch((err) => {

        });
        window.sessionStorage.removeItem("email")
        window.sessionStorage.removeItem("contactNumber")
        window.sessionStorage.removeItem("userName")
        window.sessionStorage.removeItem("firstName");
        window.sessionStorage.removeItem("lastName");
        window.sessionStorage.removeItem("birthday");
        window.sessionStorage.removeItem("nationality");
        window.sessionStorage.removeItem("gender");
        window.sessionStorage.removeItem("address");
        window.sessionStorage.removeItem("userName");
        window.sessionStorage.removeItem("password");

        if (window.sessionStorage.getItem('AvailedRoom') == null || window.sessionStorage.getItem('AvailedRoom') == [] || window.sessionStorage.getItem('AvailedRoom') == "") {
            window.location = "/booking"
        }
        document.title = "Guest Information"

    }, [])



    const createGuestInformation = (e) => {
        e.preventDefault();
        if (contactNumber.slice(0, 3) == "+63") {

            formatNumber = contactNumber.replace("+63", "0");

        }
        else{
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
            axios.get(apiKey+'api/getAllUsers').then((res) => {
                if (userName.length != 0 && password.length != 0) {
                    if (emailError.length == 0 && contactNumberError.length == 0 && userNameError.length == 0) {
                        axios.post(apiKey+'api/addUser', {
                            userName: userName,
                            contactNumber: formatNumber,
                            email: email,
                            password: password,
                        }).then((user) => {
                            console.log(user.data);
                            axios.post(apiKey+'api/addGuest', {
                                firstName: firstName,
                                lastName: lastName,
                                birthDate: birthday,
                                gender: gender,
                                address: address,
                                nationality: nationality,
                                user_id: user.data.account.id,
                            }).then((guest) => {
                                console.log(guest.data);
                                axios.post(apiKey+'auth/login',
                                    {
                                        userName: userName,
                                        password: password,
                                        email: email,
                                    },
                                ).then((result) => {
                                    window.location.reload();
                                }).catch((err) => {
                                    axios.delete(apiKey+'api/deleteGuest/' + guest.data.new_guest.id).then((result) => {
                                        console.log(result)
                                        axios.delete(apiKey+'api/deleteUser/' + user.data.account.id).then((result) => {
                                            console.log(result)
                                        }).catch((err) => {
                                            console.log(err)
                                        });
                                    }).catch((err) => {
                                        console.log(err)
                                    });
                                });
                            }).catch((err) => {
                                axios.delete(apiKey+'api/deleteUser/' + user.data.account.id).then((result) => {
                                    console.log(result)
                                }).catch((err) => {
                                    console.log(err)
                                });
                            });
                        }).catch((err) => {
                            console.log(err)
                        });
                    }

                }
                else {
                    window.sessionStorage.setItem("email", email);
                    window.sessionStorage.setItem("contactNumber", contactNumber);
                    window.sessionStorage.setItem("userName", userName);
                    window.sessionStorage.setItem("firstName", firstName);
                    window.sessionStorage.setItem("lastName", lastName);
                    window.sessionStorage.setItem("birthday", birthday);
                    window.sessionStorage.setItem("nationality", nationality);
                    window.sessionStorage.setItem("gender", gender);
                    window.sessionStorage.setItem("address", address);
                    window.location = '/billingSummary'
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

    useEffect(() => {
        if (userName.length != 0 || password.length != 0) {
            axios.get(apiKey+'api/getAllUsers').then((res) => {
                if (res.data.length != 0) {
                    res.data.map((item) => {
                        if (item.role != 'NON-USER') {
                            if (item.email.toLowerCase() == email.toLowerCase()) {
                                setEmailError("This email is already taken.")
                            }
                            else if (item.contactNumber == contactNumber) {
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
        else{
                                setContactNumberError("")
                                setUserNameError("")
                                setEmailError("")

        }
    }, [userName, email, contactNumber, password])
    return (
        <Container>
            <ContainerChild>
                <ContainerForm onSubmit={createGuestInformation}>
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

                        <InputContainer
                            justify='center'
                            gap='0px'>
                            <FormControlLabel control={
                                <Checkbox
                                    style={{ padding: '0px', margin: '0px', }}
                                    value={agreement}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setAgreement(true)
                                        }
                                        else {
                                            setAgreement(false)
                                        }
                                    }}
                                    required
                                />
                            } />
                            <p style={{ fontSize: '14px' }}>Kindly, check the box if you have read and agreed to RM Luxe Hotel's
                                <Link
                                    onClick={handleOpen}> Terms and Conditions
                                </Link>
                            </p>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}
                                    onClick={handleClose}
                                >
                                    <TermsAndConditionsCont />
                                </Box>
                            </Modal>
                        </InputContainer>

                        <Recaptcha
                            sitekey="6LdJnrkeAAAAAOt5k6Gz1_Op5iBm0Jm75Sl4PME_"
                            render="explicit"
                            onloadCallback={callback}
                        />


                        <FormButton
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
                        </Button>
                    </ContainerFormContent>



                </ContainerForm>
            </ContainerChild>

        </Container>
    )
}

export default InformationForm