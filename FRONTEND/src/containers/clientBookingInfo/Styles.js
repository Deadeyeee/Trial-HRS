import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const BookingContentContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const BookingContent = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 40px 50px;

`;

export const ButtonHolder = styled(motion.div)`
    display: flex;
    flex-direction: Row;
    margin-bottom: 150px;
`;