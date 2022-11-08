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
import { apiKey } from '../../../apiKey';
import { Badge } from '@mui/material';

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




    const [userInformation, setUserInformation] = useState([])
    const [inbox, setInbox] = useState([])
    const [messagesDb, setMessagesDb] = useState([])

    useEffect(() => {
        Axios.get(apiKey + 'auth/verify-token').then((result) => {
            Axios.get(apiKey + 'api/getAllGuest').then((guest) => {
                guest.data.map((item) => {
                    if (result.data.id == item.user_id) {

                        setUserInformation(item)
                        Axios.get(apiKey + 'api/getAllDeleteConversation').then((deletedConversaiton) => {
                            Axios.get(apiKey + 'api/getAllMessage').then((messageResult) => {
                                setMessagesDb(messageResult.data.filter((obj1) => deletedConversaiton.data.filter((obj2) => obj2.message_id == obj1.id && obj2.delete_conversation_to == item.id).map((item) => item.message_id).includes(obj1.id) == false))

                                Axios.get(apiKey + 'api/getAllConversation').then((result) => {
                                    console.log("TEST1 :", result.data
                                        .filter((obj) => obj.from_guest_id == item.id || obj.to_guest_id == item.id)
                                        .filter((item2) => (
                                            messageResult.data.filter((obj) => obj.conversation_id == item2.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].message_to_guest_id == item.id
                                        )))
                                    console.log("TEST2 :", result.data
                                        .filter((obj) => obj.from_guest_id == item.id || obj.to_guest_id == item.id)
                                        .filter((item2) => (
                                            messageResult.data.filter((obj) => obj.conversation_id == item2.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].message_to_guest_id != item.id
                                        )))
                                    setInbox(result.data
                                        .filter((obj) => obj.from_guest_id == item.id || obj.to_guest_id == item.id)
                                        .filter((item2) => (
                                            messageResult.data.filter((obj) => obj.conversation_id == item2.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].message_to_guest_id == item.id
                                            &&
                                            messageResult.data.filter((obj) => obj.conversation_id == item2.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].status == false
                                            &&
                                            deletedConversaiton.data.filter((obj1) => obj1.delete_conversation_to == item.id).map((obj2) => obj2.message_id)
                                                .includes(
                                                    messageResult.data.filter((obj) => obj.conversation_id == item2.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].id
                                                ) == false
                                        )))

                                }).catch((err) => {
                                    console.log(err)

                                });
                            }).catch((err) => {
                                console.log(err)

                            });
                        }).catch((err) => {
                            console.log(err)

                        });

                    }
                })
                console.log(guest.data)
            }).catch((err) => {
                console.log(err)

            });
        }).catch((err) => {
            console.log(err)
        });
    }, [])


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
                    <Badge badgeContent={inbox.length != 0 ? inbox.length : 0} color="warning">

                        <ProfilePicture
                            src={Messages} href="/"
                        ></ProfilePicture>
                        <Title
                            size="16px"
                            color="#2E2E2E"
                            weight="normal"
                            cursor='pointer'
                            family="georgia">Messages</Title>
                    </Badge>
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
