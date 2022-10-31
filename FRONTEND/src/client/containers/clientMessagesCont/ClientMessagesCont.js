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
import { FormControlLabel, FormControl, Grow, Modal, Pagination } from '@mui/material';
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
import axios from 'axios'
import { apiKey } from '../../../apiKey'
import { Tr, TableContainer, TableFixHead, Td, Th } from '../../../admin/containers/messagesContainer/styles'
import ActionButtonMessages from '../../../admin/components/actionButton/ActionButtonMessages'
import { borderRadius, display, margin } from '@mui/system'
const ClientMessagesCont = () => {
  const [option, setOption] = useState('inbox');

  const [userInformation, setUserInformation] = useState([])
  const [inbox, setInbox] = useState([])
  const [sent, setSent] = useState([])
  const [messagesDb, setMessagesDb] = useState([])
  const [conversationDb, setConversationDb] = useState([])

  useEffect(() => {
    console.log(option)
  })


  const [value, setValue] = useState(Date.now());
  const color = "#c44242";
  const [age, setAge] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');


  const [value2, setValue2] = React.useState('1');

  const [show, setShow] = useState(false);
  const [showComposeMessage, setShowComposeMessage] = useState(false);
  const [show2, setShow2] = useState(false);


  const [openCompose, setOpenCompose] = React.useState(false);

  const handleOpenCompose = () => setOpenCompose(true);
  const handleCloseCompose = () => {
    setOpenCompose(false)
  };
  const [viewMessage, setViewMessage] = React.useState(false);
  const [messageContentDb, setMessageContentDb] = React.useState('');
  const [conversationId, setConversationId] = React.useState('');

  const handleOpenViewMessage = (value) => {
    setViewMessage(true)
    setConversationId(value)
  };
  const handleCloseViewMessage = () => {
    setViewMessage(false)
  };

  const [inboxPage, setInboxPage] = useState(1)
  const [sentPage, setSentPage] = useState(1)



  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  // const viewMessage = (

  //   <ContainerGlobal2
  //     w='100%'
  //     h='100%'
  //     radius='none'
  //     justify='center'
  //     align='center'
  //     bg='rgb(46, 46, 46, 0.9)'
  //     index='2'
  //     overflow='auto'
  //     active
  //   >
  //     <ContainerGlobal
  //       w='900px'
  //       h='700px'
  //       bg='white'
  //       direction='column'
  //       gap='10px'

  //     >
  //       <ContainerGlobal
  //         bg='#998B6D'
  //         radius='none'
  //         align='center'
  //         w='100%'>
  //         <Title
  //           size='20px'
  //           color='black'
  //           family='Helvetica'
  //           fstyle='normal'
  //           weight='600'
  //           align='left'
  //           margin='20px'
  //         >
  //           Reservation Confirmation
  //         </Title>
  //         <IconButton aria-label="delete" size='large' style={{ color: 'white', margin: '0px 0px 0px auto' }}

  //           onClick={() => setShow(prev => !prev)}
  //         >
  //           <CloseIcon />
  //         </IconButton>

  //       </ContainerGlobal>

  //       <ContainerGlobal
  //         w='95%' overflow='visible' margin='5px auto'>
  //         <Title
  //           size='16px'
  //           color='black'
  //           family='Helvetica'
  //           fstyle='normal'
  //           weight='400'
  //           align='left'
  //           margin='0px 0px 0px 0px'
  //         >
  //           <b>From:</b> FrontDesk
  //         </Title>
  //         <Title
  //           size='16px'
  //           color='black'
  //           family='Helvetica'
  //           fstyle='normal'
  //           weight='400'
  //           align='left'
  //           margin='0px 0px 0px auto'
  //         >
  //           04/22/21 - 12:26 PM
  //         </Title>
  //       </ContainerGlobal>
  //       <ContainerGlobal
  //         w='95%'
  //         h='450px'
  //         margin='0px 15px'
  //         bg='rgb(183, 183, 183,.3)'
  //         padding='10px'
  //         style={{ textAlign: 'justify' }}
  //         direction='column'
  //         overflow='auto'
  //       >
  //         Dear Pedro Juan, <br /><br />

  //         We are pleased to inform you that your RESERVATION [091234568] is confirmed.<br /><br />

  //         Your check-in : 04/26/2022<br />
  //         Your checkout : 04/27/2022<br /><br />

  //         Reservation details:<br /><br />

  //         Reservation Number: 091234568<br />
  //         Reservation Date: 03/01/2022<br />
  //         Payment Mode: Bank (MetroBank)<br />
  //         Payment Type: Down Payment<br />
  //         Guest Name: Pedro <br />
  //         Birthdate: 2000/12/21<br />
  //         Nationality: Filipino<br />
  //         Email Address: PedroJuan@gmail.com<br />
  //         Address: Cecilia Chapman 711 Philippines<br />
  //         Contact Number: 09292333312<br />
  //         Check-In Date: 03/04/2022<br />
  //         Check-Out Date: 03/08/2022<br />
  //         Night(s): 4 nights<br />
  //         Total No. of Rooms: 1<br />
  //         Total No. of adult: 2<br />
  //         Total No. of kids: 0<br />
  //         Special Request(s): none<br /><br />

  //         We are sincerely awaiting your visit, I hope you enjoy your stay with us.<br /><br />

  //         - Mr. Elbert<br />
  //         Hotel Manager
  //       </ContainerGlobal>

  //       <ContainerGlobal
  //         w='auto'
  //         h='auto'
  //         bg='none'
  //         direction='row'
  //         gap='10px'
  //         justify='center'
  //         margin='auto'
  //         align='center'
  //         overflow='none'
  //       >
  //         <Button variant="contained" size="large"
  //           style={{ backgroundColor: '#948566' }}

  //           onClick={() => setShow(prev => !prev)}
  //         >
  //           Reply
  //         </Button>
  //         <Button variant="contained" size="large"
  //           style={{ backgroundColor: '#FF2400' }}

  //           onClick={() => setShow(prev => !prev)}
  //         >
  //           Delete
  //         </Button>
  //       </ContainerGlobal>
  //     </ContainerGlobal>

  //   </ContainerGlobal2>
  // );



  const viewSentMessage = (

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
            Reservation Payment
          </Title>
          <IconButton aria-label="delete" size='large' style={{ color: 'white', margin: '0px 0px 0px auto' }}

            onClick={() => setShow2(prev => !prev)}
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
            <b>To:</b> FrontDesk
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
            04/20/21 - 12:26 PM
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut tellus id felis maximus semper vel non tellus. Ut rutrum nisi augue, eu efficitur tortor pellentesque sed. Suspendisse sed mi a dolor fringilla luctus non vitae augue. Duis consectetur finibus ultrices. Ut ac fermentum arcu. Sed commodo rhoncus lectus, a porttitor velit vehicula sed. Nullam bibendum purus eu mattis cursus. Cras porta sem sit amet eleifend malesuada. Nullam eu sagittis neque. Maecenas sagittis ornare nulla nec sagittis.

          <img style={{ margin: '20px 0px 0px 0px' }} width='30%' src={Recipt} />
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

            onClick={() => setShow2(prev => !prev)}
          >
            Reply
          </Button>
          <Button variant="contained" size="large"
            style={{ backgroundColor: '#FF2400' }}

            onClick={() => setShow2(prev => !prev)}
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




  useEffect(() => {
    axios.get(apiKey + 'auth/verify-token').then((result) => {
      axios.get(apiKey + 'api/getAllGuest').then((guest) => {
        guest.data.map((item) => {
          if (result.data.id == item.user_id) {

            setUserInformation(item)
            axios.get(apiKey + 'api/getAllMessage').then((messageResult) => {
              setMessagesDb(messageResult.data)

              axios.get(apiKey + 'api/getAllConversation').then((result) => {
                console.log("TEST1 :", result.data
                  .filter((obj) => obj.from_guest_id == item.id || obj.to_guest_id == item.id)
                  .filter((item2) => (
                    messageResult.data.filter((obj) => obj.conversation_id == item2.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].message_to_guest_id == item.id
                  )))
                console.log("TEST2 :", result.data
                  .filter((obj) => obj.from_guest_id == item.id || obj.to_guest_id == item.id)
                  .filter((item2) => (
                    messageResult.data.filter((obj) => obj.conversation_id == item2.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].message_to_guest_id != item.id
                  )))
                setInbox(result.data
                  .filter((obj) => obj.from_guest_id == item.id || obj.to_guest_id == item.id)
                  .filter((item2) => (
                    messageResult.data.filter((obj) => obj.conversation_id == item2.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].message_to_guest_id != item.id
                  )))
                setSent(result.data
                  .filter((obj) => obj.from_guest_id == item.id || obj.to_guest_id == item.id)
                  .filter((item2) => (
                    messageResult.data.filter((obj) => obj.conversation_id == item2.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].message_to_guest_id == item.id
                  )))

                  
              }).catch((err) => {
                console.log(err)

              });
            }).catch((err) => {
              console.log(err)

            });


          }
        })
        console.log(guest.data)
      }).catch((err) => {
        console.log(err)

      });
    }).catch((err) => {
      console.log(err)
    });
  }, [])


  useEffect(() => {

  }, [userInformation])


  const sendComposeMessage = () => {
    console.log('ASD')
    axios.get(apiKey + 'api/getAllGuest').then((guest) => {
      guest.data.filter((obj) => obj.user.role == 'ADMIN' || obj.user.role == 'STAFF').map((item) => {
        axios.post(apiKey + 'api/addConversation', {
          from_guest_id: userInformation.id,
          to_guest_id: item.id
        }).then((result) => {
          console.log(result.data);
          axios.post(apiKey + 'api/addMessage', {
            message: message,
            conversation_id: result.data.new_conversation.id,
            subject: subject,
          }).then((result) => {
            console.log(result.data);
            window.location.reload()
          }).catch((err) => {
            console.log(err);

          });
        }).catch((err) => {
          console.log(err);

        });
      })
    }).catch((err) => {
      console.log(err);
    });

  }

  return (
    <Container>

      <Modal
        open={openCompose}
        onClose={handleCloseCompose}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Box
          component='form'
          // onSubmit={updatePassword}
          style={{
            height: 'auto',
            width: '50vw',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            padding: '0px 0px 30px 0px',
            gap: '10px',
            justifyContent: 'flex-start',
            alignItems: 'center',
            overflowY: 'overlay',
            overflowX: 'hidden',
            borderRadius: '.5rem',
            position: 'relative',
            // margin: '50px 0px',

          }}>
          <div style={{
            width: '100%',
            height: '50px',
            position: 'sticky',
            top: 0,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'black',
            zIndex: '1',

          }}>
            <Title
              size='16px'
              color='white'
              family='Helvetica'
              fstyle='normal'
              weight='bold'
              align='left'
              margin='0px auto 0px 10px'
            >
              Compose message
            </Title>
            <CloseIcon
              onClick={handleCloseCompose}
              style={{
                color: 'white',
                cursor: 'pointer',
                margin: '10px',
              }} />
          </div>
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
            <TextField
              id="outlined-basic" style={{ width: '400px' }}
              label=""
              variant="outlined"
              size='small'
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value)
              }}
              inputProps={{ maxLength: 150 }}
              required
            />
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
          <TextField
            id="outlined-basic"
            label="Write your message here..."
            variant="outlined"
            multiline
            rows={10}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
            required

            inputProps={{ maxLength: 255 }}
            style={{ width: '95%', margin: '0px auto' }} />
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

              onClick={() => sendComposeMessage()}
            >
              Send
            </Button>
            <Button variant="contained" size="large"
              style={{ backgroundColor: '#FF2400' }}

              onClick={() => { handleCloseCompose() }}
            >
              Cancel
            </Button>
          </ContainerGlobal>
        </Box>
      </Modal>


      <Modal
        open={viewMessage}
        onClose={handleCloseViewMessage}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Box
          component='form'
          // onSubmit={updatePassword}
          style={{
            height: 'auto',
            width: '50vw',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            padding: '0px 0px 30px 0px',
            gap: '10px',
            justifyContent: 'flex-start',
            alignItems: 'center',
            overflowY: 'overlay',
            overflowX: 'hidden',
            borderRadius: '.5rem',
            position: 'relative',
            // margin: '50px 0px',

          }}>
          <div style={{
            width: '100%',
            height: '50px',
            position: 'sticky',
            top: 0,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'black',
            zIndex: '1',

          }}>
            <div style={{
              margin: '0px auto 0px 10px',
              display: 'flex',
              gap: '10px',
              alignItems: 'center'

            }}>
              <Title
                size='16px'
                color='white'
                family='Helvetica'
                fstyle='normal'
                weight='bold'
                align='left'
                bg='#948566'
                borderRadius='0.5rem'
                padding='5px 10px'

              >
                Subject:
              </Title>
              <Title
                size='14px'
                color='white'
                family='Helvetica'
                fstyle='normal'
                weight='normal'
                align='left'
                style={{
                  width: '500px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                sample
              </Title>
            </div>
            <CloseIcon
              onClick={handleCloseViewMessage}
              style={{
                color: 'white',
                cursor: 'pointer',
                margin: '10px',
              }} />
          </div>
          <div style={{ width: '100%', overflowY: 'scroll', height: '500px', overflowX: 'hidden' }}>
            {messagesDb.length != 0 && conversationId != '' ?
              messagesDb
                .filter((obj) => obj.conversation_id == conversationId)
                .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
                .map((item) => (
                  item.message_to_guest_id != userInformation.id ?
                    <div style={{ width: '100%', marginBottom: '30px' }}>
                      <ContainerGlobal
                        w='95%' overflow='visible' margin='5px auto'
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
                          <b>From:</b> {item.messageTo.firstName}
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
                          {new Date(item.created_at).toLocaleDateString()} {new Date(item.created_at).toLocaleTimeString().slice(0, 4)} {new Date(item.created_at).toLocaleTimeString().slice(7, 10)}
                        </Title>
                      </ContainerGlobal>
                      <ContainerGlobal
                        w='95%'
                        h='auto'
                        margin='auto'
                        bg='rgb(183, 183, 183,.3)'
                        padding='10px'
                        style={{ textAlign: 'justify', minHeight: '100px' }}
                        direction='column'
                        overflow='auto'
                      >
                        {item.message}
                      </ContainerGlobal>
                    </div>
                    :
                    <div style={{ width: '100%', marginBottom: '30px' }}>
                      <ContainerGlobal
                        w='95%' overflow='visible' margin='5px auto'
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
                          {new Date(item.created_at).toLocaleDateString()} {new Date(item.created_at).toLocaleTimeString().slice(0, 4)} {new Date(item.created_at).toLocaleTimeString().slice(7, 10)}
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
                          <b>Reply to:</b> Rm luxe hotel
                        </Title>
                      </ContainerGlobal>
                      <ContainerGlobal
                        w='95%'
                        h='auto'
                        margin='auto'
                        bg='#d2c3a4'
                        padding='10px'
                        style={{ textAlign: 'justify', minHeight: '100px' }}
                        direction='column'
                        overflow='auto'
                      >
                        {item.message}
                      </ContainerGlobal>
                    </div>

                ))
              : ''}




          </div>


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

              onClick={() => sendComposeMessage()}
            >
              Reply
            </Button>
            <Button variant="contained" size="large"
              style={{ backgroundColor: '#FF2400' }}

              onClick={() => { handleCloseViewMessage() }}
            >
              Cancel
            </Button>
          </ContainerGlobal>
        </Box>
      </Modal>







      <TabContext value={value2}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange2} aria-label="lab API tabs example">
            <Tab label="Inbox" value="1" />
            <Tab label="Sent" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" style={{ width: '100%', height: '500px', maxHeight: '500px' }} >

          <TableContainer
            cellspacing="0"
            cellpadding="0"
            style={{
              width: '95%',
              height: '10px',
              overflow: 'hidden',
              position: 'static',
              tableLayout: 'auto',
              margin: '0px auto',
              border: '1px solid black'

            }}
          >
            <thead>
              <Tr cursor='normal'>
                <Th align='center' style={{ width: '20%' }}>Subject</Th>
                <Th align='center' style={{ width: '45%' }} >Message</Th>
                <Th align='center' style={{ width: '10%' }}>Date</Th>
                <Th align='center' style={{ width: '10%' }}>Time</Th>
                <Th align='center' style={{ width: '10%' }}>Action</Th>
              </Tr>
            </thead>
            <tbody style={{ height: '10px', overflow: 'hidden' }}>
              {inbox.length != 0 && messagesDb.length != 0 ? inbox
                // .filter((obj) => obj.to_guest_id == userInformation.id || obj.to_guest_id == userInformation.id)
                // .filter((obj) => obj.message.message_to_guest_id != userInformation.id)
                // .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                // .filter((obj, index, array) => index != 0 ? array[index].id != array[index - 1].id : array[index])
                .slice((inboxPage - 1) * 6, inboxPage * 6)
                .map((item) => (
                  <Tr
                    whileHover={{ boxShadow: '0px 2px 2px gray' }}
                    whileTap={{ boxShadow: 'none' }}
                    style={messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].status == true && { backgroundColor: 'rgb(40,40,40, .05', }}
                    onClick={() => handleOpenViewMessage(item.id)}
                  >
                    <Td align='center' normal={messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].status == true && 'normal'}>{item.subject}</Td>
                    <Td align='center' normal={messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].status == true && 'normal'}><p style={{ margin: 'auto', width: '300px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                      {messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].message}
                    </p>
                    </Td>
                    <Td align='center' normal={item.status == true && 'normal'}>{new Date(messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].created_at).toLocaleDateString()} </Td>
                    <Td align='center' normal={item.status == true && 'normal'}>{new Date(messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].created_at).toLocaleTimeString().slice(0, 4)} {new Date(messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].created_at).toLocaleTimeString().slice(7, 10)}</Td>
                    <Td align='center' normal={item.status == true && 'normal'}><ActionButtonMessages /></Td>
                  </Tr>
                )) : 'no inbox'}

            </tbody>
          </TableContainer>
          <Pagination
            page={inboxPage}
            count={inbox.length != 0 && Math.ceil(inbox.length / 6)}
            onChange={(e, value) => {
              setInboxPage(value)
            }}
            style={{
              justifyContent: "center",
              display: 'flex',
              margin: '20px',
            }}
          />

        </TabPanel>


        <TabPanel value="2" style={{ width: '100%', height: '500px', maxHeight: '500px' }} >

          <TableContainer
            cellspacing="0"
            cellpadding="0"
            style={{
              width: '95%',
              height: '10px',
              overflow: 'hidden',
              position: 'static',
              tableLayout: 'auto',
              margin: '0px auto',
              border: '1px solid black'

            }}
          >
            <Tr>
              <Th align='center' style={{ width: '20%' }}>Subject</Th>
              <Th align='center' style={{ width: '45%' }} >Message</Th>
              <Th align='center' style={{ width: '10%' }}>Date</Th>
              <Th align='center' style={{ width: '10%' }}>Time</Th>
              <Th align='center' style={{ width: '10%' }}>Action</Th>
            </Tr>
            {sent.length != 0 && messagesDb.length != 0 ? sent
              // .filter((obj) => obj.to_guest_id == userInformation.id || obj.to_guest_id == userInformation.id)
              // .filter((obj) => obj.message.message_to_guest_id != userInformation.id)
              // .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
              // .filter((obj, index, array) => index != 0 ? array[index].id != array[index - 1].id : array[index])
              .slice((inboxPage - 1) * 6, inboxPage * 6)
              .map((item) => (
                <Tr
                  whileHover={{ boxShadow: '0px 2px 2px gray' }}
                  whileTap={{ boxShadow: 'none' }}
                  style={messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].status == true && { backgroundColor: 'rgb(40,40,40, .05', }}
                  onClick={() => handleOpenViewMessage(item.id)}
                >
                  <Td align='center' normal={messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].status == true && 'normal'}>{item.subject}</Td>
                  <Td align='center' normal={messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].status == true && 'normal'}><p style={{ margin: 'auto', width: '300px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                    {messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].message}
                  </p>
                  </Td>
                  <Td align='center' normal={item.status == true && 'normal'}>{new Date(messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].created_at).toLocaleDateString()} </Td>
                  <Td align='center' normal={item.status == true && 'normal'}>{new Date(messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].created_at).toLocaleTimeString().slice(0, 4)} {new Date(messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].created_at).toLocaleTimeString().slice(7, 10)}</Td>
                  <Td align='center' normal={item.status == true && 'normal'}><ActionButtonMessages /></Td>
                </Tr>
              )) : 'no inbox'}

          </TableContainer>
          <Pagination
            page={sentPage}
            count={sent.length != 0 && Math.ceil(sent.length / 6)}
            onChange={(e, value) => {
              setSentPage(value)
            }}

            style={{
              justifyContent: "center",
              display: 'flex',
              margin: '20px',
            }}
          />
        </TabPanel>
      </TabContext>
      <Button2
        whileHover={{ backgroundColor: "#302B20", color: "white" }}
        w='auto'
        h='50px'
        textcolor="white"
        fam='Roboto Slab'
        weight='-400'
        fontStyle='normal'
        radius="0px"
        padding="2px 20px 2px 20px"
        border="1px solid #8F805F"
        margin='50px 0px 0px 0px'
        fontsize='17px'
        bg='#282626'
        onClick={() => { handleOpenCompose() }}
      >
        Compose New Message
      </Button2>
    </Container>
  )
}

export default ClientMessagesCont