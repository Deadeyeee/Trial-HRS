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
import ActionButton from '../../components/actionButton/ActionButton';
import InformationForm from '../../../client/containers/informationForm/InformationForm';
import { AdminInformationForm, AdminInformationFormFilled, AdminInformationFormFilledEdit } from '../adminInformationForm/AdminInformationForm';
import Grow from '@mui/material/Grow';

const StatusContainer = () => {

    const [value, setValue] = useState(Date.now());
    const color = "#c44242";
    const [age, setAge] = React.useState('');
    
    const [showDetails, setShowDetails] = useState(false);

    const [showDetails2, setShowDetails2] = useState(false);
    const [showDetails3, setShowDetails3] = useState(false);

    
    const addUser = (
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
                w='auto'
                h='auto'
                bg='white'
                direction='column'
                padding='30px'
                gap='10px'
                justify='center'
                align='center'
                margin='0px 0px 0px 0px'
            >
                <Title
                    size='26px'
                    color='black'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Create Guest Account
                </Title>
                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px 0px 20px 0px'
                ></HorizontalLine>
                <AdminInformationForm></AdminInformationForm>
                <ContainerGlobal gap='30px' overflow='visible' margin='20px 0px 0px 0px'>
                    <Button variant="contained" size="large"
                        style={{ backgroundColor: '#50AA32' }}
                        onClick={() => setShowDetails(prev => !prev)}>
                        Create Account
                    </Button>
                    <Button variant="contained" size="large"
                        style={{ backgroundColor: '#FF2400' }}
                        onClick={() => setShowDetails(prev => !prev)}>
                        Cancel
                    </Button>
                </ContainerGlobal>
            </ContainerGlobal>

        </ContainerGlobal>
    );


    const viewUser = (
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
                w='auto'
                h='auto'
                bg='white'
                direction='column'
                padding='30px'
                gap='10px'
                justify='center'
                align='center'
                margin='0px 0px 0px 0px'
            >
                <Title
                    size='26px'
                    color='black'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    View Guest Account
                </Title>
                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px 0px 20px 0px'
                ></HorizontalLine>
                <AdminInformationFormFilled></AdminInformationFormFilled>
                <ContainerGlobal gap='30px' overflow='visible' margin='20px 0px 0px 0px'>
                    <Button variant="contained" size="large"
                        style={{ backgroundColor: '#50AA32' }}
                        onClick={() => setShowDetails2(prev => !prev)}>
                        Ok
                    </Button>
                </ContainerGlobal>
            </ContainerGlobal>

        </ContainerGlobal>
    );



    const editUser = (
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
                w='auto'
                h='auto'
                bg='white'
                direction='column'
                padding='30px'
                gap='10px'
                justify='center'
                align='center'
                margin='0px 0px 0px 0px'
            >
                <Title
                    size='26px'
                    color='black'
                    family='Helvetica'
                    fstyle='normal'
                    weight='600'
                    align='left'
                >
                    Edit Guest Account
                </Title>
                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px 0px 20px 0px'
                ></HorizontalLine><AdminInformationFormFilledEdit/>
                <ContainerGlobal gap='30px' overflow='visible' margin='20px 0px 0px 0px'>
                <Button variant="contained" size="large"
                        style={{ backgroundColor: '#50AA32' }}
                        onClick={() => setShowDetails3(prev => !prev)}>
                        Save Changes
                    </Button>
                    <Button variant="contained" size="large"
                        style={{ backgroundColor: '#FF2400' }}
                        onClick={() => setShowDetails3(prev => !prev)}>
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
                    Check Status of Guests
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

                            <MenuItem value={'Check-in'} selected>Account Created</MenuItem>
                            <MenuItem value={'Check-out'}>Last Seen</MenuItem>
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
                h='55vh'
                bg='white'
                direction='column'
                padding='30px'
                margin='20px 0px 30px 0px'
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
                    Guest Status
                </Title>

                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                ></HorizontalLine>




                <TableContainer>
                    <Tr>
                        <Th align='center'>Name <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Total Bookings <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Status <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Account Created <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Last Seen <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Action</Th>
                    </Tr>
                    <Tr>
                        <Td align='center'>Don G.</Td>
                        <Td align='center'>5</Td>
                        <Td align='center'>
                            <ContainerGlobal
                                w='100px'
                                h='auto'
                                margin='0px auto'
                                bg='rgb(253, 161, 114, .2)'
                                direction='row'
                                padding='2px 0px'
                                justify='center'
                                align='center'
                                border='2px solid rgb(255, 215, 0)'
                                gap='10px'
                                borderRadius='.5rem'
                            >

                                <Title
                                    family='Helvetica'
                                    size='12px'
                                    color='BLACK'
                                    fstyle='normal'
                                    display='inline'
                                    padding='5px 10px'
                                >
                                    Booked
                                </Title></ContainerGlobal></Td>
                        <Td align='center'>01/15/21</Td>
                        <Td align='center'>10/24/21</Td>
                        <Td align='center'><ActionButton view={() => setShowDetails2(prev => !prev)}
                        edit={() => setShowDetails3(prev => !prev)}
                        
                        /></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>Kwasimodo H.</Td>
                        <Td align='center'>4</Td>
                        <Td align='center'>
                            <ContainerGlobal
                                w='100px'
                                h='auto'
                                margin='0px auto'
                                bg='rgb(253, 161, 114, .2)'
                                direction='row'
                                padding='2px 0px'
                                justify='center'
                                align='center'
                                border='2px solid rgb(255, 215, 0)'
                                gap='10px'
                                borderRadius='.5rem'
                            >
                                <Title
                                    family='Helvetica'
                                    size='12px'
                                    color='BLACK'
                                    fstyle='normal'
                                    display='inline'
                                    padding='5px 10px'
                                >
                                    Booked
                                </Title>
                            </ContainerGlobal>
                        </Td>
                        <Td align='center'>04/15/21</Td>
                        <Td align='center'>9/24/21</Td>
                        <Td align='center'><ActionButton /></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>Yumiyacha L.</Td>
                        <Td align='center'>4</Td>
                        <Td align='center'><ContainerGlobal
                            w='100px'
                            h='auto'
                            margin='0px auto'
                            bg='rgb(118, 185, 71, .2)'
                            direction='row'
                            padding='2px 0px'
                            justify='center'
                            align='center'
                            border='2px solid rgb(118, 185, 71)'
                            gap='10px'
                            borderRadius='.5rem'
                        >

                            <Title
                                family='Helvetica'
                                size='12px'
                                color='BLACK'
                                fstyle='normal'
                                display='inline'
                                padding='5px 10px'
                            >
                                Active
                            </Title></ContainerGlobal></Td>
                        <Td align='center'>02/14/21</Td>
                        <Td align='center'>10/27/21</Td>
                        <Td align='center'><ActionButton /></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>Don Gachapon.</Td>
                        <Td align='center'>4</Td>
                        <Td align='center'>
                            <ContainerGlobal
                                w='100px'
                                h='auto'
                                margin='0px auto'
                                bg='rgb(244,194,194, .2)'
                                direction='row'
                                padding='2px 0px'
                                justify='center'
                                align='center'
                                border='2px solid rgb(255, 36, 0)'
                                gap='10px'
                                borderRadius='.5rem'
                            >
                                <Title
                                    family='Helvetica'
                                    size='12px'
                                    color='BLACK'
                                    fstyle='normal'
                                    display='inline'
                                    padding='5px 10px'
                                >
                                    Inactive
                                </Title>
                            </ContainerGlobal>
                        </Td>
                        <Td align='center'>07/5/21</Td>
                        <Td align='center'>9/2/21</Td>
                        <Td align='center'><ActionButton /></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>Crystal A.</Td>
                        <Td align='center'>6</Td>
                        <Td align='center'><ContainerGlobal
                            w='100px'
                            h='auto'
                            margin='0px auto'
                            bg='rgb(118, 185, 71, .2)'
                            direction='row'
                            padding='2px 0px'
                            justify='center'
                            align='center'
                            border='2px solid rgb(118, 185, 71)'
                            gap='10px'
                            borderRadius='.5rem'
                        >

                            <Title
                                family='Helvetica'
                                size='12px'
                                color='BLACK'
                                fstyle='normal'
                                display='inline'
                                padding='5px 10px'
                            >
                                Active
                            </Title></ContainerGlobal></Td>
                        <Td align='center'>09/18/21</Td>
                        <Td align='center'>10/8/21</Td>
                        <Td align='center'><ActionButton /></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>Amelrie K.</Td>
                        <Td align='center'>7</Td>
                        <Td align='center'>
                            <ContainerGlobal
                                w='100px'
                                h='auto'
                                margin='0px auto'
                                bg='rgb(244,194,194, .2)'
                                direction='row'
                                padding='2px 0px'
                                justify='center'
                                align='center'
                                border='2px solid rgb(255, 36, 0)'
                                gap='10px'
                                borderRadius='.5rem'
                            >
                                <Title
                                    family='Helvetica'
                                    size='12px'
                                    color='BLACK'
                                    fstyle='normal'
                                    display='inline'
                                    padding='5px 10px'
                                >
                                    Inactive
                                </Title>
                            </ContainerGlobal>
                        </Td>
                        <Td align='center'>02/19/21</Td>
                        <Td align='center'>07/2/21</Td>
                        <Td align='center'><ActionButton /></Td>
                    </Tr>
                </TableContainer>
            </ContainerGlobal>
            <Button variant="contained" size="large"
                style={{ backgroundColor: '#2E2E2E' }}
                onClick={() => setShowDetails(prev => !prev)}>
                Create Guest Account
            </Button>

            
            <Grow in={showDetails}>{addUser}</Grow>
            <Grow in={showDetails2}>{viewUser}</Grow>
            <Grow in={showDetails3}>{editUser}</Grow>

        </Container>
    )
}

export default StatusContainer