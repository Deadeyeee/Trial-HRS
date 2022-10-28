import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apiKey } from '../../../../apiKey'
import Background from '../../../components/background/Background'
import ForgotPasswordCont from '../../../containers/forgotPassword/ForgotPasswordCont'
import { Container } from '../style'

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");


  useEffect(() => {
    document.title = "Forgot Password"
  }, [])

  useEffect(() => {
    Axios.get(apiKey+"auth/verify-token").then((response) => {
      if (response.status === 200) {
        window.location.href = '/';
      }
    });
  }, []);


  

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