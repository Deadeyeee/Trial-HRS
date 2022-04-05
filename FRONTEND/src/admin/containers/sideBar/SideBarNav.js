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
import { Container, DescriptionContainer, Image, MenuContainer, ProfileContainer } from './style';
import { Title } from '../../../client/components/title/styles';
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine';
import LogoutIcon from '@mui/icons-material/Logout';
const SideBarNav = () => {
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
            bg='rgb(191, 170, 126, 0.7)'
            >
                <DashboardIcon
                    style={{ color: "#2E2E2E" }}
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

            <MenuContainer>
                <MenuBookIcon
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
                    Booking
                </Title>
            </MenuContainer>

            <MenuContainer>
                <AccountBoxIcon
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
                    Payment
                </Title>
            </MenuContainer>

            <MenuContainer>
                <PeopleIcon
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
                    Guest
                </Title>
            </MenuContainer>

            <MenuContainer>
                <AccountBoxIcon
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
                    User List
                </Title>
            </MenuContainer>

            <MenuContainer>
                <BookIcon
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
                    User Logs
                </Title>
            </MenuContainer>

            <MenuContainer>
                <ContentPasteIcon
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
                    Status
                </Title>
            </MenuContainer>

            <MenuContainer>
                <SensorDoorIcon
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
                    Room Status
                </Title>
            </MenuContainer>

            <MenuContainer>
                <MeetingRoomIcon
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
                    Room Details
                </Title>
            </MenuContainer>

            <MenuContainer>
                <MailIcon
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
                    Messages
                </Title>
            </MenuContainer>

            <MenuContainer>
                <AssessmentIcon
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
                    Reports
                </Title>
            </MenuContainer>
            <MenuContainer
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
            </MenuContainer>
        </Container>
    )
}

export default SideBarNav