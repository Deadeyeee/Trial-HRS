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

export const HeadContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 94%;
  background-color: #2e2e2e;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px gray;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const HeadContainerSmall = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #2e2e2e;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px gray;
  margin-top: 5px;
  margin-bottom: 20px;
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


export const TabContainer = styled(motion.td)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: left;
  
`;

export const BlackTab = styled(motion.td)`
  background-color: #000000;
  width: 250px;
  height: 50px;
  border-radius: 0.5em;
`;

export const GrayTab = styled(motion.td)`
  background-color: #4F4F4F;
  width: 250px;
  height: 50px;
  border-radius: 0.5em;

`;
export const ContainerGlobalColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0px 50px;
  

`; 

export const ContainerGlobalRow = styled(motion.div)`
  display: flex;
  flex-direction: row;
`; 