import styled from "styled-components";
import { motion } from "framer-motion";


export const OptionContainer = styled(motion.div)`
  display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 10px;
`;

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px 0px 50px 0px;
    
    @media (max-width: 1000px) {
        width: 90%;
        height: 98%;
      }
`;

export const MainContainer = styled(motion.div)`
    display: ${(props) => (props.display ? props.display : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 95%;
    /* background-color: #DFD3B9; */
    border: 2px solid #8B8B8B;
    height: ${(props) => (props.height ? props.height : "500px")};;
`;

export const MessagesContentContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 500px;
    width: 100%;
    gap: 10px 0px;
    overflow-y: auto;
    
`
export const Messages = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #F2F2F2;
    width: 100%;
`


export const MessagesContent = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => (props.bg ? props.bg : "#f2f2f2")};
    width: 100%;
    cursor: pointer;
`

export const MessagesTitleContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #272727;
    width: 100%;
`;

export const TableFixHead = styled(motion.div)`
  overflow-y: auto;
  height: 400px;
`;

export const TableContainer = styled(motion.table)`
  
  border: none;
  width: 100%;
  height: 200px;
  border-spacing: 0px 10px;
  border-collapse: collapse;
  table-layout:fixed;
  position: sticky;
        top: 0;
`;

export const Tr = styled(motion.tr)`
  border: none;
  border-bottom: .5px solid rgb(40, 40, 40, .2);
  
  cursor: ${(props) => (props.cursor ? props.cursor : "pointer")};
`;

export const Th = styled(motion.th)`
  border: none;
  color: #fff;
  text-align: ${(props) => (props.align ? props.align : "left")};
  font-family: Arial, Helvetica, sans-serif;
  width: 250px;
  background-color: #2f2f2f;
  padding: 20px 0px;
  position: sticky;
        top: 0;
        z-index: 1;
`;

export const Td = styled(motion.td)`
  border: none;
  text-align: ${(props) => (props.align ? props.align : "left")};
  font-family: Arial, Helvetica, sans-serif;
  font-weight: ${(props) => (props.normal ? "normal" : "bold")};
  color: #605f5f;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow: hidden;
  width: '200px';
  height: 4px;
  white-space: nowrap;
`;