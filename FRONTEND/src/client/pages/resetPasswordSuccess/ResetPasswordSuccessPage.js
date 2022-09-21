import React from 'react'
import ResetPasswordSuccessCont from '../../containers/resetPasswordSuccess/ResetPasswordSuccessCont'
import Background from '../../components/background/Background'
import { Container } from './style'


const ResetPasswordSuccessPage = () => {
  return (
    <div>
      <Container>
        <ResetPasswordSuccessCont></ResetPasswordSuccessCont>
        <Background></Background>
      </Container>
    </div>
  )
}

export default ResetPasswordSuccessPage