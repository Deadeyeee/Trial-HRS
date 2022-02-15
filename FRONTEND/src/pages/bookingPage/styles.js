import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HorizontalLine = styled(motion.div)`
    background-color: black;
    height: 1px;
    width: 40%;
    margin: 20px 0px; 
    align: center;
`;



export const CalendarContainer = styled(motion.div)`
    
    align-items: center;
`

export const TitleCalendarContainer = styled(motion.div)`
    
`