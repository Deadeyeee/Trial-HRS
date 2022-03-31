import React, { useState, useEffect } from 'react'
import { Container, MainContainer, Messages, MessagesContent, MessagesContentContainer, MessagesTitleContainer, OptionContainer } from './Styles'
import { Title } from '../../components/title/styles'
import { Button } from '../../components/button/styles'

const ClientMessagesCont = () => {
  const [option, setOption] = useState('inbox');


  useEffect(() => {
    console.log(option)
  })
  return (
    <Container>
      <OptionContainer>
        <Button
          onClick={() => {
            setOption('inbox');
            console.log(option);
          }}
          w='70px'
          fam='arial'
          h='25px'
          textcolor={option == 'inbox' ? 'white' : 'black'}
          bg={option == 'inbox' ? '#302B20' : 'transparent'}
          weight='-400'
          fontStyle='normal'
          radius="0px"
          border="1px solid #8F805F"
          fontsize='18px'>

          Inbox
        </Button>
        <Button
          onClick={() => {
            setOption('sent');
            console.log(option);
          }}
          textcolor={option == 'sent' ? 'white' : 'black'}
          bg={option == 'sent' ? '#302B20' : 'transparent'}
          w='70px'
          fam='arial'
          h='25px'
          weight='-400'
          fontStyle='normal'
          radius="0px"
          border="1px solid #8F805F"
          fontsize='18px'>
          Sent
        </Button>
      </OptionContainer>

      {/* inbox */}
      <MainContainer
        display={option == 'inbox' ? 'flex' : 'none'}
      >
        <MessagesTitleContainer>
          <Title
            bg='#272727'
            family='raleway, sans-serif'
            color='white'
            weight='400'
            size='35px'
            fStyle='Normal'
            align='Center'
            width='100%'
            padding='15px 0px 15px 0px'
          >
            Inbox
          </Title>
        </MessagesTitleContainer>
        <MessagesContentContainer>

          <MessagesContent
            whileHover={{ boxShadow: "5px 2px 10px gray" }}
            whileTap={{ scale: .99 }}

            bg='white'
          >
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='700'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              From: Finance
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='700'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Payment Update
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='700'
              size='18px'
              fStyle='Italic'
              align='Center'
              margin='20px'>
              10/20/22
            </Title>
          </MessagesContent>
          <MessagesContent
            whileHover={{ boxShadow: "5px 2px 10px gray" }}
            whileTap={{ scale: .99 }}

          >
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              From: Finance
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Reciept Confirmation
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Italic'
              align='Center'
              margin='20px'>
              10/20/22
            </Title>
          </MessagesContent>
          <MessagesContent
            whileHover={{ boxShadow: "5px 2px 10px gray" }}
            whileTap={{ scale: .99 }}

            bg='white'
          >
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='700'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              From: Finance
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='700'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Promo!
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='700'
              size='18px'
              fStyle='Italic'
              align='Center'
              margin='20px'>
              10/20/22
            </Title>
          </MessagesContent>
          <MessagesContent
            whileHover={{ boxShadow: "5px 2px 10px gray" }}
            whileTap={{ scale: .99 }}>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              From: Finance
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Promo!
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Italic'
              align='Center'
              margin='20px'>
              10/20/22
            </Title>
          </MessagesContent>
          <MessagesContent
            whileHover={{ boxShadow: "5px 2px 10px gray" }}
            whileTap={{ scale: .99 }}>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              From: Finance
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Promo!
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Italic'
              align='Center'
              margin='20px'>
              10/20/22
            </Title>
          </MessagesContent>
          <MessagesContent
            whileHover={{ boxShadow: "5px 2px 10px gray" }}
            whileTap={{ scale: .99 }}>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              From: Finance
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Promo!
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Italic'
              align='Center'
              margin='20px'>
              10/20/22
            </Title>
          </MessagesContent>
          <MessagesContent
            whileHover={{ boxShadow: "5px 2px 10px gray" }}
            whileTap={{ scale: .99 }}>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              From: Finance
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Promo!
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Italic'
              align='Center'
              margin='20px'>
              10/20/22
            </Title>
          </MessagesContent>
          <MessagesContent
            whileHover={{ boxShadow: "5px 2px 10px gray" }}
            whileTap={{ scale: .99 }}>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              From: Finance
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Promo!
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Italic'
              align='Center'
              margin='20px'>
              10/20/22
            </Title>
          </MessagesContent>
        </MessagesContentContainer>
      </MainContainer>



      {/* SENT */}
      <MainContainer

        display={option == 'sent' ? 'flex' : 'none'}>
        <MessagesTitleContainer>
          <Title
            bg='#272727'
            family='raleway, sans-serif'
            color='white'
            weight='400'
            size='35px'
            fStyle='Normal'
            align='Center'
            width='100%'
            padding='15px 0px 15px 0px'
          >
            Sent
          </Title>
        </MessagesTitleContainer>
        <MessagesContentContainer>

          <MessagesContent
            whileHover={{ boxShadow: "5px 2px 10px gray" }}
            whileTap={{ scale: .99 }}

          >
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              To: Finance
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Reciept Update
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Italic'
              align='Center'
              margin='20px'>
              10/20/22
            </Title>
          </MessagesContent>
          <MessagesContent
            whileHover={{ boxShadow: "5px 2px 10px gray" }}
            whileTap={{ scale: .99 }}

          >
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              To: Support
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Help assistance
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Italic'
              align='Center'
              margin='20px'>
              10/20/22
            </Title>
          </MessagesContent>
          

        </MessagesContentContainer>
      </MainContainer>

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
        margin='30px 0px 0px 0px'
        fontsize='18px'
        bg='#282626'
      >
        New Message
      </Button>

    </Container>
  )
}

export default ClientMessagesCont