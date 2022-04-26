import React, { useEffect } from 'react'
import SideBarNav from '../../containers/sideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/sideBar/style'
import UserListContainer from '../../containers/userListContainer/UserListContainer'
import { Container } from './style'

const UserList = () => {
  useEffect(() => {
    document.title = "Admin | User List"
  }, [])
  return (
    <Container>
        <ContainerInvisible></ContainerInvisible>
        <SideBarNav userlist/>
        <UserListContainer/>
    </Container>
  )
}

export default UserList