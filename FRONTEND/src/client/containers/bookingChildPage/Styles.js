import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        align-items: center;
        display: flex;
        flex-direction: column
      }

`;

export const RoomContainerMain = styled(motion.div)`
    display: flex;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    gap: 40px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        align-items: center;
      }
`;

export const RoomContainer = styled(motion.div)`
    display: flex;
    flex-direction: Row;
    margin: 40px;
    justify-content: center;
    align-items: flex-start;
    gap: 60px;

    @media (max-width: 1000px) {
        width: 80%;
        height: 100%;
        align-items: center;
        display: flex;
        flex-direction: column;

      }
    
`;

export const RoomContainerContentPhoto = styled(motion.div)`
    
    background-image: url(${(props) => (props.link ? props.link : null)});
    background-size: cover;
    background-position: center;
    width: ${(props) => (props.w ? props.w : "550px")};
    height: ${(props) => (props.h ? props.h : "300px")};
    cursor: ${(props) => (props.cursor ? props.cursor : "auto")};
    border: ${(props) => (props.border ? props.border : "none")};

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        align-items: center;
      }
`;

export const Services = styled(motion.div)`
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    width: 90px;
    gap: 10px;
    height: 50px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        align-items: center;
      }

`;

export const RoomContainerContentRight = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 60px 0px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        align-items: center;
      }
`;

export const RoomContainerContentLeft = styled(motion.div)`
    display: Flex;
    flex-direction: column;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        align-items: center;
      }
`;

export const RatingContainer = styled(motion.div)`
    display:flex;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    height: 20px;
    margin: 10px 0px 0px 60px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        align-items: center;
      }
`;

export const ServicesContainer = styled(motion.div)`
    width: 400px;
    height: auto;
    display:flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        display:flex;
        flex-direction: row;
        align-items: center;
      }
`;

export const ButtonHolder = styled(motion.div)`
    display: flex;
    flex-direction: Row;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        align-items: center;
      }
`;

export const ContentContainerHolder = styled(motion.div)`
    display: flex;
    width: 600px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        align-items: center;
      }
`;

export const RoomPicture = styled.img`
    width: 100%;
    height: auto;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        align-items: center;
      }
`;