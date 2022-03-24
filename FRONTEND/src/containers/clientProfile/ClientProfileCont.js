import React from 'react'
import { ButtonHolder, Container, ProfileContent, ProfileContentContainer, ProfileInformationContent } from './styles'
import { Title } from '../../components/title/styles';
import { Button } from '../../components/button/styles';

const ClientProfileCont = () => {
  return (
    <Container>
        <Title
            color='#bfaa7e'
            weight='400'   
            size='66px'
            fStyle='Normal'
            margin='100px 0px 10px 0px'
            align='Center'
        >
            Welcome
        </Title>
        <ProfileContentContainer>
            <ProfileContent>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fStyle='Normal'
                size= '20px'
                color= '#2e2e2e'
                align='left'     
            >
                First Name:
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fStyle='Normal'
                size= '20px'
                color= '#2e2e2e'
                align='left'     
            >
                Last Name:
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fStyle='Normal'
                size= '20px'
                color= '#2e2e2e'
                align='left'     
            >
                Birthdate:
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fStyle='Normal'
                size= '20px'
                color= '#2e2e2e'
                align='left'     
            >
                Nationality:
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fStyle='Normal'
                size= '20px'
                color= '#2e2e2e'
                align='left'     
            >
                Email Address:
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fStyle='Normal'
                size= '20px'
                color= '#2e2e2e'
                align='left'     
            >
                Contact Number:
            </Title>
            </ProfileContent>
            <ProfileContent>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fStyle='Normal'
                size= '20px'
                color= '#2e2e2e'
                align='right'     
            >
                Pedro
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fStyle='Normal'
                size= '20px'
                color= '#2e2e2e'
                align='right'     
            >
                Juan
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fStyle='Normal'
                size= '20px'
                color= '#2e2e2e'
                align='right'     
            >
                2000/12/21
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fStyle='Normal'
                size= '20px'
                color= '#2e2e2e'
                align='right'     
            >
                Filipino
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fStyle='Normal'
                size= '20px'
                color= '#2e2e2e'
                align='right'     
            >
                PedroJuan@gmail.com
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '400'
                fStyle='Normal'
                size= '20px'
                color= '#2e2e2e'
                align='right'     
            >
                09292333312
            </Title>
            </ProfileContent>
        </ProfileContentContainer>
        <ProfileContentContainer>
            <ProfileInformationContent>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fStyle='Bold'
                size= '20px'
                color= '#2e2e2e'
                align='left'
            >
                USER NAME:
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fStyle='Bold'
                size= '20px'
                color= '#2e2e2e'
                align='left'    
            >
                PASSWORD:
            </Title>
            </ProfileInformationContent>
            <ProfileInformationContent>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fStyle='Bold'
                size= '20px'
                color= '#2e2e2e'
                align='right'     
            >
                Pedrojuan001221
            </Title>
            <Title
                family= 'raleway, sans-serif'
                weight= '700'
                fStyle='Bold'
                size= '20px'
                color= '#2e2e2e'
                align='right'     
            >
                232pa3432sad
            </Title>
            </ProfileInformationContent>
        </ProfileContentContainer>
        <ButtonHolder>
        <Button
                whileHover={{ backgroundColor: "#302B20", color: "white" }}
                w='125px'
                h='40px'
                textcolor="white"
                fam='raleway'
                weight='-400'
                fontStyle='normal'
                radius="0px"
                border="1px solid #8F805F"
                margin='30px 0px 0px 0px'
                fontsize='16px'
                bg='#282626'
            >
                Edit
            </Button>
        </ButtonHolder>
    </Container>
  )
}

export default ClientProfileCont