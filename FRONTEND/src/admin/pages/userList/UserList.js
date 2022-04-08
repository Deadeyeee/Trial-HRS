import React from 'react'
import SideBarNav from '../../containers/sideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/sideBar/style'
import UserListContainer from '../../containers/userListContainer/UserListContainer'
import { Container } from './style'

const UserList = () => {
  return (
    <Container>
        <ContainerInvisible></ContainerInvisible>
        <SideBarNav userList/>
        <UserListContainer/>
    </Container>
  )
}

export default UserList