import React from 'react'
import { Container, FlexboxContainer, FlexboxContentMain, FlexboxMainPhotoLeft, FlexboxContent, Description, HorizontalLine, PhotoMain, } from './Styles'
import { Title } from '../../components/title/styles';
import BackgroundIMG2 from "../../images/FamenitiesIMG/eventsplace.jpg";
import ImageSlider3 from '../../components/imageSlider/ImageSlider3';

export const FAmenitiesContentCont2 = () => {

    let imageLinks = [
        "../../images/FamenitiesIMG/coffeeshop.jpg",
    ]
    return (
        <Container>
            <Title
                color='#bfaa7e'
                weight='normal'
                size='50px'
                margin='60px 0px 60px 0px'
                size1000='45px'
                margin1000='20px 0px 0px 0px'
            >
                Facilities and Amenities
            </Title>
            <HorizontalLine></HorizontalLine>
            <FlexboxContainer style={{overflow: 'visible'}}>
                <FlexboxContentMain>
                <PhotoMain>
                <div style={{display: 'inline-block', }}
                 className='imageSlider'
                >
                        <ImageSlider3 />
                    </div>
                    </PhotoMain>
                    {/* <FlexboxMainPhotoLeft
                    link={BackgroundIMG2}></FlexboxMainPhotoLeft> */}
                    <FlexboxContent>
                        <Title
                            family='playfair display, serif'
                            weight='700'
                            size='56px'
                            color='#2e2e2e'
                            align='left'
                            size1000='45px'
                            margin1000='20px 0px 20px 0px'


                        >
                            Doctor's Blend
                        </Title>
                        <Description>
                            <i>
                            Try the premium healthy coffee offered by Doctors Blend Café, which is located directly in front of RM Luxe Hotel, 
                            to improve your mood while staying with us. This café was founded by a perfect match of four doctors from different 
                            disciplines collaborating for a common goal and a pastry enthusiast to help promote the Philippine coffee industry 
                            while educating drinkers on its health benefits. 
                            </i>
                        </Description>
                        <Description>
                            <i>
                            Two medical experts who promote a balanced and healthy lifestyle. 
                            An engineer who promotes business innovation through the use of locally produced technologies. 
                            A coffee scientist who innovates to bring the farm-to-cup experience to more people. 
                            A pastry enthusiast who is passionate about baking.Every Filipino deserves premium healthy coffee, 
                            so along with two more important partners, we support our local coffee bean farmers by providing 
                            healthy coffee blends and products that are both affordable and of the highest quality.
                            </i>
                        </Description>
                    </FlexboxContent>
                </FlexboxContentMain>
            </FlexboxContainer>
        </Container>
    )
}

export default FAmenitiesContentCont2;