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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    gap: 40px;
`;

export const RoomContainer = styled(motion.div)`
    display: flex;
    flex-direction: Row;
    margin: 40px;
    justify-content: center;
    align-items: flex-start;
    gap: 60px;
    
`;

export const RoomContainerContentPhoto = styled(motion.div)`
    
    background-image: url(${(props) => (props.link ? props.link : null)});
    background-size: cover;
    background-position: center;
    width: ${(props) => (props.w ? props.w : "550px")};
    height: ${(props) => (props.h ? props.h : "300px")};
    cursor: ${(props) => (props.cursor ? props.cursor : "auto")};
    border: ${(props) => (props.border ? props.border : "none")};
`;

export const Services = styled(motion.div)`
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    width: 90px;
    gap: 10px;
    height: 50px;

`;

export const RoomContainerContentRight = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 60px 0px;
`;

export const RoomContainerContentLeft = styled(motion.div)`
    display: Flex;
    flex-direction: column;
`;

export const RatingContainer = styled(motion.div)`
    display:flex;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    height: 20px;
    margin: 10px 0px 0px 60px;
`;

export const ServicesContainer = styled(motion.div)`
    width: 400px;
    height: auto;
    display:flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
`;

export const ButtonHolder = styled(motion.div)`
    display: flex;
    flex-direction: Row;
`;

export const ContentContainerHolder = styled(motion.div)`
    display: flex;
    width: 600px;
`;

export const RoomPicture = styled.img`
    width: 100%;
    height: auto;
`;