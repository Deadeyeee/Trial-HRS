import React, { useEffect, useState } from 'react'
import { Title } from '../../components/title/styles'
import { TextInput } from '../../components/textBox/style'
import { Button, FormButton } from '../../components/button/styles'
import { ChangePasswordNewHolder } from './Styles'
import Axios from 'axios'
import { useParams } from 'react-router-dom';
import { RegistrationForm } from '../../pages/login/style'


function ConfirmNewPasswordCont() {
    const { id } = useParams();
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")

    useEffect(() => {
        Axios.get('http://localhost:3001/auth/verify-email-token/' + id).then((res) => {
        }).catch((err) => {
            window.location.href = '/404';
        });

        localStorage.clear();
    });

    const resetPassword = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            Axios.get('http://localhost:3001/auth/verify-email-token/' + id).then((res) => {
                Axios.get('http://localhost:3001/api/getUsers/' + res.data.id).then((res) => {
                    console.log(res.data.id)
                    Axios.patch('http://localhost:3001/api/updateUsers/' + res.data.id, {
                        password: password,
                    }).then((res) => {
                        console.log(res.data);
                        console.log("Password Reset SuccessFully!");
                    }).catch((err) => {
                        console.log(err.res.data);
                    });
                });
            });
        }
        else {
            setMessage("Password don't match.")
        }

    }
    return (
        <ChangePasswordNewHolder>
            <Title
                family='Roboto Slab'
                weight='100'
                margin='10px 0px 15px 0px'
                fStyle='Bold'
            >
                Forgot Password
            </Title>
            <RegistrationForm onSubmit={resetPassword}>
                <TextInput
                    background='white'
                    margins='10px 0px 10px 0px'
                    placeholder='Enter New Password'
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setMessage("");
                    }}
                    type='password'
                    required

                >
                </TextInput>
                <TextInput
                    background='white'
                    margins='10px 0px 10px 0px'
                    placeholder='Confirm New Password'
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
                    bg='#60553F'
                    w='286px'
                    h='30px'
                    margin='10px 0px 15px 0px'
                    padding='0.5px'
                    fam='Raleway'
                    fontStyle='normal'
                    type='submit'
                    name='Reset Password'
                >

                </FormButton>
            </RegistrationForm>
        </ChangePasswordNewHolder>
    )
}

export default ConfirmNewPasswordCont