import React, { useState } from 'react'
import { Title } from '../../../client/components/title/styles'
import { ContainerGlobal } from '../../components/container/container'
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine'
import ActionButtonMessages from '../../components/actionButton/ActionButtonMessages';
import Recipt from '../../../client/images/sample_recipt.png';
import { Container, HeadContainer, TableContainer, TableFixHead, Td, Th, Tr } from './styles'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
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

const MessagesContainer = () => {

    const [value, setValue] = useState(Date.now());
    const color = "#c44242";
    const [age, setAge] = React.useState('');


    const [value2, setValue2] = React.useState('1');

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [showComposeMessage, setShowComposeMessage] = useState(false);

    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
    };

    const viewMessage = (

        <ContainerGlobal
            w='100%'
            h='100%'
            radius='none'
            justify='center'
            align='center'
            bg='rgb(46, 46, 46, 0.9)'
            index='1'
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
                        Reservation Payment
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
                        <b>From:</b> Pedrojuan001221
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
                    w='auto'
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

        </ContainerGlobal>
    );






    const viewSentMessage = (

        <ContainerGlobal
            w='100%'
            h='100%'
            radius='none'
            justify='center'
            align='center'
            bg='rgb(46, 46, 46, 0.9)'
            index='1'
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
                        Reservation Confirmation
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
                        <b>To:</b> Pedrojuan001221
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
                    Dear Pedro Juan, <br /><br />

                    We are pleased to inform you that your RESERVATION [091234568] is confirmed.<br /><br />

                    Your check-in : 04/26/2022<br />
                    Your checkout : 04/27/2022<br /><br />

                    Reservation details:<br /><br />

                    Reservation Number: 091234568<br />
                    Reservation Date: 03/01/2022<br />
                    Payment Mode: Bank (MetroBank)<br />
                    Payment Type: Down Payment<br />
                    Guest Name: Pedro <br />
                    Birthdate: 2000/12/21<br />
                    Nationality: Filipino<br />
                    Email Address: PedroJuan@gmail.com<br />
                    Address: Cecilia Chapman 711 Philippines<br />
                    Contact Number: 09292333312<br />
                    Check-In Date: 03/04/2022<br />
                    Check-Out Date: 03/08/2022<br />
                    Night(s): 4 nights<br />
                    Total No. of Rooms: 1<br />
                    Total No. of adult: 2<br />
                    Total No. of kids: 0<br />
                    Special Request(s): none<br /><br />

                    We are sincerely awaiting your visit, I hope you enjoy your stay with us.<br /><br />

                    - Mr. Elbert<br />
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

        </ContainerGlobal>
    );



    const composeMessage = (
        <ContainerGlobal
            w='100%'
            h='100%'
            radius='none'
            justify='center'
            align='center'
            bg='rgb(46, 46, 46, 0.9)'
            index='1'
            overflow='auto'
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

        </ContainerGlobal>
    );




    return (
        <Container>
            <HeadContainer>
                <Title
                    size='20px'
                    color='white'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                    margin='20px 0px 20px 30px'
                >
                    Messages
                </Title>
            </HeadContainer>


            <ContainerGlobal
                w='90%'
                h='auto'
                bg='WHITE'
                direction='column'
                align='center'
                padding='10px 30px'
                margin='20px 0px 10px 0px'
                gap='10px'
            >
                <ContainerGlobal
                    w='100%'
                    h='7vh'
                    bg='none'
                    direction='row'
                    overflow='visible'
                    align='center'
                    justify='center'
                    gap='10px'
                >
                    <TextField
                        id="outlined-basic"
                        label="Search..."
                        variant="outlined"
                        sx={{
                            input: { color: 'black', fontWeight: 'bold' },

                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>

                            ),
                        }}
                        style={{ width: 700 }} />
                    <LocalizationProvider dateAdapter={AdapterDateFns}
                    >
                        <DatePicker
                            views={['day', 'month', 'year']}
                            label="Start Date"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) =>
                                <TextField
                                    {...params}
                                    sx={{
                                        svg: { color: 'black' },
                                        input: { color },
                                        label: { color },
                                        color: { color },
                                        input: { color: 'black', fontWeight: 'bold' },

                                    }}
                                    style={{ width: 200, margin: '0px 0px 0px 20px' }}
                                    helperText={null}
                                />
                            }
                        />

                    </LocalizationProvider>
                    <ArrowForwardIcon />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker

                            views={['day', 'month', 'year']}
                            label="End Date"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) =>
                                <TextField
                                    {...params}
                                    sx={{
                                        svg: { color: 'black' },
                                        input: { color },
                                        label: { color },
                                        color: { color },
                                        input: { color: 'black', fontWeight: 'bold' },

                                    }}
                                    style={{ width: 200 }}
                                    helperText={null}
                                />
                            }
                        />

                    </LocalizationProvider>

                    <Button variant="contained"
                        style={{ backgroundColor: 'rgb(80, 170, 50)' }}
                        startIcon={<FilterAltIcon />}
                    >
                        Filter
                    </Button>
                    <Button variant="contained"
                        style={{ backgroundColor: 'rgb(255, 36, 0)' }}
                        startIcon={<CloseIcon />}>
                        clear
                    </Button>



                </ContainerGlobal>
            </ContainerGlobal>




            <ContainerGlobal
                w='90%'
                h='60vh'
                bg='white'
                direction='column'
                padding='30px'
                margin='20px 0px 20px 0px'
                gap='10px'
            ><Title
                size='26px'
                color='black'
                family='Helvetica'
                fstyle='normal'
                weight='600'
                align='left'
            >
                    Messages
                </Title>

                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                ></HorizontalLine>
                <TabContext value={value2}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange2} aria-label="lab API tabs example">
                            <Tab label="Inbox" value="1" />
                            <Tab label="Sent" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">

                        <TableFixHead>
                            <TableContainer
                                cellspacing="0"
                                cellpadding="0"
                            >
                                <thead>
                                    <Tr cursor='normal'>
                                        <Th align='center' style={{ width: '5%' }}></Th>
                                        <Th align='center' style={{ width: '10%' }}>Name</Th>
                                        <Th align='center' style={{ width: '20%' }}>Subject</Th>
                                        <Th align='center' style={{ width: '45%' }} >Message</Th>
                                        <Th align='center' style={{ width: '10%' }}>Date</Th>
                                        <Th align='center' style={{ width: '10%' }}>Time</Th>
                                        <Th align='center' style={{ width: '10%' }}>Action</Th>
                                    </Tr>
                                </thead>
                                <tbody style={{ height: '10px', overflow: 'auto', diplay: 'block', }}>
                                    <Tr
                                        whileHover={{ boxShadow: '0px 2px 2px gray' }}
                                        whileTap={{ boxShadow: 'none' }}
                                    >
                                        <Td align='center' >From:</Td>
                                        <Td align='center' >Jasper Paul</Td>
                                        <Td align='center' >Payment</Td>
                                        <Td align='center' >
                                            LLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et mattis urna. Nulla vel commodo massa. Proin a lectus pulvinar neque sollicitudin finibus. Curabitur mollis, tellus quis placerat sollicitudin, libero ipsum vulputate tortor, non vulputate mi lorem quis mauris. Duis sit amet gravida orci.
                                        </Td>
                                        <Td align='center' >03/04/2022</Td>
                                        <Td align='center' >20:30</Td>
                                        <Td align='center' ><ActionButtonMessages /></Td>
                                    </Tr>
                                    <Tr
                                        style={{ backgroundColor: 'rgb(40,40,40, .1', }}
                                        whileHover={{ boxShadow: '0px 2px 2px gray' }}
                                        whileTap={{ boxShadow: 'none' }}

                                        onClick={() => setShow(prev => !prev)}
                                    >
                                        <Td align='center' normal>From:</Td>
                                        <Td align='center' normal >Pedro Juan</Td>
                                        <Td align='center' normal >Reservation Payment</Td>
                                        <Td align='center' normal >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et mattis urna. Nulla vel commodo massa. Proin a lectus pulvinar neque sollicitudin finibus. Curabitur mollis, tellus quis placerat sollicitudin, libero ipsum vulputate tortor, non vulputate mi lorem quis mauris. Duis sit amet gravida orci.</Td>
                                        <Td align='center' normal >04/20/21</Td>
                                        <Td align='center' normal >12:26</Td>
                                        <Td align='center' normal ><ActionButtonMessages /></Td>
                                    </Tr>
                                    <Tr
                                        whileHover={{ boxShadow: '0px 2px 2px gray' }}
                                        whileTap={{ boxShadow: 'none' }}
                                    >
                                        <Td align='center' >From:</Td>
                                        <Td align='center' >Edmond Poe</Td>
                                        <Td align='center' >Reservation Payment</Td>
                                        <Td align='center' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et mattis urna. Nulla vel commodo massa. Proin a lectus pulvinar neque sollicitudin finibus. Curabitur mollis, tellus quis placerat sollicitudin, libero ipsum vulputate tortor, non vulputate mi lorem quis mauris. Duis sit amet gravida orci.</Td>
                                        <Td align='center' >03/01/2021</Td>
                                        <Td align='center' >09:10</Td>
                                        <Td align='center' ><ActionButtonMessages /></Td>
                                    </Tr>
                                    <Tr
                                        whileHover={{ boxShadow: '0px 2px 2px gray' }}
                                        whileTap={{ boxShadow: 'none' }}
                                    >
                                        <Td align='center' >From:</Td>
                                        <Td align='center' >Edmond Poe</Td>
                                        <Td align='center' >Reservation Payment</Td>
                                        <Td align='center' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et mattis urna. Nulla vel commodo massa. Proin a lectus pulvinar neque sollicitudin finibus. Curabitur mollis, tellus quis placerat sollicitudin, libero ipsum vulputate tortor, non vulputate mi lorem quis mauris. Duis sit amet gravida orci.</Td>
                                        <Td align='center' >03/01/2021</Td>
                                        <Td align='center' >08:10</Td>
                                        <Td align='center' ><ActionButtonMessages /></Td>
                                    </Tr>
                                    <Tr
                                        whileHover={{ boxShadow: '0px 2px 2px gray' }}
                                        whileTap={{ boxShadow: 'none' }}
                                    >
                                        <Td align='center' >From:</Td>
                                        <Td align='center' >Edmond Poe</Td>
                                        <Td align='center' >Reservation Payment</Td>
                                        <Td align='center' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et mattis urna. Nulla vel commodo massa. Proin a lectus pulvinar neque sollicitudin finibus. Curabitur mollis, tellus quis placerat sollicitudin, libero ipsum vulputate tortor, non vulputate mi lorem quis mauris. Duis sit amet gravida orci.</Td>
                                        <Td align='center' >03/01/2021</Td>
                                        <Td align='center' >07:10</Td>
                                        <Td align='center' ><ActionButtonMessages /></Td>
                                    </Tr>
                                </tbody>
                            </TableContainer>
                        </TableFixHead>
                    </TabPanel>
                    <TabPanel value="2">

                        <TableFixHead>
                            <TableContainer
                                cellspacing="0"
                                cellpadding="0"
                            >
                                <Tr>
                                    <Th align='center' style={{ width: '5%' }}></Th>
                                    <Th align='center' style={{ width: '10%' }}>Name</Th>
                                    <Th align='center' style={{ width: '20%' }}>Subject</Th>
                                    <Th align='center' style={{ width: '45%' }} >Message</Th>
                                    <Th align='center' style={{ width: '10%' }}>Date</Th>
                                    <Th align='center' style={{ width: '10%' }}>Time</Th>
                                    <Th align='center' style={{ width: '10%' }}>Action</Th>
                                </Tr>
                                <Tr
                                    style={{ backgroundColor: 'rgb(40,40,40, .05', }}
                                    whileHover={{ boxShadow: '0px 2px 2px gray' }}
                                    whileTap={{ boxShadow: 'none' }}
                                    onClick={() => setShow2(prev => !prev)}
                                >
                                    <Td align='center' normal>To:</Td>
                                    <Td align='center' normal>Pedro Juan</Td>
                                    <Td align='center' normal>Reservation Confirmationt</Td>
                                    <Td align='center' normal>
                                        Dear Pedro Juan,  We are pleased to inform you that your </Td>
                                    <Td align='center' normal>04/22/2021</Td>
                                    <Td align='center' normal>20:30</Td>
                                    <Td align='center' normal><ActionButtonMessages /></Td>
                                </Tr>
                                <Tr
                                    style={{ backgroundColor: 'rgb(40,40,40, .05', }}
                                    whileHover={{ boxShadow: '0px 2px 2px gray' }}
                                    whileTap={{ boxShadow: 'none' }}
                                >
                                    <Td align='center' normal>To:</Td>
                                    <Td align='center' normal >Pedro Juan</Td>
                                    <Td align='center' normal >Reservation Payment</Td>
                                    <Td align='center' normal >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et mattis urna. Nulla vel commodo massa. Proin a lectus pulvinar neque sollicitudin finibus. Curabitur mollis, tellus quis placerat sollicitudin, libero ipsum vulputate tortor, non vulputate mi lorem quis mauris. Duis sit amet gravida orci.</Td>
                                    <Td align='center' normal >03/01/2022</Td>
                                    <Td align='center' normal >11:10</Td>
                                    <Td align='center' normal ><ActionButtonMessages /></Td>
                                </Tr>
                                <Tr
                                    style={{ backgroundColor: 'rgb(40,40,40, .05', }}
                                    whileHover={{ boxShadow: '0px 2px 2px gray' }}
                                    whileTap={{ boxShadow: 'none' }}
                                >
                                    <Td align='center' normal>To:</Td>
                                    <Td align='center' normal>Edmond Poe</Td>
                                    <Td align='center' normal>Reservation Payment</Td>
                                    <Td align='center' normal>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et mattis urna. Nulla vel commodo massa. Proin a lectus pulvinar neque sollicitudin finibus. Curabitur mollis, tellus quis placerat sollicitudin, libero ipsum vulputate tortor, non vulputate mi lorem quis mauris. Duis sit amet gravida orci.</Td>
                                    <Td align='center' normal>03/01/2021</Td>
                                    <Td align='center' normal>07:10</Td>
                                    <Td align='center' normal><ActionButtonMessages /></Td>
                                </Tr>
                            </TableContainer>
                        </TableFixHead>
                    </TabPanel>
                </TabContext>





            </ContainerGlobal>

            <Button
                variant="contained"
                size="large"
                style={{ backgroundColor: '#2f2f2f' }}
                onClick={() => setShowComposeMessage(prev => !prev)}
            >

                Compose message
            </Button>



            <Grow in={show}>{viewMessage}</Grow>
            <Grow in={show2}>{viewSentMessage}</Grow>

            <Grow in={showComposeMessage}>{composeMessage}</Grow>
        </Container>
    )
}

export default MessagesContainer