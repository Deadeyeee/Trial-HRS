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
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
import { Alert, Fade, Pagination } from '@mui/material';
import { apiKey } from '../../../apiKey';
// import ssss from 'src/Images/rooms/'
import { CheckCircleOutline, Close, HighlightOffSharp } from '@mui/icons-material';
import logo from '../../../client/images/logo.png'
import { CircularProgress, Grow } from '@mui/material';


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
    const [roomTypeImagesDb, setRoomTypeImagesDb] = useState([]);

    const [fileError, setFileError] = useState("");


    const [value, setValue] = useState(Date.now());
    const color = "#c44242";
    const [age, setAge] = React.useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setRoomImageUpload([])
        setSelectedImages([])
        setOpen(false)
    };

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => {
        setOpen2(false);
        setRoomTypeValueId("");
        setServicesNames([])
        setRoomImageUpload([])
        setSelectedImages([])
    };


    const numberFormat = (value) =>
        new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'PHP'
        }).format(value);

    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => {
        setOpen3(false)
        setRoomTypeValueId("");
        setServicesNames([])
        setRoomTypeImagesDb([])
        setRoomImageUpload([])
        setSelectedImages([])
    };

    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const [serviceNameClip, setServiceNameClip] = React.useState([]);
    const [roomPage, setRoomPage] = useState(1)
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



    const [role, setRole] = useState('')



    const [services, setServices] = useState([]);
    const [servicesNames, setServicesNames] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [roomType, setRoomType] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);
    const [usedServices, setUsedServices] = useState([]);


    useEffect(() => {
        Axios.get(apiKey + "auth/verify-token").then((result) => {
            setRole(result.data.role)
        }).catch((err) => {

        });
        Axios.get(apiKey + "api/getAllServices").then((result) => {
            console.log('NEW API LINK', result.data)
        }).catch((err) => {
            console.log(err)
        });

        Axios.get(apiKey + "api/getAllServices").then((res) => {

            setServices(res.data)
            console.log(res.data.length)
            // for (let index = 0; index < res.data.length; index++) {
            //         setServicesNames(servicesNames => [...servicesNames, res.data[index].servicesName])

            //     }
        })

        Axios.get(apiKey + "api/getAllUsedServices").then((res) => {
            setUsedServices(res.data)
        }).catch((err) => {
            console.log(err.res)
        })
        Axios.get(apiKey + "api/getAllRoomType").then((res) => {
            console.log(res.data)
            setRoomType(res.data.filter((obj) => obj.status == true));
        })


    }, [])

    useEffect(() => {

        Axios.get(apiKey + "api/getAllUsedServices").then((res) => {
            // console.log(res.data[1].service.servicesName)
            for (let index = 0; index < res.data.length; index++) {
                if (res.data[index].roomType_id == roomTypeValueId) {
                    setServicesNames(servicesNames => [...servicesNames, res.data[index].service.servicesName])

                }
            }

        }).catch((err) => {
            console.log(err.res)
        })

        Axios.get(apiKey + 'api/getAllRoomTypeImages').then((result) => {
            setRoomTypeImagesDb([])
            for (let index = 0; index < result.data.length; index++) {
                if (result.data[index].roomType_id == roomTypeValueId) {
                    setRoomTypeImagesDb((oldData) => [...oldData, result.data[index].roomImages])
                }

            }
        }).catch((err) => {

        });

    }, [roomTypeValueId])



    const editRoomType = (e) => {
        e.preventDefault();
        if (roomTypeImagesDb.length + roomImageUpload.length == 0) {
            alert('Please upload atleast 1 room type image.')
        } else {
            console.log("these: ", servicesNames)
            const formData = new FormData();

            formData.append('roomType', roomTypeValue)
            formData.append('roomRate', roomRate)
            formData.append('maxAdultOccupancy', maxAdultOccupancy)
            formData.append('maxKidsOccupancy', maxKidsOccupancy)
            formData.append('roomDescription', roomDescription)

            handleOpenIsLoading()
            axios.patch(apiKey + "api/updateRoomType/" + roomTypeValueId, formData).then((res) => {

                console.log(res.data)
                axios.get(apiKey + 'api/getAllRoomTypeImages').then((result) => {
                    for (let index = 0; index < result.data.length; index++) {
                        if (result.data[index].roomType_id == roomTypeValueId) {
                            if (!roomTypeImagesDb.includes(result.data[index].roomImages)) {

                                axios.delete(apiKey + 'api/deleteRoomTypeImages/' + result.data[index].id).then((result) => {
                                    console.log(result.data)
                                }).catch((err) => {
                                    console.log(err)
                                });

                                axios.post(apiKey + 'api/deleteImageRoom', {
                                    filePath: result.data[index].roomImages
                                }).then((result) => {
                                    console.log(result.data)

                                }).catch((err) => {
                                    console.log(err)

                                });
                            }
                        }

                    }
                }).catch((err) => {
                    console.log(err)

                });

                if (roomImageUpload.length != 0) {
                    for (let index = 0; index < roomImageUpload.length; index++) {
                        const formData2 = new FormData();
                        console.log(roomImageUpload[index])
                        formData2.append('roomImages', roomImageUpload[index])
                        formData2.append('roomType_id', roomTypeValueId)
                        Axios.post(apiKey + "api/addRoomTypeImages", formData2).then((result) => {
                            console.log(result.data)
                            if (index == roomImageUpload.length - 1) {
                                handleCloseIsLoading(2, '')
                            }
                        }).catch((err) => {
                            console.log(err)
                            handleCloseIsLoading(2)

                        });

                    }
                }




                Axios.get(apiKey + 'api/getAllUsedServices').then((res2) => {
                    console.log("Used Services: ", res2.data)
                    for (let index = 0; index < res2.data.length; index++) {
                        if (res2.data[index].roomType_id == roomTypeValueId) {
                            if (servicesNames.includes(res2.data[index].service.servicesName) !== true) {
                                Axios.delete(apiKey + 'api/deleteUsedServices/' + res2.data[index].id).then((res3) => {
                                    console.log(res3.data)
                                }).catch((err) => {
                                    handleCloseIsLoading(2)
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
                                Axios.get(apiKey + 'api/getAllServices', {

                                }).then((res3) => {
                                    for (let index = 0; index < res3.data.length; index++) {
                                        if (items === res3.data[index].servicesName) {
                                            Axios.post(apiKey + 'api/addUsedServices', {
                                                roomType_id: roomTypeValueId,
                                                services_id: res3.data[index].id,
                                            }).then((res4) => {
                                                console.log(res4.data)
                                            }).catch((err) => {
                                                handleCloseIsLoading(3)
                                                console.log(err.res)
                                            })
                                        }
                                    }
                                    console.log(res3.data)
                                }).catch((err) => {
                                    handleCloseIsLoading(3)
                                    console.log(err.res.data)
                                })
                            }
                        })
                    }
                    else {
                        servicesNames.map((items) => {
                            Axios.get(apiKey + 'api/getAllServices', {

                            }).then((res3) => {
                                for (let index = 0; index < res3.data.length; index++) {
                                    if (items === res3.data[index].servicesName) {
                                        Axios.post(apiKey + 'api/addUsedServices', {
                                            roomType_id: roomTypeValueId,
                                            services_id: res3.data[index].id,
                                        }).then((res4) => {
                                            console.log(res4.data)
                                        }).catch((err) => {
                                            handleCloseIsLoading(3)
                                            console.log(err.res)
                                        })
                                    }
                                }
                                console.log(res3.data)
                            }).catch((err) => {
                                handleCloseIsLoading(3)
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

                }).catch((err) => {
                    handleCloseIsLoading(3)
                    console.log(err.res2)
                })

                setTimeout(() => {
                    handleCloseIsLoading(1, '')
                }, 40000);
            }).catch((err) => {
                handleCloseIsLoading(3)
                console.log(err.data)
            })
        }
    }






    const addRoomType = (e) => {

        e.preventDefault();
        if (roomImageUpload.length == 0) {
            alert('Please upload atleast 1 room type image.')
        } else {

            const formData = new FormData();
            formData.append('roomType', roomTypeValue)
            formData.append('roomRate', roomRate)
            formData.append('maxAdultOccupancy', maxAdultOccupancy)
            formData.append('maxKidsOccupancy', maxKidsOccupancy)
            formData.append('roomDescription', roomDescription)

            console.log(formData.getAll('roomImages'))

            handleOpenIsLoading()
            Axios.post(apiKey + "api/addRoomType",
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

                console.log(res1.data)

                Axios.get(apiKey + 'api/getAllServices').then((services) => {
                    selectedServices.map((items, indexarr, arraymap) => {
                        for (let index = 0; index < services.data.length; index++) {

                            if (items == services.data[index].servicesName) {
                                Axios.post(apiKey + 'api/addUsedServices', {
                                    roomType_id: res1.data.new_roomType.id,
                                    services_id: services.data[index].id,

                                }).then((res3) => {
                                    console.log(res3.data)
                                    console.log(index)
                                    console.log(services.data.length)

                                    if (indexarr == arraymap.length - 1) {
                                        console.log('index', index)
                                        console.log('services.data.length', services.data.length)
                                        console.log('roomImageUpload', roomImageUpload)
                                        console.log('roomImageUpload.length', roomImageUpload.length)
                                        for (let index2 = 0; index2 < roomImageUpload.length; index2++) {
                                            const formData2 = new FormData();
                                            console.log(roomImageUpload[index2])
                                            console.log(res1.data.new_roomType.id)
                                            formData2.append('roomImages', roomImageUpload[index2])
                                            formData2.append('roomType_id', res1.data.new_roomType.id)
                                            Axios.post(apiKey + "api/addRoomTypeImages", formData2).then((result) => {
                                                console.log(result.data)

                                                if (index2 == roomImageUpload.length - 1) {
                                                    // window.location = ''
                                                    handleCloseIsLoading(2, '')

                                                }
                                            }).catch((err) => {
                                                handleCloseIsLoading(3)
                                                console.log(err)

                                            });

                                        }
                                    }

                                }).catch((err) => {
                                    handleCloseIsLoading(3)
                                    console.log(err.res.data)
                                })
                            }


                        }



                    })
                    // handleClose();
                    // alertPopUp("Room type created!!!", "success");
                }).catch((err) => {
                    handleCloseIsLoading(3)
                    console.log(err)
                })



            }).catch((err) => {
                console.log(err)
            })

        }

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
        // Axios.get(apiKey+"api/getAllUsedServices").then((res) => {
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

        // Axios.get(apiKey+"api/getAllUsedServices").then((res) => {
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
        console.log(roomImageUpload.length + e.target.files.length)
        if (roomTypeImagesDb.length != 0) {
            if (e.target.files.length > 9 || roomImageUpload.length + e.target.files.length + roomTypeImagesDb.length > 9) {
                setFileError('Sorry, The maximum photo is 9.')
                alert('Sorry, The maximum photo is 9.')
            }
            else {
                console.log("e.target.files", e.target.files)
                console.log("e.target.file", e.target.file)
                console.log("e.target.files[0]", e.target.files[0])
                for (let index = 0; index < e.target.files.length; index++) {
                    setRoomImageUpload((prevImage) => prevImage.concat(e.target.files[index]));
                }

                console.log(roomImageUpload)
                if (e.target.files) {
                    const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

                    setSelectedImages((prevImage) => prevImage.concat(fileArray))
                    Array.from(e.target.files).map(
                        (file) => URL.revokeObjectURL(file)
                    )
                }
            }
        }
        else {
            if (e.target.files.length > 9 || roomImageUpload.length + e.target.files.length > 9) {
                setFileError('Sorry, The maximum photo is 9.')
                alert('Sorry, The maximum photo is 9.')
            }
            else {
                console.log("e.target.files", e.target.files)
                console.log("e.target.file", e.target.file)
                console.log("e.target.files[0]", e.target.files[0])
                for (let index = 0; index < e.target.files.length; index++) {
                    setRoomImageUpload((prevImage) => prevImage.concat(e.target.files[index]));
                }

                console.log(roomImageUpload)
                if (e.target.files) {
                    const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

                    setSelectedImages((prevImage) => prevImage.concat(fileArray))
                    Array.from(e.target.files).map(
                        (file) => URL.revokeObjectURL(file)
                    )
                }
            }
        }

    }


    const removeUpload = (index) => {
        // console.log(index)
        console.log(roomImageUpload[index])
        console.log(selectedImages[index])
        setRoomImageUpload(oldData => oldData.filter(obj => {
            return obj !== roomImageUpload[index];
        }));
        setSelectedImages(oldData => oldData.filter(obj => {
            return obj !== selectedImages[index];
        }));

        setRoomTypeImagesDb(oldData => oldData.filter(obj => {
            return obj !== roomTypeImagesDb[index];
        }));

    }

    // useEffect(() => {
    //     console.log(roomImageUpload)
    //     console.log(selectedImages)
    // }, [roomImageUpload, selectedImages])


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



    const deleteRoom = (value) => {
        console.log(value)
        if (window.confirm('are you sure you want to delete this Room Type?')) {
            handleOpenIsLoading()
            axios.patch(apiKey + 'api/updateRoomType/' + value, {
                status: false
            }).then((result) => {
                console.log(result)
                // window.location = ''
                handleCloseIsLoading(2, '')
            }).catch((err) => {
                console.log(err)
                handleCloseIsLoading(3)
            });
        }
    }





    const [search, setSearch] = useState('')




    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('Please wait...')
    const [status, setStatus] = useState('loading')




    const handleOpenIsLoading = () => {
        setIsLoading(true);
        setStatus('loading')
        setLoadingMessage('Please wait...')


        setTimeout(() => {
            handleCloseIsLoading(3)
        }, 90000)
    }



    const handleCloseIsLoading = (status, link) => {

        if (status == 1 || status === undefined) {
            setStatus('loading')
            setLoadingMessage('')
        }
        else if (status == 2) {
            setStatus('success')
            setLoadingMessage('')
        }
        else if (status == 3) {
            setStatus('failed')
            setLoadingMessage('Sorry, Something went wrong.')
        }

        setTimeout(() => {
            setIsLoading(false);
            console.log(link)
            if (link !== undefined) {
                window.location = link;
            }
        }, 1000)
    }

    const loadingStatus = (value) => {
        if (value == 'loading') {
            return <CircularProgress></CircularProgress>;
        }
        else if (value == 'success') {
            return <Grow in={true}><CheckCircleOutline style={{ color: 'green', fontSize: '80px' }} /></Grow>;
        }
        else if (value == 'failed') {
            return <Grow in={true}><HighlightOffSharp style={{ color: 'red', fontSize: '80px' }} /></Grow>;
        }
    }


    return (

        <Container>



            <Modal
                open={isLoading}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 'none'
                }}>
                <Box
                    component='form'
                    style={{
                        height: '300px',
                        width: '400px',
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflowY: 'overlay',
                        overflowX: 'hidden',
                        borderRadius: '.5rem',
                        position: 'relative',
                        border: 'none'
                        // margin: '50px 0px',

                    }}>
                    <div style={{ margin: '10px', display: 'flex', width: '400px', height: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                        <img src={logo} width="35%"></img>
                        {loadingStatus(status)}
                        <h1 style={{ fontWeight: 'normal', margin: '0px' }}>{loadingMessage}</h1>
                    </div>
                </Box>
            </Modal>



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
                    Manage Rooms
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
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
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
                    Room Types
                </Title>
                <HorizontalLine
                    bg='gray'
                    w='100%'
                    margin='0px'
                >
                </HorizontalLine>

                <TableContainer style={{ fontSize: '.8vw' }}>
                    <Tr>
                        <Th align='center'>Room Type</Th>
                        <Th align='center'>Rate/Night</Th>
                        <Th align='center'>Services</Th>
                        <Th align='center'>Maximum Adult</Th>
                        <Th align='center'>Maximum Kids</Th>
                        <Th align='center'>Description</Th>
                        <Th align='center'>Action</Th>
                    </Tr>

                    {roomType.length != 0 ?
                        roomType
                            .slice((roomPage - 1) * 10, roomPage * 10)
                            .filter((item) => {
                                if (search != '') {
                                    if (
                                        (item.roomType.toLowerCase()).toString().includes(search.toLowerCase())
                                        ||
                                        (item.roomRate).toString().includes(search.toLowerCase())
                                        ||
                                        (numberFormat(item.roomRate)).toString().includes(search.toLowerCase())
                                        ||
                                        (item.maxAdultOccupancy).toString().includes(search.toLowerCase())
                                        ||
                                        (item.maxKidsOccupancy).toString().includes(search.toLowerCase())
                                        ||
                                        (item.roomDescription.toLowerCase()).toString().includes(search.toLowerCase())
                                    ) {
                                        return item;
                                    }


                                }

                                else {
                                    return item
                                }
                            })
                            .sort((a, b) => b.roomRate - a.roomRate)
                            .map((items) => (
                                <Tr>
                                    <Td align='center'>{items.roomType}</Td>
                                    <Td align='center'>{numberFormat(items.roomRate)}</Td>
                                    <Td align='center' style={{ display: 'flex', gap: '5px', width: '350px', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                                        {usedServices.length != 0 ?
                                            usedServices.map((items2) => {
                                                if (items.id === items2.roomType_id) {
                                                    return <Chip style={{ width: '100px' }} key={items2.service.servicesName} label={items2.service.servicesName} />
                                                    // <span style={{whiteSpace: 'nowrap',backgroundColor:"#948566", color: 'black', borderRadius: '.5em', padding: '5px', }}>{items2.service.servicesName + ", "}</span>
                                                }
                                            })
                                            : ""}
                                    </Td>
                                    <Td align='center' style={{ width: '100px' }}>{items.maxAdultOccupancy}</Td>
                                    <Td align='center'>{items.maxKidsOccupancy}</Td>
                                    <Td align='center' ><p style={{ width: '300px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{items.roomDescription}</p></Td>
                                    <Td align='center'>
                                        {role != '' ? role == 'STAFF' ?
                                            <ActionButton

                                                dontShowEdit=''
                                                dontShowDelete=''
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
                                            />
                                            :
                                            <ActionButton
                                                delete={() => { deleteRoom(items.id) }}

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
                                            />
                                            : ''}

                                    </Td>
                                </Tr>

                            ))
                        : <Tr>
                            <Td align='center' colSpan={7}>Rooms type is empty</Td>
                        </Tr>}
                </TableContainer>

                <ContainerGlobal
                    w='100%'
                    justify='center'>
                    <Pagination
                        page={roomPage}
                        count={roomType.length != 0 && Math.ceil(roomType.filter((item) => {
                            if (search != '') {
                                if (
                                    (item.roomType.toLowerCase()).toString().includes(search.toLowerCase())
                                    ||
                                    (item.roomRate).toString().includes(search.toLowerCase())
                                    ||
                                    (numberFormat(item.roomRate)).toString().includes(search.toLowerCase())
                                    ||
                                    (item.maxAdultOccupancy).toString().includes(search.toLowerCase())
                                    ||
                                    (item.maxKidsOccupancy).toString().includes(search.toLowerCase())
                                    ||
                                    (item.roomDescription.toLowerCase()).toString().includes(search.toLowerCase())
                                ) {
                                    return item;
                                }


                            }

                            else {
                                return item
                            }
                        }).length / 10)}
                        onChange={(e, value) => {

                            setRoomPage(value)
                        }}
                    />
                </ContainerGlobal>
            </ContainerGlobal>


            {role != '' ? role == 'STAFF' ? '' : <Button
                variant="contained"
                size="large"
                onClick={handleOpen}
                style={{ backgroundColor: '#2E2E2E' }}>
                Add Room Type
            </Button> : ''}


            <Modal
                open={open}
                onClose={handleClose}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Box
                    style={{
                        height: 'auto',
                        width: '50vw',
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
                        position: 'relative',
                        maxHeight: '90vh',
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
                            Add Room Type
                        </Title>
                        <CloseIcon
                            onClick={handleClose}
                            style={{
                                color: 'white',
                                cursor: 'pointer',
                                margin: '10px',
                            }} />
                    </div>
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
                                inputProps={{ maxLength: 80 }}
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
                                    startAdornment: <InputAdornment position="start">₱</InputAdornment>,
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
                                    required
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
                                inputProps={{ maxLength: 254 }}
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
                                <input hidden accept="image/*" multiple type="file" id='photoUpload'
                                    onChange={

                                        uploadImages
                                    }
                                // required
                                />
                            </Button>
                            <ImageList sx={{ width: '100%', height: 'auto' }} cols={4} rowHeight={164}>
                                {/* {renderPhoto(selectedImages)} */}
                                {selectedImages.length != 0 ?
                                    selectedImages.map((photo, index) => (
                                        <ImageListItem
                                            style={{
                                                backgroundColor: 'rgba(0, 0, 0, .1)',
                                                width: 'auto',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                flexDirection: 'row',
                                                gap: '10px',
                                                alignItems: 'center',
                                                backgroundImage: `url(${photo})`,
                                                backgroundSize: 'cover',

                                            }}>

                                            <a target='_blank' href={photo}>
                                                <IconButton sx={{ p: '8px', backgroundColor: '#D2C3A4' }} aria-label="search" title='Edit' onClick={() => { }}>
                                                    <VisibilityIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
                                                </IconButton>
                                            </a>
                                            <IconButton sx={{ p: '8px', backgroundColor: '#D2C3A4' }} aria-label="search" title='Edit' onClick={() => { removeUpload(index) }}>
                                                <CloseIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
                                            </IconButton>
                                        </ImageListItem>
                                    ))
                                    :
                                    ''}
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
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Box
                    style={{
                        height: 'auto',
                        width: '50vw',
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
                        position: 'relative',
                        maxHeight: '90vh',
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
                            View Room Type
                        </Title>
                        <CloseIcon
                            onClick={handleClose2}
                            style={{
                                color: 'white',
                                cursor: 'pointer',
                                margin: '10px',
                            }} />
                    </div>
                    <Box style={{
                        margin: '30px auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                    }}>
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
                                    startAdornment: <InputAdornment position="start">₱</InputAdornment>,
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
                                {roomTypeImagesDb.length != 0 ?
                                    roomTypeImagesDb.map((item) => (
                                        <ImageListItem
                                            style={{
                                                backgroundColor: 'rgba(0, 0, 0, .1)',
                                                width: '140px', height: '140px', display: 'flex', justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundImage: `url(${apiKey + item.replaceAll("\\", "/")})`,
                                                backgroundSize: 'cover',

                                            }}
                                        >
                                            <a target='_blank' href={apiKey + '' + item}>
                                                <IconButton sx={{ p: '8px', backgroundColor: '#D2C3A4' }} aria-label="search" title='Edit' onClick={() => { }}>
                                                    <VisibilityIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
                                                </IconButton>
                                            </a>
                                        </ImageListItem>
                                    ))
                                    : ""}
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
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Box
                    style={{
                        height: 'auto',
                        width: '50vw',
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
                        position: 'relative',
                        maxHeight: '90vh',
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
                            Edit Room Type
                        </Title>
                        <CloseIcon
                            onClick={handleClose3}
                            style={{
                                color: 'white',
                                cursor: 'pointer',
                                margin: '10px',
                            }} />
                    </div>
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
                                }}
                                inputProps={{ maxLength: 80 }}
                                required
                            />

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
                                    startAdornment: <InputAdornment position="start">₱</InputAdornment>,
                                }}
                                style={{ width: '55%', }}
                                required />
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
                                    required
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
                                placeholder='Room Description'
                                label="Room Description"
                                defaultValue={roomDescription}
                                onChange={(e) => {
                                    setRoomDescription(e.target.value);
                                }}
                                multiline
                                maxRows={4}
                                required
                                inputProps={{ maxLength: 254 }}
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
                                required
                                defaultValue={maxAdultOccupancy}
                                onChange={(e) => {
                                    setMaxAdultOccupancy(e.target.value);
                                }}
                                style={{ width: '55%', }} />

                            <TextField
                                placeholder='Maximum number of kids'
                                label="Maximum number of kids"
                                required
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
                        <Button variant="contained" component="label" disabled={roomTypeImagesDb.length >= 9 ? true : false}>
                            Upload
                            <input hidden accept="image/*" multiple type="file"
                                onChange={
                                    uploadImages
                                }

                            />
                        </Button>
                        <InputContainer>

                            <ImageList sx={{ width: '100%', height: 'auto' }} cols={4} rowHeight={164}>
                                {roomTypeImagesDb.length != 0 ?
                                    roomTypeImagesDb.map((item, index) => (
                                        <ImageListItem
                                            style={{

                                                backgroundColor: 'rgba(0, 0, 0, .1)',
                                                width: 'auto',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                flexDirection: 'row',
                                                gap: '10px',
                                                alignItems: 'center',
                                                backgroundSize: 'cover',
                                                backgroundImage: `url(${apiKey + item.replaceAll("\\", "/")})`,

                                            }}
                                        >
                                            <a target='_blank' href={apiKey + '' + item}>
                                                <IconButton sx={{ p: '8px', backgroundColor: '#D2C3A4' }} aria-label="search" title='Edit' onClick={() => { }}>
                                                    <VisibilityIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
                                                </IconButton>
                                            </a>
                                            <IconButton sx={{ p: '8px', backgroundColor: '#D2C3A4' }} aria-label="search" title='Edit' onClick={() => { removeUpload(index) }}>
                                                <CloseIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
                                            </IconButton>
                                        </ImageListItem>
                                    ))
                                    : ""}
                                {selectedImages.length != 0 ?
                                    selectedImages.map((photo, index) => (
                                        <ImageListItem
                                            style={{
                                                backgroundColor: 'rgba(0, 0, 0, .1)',
                                                width: 'auto',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                flexDirection: 'row',
                                                gap: '10px',
                                                alignItems: 'center',
                                                backgroundSize: 'cover',
                                                backgroundImage: `url(${photo})`,

                                            }}>

                                            <a target='_blank' href={photo}>
                                                <IconButton sx={{ p: '8px', backgroundColor: '#D2C3A4' }} aria-label="search" title='Edit' onClick={() => { }}>
                                                    <VisibilityIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
                                                </IconButton>
                                            </a>
                                            <IconButton sx={{ p: '8px', backgroundColor: '#D2C3A4' }} aria-label="search" title='Edit' onClick={() => { removeUpload(index) }}>
                                                <CloseIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
                                            </IconButton>
                                        </ImageListItem>
                                    ))
                                    :
                                    ''}
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
                                    startAdornment: <InputAdornment position="start">₱</InputAdornment>,
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