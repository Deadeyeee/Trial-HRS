import React, { useState, useEffect, useRef } from 'react';
import Background from '../../../components/background/Background';
import { Container, NameContainer, RegisterBorder, RegistrationForm, Logo } from './style';
import { Title } from '../../../components/title/styles'
import { TextInput } from '../../../components/textBox/style'
import { Button, FormButton } from '../../../components/button/styles';
import Axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';

export const Register = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [creationStatusUsername, setCreationStatusUsername] = useState("");
  const [creationStatusEmail, setCreationStatusEmail] = useState("");
  const [creationStatusNumber, setCreationStatusNumber] = useState("");
  const [creationStatus, setCreationStatus] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");
  const userNameref = useRef(null); 
  const emailref = useRef(null); 
  const phoneNumber = useRef(null); 
  const passwordref = useRef(null);

  const creatAccount = (e) => {
    e.preventDefault();
    if (password == confirmPassword) {


      Axios.post('http://localhost:3001/api/addUser', {
        userName: userName.toLowerCase(),
        email: email.toLowerCase(),
        contactNumber: number,
        password: password,
      }).then((response) => {
        console.log(response.data)

        localStorage.setItem('id', response.data.account.id);
        localStorage.setItem('email', response.data.account.email);
        localStorage.setItem('userName', response.data.account.userName);
        Axios.post('http://localhost:3001/api/addGuest', {
          firstName: firstName.toLowerCase(),
          lastName: lastName.toLowerCase(),
          user_id: response.data.account.id,
        }).then((response) => {
          window.location.href = '/verifyEmail';
        }).catch((error) => {
          console.log(error.response.data)
        });
        setCreationStatus("Account created successfuly");
        console.log(response.data);


        console.log(creationStatus);
      }).catch((err) => {
        console.log(err.response.data)
        if (err.response.data == "Username already in use!") {
          setCreationStatusUsername("Username already in use!");
          setCreationStatusEmail("");
          setPasswordMatch("");
          setCreationStatus("");
          setCreationStatusNumber("");
          userNameref.current.focus();
          userNameref.current.select();
        }
        else if (err.response.data == "Email address already in use!") {
          setCreationStatusEmail("Email address already in use!");
          setCreationStatusUsername("");
          setPasswordMatch("");
          setCreationStatus("");
          setCreationStatusNumber("");
          emailref.current.focus();
          emailref.current.select();
        }
        else if (err.response.data == "Phone number already in use") {
          setCreationStatusEmail("");
          setCreationStatusUsername("");
          setCreationStatusNumber("Phone number already in use");
          setPasswordMatch("");
          setCreationStatus("");
          phoneNumber.current.focus();
          phoneNumber.current.select();
          
        }
        else {
          console.log(err.response.data);
        }
      });
    }
    else {
      setPasswordMatch("Password does not match, please try again.");
      setCreationStatusEmail("");
      setCreationStatusUsername("");
      setCreationStatusNumber("");
      setCreationStatus("");
      passwordref.current.focus();
      passwordref.current.select();
      
    }
  }
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: -0.2 },
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/auth/verify-token").then((response) => {
      if (response.status === 200) {
        window.location.href = '/';
      }
    });
  }, []);
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
              width='50%'
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
              width='50%'
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
            ref={userNameref}
            required></TextInput>
          <Title
            animate={{ scale: [1, .95, 1] }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
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
            ref={emailref}
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
              setNumber(e.target.value);
            }}
            placeholder="&#xf095;  Phone number"
            pattern="[0-9]{11}"
            title="input valid contact number"
            family="FontAwesome"
            type="number"
            ref={phoneNumber}
            widthFocus="0px"
            padding="5px 10px"
            margins="15px 0px 0px 0px"
            radiusFocus="0px"
            border="0 0 1px"
            required></TextInput>

          <Title
            size="10px"
            family="arial"
            margin="5px auto 15px 20px"
            color="gray"
            weight="normal"
          >
            e.g. 09123456789 or 9123456789
          </Title>
          <Title
            animate={{ scale: [1, .95, 1] }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
            size="12px"
            family="arial"
            margin="5px 0px 0px 0px"
            color="red"
            weight="normal"

          >{creationStatusNumber}</Title>
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
            ref={passwordref}
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
            whileHover={{ scale: 1.1, color: "rgb(255, 255, 255)" }}
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
            padding='5px 5px'
            value="Create account"
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