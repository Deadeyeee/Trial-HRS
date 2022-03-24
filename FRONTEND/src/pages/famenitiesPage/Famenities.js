import React, { useEffect } from 'react'
import { Container, FlexTitle, HorizontalLine, PhotoHolder, TitleHolder } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import { Title } from '../../components/title/styles';
import BackgroundIMG from "../../images/FamenitiesIMG/spa.jpg";
import BackgroundIMG1 from "../../images/FamenitiesIMG/salon.jpg";
import BackgroundIMG2 from "../../images/FamenitiesIMG/eventsplace.jpg";
export const Famenities = () => {
    useEffect(() => {
        document.title = "Facilities & Ameneties"
      }, [])
    return (
        <Container>
            <ChatBot />
            <NavigationBar facilities />
            <Title
                color='#bfaa7e'
                weight='normal'
                size='60px'
                margin='60px 0px 60px 0px'
            >
                Facilities & Amenities
            </Title>
            <PhotoHolder
            link={BackgroundIMG2}>
                <TitleHolder>
                    <i>
                        <Title

                            family='Cormorant Garamond, Serif'
                            color='white'
                            size='46px'
                            weight='400'
                            align='left'
                            margin="0px 0px 0px 300px"
                        >
                            EVENTS PLACE
                        </Title>
                        <a href='/facilitiesAmenities/eventsPlace'><Title
                            color='white'
                            size='14px'
                            align='left'
                            weight='400'
                            margin="0px 0px 0px 300px"
                        >
                            See More
                        </Title></a>

                    </i>
                </TitleHolder>
            </PhotoHolder>
            <PhotoHolder
            link={BackgroundIMG}>
                <TitleHolder
                
                justifyContent="flex-end"
                >
                    <i>
                        <Title

                            family='Cormorant Garamond, Serif'
                            color='white'
                            size='46px'
                            weight='400'
                            align='right'
                            opc='100%'
                            margin="0px 300px 0px 0px"
                        >
                            SPA
                        </Title>
                        <Title
                            color='white'
                            size='14px'
                            align='right'
                            weight='400'
                            margin="0px 300px 0px 0px"
                        >
                            See More
                        </Title>
                    </i>

                </TitleHolder>
            </PhotoHolder>
            <PhotoHolder
            link={BackgroundIMG1}>
                <TitleHolder>
                    <i>
                        <Title

                            family='Cormorant Garamond, Serif'
                            color='white'
                            size='46px'
                            weight='400'
                            align='left'
                            margin="0px 0px 0px 300px"
                        >
                            SALON
                        </Title>
                        <Title
                            color='white'
                            size='14px'
                            align='left'
                            weight='400'
                            margin="0px 0px 0px 300px"
                        >
                            See More
                        </Title>

                    </i>
                </TitleHolder>
            </PhotoHolder>
            <Footer />
        </Container>
    )
}


export default Famenities;