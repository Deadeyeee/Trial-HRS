import styled from "styled-components";
import { motion } from "framer-motion";
import BackgroundIMG from "../../images/FamenitiesIMG/spa.jpg";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        align-items: center;
      }
`;

export const PhotoHolderMain = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;


    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        align-items: center;
      }
`;


export const PhotoHolder = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 575px;

     @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        align-items: center;
      }
`;

export const TitleHolder = styled(motion.div)`
    display:flex;
    justify-content: ${(props) => (props.justifyContent ? props.justifyContent : "flex-start")};
    background-color: rgba(0, 0, 0, 1.0);
    width: 100%;
    z-index: 0;
    padding: 5px 0px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        display: flex;  
        align-items: center;
      }
`;

