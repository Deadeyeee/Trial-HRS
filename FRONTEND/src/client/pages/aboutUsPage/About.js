import React, { useEffect } from 'react'
import { Container, FlexboxContainer1, FlexboxContainer2, FlexboxContainerMain, FlexboxItem1, FlexboxItem2, FlexboxPhoto, FlexboxTitle, HorizontalLine, HorizontalLineSmall, ContentContainer, FlexboxTitleContainer, } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import { Title } from '../../components/title/styles';
import Background from '../../images/backgroundImages/aboutus.jpg';

export const About = () => {
    useEffect(() => {
        document.title = "About Us"
    }, [])
    return (
        <Container>
            <NavigationBar about />
            <Title
                color='#bfaa7e'
                weight='normal'
                size='60px'
                margin='60px 0px 30px 0px'
            >   Rm Luxe Hotel
            </Title>
            <HorizontalLine></HorizontalLine>
            <Title
                family='Roboto Slab'
                weight='100'
                size='30px'
                margin='0px 0px 50px 0px'
            >   About us
            </Title>
            <ContentContainer>
                <FlexboxContainerMain>
                    <FlexboxContainer1>
                        <FlexboxTitle>
                            <Title
                                family='Roboto Slab'
                                weight='700'
                                size='20px'
                                alignSelf='center'
                                fstyle='normal'
                                color='black'
                            >
                                RM LUXE HOTEL
                            </Title>
                        </FlexboxTitle>
                        <HorizontalLineSmall></HorizontalLineSmall>
                        <FlexboxItem1>
                            <p
                                style={{
                                    fontSize: '20px',
                                    fontFamily: 'Roboto Slab'
                                }}>
                                RMC Realty and Real Estate is a corporate owned company. It was a newly established hotel that began its operations on December 1, 2020, in the heart of Quezon City. The building was initially built with features of a condotel, but due to the pandemic, they have come up with the idea that it was suitable for a better business concept, so it was later converted into a hotel as a starting point.
                            </p>
                            <p
                                style={{
                                    fontSize: '20px',
                                    fontFamily: 'Roboto Slab'
                                }}>
                                The hotel provided a variety of services, including functions, staycations, photoshoots, and long-term lease. It is a five-story building with 12 rooms on each floor; there are 48 operational rooms, but the total number of rooms is 64; and their amenities include an event place, and a coffee shop.
                            </p>
                        </FlexboxItem1>
                    </FlexboxContainer1>

                    <FlexboxPhoto
                        link={Background}>

                    </FlexboxPhoto>
                </FlexboxContainerMain>
            </ContentContainer>
            <Footer />
        </Container >
    )
}


export default About;