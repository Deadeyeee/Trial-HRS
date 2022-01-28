import React from 'react';
import Background from '../../../components/background/Background';
import { Container, NameContainer, RegisterBorder } from './style';
import {Title} from '../../../components/title/styles'
import {TextInput} from '../../../components/textBox/style'
import { Button } from '../../../components/button/styles';

export const Register = () => {
  
  const variants = {
    visible: { opacity: 1},
    hidden: {opacity: -0.2},
  }
  return(
    <div><Container>
      <RegisterBorder
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{  duration: 1.5}}
      >
        <Title
        margin="20px 0px 20px 0px"
        size="32px"
        weight="normal"
        >Create your account</Title>
        <NameContainer>
        <TextInput
        placeholder="FirstName"
        type="text"
        widthFocus="0px"
        w='50%'
        margins="15px 5px"
        border="0 0 1px"
        padding="5px 10px"
        radiusFocus="0px"
        required></TextInput>
        <TextInput
        placeholder="LastName"
        type="text"
        widthFocus="0px"
        w='50%'
        margins="15px 5px"
        border="0 0 1px"
        padding="5px 10px"
        radiusFocus="0px"
        required></TextInput>
        </NameContainer>
        <TextInput
        placeholder="Username"
        type="text"
        widthFocus="0px"
        margins="15px 0px"
        border="0 0 1px"
        padding="5px 10px"
        radiusFocus="0px"
        required></TextInput>
        <TextInput
        placeholder="Email"
        type="email"
        widthFocus="0px"
        padding="5px 10px"
        margins="15px 0px"
        radiusFocus="0px"
        border="0 0 1px"
        required></TextInput>
        <TextInput
        placeholder="Password"
        type="password"
        padding="5px 10px"
        widthFocus="0px"
        margins="15px 0px"
        radiusFocus="0px"
        border="0 0 1px"
        required></TextInput>
        <TextInput
        placeholder="Confirm Password"
        type="password"
        widthFocus="0px"
        margins="15px 0px"
        border="0 0 1px"
        padding="5px 10px"
        radiusFocus="0px"
        required></TextInput>
        <Button
          display="none"
          ></Button>
        <Button
          whileHover={{ scale: 1.1, backgroundColor: "#8F805F",color: "rgb(255, 255, 255)" }}
          whileTap={{ scale: 1.05}}
          w='290px' 
          h='30px'
          margin='10px 0 0 0'
          textcolor='white'
          radius='5px'
          weight='bold'
          bg="green"
          border='none'
          radius='50px'
          padding = '5px 5px'
          >Creat account</Button>

          <Title
          size="10px"
          margin="20px 0px 10px 0px"
          >OR</Title>

          <Button
          whileHover={{ scale: 1.2, color: "rgb(0,0,255)" }}
          whileTap={{ scale: 1, color: "rgb(220,220,220)"}}
          w='60px' 
          h='30px'
          textcolor='black'
          radius='5px'
          weight='bold'
          border='none'
          href='/login'
          >Log in</Button>
      </RegisterBorder>
      <Background></Background>
    </Container>
    </div>
  );
};


export default Register;