import React from 'react'
import Background from '../../../components/background/Background'
import ConfirmNewPasswordCont from '../../../containers/confirmNewPassword/ConfirmNewPasswordCont'
import { Container } from '../style'

function ConfirmNewPassword() {
    return (
        <div>
            <Container>
                <ConfirmNewPasswordCont></ConfirmNewPasswordCont>
                <Background></Background>
            </Container>
        </div>
    )
}

export default ConfirmNewPassword