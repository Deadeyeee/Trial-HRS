import styled from "styled-components";
import { motion } from "framer-motion";
import BackgroundIMG from "../../images/FamenitiesIMG/spa.jpg";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PhotoHolder = styled(motion.div)`
    display: flex;
    background-image: url(${(props) => (props.link ? props.link : null)});
    background-size: cover;
    background-position: center;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 500px;
`;

export const TitleHolder = styled(motion.div)`
    display:flex;
    justify-content: ${(props) => (props.justifyContent ? props.justifyContent : "flex-start")};
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    z-index: 0;
    padding: 5px 0px;
`;

