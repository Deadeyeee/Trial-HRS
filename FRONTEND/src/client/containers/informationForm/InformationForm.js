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
    var Recaptcha = require('react-recaptcha');

    var callback = function () {
        console.log('Done!!!!');
    };
    const [agreement, setAgreement] = useState(false)
    // const [paymentOption, setPaymentOption] = useState("");
    // const [displayBanks, setDisplayBanks] = useState("");
    // const [displayWallets, setDisplayWallets] = useState("");
    // const [value, setValue] = useState(Date.now());
    // const bday = new Date(2000, 11, 2,);
    // const color = "#000";
    const [nationality, setNationality] = useState('Filipino');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactNumber, setContactNumber] = useState();
    const [email, setEmail] = useState();
    const [birthday, setBirthDay] = useState(new Date());
    const [nationalityValue, setNationalityValue] = useState();
    const [gender, setGender] = useState('male');
    const [address, setAddress] = useState();
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const { emailRef, contactNumberRef, userNameRef } = useRef();
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

        axios.get('http://localhost:3001/api/getAllUsers').then((res) => {
            console.log(res.data)

            if (res.data.length != 0) {
                // res.data.map((item) => {
                //     if (item.email == email) {
                //         emailRef.current.focus();
                //     }
                //     else if (item.contactNumber == contactNumber) {
                //         contactNumberRef.current.focus();
                //     }
                //     else if (item.userName == userName) {
                //         userNameRef.current.focus();
                //     }
                //     else {
                //         window.sessionStorage.setItem("email", email)
                //         window.sessionStorage.setItem("contactNumber", contactNumber)
                //         window.sessionStorage.setItem("userName", userName)
                //     }

                // })
                window.sessionStorage.setItem("email", email)
                window.sessionStorage.setItem("contactNumber", contactNumber)
                window.sessionStorage.setItem("userName", userName)
            }
            else {
                window.sessionStorage.setItem("email", email)
                window.sessionStorage.setItem("contactNumber", contactNumber)
                window.sessionStorage.setItem("userName", userName)
            }
            if (window.sessionStorage.getItem('email') !== null && window.sessionStorage.getItem('contactNumber') !== null && window.sessionStorage.getItem('userName') !== null) {
                window.sessionStorage.setItem("firstName", firstName);
                window.sessionStorage.setItem("lastName", lastName);
                window.sessionStorage.setItem("birthday", birthday);
                window.sessionStorage.setItem("nationality", nationality);
                window.sessionStorage.setItem("gender", gender);
                window.sessionStorage.setItem("address", address);
                window.sessionStorage.setItem("userName", userName);
                window.sessionStorage.setItem("password", password);

                window.location = '/billingSummary'
            }
        }).catch((err) => {
            console.log(err.res)
        })
        // axios.post('http://localhost:3001/api/addUser', {
        //     userName: userName,
        //     contactNumber: contactNumber,
        //     email: email,
        //     password: password,
        // }).then((res)=>{
        //     console.log(res.data);
        //     axios.post('http://localhost:3001/api/addGuest', {

        //     })
        // }).catch((err)=>{
        //     console.log(err.res);
        // })


    }

    return (
        <Container>
            <ContainerChild>
                <ContainerForm onSubmit={createGuestInformation}>
                    <ContainerFormContent >

                        <InputContainer>
                            <TextField
                                placeholder='First Name'
                                label="First Name"
                                variant="outlined"
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value)
                                }}
                                style={{ width: '55%', }}
                                required />

                            <TextField
                                placeholder='Last Name'
                                label="Last Name"
                                variant="outlined"
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value)
                                }}
                                style={{ width: '55%', }}
                                required />
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
                                }}
                                style={{ width: '55%', }}
                                ref={emailRef}
                                required />

                            <TextField
                                placeholder='Contact Number'
                                label="Contact Number"
                                variant="outlined"
                                type='tel'
                                value={contactNumber}
                                onChange={(e) => {
                                    setContactNumber(e.target.value)
                                }}
                                ref={contactNumberRef}
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
                                placeholder='Address'
                                label="Address"
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

                            <TextField
                                placeholder='Special Instruction'
                                label="Special Instruction"
                                variant="outlined"
                                type='textarea'
                                multiline
                                rows={4}
                                style={{ width: '95%', }}
                                required />
                        </InputContainer>
                        <p><h1 style={{ display: 'inline' }}>Create an account </h1>(optional)*</p>
                        <InputContainer>
                            <TextField
                                placeholder='Username'
                                label="Username"
                                variant="outlined"
                                ref={userNameRef}
                                value={userName}
                                onChange={(e) => {
                                    setUserName(e.target.value)
                                }}
                                style={{ width: '55%', }} />

                            <TextField
                                placeholder='Password'
                                label="Password"
                                type='password'
                                variant="outlined"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                style={{ width: '55%', }} />
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