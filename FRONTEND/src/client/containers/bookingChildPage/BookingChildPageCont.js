import {Services,  ButtonHolder, Container, ContentContainerHolder, RatingContainer, RoomContainer, RoomContainerContentPhoto, RoomContainerContentRight, RoomContainerMain, ServicesContainer,} from './Styles'
import { Title } from '../../components/title/styles';
import { Button } from '../../components/button/styles';
import Rating from '@mui/material/Rating';

import React from 'react'
import { Description } from '../../components/paragraph/style';
import TvIcon from '@mui/icons-material/Tv';
import ShowerIcon from '@mui/icons-material/Shower';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import Background from '../../images/RoomsIMG/premium.jpg'

export const BookingChildPageCont = () => {
    const ratingValue = 3.6;
  return (
      
    <Container>
        <Title
            weight='400'   
            size='66px'
            fStyle='Normal'
            margin='70px 0px 30px 0px'
            align='Center'
            color='#bfaa7e'
        > 
            Premium room 102
        </Title>
        <RoomContainerMain>
                <RoomContainer>
                    <RoomContainerContentPhoto
                    link={Background}></RoomContainerContentPhoto>
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
                        <RatingContainer>
                        <Title
                                family="Lato"
                                fontStyle="normal"
                                size="15px"
                                margin="0px 10px 0px 0px"
                            >{ratingValue}</Title>

                            <Rating
                                readOnly
                                size="large"
                                value={ratingValue}
                                precision={0.1}
                            ></Rating>


                            <Title
                                family="times new roman"
                                // weight="normal"
                                fontStyle="normal"
                                size="15px"
                                margin="0px 0px 0px 20px"
                            >200 People love it!</Title>
                        </RatingContainer>
                        </ContentContainerHolder>
                        <ContentContainerHolder>
                        <Title
                            color='#2e2e2e'
                            weight='400'   
                            size='25px'
                            fStyle='Normal'
                            margin='0px 40px 0px 0px'
                            align='left'
                        > 
                            Services:
                        </Title>
                        <ServicesContainer>
                            <Services>
                                <NetworkWifiIcon
                                    style={{ color: "#bfaa7e" }}
                                />
                                <Title
                                    family="Arial"
                                    size="12px"
                                >
                                    Free Wifi
                                </Title>
                            </Services>


                            <Services>
                                <TvIcon
                                    style={{ color: "#bfaa7e" }}
                                />
                                <Title
                                    family="Arial"
                                    size="12px"
                                >
                                    Television
                                </Title>
                            </Services>


                            <Services>
                                <ShowerIcon
                                    style={{ color: "#bfaa7e" }}
                                />
                                <Title
                                    family="Arial"
                                    size="12px"
                                >
                                    Washroom
                                </Title>
                            </Services>



                        </ServicesContainer>
                        </ContentContainerHolder>
                        <ContentContainerHolder>
                        <Title
                            color='#2e2e2e'
                            weight='400'   
                            size='25px'
                            fStyle='Normal'
                            margin='0px 15px 0px 0px'
                            align='left'

                        > 
                            Description:
                        </Title>
                        <Description
                        align="left"
                        width="450px"
                        size="15"

                        >
                        
                        
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Maecenas sed enim ut sem viverra. Rutrum quisque non tellus orci ac. 
                            Elementum eu facilisis sed odio. Eget egestas purus viverra accumsan.  
                            </Description>
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
                            weight='normal'   
                            size='25px'
                            fStyle='Normal'
                            margin='10px 0px 0px 15px'
                            align='left'
                        >
                            <b>2</b> adults
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
                            <b>₱1000</b>/night
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
                 href='/bookingCart'
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
                 href = '/booking'
            >
                Cancel
            </Button>
    </Container>
  )
}
