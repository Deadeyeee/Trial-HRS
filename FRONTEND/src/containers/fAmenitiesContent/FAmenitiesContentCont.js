import React from 'react'
import { Container, FlexboxContainer, FlexboxContentMain, FlexboxMainPhotoLeft, FlexboxContent, Description, HorizontalLine, } from './Styles'
import { Title } from '../../components/title/styles';
export const FAmenitiesContentCont = () => {
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
            <FlexboxContainer>
                <FlexboxContentMain>
                    <FlexboxMainPhotoLeft></FlexboxMainPhotoLeft>
                    <FlexboxContent>
                        <Title
                            family='playfair display, serif'
                            weight='700'
                            size='56px'
                            color='#2e2e2e'
                            align='left'

                        >
                            Events Places
                        </Title>
                        <Description>
                            <i>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </i>
                        </Description>
                        <Description>
                            <i>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </i>
                        </Description>
                    </FlexboxContent>
                </FlexboxContentMain>
            </FlexboxContainer>
    </Container>
  )}

 export default FAmenitiesContentCont;