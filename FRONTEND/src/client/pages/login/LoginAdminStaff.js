import React, { useState, useEffect, useRef } from 'react'
import { Button, FormButton } from '../../components/button/styles';
import { Title } from '../../components/title/styles';
import logo from '../../images/logo.png';
import { Container, LoginBorder, Logo, RegistrationForm } from './style';
import Axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import Background from '../../components/background/Background';
import { TextInput } from '../../components/textBox/style';
import ReCAPTCHA from "react-google-recaptcha";
import { apiKey } from '../../../apiKey';

export const LoginAdminStaff = () => {
    useEffect(() => {
        document.title = "Login"
    }, [])
    var Recaptcha = require('react-recaptcha');

    var callback = function () {
        console.log('Done!!!!');
    };

    var verifyCallback = function (response) {
        console.log(response);
    };
    // Axios.defaults.withCredentials = true;
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verify, setverify] = useState("");
    const captcha = useRef(null);
    const [verifyCaptcha, setVerifyCaptcha] = useState(false);
    const incorrectPassword = useRef(null);
    const incorrectEmail = useRef(null);


    const [loginStatus, setLoginStatus] = useState("");
    Axios.defaults.withCredentials = true;

    const captchaOnchange = (value) => {
        console.log("captcha:" + value);
        setVerifyCaptcha(true);
    }

    const checkAccount = (e) => {


        e.preventDefault();

        if (verifyCaptcha == false) {
            e.preventDefault();
            setLoginStatus("Please Verify that you are not a robot")
            captcha.current.focus();
        }
        else {
            Axios.post(apiKey + 'auth/loginAdmin',
                {
                    userName: userName,
                    email: email,
                    password: password,
                },
            ).then((response) => {
                window.location.href = '/admin/dashboard';

                setLoginStatus("");
            }).catch((err) => {
                if (verifyCaptcha == false) {
                    e.preventDefault();
                    setLoginStatus("Please Verify that you are not a robot")
                    captcha.current.focus();
                }
                else {
                    setLoginStatus(err.response.data.message);
                    console.log(err.response.data.message)
                    if (err.response.data.message == "Please verify your email address.") {
                        setverify("Click here to re-send Verification Code to your email")
                    }
                    else if (err.response.data.message == "Password is Incorrect.") {

                        incorrectPassword.current.focus();
                        incorrectPassword.current.select();
                    }
                    else if (err.response.data.message == "Username/Email or Password is incorrect. Please try again.") {

                        incorrectEmail.current.focus();
                        incorrectEmail.current.select();
                    }
                    else {
                        console.log(err.response.data.message)
                    }
                }

            });;
        }

    };

    useEffect(() => {
        Axios.get(apiKey + "auth/verify-token").then((response) => {
            if (response.status === 200) {
                if(response.data.role == 'ADMIN'){
                    window.location.href = '/admin/dashboard';
                }
                else{
                    window.location.href = '/';
                }
            }
        });
    }, []);

    useEffect(() => {
        window.verifyCaptcha = verifyCaptcha;
    })

    const verifyEmail = () => {
        Axios.get(apiKey + 'api/getAllUsers/').then((res) => {

            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].email == email || res.data[i].userName == userName) {
                    localStorage.setItem('id', res.data[i].id);
                    localStorage.setItem('email', res.data[i].email);
                    localStorage.setItem('userName', res.data[i].userName);
                    window.location.href = '/verifyEmail';
                    break;
                }

            }
        });
    }


    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: -0.2 },
    }

    return (
        <div>
            <Container>
                <LoginBorder
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ duration: 1.5 }}
                >

                    <a href="/">
                        <Logo
                            whileHover={{ backgroundColor: "#2E2E2E", borderRadius: "5px" }}
                            src={logo}
                        ></Logo>

                    </a>

                    <Title
                        margin="0px 0px 20px 0px"
                        fontSize='100%'
                        fstyle='none'
                    >Admin Login</Title>

                    <RegistrationForm
                        onSubmit={checkAccount}>
                        <TextInput
                            onChange={(e) => {
                                setUserName(e.target.value);
                                setEmail(e.target.value);
                                setLoginStatus("");
                            }}
                            placeholder="  &#xf007; Username or Email"
                            type="text"
                            family="FontAwesome"
                            letterSpacing='1px'
                            fontSize='16px'
                            ref={incorrectEmail}
                            required
                        ></TextInput>
                        <TextInput

                            onChange={(e) => {
                                setPassword(e.target.value);
                                setLoginStatus("");
                            }}
                            placeholder="  &#xf023;  Password"
                            family="FontAwesome"
                            type="password"
                            radius="0px"
                            letterSpacing='1px'
                            fontSize='16px'
                            required
                            ref={incorrectPassword}
                        ></TextInput>



                        <Button

                            whileHover={{ scale: 1.05, color: "rgb(255, 0, 0)" }}
                            whileTap={{ scale: 1, color: "rgb(220,220,220)" }}
                            w='auto'
                            h='30px'
                            textcolor='gray'
                            radius='5px'
                            weight='bold'
                            border='none'
                            fontStyle='normal'
                            fam='arial'
                            margin="0px 0px 0px auto"
                            fontsize='12px'
                            align='right'
                            onClick={() => { window.location.href = '/forgotPassword' }}
                        >Forgot your password?</Button>

                        <Title
                            animate={{ scale: [1, .95, 1] }}
                            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
                            size="14px"
                            family="arial"
                            margin="5px 0px 0px 0px"
                            color="red"
                            weight="bold"
                        >{loginStatus}</Title>
                        <Title
                            size="14px"
                            family="arial"
                            margin="5px 0px 0px 0px"
                            color="blue"
                            weight="normal"
                            cursor='pointer'
                            onClick={verifyEmail}
                        >{verify}</Title>

                        {/* <Recaptcha
                            sitekey="6LdJnrkeAAAAAOt5k6Gz1_Op5iBm0Jm75Sl4PME_"
                            render="explicit"
                            verifyCallback={verifyCallback}
                            onloadCallback={callback}
                            onChange={captchaOnchange}
                        /> */}
                        <ReCAPTCHA
                            sitekey="6LdJnrkeAAAAAOt5k6Gz1_Op5iBm0Jm75Sl4PME_"
                            ref={captcha}
                            onChange={captchaOnchange}
                        />,
                        <FormButton

                            whileHover={{
                                scale: 1, backgroundColor: "#8F805F",
                            }}
                            whileTap={{ scale: 1 }}
                            type="submit"
                            w='150px'
                            h='35px'
                            textcolor='white'
                            radius='20px'
                            weight='400'
                            border='none'
                            value='Log in'
                            bg='#2E2E2E'
                            fontStyle='none'
                            fontsize='1vw'
                            margin='0px 0px 10px 0px'
                            fam='Roboto'
                        ></FormButton>
                    </RegistrationForm>

                </LoginBorder>


                {/*FROM THIS POINT WILL BE THE BACKGROUND ANIMATION*/}
                <Background></Background>
            </Container>
        </div>
    )
}


export default LoginAdminStaff;