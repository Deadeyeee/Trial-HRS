import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`;

export const BookingContentContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const BookingContent = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 40px 50px;

`;

export const ButtonHolder = styled(motion.div)`
    display: flex;
    flex-direction: Row;
    margin-bottom: 150px;
`;

export const StatusContainer = styled(motion.div)`
  display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0px;
    gap: 10px;
`;

export const Status = styled(motion.div)`
  height: 30px;
  width: 30px;
  background-color: ${(props) => (props.bg ? props.bg : "lime")};
  border-radius: 100px;
`;


export const PreviousBookingContainer = styled(motion.div)`
  display: flex;
  height: 30px;
  background-color: #5b5340;
  width: 100%;
    align-items: center;
    overflow:hidden;
    justify-content: space-evenly;
`;

export const PreviousBookingContainerContent = styled(motion.div)`
  display: flex;
  height: 30px;
  background-color: white;
  width: 100%;
    align-items: center;
    justify-content: space-evenly;
    overflow:hidden;
`;