import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PhotoHolder = styled(motion.div)`
    display: flex;
    background-color: gray;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 383px;
`;

export const TitleHolder = styled(motion.div)`
    display:flex;
    justify-content: ${(props) => (props.justifyContent ? props.justifyContent : "flex-start")};
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%
    height: 10%;
    z-index: 0;
`;

