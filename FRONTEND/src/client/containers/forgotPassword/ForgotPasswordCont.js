import React from 'react'
import logo from '../../images/logo.png';
import 'font-awesome/css/font-awesome.min.css';
import { ChangePasswordHolder, Logo } from './Styles'
import { TextInput } from '../../components/textBox/style'
import { Button, FormButton } from '../../components/button/styles'
import { Title } from '../../components/title/styles'

function ForgotPasswordCont() {
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
            <TextInput

                family='FontAwesome'
                background='white'
                margins='10px 0px 10px 0px'
                placeholder='&#xf0e0;   Email Address'
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
                margin='10px 0px 20px 0px'
                textcolor='black'
                radius='5px'
                weight='bold'
                value='Continue'
                onClick={()=>{window.location.href=''}}
            ></FormButton>
        </ChangePasswordHolder>
    )
}

export default ForgotPasswordCont