import React, { useEffect } from 'react'
import SideBarNav from '../../containers/sideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/sideBar/style'
import UserLogsContainer from '../../containers/userLogsContainer/UserLogsContainer'
import { Container } from './styles'

const UserLogs = () => {
  useEffect(() => {
    document.title = "Admin | User Logs"
  }, [])
  return (
    <Container>
        <ContainerInvisible></ContainerInvisible>
        <SideBarNav userlog/>
        <UserLogsContainer />

    </Container>
  )
}

export default UserLogs