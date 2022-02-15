import React from 'react'
import { ChangePasswordHolder, ChangePasswordNewHolder, Container, EmailVerificationHolder, EmailVerificationPhoto } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import BookingHome from '../../containers/HomepageBooking/HomeBooking';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import { Title } from '../../components/title/styles';
import { TextInput } from '../../components/textBox/style';
import { Button } from '../../components/button/styles';
export const Home = () => {
    return (
        <Container>
            <ChatBot />
            <NavigationBar home />
            <BookingHome title="Book Now!" />
            <ChangePasswordHolder>
                <Title
                    family='Roboto Slab'
                    weight='100'
                    margin='10px 0px 0px 0px'
                >
                    Forgot Password
                </Title>
                <p
                    align='center'
                    family='Roboto Slab'
                    margin='0px'
                    size='20px'
                >
                    Enter your Email Address
                </p>
                <TextInput
                    background='white'
                    margins='0px 0px 0px 50px'
                    placeholder='Email Address'
                >
                </TextInput>
                <Button
                    bg='#60553F'
                    w='286px'
                    h='30px'
                    margin='10px 0px 0px 50px'
                    padding='0.5px'
                    fam='Raleway'
                    fontStyle='normal'
                >
                    Continue
                </Button>
            </ChangePasswordHolder>
            <ChangePasswordNewHolder>
                <Title
                    family='Roboto Slab'
                    weight='100'
                    margin='10px 0px 0px 0px'
                >
                    Forgot Password
                </Title>
                <p
                    align='center'
                    family='Roboto Slab'
                    margin='0px'
                    size='20px'
                >
                    Enter your Email Address
                </p>
                <TextInput
                    background='white'
                    margins='0px 0px 30px 50px'
                    placeholder='Enter New Password'
                >
                </TextInput>
                <TextInput
                    background='white'
                    margins='0px 0px 30px 50px'
                    placeholder='Confirm New Password'
                >
                </TextInput>
                <Button
                    bg='#60553F'
                    w='286px'
                    h='30px'
                    margin='10px 0px 0px 50px'
                    padding='0.5px'
                    fam='Raleway'
                    fontStyle='normal'
                >
                    Save New Password
                </Button>
            </ChangePasswordNewHolder>
            <EmailVerificationHolder>
                <EmailVerificationPhoto></EmailVerificationPhoto>
                <Title
                    family='Roboto Slab'
                    weight='100'
                    margin='10px 0px 0px 0px'
                >
                    We've sent you an Email!
                </Title>
                <p
                    align='center'
                    family='Roboto Slab'
                    margin='px'
                    size='20px'
                >
                    Please check your Email and Verify your account.<br></br> If you don't see our email, Check your junk folder
                </p>
                <Button
                    bg='#60553F'
                    w='286px'
                    h='30px'
                    margin='10px 0px 0px 50px'
                    padding='0.5px'
                    fam='Raleway'
                    fontStyle='normal'
                >
                    Resend Verification Email
                </Button>
            </EmailVerificationHolder>
            <Footer />
        </Container >
    )
}


export default Home;