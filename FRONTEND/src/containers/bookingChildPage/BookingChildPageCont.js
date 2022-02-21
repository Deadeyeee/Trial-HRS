import { Container, ContentContainerHolder, RatingContainer, RoomContainer, RoomContainerContentPhoto, RoomContainerContentRight, RoomContainerMain, ServicesContainer,} from './Styles'
import { Title } from '../../components/title/styles';
import { Button } from '../../components/button/styles';

import React from 'react'

export const BookingChildPageCont = () => {
  return (
    <Container>
        <Title
            color='#292929'
            weight='400'   
            size='66px'
            fStyle='Normal'
            margin='10px 0px 10px 0px'
            align='Center'
            color='#bfaa7e'
        > 
            Premium Room
        </Title>
        <RoomContainerMain>
                <RoomContainer>
                    <RoomContainerContentPhoto></RoomContainerContentPhoto>
                    <RoomContainerContentRight>
                        <ContentContainerHolder>
                        <Title
                            color='#2e2e2e'
                            weight='400'   
                            size='25px'
                            fStyle='Normal'
                            margin='0px 0px 0px 0px'
                            align='left'
                        > 
                            Ratings:
                        </Title>
                        <RatingContainer></RatingContainer>
                        </ContentContainerHolder>
                        <ContentContainerHolder>
                        <Title
                            color='#2e2e2e'
                            weight='400'   
                            size='25px'
                            fStyle='Normal'
                            margin='0px 0px 0px 0px'
                            align='left'
                        > 
                            Services:
                        </Title>
                        <ServicesContainer></ServicesContainer>
                        </ContentContainerHolder>
                        <ContentContainerHolder>
                        <Title
                            color='#2e2e2e'
                            weight='400'   
                            size='25px'
                            fStyle='Normal'
                            margin='7px 0px 0px 0px'
                            align='left'
                        > 
                            Description:
                        </Title>
                        <Title
                            family='Times New Roman, serif'
                            size='16px'
                            weight='400'
                            color='#5b5b5b'
                            margin='14px 0px 0px 10px'
                            align='left'
                        
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Maecenas sed enim ut sem viverra. Rutrum quisque non tellus orci ac. 
                            Elementum eu facilisis sed odio. Eget egestas purus viverra accumsan.  
                        </Title>
                        </ContentContainerHolder>
                        <ContentContainerHolder>
                        <Title
                            color='#2e2e2e'
                            weight='400'   
                            size='25px'
                            fStyle='Normal'
                            margin='4px 0px 0px 0px'
                            align='left'
                        > 
                            Occupancy:
                        </Title>
                        <Title
                            family='Times New Roman, times, serif'
                            color='#292929'
                            weight='700'   
                            size='25px'
                            fStyle='Normal'
                            margin='10px 0px 0px 15px'
                            align='left'
                        >
                            2 Adults
                        </Title>
                        </ContentContainerHolder>
                        <ContentContainerHolder>
                        <Title
                            color='#2e2e2e'
                            weight='400'   
                            size='25px'
                            fStyle='Normal'
                            margin='10px 0px 0px 0px'
                            align='left'
                        > 
                            Price:
                        </Title>
                        <Title
                            family='Roboto Slab'
                            color='#2e2e2e'
                            weight='700'   
                            size='25px'
                            fStyle='Normal'
                            margin='8px 0px 0px 83px'
                            align='left'
                        >
                            ₱1000/night
                        </Title>

                        </ContentContainerHolder>
                    </RoomContainerContentRight>
                </RoomContainer>
            </RoomContainerMain>
            <Button
                 whileHover={{ backgroundColor: "#0C4426", color: "white" }}
                 w='200px'
                 h='60px'
                 textcolor="#0C4426"
                 fam='Playfair Display, serif'
                 weight='-400'
                 fontStyle='Normal'
                 radius="0px"
                 border="1px solid #0C4426"
                 margin='30px 0px 0px 0px'
                 fontsize='23px'
            >
                Book this now!
            </Button>
            <Button
                 whileHover={{ color: "#0C4426" }}
                 w='100px'
                 h='40px'
                 textcolor='#FFFFFF'
                 fam='Times New Roman, serif'
                 weight='-400'
                 fontStyle='Italic'
                 radius="0px"
                 margin='20px 0px 40px 0px'
                 fontsize='16px'
                 bg='#FF9292'
            >
                Cancel
            </Button>
    </Container>
  )
}
