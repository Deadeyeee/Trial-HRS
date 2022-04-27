import React, { useLayoutEffect, useState } from 'react'
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

export const AdminInformationFormUser = () => {
    var Recaptcha = require('react-recaptcha');

    var callback = function () {
        console.log('Done!!!!');
    };
    const [paymentOption, setPaymentOption] = useState("");
    const [displayBanks, setDisplayBanks] = useState("");
    const [displayWallets, setDisplayWallets] = useState("");
    const [nationality, setNationality] = useState('Filipino');
    const [value, setValue] = useState(Date.now());
    const bday = new Date(2000, 11, 2,);
    const color = "#000";
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useLayoutEffect(() => {
        if (paymentOption === "E-Wallet payment") {
            setDisplayWallets("flex");
            setDisplayBanks("none");
        }
        else if (paymentOption === "Bank payment") {
            setDisplayBanks("flex");
            setDisplayWallets("none");
        }
        else {
            setDisplayBanks("none");
            setDisplayWallets("none");
        }
    }, [paymentOption])

    let payments = ["Pay at hotel", "Bank payment", "E-Wallet payment"];
    let banks = ["BDO", "PNB", "BPI"];
    let eWallets = ["Gcash", "Paymaya"];
    return (
        <Container>
            <ContainerChild>
                <ContainerForm>
                    <ContainerFormContent>

                        <InputContainer>
                            <TextField
                                placeholder='First Name'
                                label="First Name"
                                variant="outlined"
                                style={{ width: '55%', }} />

                            <TextField
                                placeholder='Last Name'
                                label="Last Name"
                                variant="outlined"
                                style={{ width: '55%', }} />
                        </InputContainer>


                        <InputContainer>
                            <TextField
                                placeholder='Email'
                                label="Email"
                                variant="outlined"
                                type='email'
                                style={{ width: '55%', }} />

                            <TextField
                                placeholder='Contact Number'
                                label="Contact Number"
                                variant="outlined"
                                type='tel'
                                patter
                                style={{ width: '55%', }} />
                        </InputContainer>



                        <InputContainer
                            justify='center'>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label"
                                    style={{ textAlign: 'center', }} >Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    defaultValue="female"
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
                                placeholder='Username'
                                label="Username"
                                variant="outlined"
                                style={{ width: '55%', }} />

                            <TextField
                                placeholder='Password'
                                label="Password"
                                type='password'
                                variant="outlined"
                                style={{ width: '55%', }} />
                        </InputContainer>


                        <InputContainer
                            justify='center'>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label"
                                    style={{ textAlign: 'center', }} >Position</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    defaultValue="Front Desk"
                                    name="row-radio-buttons-group">
                                    <FormControlLabel
                                        value="Front Desk"
                                        control={<Radio />}
                                        label="Front Desk"
                                    />
                                    <FormControlLabel
                                        value="Admin"
                                        control={<Radio />}
                                        label="Admin"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </InputContainer>

                    </ContainerFormContent>



                </ContainerForm>
            </ContainerChild>

        </Container>
    )
}


















export const AdminInformationFormFilledUser = () => {
    var Recaptcha = require('react-recaptcha');

    var callback = function () {
        console.log('Done!!!!');
    };
    const [paymentOption, setPaymentOption] = useState("");
    const [displayBanks, setDisplayBanks] = useState("");
    const [displayWallets, setDisplayWallets] = useState("");
    const [nationality, setNationality] = useState('Filipino');
    const [value, setValue] = useState(Date.now());
    const bday = new Date(2000, 11, 2,);
    const color = "#000";
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useLayoutEffect(() => {
        if (paymentOption === "E-Wallet payment") {
            setDisplayWallets("flex");
            setDisplayBanks("none");
        }
        else if (paymentOption === "Bank payment") {
            setDisplayBanks("flex");
            setDisplayWallets("none");
        }
        else {
            setDisplayBanks("none");
            setDisplayWallets("none");
        }
    }, [paymentOption])

    let payments = ["Pay at hotel", "Bank payment", "E-Wallet payment"];
    let banks = ["BDO", "PNB", "BPI"];
    let eWallets = ["Gcash", "Paymaya"];
    return (
        <Container>
            <ContainerChild>
                <ContainerForm>
                    <ContainerFormContent>

                        <InputContainer>
                            <TextField
                                placeholder='First Name'
                                label="First Name"
                                InputProps={{ readOnly: true }}
                                variant="outlined"
                                defaultValue='Shirly'
                                style={{ width: '55%', }} />

                            <TextField
                                placeholder='Last Name'
                                label="Last Name"
                                variant="outlined"
                                InputProps={{ readOnly: true }}
                                defaultValue='Tuz'
                                style={{ width: '55%', }} />
                        </InputContainer>


                        <InputContainer>
                            <TextField
                                placeholder='Email'
                                label="Email"
                                variant="outlined"
                                InputProps={{ readOnly: true }}
                                type='email'
                                defaultValue='ShirlyTuz@gmail.com'
                                style={{ width: '55%', }} />

                            <TextField
                                placeholder='Contact Number'
                                label="Contact Number"
                                variant="outlined"
                                defaultValue='09292333312'
                                InputProps={{ readOnly: true }}
                                type='tel'
                                patter
                                style={{ width: '55%', }} />
                        </InputContainer>




                        <InputContainer
                            justify='center'>
                            <FormControl >
                                <FormLabel id="demo-row-radio-buttons-group-label"
                                    style={{ textAlign: 'center', }} >Gender</FormLabel>
                                <RadioGroup
                                    row
                                    
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="row-radio-buttons-group">
                                    <FormControlLabel
                                        value="male"
                                        control={<Radio />}
                                        label="Male"
                                        disabled
                                    />
                                    <FormControlLabel
                                        value="female"
                                        control={<Radio />}
                                        label="Female"
                                        disabled
                                    />
                                    <FormControlLabel
                                        value="other"
                                        control={<Radio />}
                                        label="Other"
                                        disabled
                                    />
                                </RadioGroup>
                            </FormControl>
                        </InputContainer>

                        <InputContainer>
                            <TextField
                                placeholder='Username'
                                label="Username"
                                defaultValue='FDSK1'
                                InputProps={{ readOnly: true }}
                                variant="outlined"
                                style={{ width: '55%', }} />

                        </InputContainer>


                        <InputContainer
                            justify='center'>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label"
                                    style={{ textAlign: 'center', }} >Position</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    defaultValue="Front Desk"
                                    name="row-radio-buttons-group">
                                    <FormControlLabel
                                        value="Front Desk"
                                        control={<Radio />}
                                        label="Front Desk"
                                        disabled
                                    />
                                    <FormControlLabel
                                        value="Admin"
                                        control={<Radio />}
                                        label="Admin"
                                        disabled
                                    />
                                </RadioGroup>
                            </FormControl>
                        </InputContainer>

                    </ContainerFormContent>



                </ContainerForm>
            </ContainerChild>

        </Container>
    )
}








export const AdminInformationFormFilledEditUser = () => {
    var Recaptcha = require('react-recaptcha');

    var callback = function () {
        console.log('Done!!!!');
    };
    const [paymentOption, setPaymentOption] = useState("");
    const [displayBanks, setDisplayBanks] = useState("");
    const [displayWallets, setDisplayWallets] = useState("");
    const [nationality, setNationality] = useState('Filipino');
    const [value, setValue] = useState(Date.now());
    const bday = new Date(2000, 11, 2,);
    const color = "#000";
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useLayoutEffect(() => {
        if (paymentOption === "E-Wallet payment") {
            setDisplayWallets("flex");
            setDisplayBanks("none");
        }
        else if (paymentOption === "Bank payment") {
            setDisplayBanks("flex");
            setDisplayWallets("none");
        }
        else {
            setDisplayBanks("none");
            setDisplayWallets("none");
        }
    }, [paymentOption])

    let payments = ["Pay at hotel", "Bank payment", "E-Wallet payment"];
    let banks = ["BDO", "PNB", "BPI"];
    let eWallets = ["Gcash", "Paymaya"];
    return (
        <Container>
            <ContainerChild>
                <ContainerForm>
                    <ContainerFormContent>

                        <InputContainer>
                            <TextField
                                placeholder='First Name'
                                label="First Name"
                                
                                variant="outlined"
                                defaultValue='Shirly'
                                style={{ width: '55%', }} />

                            <TextField
                                placeholder='Last Name'
                                label="Last Name"
                                variant="outlined"
                                
                                defaultValue='Tuz'
                                style={{ width: '55%', }} />
                        </InputContainer>


                        <InputContainer>
                            <TextField
                                placeholder='Email'
                                label="Email"
                                variant="outlined"
                                
                                type='email'
                                defaultValue='ShirlyTuz@gmail.com'
                                style={{ width: '55%', }} />

                            <TextField
                                placeholder='Contact Number'
                                label="Contact Number"
                                variant="outlined"
                                defaultValue='09292333312'
                                
                                type='tel'
                                patter
                                style={{ width: '55%', }} />
                        </InputContainer>




                        <InputContainer
                            justify='center'>
                            <FormControl >
                                <FormLabel id="demo-row-radio-buttons-group-label"
                                    style={{ textAlign: 'center', }} >Gender</FormLabel>
                                <RadioGroup
                                    row
                                    
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    defaultValue="female"
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
                                placeholder='Username'
                                label="Username"
                                defaultValue='FDSK1'
                                
                                variant="outlined"
                                style={{ width: '55%', }} />

                        </InputContainer>


                        <InputContainer
                            justify='center'>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label"
                                    style={{ textAlign: 'center', }} >Position</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    defaultValue="Front Desk"
                                    name="row-radio-buttons-group">
                                    <FormControlLabel
                                        value="Front Desk"
                                        control={<Radio />}
                                        label="Front Desk"
                                        
                                    />
                                    <FormControlLabel
                                        value="Admin"
                                        control={<Radio />}
                                        label="Admin"
                                        
                                    />
                                </RadioGroup>
                            </FormControl>
                        </InputContainer>

                    </ContainerFormContent>



                </ContainerForm>
            </ContainerChild>

        </Container>
    )
}




