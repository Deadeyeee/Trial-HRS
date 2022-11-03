import React, { useEffect, useState } from "react";
import {
  Container,
  ContentDiv,
  ContentDivMain,
  DatePickerContainer,
  FlexItems,
  HorizontalLine,
  HorizontalLineMini,
  Poster,
  WelcomeDiv,
  AccordionTitle,
  Faq,
  Question,
  Answer,
  AlterPoster,
  OtherPoster
} from "./styles.js";
import DateRangePicker from "../../components/datePicker/DateRangePicker.js";
import { Button } from "../../components/button/styles.js";
import { Title } from "../../components/title/styles.js";
import { Description } from "../../components/paragraph/style.js";
import image from "../../images/backgroundImages/homeBackgroundImage.jpg";
import {
  LabelDiv,
  Persons,
  TitleCalendarContainer,
} from "../bookingPage/Styles.js";
import { TextInput } from "../../components/textBox/style.js";
import { ArrowForwardIos } from "@mui/icons-material";
export const HomeBooking = ({ title }) => {
  const [startDate, setStartDate] = useState(
    new Date(new Date().setHours(0, 0, 0, 0))
  );
  const [endDate, setEndDate] = useState(
    new Date(new Date(new Date().getTime() + 86400000).setHours(0, 0, 0, 0))
  );
  const [nights, setNights] = useState();
  const [adults, setAdults] = useState(2);
  let minEndDate = new Date(startDate);

  useEffect(() => {
    if (startDate !== null && endDate !== null) {
      setNights(Math.floor((endDate - startDate) / (24 * 60 * 60 * 1000)));
    } else {
      setNights(0);
    }
    // if () {
    //     alert('ey')
    //     // setEndDate(new Date(Date.now(startDate)).setHours(0, 0, 0, 0) )
    // }
    console.log("ugh: ", startDate);
    console.log("ugh: ", endDate);
    // console.log("ugh: ", new Date(startDate).getTime() + 86400000)
    if (Date.parse(startDate) >= Date.parse(endDate)) {
      // setEndDate(new Date(startDate).getTime() + 86400000)
      console.log("JSAPOJ", new Date(Date.now() + 86400000));
      setEndDate(new Date(Date.parse(startDate) + 86400000));
    }
    // if(startDate )
  }, [startDate, endDate]);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const bookFilterDate = () => {
    window.sessionStorage.setItem("startDate", startDate);
    window.sessionStorage.setItem("endDate", endDate);
    window.sessionStorage.setItem("guest", adults);

    window.location = "/booking";
  };

  const [openAnswer1, setOpenAnswer1] = useState(false);
  const [openAnswer2, setOpenAnswer2] = useState(false);
  const [openAnswer3, setOpenAnswer3] = useState(false);
  const [openAnswer4, setOpenAnswer4] = useState(false);
  const [openAnswer5, setOpenAnswer5] = useState(false);

  const handleOpenAnswer1 = () => setOpenAnswer1(true);
  const handleCloseAnswer1 = () => setOpenAnswer1(false);

  const handleOpenAnswer2 = () => setOpenAnswer2(true);
  const handleCloseAnswer2 = () => setOpenAnswer2(false);

  const handleOpenAnswer3 = () => setOpenAnswer3(true);
  const handleCloseAnswer3 = () => setOpenAnswer3(false);

  const handleOpenAnswer4 = () => setOpenAnswer4(true);
  const handleCloseAnswer4 = () => setOpenAnswer4(false);

  const handleOpenAnswer5 = () => setOpenAnswer5(true);
  const handleCloseAnswer5 = () => setOpenAnswer5(false);

  return (
    <Container
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.3, type: "tween", delay: 0.8 }}
    >
      <Title size="2.5vw" weight="normal" margin="2vw 0px 2vw 0px">
        Check your desired date
      </Title>
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
          maxDateEnd={new Date(Date.parse(startDate) + 15552000000)}

          // minDate={new Date()}
        />

        <Persons>
          <LabelDiv>
            <TextInput
              style={{ fontWeight: "bold", fontSize: "1.1vw" }}
              family="Roboto Slab"
              width="6vw"
              placeholder="No. of Adults"
              align="center"
              borderColor="black"
              margins="0px"
              value={adults}
              max={4}
              min={1}
              type="number"
              onChange={(e) => {
                setAdults(e.target.value);
              }}
              height="3vw"
            ></TextInput>
            <Title size="1.1vw" weight="Bold">
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
          w="10vw"
          h="2vw"
          textcolor="black"
          fam="Times New Roman"
          weight="400"
          fontStyle="Italic"
          radius="0px"
          border="1px solid #8F805F"
          fontsize="1.1vw"
          onClick={() => {
            bookFilterDate();
          }}
        >
          Book now!!
        </Button>
      </TitleCalendarContainer>
      <WelcomeDiv>
        <Title
          size="55px"
          weight="normal"
          margin="80px 0px 50px 0px"
          color="white"
          shadow="1px 2px 2px white"
        >
          Welcome!
        </Title>
        <HorizontalLine></HorizontalLine>
        <Title
          size="50px"
          margin="30px 0px 20px 0px"
          color="#bfaa7e"
          shadow="1px 3px 2px black"
        >
          RM Luxe Hotel
        </Title>
        <Description
          width="70vw"
          size="20px"
          color="white"
          fontStyle="italic"
          margin="30px 0px"
        >
          Relax and enjoy the vicinity of Quezon City in the comfort of RM Luxe
          Hotel. We offer services, including function, staycations, photoshoots
          and long-term lease. RM Luxe Hotel also has an event place to
          accommodate your upcoming events and a coffee shop to make your stay
          great. Visit us to become one of our valuable guests. See you around!
        </Description>
        <FlexItems>
          <Poster>
            <ContentDivMain></ContentDivMain>
            <ContentDiv>
              <Title
                family="Roboto Slab"
                size="25px"
                margin="0px 0px 30px 0px"
                fstyle="none"
                color="white"
              >
                Facilities and Amenities
              </Title>
              <Description size="15px" fontStyle="italic" color="white">
                Celebrate your milestones at our open event space, located at
                the building's rooftop, that can be designed and customized
                according to your desire. You can also try the premium healthy
                coffee offered by Doctors Blend Café located just in front of RM
                Luxe Hotel to boost your mood while enjoying your stay with us.
              </Description>
              <HorizontalLineMini></HorizontalLineMini>
              <Button
                w="90%"
                h="45px"
                radius="0px"
                border="none"
                fontStyle="normal"
                weight="bold"
                fam="Roboto Slab"
                bg="#302B20"
                margin="auto 0px 0px 0px"
                onClick={() => {
                  window.location.href = "/facilitiesAmenities";
                }}
              >
                Read More
              </Button>
            </ContentDiv>
          </Poster>
          <AlterPoster>
            <ContentDiv>
              <Title
                family="Roboto Slab"
                size="25px"
                margin="0px 0px 30px 0px"
                fstyle="none"
                color="white"
              >
                Rooms & Rates
              </Title>
              <Description size="15px" fontStyle="italic" color="white">
                Feel at ease and enjoy our exceptional guest rooms during your
                stay. The RM Luxe Hotel is a five-story building with 12 rooms
                on each floor. Currently, 48 of the 64 rooms are operating.
                We’ll help you find the accommodation that would suit your
                needs. Choose from Deluxe with table, Deluxe w/o table, Premium
                or Family Rooms, and relax in peace and comfort with the hotel's
                ambiance.
              </Description>
              <HorizontalLineMini></HorizontalLineMini>
              <Button
                w="90%"
                h="45px"
                radius="0px"
                border="none"
                fontStyle="normal"
                weight="bold"
                fam="Roboto Slab"
                bg="#302B20"
                margin="auto 0px 0px 0px"
                onClick={() => {
                  window.location.href = "/roomRate";
                }}
              >
                Read More
              </Button>
            </ContentDiv>
          </AlterPoster>
          <OtherPoster>
            <ContentDiv>
              <Title
                family="Roboto Slab"
                size="25px"
                margin="0px 0px 30px 0px"
                fstyle="none"
                color="white"
              >
                Location
              </Title>
              <Description size="15px" fontStyle="italic" color="White">
                Relax, Enjoy and Rejuvenate yourself. In the heart of Quezon
                City, close to the well-known event venue Fernwoods Garden, is
                where you'll find the RM Luxe Hotel. The hotel's overall good
                ambiance and high-caliber service enable it to compete well with
                the other hotels in the area.
              </Description>
              <HorizontalLineMini></HorizontalLineMini>
              <Button
              w="90%"
              h="45px"
              radius="0px"
              border="none"
              fontStyle="normal"
              weight="bold"
              fam="Roboto Slab"
              bg="#302B20"
              margin="auto 0px 0px 0px"
              onClick={() => {
                window.location.href = "/contactUs";
              }}
            >
              Read More
            </Button>
            </ContentDiv>
          </OtherPoster>
        </FlexItems>

        <AccordionTitle>
          <Title
            size="50px"
            margin="10px 0px 20px 0px"
            color="#FFFFFF"
            shadow="1px 3px 2px black"
            family="Quicksand"
            fstyle="none"
          >
            Frequently Asked Questions
          </Title>

          <Faq
            onClick={() => {
              setOpenAnswer1(!openAnswer1);
            }}
          >
            <Question>
              <Title
                size="30px"
                color="#FFFFFF"
                family="Quicksand"
                fstyle="none"
              >
                What time can I check-in and check-out?
              </Title>
              {/* import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; */}
              <ArrowForwardIos
                style={
                  openAnswer1 == true
                    ? {
                        color: "white",
                        transform: "rotate(90deg)",
                      }
                    : {
                        color: "white",
                      }
                }
              />
            </Question>
            <Answer
              style={
                openAnswer1 == true
                  ? {}
                  : {
                      display: "none",
                    }
              }
            >
              <Title
                size="24px"
                color="#FFFFFF"
                family="Quicksand"
                fstyle="none"
                weight="normal"
              >
                {" "}
                You can Check-In from 2pm to 4am and check-out before 12pm.
              </Title>
            </Answer>
          </Faq>

          <Faq
            onClick={() => {
              setOpenAnswer2(!openAnswer2);
            }}
          >
            <Question>
              <Title
                size="30px"
                color="#FFFFFF"
                family="Quicksand"
                fstyle="none"
              >
                Are pets allowed?
              </Title>
              <ArrowForwardIos
                style={
                  openAnswer2 == true
                    ? {
                        color: "white",
                        transform: "rotate(90deg)",
                      }
                    : {
                        color: "white",
                      }
                }
              />
            </Question>
            <Answer
              style={
                openAnswer2 == true
                  ? {}
                  : {
                      display: "none",
                    }
              }
            >
              <Title
                size="24px"
                color="#FFFFFF"
                family="Quicksand"
                fstyle="none"
                weight="normal"
                padding="1rm 0rm 0rm 0rm"
              >
                {" "}
                Sorry, we dont allow pets around the hotel's premises.
              </Title>
            </Answer>
          </Faq>

          <Faq
            onClick={() => {
              setOpenAnswer3(!openAnswer3);
            }}
          >
            <Question>
              <Title
                size="30px"
                color="#FFFFFF"
                family="Quicksand"
                fstyle="none"
                align="left"
              >
                {" "}
                Does the hotel require a 50% downpayment to confirm my
                reservation?
              </Title>
              <ArrowForwardIos
                style={
                  openAnswer3 == true
                    ? {
                        color: "white",
                        transform: "rotate(90deg)",
                      }
                    : {
                        color: "white",
                      }
                }
              />
            </Question>
            <Answer
              style={
                openAnswer3 == true
                  ? {}
                  : {
                      display: "none",
                    }
              }
            >
              <Title
                size="24px"
                color="#FFFFFF"
                family="Quicksand"
                fstyle="none"
                weight="normal"
              >
                {" "}
                Yes, you can pay via Gcash or Bank Transfer.
              </Title>
            </Answer>
          </Faq>

          <Faq
            onClick={() => {
              setOpenAnswer4(!openAnswer4);
            }}
          >
            <Question>
              <Title
                size="30px"
                color="#FFFFFF"
                family="Quicksand"
                fstyle="none"
              >
                {" "}
                How much do you charge for every extended hour after the
                check-out time?
              </Title>
              <ArrowForwardIos
                style={
                  openAnswer4 == true
                    ? {
                        color: "white",
                        transform: "rotate(90deg)",
                      }
                    : {
                        color: "white",
                      }
                }
              />
            </Question>
            <Answer
              style={
                openAnswer4 == true
                  ? {}
                  : {
                      display: "none",
                    }
              }
            >
              <Title
                size="24px"
                color="#FFFFFF"
                family="Quicksand"
                fstyle="none"
                weight="normal"
              >
                {" "}
                We charge 150 pesos per every hour of extension after 12NN.
              </Title>
            </Answer>
          </Faq>

          <Faq
            onClick={() => {
              setOpenAnswer5(!openAnswer5);
            }}
          >
            <Question>
              <Title
                size="30px"
                color="#FFFFFF"
                family="Quicksand"
                fstyle="none"
              >
                How much do you charge for an additional person per room?
              </Title>
              <ArrowForwardIos
                style={
                  openAnswer5 == true
                    ? {
                        color: "white",
                        transform: "rotate(90deg)",
                      }
                    : {
                        color: "white",
                      }
                }
              />
            </Question>
            <Answer
              style={
                openAnswer5 == true
                  ? {}
                  : {
                      display: "none",
                    }
              }
            >
              <Title
                size="24px"
                color="#FFFFFF"
                family="Quicksand"
                fstyle="none"
                weight="normal"
              >
                {" "}
                We charge 350 pesos per head for the additional person.
              </Title>
            </Answer>
          </Faq>
        </AccordionTitle>
      </WelcomeDiv>
    </Container>
  );
};

export default HomeBooking;
