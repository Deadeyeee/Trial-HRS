import React from 'react'
import { Container, HorizontalLine, PhotoHolder, TitleHolder } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import { Title } from '../../components/title/styles';
export const Famenities = () => {
    return (
        <Container>
            <ChatBot />
            <NavigationBar facilities />
            <Title
                color='#bfaa7e'
                weight='normal'
                size='60px'
                margin='60px 0px 30px 0px'
            >
                Facilities & Amenities
            </Title>
            <HorizontalLine></HorizontalLine>
            <PhotoHolder>
                <TitleHolder>
                    <i>
                        <Title

                            family='Cormorant Garamond, Serif'
                            color='white'
                            size='46px'
                            weight='400'
                            margin='294px 600px 0px 0px'
                        >
                            EVENTS PLACE
                        </Title>
                        <p
                            family='Basic, Serif'
                            color='white'
                            size='16px'
                            weight='400'

                        >
                            See More
                        </p>

                    </i>
                </TitleHolder>
            </PhotoHolder>
            <PhotoHolder>
                <TitleHolder>
                    <i>
                        <Title

                            family='Cormorant Garamond, Serif'
                            color='white'
                            size='46px'
                            weight='400'
                            margin='294px 0px 0px 550px'
                            opc='100%'
                        >
                            GYM
                        </Title>
                        <p
                            family='Basic, Serif'
                            color='white'
                            size='16px'
                            weight='400'
                        >
                            See More
                        </p>
                    </i>

                </TitleHolder>
            </PhotoHolder>
            <PhotoHolder>
                <TitleHolder>
                    <i>
                        <Title

                            family='Cormorant Garamond, Serif'
                            color='white'
                            size='46px'
                            weight='400'
                            margin='294px 600px 0px 0px'
                            opc='100%'
                        >
                            SPA
                        </Title>
                        <p
                            family='Basic, Serif'
                            color='white'
                            size='16px'
                            weight='400'
                        >
                            See More
                        </p>
                    </i>
                </TitleHolder>
            </PhotoHolder>
            <Footer />
        </Container>
    )
}


export default Famenities;