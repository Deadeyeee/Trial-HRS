import React, { useState } from 'react'
import { Title } from '../../../client/components/title/styles'
import { ContainerGlobal } from '../../components/container/container'
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
import { FormControlLabel, FormControl } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Select from '@mui/material/Select';
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine'
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import ActionButtonMessages from '../../components/actionButton/ActionButtonMessages';

const MessagesContainer = () => {

    const [value, setValue] = useState(Date.now());
    const color = "#c44242";
    const [age, setAge] = React.useState('');


    const [value2, setValue2] = React.useState('1');

    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
    };

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
                        startIcon={<FilterAltIcon />}>
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
                                    <Tr>
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
                                    >
                                        <Td align='center' normal>From:</Td>
                                        <Td align='center' normal >Pedro Juan</Td>
                                        <Td align='center' normal >Reservation Payment</Td>
                                        <Td align='center' normal >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et mattis urna. Nulla vel commodo massa. Proin a lectus pulvinar neque sollicitudin finibus. Curabitur mollis, tellus quis placerat sollicitudin, libero ipsum vulputate tortor, non vulputate mi lorem quis mauris. Duis sit amet gravida orci.</Td>
                                        <Td align='center' normal >03/01/2022</Td>
                                        <Td align='center' normal >11:10</Td>
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
                                >
                                    <Td align='center' normal>To:</Td>
                                    <Td align='center' normal>Jasper Paul</Td>
                                    <Td align='center' normal>Payment</Td>
                                    <Td align='center' normal>
                                        LLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et mattis urna. Nulla vel commodo massa. Proin a lectus pulvinar neque sollicitudin finibus. Curabitur mollis, tellus quis placerat sollicitudin, libero ipsum vulputate tortor, non vulputate mi lorem quis mauris. Duis sit amet gravida orci.
                                    </Td>
                                    <Td align='center' normal>03/04/2022</Td>
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
                style={{ backgroundColor: '#2f2f2f' }}>
                Compose message
            </Button>
        </Container>
    )
}

export default MessagesContainer