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
const SideBarNav = (props) => {
    return (
        <Container>
            <ProfileContainer>
                <Image src={logo} />
                <DescriptionContainer>
                    <Title
                        size='16px'
                        color='white'
                        family='arial'
                        fstyle='normal'
                    >Juan Dela Cruz</Title>
                    <Title
                        size='12px'
                        color='white'
                        family='arial'
                        fstyle='normal'
                        weight='normal'
                        align='left'
                    >Admin</Title>

                </DescriptionContainer>
            </ProfileContainer>
            <HorizontalLine
                bg='white'
                w='100%'
                margin='0px'

            ></HorizontalLine>

            <MenuContainer
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
            
            active={props.guest == true}>
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
                    Guest
                </Title>
            </MenuContainer>

            <MenuContainer
            
            active={props.userlist == true}>
                <AccountBoxIcon
                    style={{ color: props.userlist == true ? "#2E2E2E" : "#dddddd" }}
                />

                <Title
                    size='14px'
                    color='white'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    User List
                </Title>
            </MenuContainer>

            <MenuContainer
            
            active={props.userlog == true}>
                <BookIcon
                    style={{ color: props.userlog == true ? "#2E2E2E" : "#dddddd" }}
                />

                <Title
                    size='14px'
                    color='white'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    User Logs
                </Title>
            </MenuContainer>

            <MenuContainer
            
            active={props.status == true}
            >
                <ContentPasteIcon
                    style={{ color: props.status == true ? "#2E2E2E" : "#dddddd" }}
                />

                <Title
                    size='14px'
                    color='white'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Status
                </Title>
            </MenuContainer>

            <MenuContainer
            
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
            
            active={props.message == true}>
                <MailIcon
                    style={{ color: props.message == true ? "#2E2E2E" : "#dddddd" }}
                />

                <Title
                    size='14px'
                    color='white'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Messages
                </Title>
            </MenuContainer>

            <MenuContainer
            
            active={props.report == true}>
                <AssessmentIcon
                    style={{ color: props.report == true ? "#2E2E2E" : "#dddddd" }}
                />

                <Title
                    size='14px'
                    color='white'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Reports
                </Title>
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