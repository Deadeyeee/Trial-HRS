import React, { useState, useEffect, useRef } from 'react';
import Background from '../../../components/background/Background';
import { Container, NameContainer, RegisterBorder, RegistrationForm, Logo } from './style';
import { Title } from '../../../components/title/styles'
import { TextInput } from '../../../components/textBox/style'
import { Button, FormButton } from '../../../components/button/styles';
import Axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import { apiKey } from '../../../../apiKey';
import { ContainerForm, ContainerFormContent, InputContainer } from '../../../containers/informationForm/style';
import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { nationalities } from '../../../../nationalities';
import { CheckCircleOutline, Close, HighlightOffSharp } from '@mui/icons-material';
import logo from '../../../images/logo.png';
import { Box, CircularProgress, Grow, Modal } from '@mui/material';


import { IconButton } from '@mui/material';
export const Register = () => {



  let passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\| ])[A-Za-z\d -._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]{8,}/;
  let letters = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  let phoneNumberValidation = /^(09|\+639)\d{9}$/;
  let userNameValidation = /^\S*$/;
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Please wait...')
  const [status, setStatus] = useState('loading')

  const handleOpenIsLoading = () => {
    setIsLoading(true);
    setStatus('loading')
    setLoadingMessage('Please wait...')
  }

  const handleCloseIsLoading = (status, link) => {

    if (status == 1 || status === undefined) {
      setStatus('loading')
      setLoadingMessage('')
    }
    else if (status == 2) {
      setStatus('success')
      setLoadingMessage('')
    }
    else if (status == 3) {
      setStatus('failed')
      setLoadingMessage('Sorry, Something went wrong.')
    }

    setTimeout(() => {
      setIsLoading(false);
      console.log(link)
      if (link !== undefined) {
        window.location = link;
      }
    }, 1000)
  }

  const loadingStatus = (value) => {
    if (value == 'loading') {
      return <CircularProgress></CircularProgress>;
    }
    else if (value == 'success') {
      return <Grow in={true}><CheckCircleOutline style={{ color: 'green', fontSize: '80px' }} /></Grow>;
    }
    else if (value == 'failed') {
      return <Grow in={true}><HighlightOffSharp style={{ color: 'red', fontSize: '80px' }} /></Grow>;
    }
  }




  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthDay] = useState(new Date(Date.parse(new Date()) - 568025136000));
  const [gender, setGender] = useState('male');
  const [address, setAddress] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState('Filipino');



  const emailRef = useRef();
  const contactNumberRef = useRef();
  const userNameRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [contactNumberError, setContactNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [genderError, setGenderError] = useState('male');
  const [addressError, setAddressError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  let formatNumber;

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: -0.2 },
  }

  useEffect(() => {
    Axios.get(apiKey + "auth/verify-token").then((response) => {
      if (response.status === 200) {
        window.location.href = '/';
      }
    });
  }, []);


  useEffect(() => {
    Axios.get(apiKey + 'api/getAllUsers').then((res) => {
      if (res.data.length != 0) {
        res.data.map((item) => {
          if (item.role != 'NON-USER') {

            let formatNumber;
            if (contactNumber.slice(0, 3) == "+63") {

              formatNumber = contactNumber.replace("+63", "0");

            }
            else {
              formatNumber = contactNumber;
            }


            if (item.email.toLowerCase() == email.toLowerCase()) {
              setEmailError("This email is already taken.")
            }
            else if (item.contactNumber == formatNumber) {
              setContactNumberError("This number is already taken.")

            }
            else if (item.userName.toLowerCase() == userName.toLowerCase()) {
              setUserNameError("This userName is already taken.")

            }
          }

        })
      }
    }).catch((err) => {

    });
  }, [userName, email, contactNumber, password])








  const createGuestInformation = (e) => {
    e.preventDefault();
    if (contactNumber.slice(0, 3) == "+63") {

      formatNumber = contactNumber.replace("+63", "0");

    }
    else {
      formatNumber = contactNumber;
    }

    if (firstNameError.length != 0) {
      firstNameRef.current.focus()
    }
    else if (lastNameError.length != 0) {
      lastNameRef.current.focus()

    }
    else if (contactNumberError.length != 0) {
      contactNumberRef.current.focus()

    }
    else if (userNameError.length != 0) {
      userNameRef.current.focus()
    }
    else {
      handleOpenIsLoading()
      Axios.get(apiKey + 'api/getAllUsers').then((res) => {
        if (emailError.length == 0 && contactNumberError.length == 0 && userNameError.length == 0) {
          Axios.post(apiKey + 'api/addUser', {
            userName: userName,
            contactNumber: formatNumber,
            email: email,
            password: password,
          }).then((user) => {
            console.log(user.data);
            Axios.post(apiKey + 'api/addGuest', {
              firstName: firstName,
              lastName: lastName,
              birthDate: birthday,
              gender: gender,
              address: address,
              nationality: nationality,
              user_id: user.data.account.id,
            }).then((guest) => {
              console.log(guest.data);
              window.location.href = '/registered/' + guest.data.new_guest.id;
              handleCloseIsLoading(2)

            }).catch((err) => {
              Axios.delete(apiKey + 'api/deleteUser/' + user.data.account.id).then((result) => {
                handleCloseIsLoading(3)
                console.log(result)
              }).catch((err) => {
                handleCloseIsLoading(3)
                console.log(err)
              });
            });
          }).catch((err) => {
            handleCloseIsLoading(3)
            console.log(err)
          });
        }
        else {
          handleCloseIsLoading(3)
        }


      }).catch((err) => {
        handleCloseIsLoading(3)
        console.log(err)
      })
    }
    // Axios.post(apiKey+'api/addUser', {
    //     userName: userName,
    //     contactNumber: contactNumber,
    //     email: email,
    //     password: password,
    // }).then((res)=>{
    //     console.log(res.data);
    //     Axios.post(apiKey+'api/addGuest', {

    //     })
    // }).catch((err)=>{
    //     console.log(err.res);
    // })

  }



  return (

    <Container>


      <Modal
        open={isLoading}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none'
        }}>
        <Box
          component='form'
          style={{
            height: '300px',
            width: '400px',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            overflowY: 'overlay',
            overflowX: 'hidden',
            borderRadius: '.5rem',
            position: 'relative',
            border: 'none'
            // margin: '50px 0px',

          }}>
          <div style={{ margin: '10px', display: 'flex', width: '400px', height: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <img src={logo} width="35%"></img>
            {loadingStatus(status)}
            <h1 style={{ fontWeight: 'normal', margin: '0px' }}>{loadingMessage}</h1>
          </div>
        </Box>
      </Modal>









      <RegisterBorder
        initial="hidden"
        style={{ width: 'auto' }}
        animate="visible"
        variants={variants}
        transition={{ duration: 1.5 }}
      >

        <div style={{ width: '100%' }} onClick={() => window.location.href = '/login'}>
          <IconButton style={{ float: 'right' }}>
            <Close />
          </IconButton>
        </div>

        <Title
          margin="0px 0px 20px 0px"
          margin1000="0px 0px 20px 0px"
          size="4vh"
          weight="normal"
        >Create your account</Title>

        <ContainerForm
          style={{ gap: '10px' }}
          onSubmit={createGuestInformation}>
          <ContainerFormContent

            style={{ gap: '10px' }}
          >

            <InputContainer>
              <TextField
                className='inputRegister'
                error={firstNameError.length != 0 ? true : false}
                helperText={firstNameError.length != 0 ? firstNameError : ""}
                placeholder='First Name'
                label="First Name"
                inputRef={firstNameRef}
                variant="outlined"
                value={firstName}

                inputProps={{ maxLength: 80 }}
                onChange={(e) => {
                  setFirstName(e.target.value)
                  if (!letters.test(e.target.value) && e.target.value.length != 0) {
                    setFirstNameError("Invalid first name. Please type letters only.")
                  }
                  else {
                    setFirstNameError("")
                  }
                }}
                // className='inputRegister'
                required />

              <TextField
                error={lastNameError.length != 0 ? true : false}
                helperText={lastNameError.length != 0 ? lastNameError : ""}
                placeholder='Last Name'
                label="Last Name"
                variant="outlined"
                inputRef={lastNameRef}
                value={lastName}
                inputProps={{ maxLength: 80 }}
                onChange={(e) => {
                  setLastName(e.target.value)
                  if (!letters.test(e.target.value) && e.target.value.length != 0) {
                    setLastNameError("Invalid last name. Please type letters only.")
                  }
                  else {
                    setLastNameError("")
                  }

                }}
                className='inputRegister'
                required />
            </InputContainer>


            <InputContainer>
              <TextField
                error={emailError.length != 0 ? true : false}
                helperText={emailError.length != 0 ? emailError : ""}
                placeholder='Email'
                label="Email"
                variant="outlined"
                type='email'
                inputProps={{ maxLength: 254 }}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)

                  setEmailError("")
                }}
                className='inputRegister'
                inputRef={emailRef}
                required />

              <TextField
                error={contactNumberError.length != 0 ? true : false}
                helperText={contactNumberError.length != 0 ? contactNumberError : "ex. 09123456789 or +639123456789"}
                placeholder='Contact Number e.g. 09123456789 or +639123456789'
                label="Contact Number"
                variant="outlined"
                value={contactNumber}
                onChange={(e) => {
                  setContactNumber(e.target.value)

                  if (!phoneNumberValidation.test(e.target.value) && e.target.value.length != 0) {
                    console.log('asda')
                    setContactNumberError("Contact number is invalid. Please provide a valid contact number.")
                  }
                  else {
                    setContactNumberError("")
                  }
                }}
                inputRef={contactNumberRef}

                inputProps={{ maxLength: 13 }}
                className='inputRegister'
                required />
            </InputContainer>


            <InputContainer>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker

                  views={['day', 'month', 'year']}
                  label="Birthday"
                  value={birthday}
                  maxDate={new Date(Date.parse(new Date()) - 568025136000)}
                  minDate={new Date(Date.parse(new Date()) - 2524556160000)}
                  onChange={(newValue) => {
                    setBirthDay(newValue);
                  }}
                  renderInput={(params) =>
                    <TextField
                      {...params}
                      variant="standard"
                      className='inputRegister'
                      style={{ margin: '5px 0px' }}
                      helperText={null}
                      required
                    />
                  }
                />

              </LocalizationProvider>

              <FormControl className='inputRegister' sx={{ margin: '5px 0px' }} size="small" variant="standard">
                <InputLabel id="demo-select-small" >Nationality</InputLabel>
                <Select
                  style={{ color: 'black', textAlign: 'left' }}
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={nationality}
                  label="Menu"
                  onChange={(event) => {
                    setNationality(event.target.value);
                  }}
                  required
                >

                  {nationalities.map(({ nationality }, index) => (
                    <MenuItem value={nationality} >{nationality}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </InputContainer>

            <InputContainer
              justify='center'>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label"
                  style={{ textAlign: 'center', }} >Gender</FormLabel>
                <RadioGroup
                  row

                  error={genderError.length != 0 ? true : false}
                  helperText={genderError.length != 0 ? genderError : ""}
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  defaultValue="male"
                  value={gender}
                  name="row-radio-buttons-group"
                  onChange={(e) => {
                    setGender(e.target.value)
                  }}
                  required
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </InputContainer>


            <InputContainer>
              <TextField
                error={addressError.length != 0 ? true : false}
                helperText={addressError.length != 0 ? addressError : ""}
                placeholder='Complete Address'
                label="Complete Address"
                variant="outlined"
                type='text'
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value)
                }}
                multiline
                rows={4}
                style={{ width: '95%', }}
                required
                inputProps={{ maxLength: 255 }}
              />

            </InputContainer>
            <InputContainer style={{
              marginTop: '20px'
            }}>
              <TextField

                error={userNameError.length != 0 ? true : false}
                helperText={userNameError.length != 0 ? userNameError : ""}
                placeholder='Username'
                label="Username"
                variant="outlined"
                inputRef={userNameRef}
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value)
                  if (!userNameValidation.test(e.target.value) && e.target.value.length != 0) {
                    console.log('asda')
                    setUserNameError("Invalid username.")
                  }
                  else {

                    setUserNameError("")
                  }
                }}

                inputProps={{ maxLength: 40 }}
                required
                className='inputRegister' />

              <TextField
                error={passwordError.length != 0 ? true : false}
                helperText={passwordError.length != 0 ? passwordError : ""}
                placeholder='Password'
                label="Password"
                type='password'
                variant="outlined"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  if (!passwordValidation.test(e.target.value) && e.target.value.length != 0) {
                    setPasswordError("Password must have a minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.")
                  }
                  else {
                    setPasswordError("")
                  }
                }}
                className='inputRegister'
                required
              />
            </InputContainer>






            <FormButton
              whileHover={{ scale: 1.1, color: "rgb(255, 255, 255)" }}
              whileTap={{ scale: 1.05, backgroundColor: "#8F805F" }}
              w='290px'
              h='30px'
              margin='10px 0 0 0'
              textcolor='white'
              radius='5px'
              weight='bold'
              bg="green"
              border='none'
              type='submit'
              padding='5px 5px'
              value="Create account"
            >


            </FormButton>

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

          </ContainerFormContent>



        </ContainerForm>
      </RegisterBorder>
      <Background></Background>
    </Container>
  );
};


export default Register;