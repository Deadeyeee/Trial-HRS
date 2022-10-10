import React, { useEffect, useLayoutEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine'
import { Title } from '../../../client/components/title/styles'
import { ContainerGlobal } from '../../components/container/container'
import { Container, HeadContainer, TableContainer, Td, Th, Tr } from './style'
import Modal from '@mui/material/Modal';
import Axios from 'axios';
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
import { Alert, Fade, Pagination } from '@mui/material';

// import ssss from 'src/Images/rooms/'

const style = {
    position: 'absolute',
    display: 'flex',
    top: '50%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    height: '90%',
    width: '800px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    overflow: 'auto',
    borderRadius: '.5rem',
    margin: '20px auto'
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


function getStyles2(name, serviceNameClip, theme) {
    return {
        fontWeight:
            serviceNameClip.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


const RoomDetailsContainer = () => {


    const [roomTypeValueId, setRoomTypeValueId] = useState("");
    const [roomTypeValue, setRoomTypeValue] = useState("");
    const [roomRate, setRoomRate] = useState("");
    const [maxAdultOccupancy, setMaxAdultOccupancy] = useState("");
    const [maxKidsOccupancy, setMaxKidsOccupancy] = useState("");
    const [roomDescription, setRoomDescription] = useState("");
    const [roomImage, setRoomImage] = useState([]);
    const [roomImageUpload, setRoomImageUpload] = useState([]);


    const [value, setValue] = useState(Date.now());
    const color = "#c44242";
    const [age, setAge] = React.useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => {
        setOpen2(false);
        setRoomTypeValueId("");
        setServicesNames([])
    };


    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => {
        setOpen3(false)
        setRoomTypeValueId("");
        setServicesNames([])
    };

    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const [serviceNameClip, setServiceNameClip] = React.useState([]);

    const handleChange = (event) => {
        setSelectedServices(event.target.value)
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );

    };

    const handleChangeEdit = (event) => {
        console.log(event.target.value)
        setServicesNames(event.target.value)

        const {
            target: { value },
        } = event;
        setServiceNameClip(
            typeof value === 'string' ? value.split(',') : value,
        );

    };


    const handleChangeView = (event) => {

        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );

    };

    const [services, setServices] = useState([]);
    const [servicesNames, setServicesNames] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [roomType, setRoomType] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);
    const [usedServices, setUsedServices] = useState([]);


    useEffect(() => {
        Axios.get("http://localhost:3001/api/getAllServices").then((res) => {

            setServices(res.data)
            console.log(res.data.length)
            // for (let index = 0; index < res.data.length; index++) {
            //         setServicesNames(servicesNames => [...servicesNames, res.data[index].servicesName])

            //     }
        })

        Axios.get("http://localhost:3001/api/getAllUsedServices").then((res) => {
            setUsedServices(res.data)
        }).catch((err) => {
            console.log(err.res)
        })
        Axios.get("http://localhost:3001/api/getAllRoomType").then((res) => {

            setRoomType(res.data);
        })
    }, [])

    useEffect(() => {

        Axios.get("http://localhost:3001/api/getAllUsedServices").then((res) => {
            // console.log(res.data[1].service.servicesName)
            for (let index = 0; index < res.data.length; index++) {
                if (res.data[index].roomType_id == roomTypeValueId) {
                    setServicesNames(servicesNames => [...servicesNames, res.data[index].service.servicesName])

                }
            }

        }).catch((err) => {
            console.log(err.res)
        })

    }, [roomTypeValueId])



    const editRoomType = (e) => {
        e.preventDefault();
        console.log("these: ", servicesNames)
        const formData = new FormData();
        for (let index = 0; index < roomImage.length; index++) {
        }
        formData.append('roomType', roomTypeValue)
        formData.append('roomRate', roomRate)
        formData.append('maxAdultOccupancy', maxAdultOccupancy)
        formData.append('maxKidsOccupancy', maxKidsOccupancy)
        formData.append('roomDescription', roomDescription)
        formData.append('roomImages', roomImage)

        axios.patch("http://localhost:3001/api/updateRoomType/" + roomTypeValueId, formData).then((res) => {
            console.log(res.data)
            Axios.get('http://localhost:3001/api/getAllUsedServices').then((res2) => {
                console.log("Used Services: ", res2.data)
                for (let index = 0; index < res2.data.length; index++) {
                    if (res2.data[index].roomType_id == roomTypeValueId) {
                        if (servicesNames.includes(res2.data[index].service.servicesName) !== true) {
                            Axios.delete('http://localhost:3001/api/deleteUsedServices/' + res2.data[index].id).then((res3) => {
                                console.log(res3.data)
                            }).catch((err) => {
                                console.log(err.res3)
                            })
                        }
                    }
                }
                let roomTypeExist = false;

                for (let i = 0; i < res2.data.length; i++) {
                    if (res2.data[i].roomType_id == roomTypeValueId) {
                        roomTypeExist = true;
                        break;
                    }

                }

                if (roomTypeExist == true) {
                    servicesNames.map((items) => {
                        let exist = true;

                        for (let index = 0; index < res2.data.length; index++) {

                            if (res2.data[index].roomType_id == roomTypeValueId) {

                                if (items === res2.data[index].service.servicesName) {
                                    exist = true;
                                    break;
                                }
                                else {
                                    exist = false;
                                }
                            }

                        }
                        if (exist === false) {
                            console.log(items)
                            Axios.get('http://localhost:3001/api/getAllServices', {

                            }).then((res3) => {
                                for (let index = 0; index < res3.data.length; index++) {
                                    if (items === res3.data[index].servicesName) {
                                        Axios.post('http://localhost:3001/api/addUsedServices', {
                                            roomType_id: roomTypeValueId,
                                            services_id: res3.data[index].id,
                                        }).then((res4) => {
                                            console.log(res4.data)
                                        }).catch((err) => {
                                            console.log(err.res)
                                        })
                                    }
                                }
                                console.log(res3.data)
                            }).catch((err) => {
                                console.log(err.res.data)
                            })
                        }
                    })
                }
                else {
                    servicesNames.map((items) => {
                        Axios.get('http://localhost:3001/api/getAllServices', {

                        }).then((res3) => {
                            for (let index = 0; index < res3.data.length; index++) {
                                if (items === res3.data[index].servicesName) {
                                    Axios.post('http://localhost:3001/api/addUsedServices', {
                                        roomType_id: roomTypeValueId,
                                        services_id: res3.data[index].id,
                                    }).then((res4) => {
                                        console.log(res4.data)
                                    }).catch((err) => {
                                        console.log(err.res)
                                    })
                                }
                            }
                            console.log(res3.data)
                        }).catch((err) => {
                            console.log(err.res.data)
                        })

                    })
                }

                // for (let index2 = 0; index2 < res2.data.length; index2++) {
                //     let exist = true;
                //     let items = "";
                //     console.log("asdsad")
                //     if (res2.data[index2].roomType_id == roomTypeValueId) {
                //         console.log("1")
                //         for (let i = 0; i < servicesNames.length; i++) {
                //             if (servicesNames[i] === res2.data[index2].service.servicesName) {
                //                 exist = true;
                //                 items = ""
                //                 break;
                //             }
                //             else {
                //                 exist = false;
                //                 items = servicesNames[i]
                //             }

                //         }

                //         if (exist === false) {
                //             console.log(items)
                //         }
                //     }

                // }


                handleClose3();
            }).catch((err) => {
                console.log(err.res2)
            })
        }).catch((err) => {
            console.log(err.data)
        })
    }






    const addRoomType = (e) => {

        e.preventDefault();

        const formData = new FormData();
        for (let index = 0; index < roomImageUpload.length; index++) {
            formData.append('roomImages', roomImageUpload[index])
            console.log(roomImageUpload[index])
        }
        formData.append('roomType', roomTypeValue)
        formData.append('roomRate', roomRate)
        formData.append('maxAdultOccupancy', maxAdultOccupancy)
        formData.append('maxKidsOccupancy', maxKidsOccupancy)
        formData.append('roomDescription', roomDescription)

        console.log(formData.getAll('roomImages'))


        Axios.post("http://localhost:3001/api/addRoomType",
            formData
            // {
            //     roomType: roomTypeValue,
            //     roomRate: roomTypeValue,
            //     maxAdultOccupancy: roomTypeValue,
            //     maxKidsOccupancy: roomTypeValue,
            //     roomDescription: roomTypeValue,
            //     roomImages: roomImageUpload,
            // }
        ).then((res1) => {
            Axios.get('http://localhost:3001/api/getAllServices').then((services) => {
                selectedServices.map((items) => {
                    for (let index = 0; index < services.data.length; index++) {

                        if (items == services.data[index].servicesName) {
                            Axios.post('http://localhost:3001/api/addUsedServices', {
                                roomType_id: res1.data.new_roomType.id,
                                services_id: services.data[index].id,
                            }).then((res3) => {
                                console.log(res3.data)
                            }).catch((err) => {
                                console.log(err.res.data)
                            })
                        }
                    }

                })
                handleClose();
                alertPopUp("Room type created!!!", "success");
            }).catch((err) => {
                console.log(err.data)
            })



        }).catch((err) => {
            console.log(err.res.data)
        })


    }
    // itemData.map((item) => (
    const view = (id, roomType, roomRate, maxAdultOccupancy, maxKidsOccupancy, roomDescription, roomImages) => {
        if (servicesNames !== null) {
            setServicesNames([])
        }
        setRoomTypeValueId(id)
        setRoomTypeValue(roomType)
        setRoomRate(roomRate)
        setMaxAdultOccupancy(maxAdultOccupancy)
        setMaxKidsOccupancy(maxKidsOccupancy)
        setRoomDescription(roomDescription)
        setRoomImage(roomImages)

        console.log(roomImage)
        console.log(servicesNames)

        handleOpen2();
        // Axios.get("http://localhost:3001/api/getAllUsedServices").then((res) => {
        //     // console.log(res.data[1].service.servicesName)
        //     for (let index = 0; index < res.data.length; index++) {
        //         if (res.data[index].roomType_id == roomTypeValueId) {
        //             setServicesNames(servicesNames => [...servicesNames, res.data[index].service.servicesName])
        //         }
        //     }

        // }).catch((err) => {
        //     console.log(err.res)
        // })
        // console.log(servicesNames)
    }

    const edit = (id, roomType, roomRate, maxAdultOccupancy, maxKidsOccupancy, roomDescription, roomImages) => {

        setRoomTypeValueId(id)
        setRoomTypeValue(roomType)
        setRoomRate(roomRate)
        setMaxAdultOccupancy(maxAdultOccupancy)
        setMaxKidsOccupancy(maxKidsOccupancy)
        setRoomDescription(roomDescription)
        setRoomImage(roomImages)

        // Axios.get("http://localhost:3001/api/getAllUsedServices").then((res) => {
        //     // console.log(res.data[1].service.servicesName)
        //     for (let index = 0; index < res.data.length; index++) {
        //         if (res.data[index].roomType_id == roomTypeValueId) {
        //             setServicesNames(servicesNames => [...servicesNames, res.data[index].service.servicesName])
        //         }
        //     }

        // }).catch((err) => {
        //     console.log(err.res)
        // })
    }

    const uploadImages = (e) => {
        setRoomImageUpload(e.target.files);
        console.log(roomImageUpload)
        if (e.target.files) {
            const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

            setSelectedImages((prevImage) => prevImage.concat(fileArray))
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file)
            )
        }
    }

    const renderPhoto = (source) => {
        return source.map((photo) => {
            return <ImageListItem
                style={{
                    backgroundColor: 'rgba(0, 0, 0, .1)',
                    width: 'auto', display: 'flex', justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: `url(${photo})`,
                    backgroundSize: 'cover',

                }} />
        })
    }

    const [alertOpen, setAlertOpen] = React.useState(false);

    const handleAlertClose = () => {
        setAlertOpen(false)
    }

    const [severity, setSeverity] = useState("success")
    const [alertMessage, setAlertMessage] = useState("")
    const alertPopUp = (message, status) => {
        setAlertOpen(true);
        setSeverity(status);
        setAlertMessage(message);
    }


    setTimeout(handleAlertClose, 120000)
    // ))

    const [page, setPage] = React.useState(1);
    const handleChangePagination = (event, value) => {
        setPage(value);
    };
    return (

        <Container>

            <Box
                style={{
                    width: '50%',
                    bg: 'black',
                    marginTop: '4px',
                    position: 'fixed',
                }}
            >
                <Fade in={alertOpen}>
                    <Alert
                        style={{
                            display: `${alertOpen ? "flex" : "none"}`
                        }}
                        variant="filled"
                        severity={severity}
                        onClose={() => { handleAlertClose(); }}>{alertMessage}</Alert>
                </Fade>
            </Box>

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
                margin='20px 0px 10px 0px'
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
                        <Th align='center'>Room Type <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Rate/Night <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Services <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Max Adult Occupancy <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Max Kids Occupancy <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Description <ArrowDropDownIcon style={{ color: 'black' }} /></Th>
                        <Th align='center'>Action</Th>
                    </Tr>

                    {roomType.map((items) => (
                        <Tr>
                            <Td align='center'>{items.roomType}</Td>
                            <Td align='center'>{items.roomRate}</Td>
                            <Td align='center' style={{ display: 'flex', gap: '5px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                {usedServices.map((items2) => {
                                    if (items.id === items2.roomType_id) {
                                        return <Chip key={items2.service.servicesName} label={items2.service.servicesName} />
                                        // <span style={{whiteSpace: 'nowrap',backgroundColor:"#948566", color: 'black', borderRadius: '.5em', padding: '5px', }}>{items2.service.servicesName + ", "}</span>
                                    }
                                })}
                            </Td>
                            <Td align='center'>{items.maxAdultOccupancy}</Td>
                            <Td align='center'>{items.maxKidsOccupancy}</Td>
                            <Td align='center'>{items.roomDescription}</Td>
                            <Td align='center'><ActionButton
                                view={() => {
                                    // setRoomTypeValue(items.roomType);
                                    // setRoomRate(item.roomRate);
                                    // setMaxAdultOccupancy(item.maxAdultOccupancy);
                                    // setMaxKidsOccupancy(item.maxKidsOccupancy);
                                    // setRoomDescription(item.roomDescription);


                                    view(items.id, items.roomType, items.roomRate, items.maxAdultOccupancy, items.maxKidsOccupancy, items.roomDescription, JSON.parse(items.roomImages));
                                }}
                                edit={() => {
                                    handleOpen3();

                                    edit(items.id, items.roomType, items.roomRate, items.maxAdultOccupancy, items.maxKidsOccupancy, items.roomDescription, JSON.parse(items.roomImages));
                                }}
                            /></Td>
                        </Tr>

                    ))}
                </TableContainer>
                
            </ContainerGlobal>
                <Pagination style={{marginBottom: '40px'}} count={10} page={page} onChange={handleChangePagination} />

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
                style={{
                    overflow: 'scroll',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                }}
            >
                <Box sx={style}>
                    <Box
                        onSubmit={addRoomType}
                        id="addRoomTypeForm"
                        component="form"
                        style={{
                            margin: '30px auto',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                        }}>
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
                                onChange={(e) => {
                                    setRoomTypeValue(e.target.value);
                                }}
                                style={{ width: '55%', }}
                                required
                            />

                            <TextField
                                placeholder='Rate per Night'
                                label="Rate per Night"
                                type='number'
                                variant="outlined"
                                onChange={(e) => {
                                    setRoomRate(e.target.value);
                                }}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">PHP</InputAdornment>,
                                }}
                                style={{ width: '55%', }}
                                required
                            />
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
                                    {services.map((items) => (
                                        <MenuItem
                                            key={items.id}
                                            value={items.servicesName}
                                            style={getStyles(items.servicesName, personName, theme)}
                                        >
                                            {items.servicesName}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <TextField
                                placeholder='Room Description'
                                label="Room Description"
                                multiline
                                maxRows={4}
                                onChange={(e) => {
                                    setRoomDescription(e.target.value);
                                }}
                                variant="outlined"
                                style={{ width: '50%', }}
                                required
                            />
                        </InputContainer>

                        <InputContainer
                            w='90%'
                            style={{ marginTop: '40px', }}
                        >
                            <TextField
                                placeholder='Maximum number of adults'
                                label="Maximum number of adults"
                                variant="outlined"
                                type='number'
                                onChange={(e) => {
                                    setMaxAdultOccupancy(e.target.value);
                                }}
                                style={{ width: '55%', }}
                                required />

                            <TextField
                                placeholder='Maximum number of kids'
                                label="Maximum number of kids"
                                variant="outlined"
                                type='number'
                                onChange={(e) => {
                                    setMaxKidsOccupancy(e.target.value);
                                }}
                                style={{ width: '55%', }}
                                required />
                        </InputContainer>

                        <Typography id="modal-modal-title" variant="h5" component="h2"
                            style={{ textAlign: 'center', margin: '20px 0px 0px 0px', }}>
                            Upload Photo
                        </Typography>

                        <InputContainer
                            gap='0px'
                            style={{
                                padding: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}>

                            <Button variant="contained" component="label">
                                Upload
                                <input hidden accept="image/*" multiple type="file"
                                    onChange={
                                        uploadImages
                                    }
                                    // required
                                />
                            </Button>
                            <ImageList sx={{ width: '100%', height: 'auto' }} cols={4} rowHeight={164}>
                                {renderPhoto(selectedImages)}
                                {/* {itemData.map((item) => (
                                    <ImageListItem
                                        style={{
                                            backgroundColor: 'rgba(0, 0, 0, .1)',
                                            width: 'auto', display: 'flex', justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundImage: `url(${item.img})`,
                                            backgroundSize: 'cover',
                                        }}>
                                    </ImageListItem>
                                ))} */}
                            </ImageList>

                        </InputContainer>


                        <InputContainer
                            style={{ marginTop: '40px', }}>


                            <Button variant="contained" size="large"
                                style={{ backgroundColor: '#50AA32' }}
                                type="submit"
                            // onClick={() => { handleClose(); addRoomType(); }}
                            >
                                Add
                            </Button>
                            <Button variant="contained" size="large"
                                style={{ backgroundColor: '#FF2400' }}
                                onClick={handleClose}>
                                Cancel
                            </Button>

                        </InputContainer>
                    </Box>
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
                    <Box style={{
                        margin: '30px auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                    }}>
                        <Title
                            size='33px'
                            color='black'
                            family='Helvetica'
                            fstyle='normal'
                            weight='600'
                            align='left'
                            margin='0px 0px 20px 0px'
                        >
                            View Room Type
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
                                style={{ width: '55%', }}
                                defaultValue={roomTypeValue}
                                InputProps={{
                                    readOnly: true,
                                }} />

                            <TextField
                                placeholder='Rate per Night'
                                label="Rate per Night"
                                variant="outlined"
                                defaultValue={roomRate}
                                InputProps={{
                                    readOnly: true,
                                    startAdornment: <InputAdornment position="start">PHP</InputAdornment>,
                                }}
                                style={{ width: '55%', }} />
                        </InputContainer>

                        <InputContainer
                            w='90%'
                            style={{ marginTop: '40px', }}>
                            <FormControl style={{ width: '50%' }} disabled>
                                <InputLabel id="demo-multiple-name-label">Services</InputLabel>
                                <Select
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    multiple
                                    value={servicesNames}
                                    onChange={handleChangeView}

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
                                    {services.map((item) => (
                                        <MenuItem
                                            key={item}
                                            value={item}
                                            style={getStyles(item, personName, theme)}
                                        >
                                            {item}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <TextField
                                placeholder='Room Type'
                                label="Room Description"
                                defaultValue={roomDescription}
                                multiline
                                maxRows={4}
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                                style={{ width: '50%', }} />
                        </InputContainer>
                        <InputContainer
                            w='90%'
                            style={{ marginTop: '40px', }}
                        >
                            <TextField
                                placeholder='Maximum number of adults'
                                label="Maximum number of adults"
                                variant="outlined"
                                type='number'
                                defaultValue={maxAdultOccupancy}
                                InputProps={{
                                    readOnly: true,
                                }}
                                style={{ width: '55%', }} />

                            <TextField
                                placeholder='Maximum number of kids'
                                label="Maximum number of kids"
                                variant="outlined"
                                type='number'
                                defaultValue={maxKidsOccupancy}
                                InputProps={{
                                    readOnly: true,
                                }}
                                style={{ width: '55%', }} />
                        </InputContainer>
                        <Typography id="modal-modal-title" variant="h5" component="h2"
                            style={{ textAlign: 'center', margin: '20px 0px 0px 0px', }}>
                            Uploaded Photo
                        </Typography>

                        <InputContainer>

                            <ImageList sx={{ width: '100%', height: 'auto' }} cols={4} rowHeight={164}>
                                {roomImage.map((item) => (
                                    <ImageListItem
                                        style={{
                                            backgroundColor: 'rgba(0, 0, 0, .1)',
                                            width: '140px', height: '140px', display: 'flex', justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundImage: `url(http://localhost:3001/${item.path.replaceAll("\\", "/")})`,
                                            backgroundSize: 'cover',

                                        }}
                                    >
                                        {/* <label htmlFor="icon-button-file">
                                            <Input
                                                accept="image/*"
                                                id="icon-button-file"
                                                type="file" />
                                            <IconButton aria-label="upload picture" component="span"
                                                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', }} >
                                                <PhotoCamera
                                                    style={{ color: '#CCA041', fontSize: '60px', }} />
                                            </IconButton>
                                        </label> */}
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </InputContainer>


                        <InputContainer
                            style={{ marginTop: '40px', }}>


                            <Button variant="contained" size="large"
                                style={{ backgroundColor: '#50AA32' }}
                                onClick={handleClose2}>
                                OK
                            </Button>

                        </InputContainer>
                    </Box>
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
                    <Box
                        onSubmit={editRoomType}
                        id="editRoomTypeForm"
                        component="form"
                        style={{
                            margin: '30px auto',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                        }}>
                        <Title
                            size='33px'
                            color='black'
                            family='Helvetica'
                            fstyle='normal'
                            weight='600'
                            align='left'
                            margin='0px 0px 20px 0px'
                        >
                            Edit Room Type
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
                                style={{ width: '55%', }}
                                defaultValue={roomTypeValue}
                                onChange={(e) => {
                                    setRoomTypeValue(e.target.value);
                                }}
                                InputProps={{
                                    readOnly: false,
                                }} />

                            <TextField
                                placeholder='Rate per Night'
                                label="Rate per Night"
                                variant="outlined"
                                defaultValue={roomRate}
                                onChange={(e) => {
                                    setRoomRate(e.target.value);
                                }}
                                InputProps={{
                                    readOnly: false,
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
                                    value={servicesNames}
                                    onChange={handleChangeEdit}

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
                                    {services.map((items) => (
                                        <MenuItem
                                            key={items.servicesName}
                                            value={items.servicesName}
                                            style={getStyles(items.servicesName, serviceNameClip, theme)}
                                        >
                                            {items.servicesName}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <TextField
                                placeholder='Room Type'
                                label="Room Description"
                                defaultValue={roomDescription}
                                onChange={(e) => {
                                    setRoomDescription(e.target.value);
                                }}
                                multiline
                                maxRows={4}
                                InputProps={{
                                    readOnly: false,
                                }}
                                variant="outlined"
                                style={{ width: '50%', }} />
                        </InputContainer>
                        <InputContainer
                            w='90%'
                            style={{ marginTop: '40px', }}
                        >
                            <TextField
                                placeholder='Maximum number of adults'
                                label="Maximum number of adults"
                                variant="outlined"
                                type='number'
                                defaultValue={maxAdultOccupancy}
                                onChange={(e) => {
                                    setMaxAdultOccupancy(e.target.value);
                                }}
                                style={{ width: '55%', }} />

                            <TextField
                                placeholder='Maximum number of kids'
                                label="Maximum number of kids"
                                variant="outlined"
                                type='number'
                                onChange={(e) => {
                                    setMaxKidsOccupancy(e.target.value);
                                }}
                                defaultValue={maxKidsOccupancy}
                                style={{ width: '55%', }} />
                        </InputContainer>
                        <Typography id="modal-modal-title" variant="h5" component="h2"
                            style={{ textAlign: 'center', margin: '20px 0px 0px 0px', }}>
                            Upload Photo
                        </Typography>
                        <Button variant="contained" component="label">
                            Upload
                            <input hidden accept="image/*" multiple type="file"
                                onChange={
                                    uploadImages
                                }

                            />
                        </Button>
                        <InputContainer>

                            <ImageList sx={{ width: '100%', height: 'auto' }} cols={4} rowHeight={164}>
                                {roomImage.map((item) => (
                                    <ImageListItem
                                        style={{
                                            backgroundColor: 'rgba(0, 0, 0, .1)',
                                            width: '140px', height: '140px', display: 'flex', justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundImage: `url(http://localhost:3001/${item.path.replaceAll("\\", "/")})`,
                                            backgroundSize: 'cover',

                                        }}>
                                        {/* <label htmlFor="icon-button-file">
                                            <Input accept="image/*" id="icon-button-file" type="file" />
                                            <IconButton aria-label="upload picture" component="span"
                                                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', }} >
                                                <PhotoCamera
                                                    style={{ color: '#CCA041', fontSize: '60px', }} />
                                            </IconButton>
                                        </label> */}
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </InputContainer>


                        <InputContainer
                            style={{ marginTop: '40px', }}>


                            <Button variant="contained" size="large"
                                style={{ backgroundColor: '#50AA32' }}
                                type="submit"
                            >
                                Save Changes
                            </Button>
                            <Button variant="contained" size="large"
                                style={{ backgroundColor: '#FF2400' }}
                                onClick={handleClose3}>
                                Cancel
                            </Button>

                        </InputContainer>
                    </Box>
                </Box>
            </Modal>






            {/* <Modal
                open={open3}
                onClose={handleClose3}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{ overflow: 'scroll' }}
            >
                <Box sx={style}>
                    <Box style={{
                        margin: '30px auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                    }}>
                        <Title
                            size='33px'
                            color='black'
                            family='Helvetica'
                            fstyle='normal'
                            weight='600'
                            align='left'
                            margin='0px 0px 20px 0px'
                        >
                            Edit Room Type
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
                                style={{ width: '55%', }}
                                defaultValue={roomTypeValue}
                                InputProps={{
                                    readOnly: false,
                                }} />
                            <TextField
                                placeholder='Rate per Night'
                                label="Rate per Night"
                                variant="outlined"
                                defaultValue={roomRate}
                                InputProps={{
                                    readOnly: false,
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
                                    defaultValue={names}
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
                                defaultValue='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat mattis leo, rutrum mollis risus lacinia at. Ut luctus pretium massa, a aliquet diam posuere id.	
                            '
                                multiline
                                maxRows={4}
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                                style={{ width: '50%', }} />
                        </InputContainer>
                        <InputContainer
                            w='90%'
                            style={{ marginTop: '40px', }}
                        >
                            <TextField
                                placeholder='Maximum number of adults'
                                label="Maximum number of adults"
                                variant="outlined"
                                type='number'
                                defaultValue={maxAdultOccupancy}
                                style={{ width: '55%', }} />
                            <TextField
                                placeholder='Maximum number of kids'
                                label="Maximum number of kids"
                                variant="outlined"
                                type='number'
                                defaultValue={maxKidsOccupancy}
                                style={{ width: '55%', }} />
                        </InputContainer>
                        <Typography id="modal-modal-title" variant="h5" component="h2"
                            style={{ textAlign: 'center', margin: '20px 0px 0px 0px', }}>
                            Upload Photo
                        </Typography>
                        <InputContainer>
                            <ImageList sx={{ width: '100%', height: 360 }} cols={1} rowHeight={164}>
                                {roomImage.map((item) => (
                                    <ImageListItem
                                        style={{
                                            backgroundColor: 'rgba(0, 0, 0, .1)',
                                            width: 'auto', display: 'flex', justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundImage: `url(http://localhost:3001/${item.path.replaceAll("\\", "/")})`,
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
                </Box>
            </Modal> */}






        </Container >
    )
}

export default RoomDetailsContainer