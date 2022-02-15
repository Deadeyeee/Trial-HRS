import React from 'react'
import { Container, FlexTitle, HorizontalLine, PhotoHolder, TitleHolder } from './styles'
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
            <PhotoHolder>
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
            <PhotoHolder>
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
                            GYM
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

            <Footer />
        </Container>
    )
}


export default Famenities;