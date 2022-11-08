import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
      }
`;

export const BookingContentContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
      }
`;

export const BookingContent = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 40px 50px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
      }

`;

export const ButtonHolder = styled(motion.div)`
    display: flex;
    flex-direction: Row;
    margin-bottom: 150px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        margin: 0px;
      }
`;

export const StatusContainer = styled(motion.div)`
  display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0px;
    gap: 10px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        flex-direction: column;
      }
`;

export const Status = styled(motion.div)`
  height: 30px;
  width: 30px;
  background-color: ${(props) => (props.bg ? props.bg : "lime")};
  border-radius: 100px;

  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
  }
`;


export const PreviousBookingContainer = styled(motion.div)`
  display: flex;
  height: 30px;
  background-color: #5b5340;
  width: 100%;
    align-items: center;
    overflow:hidden;
    justify-content: space-evenly;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
      }
`;

export const PreviousBookingContainerContent = styled(motion.div)`
  display: flex;
  height: 30px;
  background-color: white;
  width: 100%;
    align-items: center;
    justify-content: space-evenly;
    overflow:hidden;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
      }
`;

export const ChargeSummaryContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 1000px) {
        width: 100%;
      }
`;

export const BankTitleContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 5%; 
    width: ${(props) => (props.w ? props.w : "100%")};
    gap: 5%;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        align-items: center;
        margin: 0%;
        gap: 0%;
      }
`;

export const BankContentContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 5%;
    align-items: center;

    @media (max-width: 1000px) {
        width: 100%;
        margin: 0px;
      }
`;

export const BrokenHorizontalLine =styled(motion.div)`
    border-top: 2px dashed #CEA692;
    width: 87%;
    margin-top: 20px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
      }
`;


export const ChargeSummaryContentContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 30px;
    gap: 10px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
      }
`;

export const ReservationInformationContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: ${(props) => (props.w ? props.w : "100%")};

    @media (max-width: 1000px) {
        width: 100%;
      }
`;

export const ReservationInformationContentsContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 90px;
    gap: 10px;
    width: 100%;

    @media (max-width: 1000px) {
        width: 90%;
        height: 100%;
      }
`;