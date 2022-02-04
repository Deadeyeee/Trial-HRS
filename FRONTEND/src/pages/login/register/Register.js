import React, { useState, useEffect } from 'react';
import Background from '../../../components/background/Background';
import { Container, NameContainer, RegisterBorder, RegistrationForm } from './style';
import { Title } from '../../../components/title/styles'
import { TextInput } from '../../../components/textBox/style'
import { Button, FormButton } from '../../../components/button/styles';
import Axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';

export const Register = () => {
  Axios.defaults.withCredentials = true;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [creationStatusUsername, setCreationStatusUsername] = useState("");
  const [creationStatusEmail, setCreationStatusEmail] = useState("");
  const [creationStatus, setCreationStatus] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");


  const creatAccount = (e) => {
    e.preventDefault();
    if (password == confirmPassword) {
      Axios.post('http://localhost:3001/api/addUser', {
        firstname: firstName.toLowerCase(),
        lastname: lastName.toLowerCase(),
        username: userName.toLowerCase(),
        email: email.toLowerCase(),
        password: password,
      }).then((response) => {
        if (response.data == "Username already in use!") {
          setCreationStatusUsername("Username already in use!");
          setCreationStatusEmail("");
          setPasswordMatch("")
          setCreationStatus(false)
        }
        else if (response.data == "Email address already in use!") {
          setCreationStatusEmail("Email address already in use!");
          setCreationStatusUsername("");
          setPasswordMatch("")
          setCreationStatus(false)
        }
        else {
          setCreationStatus("Account created successfuly");
        }
        console.log(creationStatus)
      });
    }
    else {
      setPasswordMatch("Password does not match, please try again.");
      setCreationStatusEmail("");
      setCreationStatusUsername("");
      setCreationStatus(false)
    }
  }
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: -0.2 },
  }


  return (
    <Container>
      <RegisterBorder
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1.5 }}
      >
        <Title
          margin="0px 0px 20px 0px"
          size="32px"
          weight="normal"
        >Create your account</Title>
        <RegistrationForm onSubmit={creatAccount}>
          <NameContainer>
            <TextInput
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="&#xf2bb;  First name"
              family="FontAwesome"
              type="text"
              widthFocus="0px"
              w='50%'
              margins="15px 5px"
              border="0 0 1px"
              padding="5px 10px"
              radiusFocus="0px"
              required></TextInput>
            <TextInput
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="&#xf2bb;  Last name"
              family="FontAwesome"
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
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="&#xf007;  Username"
            family="FontAwesome"
            type="text"
            widthFocus="0px"
            margins="15px 0px"
            border="0 0 1px"
            padding="5px 10px"
            radiusFocus="0px"
            required></TextInput>
          <Title
            
            initial="hidden"
            animate="visible"
            variants={variants}
            size="12px"
            family="arial"
            margin="5px 0px 0px 0px"
            color="red"
            weight="normal"

          >{creationStatusUsername}</Title>
          <TextInput
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="&#xf0e0;  Email"
            family="FontAwesome"
            type="email"
            widthFocus="0px"
            padding="5px 10px"
            margins="15px 0px"
            radiusFocus="0px"
            border="0 0 1px"
            required></TextInput>
          <Title
            animate={{ scale: [1, .95, 1] }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
            size="12px"
            family="arial"
            margin="5px 0px 0px 0px"
            color="red"
            weight="normal"

          >{creationStatusEmail}</Title>
          <TextInput
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="&#xf023;  Password"
            family="FontAwesome"
            type="password"
            padding="5px 10px"
            widthFocus="0px"
            margins="15px 0px"
            radiusFocus="0px"
            border="0 0 1px"
            required></TextInput>
          <TextInput
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            placeholder="&#xf023;  Confirm password"
            family="FontAwesome"
            type="password"
            widthFocus="0px"
            margins="15px 0px"
            border="0 0 1px"
            padding="5px 10px"
            radiusFocus="0px"
            required></TextInput>
          <Title
            animate={{ scale: [1, .95, 1] }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
            size="12px"
            family="arial"
            margin="5px 0px 0px 0px"
            color="red"
            weight="normal"

          >{passwordMatch}</Title>

          <Button
            display="none"
          ></Button>

          <FormButton
            whileHover={{ scale: 1.1,  color: "rgb(255, 255, 255)" }}
            whileTap={{ scale: 1.05, backgroundColor: "#8F805F" }}
            type="submit"
            w='290px'
            h='30px'
            margin='10px 0 0 0'
            textcolor='white'
            radius='5px'
            weight='bold'
            bg="green"
            border='none'
            radius='50px'
            padding='5px 5px'
            value="Creat account"
          ></FormButton>
        </RegistrationForm>

        <Title
          size="10px"
          margin="20px 0px 10px 0px"
        >OR</Title>

        <Button
          whileHover={{ scale: 1.2, color: "rgb(0,0,255)" }}
          whileTap={{ scale: 1, color: "rgb(220,220,220)" }}
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
  );
};


export default Register;