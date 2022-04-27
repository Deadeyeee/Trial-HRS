import React, { useState, useEffect } from 'react'
import { Container, ContentContainer } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import ProfileContainer from '../../containers/profileContainer/ProfileContainer';
import ClientProfileCont from '../../containers/clientProfile/ClientProfileCont';
import Navprofile from '../../components/navigationBar/Navprofile';

export const Profile = () => {
    return (
        <Container>
            <ChatBot />
            <Navprofile/>
            <ContentContainer>
                <ProfileContainer profile></ProfileContainer>
                <ClientProfileCont></ClientProfileCont>
            </ContentContainer>
            <Footer />
        </Container >
    )
}


export default Profile;