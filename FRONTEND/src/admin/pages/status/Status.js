import React, { useEffect } from 'react'
import SideBarNav from '../../containers/sideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/sideBar/style'
import StatusContainer from '../../containers/statusContainer/StatusContainer'
import { Container } from './style'

const Status = () => {
  useEffect(() => {
    document.title = "Admin | Client Status"
  }, [])
  return (
    <Container>
        <ContainerInvisible></ContainerInvisible>
        <SideBarNav clients />
        <StatusContainer />
    </Container>
  )
}

export default Status