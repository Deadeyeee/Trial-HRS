import React, { useEffect, useState } from 'react'
import { ChangePasswordHolder, Logo } from './Styles'
import logo from '../../images/logo.png';
import 'font-awesome/css/font-awesome.min.css';
import { TextInput } from '../../components/textBox/style'
import { Button, FormButton } from '../../components/button/styles'
import { Title } from '../../components/title/styles'
import Axios from 'axios'
import { RegistrationForm } from '../../pages/login/style'
import { apiKey } from '../../../apiKey';

function ForgotPasswordCont() {

    const [seconds, setSeconds] = useState(localStorage.getItem('timer'));
    const [minutes, setMinutes] = useState("");
    var timer;

    useEffect(() => {
        if (seconds != 0) {
            setSent(true);
        }
        timer = setInterval(() => {
            setSeconds(seconds - 1);
            localStorage.setItem('timer', seconds);
            if (seconds === 0) {
                clearInterval(timer);
            }
        }, 1000)
        if (seconds === 0 || seconds < 0) {
            localStorage.removeItem('timer');
            clearInterval(timer);
            setLoginStatus2("");
            setSent(false);
        }
        return () => clearInterval(timer);
    })

    const [loginStatus, setLoginStatus] = useState("");
    const [loginStatus2, setLoginStatus2] = useState("");
    const [sent, setSent] = useState(false);
    const [email, setEmail] = useState("");

    const verifyEmail = (e) => {
        e.preventDefault();
        Axios.get(apiKey + 'api/getAllUsers/').then((res) => {

            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].email == email && res.data[i].role != 'NON-USER') {

                    Axios.post(apiKey + 'api/resetPassword', {
                        id: res.data[i].id,
                        email: res.data[i].email,
                        userName: res.data[i].userName
                    }).then((res) => {
                        console.log(res.data);
                    }).catch((err) => {
                        console.log(err.res.data);
                    });
                    localStorage.setItem('timer', 60);
                    setSeconds(localStorage.getItem('timer'));
                    setSent(true);
                    setLoginStatus2("Email has been sent. Please check your Email to reset your Password.");
                    setLoginStatus("");
                    break;
                }
                else {
                    if (i == res.data.length - 1) {
                        setLoginStatus("Invalid email. This is only applicable for those who have created their account.");
                        setLoginStatus2("");
                    }
                }

            }
        });
    }

    return (
        <ChangePasswordHolder>
            <a href="/">
                <Logo
                    src={logo}
                ></Logo>

            </a>
            <Title
                family='Playfair Display'
                weight='100'
                margin='10px 0px 0px 0px'
                fStyle='Bold'
            >
                Forgot Password
            </Title>
            <p
                align='center'
                family='FontAwesome'
                margin='0px'
                size='20px'
            >
                Enter your Email Address
            </p>
            <RegistrationForm
                onSubmit={verifyEmail}
            >
                <TextInput

                    family='FontAwesome'
                    background='white'
                    type='email'
                    margins='10px 0px 10px 0px'
                    placeholder='&#xf0e0;   Email Address'
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setLoginStatus("");
                    }}
                    required
                >
                </TextInput>
                <Title
                    animate={{ scale: [1, .95, 1] }}
                    transition={{ ease: "linear", duration: 2, repeat: Infinity }}
                    size="14px"
                    family="arial"
                    margin="5px 0px 0px 0px"
                    color="red"
                    weight="bold"
                    w='300px'
                >{loginStatus}</Title>
                <Title
                    animate={{ scale: [1, .95, 1] }}
                    transition={{ ease: "linear", duration: 2, repeat: Infinity }}
                    size="14px"
                    family="arial"
                    margin="5px 0px 0px 0px"
                    color="green"
                    weight="bold"
                    w='300px'
                >{loginStatus2}</Title>
                <Title
                    animate={{ scale: [1, .95, 1] }}
                    transition={{ ease: "linear", duration: 2, repeat: Infinity }}
                    size="14px"
                    family="arial"
                    margin="5px 0px 0px 0px"
                    color="green"
                    weight="bold"
                    w='300px'
                >{timer}</Title>
                <FormButton
                    whileHover={sent ? 'none' : {
                        scale: 1.1, backgroundColor: "#8F805F",
                        border: "2px solid #2E2E2E", color: "rgb(255, 255, 255)"
                    }}
                    whileTap={{ scale: 1 }}
                    type="submit"
                    w='190px'
                    h='30px'
                    margin='10px 0px 20px 0px'
                    textcolor='black'
                    radius='5px'
                    weight='bold'
                    title={sent ? 'Please wait to Continue' : 'Continue'}
                    value={sent ? seconds : 'Continue'}
                    disabled={sent ? true : false}

                />
            </RegistrationForm>
        </ChangePasswordHolder>
    )
}

export default ForgotPasswordCont