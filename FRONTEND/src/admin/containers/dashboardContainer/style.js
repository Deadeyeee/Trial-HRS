import styled from "styled-components";
import { motion } from "framer-motion";


export const Container = styled(motion.div)`
    display: flex;
	  height: 100%;
    width: 100%;
    position: relative;
    flex-direction: column;
    padding: 10px;
    gap: 20px;
    
`;

export const SummaryContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgb(153, 105, 10, .1);
  padding: 20px 0px;
  border-radius: .5rem;
  gap: 50px;
`;


export const SummaryPlate = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  width: 300px;
  align-items: center;
  background-color: white;
  border-radius: .5rem;
  box-shadow: 2px 3px 5px gray;
  overflow: hidden;
`;

export const HeadContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px gray;
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