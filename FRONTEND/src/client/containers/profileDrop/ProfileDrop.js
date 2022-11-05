import React, { useState, useEffect } from 'react'
import { Container, ProfilePicture, DropDown, MainContainer, DropContainer, Menu, TitleCap } from './styles';
import logo from '../../images/profilePictures/emptyProfile.png';
import { Title } from '../../components/title/styles';
import Dropdown from '../../icons/dropdown.png';
import Profile from '../../icons/profile-user.png'
import LogoutLogo from '../../icons/logout.png'
import Book from '../../icons/book.png'
import Peso from '../../icons/peso.png'
import Messages from '../../icons/messages.png'
import { withTheme } from 'styled-components';
import Axios from 'axios';

export const ProfileDrop = (props) => {

    const [userName, setUserName] = useState("");

    const [isOpen, setIsOpen] = useState(false);
    const iconVariants = {
        opened: {
            display: "flex",
            clipPath: `circle(150% at 100% 0%)`,
            transition: {
                type: "spring",
                stiffness: 50,
                restDelta: 1
            },
        },
        closed: {
            clipPath: `circle(0% at 100% 0%)`,
            transition: {
                type: "spring",
                stiffness: 50,
                restDelta: 1
            },
        }
    };
    return (



        <MainContainer
            display={props.display}
        >
            <Container onClick={() => setIsOpen(!isOpen)}>
                <ProfilePicture
                    src={logo} href="/"
                ></ProfilePicture>
                <TitleCap>
                    <Title
                        size="15px"
                        color="#E1DACA"
                        family="Times New Roman;"
                        w="100%"
                        fstyle='normal'
                        overflow="hidden"
                        align="left"
                        cursor='pointer'
                        textOverflow='ellipsis'
                        whiteSpace='nowrap'
                    >{props.userName}</Title>
                </TitleCap>
                <DropDown src={Dropdown}></DropDown>
            </Container>
            <DropContainer
                initial={false}
                variants={iconVariants}
                animate={isOpen ? "opened" : "closed"}>
                <Menu
                    href='/client/profile'
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                    whileHover={{
                        backgroundColor: "#8F805F",
                        borderRadius: "3px", Color: "white"
                    }}
                >
                    <ProfilePicture
                        src={Profile} href="/"
                    ></ProfilePicture>
                    <Title
                        display="inline"
                        size="16px"
                        color="#2E2E2E"
                        weight="normal"
                        cursor='pointer'
                        family="georgia">Profile</Title>
                </Menu>
                <Menu
                    href='/client/bookinginfo'
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                    whileHover={{
                        backgroundColor: "#8F805F",
                        borderRadius: "3px"
                    }}
                >
                    <ProfilePicture
                        src={Book} href="/"
                    ></ProfilePicture>
                    <Title
                        size="16px"
                        color="#2E2E2E"
                        weight="normal"
                        cursor='pointer'
                        family="georgia">Bookings</Title>
                </Menu>
                <Menu
                    href='/client/paymentInfo'
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                    whileHover={{
                        backgroundColor: "#8F805F",
                        borderRadius: "3px"
                    }}
                >
                    <ProfilePicture
                        src={Peso} href="/"
                    ></ProfilePicture>
                    <Title
                        size="16px"
                        color="#2E2E2E"
                        weight="normal"
                        cursor='pointer'
                        family="georgia">Payment</Title>
                </Menu>
                <Menu
                    href='/client/messages'
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                    whileHover={{
                        backgroundColor: "#8F805F",
                        borderRadius: "3px"
                    }}
                >
                    <ProfilePicture
                        src={Messages} href="/"
                    ></ProfilePicture>
                    <Title
                        size="16px"
                        color="#2E2E2E"
                        weight="normal"
                        cursor='pointer'
                        family="georgia">Messages</Title>
                </Menu>
                <Menu
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                    onClick={props.Logout}
                    whileHover={{
                        backgroundColor: "#8F805F", color: "white",
                        borderRadius: "2px"
                    }}
                >
                    <ProfilePicture
                        src={LogoutLogo}
                    ></ProfilePicture>
                    <Title
                        size="16px"
                        weight="normal"
                        cursor='pointer'
                        color="red"
                        family="georgia">Logout</Title>
                </Menu>
            </DropContainer>
        </MainContainer>
    )
}

export default ProfileDrop;
