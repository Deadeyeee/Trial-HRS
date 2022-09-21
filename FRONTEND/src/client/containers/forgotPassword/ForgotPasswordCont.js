import React, { useState } from 'react'
import { ChangePasswordHolder } from './Styles'
import logo from '../../images/logo.png';
import 'font-awesome/css/font-awesome.min.css';
import { TextInput } from '../../components/textBox/style'
import { Button, FormButton } from '../../components/button/styles'
import { Title } from '../../components/title/styles'
import Axios from 'axios'
import { RegistrationForm } from '../../pages/login/style'

function ForgotPasswordCont() {

    const [loginStatus, setLoginStatus] = useState("");
    const [loginStatus2, setLoginStatus2] = useState("");

    const [email, setEmail] = useState("");

    const verifyEmail = (e) => {
        e.preventDefault();
        Axios.get('http://localhost:3001/api/getAllUsers/').then((res) => {

            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].email == email) {

                    Axios.post('http://localhost:3001/api/resetPassword', {
                        id: res.data[i].id,
                        email: res.data[i].email,
                        userName: res.data[i].userName
                    }).then((res) => {
                        console.log(res.data);
                    }).catch((err) => {
                        console.log(err.res.data);
                    });
                    setLoginStatus2("Email has sent. Please check your Email to Reset your Password.");
                    setLoginStatus("");
                    break;
                }
                else {
                    setLoginStatus("Email not found!!!");
                    setLoginStatus2("");
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
                <FormButton
                    whileHover={{
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
                    value='Continue'

                />
            </RegistrationForm>
        </ChangePasswordHolder>
    )
}

export default ForgotPasswordCont