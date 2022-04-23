import React from 'react'
import { ProfileContainer } from '../../containers/frontProfileContainer/ProfileContainer'
import SideBarNav from '../../containers/frontSideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/frontSideBar/style'
import { Container } from './style'

function ProfileFront() {
    return (
        <Container>
            <ContainerInvisible></ContainerInvisible>
            <SideBarNav profile />
            <ProfileContainer/>
        </Container>
    )
}

export default ProfileFront