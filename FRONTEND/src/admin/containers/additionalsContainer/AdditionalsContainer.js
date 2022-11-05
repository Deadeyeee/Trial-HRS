import React, { useEffect, useState } from 'react'
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
import axios from 'axios';
import { apiKey } from '../../../apiKey';



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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;



const AdditionalsContainer = () => {
    const [amenity, setAmenity] = useState([]);

    const [selectedAmenity, setSelectedAmenity] = useState([])
    const [reloadData, setReloadData] = useState(0)
    const [amenityRate, setAmenityRate] = useState(0)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = (value) => {
        setSelectedAmenity(value)
        setOpen2(true)
    };


    const handleClose2 = () => {
        setOpen2(false)
        setSelectedAmenity([])
    };


    const [open3, setOpen3] = React.useState(false);

    const handleOpen3 = (value) => {
        setSelectedAmenity(value)
        setAmenityRate(parseFloat(value.amenityRate).toFixed(2))
        setOpen3(true)
    };

    const handleClose3 = () => {
        setSelectedAmenity([])
        setAmenityRate(0)
        setReloadData(reloadData + 1)
        setOpen3(false)
    };


    const numberFormat = (value) =>
        new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'PHP'
        }).format(value);


    useEffect(() => {
        axios.get(apiKey + 'api/getAllAmenities').then((result) => {
            console.log(result)
            setAmenity(result.data)
        }).catch((err) => {
            console.log(err)

        });

    }, [reloadData])

    const editAmenityRate = (e)=>{
        e.preventDefault()
        axios.patch(apiKey + 'api/updateAmenities/' + selectedAmenity.id, {
            amenityRate: amenityRate,
        }).then((result) => {
            console.log(result.data)
            handleClose3();
        }).catch((err) => {
            console.log(err)
            
        });
    }


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
                    {amenity.length != 0 ?
                        amenity.map((item) => (
                            <Tr>
                                <Td align='center'>{item.amenityName}</Td>
                                <Td align='center'>{numberFormat(item.amenityRate)}</Td>
                                <Td align='center'><ActionButton
                                        dontShowDelete=''

                                    view={() => handleOpen2(item)}
                                    edit={()=> handleOpen3(item)} /></Td>
                            </Tr>
                        ))
                        : 'empty'}
                    {/* <Tr>
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
                    </Tr> */}

                </TableContainer>
            </ContainerGlobal>


           





            <Modal
                open={open2}
                onClose={handleClose2}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Box
                    component='form'
                    // onSubmit={addReservation}
                    style={{
                        height: '35vh',
                        width: 'auto',
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
                        position: 'relative'
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
                            View additional
                        </Title>
                        <CloseIcon
                            onClick={handleClose2}
                            style={{
                                color: 'white',
                                cursor: 'pointer',
                                margin: '10px',
                            }} />
                    </div>

                    <div style={{ display: 'flex', height: '100%', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
                        <InputContainer
                            w='90%'
                        >
                            <TextField
                                placeholder='Additional Name'
                                label="Additional Name"
                                defaultValue={selectedAmenity.length != 0 ? selectedAmenity.amenityName : ''}
                                variant="outlined"
                                InputProps={{
                                    readOnly: 'true'
                                }}
                                style={{ width: '55%', }} />

                            <TextField
                                placeholder='Price'
                                label="Price"
                                defaultValue={selectedAmenity.length != 0 ? parseFloat(selectedAmenity.amenityRate).toFixed(2) : ''}
                                variant="outlined"
                                InputProps={{
                                    readOnly: 'true',
                                    startAdornment: <InputAdornment position="start">₱</InputAdornment>,
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
                    </div>
                </Box>
            </Modal>








            <Modal
                open={open3}
                onClose={handleClose3}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Box
                    component='form'
                    onSubmit={editAmenityRate}
                    style={{
                        height: '35vh',
                        width: 'auto',
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
                        position: 'relative'
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
                            Edit additional
                        </Title>
                        <CloseIcon
                            onClick={handleClose3}
                            style={{
                                color: 'white',
                                cursor: 'pointer',
                                margin: '10px',
                            }} />
                    </div>

                    <div style={{ display: 'flex', height: '100%', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
                    <InputContainer
                        w='90%'
                    >
                        <TextField
                            placeholder='Additional Name'
                            label="Additional Name"
                            variant="outlined"
                            disabled
                            value={selectedAmenity.amenityName}
                            style={{ width: '55%', }} />

                        <TextField
                            placeholder='Price'
                            label="Price"
                            variant="outlined"
                            value={amenityRate}
                            
                            onChange={(e)=>{
                                if(e.target.value < 0){
                                    setAmenityRate(0)
                                }
                                else if(e.target.value > 999999999999){
                                    setAmenityRate(999999999999)
                                }
                                else{
                                    setAmenityRate(e.target.value)
                                }
                            }}
                            required
                            type='number'
                            InputProps={{
                                startAdornment: <InputAdornment position="start">₱</InputAdornment>,
                            }}
                            style={{ width: '55%', }} />
                    </InputContainer>

                    <InputContainer
                        style={{ marginTop: '40px', }}>

                        <Button variant="contained" size="large"
                            style={{ backgroundColor: '#50AA32' }}
                            type='submit'>
                            Save Changes
                        </Button>
                        <Button variant="contained" size="large"
                            style={{ backgroundColor: '#FF2400' }}
                            onClick={handleClose3}>
                            Cancel
                        </Button>

                    </InputContainer>
                </div>
            </Box>
        </Modal>



        </Container >
    )
}

export default AdditionalsContainer