import styled from "styled-components";
import { motion } from "framer-motion";


export const Container = styled(motion.div)`
    display: flex;
    position: fixed;
    flex-direction: column;
    height: 100%;
    min-height: 100%;
    gap: 10px;
    padding: 0px 1rem;
    width: 15%;
    background-color: #2E2E2E;
    z-index: 2;
`;

export const ContainerInvisible = styled(motion.div)`
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-height: 100%;
    gap: 10px;
    padding: 0px 1rem;
    width: 18%;
    opacity: 0;
    background-color: pink;
`;

export const ProfileContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  margin: 50px 0px 20px 0px;
  gap: 5px;
`;

export const Image = styled(motion.img)`
    width: 50px;
    height: 50px;
    margin-right: 2px;
    background-color: white;
    border-radius: 0.5rem;
`;

export const DescriptionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;


export const MenuContainer = styled(motion.a)`
  display: flex;
  align-items: center;
  width: auto;
  gap: 3px;
  padding: 10px 0px 10px 10px;
  border-radius: 0.5rem;
  background-color: ${props => props.active ? "rgb(191, 170, 126, 0.7)" : "none"};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  &:hover {
    background-color: ${(props) => (props.hbg ? props.hbg : "rgb(186, 242, 233, .1)")};;
  }
`;


export const Logout = styled(motion.a)`
  display: flex;
  align-items: center;
  width: auto;
  gap: 3px;
  padding: 10px 0px 10px 10px;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.bg ? props.bg : "none")};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  &:hover {
    background-color: ${(props) => (props.hbg ? props.hbg : "rgb(186, 242, 233, .1)")};;
  }
`;


