import React, { useEffect } from 'react';
import { Container, ContentDiv, DatePickerContainer, FlexItems, HorizontalLine, HorizontalLineMini, Poster, WelcomeDiv } from './styles.js';
import DatePicker from '../../components/datePicker/DatePicker.js';
import { Button } from '../../components/button/styles.js';
import { Title } from '../../components/title/styles.js';
import { Description } from '../../components/paragraph/style.js';
import image from '../../images/backgroundImages/homeBackgroundImage.jpg'
export const HomeBooking = ({ title }) => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  return (
    <Container
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: .3, type: "tween", delay: .8 }}
    >
      <Title
        size='66px'
        weight='normal'
        margin='50px 0px 50px 0px'
      >{title}</Title>
      <DatePickerContainer>
        <DatePicker></DatePicker>
        <Button
          whileHover={{ scale: 1.05, backgroundColor: "#2e2e2e", color: "white" }}
          whileTap={{ scale: 1, color: "rgb(220,220,220)" }}
          w='120px'
          h='30px'
          textcolor='black'
          radius='0px'
          border='1px solid black'
          bg='transparent'
          
          onClick={()=>{window.location.href='/booking'}}
        >
          Book now!
        </Button>
      </DatePickerContainer>
      <WelcomeDiv>
        <Title
          size='55px'
          weight='normal'
          margin='80px 0px 50px 0px'
          color='white'
          shadow='1px 2px 2px white'
        >
          Welcome!
        </Title>
        <HorizontalLine></HorizontalLine>
        <Title
          size='50px'
          margin='30px 0px 20px 0px'
          color='#bfaa7e'
          shadow='1px 3px 2px black'
        >
          RM Luxe Hotel
        </Title>
        <Description
          width='490px'
          size='15px'
          color='white'
          fontStyle='italic'
          margin='30px 0px'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        </Description>
        <FlexItems>
          <Poster>
            <ContentDiv>
              <Title
                family='Lato'
                size='25px'
                margin='0px 0px 30px 0px'
              >
                Activities
              </Title>
              <Description
                size='13px'
                fontStyle='italic'
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Description>

            </ContentDiv>
            <HorizontalLineMini></HorizontalLineMini>
            <Button
              w='250px'
              h='45px'
              radius='0px'
              border='none'
              fontStyle='normal'
              weight='bold'
              fam='Lato'
              bg='#302B20'
              margin='auto 0px 0px 0px'
            >
              Read More
            </Button>
          </Poster>
          <Poster>
            <ContentDiv>
              <Title
                family='Lato'
                size='25px'
                margin='0px 0px 30px 0px'
              >
                Rooms & Rates
              </Title>
              <Description
                size='13px'
                fontStyle='italic'
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Description>

            </ContentDiv>
            <HorizontalLineMini></HorizontalLineMini>
            <Button
              w='250px'
              h='45px'
              radius='0px'
              border='none'
              fontStyle='normal'
              weight='bold'
              fam='Lato'
              bg='#302B20'
              margin='auto 0px 0px 0px'
              onClick={()=>{window.location.href='/roomRate'}}
            >
              Read More
            </Button>
          </Poster>
          <Poster>
            <ContentDiv>
              <Title
                family='Lato'
                size='25px'
                margin='0px 0px 30px 0px'
              >
                Location
              </Title>
              <Description
                size='13px'
                fontStyle='italic'
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Description>

            </ContentDiv>
            <HorizontalLineMini></HorizontalLineMini>
            <Button
              w='250px'
              h='45px'
              radius='0px'
              border='none'
              fontStyle='normal'
              weight='bold'
              fam='Lato'
              bg='#302B20'
              margin='auto 0px 0px 0px'
            >
              Read More
            </Button>
          </Poster>
        </FlexItems>
      </WelcomeDiv>
    </Container>
  )
}

export default HomeBooking;