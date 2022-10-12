import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ProfileContentContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const ProfileContent = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 40px 50px;
    gap: 30px;
`;

export const ProfileInformationContent = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 10px 100px;

`;

export const ButtonHolder = styled(motion.div)`
    display: flex;
    flex-direction: Row;
    margin-bottom: 150px;
`;