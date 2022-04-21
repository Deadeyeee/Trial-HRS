import React, { useLayoutEffect, useState } from 'react'
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

const InformationForm = () => {
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
                                type='email'
                                multiline
                                rows={4}
                                style={{ width: '95%', }} />

                            <TextField
                                placeholder='Special Instruction'
                                label="Special Instruction"
                                variant="outlined"
                                type='textarea'
                                multiline
                                rows={4}
                                style={{ width: '95%', }} />
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
                        justify='center'
                        gap='0px'>
                            <FormControlLabel control={<Checkbox defaultChecked 
                            style={{ padding: '0px',  margin: '0px', }} 
                            />} />
                            <p style={{fontSize: '14px'}}>Kindly, check the box if you have read and agreed to RM Luxe Hotel's <a href='/'>Terms and Conditions</a></p>

                        </InputContainer>

                        <Recaptcha
                            sitekey="6LdJnrkeAAAAAOt5k6Gz1_Op5iBm0Jm75Sl4PME_"
                            render="explicit"
                            onloadCallback={callback}
                        />


                        <Button
                            whileHover={{
                                scale: 1.05, backgroundColor: "#0C4426",
                                border: "2px solid #2E2E2E", color: "white"
                            }}
                            whileTap={{ scale: 1 }}
                            w='400px'
                            h='60px'
                            radius='0px'
                            padding='10px 0px'
                            border='1px solid black'
                            fam='arial'
                            textcolor='#0C4426'
                            fontsize='20px'
                            fontStyle='normal'
                            href="/booking/confirmation">Proceed
                        </Button>

                        <FormButton
                            whileHover={{
                                scale: 1.05, backgroundColor: "rgba(219, 51, 51, 1)",
                                border: "2px solid #2E2E2E", color: "white"
                            }}
                            whileTap={{ scale: 1 }}
                            w='200px'
                            h='20px'
                            bg='rgba(219, 51, 51, 0.55)'
                            radius='0px'
                            padding='10px 0px'
                            border='1px solid black'
                            margin='0px 0px 0px 0px'
                            fam='arial'
                            textcolor='white'
                            fontsize='15px'
                            fontStyle='normal'
                            value='Cancel'>
                        </FormButton>
                    </ContainerFormContent>

                    <ContainerSummary>
                        <Title
                            color="f2f2f2"
                            size='20px'
                            margin="40px 0px"
                        >
                            SUMMARY
                        </Title>


                        <BookingSummaryContainer
                            direction='column'>
                            <Title
                                size='20px'
                                w='100%'
                                bg='#323232'
                                padding='10px 0px'
                                color='white'
                                weight='normal'
                            >
                                Booking Summary
                            </Title>
                            <DeatilsContainer>
                                <LeftColumn>
                                    <Description
                                        family='arial'
                                        align='left'
                                        size='16px'>
                                        Check-in:
                                    </Description>
                                    <Description
                                        family='arial'
                                        align='left'
                                        size='16px'>
                                        Check-out:
                                    </Description>
                                    <Description
                                        family='arial'
                                        align='left'
                                        size='16px'>
                                        Nights:
                                    </Description>
                                    <Description
                                        family='arial'
                                        align='left'
                                        size='16px'>
                                        Guests:
                                    </Description>
                                    <Description
                                        family='arial'
                                        align='left'
                                        size='16px'>
                                        Room Type
                                    </Description>
                                    <Description
                                        family='arial'
                                        align='left'
                                        size='16px'>
                                        Room Quantity:
                                    </Description>

                                </LeftColumn>
                                <RightColumn>
                                    <Description
                                        align='left'
                                        size='16px'>
                                        <b>03/04/2022</b>
                                    </Description>
                                    <Description
                                        align='left'
                                        size='16px'>
                                        <b>03/06/2022</b>
                                    </Description>
                                    <Description
                                        align='left'
                                        size='16px'>
                                        <b>4 nights</b>
                                    </Description>
                                    <Description
                                        align='left'
                                        size='16px'>
                                        <b>2 Guests</b>
                                    </Description>
                                    <Description
                                        align='left'
                                        size='16px'>
                                        <b>Premium room</b>
                                    </Description>
                                    <Description
                                        align='left'
                                        size='16px'>
                                        <b>1 Room only</b>
                                    </Description>

                                </RightColumn>
                            </DeatilsContainer>
                        </BookingSummaryContainer>



                        <BookingSummaryContainer
                            direction='column'>
                            <Title
                                size='20px'
                                w='100%'
                                bg='#323232'
                                padding='10px 0px'
                                color='white'
                                weight='normal'
                            >
                                Total charge
                            </Title>
                            <DeatilsContainer>
                                <LeftColumn>
                                    <Description
                                        family='arial'
                                        align='left'
                                        size='16px'>
                                        Room charges
                                    </Description>
                                    <Description
                                        family='arial'
                                        align='left'
                                        size='16px'>
                                        Total Nights:
                                    </Description>
                                    <Description
                                        family='arial'
                                        align='left'
                                        margin='20px 0px 0px 0px'
                                        size='17px'>
                                        GRAND TOTAL:
                                    </Description>


                                </LeftColumn>
                                <RightColumn>
                                    <Description
                                        align='left'
                                        size='16px'>
                                        <b>₱1000</b>
                                    </Description>
                                    <Description
                                        align='left'
                                        size='16px'>
                                        <b>x4</b>
                                    </Description>
                                    <Description
                                        align='left'
                                        margin='20px 0px 0px 0px'
                                        size='20px'
                                        color='green'>
                                        <b>₱4000</b>
                                    </Description>
                                </RightColumn>

                            </DeatilsContainer>

                        </BookingSummaryContainer>



                        <BookingSummaryContainer
                            direction='column'>

                            <Title
                                size='20px'
                                w='100%'
                                bg='#323232'
                                padding='10px 0px'
                                color='white'
                                weight='normal'
                            >
                                Payment method*
                            </Title>
                            {payments.map(result => (

                                <GenderContainer>
                                    <Title
                                        family='calibri'
                                        fStyle='normal'
                                        size="20px">{result}</Title>
                                    <TextInput
                                        margins='0px'
                                        width='20px'
                                        heigh='20px'
                                        type='radio'
                                        name='gender'
                                        value={result}
                                        onChange={(e) => {
                                            setPaymentOption(e.target.value);
                                        }}
                                        placeholder='Special Instruction'
                                        required
                                    ></TextInput>
                                </GenderContainer>
                            ))}


                        </BookingSummaryContainer>

                        <BookingSummaryContainer
                            display={displayBanks}
                            direction='column'>
                            <Title
                                size='20px'
                                w='100%'
                                bg='#323232'
                                padding='10px 0px'
                                color='white'
                                weight='normal'
                            >
                                Select Bank payment*
                            </Title>
                            {banks.map(result => (
                                <GenderContainer>
                                    <Title
                                        family='calibri'
                                        fStyle='normal'
                                        size="20px">{result}</Title>
                                    <TextInput
                                        margins='0px'
                                        width='20px'
                                        heigh='20px'
                                        type='radio'
                                        name='bank'
                                        value={result}
                                        placeholder='Special Instruction'
                                        required
                                    ></TextInput>
                                    <Title>
                                    </Title>
                                </GenderContainer>
                            ))}

                        </BookingSummaryContainer>



                        <BookingSummaryContainer
                            display={displayWallets}
                            direction='column'>

                            <Title
                                size='20px'
                                w='100%'
                                bg='#323232'
                                padding='10px 0px'
                                color='white'
                                weight='normal'

                            >
                                Select E-wallet payment*
                            </Title>
                            {eWallets.map(result => (
                                <GenderContainer>
                                    <Title
                                        family='calibri'
                                        fStyle='normal'
                                        size="20px">{result}</Title>
                                    <TextInput
                                        margins='0px'
                                        width='20px'
                                        heigh='20px'
                                        type='radio'
                                        name='eWallet'
                                        value={result}
                                        placeholder='Special Instruction'
                                        required
                                    ></TextInput>
                                </GenderContainer>
                            ))}


                        </BookingSummaryContainer>
                    </ContainerSummary>

                </ContainerForm>
            </ContainerChild>

        </Container>
    )
}

export default InformationForm