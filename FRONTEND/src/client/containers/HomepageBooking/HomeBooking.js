import React, { useEffect, useState } from 'react';
import { Container, ContentDiv, DatePickerContainer, FlexItems, HorizontalLine, HorizontalLineMini, Poster, WelcomeDiv, AccordionTitle, Faq, Question, Answer } from './styles.js';
import DateRangePicker from '../../components/datePicker/DateRangePicker.js';
import { Button } from '../../components/button/styles.js';
import { Title } from '../../components/title/styles.js';
import { Description } from '../../components/paragraph/style.js';
import image from '../../images/backgroundImages/homeBackgroundImage.jpg'
export const HomeBooking = ({ title }) => {
  const [startDate, setStartDate] = useState(new Date().setHours(0, 0, 0, 0));
  const [endDate, setEndDate] = useState(new Date(new Date().getTime() + 86400000).setHours(0, 0, 0, 0));
  const [nights, setNights] = useState();

  useEffect(() => {
    if (startDate !== null && endDate !== null) {
      setNights(Math.floor((endDate - startDate) / (24 * 60 * 60 * 1000)));
    }
    else {
      setNights(0);
    }
  }, [startDate, endDate])



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
        size='2.5vw'
        weight='normal'
        margin='2vw 0px 2vw 0px'
      >Check your desired date</Title>
      <DatePickerContainer>
        <DateRangePicker
          startDate={startDate}
          nights={nights}
          endDate={endDate}
          onChangeStartDate={(date) => setStartDate(date)}
          onChangeEndDate={(date) => setEndDate(date)}
          minDate={startDate}
        />
        <Button
          whileHover={{ scale: 1.05, backgroundColor: "#2e2e2e", color: "white" }}
          whileTap={{ scale: 1, color: "rgb(220,220,220)" }}
          w='10vw'
          h='2vw'
          textcolor='black'
          radius='0px'
          border='1px solid black'
          bg='transparent'
          fontsize='1.1vw'
          fam='Times New Roman'
          weight='bold'

          onClick={() => { window.location.href = '/booking' }}
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
          width='70vw'
          size='20px'
          color='white'
          fontStyle='italic'
          margin='30px 0px'
        >
          Relax and Enjoy the vicinity of Quezon City in the comfort of RM Luxe Hotel. 
          We offer services, including function, staycations, photoshoots and long-term lease. 
          RM Luxe Hotel also has an event place to accommodate your upcoming events and a coffee shop to make your stay great. 
          Visit us to become one of our valuable guests. See you around!
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
                size='14px'
                fontStyle='italic'
              >
               Celebrate your milestones at our open event space, 
               located at the building's rooftop, that can be designed and customized according to your desire. 
               You can also try the premium healthy coffee offered by 
               Doctors Blend Café located just in front of RM Luxe Hotel to boost your mood while enjoying your stay with us.
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
                size='13.5px'
                fontStyle='italic'
              >
                Feel at ease and enjoy our exceptional guest rooms during your stay. 
                The RM Luxe Hotel is a five-story building with 12 rooms on each floor.
                Currently, 48 of the 64 rooms are operating. 
                We’ll help you find the accommodation that would suit your needs. Choose from Deluxe with table, 
                Deluxe w/o table, Premium or Family Rooms, and relax in peace and comfort with the hotel's ambiance.
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
                size='14px'
                fontStyle='italic'
              >
                Relax, Enjoy and Rejuvenate yourself. 
                In the heart of Quezon City, close to the well-known event venue Fernwoods Garden, 
                is where you'll find the RM Luxe Hotel. The hotel's overall good ambiance and high-caliber
                service enable it to compete well with the other hotels in the area.
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


        <AccordionTitle>
            <Title
              size='50px'
              margin='10px 0px 20px 0px'
              color='#FFFFFF'
              shadow='1px 3px 2px black'
              family='Quicksand'
              fstyle='none'
            >
              FAQs
            </Title>

            <Faq>
              <Question>
                <Title
                  size='20px'
                  color='#FFFFFF'
                  family='Quicksand'
                  fstyle='none'
                >What time can I check-in and check-out?
                </Title>
                  
              </Question>
              <Answer>
                <Title
                   size='15px'
                   color='#FFFFFF'
                   family='Quicksand'
                   fstyle='none'
                > You can Check-In from 2pm to 4am and check-out before 12pm.
                </Title>
              </Answer>
            </Faq>

            <Faq>
              <Question>
                <Title
                  size='20px'
                  color='#FFFFFF'
                  family='Quicksand'
                  fstyle='none'
                >Are pets allowed?
                </Title>
                 
              </Question>
              <Answer>
                <Title
                   size='15px'
                   color='#FFFFFF'
                   family='Quicksand'
                   fstyle='none'
                   padding='1rm 0rm 0rm 0rm'
                > Sorry, we dont allow pets around the hotel's premises.
                </Title>
              </Answer>
            </Faq>

            <Faq>
              <Question>
                <Title
                  size='20px'
                  color='#FFFFFF'
                  family='Quicksand'
                  fstyle='none'
                > Does the hotel require a 50% downpayment to confirm my reservation?
                </Title>
                  
              </Question>
              <Answer>
                <Title
                   size='15px'
                   color='#FFFFFF'
                   family='Quicksand'
                   fstyle='none'
                > Yes, you can pay via Gcash or Bank Transfer.
                </Title>
              </Answer>
            </Faq>  

            <Faq>
              <Question>
                <Title
                  size='20px'
                  color='#FFFFFF'
                  family='Quicksand'
                  fstyle='none'
                > Yes, you can pay via Gcash or Bank Transfer.
                </Title>
                  
              </Question>
              <Answer>
                <Title
                   size='15px'
                   color='#FFFFFF'
                   family='Quicksand'
                   fstyle='none'
                > We charge 150 pesos per every hour of extension after 12NN.
                </Title>
              </Answer>
            </Faq>  

            <Faq>
              <Question>
                <Title
                  size='20px'
                  color='#FFFFFF'
                  family='Quicksand'
                  fstyle='none'
                >What time can I check-in and check-out?
                </Title>
                  
              </Question>
              <Answer>
                <Title
                   size='15px'
                   color='#FFFFFF'
                   family='Quicksand'
                   fstyle='none'
                > You can Check-In from 2pm to 4am and check-out before 12pm.
                </Title>
              </Answer>
            </Faq>  
          </AccordionTitle>

      </WelcomeDiv>
    </Container>
  )
}

export default HomeBooking;