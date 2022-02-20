import React from 'react'
import {  Button } from '../../components/button/styles'
import { Title } from '../../components/title/styles'
import { Announcement, AnnouncementConent, Background, Container, TitleBar } from './style'
import AnnouncementImg from '../../images/AnnouncementIMG/announcement.jpg'

function LightBox(props) {
  return (
    <Background
        display={props.display}
    >
        <Container>
            <TitleBar>
                <Title
                size="45px"
                color="#BFAA7E"
                weight="normal"
                >Announcement</Title>
            </TitleBar>
            <Announcement>
                <AnnouncementConent src={AnnouncementImg}></AnnouncementConent>
            </Announcement>
            <Button
            w='110px;'
            h='30px'
            bg='#BFAA7E'
            border='none'
            margin='auto 0px 10px 0px'
            onClick={props.onClick}
            >
                Close
            </Button>
        </Container>
    </Background>
  )
}

export default LightBox