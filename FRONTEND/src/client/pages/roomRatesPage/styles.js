import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;


`;

export const FlexboxContainer = styled(motion.div)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    display: flex;
    margin-bottom: 100px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
      }
    
`;

export const FlexboxContentMain = styled(motion.div)`
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
    width: auto;
    gap: 40px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
`;

export const FlexboxMainPhotoLeft = styled(motion.div)`
    width: 450px;
    height: 250px;
    margin: 20px;
    background-image: url(${(props) => (props.link ? props.link : null)});
    background-size: cover;
    background-position: center;
    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
      }
`;

export const FlexboxContent = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 300px

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
      }
`;


export const HorizontalLineShortLeft = styled(motion.div)`
    background-color: black;
    height: 0.5px;
    width: 20%;
    margin: 40px auto;
`;

export const Description = styled.p`
    width: 70%;
    text-align: ${(props) => (props.align ? props.align : "left")};
`;

export const FlexButtonPrice = styled.div`
    display: flex;
    width: auto;
    gap: 20px;
    justify-content: ${(props) => (props.justifyContent ? props.justifyContent : "flex-start")};
`
