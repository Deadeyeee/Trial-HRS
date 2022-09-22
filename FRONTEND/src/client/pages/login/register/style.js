import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    height: auto;
    justify-content: space-around;
    background-color: #2E2E2E;
    align-items: center;
    overflow: hidden;
`;

export const NameContainer = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    background-color: transparent;
    width: 100%;
    gap: 5px;
    overflow: hidden;
`;
export const RegisterBorder = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: auto;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
    position: absolute;
    z-index: 1;
    overflow: hidden;
    padding: 30px 50px 30px 50px;
    box-shadow: -5px 10px 5px black;
`;

export const RegistrationForm = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${(props) => (props.height ? props.height : "auto")};
    width: ${(props) => (props.width ? props.width : "auto")};
`;

export const Image = styled(motion.img)`
    width: 150px;
    height: 150px;
    border-radius: 30px;
`;

