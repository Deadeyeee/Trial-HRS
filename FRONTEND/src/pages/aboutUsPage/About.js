import React from 'react'
import { Container, FlexboxContainer1, FlexboxContainer2, FlexboxContainerMain, FlexboxItem1, FlexboxItem2, FlexboxPhoto, FlexboxTitle, HorizontalLine, HorizontalLineSmall, ContentContainer, FlexboxTitleContainer, } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import { Title } from '../../components/title/styles';

export const About = () => {
    return (
        <Container>
            <ChatBot />
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
                <FlexboxTitleContainer>
                    <FlexboxTitle>
                        <Title
                            family='Roboto Slab'
                            weight='Normal'
                            size='20px'
                            alignSelf='center'
                        >
                            I'm a Title
                        </Title>
                    </FlexboxTitle>
                    <FlexboxTitle>
                        <Title
                            family='Roboto Slab'
                            weight='Normal'
                            size='20px'
                            alignSelf='center'
                        >
                            Click here to add your own text and edit me.
                        </Title>
                    </FlexboxTitle>
                </FlexboxTitleContainer>
                <FlexboxContainerMain>
                    <FlexboxContainer1>
                        <HorizontalLineSmall></HorizontalLineSmall>
                        <FlexboxItem1>
                            <p>
                                <i
                                    family='times new roman'
                                    weight='normal'
                                    color='#5b5b5b'
                                >   Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </i>
                            </p>
                            <p>
                                <i
                                    family='times new roman'
                                    weight='normal'
                                    color='#5b5b5b'
                                    margin='20px'
                                >   Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </i>
                            </p>
                        </FlexboxItem1>
                    </FlexboxContainer1>
                    <FlexboxContainer2>
                        <HorizontalLineSmall></HorizontalLineSmall>
                        <FlexboxItem2>
                            <p>
                                <i
                                    family='times new roman'
                                    weight='normal'
                                    color='#5b5b5b'
                                >   Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </i>
                            </p>
                            <p>
                                <i
                                    family='times new roman'
                                    weight='normal'
                                    color='#5b5b5b'
                                >   Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </i>
                            </p>
                        </FlexboxItem2>
                    </FlexboxContainer2>
                    <FlexboxPhoto></FlexboxPhoto>
                </FlexboxContainerMain>
            </ContentContainer>
            <Footer />
        </Container >
    )
}


export default About;