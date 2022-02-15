import React from 'react'
import VerificationEmailCont from '../../../containers/verificationEmail/VerificationEmailCont'
import { Container } from '../style'
import Background from '../../../components/background/Background'

function VerificationEmail() {
    return (
        <div>
            <Container>
                <VerificationEmailCont>
                </VerificationEmailCont>
                <Background></Background>
            </Container>
        </div>
    )
}

export default VerificationEmail