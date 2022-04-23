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
    height: '880px',
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

const RoomDetailsContainer = () => {

    const [value, setValue] = useState(Date.now());
    const color = "#c44242";
    const [age, setAge] = React.useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    Room Details
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
                Lorem
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
                        <Th align='center'>Services</Th>
                        <Th align='center'>Description</Th>
                        <Th align='center'>Action</Th>
                    </Tr>
                    <Tr>
                        <Td align='center'>Family Room</Td>
                        <Td align='center'>PHP 2,500</Td>
                        <Td align='center'>
                            Free Wifi, Television, Washroom, Mineral Water, Spotless Linen, Amenities
                        </Td>
                        <Td align='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat mattis leo, rutrum mollis risus lacinia at. Ut luctus pretium massa, a aliquet diam posuere id.</Td>
                        <Td align='center'><ActionButton/></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>Deluxe Room</Td>
                        <Td align='center'>PHP 1,500</Td>
                        <Td align='center'>
                            Free Wifi, Television, Washroom, Mineral Water, Amenities
                        </Td>
                        <Td align='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat mattis leo, rutrum mollis risus lacinia at. Ut luctus pretium massa, a aliquet diam posuere id.</Td>
                        <Td align='center'><ActionButton/></Td>
                    </Tr>
                    <Tr>
                        <Td align='center'>Premium Room</Td>
                        <Td align='center'>PHP 1,000</Td>
                        <Td align='center'>
                            Free Wifi, Washroom, Amenities
                        </Td>
                        <Td align='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat mattis leo, rutrum mollis risus lacinia at. Ut luctus pretium massa, a aliquet diam posuere id.</Td>
                        <Td align='center'><ActionButton/></Td>
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
                            placeholder='Rate per Night'
                            label="Rate per Night"
                            variant="outlined"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">PHP</InputAdornment>,
                            }}
                            style={{ width: '55%', }} />
                    </InputContainer>

                    <InputContainer
                        w='90%'
                        style={{ marginTop: '40px', }}>
                        <FormControl style={{ width: '50%' }}>
                            <InputLabel id="demo-multiple-name-label">Services</InputLabel>
                            <Select
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput id="select-multiple-chip" label="Services" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} />
                                        ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <TextField
                            placeholder='Room Type'
                            label="Room Description"
                            multiline
                            maxRows={4}
                            variant="outlined"
                            style={{ width: '50%', }} />
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
        </Container >
    )
}

export default RoomDetailsContainer