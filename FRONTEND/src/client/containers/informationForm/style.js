import styled from "styled-components";
import { motion } from "framer-motion";


export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: auto;
  margin-bottom: 50px;
`;

export const ContainerForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.align ? props.align : "flex-start")};
  gap: 50px;
`;
export const ContainerFormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px 0px;
`;

export const InputContainer = styled(motion.div)`
  display:flex;
  justify-content: ${(props) => (props.justify ? props.justify : "space-evenly")};
  gap: ${(props) => (props.gap ? props.gap : "30px")};
  width: ${(props) => (props.w ? props.w : "600px")};
  @media (max-width: 1000px) {
      flex-direction: column;
      width: 95%;
      align-items: center;
      }
`;

export const GenderContainer = styled(motion.div)`
  display:flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  
`;

export const ContainerChild = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 50px;
`;


export const ContainerSummary = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  padding: 0px 0px 30px 0px;
  background-color: #DFD3B9;
  margin-top: 30px;
  box-shadow: -5px 10px 10px black;
`;


export const DeatilsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

export const BookingSummaryContainer = styled(motion.div)`
  display:${(props) => (props.display ? props.display : "flex")};
  justify-content: center;
  align-items: center;
  flex-direction:${(props) => (props.direction ? props.direction : "row")};;
  background-color: #F2F2F2;
  width: 100%;
  gap: 20px;
  padding: 0px 0px 10px 0px;
  margin: 0px 0px 20px 0px;
`;

export const LeftColumn = styled(motion.div)`
  display: flex;
  flex-direction:column;
  gap: 5px 0px;
  margin: 0px 0px 0px 30px;
`;

export const RightColumn = styled(motion.div)`
  display: flex;
  flex-direction:column;
  gap: 5px 0px;
  margin: 0px 30px 0px 0px;
`;
