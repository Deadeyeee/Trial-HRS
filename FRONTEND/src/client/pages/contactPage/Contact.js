import React, { useEffect } from 'react'
import { Container, HorizontalLine, VerticalLine, FlexboxContainer1, FlexboxContainer2, FlexboxContainerMain, FlexboxItem1, FlexboxItem2, ContentContainer, FlexboxTitleContainer, MapContainer } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import { TextInput } from '../../components/textBox/style';
import { Title } from '../../components/title/styles';
import { Button } from '../../components/button/styles';
import Location from '../../components/map/Location'
import MapIcon from '../../images/backgroundImages/mapIcon.png'
export const Contact = () => {
    useEffect(() => {
        document.title = "Contact Us"
      }, [])
    return (
        <Container>
            <ChatBot />
            <NavigationBar contact />
            <Title
                color='#bfaa7e'
                weight='normal'
                size='60px'
                margin='60px 0px 30px 0px'
            >
                Contact
            </Title>
            <HorizontalLine></HorizontalLine>
            <ContentContainer>
                <FlexboxTitleContainer>
                </FlexboxTitleContainer>
                <FlexboxContainerMain>
                    <FlexboxContainer1>
                        <FlexboxItem1>
                            <Title
                                family='Roboto Slab'
                                size='40px'
                                color='#8F805F'
                                align='Right'
                            >
                                RM Luxe Hotel
                            </Title>
                            <Title
                                margin='40px 0px 0px 0px'
                                family='Lato'
                                color='#5b5b5b'
                                align='Right'
                                size='20px'
                            >
                                68 Cenacle Dr,<br></br>
                                Quezon City, Metro Manila<br></br>
                                info@mysite.com<br></br>
                                Tel: 123-456-7890<br></br>
                                Fax: 123-456-7890<br></br>
                            </Title>
                        </FlexboxItem1>
                    </FlexboxContainer1>
                    <VerticalLine></VerticalLine>
                    <FlexboxContainer2
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    >
                        <FlexboxItem2>
                            <a target='_blank' href='https://www.google.com/maps/place/RMC+Realty+and+Real+Estate+Development+Corporation/@14.6695732,121.048862,17z/data=!3m1!4b1!4m5!3m4!1s0x3397b72cc97ad977:0xb200b7e744606c3d!8m2!3d14.6695732!4d121.048862?authuser=0&hl=en'><img src={MapIcon}
                            style={{
                                width: '200px',
                                
                            }}></img></a>
                        </FlexboxItem2>
                    </FlexboxContainer2>
                </FlexboxContainerMain>
            </ContentContainer>
            {/* <MapContainer>
                <Location></Location>
            </MapContainer> */}
            <Footer />
        </Container>
    )
}


export default Contact;