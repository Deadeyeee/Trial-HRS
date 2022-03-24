import React, { useState, useEffect } from 'react'
import { Button, FormButton } from '../../components/button/styles';
import { Title } from '../../components/title/styles';
import logo from '../../images/logo.png';
import { Container, LoginBorder, Logo, RegistrationForm } from './style';
import Axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import Background from '../../components/background/Background';
import { TextInput } from '../../components/textBox/style';

export const Login = () => {
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


    const [loginStatus, setLoginStatus] = useState("");
    Axios.defaults.withCredentials = true;

    const checkAccount = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/auth/login',
            {
                userName: userName,
                email: email,
                password: password,
            },
        ).then((response) => {
            window.location.href = '/';
            setLoginStatus("");
            console.log(response.data)
        }).catch((err) => {
            setLoginStatus(err.response.data.message);
            console.log(err.response.data.message)
        });;
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/auth/verify-token").then((response) => {
            console.log(response.status)
            if (response.status === 200) {
                window.location.href = '/';
            }

        });
    });


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
                    >Welcome to RM Luxe Hotel</Title>

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
                            required
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
                        >Forgot your password?</Button>

                        <Title
                            animate={{ scale: [1, .95, 1] }}
                            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
                            size="12px"
                            family="arial"
                            margin="5px 0px 0px 0px"
                            color="red"
                            weight="normal"
                        >{loginStatus}</Title>

                        <Recaptcha
                            sitekey="6LdJnrkeAAAAAOt5k6Gz1_Op5iBm0Jm75Sl4PME_"
                            render="explicit"
                            verifyCallback={verifyCallback}
                            onloadCallback={callback}
                        />

                        <FormButton

                            whileHover={{
                                scale: 1.1, backgroundColor: "#8F805F",
                                border: "2px solid #2E2E2E", color: "rgb(255, 255, 255)"
                            }}
                            whileTap={{ scale: 1 }}
                            type="submit"
                            w='190px'
                            h='30px'
                            margin='40px 0 0 0'
                            textcolor='black'
                            radius='5px'
                            weight='bold'
                            value='Log in'
                        ></FormButton>
                    </RegistrationForm>

                    <Title
                        size="10px"
                        margin="20px 0px 10px 0px"
                    >OR</Title>

                    <Button
                        whileHover={{ scale: 1.2, color: "rgb(0,0,255)" }}
                        whileTap={{ scale: 1, color: "rgb(220,220,220)" }}
                        href='/register'
                        w='60px'
                        h='30px'
                        textcolor='black'
                        radius='5px'
                        weight='bold'
                        border='none'
                    >Sign Up</Button>

                </LoginBorder>


                {/*FROM THIS POINT WILL BE THE BACKGROUND ANIMATION*/}
                <Background></Background>
            </Container>
        </div>
    )
}


export default Login;