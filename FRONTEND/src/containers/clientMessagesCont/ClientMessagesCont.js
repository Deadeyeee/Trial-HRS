import React from 'react'
import { Container, Messages, MessagesContent, MessagesContentContainer, MessagesTitleContainer } from './Styles'
import { Title } from '../../components/title/styles'
import { Button } from '../../components/button/styles'

const ClientMessagesCont = () => {
  return (
    <Container>
      <MessagesContentContainer>
        <MessagesTitleContainer>
        <Title
           bg='#272727'
           family= 'raleway, sans-serif'
           color='white'
           weight='400'   
           size='35px'
           fStyle='Normal'
           align='Center'
           width='100%'
           padding='15px 0px 15px 0px'
        >  
           Messages
        </Title>
        </MessagesTitleContainer>
          <MessagesContent>
            <Title
              family= 'raleway, sans-serif'
              color='#736449'
              weight='700'   
              size='20px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              Payment Update
            </Title>
            <Title
              family= 'raleway, sans-serif'
              color='#736449'
              weight='400'   
              size='20px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Lorem Ipsum Dolor Sit...
            </Title>
            <Title
                family= 'raleway, sans-serif'
                color='#736449'
                weight='400'   
                size='20px'
                fStyle='Italic'
                align='Center'
                margin='20px'>
              :10/20/22
            </Title>
            </MessagesContent>
            <MessagesContent>
            <Title
              family= 'raleway, sans-serif'
              color='#736449'
              weight='700'   
              size='20px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              Payment Update
            </Title>
            <Title
              family= 'raleway, sans-serif'
              color='#736449'
              weight='400'   
              size='20px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Lorem Ipsum Dolor Sit...
            </Title>
            <Title
                family= 'raleway, sans-serif'
                color='#736449'
                weight='400'   
                size='20px'
                fStyle='Italic'
                align='Center'
                margin='20px'>
              :10/20/22
            </Title>
            </MessagesContent>
            <Messages>
            <Title
              family= 'raleway, sans-serif'
              color='#736449'
              weight='700'   
              size='20px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              Payment Update
            </Title>
            <Title
              family= 'raleway, sans-serif'
              color='#736449'
              weight='400'   
              size='20px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Lorem Ipsum Dolor Sit...
            </Title>
            <Title
                family= 'raleway, sans-serif'
                color='#736449'
                weight='400'   
                size='20px'
                fStyle='Italic'
                align='Center'
                margin='20px'>
              :10/20/22
            </Title>
            </Messages>
      </MessagesContentContainer>
      <Button
                whileHover={{ backgroundColor: "#302B20", color: "white" }}
                w='150px'
                h='50px'
                textcolor="white"
                fam='playfair display'
                weight='-400'
                fontStyle='normal'
                radius="0px"
                border="1px solid #8F805F"
                margin='10px 0px 10px 0px'
                fontsize='16px'
                bg='#282626'
            >
                New Message
            </Button>

    </Container>
  )
}

export default ClientMessagesCont