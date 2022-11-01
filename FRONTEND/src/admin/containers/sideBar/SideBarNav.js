import React, { useEffect, useLayoutEffect, useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import logo from '../../../client/images/logo.png'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PeopleIcon from '@mui/icons-material/People';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BookIcon from '@mui/icons-material/Book';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import MailIcon from '@mui/icons-material/Mail';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { Container, DescriptionContainer, Image, Logout, MenuContainer, ProfileContainer } from './style';
import { Title } from '../../../client/components/title/styles';
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine';
import LogoutIcon from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddIcon from '@mui/icons-material/Add';
import { Button, Grow } from '@mui/material';
import { ContainerGlobal, ContainerGlobal2 } from '../../components/container/container';
import Axios from 'axios'

import { apiKey } from '../../../apiKey';
const SideBarNav = (props) => {
    const [unreadMessage, setUnreadMessage] = useState([]);
    const [show, setShow] = useState(false);

    const [getUser, setGetUser] = useState([]);

    const signOut = () => {
        Axios.delete(apiKey + "auth/Logout").then((response) => {

            window.location.reload();
        })
    }

    Axios.defaults.withCredentials = true;
    useLayoutEffect(() => {
        Axios.get(apiKey + "auth/verify-token").then((response1) => {
            console.log(response1.data.role == 'CUSTOMER')
            if (response1.data.role == 'CUSTOMER' || response1.data.role == 'NON-USER') {
                window.location = '/'
            }
            else {
                Axios.get(apiKey + "api/getAllGuest/").then((response2) => {
                    console.log(response1.data)
                    for (let i = 0; i < response2.data.length; i++) {
                        if (response2.data[i].user_id == response1.data.id) {
                            setGetUser(response2.data[i]);


                            Axios.get(apiKey + 'api/getAllConversation').then((conversationResult) => {
                                console.log(conversationResult.data)
                                Axios.get(apiKey + 'api/getAllMessage').then((messageResult) => {
                                    console.log(messageResult.data)
                                    setUnreadMessage(
                                        conversationResult.data.map((item) => (
                                            messageResult.data.filter((obj) => obj.messageTo.user.role == 'ADMIN' || obj.messageTo.user.role == 'STAFF').filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].status
                                        ))
                                    )

                                }).catch((err) => {
                                    console.log(err)
                                })
                            }).catch((err) => {
                                console.log(err)
                            })
                        }
                    }
                }).catch((err) => {
                    console.log(err)
                })
            }

        }).catch((err) => {
            console.log(err.message)
            window.location = '/admin'

        });


    }, []);

    useEffect(() => {
        if (unreadMessage.length != 0) console.log('unreadMessage', unreadMessage.filter((obj) => obj == false).length)
    }, [unreadMessage])

    // const deleteModal = (

    //     <ContainerGlobal2
    //         w='100%'
    //         h='100%'
    //         radius='none'
    //         justify='center'
    //         align='center'
    //         bg='rgb(46, 46, 46, 0.9)'
    //         index='1'
    //         overflow='auto'
    //         active
    //     >
    //         <ContainerGlobal
    //             w='40%'
    //             h='auto'
    //             bg='white'
    //             direction='column'
    //             padding='30px'
    //             gap='10px'
    //             justify='center'
    //             align='center'
    //         >
    //             <Title
    //                 size='26px'
    //                 color='black'
    //                 family='Helvetica'
    //                 fstyle='normal'
    //                 weight='600'
    //                 align='left'
    //             >
    //                 Are you sure you want to <b style={{ color: 'red' }}>Logout</b>?
    //             </Title>
    //             <HorizontalLine
    //                 bg='gray'
    //                 w='100%'
    //                 margin='0px'
    //             />
    //             <ContainerGlobal gap='30px' overflow='vissible'>
    //                 <Button variant="contained"
    //                     style={{ backgroundColor: 'rgb(80, 170, 50)' }}
    //                     onClick={Logout}>
    //                     Yes
    //                 </Button>
    //                 <Button variant="contained"
    //                     style={{ backgroundColor: 'rgb(255, 36, 0)' }}
    //                     onClick={() => setShow(prev => !prev)}>
    //                     No
    //                 </Button>
    //             </ContainerGlobal>
    //         </ContainerGlobal>
    //     </ContainerGlobal2>
    // );




    const messageBadgeCount = () => {




    }
    return (
        <Container>
            <ProfileContainer
                href='/admin/profile'
                whileTap={{ scale: 0.98 }}
                active={props.profile == true}
            >
                <Image src={logo} />
                <DescriptionContainer>
                    <Title
                        size='16px'
                        color='white'
                        family='arial'
                        fstyle='normal'
                        cursor='pointer'
                    >{getUser.length != 0 ? getUser.firstName.toLowerCase() + " " + getUser.lastName.toLowerCase() : ""}</Title>
                    <Title
                        size='12px'
                        color='white'
                        family='arial'
                        fstyle='normal'
                        weight='normal'
                        align='left'
                        cursor='pointer'
                    >{getUser.length != 0 ? getUser.user.role == 'STAFF' ? 'Front Desk' : getUser.user.role : ''}</Title>

                </DescriptionContainer>
            </ProfileContainer>
            <HorizontalLine
                bg='white'
                w='100%'
                margin='0px'

            ></HorizontalLine>

            <MenuContainer
                href='/admin/dashboard'
                whileTap={{ scale: 0.98 }}
                active={props.dashboard == true}
            >
                <DashboardIcon
                    style={{ color: props.dashboard == true ? "#2E2E2E" : "#dddddd" }}
                    active={true}
                />

                <Title
                    size='14px'
                    color='white'
                    family='Helvetica'
                    cursor='pointer'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Dashboard
                </Title>
            </MenuContainer>
            <MenuContainer

                href='/admin/reservation'
                whileTap={{ scale: 0.98 }}
                active={props.reservation == true}
            >
                <CalendarMonthIcon
                    style={{ color: props.reservation == true ? "#2E2E2E" : "#dddddd" }}
                />

                <Title
                    size='14px'
                    color='white'
                    family='Helvetica'
                    cursor='pointer'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Reservations
                </Title>
            </MenuContainer>
            <MenuContainer

                href='/admin/booking'
                whileTap={{ scale: 0.98 }}
                active={props.booking == true}
            >
                <MenuBookIcon
                    style={{ color: props.booking == true ? "#2E2E2E" : "#dddddd" }}
                />

                <Title
                    size='14px'
                    color='white'
                    family='Helvetica'
                    cursor='pointer'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Booking
                </Title>
            </MenuContainer>

            <MenuContainer
                href='/admin/payments'
                whileTap={{ scale: 0.98 }}
                active={props.payment == true}>
                <AccountBoxIcon
                    style={{ color: props.payment == true ? "#2E2E2E" : "#dddddd" }}
                />

                <Title
                    size='14px'
                    color='white'
                    family='Helvetica'
                    cursor='pointer'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Payment
                </Title>
            </MenuContainer>

            <MenuContainer
                whileTap={{ scale: 0.98 }}

                href='/admin/status'
                active={props.clients == true}>
                <PeopleIcon
                    style={{ color: props.guest == true ? "#2E2E2E" : "#dddddd" }}
                />

                <Title
                    size='14px'
                    color='white'
                    family='Helvetica'
                    cursor='pointer'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Guests
                </Title>
            </MenuContainer>

            {getUser.length != 0 ? getUser.user.role == 'ADMIN' ? <MenuContainer

                href='/admin/userList'
                whileTap={{ scale: 0.98 }}
                active={props.userlist == true}>
                <AccountBoxIcon
                    style={{ color: props.userlist == true ? "#2E2E2E" : "#dddddd" }}
                />

                <Title
                    size='14px'
                    color='white'
                    family='Helvetica'
                    cursor='pointer'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    User List
                </Title>
            </MenuContainer> : '' : ''}

            {/* <MenuContainer

                href='/admin/userLogs'
                whileTap={{ scale: 0.98 }}
                active={props.userlog == true}>
                <BookIcon
                    style={{ color: props.userlog == true ? "#2E2E2E" : "#dddddd" }}
                />

                <Title
                    size='14px'
                    color='white'
                    family='Helvetica'
                    cursor='pointer'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    User Logs
                </Title>
            </MenuContainer> */}



            <MenuContainer

                href='/admin/roomStatus'
                whileTap={{ scale: 0.98 }}
                active={props.roomstatus == true}>
                <SensorDoorIcon
                    style={{ color: props.roomstatus == true ? "#2E2E2E" : "#dddddd" }}
                />

                <Title
                    size='14px'
                    color='white'
                    family='Helvetica'
                    cursor='pointer'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Room Status
                </Title>
            </MenuContainer>

            <MenuContainer

                href='/admin/roomDetails'
                whileTap={{ scale: 0.98 }}
                active={props.roomdetails == true}>
                <MeetingRoomIcon
                    style={{ color: props.roomdetails == true ? "#2E2E2E" : "#dddddd" }}
                />

                <Title
                    size='14px'
                    color='white'
                    family='Helvetica'
                    cursor='pointer'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Room Details
                </Title>
            </MenuContainer>


            <MenuContainer
                href='/admin/additionals'
                whileTap={{ scale: 0.98 }}
                active={props.additional == true}>
                <AddIcon
                    style={{ color: props.additional == true ? "#2E2E2E" : "#dddddd" }}
                />
                <Title
                    size='14px'
                    color='white'
                    family='Helvetica'
                    cursor='pointer'
                    fstyle='normal'
                    weight='600'
                    align='left'
                    padding='0px 10px 0px 0px'
                >
                    Additionals
                </Title>
            </MenuContainer>

            <MenuContainer
                href='/admin/messages'
                whileTap={{ scale: 0.98 }}
                active={props.message == true}>
                <MailIcon
                    style={{ color: props.message == true ? "#2E2E2E" : "#dddddd" }}
                />
                {props.message == true ?

                    <Badge badgeContent={0} color="warning">
                        <Title
                            size='14px'
                            color='white'
                            family='Helvetica'
                            cursor='pointer'
                            fstyle='normal'
                            weight='600'
                            align='left'
                            padding='0px 10px 0px 0px'
                        >
                            Messages
                        </Title>
                    </Badge >

                    :
                    <Badge badgeContent={unreadMessage.length != 0 ? unreadMessage.filter((obj) => obj == false).length : 0} color="warning">
                        <Title
                            size='14px'
                            color='white'
                            family='Helvetica'
                            cursor='pointer'
                            fstyle='normal'
                            weight='600'
                            align='left'
                            padding='0px 10px 0px 0px'
                        >
                            Messages
                        </Title>
                    </Badge >
                }
            </MenuContainer>


            {getUser.length != 0 ? getUser.user.role == 'ADMIN' ?
                <MenuContainer
                    href='/admin/report'
                    whileTap={{ scale: 0.98 }}
                    active={props.report == true}>
                    <AssessmentIcon
                        style={{ color: props.report == true ? "#2E2E2E" : "#dddddd" }}
                    />

                    <Title
                        size='14px'
                        color='white'
                        family='Helvetica'
                        cursor='pointer'
                        fstyle='normal'
                        weight='600'
                        align='left'
                    >
                        Reports
                    </Title>
                </MenuContainer> : '' : ''}


            <Logout
                bg='red'
                margin='auto 0px 20px 0px'
                onClick={signOut}
            >
                <LogoutIcon
                    style={{ color: "#dddddd" }}
                />

                <Title
                    size='14px'
                    color='white'
                    family='Helvetica'
                    cursor='pointer'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Logout
                </Title>
            </Logout>

        </Container>
    )
}

export default SideBarNav