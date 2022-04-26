import React, { useEffect } from 'react'
import Background from '../../../components/background/Background'
import ForgotPasswordCont from '../../../containers/forgotPassword/ForgotPasswordCont'
import { Container } from '../style'

function ForgotPasswordPage() {
  useEffect(() => {
    document.title = "Forgot Password"
  }, [])
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