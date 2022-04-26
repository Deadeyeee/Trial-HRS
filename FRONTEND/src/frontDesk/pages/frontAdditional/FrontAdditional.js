import React, { useEffect } from 'react'
import AdditionalsContainer from '../../containers/frontAdditionalsContainer/AdditionalsContainer'
import SideBarNav from '../../containers/frontSideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/frontSideBar/style'
import { Container } from './style'

const FrontAdditional = () => {
  useEffect(() => {
    document.title = "Front Desk | Additional"
  }, [])
  return (
    <Container>
        <ContainerInvisible></ContainerInvisible>
        <SideBarNav additional/>
        <AdditionalsContainer/>
    </Container>
  )
}

export default FrontAdditional