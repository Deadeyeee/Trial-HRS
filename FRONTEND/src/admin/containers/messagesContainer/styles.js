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

export const TableContainer = styled(motion.table)`
  border: none;
  width: 100%;
  border-spacing: 0px 10px;
  border-collapse: collapse;
`;

export const Tr = styled(motion.tr)`
  border: none;
  border-bottom: .5px solid rgb(40, 40, 40, .2);
`;

export const Th = styled(motion.th)`
  border: none;
  color: #fff;
  text-align: ${(props) => (props.align ? props.align : "left")};
  font-family: Arial, Helvetica, sans-serif;
  width: 250px;
  background-color: #2f2f2f;
  padding: 20px 0px;
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
  height: 4px;
  white-space: nowrap;
  
`;