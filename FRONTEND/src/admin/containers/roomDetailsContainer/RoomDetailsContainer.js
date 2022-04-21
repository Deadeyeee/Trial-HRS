import React from 'react'
import Button from '@mui/material/Button';
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine'
import { Title } from '../../../client/components/title/styles'
import { ContainerGlobal } from '../../components/container/container'
import { Container, HeadContainer, TableContainer, Td, Th, Tr } from './style'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { InputContainer } from '../../../client/containers/informationForm/style';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import delux from '../../../client/images/RoomsIMG/delux.jpg';
import prm from '../../../client/images/RoomsIMG/premium.jpg';
import InputAdornment from '@mui/material/InputAdornment';

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

const Input = styled('input')({
    display: 'none',
});

const itemData = [
    {
        img: delux,
    },
    {
        img: prm,
    },
    {
        img: '',
    },
    {
        img: '',
    },
    {
        img: '',
    },
    {
        img: '',
    },
    {
        img: '',
    },
    {
        img: '',
    },
    {
        img: '',
    },
];

const RoomDetailsContainer = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    Room Details
                </Title>
            </HeadContainer>
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
                    Room Details
                </Title>
                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                >
                </HorizontalLine>
                <TableContainer>
                    <Tr>
                        <Th align='center'>Room Type</Th>
                        <Th align='center'>Rate/Night</Th>
                        <Th align='center'>Description</Th>
                        <Th align='center'>Action</Th>
                    </Tr>
                    <Tr>
                        <Td align='center'>Family Room</Td>
                        <Td align='center'>PHP 2,500</Td>
                        <Td align='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat mattis leo, rutrum mollis risus lacinia at. Ut luctus pretium massa, a aliquet diam posuere id.</Td>
                        <Td align='center'>...</Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>Premium Room</Td>
                        <Td align='center'>PHP 3,500</Td>
                        <Td align='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat mattis leo, rutrum mollis risus lacinia at. Ut luctus pretium massa, a aliquet diam posuere id.</Td>
                        <Td align='center'>...</Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>Deluxe Room</Td>
                        <Td align='center'>PHP 5,000</Td>
                        <Td align='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat mattis leo, rutrum mollis risus lacinia at. Ut luctus pretium massa, a aliquet diam posuere id.</Td>
                        <Td align='center'>...</Td>
                    </Tr>
                </TableContainer>
            </ContainerGlobal>

            <Button
                variant="contained"
                size="large"
                onClick={handleOpen}
                style={{ backgroundColor: '#2E2E2E' }}>
                Add Room Type
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
                        Add Room Type
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
                            placeholder='Room Type'
                            label="Room Type"
                            variant="outlined"
                            style={{ width: '55%', }} />

                        <TextField
                            placeholder='Room Type'
                            label="Room Description"
                            multiline
                            maxRows={4}
                            variant="outlined"
                            style={{ width: '55%', }} />
                            
                        <TextField
                            placeholder='Rate per Night'
                            label="Rate per Night"
                            variant="outlined"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">PHP</InputAdornment>,
                            }}
                            style={{ width: '55%', }} />

                    </InputContainer>

                    <Typography id="modal-modal-title" variant="h5" component="h2"
                        style={{ textAlign: 'center', margin: '20px 0px 0px 0px', }}>
                        Upload Photo
                    </Typography>

                    <InputContainer>

                        <ImageList sx={{ width: '100%', height: 360 }} cols={1} rowHeight={164}>
                            {itemData.map((item) => (
                                <ImageListItem
                                    style={{
                                        backgroundColor: 'rgba(0, 0, 0, .1)',
                                        width: 'auto', display: 'flex', justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundImage: `url(${item.img})`,
                                        backgroundSize: 'cover',

                                    }}>

                                    <label htmlFor="icon-button-file">
                                        <Input accept="image/*" id="icon-button-file" type="file" />
                                        <IconButton aria-label="upload picture" component="span"
                                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', }} >
                                            <PhotoCamera
                                                style={{ color: '#CCA041', fontSize: '60px', }} />
                                        </IconButton>
                                    </label>
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </InputContainer>


                    <InputContainer>

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

export default RoomDetailsContainer