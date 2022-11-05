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
      }
`;

export const HorizontalLine = styled(motion.div)`
    background-color: black;
    width: 80%;
    height: 1.5px;
    margin: 30px 0px 10px 0px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
       
      }
`;

export const BankDetailsContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        
      }
`;

export const BankTitleContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 40px; 
    width: ${(props) => (props.w ? props.w : "100%")};
    gap: 40px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        align-items: center;
      }
`;

export const BankContentContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 40px;
`;

export const GeneratedAccountContainer = styled(motion.div)`
    display: flex;
    flex-direction: column; 
    border: 3px solid #FF4040;
    width: 80%;
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
    justify-content: center;
    width: ${(props) => (props.w ? props.w : "100%")};
`;

export const ReservationInformationContentsContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 90px;
    gap: 10px;
    width: 90%;
`;

export const ChargeSummaryContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
      }
`;

export const ChargeSummaryContentContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 30px;
    gap: 10px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
      }
`;

export const BrokenHorizontalLine =styled(motion.div)`
    border-top: 2px dashed #CEA692;
    width: 87%;
    margin-top: 20px;
`;

export const ButtonHolder = styled(motion.div)`
    display: flex;
    flex-direction: Row;
    margin-bottom: 150px;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    width: 30%;

    @media (max-width: 1000px) {
        width: 50%;
        height: 100%;
        align-items: center;
      }
`;

export const TableContainer = styled(motion.table)`
  border: none;
  width: 100%;
  margin: 0px 10px;
  
`;


export const Tr = styled(motion.tr)`
  border: none;
  padding: 0px 10px;
  background-color: #F2F2F2;
  padding: 30px 0px;
  
`;

export const Th = styled(motion.th)`
  border: none;
  background-color: ${(props) => (props.bg ? props.bg : "#323232")};
  color: ${(props) => (props.color ? props.color : "#FFFFFF")};
  text-align: ${(props) => (props.align ? props.align : "center")};
  font-family: Arial, Helvetica, sans-serif;
  width: 250px;
  padding: 30px 0px;
`;
export const Td = styled(motion.td)`
  border: none;
  text-align: ${(props) => (props.align ? props.align : "left")};
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  color: #605f5f;
  padding: 15px 0px;
`;