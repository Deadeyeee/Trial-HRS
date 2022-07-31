import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    z-index: 1;
    gap: 2vw;
`;

export const DateContainer = styled(motion.div)`
    display: flex;
    flex-flow:column;
    margin-right: 30px;
`;

export const DateLabel = styled(motion.div)`
    display: flex;
    flex-flow:column;
    gap: 1vh;
`;