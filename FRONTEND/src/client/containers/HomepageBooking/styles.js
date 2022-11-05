import styled from "styled-components";
import { motion } from "framer-motion";
import BackgroundIMG from "../../images/backgroundImages/bg2.JPG";
import F2 from '../../images/FamenitiesIMG/f2.jpg'
import R1 from '../../images/FamenitiesIMG/r1.png'
import L1 from '../../images/FamenitiesIMG/l1.JPG'

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

@media (max-width: 1000px) {
  width: 100%;
  height: 100%;
  align-items: center;
}
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
  background-color: white;
  height: 2px;
  margin: 10%;
`;
export const FlexItems = styled(motion.div)`
  display: flex;
  width: 55%;
  flex-direction: column;
  height: auto;
  justify-content: center;
  margin: 50px 0px 80px 0px;
  gap: 30px;
  align-items: center;
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
    width: auto;
    height: auto;
    margin: 0px 0px 30px 0px;
    padding-left: 60%;
    
    
    box-shadow: -3px 3px 10px black;

    background-image: url(${F2});
    opacity: 100%;
    background-size: cover;
    background-position: center;
    


    @media (max-width: 1000px) {
      width: 190px;
      height: 100%;
    }
  }
`;



export const AlterPoster = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    margin: 0px 0px 30px 0px;
    padding-right: 60%;
    
    
    box-shadow: -3px 3px 10px black;

    background-image: url(${R1});
    background-size: cover;
    background-position: center;


    @media (max-width: 1000px) {
      width: 190px;
      height: 100%;
    }
`;

export const OtherPoster = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    margin: 0px 0px 30px 0px;
    padding-left: 60%;
    
    
    box-shadow: -3px 3px 10px black;

    background-image: url(${L1});
    background-size: cover;
    background-position: center;


    @media (max-width: 1000px) {
      width: 190px;
      height: 100%;
    }
  }
`;

export const ContentDiv = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    overflow: hidden;
    background-color: #00000099;
    padding: 20px;

    @media (max-width: 1000px) {
      width: 190px;
      height: 100%;
    }
  }
`;

export const ContentDivMain = styled(motion.div)`
    display: flex;
    flex-direction: row-reverse;
    align-items: right;
    height: auto;
`;

export const AccordionTitle = styled(motion.div)`
    min-height: 70%;
    width: 70%;
    margin: 0 auto 90px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Faq = styled(motion.div)`
    width: 65vw;
    height: auto;
    margin-top: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ffffff;
    cursor: pointer;
`;

export const Question = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
`;

export const Answer = styled(motion.div)`
    max-height: 0;
    margin: 10px 0px 15px 0px;
    display: flex;
    justify-content: flex-start;

`;

