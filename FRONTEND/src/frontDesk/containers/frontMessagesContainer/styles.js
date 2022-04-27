import styled from "styled-components";
import { motion } from "framer-motion";


export const Container = styled(motion.div)`
    display: flex;
	  height: 100vh;
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