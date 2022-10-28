import React, { useEffect, useState } from 'react'
import { Title } from '../../components/title/styles'
import { TextInput } from '../../components/textBox/style'
import { Button, FormButton } from '../../components/button/styles'
import { ChangePasswordNewHolder, Logo } from './Styles'
import Axios from 'axios'
import logo from '../../images/logo.png';
import 'font-awesome/css/font-awesome.min.css';
import { useParams } from 'react-router-dom';
import { RegistrationForm } from '../../pages/login/style'
import { apiKey } from '../../../apiKey'



function ConfirmNewPasswordCont() {
    const { id } = useParams();
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")

    useEffect(() => {
        Axios.get(apiKey+'auth/verify-email-token/' + id).then((res) => {
        }).catch((err) => {
            window.location.href = '/404';
        });

        localStorage.clear();
    });

    const resetPassword = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            Axios.get(apiKey+'auth/verify-email-token/' + id).then((res) => {
                Axios.get(apiKey+'api/getUsers/' + res.data.id).then((res) => {
                    console.log(res.data.id)
                    Axios.patch(apiKey+'api/updateUsers/' + res.data.id, {
                        password: password,
                    }).then((res) => {
                        console.log(res.data);
                        console.log("Password Reset SuccessFully!");

                        window.location.href = '/resetPasswordSuccess';
                    }).catch((err) => {
                        console.log(err.res.data);
                        window.location.href = '/404';
                    });
                });
            });
        }
        else {
            setMessage("Password don't match.")
        }

    }
    return (
        <ChangePasswordNewHolder>.

            <a href="/">
                <Logo
                    src={logo}
                ></Logo>

            </a>
            <Title
                family='Playfair Display'
                weight='100'
                margin='10px 0px 15px 0px'
                fStyle='Bold'
            >
                Forgot Password
            </Title>
            <RegistrationForm onSubmit={resetPassword}>
                <TextInput

                    family='FontAwesome'
                    background='white'
                    margins='10px 0px 10px 0px'
                    placeholder='  &#xf023;  Enter new password'
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setMessage("");
                    }}
                    type='password'
                    required

                >
                </TextInput>
                <TextInput
                    family='FontAwesome'
                    background='white'
                    margins='10px 0px 10px 0px'
                    placeholder='  &#xf023;  Confirm new password'
                    type='password'
                    onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        setMessage("");
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
                >{message}
                </Title>
                <FormButton
                    whileHover={{
                        scale: 1.1, backgroundColor: "#8F805F",
                        border: "2px solid #2E2E2E", color: "rgb(255, 255, 255)"
                    }}
                    whileTap={{ scale: 1 }}
                    type="submit"
                    w='190px'
                    h='30px'
                    margin='20px 0 30px 0'
                    textcolor='black'
                    radius='5px'
                    weight='bold'
                    value='Save new password'
                >

                </FormButton>
            </RegistrationForm>
        </ChangePasswordNewHolder>
    )
}

export default ConfirmNewPasswordCont