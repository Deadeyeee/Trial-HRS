import React from 'react'
import { Title } from '../../../client/components/title/styles'
import { Container, HeadContainer, SummaryContainer, SummaryDescription, SummaryIcon, SummaryPlate } from './style'
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
const DashboardContainer = () => {
    return (
        <Container>
            <HeadContainer>
                <Title
                    size='20px'
                    color='black'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                    margin='20px 0px 10px 30px'
                >
                    DASHBOARD
                </Title>
                <Title
                    size='14px'
                    color='GRAY'
                    family='arial'
                    fstyle='normal'
                    weight='normal'
                    align='left'
                    margin='0px 0px 20px 30px'
                >
                    Hello, <b>Juan Dela Cruz!</b> Welcome back! Here's what's going on with your business.
                </Title>
            </HeadContainer>
            <SummaryContainer>
                <SummaryPlate>
                    <SummaryIcon
                        bg='#E1C340'
                    >
                        <BedroomChildOutlinedIcon
                            style={{
                                width: '40px',
                                height: '40px',
                            }}></BedroomChildOutlinedIcon>
                    </SummaryIcon>

                    <SummaryDescription>
                        <Title
                            size='14px'
                            color='black'
                            family='arial'
                            fstyle='normal'
                            weight='600'
                            align='left'
                        >
                            Currently Booked
                        </Title>
                        <Title
                            size='36px'
                            color='#E1C340'
                            family='arial'
                            fstyle='normal'
                            weight='normal'
                            align='left'
                        >
                            36
                        </Title>
                    </SummaryDescription>
                </SummaryPlate>


                <SummaryPlate>
                    <SummaryIcon
                        bg='#76B947'>
                        <CheckCircleOutlineOutlinedIcon
                            style={{
                                width: '40px',
                                height: '40px',
                            }} />
                    </SummaryIcon>

                    <SummaryDescription>
                        <Title
                            size='14px'
                            color='black'
                            family='arial'
                            fstyle='normal'
                            weight='600'
                            align='left'
                        >
                            Expected Check-in
                        </Title>
                        <Title
                            size='36px'
                            color='#76B947'
                            family='arial'
                            fstyle='normal'
                            weight='normal'
                            align='left'
                        >
                            10
                        </Title>
                    </SummaryDescription>
                </SummaryPlate>


                <SummaryPlate>
                    <SummaryIcon
                        bg='#E7625F'>
                        <CancelOutlinedIcon
                            style={{
                                width: '40px',
                                height: '40px',
                            }} />
                    </SummaryIcon>

                    <SummaryDescription>
                        <Title
                            size='14px'
                            color='black'
                            family='arial'
                            fstyle='normal'
                            weight='600'
                            align='left'
                        >
                            Expected Check-out
                        </Title>
                        <Title
                            size='36px'
                            color='#E7625F'
                            family='arial'
                            fstyle='normal'
                            weight='normal'
                            align='left'
                        >
                            4
                        </Title>
                    </SummaryDescription>
                </SummaryPlate>


                <SummaryPlate>
                    <SummaryIcon
                        bg='#189AB4'>
                        <MeetingRoomOutlinedIcon
                            style={{
                                width: '40px',
                                height: '40px',
                            }} />
                    </SummaryIcon>

                    <SummaryDescription>
                        <Title
                            size='14px'
                            color='black'
                            family='arial'
                            fstyle='normal'
                            weight='600'
                            align='left'
                        >
                            Available Rooms
                        </Title>
                        <Title
                            size='36px'
                            color='#189AB4'
                            family='arial'
                            fstyle='normal'
                            weight='normal'
                            align='left'
                        >
                            4
                        </Title>
                    </SummaryDescription>
                </SummaryPlate>
                
            </SummaryContainer>
        </Container>
    )
}

export default DashboardContainer