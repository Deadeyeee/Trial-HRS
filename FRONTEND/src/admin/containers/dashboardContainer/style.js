import styled from "styled-components";
import { motion } from "framer-motion";


export const Container = styled(motion.div)`
    display: flex;
	  height: 100%;
    width: 100%;
    position: relative;
    flex-direction: column;
    
    align-items: center;
    overflow-y: auto;
`;

export const SummaryContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 94%;
  padding: 20px 0px;
  border-radius: .5rem;
`;

export const SummaryPlate = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  width: 365px;
  align-items: center;
  background-color: white;
  border-radius: .5rem;
  /* cursor: pointer; */
  overflow: hidden;
`;

export const HeadContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 94%;
  background-color: #2e2e2e;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px gray;
  margin-top: 10px;
`;

export const SummaryIcon = styled(motion.div)`
display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 100%;
  background-color: ${(props) => (props.bg ? props.bg : "none")};
  
`;

export const SummaryDescription = styled(motion.div)`
display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 10px 0px;
  gap: 10px;
`;

export const TableContainer = styled(motion.table)`
  border: none;
  width: 100%;
`;

export const Tr = styled(motion.tr)`
  border: none;
`;

export const Th = styled(motion.th)`
  border: none;
  color: #b2b2b2;
  text-align: ${(props) => (props.align ? props.align : "left")};
  font-family: Arial, Helvetica, sans-serif;
  width: 250px;
`;
export const Td = styled(motion.td)`
  border: none;
  text-align: ${(props) => (props.align ? props.align : "left")};
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #605f5f;
  padding-top: 20px;
`;