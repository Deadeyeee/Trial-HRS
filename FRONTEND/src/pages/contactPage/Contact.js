import React, { useEffect } from 'react'
import { Container, HorizontalLine, VerticalLine, FlexboxContainer1, FlexboxContainer2, FlexboxContainerMain, FlexboxItem1, FlexboxItem2, ContentContainer, FlexboxTitleContainer, MapContainer } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import { TextInput } from '../../components/textBox/style';
import { Title } from '../../components/title/styles';
import { Button } from '../../components/button/styles';
import Location from '../../components/map/Location'

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
                    <FlexboxContainer2>
                        <FlexboxItem2>
                            <Title
                                family='Roboto Slab'
                                size='40px'
                                color='#8F805F'
                                align='left'
                            >
                                Inquiry Form
                            </Title>
                            <TextInput
                                margins='10px 0px 0px 0px'
                                fontStyle='italic'
                                width='375px'
                                padding='0px 0px 0px 10px'
                                background='#E1DACA'
                                placeholder='Name'
                            >

                            </TextInput>
                            <TextInput
                                margins='10px 0px 0px 0px'
                                fontStyle='italic'
                                width='375px'
                                padding='0px 0px 0px 10px'
                                background='#E1DACA'
                                placeholder='Email'
                            >

                            </TextInput>
                            <TextInput
                                margins='10px 0px 0px 0px'
                                fontStyle='italic'
                                width='375px'
                                padding='0px 0px 0px 10px'
                                background='#E1DACA'
                                placeholder='Subject'
                            >

                            </TextInput>
                            <TextInput
                                margins='10px 0px 0px 0px'
                                fontStyle='italic'
                                width='375px'
                                padding='0px 0px 80px 10px'
                                background='#E1DACA'
                                placeholder='Message'
                            >

                            </TextInput>
                            <Button
                                bg='#60553F'
                                w='60px'
                                h='30px'
                                margin='5px 0px 0px 310px'
                                padding='0.5px'
                                fam='Raleway'
                                fontStyle='normal'
                            >
                                Submit
                            </Button>
                        </FlexboxItem2>
                    </FlexboxContainer2>
                </FlexboxContainerMain>
            </ContentContainer>
            <MapContainer>
                <Location></Location>
            </MapContainer>
            <Footer />
        </Container>
    )
}


export default Contact;