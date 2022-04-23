import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
`;

export const FlexboxContainer = styled(motion.div)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 65%;
    overflow: hidden;
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    gap: 10px;
    
`;

export const TableContainer = styled(motion.table)`
  border: none;
  width: 98%;
  margin: 10px auto;
    border: ${(props) => (props.border ? props.border : "none")};
`;

export const Tr = styled(motion.tr)`
  border: none;
`;

export const Th = styled(motion.th)`
  border: none;
  background-color: #323232;
  color: #FFFFFF;
  text-align: ${(props) => (props.align ? props.align : "center")};
  font-family: Arial, Helvetica, sans-serif;
  width: 250px;
  padding: 20px 0px;
`;

export const Td = styled(motion.td)`
  border: none;
  text-align: ${(props) => (props.align ? props.align : "left")};
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #605f5f;
  padding: 20px 0px;
`;

export const TabContainer = styled(motion.td)`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  justify-content: flex-start;
  align-items: left;
  width: ${(props) => (props.w ? props.w : "99%")};
    
  border: ${(props) => (props.border ? props.border : "none")};
  
`;
export const BrownTab = styled(motion.td)`
  background-color: #DFD3B9;
  width: 100%;
  height: 20px;
  margin-top: 10px;
`;

export const HeadContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #2e2e2e;
  margin-top: 0px;
  margin-bottom: 0px;
`;
