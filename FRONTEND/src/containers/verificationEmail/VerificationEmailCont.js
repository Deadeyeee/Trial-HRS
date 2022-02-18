import { Title } from "../../components/title/styles"
import { Button } from "../../components/button/styles"
import { EmailVerificationHolder, EmailVerificationPhoto } from "./Styles"

import React from 'react'

function VerificationEmailCont(props) {
    return (
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
                margin='10px 0px 10px 0px'
                padding='0.5px'
                fam='Raleway'
                fontStyle='normal'
                onClick={props.onClick}
            >
                Resend Verification Email
            </Button>
        </EmailVerificationHolder>
    )
}

export default VerificationEmailCont

