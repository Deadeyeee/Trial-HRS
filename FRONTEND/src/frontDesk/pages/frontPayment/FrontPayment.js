import React, { useEffect } from 'react'
import PaymentContainer from '../../containers/frontPaymentContainer/PaymentContainer'
import SideBarNav from '../../containers/frontSideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/frontSideBar/style'
import { Container } from './style'

const FrontPayment = () => {
  useEffect(() => {
    document.title = "Front Desk | Payment"
  }, [])
  return (
    <Container>
        <ContainerInvisible></ContainerInvisible>
        <SideBarNav payment/>
        <PaymentContainer/>
    </Container>
  )
}

export default FrontPayment