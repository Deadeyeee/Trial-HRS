import React from 'react'
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine'
import { Title } from '../../../client/components/title/styles'
import { ContainerGlobal } from '../../components/container/container'
import { Container, HeadContainer, TableContainer, Td, Th, Tr } from './style'
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { InputContainer } from '../../../client/containers/informationForm/style';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const style = {
    position: 'absolute',
    display: 'flex',
    top: '50%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center ',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    height: 'auto',
    overflow: 'hidden',
    width: '40%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: '20px 30px 40px 30px',
    borderRadius: '.5rem',
};

const RoomStatusContainer = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [roomType, setroomType] = React.useState('');

    const handleChange = (event) => {
        setroomType(event.target.value);
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
                    Room Availability and Status
                </Title>
            </HeadContainer>
            <ContainerGlobal>


            </ContainerGlobal>
            <ContainerGlobal
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 1 }}
                w='90%'
                h='auto'
                bg='white'
                direction='column'
                padding='30px'
                margin='20px 0px 50px 0px'
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
                    Room Status
                </Title>
                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                >
                </HorizontalLine>
                <TableContainer>
                    <Tr>
                        <Th align='center'>Room No.</Th>
                        <Th align='center'>Room Type</Th>
                        <Th align='center'>Booking Date</Th>
                        <Th align='center'>Check in</Th>
                        <Th align='center'>Check out</Th>
                        <Th align='center'>Room Status</Th>
                        <Th align='center'>Action</Th>
                    </Tr>
                    <Tr>
                        <Td align='center'>101</Td>
                        <Td align='center'>Deluxe</Td>
                        <Td align='center'>.........</Td>
                        <Td align='center'>.........</Td>
                        <Td align='center'>.........</Td>
                        <Td align='center'>
                            <ContainerGlobal
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
                                    Vacant
                                </Title></ContainerGlobal>
                        </Td>
                        <Td align='center'>...</Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>102</Td>
                        <Td align='center'>Deluxe</Td>
                        <Td align='center'>.........</Td>
                        <Td align='center'>.........</Td>
                        <Td align='center'>.........</Td>
                        <Td align='center'>
                            <ContainerGlobal
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
                                    Vacant
                                </Title></ContainerGlobal></Td>
                        <Td align='center'>...</Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>103</Td>
                        <Td align='center'>Premium</Td>
                        <Td align='center'>05/20/21</Td>
                        <Td align='center'>05/25/21</Td>
                        <Td align='center'>05/29/21</Td>
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
                                    Occupied
                                </Title></ContainerGlobal></Td>
                        <Td align='center'>...</Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>104</Td>
                        <Td align='center'>Deluxe</Td>
                        <Td align='center'>.........</Td>
                        <Td align='center'>.........</Td>
                        <Td align='center'>.........</Td>
                        <Td align='center'>
                            <ContainerGlobal
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
                                    Vacant
                                </Title></ContainerGlobal>
                        </Td>
                        <Td align='center'>...</Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>105</Td>
                        <Td align='center'>Premium</Td>
                        <Td align='center'>05/20/21</Td>
                        <Td align='center'>05/25/21</Td>
                        <Td align='center'>05/29/21</Td>
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
                                    Maintenance
                                </Title></ContainerGlobal></Td>
                        <Td align='center'>...</Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>106</Td>
                        <Td align='center'>Deluxe</Td>
                        <Td align='center'>05/20/21</Td>
                        <Td align='center'>05/25/21</Td>
                        <Td align='center'>05/29/21</Td>
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
                                    Occupied
                                </Title></ContainerGlobal></Td>
                        <Td align='center'>...</Td>
                    </Tr>
                </TableContainer>
            </ContainerGlobal>
            <Button
                variant="contained"
                size="large"
                onClick={handleOpen}
                style={{ backgroundColor: '#2E2E2E' }}>
                Add Room
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Title
                        size='33px'
                        color='black'
                        family='Helvetica'
                        fstyle='normal'
                        weight='600'
                        align='left'
                        margin='0px 0px 20px 0px'
                    >
                        Add Room
                    </Title>

                    <HorizontalLine
                        bg='gray'
                        w='100%'
                        margin='0px 0px 40px 0px'
                    ></HorizontalLine>

                    <InputContainer
                        w='90%'
                    >
                        <TextField
                            placeholder='Room Number'
                            label="Room No."
                            variant="outlined"
                            style={{ width: '50%', }} />

                        <FormControl
                            variant="outlined"
                            sx={{ width: '50%', }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Room Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={roomType}
                                onChange={handleChange}
                                label="roomType"
                            >
                                <MenuItem value={"Family"}>Family</MenuItem>
                                <MenuItem value={"Premium"}>Premium</MenuItem>
                                <MenuItem value={"Deluxe"}>Deluxe</MenuItem>
                            </Select>
                        </FormControl>

                    </InputContainer>

                    <InputContainer
                        style={{ marginTop: '40px', }}>

                        <Button
                            variant="contained"
                            size="large"
                            style={{ backgroundColor: "rgba(219, 51, 51, 1)" }}
                            onClick={handleClose}>
                            Cancel
                        </Button>

                        <Button
                            variant="contained"
                            size="large"
                            style={{ backgroundColor: '#0C4426' }}
                            onClick={handleClose}>
                            Add
                        </Button>

                    </InputContainer>
                </Box>
            </Modal>
        </Container>
    )
}

export default RoomStatusContainer