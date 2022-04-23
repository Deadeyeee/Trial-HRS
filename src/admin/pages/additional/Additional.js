import React from 'react'
import AdditionalsContainer from '../../containers/additionalsContainer/AdditionalsContainer'
import SideBarNav from '../../containers/sideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/sideBar/style'
import { Container } from './style'

const Additional = () => {
  return (
    <Container>
        <ContainerInvisible></ContainerInvisible>
        <SideBarNav additional/>
        <AdditionalsContainer/>
    </Container>
  )
}

export default Additional