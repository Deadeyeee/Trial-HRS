import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
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
    margin: 40px;
    
`;

export const RoomContainerContentPhoto = styled(motion.div)`
    background-color: gray;
    border: 1px solid black;
    width: 550px;
    height: 300px;
    margin 40px 60px 0px 0px;
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
    margin: 10px 60px;
`;

export const ServicesContainer = styled(motion.div)`
    background-color: gray;
    border: 1px solid black;
    width: 300px;
    height: 50px;
    margin: 10px 0px 0px 50px;
`;

export const ButtonHolder = styled(motion.div)`
    display: flex;
    flex-direction: Row;
`;

export const ContentContainerHolder = styled(motion.div)`
    display: flex;
    flex-direction: Row;
    width: 600px;
    margin: 10px 0px 0px 0px;
`;