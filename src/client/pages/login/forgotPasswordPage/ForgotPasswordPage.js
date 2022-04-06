import React from 'react'
import Background from '../../../components/background/Background'
import ForgotPasswordCont from '../../../containers/forgotPassword/ForgotPasswordCont'
import { Container } from '../style'

function ForgotPasswordPage() {
  return (
    <div>
      <Container>
        <ForgotPasswordCont>
        </ForgotPasswordCont>
        <Background></Background>
      </Container>
    </div>
  )
}

export default ForgotPasswordPage