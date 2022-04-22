import React, { useState } from 'react'
import { Title } from '../../../client/components/title/styles'
import { ContainerGlobal } from '../../components/container/container'
import { Container, HeadContainer, TableContainer, Td, Th, Tr } from './style'
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

const StatusContainer = () => {

    const [value, setValue] = useState(Date.now());
    const color = "#c44242";
    const [age, setAge] = React.useState('');


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
                    Check Status of Clients
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
                        style={{ width: 500 }} />
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
                    <FormControl sx={{ m: 1, minWidth: 120, }} size="small">
                        <InputLabel id="demo-select-small" >Menu</InputLabel>
                        <Select
                            style={{ color: 'black', fontWeight: 'bold' }}
                            labelId="roomType-select-small"
                            id="demo-select-small"
                            value={age}
                            label="Menu"
                            onChange={(event) => {
                                setAge(event.target.value);
                            }}

                        >

                            <MenuItem value={'Check-in'} selected>Check-in</MenuItem>
                            <MenuItem value={'Check-out'}>Check-out</MenuItem>
                        </Select>
                    </FormControl>
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
                h='65vh'
                bg='white'
                direction='column'
                padding='30px'
                margin='20px 0px 20px 0px'
                gap='10px'
            >
                <Title
                    size='26px'
                    color='black'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Client Status
                </Title>

                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                ></HorizontalLine>




                <TableContainer>
                    <Tr>
                        <Th align='center'>Name</Th>
                        <Th align='center'>Total Bookings</Th>
                        <Th align='center'>Status</Th>
                        <Th align='center'>Account Created</Th>
                        <Th align='center'>Last Seen</Th>
                        <Th align='center'>Action</Th>
                    </Tr>
                    <Tr>
                        <Td align='center'>Don G.</Td>
                        <Td align='center'>5</Td>
                        <Td align='center'>Active</Td>
                        <Td align='center'>01/15/21</Td>
                        <Td align='center'>10/24/21</Td>
                        <Td align='center'>...</Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>Kwasimodo H.</Td>
                        <Td align='center'>4</Td>
                        <Td align='center'>Inactive</Td>
                        <Td align='center'>04/15/21</Td>
                        <Td align='center'>9/24/21</Td>
                        <Td align='center'>...</Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>Yumiyacha L.</Td>
                        <Td align='center'>4</Td>
                        <Td align='center'>Active</Td>
                        <Td align='center'>02/14/21</Td>
                        <Td align='center'>10/27/21</Td>
                        <Td align='center'>...</Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>Don Gachapon.</Td>
                        <Td align='center'>4</Td>
                        <Td align='center'>Inactive</Td>
                        <Td align='center'>07/5/21</Td>
                        <Td align='center'>9/2/21</Td>
                        <Td align='center'>...</Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>Crystal A.</Td>
                        <Td align='center'>6</Td>
                        <Td align='center'>Active</Td>
                        <Td align='center'>09/18/21</Td>
                        <Td align='center'>10/8/21</Td>
                        <Td align='center'>...</Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>Amelrie K.</Td>
                        <Td align='center'>7</Td>
                        <Td align='center'>Inactive</Td>
                        <Td align='center'>02/19/21</Td>
                        <Td align='center'>07/2/21</Td>
                        <Td align='center'>...</Td>
                    </Tr>
                </TableContainer>
            </ContainerGlobal>
        </Container>
    )
}

export default StatusContainer