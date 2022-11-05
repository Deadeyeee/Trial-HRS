import React, { useEffect } from 'react'
import { Container, FlexTitle, HorizontalLine, PhotoHolder, PhotoHolderMain, TitleHolder } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import { Title } from '../../components/title/styles';
import BackgroundIMG from "../../images/FamenitiesIMG/spa.jpg";
import BackgroundIMG1 from "../../images/FamenitiesIMG/coffeeshop.jpg";
import BackgroundIMG2 from "../../images/FamenitiesIMG/eventsplace.jpg";
import ImageSlider5 from '../../components/imageSlider/ImageSlider5';
import ImageSlider4 from '../../components/imageSlider/ImageSlider4';


let imageLinks = [
    "../../images/FamenitiesIMG/eventsplace.jpg",
]
export const Famenities = () => {
    useEffect(() => {
        document.title = "Facilities & Ameneties"
    }, [])
    return (
        <Container>
            <NavigationBar facilities />
            <Title
                color='#bfaa7e'
                weight='normal'
                size='60px'
                margin='60px 0px 60px 0px'
            >
                Facilities & Amenities
            </Title>
            <PhotoHolderMain>
                <PhotoHolder>
                    <div style={{ width: '100%' }} onClick={()=> window.location= '/facilitiesAmenities/eventsPlace'}>
                        <ImageSlider4/>
                    </div>
                    <TitleHolder>
                        <i>
                            <a style={{
                                textDecoration: "none", cursor: "pointer",
                            }} href='/facilitiesAmenities/eventsPlace'>
                                <Title

                                    family='Roboto Slab, Serif'
                                    color='white'
                                    size='46px'
                                    weight='400'
                                    align='left'
                                    margin="0px 0px 0px 200px"
                                    cursor="pointer"
                                >

                                    EVENTS PLACE
                                </Title>
                            </a>
                        </i>
                    </TitleHolder>
                </PhotoHolder>
                <PhotoHolder>
                    <div style={{ width: '100%' }} onClick={()=> window.location= '/facilitiesAmenities/coffeeShop'}>
                        <ImageSlider5 />
                    </div>
                    <TitleHolder
                        justifyContent="flex-end"
                    >
                        <i>
                            <a style={{
                                textDecoration: "none", cursor: "pointer",
                            }} href='/facilitiesAmenities/coffeeShop'>
                                <Title

                                    family='Roboto Slab, Serif'
                                    color='white'
                                    size='46px'
                                    weight='400'
                                    align='right'
                                    opc='100%'
                                    margin="0px 200px 0px 0px"
                                    cursor="pointer"
                                >
                                    COFFEE SHOP
                                </Title>
                            </a>
                        </i>

                    </TitleHolder>
                </PhotoHolder>
            </PhotoHolderMain>
            <Footer />
        </Container>
    )
}


export default Famenities;