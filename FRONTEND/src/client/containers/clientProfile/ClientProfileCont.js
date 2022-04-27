import React, { useState } from 'react'
import { ButtonHolder, Container, ProfileContent, ProfileContentContainer, ProfileInformationContent } from './styles'
import { Title } from '../../components/title/styles';
import { Button } from '../../components/button/styles';
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
    height: '90vh',
    overflow: 'scroll',
    width: '35%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '0.5rem',
    p: '0px 50px',
};

const ClientProfileCont = () => {

    const [paymentOption, setPaymentOption] = useState("");
    const [displayBanks, setDisplayBanks] = useState("");
    const [displayWallets, setDisplayWallets] = useState("");
    const [firstName, setFirstName] = useState('Pedro');
    const [lastName, setLastName] = useState('Juan');
    const [nationality, setNationality] = useState('Filipino');
    const [contactNumber, setcontactNumber] = useState('09292333312');
    const [address, setAddress] = useState('Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401');
    const [email, setEmail] = useState('PedroJuan@gmail.com');
    const [username, setUsername] = useState('Pedrojuan001221');

    const [value, setValue] = useState(Date.now());
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const bday = new Date(2000, 11, 2,);

    return (
        <Container>
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
                        Birthdate:
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='400'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='left'
                    >
                        Nationality:
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
                    <Title
                        family='raleway, sans-serif'
                        weight='400'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='left'
                    >
                        Address:
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
                        Pedro
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='400'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='right'
                    >
                        Juan
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='400'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='right'
                    >
                        PedroJuan@gmail.com
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='400'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='right'
                    >
                        09292333312
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='400'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='right'
                    >
                        2000/12/21
                    </Title>
                    <Title
                        family='raleway, sans-serif'
                        weight='400'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='right'
                    >
                        Filipino
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
                    <Title
                        family='raleway, sans-serif'
                        weight='400'
                        fstyle='Normal'
                        size='20px'
                        color='#2e2e2e'
                        align='right'
                        w="250px"
                    >
                        Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401
                    </Title>
                </ProfileContent>
            </ProfileContentContainer>
            <ProfileContentContainer>
                <ProfileInformationContent>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fStyle='Bold'
                        size='20px'
                        color='#2e2e2e'
                        align='left'
                        overflow='visible'
                    >
                        User Name:
                    </Title>
                </ProfileInformationContent>
                <ProfileInformationContent>
                    <Title
                        family='raleway, sans-serif'
                        weight='700'
                        fStyle='Bold'
                        size='20px'
                        color='#2e2e2e'
                        align='right'
                        overflow='visible'
                    >
                        Pedrojuan001221
                    </Title>
                </ProfileInformationContent>
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


                        <InputContainer>

                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker

                                    views={['day', 'month', 'year']}
                                    label="Birthday"
                                    value={bday}
                                    onChange={(newValue) => {
                                        setValue(newValue);
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
                                    label="Menu"
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
                            <TextField
                                placeholder='Address'
                                label="Address"
                                variant="outlined"
                                multiline
                                rows={4}
                                defaultValue={address}
                                style={{ width: '50%', }} />

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
                                    href="#">Reset Password
                                </Link>
                            </ContainerGlobal>

                        </InputContainer>

                        <Button
                            whileHover={{
                                scale: 1.05, backgroundColor: "#0C4426",
                                border: "2px solid #2E2E2E", color: "white"
                            }}
                            whileTap={{ scale: 1 }}
                            w='150px'
                            h='20px'
                            radius='0px'
                            padding='10px 0px'
                            border='2px solid black'
                            fam='arial'
                            textcolor='#0C4426'
                            fontsize='20px'
                            fontStyle='normal'
                            onClick={handleClose}>Update
                        </Button>

                        <FormButton
                            whileHover={{
                                scale: 1.05, backgroundColor: "rgba(219, 51, 51, 1)",
                                border: "2px solid #2E2E2E", color: "white"
                            }}
                            whileTap={{ scale: 1 }}
                            w='120px'
                            h='40px'
                            type='submit'
                            bg='rgba(219, 51, 51, 0.55)'
                            radius='0px'
                            padding='0px 0px'
                            border='2px solid black'
                            margin='0px 0px 0px 0px'
                            fam='arial'
                            textcolor='white'
                            fontsize='15px'
                            fontStyle='normal'
                            value='Cancel'
                            onClick={handleClose}>
                        </FormButton>
                </Box>
            </Modal>


        </Container>
    )
}

export default ClientProfileCont