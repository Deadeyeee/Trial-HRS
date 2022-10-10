import styled from "styled-components";
import { motion } from "framer-motion";


export const Container = styled(motion.div)`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    padding: 0px 10px;
    margin: 50px 0px;
`;

export const FlexboxContainer = styled(motion.div)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    overflow: hidden;
    background-color: #DFD3B9;
    display: flex;
    margin-top: 50px;
    padding: 50px 30px;
    gap: 30px;
    
    
`;

export const FlexboxContentMain = styled(motion.div)`
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    
    gap: 10px;
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

export const TabContainer = styled(motion.td)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: left;
  
`;
export const BrownTab = styled(motion.td)`
  background-color: #DFD3B9;
  width: 100%;
  height: 20px;
  margin-top: 10px;
 
`;