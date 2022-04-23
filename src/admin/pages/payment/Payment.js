import React from 'react'
import PaymentContainer from '../../containers/paymentContainer/PaymentContainer'
import SideBarNav from '../../containers/sideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/sideBar/style'
import { Container } from './style'

const Payment = () => {
  return (
    <Container>
        <ContainerInvisible></ContainerInvisible>
        <SideBarNav payment/>
        <PaymentContainer/>
    </Container>
  )
}

export default Payment