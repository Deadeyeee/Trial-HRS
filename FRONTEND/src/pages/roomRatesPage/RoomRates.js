import React from 'react'
import { Container, FlexboxContainer, FlexboxContent, FlexboxContentMain, FlexboxMainPhotoLeft, FlexboxMainPhotoRight, HorizontalLineShortRight, HorizontalLineShortLeft } from './styles'
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
                size='60px'
                margin='60px 0px 30px 0px'
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
                            margin='50px 0px 20px 0px'
                            align='left'
                        >
                            Premium Room
                        </Title>
                        <p
                            margin='20px 0px 0px 100px'
                        >
                            <i
                                family='times new roman, times, serif'
                                align='left'
                                weight='400'

                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem viverra.
                                Rutrum quisque non tellus orci ac. Elementum eu facilisis sed odio. Eget egestas purus viverra accumsan. In eu mi bibendum neque egestas congue quisque egestas diam.
                                Venenatis cras sed felis eget velit aliquet sagittis id. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Ullamcorper eget nulla facilisi etiam dignissim diam quis.
                                Gravida rutrum quisque non tellus orci ac auctor augue. Dictum fusce ut placerat orci nulla. Lectus proin nibh nisl condimentum id venenatis a. Viverra orci sagittis eu volutpat.
                                Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Convallis convallis tellus id interdum. Tortor vitae purus faucibus ornare suspendisse sed nisi. Pellentesque elit eget gravida cum sociis natoque.
                                Dis parturient montes nascetur ridiculus mus mauris. Facilisi nullam vehicula ipsum a arcu cursus vitae.
                            </i>
                        </p>
                        <Title
                            family='roboto slab'
                            weight='700'
                            size='25px'
                            color='#292929'
                            margin='10px 0px 10px 0px'
                            align='left'
                        >
                            ₱1000/Night
                        </Title>
                        <Button
                            bg='#60553F'
                            w='125px'
                            h='30px'
                            margin='5px 0px 0px 0px'
                            padding='10px'
                            fam='Playfair Display'
                            weight='-400'
                            fontStyle='Normal'
                        >
                            Book Now!
                        </Button>
                        <HorizontalLineShortRight></HorizontalLineShortRight>
                    </FlexboxContent>
                </FlexboxContentMain>
                <FlexboxContentMain>
                    <FlexboxContent>
                        <Title
                            family='playfair display, serif'
                            weight='700'
                            size='33px'
                            color='#292929'
                            margin='20px 0px 20px 0px'
                            align='right'
                        >
                            Deluxe Room
                        </Title>
                        <p
                            margin='20px 0px 0px 100px'
                            align='right'
                        >
                            <i
                                family='times new roman, times, serif'
                                weight='400'

                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem viverra.
                                Rutrum quisque non tellus orci ac. Elementum eu facilisis sed odio. Eget egestas purus viverra accumsan. In eu mi bibendum neque egestas congue quisque egestas diam.
                                Venenatis cras sed felis eget velit aliquet sagittis id. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Ullamcorper eget nulla facilisi etiam dignissim diam quis.
                                Gravida rutrum quisque non tellus orci ac auctor augue. Dictum fusce ut placerat orci nulla. Lectus proin nibh nisl condimentum id venenatis a. Viverra orci sagittis eu volutpat.
                                Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Convallis convallis tellus id interdum. Tortor vitae purus faucibus ornare suspendisse sed nisi. Pellentesque elit eget gravida cum sociis natoque.
                                Dis parturient montes nascetur ridiculus mus mauris. Facilisi nullam vehicula ipsum a arcu cursus vitae.
                            </i>
                        </p>
                        <Title
                            family='roboto slab'
                            weight='700'
                            size='25px'
                            color='#292929'
                            margin='10px 0px 10px 0px'
                            align='right'
                        >
                            ₱1000/Night
                        </Title>
                        <Button
                            bg='#60553F'
                            w='125px'
                            h='30px'
                            margin='5px 0px 0px 690px'
                            padding='10px'
                            fam='Playfair Display'
                            weight='-400'
                            fontStyle='Normal'
                        >
                            Book Now!
                        </Button>
                        <HorizontalLineShortLeft
                        ></HorizontalLineShortLeft>
                    </FlexboxContent>
                    <FlexboxMainPhotoRight></FlexboxMainPhotoRight>
                </FlexboxContentMain>
                <FlexboxContentMain>
                    <FlexboxMainPhotoLeft></FlexboxMainPhotoLeft>
                    <FlexboxContent>
                        <Title
                            family='playfair display, serif'
                            weight='700'
                            size='33px'
                            color='#292929'
                            margin='50px 0px 20px 0px'
                            align='left'
                        >
                            Standard Room
                        </Title>
                        <p
                            margin='20px 0px 0px 100px'
                        >
                            <i
                                family='times new roman, times, serif'
                                align='left'
                                weight='400'

                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem viverra.
                                Rutrum quisque non tellus orci ac. Elementum eu facilisis sed odio. Eget egestas purus viverra accumsan. In eu mi bibendum neque egestas congue quisque egestas diam.
                                Venenatis cras sed felis eget velit aliquet sagittis id. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Ullamcorper eget nulla facilisi etiam dignissim diam quis.
                                Gravida rutrum quisque non tellus orci ac auctor augue. Dictum fusce ut placerat orci nulla. Lectus proin nibh nisl condimentum id venenatis a. Viverra orci sagittis eu volutpat.
                                Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Convallis convallis tellus id interdum. Tortor vitae purus faucibus ornare suspendisse sed nisi. Pellentesque elit eget gravida cum sociis natoque.
                                Dis parturient montes nascetur ridiculus mus mauris. Facilisi nullam vehicula ipsum a arcu cursus vitae.
                            </i>
                        </p>
                        <Title
                            family='roboto slab'
                            weight='700'
                            size='25px'
                            color='#292929'
                            margin='10px 0px 10px 0px'
                            align='left'
                        >
                            ₱1000/Night
                        </Title>
                        <Button
                            bg='#60553F'
                            w='125px'
                            h='30px'
                            margin='5px 0px 0px 0px'
                            padding='10px'
                            fam='Playfair Display'
                            weight='-400'
                            fontStyle='Normal'
                        >
                            Book Now!
                        </Button>
                        <HorizontalLineShortRight></HorizontalLineShortRight>
                    </FlexboxContent>
                </FlexboxContentMain>
                <FlexboxContentMain>
                    <FlexboxContent>
                        <Title
                            family='playfair display, serif'
                            weight='700'
                            size='33px'
                            color='#292929'
                            margin='20px 0px 20px 0px'
                            align='right'
                        >
                            Superior Room
                        </Title>
                        <p
                            margin='20px 0px 0px 100px'
                            align='right'
                        >
                            <i
                                family='times new roman, times, serif'
                                weight='400'

                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem viverra.
                                Rutrum quisque non tellus orci ac. Elementum eu facilisis sed odio. Eget egestas purus viverra accumsan. In eu mi bibendum neque egestas congue quisque egestas diam.
                                Venenatis cras sed felis eget velit aliquet sagittis id. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Ullamcorper eget nulla facilisi etiam dignissim diam quis.
                                Gravida rutrum quisque non tellus orci ac auctor augue. Dictum fusce ut placerat orci nulla. Lectus proin nibh nisl condimentum id venenatis a. Viverra orci sagittis eu volutpat.
                                Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Convallis convallis tellus id interdum. Tortor vitae purus faucibus ornare suspendisse sed nisi. Pellentesque elit eget gravida cum sociis natoque.
                                Dis parturient montes nascetur ridiculus mus mauris. Facilisi nullam vehicula ipsum a arcu cursus vitae.
                            </i>
                        </p>
                        <Title
                            family='roboto slab'
                            weight='700'
                            size='25px'
                            color='#292929'
                            margin='10px 0px 10px 0px'
                            align='right'
                        >
                            ₱1000/Night
                        </Title>
                        <Button
                            bg='#60553F'
                            w='125px'
                            h='30px'
                            margin='5px 0px 0px 690px'
                            padding='10px'
                            fam='Playfair Display'
                            weight='-400'
                            fontStyle='Normal'
                        >
                            Book Now!
                        </Button>
                        <HorizontalLineShortLeft></HorizontalLineShortLeft>
                    </FlexboxContent>
                    <FlexboxMainPhotoRight></FlexboxMainPhotoRight>
                </FlexboxContentMain>
            </FlexboxContainer>
            <Footer />
        </Container>
    )
}


export default RoomRates;