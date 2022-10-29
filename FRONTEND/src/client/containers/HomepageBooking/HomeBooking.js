import React, { useEffect, useState } from 'react';
import { Container, ContentDiv, DatePickerContainer, FlexItems, HorizontalLine, HorizontalLineMini, Poster, WelcomeDiv } from './styles.js';
import DateRangePicker from '../../components/datePicker/DateRangePicker.js';
import { Button } from '../../components/button/styles.js';
import { Title } from '../../components/title/styles.js';
import { Description } from '../../components/paragraph/style.js';
import image from '../../images/backgroundImages/homeBackgroundImage.jpg'
import { LabelDiv, Persons, TitleCalendarContainer } from '../bookingPage/Styles.js';
import { TextInput } from '../../components/textBox/style.js';
export const HomeBooking = ({ title }) => {
  const [startDate, setStartDate] = useState(new Date(new Date().setHours(0, 0, 0, 0)));
  const [endDate, setEndDate] = useState(new Date(new Date(new Date().getTime() + 86400000).setHours(0, 0, 0, 0)));
  const [nights, setNights] = useState();
  const [adults, setAdults] = useState(2)
  let minEndDate = new Date(startDate);

  useEffect(() => {

    if (startDate !== null && endDate !== null) {
      setNights(Math.floor((endDate - startDate) / (24 * 60 * 60 * 1000)));
    }
    else {
      setNights(0);
    }
    // if () {
    //     alert('ey')
    //     // setEndDate(new Date(Date.now(startDate)).setHours(0, 0, 0, 0) )
    // }
    console.log("ugh: ", startDate)
    console.log("ugh: ", endDate)
    // console.log("ugh: ", new Date(startDate).getTime() + 86400000)
    if (Date.parse(startDate) >= Date.parse(endDate)) {
      // setEndDate(new Date(startDate).getTime() + 86400000)
      console.log('JSAPOJ', new Date(Date.now() + 86400000))
      setEndDate(new Date(Date.parse(startDate) + 86400000))
    }
    // if(startDate )
  }, [startDate, endDate])



  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  const bookFilterDate = () =>{
    window.sessionStorage.setItem('startDate', startDate)
    window.sessionStorage.setItem('endDate', endDate)
    window.sessionStorage.setItem('guest', adults)

    window.location = '/booking'
  }
  return (
    <Container
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: .3, type: "tween", delay: .8 }}
    >
      <Title
        size='2.5vw'
        weight='normal'
        margin='2vw 0px 2vw 0px'
      >Check your desired date</Title>
      <TitleCalendarContainer>
        <DateRangePicker
          startDate={startDate}
          nights={nights}
          endDate={endDate}
          onChangeStartDate={(date) => setStartDate(date)}
          onChangeEndDate={(date) => setEndDate(date)}
          minDateStart={new Date()}
          // maxDateStart={new Date(endDate)}
          minDateEnd={minEndDate}

        // minDate={new Date()}
        />

        <Persons>
          <LabelDiv>
            <TextInput
              style={{ fontWeight: 'bold', fontSize: '1.1vw' }}
              family='Roboto Slab'
              width="6vw"
              placeholder="No. of Adults"
              align="center"
              borderColor='black'
              margins='0px'
              value={adults}
              max={4}
              min={1}
              type='number'
              onChange={(e) => {
                setAdults(e.target.value);
              }}
              height='3vw'
            >

            </TextInput>
            <Title
              size='1.1vw'
              weight="Bold">

              No. of guest(s)
            </Title>
          </LabelDiv>
          <LabelDiv>


            {/* <TextInput
                            style={{ fontWeight: 'bold', fontSize: '1.1vw' }}
                            family='Roboto Slab'
                            width="5vw"
                            placeholder="No. of Adults"
                            align="center"
                            borderColor='black'
                            margins='0px'
                            max={2}
                            min={0}
                            value={kids}
                            type='number'
                            onChange={(e) => {
                                setKids(e.target.value);
                            }}
                            height='3vw'
                        ></TextInput>

                        <Title
                            size='1.1vw'
                            weight="bold">

                            Kids
                        </Title> */}
          </LabelDiv>
        </Persons>
        <Button
          whileHover={{ backgroundColor: "#2E2E2E", color: "white" }}
          w='10vw'
          h='2vw'
          textcolor="black"
          fam='Times New Roman'
          weight='400'
          fontStyle='Italic'
          radius="0px"
          border="1px solid #8F805F"
          fontsize='1.1vw'

        onClick={() => { bookFilterDate(); }}
        >

          Book now!!
        </Button>
      </TitleCalendarContainer>
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
          width='70vw'
          size='15px'
          color='white'
          fontStyle='italic'
          margin='30px 0px'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        </Description>
        <FlexItems>
          <Poster>
            <ContentDiv>
              <Title
                family='Roboto Slab'
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
              w='90%'
              h='45px'
              radius='0px'
              border='none'
              fontStyle='normal'
              weight='bold'
              fam='Roboto Slab'
              bg='#302B20'
              margin='auto 0px 0px 0px'

              onClick={() => { window.location.href = '/facilitiesAmenities' }}
            >
              Read More
            </Button>
          </Poster>
          <Poster>
            <ContentDiv>
              <Title
                family='Roboto Slab'
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
              w='90%'
              h='45px'
              radius='0px'
              border='none'
              fontStyle='normal'
              weight='bold'
              fam='Roboto Slab'
              bg='#302B20'
              margin='auto 0px 0px 0px'
              onClick={() => { window.location.href = '/roomRate' }}
            >
              Read More
            </Button>
          </Poster>
          <Poster>
            <ContentDiv>
              <Title
                family='Roboto Slab'
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
              w='90%'
              h='45px'
              radius='0px'
              border='none'
              fontStyle='normal'
              weight='bold'
              fam='Roboto Slab'
              bg='#302B20'
              margin='auto 0px 0px 0px'

              onClick={() => { window.location.href = '/contactUs' }}
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