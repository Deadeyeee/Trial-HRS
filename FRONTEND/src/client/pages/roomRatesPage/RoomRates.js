import { React, useEffect, useState } from 'react'
import { FlexButtonPrice, Container, FlexboxContainer, FlexboxContent, FlexboxContentMain, FlexboxMainPhotoLeft, HorizontalLineShortLeft, Description } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import { Button } from '../../components/button/styles';
import { Title } from '../../components/title/styles';
import Background from '../../images/RoomsIMG/premium.jpg'
import Background2 from '../../images/RoomsIMG/delux.jpg'
import Background3 from '../../images/RoomsIMG/family.jpg'
import ImageSlider from '../../components/imageSlider/ImageSlider';
import axios from 'axios';
import { apiKey } from '../../../apiKey';
export const RoomRates = () => {
    const [roomTypeImagesDb, setRoomTypeImagesDb] = useState([])
    const [roomType, setRoomType] = useState([])

    const numberFormat = (value) =>
        new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'PHP'
        }).format(value);

    useEffect(() => {
        document.title = "Rooms and Rates"
    }, [])

    useEffect(() => {
        axios.get(apiKey + 'api/getAllRoomTypeImages').then((result) => {
            console.log(result.data)
            // for (let index = 0; index < result.data.length; index++) {
            //     if (result.data[index].roomType_id == id) {
            //         setRoomTypeImagesDb((oldData) => [...oldData, result.data[index].roomImages])
            //     }

            // }
            setRoomTypeImagesDb(result.data)
            axios.get(apiKey + 'api/getAllRoomType').then((result) => {
                setRoomType(result.data)
            }).catch((err) => {
                console.log(result.data)

            });
            console.log('TEST')
        }).catch((err) => {
            console.lot(err)
        });
    }, [])


    return (
        <Container>
            <NavigationBar room />
            <Title
                color='#bfaa7e'
                weight='normal'
                size='50px'
                margin='60px 0px 60px 0px'
                margin1000='20px 0px 20px 0px'
            >
                Rooms & Rates
            </Title>
            <FlexboxContainer>
                {roomType.length != 0 ? roomType.map((item, index) => (
                    index % 2 == 0 ?
                        <div style={{ display: 'block', justifyContent: 'center', gap: '100px' }}>
                            <FlexboxContentMain>
                                <div
                                    style={{ width: '400px', height: '400px', display: 'inline-block', overflow: 'hidden' }}

                                >
                                    <ImageSlider roomImages={roomTypeImagesDb.length != 0 ? roomTypeImagesDb.filter((itemRoomImage) => (itemRoomImage.roomType_id == item.id)).map((obj) => (obj.roomImages)) : null} />
                                </div>

                                <FlexboxContent>
                                    <Title
                                        family='Roboto Slab, serif'
                                        weight='700'
                                        size='30px'
                                        color='#292929'
                                        align='left'
                                    >
                                        {item.roomType}
                                    </Title>
                                    <Description
                                        align='left'
                                    >
                                        <i style={{ fontSize: '20px' }}>
                                            {item.roomDescription}
                                        </i>
                                    </Description>
                                    <FlexButtonPrice>
                                        <Button
                                            whileHover={{ backgroundColor: "#2E2E2E", color: "white" }}
                                            textcolor="black"
                                            w='125px'
                                            h='40px'
                                            margin='5px 0px 0px 0px'
                                            fam='Times New Roman'
                                            weight='-400'
                                            fontStyle='Normal'
                                            radius="0px"
                                            border="1px solid #8F805F"
                                            href='/booking'
                                        >
                                            Book Now!
                                        </Button>
                                        <Title
                                            family='Roboto Slab'
                                            weight='700'
                                            size='25px'
                                            color='#292929'
                                            margin='10px 0px 10px 0px'
                                            align='left'
                                        >
                                            {numberFormat(item.roomRate)}/night
                                        </Title>
                                    </FlexButtonPrice>
                                </FlexboxContent>
                            </FlexboxContentMain>
                            <HorizontalLineShortLeft></HorizontalLineShortLeft>
                        </div>
                        :
                        <div>
                            <FlexboxContentMain>
                                <FlexboxContent>
                                    <Title
                                        family='Roboto Slab'
                                        weight='700'
                                        size='33px'
                                        color='#292929'
                                        align='right'
                                    >
                                        {item.roomType}
                                    </Title>
                                    <Description
                                        align='right'
                                    >
                                        <i style={{ fontSize: '20px' }}>
                                            {item.roomDescription}
                                        </i>
                                    </Description>

                                    <FlexButtonPrice
                                        justifyContent="flex-end"
                                    >

                                        <Title
                                            family='Roboto Slab'
                                            weight='700'
                                            size='25px'
                                            color='#292929'
                                            margin='10px 0px 10px auto'
                                        >
                                            {numberFormat(item.roomRate)}/night

                                        </Title>
                                        <Button
                                            whileHover={{ backgroundColor: "#2E2E2E", color: "white" }}
                                            textcolor="black"
                                            w='125px'
                                            h='40px'
                                            margin='5px 0px 0px 0px'
                                            fam='Times New Roman'
                                            weight='-400'
                                            fontStyle='Normal'
                                            radius="0px"
                                            border="1px solid #8F805F"
                                            href='/booking'
                                        >
                                            Book Now!
                                        </Button>
                                    </FlexButtonPrice>
                                </FlexboxContent>
                                <div
                                    style={{ width: '550px', height: '350px', display: 'inline-block', overflow: 'hidden' }}
                                >
                                    <ImageSlider roomImages={roomTypeImagesDb.length != 0 ? roomTypeImagesDb.filter((itemRoomImage) => (itemRoomImage.roomType_id == item.id)).map((obj) => (obj.roomImages)) : null} />
                                </div>  ``
                            </FlexboxContentMain>
                            <HorizontalLineShortLeft></HorizontalLineShortLeft>
                        </div>
                ))
                    : 'No rooms available yet'}



                {/* <FlexboxContentMain>
                    <FlexboxContent>
                        <Title
                            family='Roboto Slab'
                            weight='700'
                            size='33px'
                            color='#292929'
                            align='right'
                        >
                            Premium Room
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
                                family='Roboto Slab'
                                weight='700'
                                size='25px'
                                color='#292929'
                                margin='10px 0px 10px auto'
                            >
                                ₱2,000/night
                            </Title>
                            <Button
                                whileHover={{ backgroundColor: "#2E2E2E", color: "white" }}
                                w='125px'
                                h='40px'
                                textcolor="black"
                                fam='Times New Roman'
                                weight='-400'
                                fontStyle='Normal'
                                radius="0px"
                                border="1px solid #8F805F"
                            >
                                Book Now!
                            </Button>
                        </FlexButtonPrice>
                    </FlexboxContent>
                    <FlexboxMainPhotoLeft
                        link={Background}></FlexboxMainPhotoLeft>
                </FlexboxContentMain>


                <HorizontalLineShortLeft></HorizontalLineShortLeft>

                <FlexboxContentMain>
                    <FlexboxMainPhotoLeft
                        link={Background3}></FlexboxMainPhotoLeft>
                    <FlexboxContent>
                        <Title
                            family='Roboto Slab'
                            weight='700'
                            size='33px'
                            color='#292929'
                            align='left'
                        >
                            Family Room
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
                                fam='Times New Roman'
                                weight='-400'
                                fontStyle='Normal'
                                radius="0px"
                                border="1px solid #8F805F"
                                href='/booking'
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
                                ₱2,700/night
                            </Title>
                        </FlexButtonPrice>
                    </FlexboxContent>
                </FlexboxContentMain>

                <HorizontalLineShortLeft></HorizontalLineShortLeft> */}
            </FlexboxContainer>
            <Footer />
        </Container>
    )
}


export default RoomRates;