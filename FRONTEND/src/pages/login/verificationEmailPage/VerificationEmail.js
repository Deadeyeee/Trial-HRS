import React, { useEffect } from 'react'
import VerificationEmailCont from '../../../containers/verificationEmail/VerificationEmailCont'
import { Container } from '../style'
import Background from '../../../components/background/Background'
import Axios  from 'axios'

function VerificationEmail() {
    const resend = ()=>{
        Axios.post('http://localhost:3001/api/resendEmail',{
            id: localStorage.getItem('id'),
            email: localStorage.getItem('email'),
            userName: localStorage.getItem('userName')
        }).then((res) =>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err.res.data);
        });
    }
    return (
        <div>
            <Container>
                <VerificationEmailCont
                onClick={resend}
                >
                </VerificationEmailCont>
                <Background></Background>
            </Container>
        </div>
    )
}

export default VerificationEmail