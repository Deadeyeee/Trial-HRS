import { Button } from '@mui/material'
import React from 'react'
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine'
import { Title } from '../../../client/components/title/styles'
import { ContainerGlobal } from '../../components/container/container'
import { ButtonHolder, Container, ProfileContent, ProfileContentContainer, ProfileInformationContent, HeadContainer } from './style'


export const ProfileContainer = () => {
    return (
        <Container>
            <HeadContainer>
                <Title
                    size='20px'
                    color='white'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                    margin='20px 0px 20px 30px'
                >
                    Greetings! Welcome to your profile, Juan Dela Cruz.
                </Title>
            </HeadContainer>
            <ContainerGlobal
                w='90%'
                h='auto'
                bg='WHITE'
                direction='column'
                align='center'
                justify='center'
                padding='10px 30px'
                margin='20px 0px 40px 0px'
                gap='10px'>
                <Title
                    size='26px'
                    color='black'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Profile Details
                </Title>
                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                >
                </HorizontalLine>
                <ProfileContentContainer>
                    <ProfileContent>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='20px'
                            color='#2e2e2e'
                            align='left'
                        >
                            First Name:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='20px'
                            color='#2e2e2e'
                            align='left'
                        >
                            Last Name:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='20px'
                            color='#2e2e2e'
                            align='left'
                        >
                            Email Address:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='20px'
                            color='#2e2e2e'
                            align='left'
                        >
                            Contact Number:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='20px'
                            color='#2e2e2e'
                            align='left'
                        >
                            Gender:
                        </Title>
                    </ProfileContent>
                    <ProfileContent>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='20px'
                            color='#2e2e2e'
                            align='right'
                        >
                            Juan
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='20px'
                            color='#2e2e2e'
                            align='right'
                        >
                            Dela Cruz
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='20px'
                            color='#2e2e2e'
                            align='right'
                        >
                            PedroJuan@gmail.com
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='20px'
                            color='#2e2e2e'
                            align='right'
                        >
                            09292333312
                        </Title>

                        <Title
                            family='raleway, sans-serif'
                            weight='400'
                            fstyle='Normal'
                            size='20px'
                            color='#2e2e2e'
                            align='right'
                        >
                            Male
                        </Title>
                    </ProfileContent>
                </ProfileContentContainer>
                <ProfileContentContainer>
                    <ProfileInformationContent
                        gap='20px'>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Bold'
                            size='20px'
                            color='#2e2e2e'
                            align='left'
                            overflow='visible'
                        >
                            User Name:
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Bold'
                            size='20px'
                            color='#2e2e2e'
                            align='left'
                            overflow='visible'
                        >
                            Role:
                        </Title>
                    </ProfileInformationContent>

                    <ProfileInformationContent
                        gap='20px'>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Bold'
                            size='20px'
                            color='#2e2e2e'
                            align='right'
                            overflow='visible'
                        >
                            Pedrojuan001221
                        </Title>
                        <Title
                            family='raleway, sans-serif'
                            weight='700'
                            fstyle='Bold'
                            size='20px'
                            color='#2e2e2e'
                            align='right'
                            overflow='visible'
                        >
                            Admin
                        </Title>
                    </ProfileInformationContent>
                </ProfileContentContainer>
            </ContainerGlobal>
                <Button variant="contained" size="large"
                    style={{ backgroundColor: '#2E2E2E' }}>
                    Edit Profile
                </Button>
        </Container>
    )
}
