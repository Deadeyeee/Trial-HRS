import { BankContentContainer, BankDetailsContainer, BankTitleContainer, BrokenHorizontalLine, ButtonHolder, ChargeSummaryContainer, ChargeSummaryContentContainer, Container, GeneratedAccountContainer, GeneratedAccountContentContainer, GeneratedAccountContents, HorizontalLine, ReservationInformationContainer, ReservationInformationContentsContainer} from './Styles'
import { Title } from '../../components/title/styles';
import { Button } from '../../components/button/styles';

import React from 'react'

function BookingConfirmationCont() {
  return (
    <Container>
        <Title
            weight='400'   
            size='66px'
            fstyle='Normal'
            margin='100px 0px 10px 0px'
            align='Center'
            color='#bfaa7e'
        >
            Booking Confirmation
        </Title>
        <HorizontalLine></HorizontalLine>
        <Title
            family='raleway, sans-serif'
            color='#292929'
            weight='400'   
            size='37px'
            fstyle='Normal'
            margin='50px 0px 10px 0px'
            align='Center'
            overflow='visible'
        >
            Thank you for choosing <b>RM Luxe Hotel</b>
        </Title>
        <Title
            family='raleway, sans-serif'
            color='#292929'
            weight='400'   
            size='25px'
            fstyle='Normal'
            margin='50px 0px 10px 0px'
            align='Center'
            overflow='visible'
            
        >
            Your booking is put on <b style={{color: '#c9d81c'}}>HOLD</b> until confirmation of Bank Deposit/Transfer is made
        </Title>
        <Title
            family='raleway, sans-serif'
            color='#292929'
            weight='400'   
            size='25px'
            fstyle='Normal'
            margin='25px 0px 10px 0px'
            align='Center'
            
        >
            <b>Instructions on how to make the payment:</b>
        </Title>
        <Title
            family='raleway, sans-serif'
            color='#292929'
            overflow='visible'
            weight='400'   
            size='25px'
            fstyle='Normal'
            margin='25px 0px 10px 0px'
            align='Center'
            
        >
            Deposit payment through our bank account:
        </Title>
        <BankDetailsContainer>
            <BankTitleContainer>
                <Title
                    family= 'raleway, sans-serif'
                    weight= '700'
                    fstyle='Normal'
                    overflow='visible'
                    size= '25px'
                    color= '#2e2e2e'
                    align='left'     
                >
                   <b>Bank: </b>
                </Title>
                <Title
                    family= 'raleway, sans-serif'
                    weight= '700'
                    fstyle='Normal'
                    size= '25px'
                    color= '#2e2e2e'
                    align='left'
                >
                   <b>Bank Branch and Address: </b>
                </Title>
                <Title
                    family= 'raleway, sans-serif'
                    weight= '700'
                    fstyle='Normal'
                    size= '25px'
                    color= '#2e2e2e'
                    align='left'
                >
                   <b>Bank Swift Code: </b>
                </Title>
                <Title
                    family= 'raleway, sans-serif'
                    weight= '700'
                    fstyle='Normal'
                    size= '25px'
                    color= '#2e2e2e'
                    align='left'
                >
                   <b>Bank Routing Code/Sort Key/IFSC: </b>
                </Title>
                <Title
                    family= 'raleway, sans-serif'
                    weight= '700'
                    fstyle='Normal'
                    size= '25px'
                    color= '#2e2e2e'
                    align='left'
                >
                   <b>Beneficiary Name: </b>
                </Title>
                <Title
                    family= 'raleway, sans-serif'
                    weight= '700'
                    fstyle='Normal'
                    size= '25px'
                    color= '#2e2e2e'
                    align='left'
                >
                   <b>Beneficiary Account Number: </b>
                </Title>
            </BankTitleContainer>
            <BankContentContainer>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                BANK NAME 
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                Bank Branch Address
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                Bank Swift Code
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                Bank Routing Code/Sort Key/IFSC: 
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                Beneficiary Name:
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                Beneficiary Account Number:
            </Title>
            </BankContentContainer>
        </BankDetailsContainer>
        <BankContentContainer>
        <Title
            family= 'raleway, sans-serif'
            weight= '400'
            fstyle='Normal'
            size= '25px'
            color= '#2e2e2e'
            align='center' 
            margin='0px 200px'    
        >
            To confirm your reservation, please make your deposit three days before your check-in date. Please email your proof of payment to <b>(COMPANY EMAIL)</b> or upload it to your user account by <a href='/login'>logging in</a> to our website and going to the PAYMENT SECTION so we can verify the payment. Once your payment has been verified, you will receive a booking confirmation.
        </Title>
        <Title
            family= 'raleway, sans-serif'
            weight= '400'
            fstyle='Normal'
            size= '25px'
            color= '#2e2e2e'
            align='center' 
            margin='25px 200px'    
        >
            For further information, please send an email to Company email, or <a href='/login'>message us</a> through your account. You will find the details of your reservation made below.
        </Title>
        </BankContentContainer>
        <Title
            family= 'poppins, sans-serif'
            weight= '700'
            fstyle='Normal'
            size= '36px'
            color= '#ff4040'
            align='center' 
            margin='10px 0px 25px 0px'    
        >
            <b>***IMPORTANT***</b>
        </Title>
        <GeneratedAccountContainer>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fstyle='Normal'
                size= '36px'
                color= '#2e2e2e'
                align='center' 
                margin='25px 200px' 
            >
                <b>Your User Account</b>
            </Title>
            <GeneratedAccountContentContainer>
                <GeneratedAccountContents>
                    <Title
                        family= 'raleway, sans-serif'
                        weight= '400'
                        fstyle='Normal'
                        size= '25px'
                        color= '#2e2e2e'
                        align='left' 
                        margin='25px 200px' 
                    >
                        User Name
                    </Title>
                    <Title
                        family= 'raleway, sans-serif'
                        weight= '400'
                        fstyle='Normal'
                        size= '25px'
                        color= '#2e2e2e'
                        align='left' 
                        margin='25px 200px' 
                    >
                        Password
                    </Title>
                </GeneratedAccountContents>
                <GeneratedAccountContents>
                    <Title
                        family= 'raleway, sans-serif'
                        weight= '700'
                        fstyle='Normal'
                        size= '25px'
                        color= '#2e2e2e'
                        align='left' 
                        margin='25px 100px' 
                    >
                        <b>: Pedrojuan001221</b>
                    </Title>
                    <Title
                        family= 'raleway, sans-serif'
                        weight= '700'
                        fstyle='Normal'
                        size= '25px'
                        color= '#2e2e2e'
                        align='left' 
                        margin='25px 100px' 
                    >
                        <b>: ********</b>
                    </Title>
                </GeneratedAccountContents>           
            </GeneratedAccountContentContainer>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fstyle='Italic'
                size= '25px'
                color= '#2e2e2e'
                align='Center' 
                margin='50px 60px 10px 60px' 
            >
                <b>You can use this account to sign in to our website for you to be able to see the status of your 
                bookings and you may also use this user account to send your proof of payment here on our website.</b>
            </Title>
        </GeneratedAccountContainer>
        <Title
            family= 'raleway, sans-serif'
            weight= '700'
            fstyle='Normal'
            size= '36px'
            color= '#2e2e2e'
            align='Center' 
            margin='60px 0px 0px 0px' 
        >
            <b>Reservation Information</b>    
        </Title>
        <ReservationInformationContainer>
            <ReservationInformationContentsContainer>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                Reservation Number. 
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                Reservation Date. 
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                Payment Mode 
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                Payment Type 
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                Guest Name 
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                Birthdate 
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                Nationality 
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                Email Address 
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                Address 
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                Contact Number 
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                Check-In Date 
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                Check-Out Date 
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                Night(s) 
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                Room:
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                Total No. of adult 
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                Total No. of kids 
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                Special Request(s)
            </Title>
            </ReservationInformationContentsContainer>
            <ReservationInformationContentsContainer>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                <b>: 091234568</b>
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                <b>: 03/01/2022</b>
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fstyle='Normal' 
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                <b>: Bank (MetroBank)</b>
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fstyle='Normal' 
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                <b>: Down Payment</b>
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                <b>: Pedro Juan</b>
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                <b>: 2000/12/21</b>
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                <b>: Filipino</b>
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                <b>: PedroJuan@gmail.com</b>
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'    
                width='' 
            >
                <b>: Cecilia Chapman 711...</b>
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                <b>: 09292333312</b>
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                <b>: 03/04/2022</b>
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                <b>: 03/08/20222</b>
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                <b>: 4 nights</b>
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                <b>: Premium Room 102</b>
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                <b>: 2</b>
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                <b>: 0</b>
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
            >
                <b>: none</b>
            </Title>
            </ReservationInformationContentsContainer>
        </ReservationInformationContainer>
        <Title
            family= 'raleway, sans-serif'
            weight= '700'
            fstyle='Normal'
            size= '36px'
            color= '#2e2e2e'
            align='Center' 
        >
            <b>Charge Summary</b>
        </Title>
        <ChargeSummaryContainer>
            <ChargeSummaryContentContainer>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'     
                margin='0px 100px 0px 0px'   
            >
                Room Rate
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'
                margin='0px 100px 0px 0px'      
            >
                Total Night(s)
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'
                margin='0px 100px 0px 0px'      
            >
                Discount
            </Title>
            </ChargeSummaryContentContainer>
            <ChargeSummaryContentContainer>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left' 
                margin='0px 0px 0px 100px'    
            >
                : ₱2,000
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'
                margin='0px 0px 0px 100px'      
            >
                : 4
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fstyle='Normal'
                size= '25px'
                color= '#2e2e2e'
                align='left'
                margin='0px 0px 0px 100px'      
            >
                : None
            </Title>
            </ChargeSummaryContentContainer>
        </ChargeSummaryContainer>
        <BrokenHorizontalLine></BrokenHorizontalLine>
        <ChargeSummaryContainer>
            <ChargeSummaryContentContainer>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fstyle='Normal'
                size= '30px'
                color= '#2e2e2e'
                align='left'     
                margin='0px 100px 0px 0px'   
            >
                <b>Grand Total</b>
            </Title>
            </ChargeSummaryContentContainer>
            <ChargeSummaryContentContainer>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fstyle='Normal'
                size= '30px'
                color= '#13ed34'
                align='left' 
                margin='0px 0px 0px 100px'    
            >
                : ₱8,000
            </Title>
            </ChargeSummaryContentContainer>
        </ChargeSummaryContainer>
        <ButtonHolder>
            <Button
                whileHover={{ backgroundColor: "#302B20", color: "white" }}
                w='200px'
                h='60px'
                textcolor="black"
                fam='Times New Roman'
                weight='-400'
                fontStyle='Italic'
                radius="0px"
                border="1px solid #8F805F"
                margin='30px 100px 0px 0px'
                fontsize='16px'
                bg='#DFD3B9'
                href='/login'
            >
                Login
            </Button>
            <Button
                whileHover={{ backgroundColor: "#White", color: "black" }}
                w='200px'
                h='60px'
                textcolor="white"
                fam='Times New Roman'
                weight='-400'
                fontStyle='Italic'
                radius="0px"
                border="1px solid #8F805F"
                margin='30px 0px 0px 100px'
                fontsize='16px'
                bg='#2e2e2e'
            >
                Print/Save as PDF
            </Button>
        </ButtonHolder>
    </Container>
  )
}

export default BookingConfirmationCont