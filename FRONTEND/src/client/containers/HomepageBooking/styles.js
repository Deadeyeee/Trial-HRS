import styled from "styled-components";
import { motion } from "framer-motion";
import BackgroundIMG from "../../images/backgroundImages/bg2.JPG";

export const Title = styled.h1`
font-family: 'Playfair Display', serif;
font-size: 66px;
font-weight: normal;
text-align: center;
`;


export const Container = styled(motion.div)`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
flex-flow: column;
`;

export const DatePickerContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
    gap: 35px;
    margin: 20px 0px 5vw 0px;
`;

export const WelcomeDiv = styled(motion.div)`
        display: flex;
        width: 100vw;
        height: auto;
        justify-content: flex-start;
        align-items: center;
        flex-flow: column;
        position:relative;
    &::before{
        content:'';
        width:100%;
        height:100%;
        z-index:-1;
        background-image: url(${BackgroundIMG});
        background-size: cover;
        background-position: center;
        background-color: gray;
        filter: contrast(60%) brightness(35%);
        position:absolute;
    }


`;

export const HorizontalLine = styled(motion.div)`
  width:30%;
  background-color: white;
  height: 1px;
`;

export const HorizontalLineMini = styled(motion.div)`
  width:10%;
  background-color: black;
  height: 2px;
  margin: 10%;
`;
export const FlexItems = styled(motion.div)`
  display: flex;
  width: auto;
  height: auto;
  justify-content: center;
  margin: 50px 0px 80px 0px;
  gap: 30px;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }

  

`;

export const Poster = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 320px;
    background-color: #DFD3B9;
    padding: 30px;
    box-shadow: -3px 3px 10px black;

    @media (max-width: 1000px) {
    
      width: 190px;
    height: 220px;
  }
`;

export const ContentDiv = styled(motion.div)`
    display: flex;
    flex-direction: column;
    height: 240px;
    overflow: hidden;
`;
