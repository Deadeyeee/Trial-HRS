import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const HorizontalLine = styled(motion.div)`
    background-color: black;
    height: 1px;
    width: 70%;
    margin: 30px 0px 10px 0px; 
    align: center;
`;

export const TitleCalendarContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const CalendarContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const RoomContainerMain = styled(motion.div)`
    display: flex;
    height: auto;
    flex-direction: column
    justify-content: center;
    align-items: center;
    width: auto;
    gap: 40px;
`;

export const RoomContainer = styled(motion.div)`
    display: flex;
    flex-direction: Row;
    
`;

export const RoomContainerContentPhoto = styled(motion.div)`
    background-color: gray;
    border: 1px solid black;
    width: 450px;
    height: 250px;
    margin 60px 60px 0px 0px;
`;

export const RoomContainerContentRight = styled(motion.div)`
    display: flex;
    flex-direction: column;
`;

export const RoomContainerContentLeft = styled(motion.div)`
    display: Flex;
    flex-direction: column;
`;

export const RatingContainer = styled(motion.div)`
    background-color: gray;
    border: 1px solid black;
    width: 150px;
    height: 20px;
    margin: 10px 10px;
`;

export const RatingContainerRight = styled(motion.div)`
    background-color: gray;
    border: 1px solid black;
    width: 150px;
    height: 20px;
    margin: 10px 0px 10px 160px;
`;

export const ServicesContainer = styled(motion.div)`
    background-color: gray;
    border: 1px solid black;
    width: 300px;
    height: 50px;
    margin: 10px 10px;
`;

export const ButtonHolder = styled(motion.div)`
    display: flex;
    flex-direction: Row;
`;

export const BookingLegendsMain = styled(motion.div)`
    flex-direction: column
    justify-content: center;
    align-items: center;
    gap: 40px;
    background-color: #DFD3B9;
    margin-top: 150px;
    height: auto;
    width: 100%;
`;

export const BookingLegendsContainer = styled(motion.div)`
    align-items: center;
    display: flex;
    flex-direction: Row;
    justify-content: center;
    margin: 10px 0px 20px 0px;
`;

export const BookingLegendsWhite = styled(motion.div)`
    background-color: #F2F2F2;
    width: 20px;
    height: 20px;
    border-radius: 50%
`;

export const BookingLegendsRed = styled(motion.div)`
    background-color: #FF4040;
    width: 20px;
    height: 20px;
    border-radius: 50%
`;

export const BookingLegendsGreen = styled(motion.div)`
    background-color: #90B51D;
    width: 20px;
    height: 20px;
    border-radius: 50%
`;

export const BookingLegendsBlue = styled(motion.div)`
    background-color: #008AFC;
    width: 20px;
    height: 20px;
    border-radius: 50%
`;

export const BookingLegendsDarkJade = styled(motion.div)`
    background-color: #75928E;
    width: 20px;
    height: 20px;
    border-radius: 50%
`;

export const LocationPinRed = styled(motion.div)`
    background-color: #FF4040;
    width: 20px;
    height: 30px;
    border-radius: 50% 50% 100% 100%
`;

export const LocationPinGreen = styled(motion.div)`
    background-color: #90B51D;
    width: 20px;
    height: 30px;
    border-radius: 100% 100% 100% 100%     
`;