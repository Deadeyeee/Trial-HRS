import React, { useState, useEffect } from 'react'
import { Container, MainContainer, Messages, MessagesContent, MessagesContentContainer, MessagesTitleContainer, OptionContainer } from './Styles'
import { Title } from '../../components/title/styles'
import { Button as Button2 } from '../../components/button/styles'
import { ContainerGlobal, ContainerGlobal2 } from '../../../admin/components/container/container'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { FormControlLabel, FormControl, Grow } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Select from '@mui/material/Select';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import IconButton from '@mui/material/IconButton';
import Recipt from '../../images/sample_recipt.png';
const ClientMessagesCont = () => {
  const [option, setOption] = useState('inbox');


  useEffect(() => {
    console.log(option)
  })


  const [value, setValue] = useState(Date.now());
  const color = "#c44242";
  const [age, setAge] = React.useState('');


  const [value2, setValue2] = React.useState('1');

  const [show, setShow] = useState(false);
  const [showComposeMessage, setShowComposeMessage] = useState(false);

  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  const viewMessage = (

    <ContainerGlobal2
      w='100%'
      h='100%'
      radius='none'
      justify='center'
      align='center'
      bg='rgb(46, 46, 46, 0.9)'
      index='2'
      overflow='auto'
      active
    >
      <ContainerGlobal
        w='900px'
        h='700px'
        bg='white'
        direction='column'
        gap='10px'

      >
        <ContainerGlobal
          bg='#998B6D'
          radius='none'
          align='center'
          w='100%'>
          <Title
            size='20px'
            color='black'
            family='Helvetica'
            fstyle='normal'
            weight='600'
            align='left'
            margin='20px'
          >
            Reservation Confirmation
          </Title>
          <IconButton aria-label="delete" size='large' style={{ color: 'white', margin: '0px 0px 0px auto' }}

            onClick={() => setShow(prev => !prev)}
          >
            <CloseIcon />
          </IconButton>

        </ContainerGlobal>

        <ContainerGlobal
          w='95%' overflow='visible' margin='5px auto'>
          <Title
            size='16px'
            color='black'
            family='Helvetica'
            fstyle='normal'
            weight='400'
            align='left'
            margin='0px 0px 0px 0px'
          >
            <b>From:</b> FrontDesk
          </Title>
          <Title
            size='16px'
            color='black'
            family='Helvetica'
            fstyle='normal'
            weight='400'
            align='left'
            margin='0px 0px 0px auto'
          >
            04/22/21 - 12:26 PM
          </Title>
        </ContainerGlobal>
        <ContainerGlobal
          w='95%'
          h='450px'
          margin='0px 15px'
          bg='rgb(183, 183, 183,.3)'
          padding='10px'
          style={{ textAlign: 'justify' }}
          direction='column'
          overflow='auto'
        >
          Dear Pedro Juan, <br/><br/>

          We are pleased to inform you that your RESERVATION [091234568] is confirmed.<br/><br/>

          Your check-in : 04/26/2022<br/>
          Your checkout : 04/27/2022<br/><br/>

          Reservation details:<br/><br/>

          Reservation Number: 091234568<br/>
          Reservation Date: 03/01/2022<br/>
          Payment Mode: Bank (MetroBank)<br/>
          Payment Type: Down Payment<br/>
          Guest Name: Pedro <br/>
          Birthdate: 2000/12/21<br/>
          Nationality: Filipino<br/>
          Email Address: PedroJuan@gmail.com<br/>
          Address: Cecilia Chapman 711 Philippines<br/>
          Contact Number: 09292333312<br/>
          Check-In Date: 03/04/2022<br/>
          Check-Out Date: 03/08/2022<br/>
          Night(s): 4 nights<br/>
          Total No. of Rooms: 1<br/>
          Total No. of adult: 2<br/>
          Total No. of kids: 0<br/>
          Special Request(s): none<br/><br/>

          We are sincerely awaiting your visit, I hope you enjoy your stay with us.<br/><br/>

          - Mr. Elbert<br/>
          Hotel Manager
        </ContainerGlobal>

        <ContainerGlobal
          w='auto'
          h='auto'
          bg='none'
          direction='row'
          gap='10px'
          justify='center'
          margin='auto'
          align='center'
          overflow='none'
        >
          <Button variant="contained" size="large"
            style={{ backgroundColor: '#948566' }}

            onClick={() => setShow(prev => !prev)}
          >
            Reply
          </Button>
          <Button variant="contained" size="large"
            style={{ backgroundColor: '#FF2400' }}

            onClick={() => setShow(prev => !prev)}
          >
            Delete
          </Button>
        </ContainerGlobal>
      </ContainerGlobal>

    </ContainerGlobal2>
  );



  const composeMessage = (
    <ContainerGlobal2
      w='100%'
      h='100%'
      radius='none'
      justify='center'
      align='center'
      bg='rgb(46, 46, 46, 0.9)'
      index='4'
      active
    >
      <ContainerGlobal
        w='900px'
        h='650px'
        bg='white'
        direction='column'
        gap='10px'

      >
        <ContainerGlobal
          bg='#2e2e2e'
          radius='none'
          align='center'
          w='100%'>
          <Title
            size='20px'
            color='white'
            family='Helvetica'
            fstyle='normal'
            weight='600'
            align='left'
            bg='#2e2e2e'
            margin='20px'
          >
            Compose message
          </Title>
          <IconButton aria-label="delete" size='large' style={{ color: 'white', margin: '0px 0px 0px auto' }}
            onClick={() => setShowComposeMessage(prev => !prev)}
          >
            <CloseIcon />
          </IconButton>

        </ContainerGlobal>

        <ContainerGlobal
          w='95%' overflow='visible' margin='5px auto'
          align='center' gap='50px'>
          <Title
            size='16px'
            color='black'
            family='Helvetica'
            fstyle='normal'
            weight='400'
            align='left'
            margin='0px 0px 0px 0px'

          >
            <b>To:</b>
          </Title>
          <TextField id="outlined-basic" style={{ width: '200px' }} label="" variant="outlined" size='small' />
        </ContainerGlobal>
        <ContainerGlobal
          w='95%' overflow='visible' margin='5px auto'
          align='center' gap='10px'
        >
          <Title
            size='16px'
            color='black'
            family='Helvetica'
            fstyle='normal'
            weight='400'
            align='left'
            margin='0px 0px 0px 0px'
          >
            <b>Subject:</b>
          </Title>
          <TextField id="outlined-basic" style={{ width: '400px' }} label="" variant="outlined" size='small' />
        </ContainerGlobal>
        <Title
          size='16px'
          color='black'
          family='Helvetica'
          fstyle='normal'
          weight='400'
          align='left' w='95%' margin='5px auto'
        >
          <b>Message:</b>
        </Title>
        <TextField id="outlined-basic" label="Write your message here..." variant="outlined" multiline rows={10} style={{ width: '95%', margin: '0px auto' }} />

        <IconButton aria-label="delete" size='large' style={{ color: 'black', margin: '0px 0px 0px 25px', border: '1px solid black' }}

        >
          <AttachFileIcon />
        </IconButton>
        <ContainerGlobal
          w='auto'
          h='auto'
          bg='none'
          direction='row'
          gap='10px'
          justify='center'
          margin='auto'
          align='center'
          overflow='none'
        >
          <Button variant="contained" size="large"
            style={{ backgroundColor: '#948566' }}

            onClick={() => setShowComposeMessage(prev => !prev)}
          >
            Send
          </Button>
          <Button variant="contained" size="large"
            style={{ backgroundColor: '#FF2400' }}

            onClick={() => setShowComposeMessage(prev => !prev)}
          >
            Cancel
          </Button>
        </ContainerGlobal>
      </ContainerGlobal>

    </ContainerGlobal2>
  );

  return (
    <Container>
      <OptionContainer>
        <Button2
          onClick={() => {
            setOption('inbox');
            console.log(option);
          }}
          w='70px'
          fam='arial'
          h='25px'
          textcolor={option == 'inbox' ? 'white' : 'black'}
          bg={option == 'inbox' ? '#302B20' : 'transparent'}
          weight='-400'
          fontStyle='normal'
          radius="0px"
          border="1px solid #8F805F"
          fontsize='18px'>

          Inbox
        </Button2>
        <Button2
          onClick={() => {
            setOption('sent');
            console.log(option);
          }}
          textcolor={option == 'sent' ? 'white' : 'black'}
          bg={option == 'sent' ? '#302B20' : 'transparent'}
          w='70px'
          fam='arial'
          h='25px'
          weight='-400'
          fontStyle='normal'
          radius="0px"
          border="1px solid #8F805F"
          fontsize='18px'>
          Sent
        </Button2>
      </OptionContainer>

      {/* inbox */}
      <MainContainer
        display={option == 'inbox' ? 'flex' : 'none'}
      >
        <MessagesTitleContainer>
          <Title
            bg='#272727'
            family='raleway, sans-serif'
            color='white'
            weight='400'
            size='35px'
            fStyle='Normal'
            align='Center'
            width='100%'
            padding='15px 0px 15px 0px'
          >
            Inbox
          </Title>
        </MessagesTitleContainer>
        <MessagesContentContainer>

          <MessagesContent
            whileHover={{ boxShadow: "5px 2px 10px gray" }}
            whileTap={{ scale: .99 }}

            bg='white'
          >
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='700'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              From: Front Desk
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='700'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Payment Update
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='700'
              size='18px'
              fStyle='Italic'
              align='Center'
              margin='20px'>
              10/20/22
            </Title>
          </MessagesContent>
          <MessagesContent

            onClick={() => setShow(prev => !prev)}
            whileHover={{ boxShadow: "5px 2px 10px gray" }}
            whileTap={{ scale: .99 }}

          >
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              From: Front Desk
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Reservation Confirmation
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Italic'
              align='Center'
              margin='20px'>
              04/22/21
            </Title>
          </MessagesContent>
          <MessagesContent
            whileHover={{ boxShadow: "5px 2px 10px gray" }}
            whileTap={{ scale: .99 }}

            bg='white'
          >
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='700'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              From: Front Desk
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='700'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Promo!
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='700'
              size='18px'
              fStyle='Italic'
              align='Center'
              margin='20px'>
              10/20/22
            </Title>
          </MessagesContent>
          <MessagesContent
            whileHover={{ boxShadow: "5px 2px 10px gray" }}
            whileTap={{ scale: .99 }}>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              From: Front Desk
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Promo!
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Italic'
              align='Center'
              margin='20px'>
              10/20/22
            </Title>
          </MessagesContent>
          <MessagesContent
            whileHover={{ boxShadow: "5px 2px 10px gray" }}
            whileTap={{ scale: .99 }}>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              From: Front Desk
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Promo!
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Italic'
              align='Center'
              margin='20px'>
              10/20/22
            </Title>
          </MessagesContent>
          <MessagesContent
            whileHover={{ boxShadow: "5px 2px 10px gray" }}
            whileTap={{ scale: .99 }}>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              From: Front Desk
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Promo!
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Italic'
              align='Center'
              margin='20px'>
              10/20/22
            </Title>
          </MessagesContent>
          <MessagesContent
            whileHover={{ boxShadow: "5px 2px 10px gray" }}
            whileTap={{ scale: .99 }}>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              From: Front Desk
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Promo!
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Italic'
              align='Center'
              margin='20px'>
              10/20/22
            </Title>
          </MessagesContent>
          <MessagesContent
            whileHover={{ boxShadow: "5px 2px 10px gray" }}
            whileTap={{ scale: .99 }}>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              From: Front Desk
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Promo!
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Italic'
              align='Center'
              margin='20px'>
              10/20/22
            </Title>
          </MessagesContent>
        </MessagesContentContainer>
      </MainContainer>



      {/* SENT */}
      <MainContainer

        display={option == 'sent' ? 'flex' : 'none'}>
        <MessagesTitleContainer>
          <Title
            bg='#272727'
            family='raleway, sans-serif'
            color='white'
            weight='400'
            size='35px'
            fStyle='Normal'
            align='Center'
            width='100%'
            padding='15px 0px 15px 0px'
          >
            Sent
          </Title>
        </MessagesTitleContainer>
        <MessagesContentContainer>

          <MessagesContent
            whileHover={{ boxShadow: "5px 2px 10px gray" }}
            whileTap={{ scale: .99 }}

          >
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              To: Front Desk
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Receipt Update
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Italic'
              align='Center'
              margin='20px'>
              10/20/22
            </Title>
          </MessagesContent>
          <MessagesContent
            whileHover={{ boxShadow: "5px 2px 10px gray" }}
            whileTap={{ scale: .99 }}

          >
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'
            >
              To: Support
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Normal'
              align='Center'
              margin='20px'>
              Help assistance
            </Title>
            <Title
              family='raleway, sans-serif'
              color='#736449'
              weight='400'
              size='18px'
              fStyle='Italic'
              align='Center'
              margin='20px'>
              10/20/22
            </Title>
          </MessagesContent>


        </MessagesContentContainer>
      </MainContainer>

      <Button2
        whileHover={{ backgroundColor: "#302B20", color: "white" }}
        w='auto'
        h='50px'
        textcolor="white"
        fam='georgia'
        weight='-400'
        fontStyle='normal'
        radius="0px"
        border="1px solid #8F805F"
        margin='30px 0px 0px 0px'
        fontsize='18px'
        bg='#282626'
        onClick={() => setShowComposeMessage(prev => !prev)}
      >
        Compose New Message
      </Button2>


      <Grow in={show}>{viewMessage}</Grow>

      <Grow in={showComposeMessage}>{composeMessage}</Grow>
    </Container>
  )
}

export default ClientMessagesCont