import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FlexboxContainer = styled(motion.div)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    display: flex;
    margin-bottom: 100px;
`;

export const FlexboxContentMain = styled(motion.div)`
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
    width: auto;
    gap: 40px;
`;

export const FlexboxMainPhotoLeft = styled(motion.div)`
    width: 500px;
    height: 300px;
    background-image: url(${(props) => (props.link ? props.link : null)});
    background-size: cover;
    background-position: center;
`;

export const FlexboxContent = styled(motion.div)`
    display: flex;
    flex-direction: column;
`;

export const HorizontalLine = styled(motion.div)`
    background-color: black;
    height: 1px;
    width:${(props) => (props.w ? props.w : "20%")};
    margin: 10px 0px 90px 0; 
    align: center;
`;

export const Description = styled.p`
    width: 780px;
    text-align: ${(props) => (props.align ? props.align : "left")};
    color: ${(props) => (props.color ? props.color : "#8f805f")};
    line-height: 29px;
`;