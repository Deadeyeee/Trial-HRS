import React from 'react'
import { ProfileContainer } from '../../containers/profileContainer/ProfileContainer'
import SideBarNav from '../../containers/sideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/sideBar/style'
import { Container } from './style'

function ProfileAdmin() {
    return (
        <Container>
            <ContainerInvisible></ContainerInvisible>
            <SideBarNav profile />
            <ProfileContainer/>
        </Container>
    )
}

export default ProfileAdmin