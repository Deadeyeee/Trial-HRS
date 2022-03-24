import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import ProfileContainer from '../../containers/profileContainer/ProfileContainer';
export const Profile = () => {
    return (
        <Container>
            <ChatBot />
            <NavigationBar home />
            <ProfileContainer profile></ProfileContainer>
            <Footer />
        </Container >
    )
}


export default Profile;