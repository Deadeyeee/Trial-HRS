import React, { useState } from 'react'
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
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';
import { Theme, useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ActionButton from '../../components/actionButton/ActionButton';



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
    width: '800px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    overflow: 'scroll',
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Free Wifi',
    'Television',
    'Wash Room',
    'Mineral Water',
    'Spotless Linen',
    'Amenities',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const AdditionalsContainer = () => {

    const [value, setValue] = useState(Date.now());
    const color = "#c44242";
    const [age, setAge] = React.useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);


    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);

    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
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
                    Manage Additional Amenities
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
                        style={{ width: '98%' }} />


                </ContainerGlobal>
            </ContainerGlobal>

            <ContainerGlobal
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
                    Additionals
                </Title>
                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                >
                </HorizontalLine>

                <TableContainer>
                    <Tr>
                        <Th align='center'>Name <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Price <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Action</Th>
                    </Tr>
                    <Tr>
                        <Td align='center'>Bed</Td>
                        <Td align='center'>PHP 500.00</Td>
                        <Td align='center'><ActionButton
                            view={handleOpen2}
                            edit={handleOpen3} /></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>Pillow</Td>
                        <Td align='center'>PHP 100.00</Td>
                        <Td align='center'><ActionButton /></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>Blanket</Td>
                        <Td align='center'>PHP 200.00</Td>
                        <Td align='center'><ActionButton /></Td>
                    </Tr>

                </TableContainer>
            </ContainerGlobal>

            <Button
                variant="contained"
                size="large"
                onClick={handleOpen}
                style={{ backgroundColor: '#2E2E2E' }}>
                Add amenities
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{ overflow: 'scroll' }}
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
                        Additional Amenities
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
                            placeholder='Additional Name'
                            label="Additional Name"
                            variant="outlined"
                            style={{ width: '55%', }} />

                        <TextField
                            placeholder='Price'
                            label="Price"
                            variant="outlined"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">PHP</InputAdornment>,
                            }}
                            style={{ width: '55%', }} />
                    </InputContainer>

                    <InputContainer
                        style={{ marginTop: '40px', }}>

                        <Button variant="contained" size="large"
                            style={{ backgroundColor: '#50AA32' }}
                            onClick={handleClose}>
                            Add
                        </Button>
                        <Button variant="contained" size="large"
                            style={{ backgroundColor: '#FF2400' }}
                            onClick={handleClose}>
                            Cancel
                        </Button>

                    </InputContainer>
                </Box>
            </Modal>





            <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{ overflow: 'scroll' }}
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
                        Additional Amenities
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
                            placeholder='Additional Name'
                            label="Additional Name"
                            defaultValue='Bed'
                            variant="outlined"

                            InputProps={{
                                readOnly: 'true'
                            }}
                            style={{ width: '55%', }} />

                        <TextField
                            placeholder='Price'
                            label="Price"
                            defaultValue='500.00'
                            variant="outlined"
                            InputProps={{
                                readOnly: 'true',
                                startAdornment: <InputAdornment position="start">PHP</InputAdornment>,
                            }}
                            style={{ width: '55%', }} />
                    </InputContainer>

                    <InputContainer
                        style={{ marginTop: '40px', }}>

                        <Button variant="contained" size="large"
                            style={{ backgroundColor: '#50AA32' }}
                            onClick={handleClose2}>
                            Ok
                        </Button>

                    </InputContainer>
                </Box>
            </Modal>








            <Modal
                open={open3}
                onClose={handleClose3}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{ overflow: 'scroll' }}
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
                        Additional Amenities
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
                            placeholder='Additional Name'
                            label="Additional Name"
                            defaultValue='Bed'
                            variant="outlined"

                            InputProps={{
                            }}
                            style={{ width: '55%', }} />

                        <TextField
                            placeholder='Price'
                            label="Price"
                            defaultValue='500.00'
                            variant="outlined"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">PHP</InputAdornment>,
                            }}
                            style={{ width: '55%', }} />
                    </InputContainer>

                    <InputContainer
                        style={{ marginTop: '40px', }}>

                        <Button variant="contained" size="large"
                            style={{ backgroundColor: '#50AA32' }}
                            onClick={handleClose3}>
                            Save Changes
                        </Button>
                        <Button variant="contained" size="large"
                            style={{ backgroundColor: '#FF2400' }}
                            onClick={handleClose3}>
                            Cancel
                        </Button>

                    </InputContainer>
                </Box>
            </Modal>



        </Container >
    )
}

export default AdditionalsContainer