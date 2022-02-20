import React from 'react'
import { FlexButtonPrice, Container, FlexboxContainer, FlexboxContent, FlexboxContentMain, FlexboxMainPhotoLeft, HorizontalLineShortLeft, Description } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import { Button } from '../../components/button/styles';
import { Title } from '../../components/title/styles';
export const RoomRates = () => {
    return (
        <Container>
            <ChatBot />
            <NavigationBar room />
            <Title
                color='#bfaa7e'
                weight='normal'
                size='50px'
                margin='60px 0px 60px 0px'
            >
                Rooms & Rates
            </Title>
            <FlexboxContainer>
                <FlexboxContentMain>
                    <FlexboxMainPhotoLeft></FlexboxMainPhotoLeft>
                    <FlexboxContent>
                        <Title
                            family='playfair display, serif'
                            weight='700'
                            size='33px'
                            color='#292929'
                            align='left'
                        >
                            Premium Room
                        </Title>
                        <Description>
                            <i>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem viverra.
                                Rutrum quisque non tellus orci ac. Elementum eu facilisis sed odio. Eget egestas purus viverra accumsan. In eu mi bibendum neque egestas congue quisque egestas diam.
                                Venenatis cras sed felis eget velit aliquet sagittis id. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Ullamcorper eget nulla facilisi etiam dignissim diam quis.
                                Gravida rutrum quisque non tellus orci ac auctor augue. Dictum fusce ut placerat orci nulla. Lectus proin nibh nisl condimentum id venenatis a. Viverra orci sagittis eu volutpat.
                                Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Convallis convallis tellus id interdum. Tortor vitae purus faucibus ornare suspendisse sed nisi. Pellentesque elit eget gravida cum sociis natoque.
                                Dis parturient montes nascetur ridiculus mus mauris. Facilisi nullam vehicula ipsum a arcu cursus vitae.
                            </i>
                        </Description>
                        <FlexButtonPrice>
                            <Button
                                whileHover={{ backgroundColor: "#2E2E2E", color: "white" }}
                                textcolor="black"
                                w='125px'
                                h='40px'
                                margin='5px 0px 0px 0px'
                                fam='Playfair Display'
                                weight='-400'
                                fontStyle='Normal'
                                radius="0px"
                                border="1px solid #8F805F"
                            >
                                Book Now!
                            </Button>
                            <Title
                                family='roboto slab'
                                weight='700'
                                size='25px'
                                color='#292929'
                                margin='10px 0px 10px 0px'
                                align='left'
                            >
                                ₱1000/night
                            </Title>
                        </FlexButtonPrice>
                    </FlexboxContent>
                </FlexboxContentMain>

                <HorizontalLineShortLeft></HorizontalLineShortLeft>

                <FlexboxContentMain>
                    <FlexboxContent>
                        <Title
                            family='playfair display, serif'
                            weight='700'
                            size='33px'
                            color='#292929'
                            align='right'
                        >
                            Standard Room
                        </Title>
                        <Description
                            align="right">
                            <i>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem viverra.
                                Rutrum quisque non tellus orci ac. Elementum eu facilisis sed odio. Eget egestas purus viverra accumsan. In eu mi bibendum neque egestas congue quisque egestas diam.
                                Venenatis cras sed felis eget velit aliquet sagittis id. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Ullamcorper eget nulla facilisi etiam dignissim diam quis.
                                Gravida rutrum quisque non tellus orci ac auctor augue. Dictum fusce ut placerat orci nulla. Lectus proin nibh nisl condimentum id venenatis a. Viverra orci sagittis eu volutpat.
                                Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Convallis convallis tellus id interdum. Tortor vitae purus faucibus ornare suspendisse sed nisi. Pellentesque elit eget gravida cum sociis natoque.
                                Dis parturient montes nascetur ridiculus mus mauris. Facilisi nullam vehicula ipsum a arcu cursus vitae.
                            </i>
                        </Description>

                        <FlexButtonPrice
                            justifyContent="flex-end"
                        >

                            <Title
                                family='roboto slab'
                                weight='700'
                                size='25px'
                                color='#292929'
                                margin='10px 0px 10px auto'
                            >
                                ₱1000/night
                            </Title>
                            <Button
                                whileHover={{ backgroundColor: "#2E2E2E", color: "white" }}
                                w='125px'
                                h='40px'
                                textcolor="black"
                                fam='Playfair Display'
                                weight='-400'
                                fontStyle='Normal'
                                radius="0px"
                                border="1px solid #8F805F"
                            >
                                Book Now!
                            </Button>
                        </FlexButtonPrice>
                    </FlexboxContent>
                    <FlexboxMainPhotoLeft></FlexboxMainPhotoLeft>
                </FlexboxContentMain>
            </FlexboxContainer>
            <Footer />
        </Container>
    )
}


export default RoomRates;