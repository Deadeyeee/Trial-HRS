import { Button } from '@mui/material'
import React, { useState } from 'react'
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine'
import { Title } from '../../../client/components/title/styles'
import { ContainerGlobal } from '../../components/container/container'
import { ButtonHolder, Container, ProfileContent, ProfileContentContainer, ProfileInformationContent, HeadContainer } from './style'

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
import { nationalities } from '../../../nationalities'
import { InputContainer } from '../../../client/containers/informationForm/style'
import { FormButton } from '../../../client/components/button/styles'


const style = {
    position: 'absolute',
    display: 'flex',
    top: '50%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center ',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    height: 'auto',
    width: '700px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    overflow: 'scroll',
    p: '20px 30px 40px 30px',
    borderRadius: '.5rem',
    gap: '20px',
};
export const ProfileContainer = () => {
    const [paymentOption, setPaymentOption] = useState("");
    const [displayBanks, setDisplayBanks] = useState("");
    const [displayWallets, setDisplayWallets] = useState("");
    const [firstName, setFirstName] = useState('Max');
    const [lastName, setLastName] = useState('Dela Cruz');
    const [nationality, setNationality] = useState('Filipino');
    const [contactNumber, setcontactNumber] = useState('09444447612');
    const [address, setAddress] = useState('Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401');
    const [email, setEmail] = useState('MaxDC@gmail.com');
    const [username, setUsername] = useState('MaxDelaCruz21');

    const [value, setValue] = useState(Date.now());
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const bday = new Date(2000, 11, 2,);
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
                    Greetings! Welcome to your profile, Dela Cruz Dela Cruz.
                </Title>
            </HeadContainer>
            <ContainerGlobal
                w='90%'
                h='auto'
                bg='WHITE'
                direction='column'
                align='center'
                justify='center'
                padding='10px 30px'
                margin='20px 0px 40px 0px'
                gap='10px'>
                <Title
                    size='26px'
                    color='black'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Profile Details
                </Title>
                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                >
                </HorizontalLine>
                <ProfileContentContainer>
                    <ProfileContent>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='20px'
                            color='#2e2e2e'
                            align='left'
                        >
                            First Name:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='20px'
                            color='#2e2e2e'
                            align='left'
                        >
                            Last Name:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='20px'
                            color='#2e2e2e'
                            align='left'
                        >
                            Email Address:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='20px'
                            color='#2e2e2e'
                            align='left'
                        >
                            Contact Number:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='20px'
                            color='#2e2e2e'
                            align='left'
                        >
                            Gender:
                        </Title>
                    </ProfileContent>
                    <ProfileContent>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='20px'
                            color='#2e2e2e'
                            align='right'
                        >
                            Max
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='20px'
                            color='#2e2e2e'
                            align='right'
                        >
                            Dela Cruz
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='20px'
                            color='#2e2e2e'
                            align='right'
                        >
                            MaxDC@gmail.com
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='20px'
                            color='#2e2e2e'
                            align='right'
                        >
                            09444447612
                        </Title>

                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='20px'
                            color='#2e2e2e'
                            align='right'
                        >
                            Male
                        </Title>
                    </ProfileContent>
                </ProfileContentContainer>
                <ProfileContentContainer>
                    <ProfileInformationContent
                        gap='20px'>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Bold'
                            size='20px'
                            color='#2e2e2e'
                            align='left'
                            overflow='visible'
                        >
                            User Name:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Bold'
                            size='20px'
                            color='#2e2e2e'
                            align='left'
                            overflow='visible'
                        >
                            Role:
                        </Title>
                    </ProfileInformationContent>

                    <ProfileInformationContent
                        gap='20px'>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Bold'
                            size='20px'
                            color='#2e2e2e'
                            align='right'
                            overflow='visible'
                        >
                            MaxDelaCruz21
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Bold'
                            size='20px'
                            color='#2e2e2e'
                            align='right'
                            overflow='visible'
                        >
                            Admin
                        </Title>
                    </ProfileInformationContent>
                </ProfileContentContainer>
            </ContainerGlobal>
            <Button variant="contained" size="large"
                style={{ backgroundColor: '#2E2E2E' }}
                onClick={handleOpen}>
                Edit Profile
            </Button>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Title
                        size='26px'
                        color='black'
                        family='Helvetica'
                        fstyle='Normal'
                        weight='600'
                        align='left'
                    >
                        Edit Profile
                    </Title>
                    <HorizontalLine
                        bg='gray'
                        w='100%'
                        margin='0px 0px 20px 0px'
                    />

                    <InputContainer>
                        <TextField
                            placeholder='First Name'
                            label="First Name"
                            defaultValue={firstName}
                            variant="outlined"
                            style={{ width: '55%', }} />

                        <TextField
                            placeholder='Last Name'
                            label="Last Name"
                            defaultValue={lastName}
                            variant="outlined"
                            style={{ width: '55%', }} />
                    </InputContainer>

                    <InputContainer>
                        <TextField
                            placeholder='Email'
                            defaultValue={email}
                            label="Email"
                            variant="outlined"
                            type='email'
                            style={{ width: '55%', }} />

                        <TextField
                            placeholder='Contact Number'
                            label="Contact Number"
                            defaultValue={contactNumber}
                            variant="outlined"
                            type='tel'
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
                                defaultValue="male"
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

                        <ContainerGlobal
                            direction='column'
                            w='50%'
                            overflow="visible"
                            gap="10px"
                            align="flex-end">
                            <TextField
                                placeholder='Username'
                                label="Username"
                                variant="outlined"
                                defaultValue={username}
                                style={{ width: '100%', }} />

                            <Link
                                href="/forgotpassword">Reset Password
                            </Link>
                        </ContainerGlobal>

                    </InputContainer>

                    <ContainerGlobal gap='30px'>
                        <Button variant="contained" size="large"
                            style={{ backgroundColor: '#50AA32' }}
                            onClick={handleClose}>
                            Update
                        </Button>
                        <Button variant="contained" size="large"
                            style={{ backgroundColor: '#FF2400' }}
                            onClick={handleClose}>
                            Cancel
                        </Button>
                    </ContainerGlobal>
                </Box>
            </Modal>
        </Container>
    )
}
