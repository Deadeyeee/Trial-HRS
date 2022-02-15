import React from 'react'
import { ChangePasswordHolder } from './Styles'
import { TextInput } from '../../components/textBox/style'
import { Button } from '../../components/button/styles'
import { Title } from '../../components/title/styles'

function ForgotPasswordCont() {
    return (
        <ChangePasswordHolder>
            <Title
                family='Roboto Slab'
                weight='100'
                margin='10px 0px 0px 0px'
            >
                Forgot Password
            </Title>
            <p
                align='center'
                family='Roboto Slab'
                margin='0px'
                size='20px'
            >
                Enter your Email Address
            </p>
            <TextInput
                background='white'
                margins='10px 0px 10px 0px'
                placeholder='Email Address'
            >
            </TextInput>
            <Button
                bg='#60553F'
                w='300px'
                h='30px'
                margin='10px 0px 15px 0px'
                padding='0.5px'
                fam='Raleway'
                fontStyle='normal'
            >
                Continue
            </Button>
        </ChangePasswordHolder>
    )
}

export default ForgotPasswordCont