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
      }
`;

export const FlexboxContainer = styled(motion.div)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    display: flex;
    margin-bottom: 100px;

    @media (max-width: 1000px) {
        width: 95%;
        height: 100%;
        align-items: center;
      }
`;

export const FlexboxContentMain = styled(motion.div)`
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 40px;

    @media (max-width: 1000px) {
        width: 95%;
        height: 100%;
        align-items: center;
        display: flex;
        flex-direction: column;
      }
`;

export const FlexboxMainPhotoLeft = styled(motion.div)`
    width: 500px;
    height: 300px;
    background-image: url(${(props) => (props.link ? props.link : null)});
    background-size: cover;
    background-position: center;
    
    @media (max-width: 1000px) {
        width: 95%;
        height: 100%;
        align-items: center;
      }
`;

export const FlexboxContent = styled(motion.div)`
    display: flex;
    flex-direction: column;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        align-items: center;
      }
`;

export const HorizontalLine = styled(motion.div)`
    background-color: black;
    height: 1px;
    width:${(props) => (props.w ? props.w : "20%")};
    margin: 10px 0px 90px 0; 
    align: center;

    @media (max-width: 1000px) {
        width: 95%;
        height: 100%;
        margin: 10px 0px 30px 0;
        align-items: center;
      }
`;

export const Description = styled.p`
    width: 780px;
    text-align: ${(props) => (props.align ? props.align : "left")};
    color: ${(props) => (props.color ? props.color : "#8f805f")};
    line-height: 29px;

    @media (max-width: 1000px) {
        width: 95%;
        height: 100%;
        align-items: center;
      }
`;

export const PhotoMain = styled.p`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center; 

      @media (max-width: 1000px) {
        width: 95%;
        height: 100%;
        align-items: center;
      }


`