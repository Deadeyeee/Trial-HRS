import React from 'react'
import logo from '../../images/logo.png';
import 'font-awesome/css/font-awesome.min.css';
import { Title } from '../../components/title/styles'
import { TextInput } from '../../components/textBox/style'
import { Button, FormButton } from '../../components/button/styles'
import { ChangePasswordNewHolder, Logo } from './Styles'


function ConfirmNewPasswordCont() {
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
            <TextInput
                family='FontAwesome'
                background='white'
                margins='10px 0px 10px 0px'
                placeholder='  &#xf023;  Enter new password'
            >
            </TextInput>
            <TextInput
                family='FontAwesome'
                background='white'
                margins='10px 0px 10px 0px'
                placeholder='  &#xf023;  Confirm new password'
            >
            </TextInput>
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
                onClick={()=>{window.location.href=''}}
            ></FormButton>
        </ChangePasswordNewHolder>
    )
}

export default ConfirmNewPasswordCont