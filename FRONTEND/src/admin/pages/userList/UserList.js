import axios from 'axios'
import React, { useEffect } from 'react'
import { apiKey } from '../../../apiKey'
import SideBarNav from '../../containers/sideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/sideBar/style'
import UserListContainer from '../../containers/userListContainer/UserListContainer'
import { Container } from './style'

const UserList = () => {
  useEffect(() => {
    document.title = "Admin | User List"
  }, [])

  useEffect(()=>{
    axios.get(apiKey + "auth/verify-token").then((result) => {
      if(result.data.role != 'ADMIN'){
        window.location.href = '/admin/dashboard'
      }
    }).catch((err) => {
      window.location.href = '/'
    });
  },[])
  return (
    <Container>
        <ContainerInvisible></ContainerInvisible>
        <SideBarNav userlist/>
        <UserListContainer/>
    </Container>
  )
}

export default UserList