import React, { useEffect } from 'react'
import { ProfileContainer } from '../../containers/frontProfileContainer/ProfileContainer'
import SideBarNav from '../../containers/frontSideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/frontSideBar/style'
import { Container } from './style'

function ProfileFront() {
    useEffect(() => {
        document.title = "Front Desk | Profile"
      }, [])
    return (
        <Container>
            <ContainerInvisible></ContainerInvisible>
            <SideBarNav profile />
            <ProfileContainer/>
        </Container>
    )
}

export default ProfileFront