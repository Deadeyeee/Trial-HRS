import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-width: 100%;
    align-items: center;
    justify-content: center;
`;


export const ContentContainer = styled(motion.div)`
  display: flex;
    flex-direction: column;
    justify-content: center;
  width: 1200px;
  margin: 30px 0px;
  box-shadow: 2px 0px 10px gray;
  background-color: white;
  height: auto;
`;