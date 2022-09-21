import React from 'react'
import logo from '../../images/logo.png';
import 'font-awesome/css/font-awesome.min.css';
import { Title } from "../../components/title/styles"
import { Button, FormButton } from "../../components/button/styles"
import { EmailVerificationHolder, EmailVerificationPhoto, Logo } from "./Styles"


function VerificationEmailCont(props) {
    return (
        <EmailVerificationHolder>
           <a href="/">
                <Logo
                src={logo}
                ></Logo>

            </a>
            <Title
                family='Playfair Display'
                weight='100'
                fStyle='Bold'
                w='450px'
            >
                We've sent you an Email!
            </Title>
            <p
                align='center'
                family='FontAwesome'
                size='20px'
            >
                Please check your email and verify your account.<br></br> If you don't see our email, check your junk or spam folder.
            </p>
            <FormButton
                whileHover={{
                    scale: 1.1, backgroundColor: "#8F805F",
                    border: "2px solid #2E2E2E", color: "rgb(255, 255, 255)"
                    }}
                whileTap={{ scale: 1 }}
                type="submit"
                w='190px'
                h='30px'
                margin='10px 0 20px 0'
                textcolor='black'
                radius='5px'
                weight='bold'
                value='Resend verification email'
                onClick={()=>{window.location.href=''}}
            ></FormButton>
            
        </EmailVerificationHolder>
    )
}

export default VerificationEmailCont

