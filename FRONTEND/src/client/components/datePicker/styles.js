import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

export const DateContainer = styled(motion.div)`
    display: flex;
    flex-flow:column;
    margin-right: 30px;
`;

export const DateLabel = styled(motion.dev)`
    display: flex;
    height: 20px;
    gap: 150px;
`;