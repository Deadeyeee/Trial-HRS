import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const HorizontalLine = styled(motion.div)`
    background-color: black;
    width: 500px;
    height: 1.5px;
    margin: 30px 0px 10px 0px;
`;

export const BankDetailsContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const BankTitleContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 40px; 100px;
`;

export const BankContentContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 40px; 100px;
`;

export const GeneratedAccountContainer = styled(motion.div)`
    display: flex;
    flex-direction: column; 
    border: 3px solid #FF4040;
    width: 1000px;
`;

export const GeneratedAccountContentContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
`;

export const GeneratedAccountContents = styled(motion.div)`
    display: flex;
    flex-direction: column;
`;

export const ReservationInformationContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ReservationInformationContentsContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 90px; 100px;
`;

export const ChargeSummaryContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ChargeSummaryContentContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 30px; 100px;
`;

export const BrokenHorizontalLine =styled(motion.div)`
    border-top: 2px dashed #CEA692;
    width: 60%;

`;

export const ButtonHolder = styled(motion.div)`
    display: flex;
    flex-direction: Row;
    margin-bottom: 150px;
`;