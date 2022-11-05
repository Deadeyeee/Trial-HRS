import React from 'react'
import { Container, FlexboxContainer, FlexboxContentMain, FlexboxMainPhotoLeft, FlexboxContent, Description, HorizontalLine, } from './Styles'
import { Title } from '../../components/title/styles';
import BackgroundIMG2 from "../../images/FamenitiesIMG/eventsplace.jpg";
import ImageSlider from '../../components/imageSlider/ImageSlider';
import ImageSlider2 from '../../components/imageSlider/ImageSlider2';
export const FAmenitiesContentCont = () => {

    let imageLinks = [
        "../../images/FamenitiesIMG/eventsplace.jpg",
    ]
    return (
        <Container>
            <Title
                color='#bfaa7e'
                weight='normal'
                size='50px'
                margin='60px 0px 60px 0px'
            >
                Facilities and Amenities
            </Title>
            <HorizontalLine></HorizontalLine>
            <FlexboxContainer style={{overflow: 'visible'}}>
                <FlexboxContentMain>
                    <div style={{ width: '500px', display: 'inline-block', }}>
                        <ImageSlider2 />
                    </div>
                    {/* <FlexboxMainPhotoLeft
                    link={BackgroundIMG2}></FlexboxMainPhotoLeft> */}
                    <FlexboxContent>
                        <Title
                            family='playfair display, serif'
                            weight='700'
                            size='56px'
                            color='#2e2e2e'
                            align='left'

                        >
                            Events Place
                        </Title>
                        <Description>
                            <i>
                            Nothing beats a great venue for bringing people together. 
                            There will never be a dull moment at RM Luxe Hotel because we have the ideal space for any of your events. 
                            Celebrate your milestones at our open event space on the building's rooftop, which can be designed and customized 
                            to your specifications.
                            </i>
                        </Description>
                        <Description>
                            <i style={{fontWeight:"bold", fontSize: "18px"}}>
                            For inquiries, please message us thru inbox or email:<a href='mailTo: rm.luxehotel@gmail.com' style={{color:"#8F8068"}}> rm.luxehotel@gmail.com</a> Thank you.
                            </i>
                        </Description>
                    </FlexboxContent>
                </FlexboxContentMain>
            </FlexboxContainer>
        </Container>
    )
}

export default FAmenitiesContentCont;