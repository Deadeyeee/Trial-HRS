import React from 'react'
import { Title } from '../../components/title/styles'
import { TextInput } from '../../components/textBox/style'
import { Button } from '../../components/button/styles'
import { ChangePasswordNewHolder } from './Styles'


function ConfirmNewPasswordCont() {
    return (
        <ChangePasswordNewHolder>
            <Title
                family='Roboto Slab'
                weight='100'
                margin='10px 0px 15px 0px'
            >
                Forgot Password
            </Title>
            <TextInput
                background='white'
                margins='10px 0px 10px 0px'
                placeholder='Enter New Password'
            >
            </TextInput>
            <TextInput
                background='white'
                margins='10px 0px 10px 0px'
                placeholder='Confirm New Password'
            >
            </TextInput>
            <Button
                bg='#60553F'
                w='286px'
                h='30px'
                margin='10px 0px 15px 0px'
                padding='0.5px'
                fam='Raleway'
                fontStyle='normal'
            >
                Save New Password
            </Button>
        </ChangePasswordNewHolder>
    )
}

export default ConfirmNewPasswordCont