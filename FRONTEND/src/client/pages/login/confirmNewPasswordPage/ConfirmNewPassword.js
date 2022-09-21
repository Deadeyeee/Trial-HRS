import React, { useEffect, useState } from 'react'
import Background from '../../../components/background/Background'
import ConfirmNewPasswordCont from '../../../containers/confirmNewPassword/ConfirmNewPasswordCont'
import { Container } from '../style'

function ConfirmNewPassword() {
    useEffect(() => {
        document.title = "Confirm New Password"
      }, [])

      
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