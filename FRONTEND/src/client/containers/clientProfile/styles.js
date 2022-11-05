import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        align-items: center;
        display: flex; 
       
      }
`;

export const ProfileContentContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        align-items: center;
      }
`;

export const ProfileContent = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 40px 50px;
    gap: 30px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
      }
`;

export const ProfileInformationContent = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 10px 100px;

    @media (max-width: 1000px) {
        width: 90%;
        height: 100%;
        
      }

`;

export const ButtonHolder = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    align-items: center;
    width: 100%

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
       
      }
`;