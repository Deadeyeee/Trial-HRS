import React from 'react'
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
const SideBarNav = (props) => {
    return (
        <Container>
            <ProfileContainer
                href='/frontdesk/profile'
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
                    >Max Dela Cruz</Title>
                    <Title
                        size='12px'
                        color='white'
                        family='arial'
                        fstyle='normal'
                        weight='normal'
                        align='left'
                    >Front Desk</Title>

                </DescriptionContainer>
            </ProfileContainer>
            <HorizontalLine
                bg='white'
                w='100%'
                margin='0px'

            ></HorizontalLine>

            <MenuContainer
                href='/frontdesk'
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
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Dashboard
                </Title>
            </MenuContainer>
            <MenuContainer

                href='/frontdesk/reservation'
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
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Reservations
                </Title>
            </MenuContainer>
            <MenuContainer

                href='/frontdesk/booking'
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
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Booking
                </Title>
            </MenuContainer>

            <MenuContainer
                href='/frontdesk/payments'
                whileTap={{ scale: 0.98 }}
                active={props.payment == true}>
                <AccountBoxIcon
                    style={{ color: props.payment == true ? "#2E2E2E" : "#dddddd" }}
                />

                <Title
                    size='14px'
                    color='white'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Payment
                </Title>
            </MenuContainer>

            <MenuContainer
                whileTap={{ scale: 0.98 }}

                href='/frontdesk/status'
                active={props.clients == true}>
                <PeopleIcon
                    style={{ color: props.guest == true ? "#2E2E2E" : "#dddddd" }}
                />

                <Title
                    size='14px'
                    color='white'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Clients
                </Title>
            </MenuContainer>



            <MenuContainer

                href='/frontdesk/roomStatus'
                whileTap={{ scale: 0.98 }}
                active={props.roomstatus == true}>
                <SensorDoorIcon
                    style={{ color: props.roomstatus == true ? "#2E2E2E" : "#dddddd" }}
                />

                <Title
                    size='14px'
                    color='white'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Room Status
                </Title>
            </MenuContainer>

            <MenuContainer

                href='/frontdesk/roomDetails'
                whileTap={{ scale: 0.98 }}
                active={props.roomdetails == true}>
                <MeetingRoomIcon
                    style={{ color: props.roomdetails == true ? "#2E2E2E" : "#dddddd" }}
                />

                <Title
                    size='14px'
                    color='white'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Room Details
                </Title>
            </MenuContainer>
            <MenuContainer
                href='/frontdesk/additionals'
                whileTap={{ scale: 0.98 }}
                active={props.additional == true}>
                <AddIcon
                    style={{ color: props.additional == true ? "#2E2E2E" : "#dddddd" }}
                />
                <Title
                    size='14px'
                    color='white'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                    padding='0px 10px 0px 0px'
                >
                    Additionals
                </Title>
            </MenuContainer>
            <MenuContainer
                href='/frontdesk/messages'
                whileTap={{ scale: 0.98 }}
                active={props.message == true}>
                <MailIcon
                    style={{ color: props.message == true ? "#2E2E2E" : "#dddddd" }}
                />
                <Badge badgeContent={4} color="warning">
                    <Title
                        size='14px'
                        color='white'
                        family='Helvetica'
                        fstyle='normal'
                        weight='600'
                        align='left'
                        padding='0px 10px 0px 0px'
                    >
                        Messages
                    </Title>
                </Badge >
            </MenuContainer>
            <Logout
                bg='red'
                margin='auto 0px 20px 0px'
            >
                <LogoutIcon
                    style={{ color: "#dddddd" }}
                />

                <Title
                    size='14px'
                    color='white'
                    family='Helvetica'
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