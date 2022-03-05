import React, { useLayoutEffect, useState } from 'react'
import { FormButton } from '../../components/button/styles'
import { HorizontalLine } from '../../components/horizontalLine/HorizontalLine'
import { Description } from '../../components/paragraph/style'
import { TextInput } from '../../components/textBox/style'
import { Title } from '../../components/title/styles'
import { ContainerChild, ContainerSummary, Container, ContainerForm, GenderContainer, InputContainer, BookingSummaryContainer, LeftColumn, RightColumn, DeatilsContainer, ContainerFormContent } from './style'

const InformationForm = () => {

    const [paymentOption, setPaymentOption] = useState("");
    const [displayBanks, setDisplayBanks] = useState("");
    const [displayWallets, setDisplayWallets] = useState("");

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
                        <TextInput
                            width='45%'
                            type='text'
                            placeholder='First Name'
                            required
                        ></TextInput>
                        <TextInput
                            width='45%'
                            type='text'
                            placeholder='Last Name'
                            required
                        ></TextInput>
                    </InputContainer>


                    <InputContainer>
                        <TextInput
                            width='45%'
                            type='email'
                            placeholder='Email'
                            required
                        ></TextInput>
                        <TextInput
                            width='45%'
                            type='number'
                            placeholder='Contact Number'
                            required
                        ></TextInput>
                    </InputContainer>


                    <InputContainer>
                        <TextInput
                            width='45%'
                            onFocus={(e) => {
                                e.currentTarget.type = "date";
                                e.currentTarget.focus();
                            }}
                            onBlur={(e) => {
                                e.currentTarget.type = "text";
                                e.currentTarget.placeholder = "Birthday";
                            }}
                            placeholder='Birthday'
                            required
                        ></TextInput>
                        <TextInput
                            width='45%'
                            type='text'
                            placeholder='Nationality'
                            required
                        ></TextInput>
                    </InputContainer>

                    <InputContainer
                        justify='center'>
                        <GenderContainer>
                            <Title
                                size="20px">Male</Title>
                            <TextInput
                                margins='0px'
                                width='0%'
                                width='20px'
                                heigh='20px'
                                type='radio'
                                name='gender'
                                placeholder='Special Instruction'
                                required
                            ></TextInput>
                        </GenderContainer>
                        <GenderContainer>
                            <Title
                                size="20px">Female</Title>
                            <TextInput
                                margins='0px'
                                width='20px'
                                heigh='20px'
                                type='radio'
                                name='gender'
                                placeholder='Special Instruction'
                                
                            ></TextInput>
                        </GenderContainer>
                    </InputContainer>


                    <InputContainer>
                        <TextInput
                            width='95%'
                            type='email'
                            placeholder='Address'
                            required
                        ></TextInput>
                    </InputContainer>


                    <InputContainer>
                        <TextInput
                            width='95%'
                            type='textarea'
                            placeholder='Special Instruction'
                            required
                        ></TextInput>
                    </InputContainer>

                    <FormButton
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
                        margin='100px 0px 0px 0px'
                        fam='arial'
                        textcolor='#0C4426'
                        fontsize='20px'
                        fontStyle='normal'
                        type='submit'
                        value='Proceed'>
                    </FormButton>

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
                                    width='0%'
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
                                    width='0%'
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
                                    width='0%'
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