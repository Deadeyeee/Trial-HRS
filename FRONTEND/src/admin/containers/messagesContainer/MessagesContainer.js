import React, { useEffect, useState } from 'react'
import { Title } from '../../../client/components/title/styles'
import { ContainerGlobal } from '../../components/container/container'
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine'
import ActionButtonMessages from '../../components/actionButton/ActionButtonMessages';
import Recipt from '../../../client/images/sample_recipt.png';
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
import { FormControlLabel, FormControl, Grow, Pagination, Modal, Autocomplete } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Select from '@mui/material/Select';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { apiKey } from '../../../apiKey';
import axios from 'axios';
import moment from 'moment';

const MessagesContainer = () => {

    const [userInformation, setUserInformation] = useState([])
    const [inbox, setInbox] = useState([])
    const [sent, setSent] = useState([])
    const [messagesDb, setMessagesDb] = useState([])

    const [value, setValue] = useState(Date.now());
    const color = "#c44242";
    const [age, setAge] = React.useState('');


    const [value2, setValue2] = React.useState('1');

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [showComposeMessage, setShowComposeMessage] = useState(false);

    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
    };



    const [reloadData, setReloadData] = React.useState(0);






    function getDates(startDate, stopDate) {
        var dateArray = [];
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push(moment(currentDate).format('YYYY-MM-DD'))
            currentDate = moment(currentDate).add(1, 'days');
        }
        return dateArray;
    }







    const [subject, setSubject] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [toGuest, setToGuest] = React.useState('');
    const [guestList, setGuestList] = React.useState([]);
    const [autoCompleteValue, setAutoCompleteValue] = React.useState('');
    const [autoCompleteInputValue, setAutoCompleteInputValue] = React.useState('');
    // const [deletedConversation, setDeletedConversation] = React.useState([]);
    useEffect(() => {
        axios.get(apiKey + 'auth/verify-token').then((result) => {
            axios.get(apiKey + 'api/getAllGuest').then((guest) => {
                setGuestList(guest.data.filter((obj) => obj.user.role != 'ADMIN' && obj.user.role != 'STAFF'))
                guest.data.map((item) => {
                    if (result.data.id == item.user_id) {

                        setUserInformation(item)

                        axios.get(apiKey + 'api/getAllDeleteConversation').then((deletedConversaiton) => {
                            // console.log('TEST3', deletedConversaiton.data.filter((obj) => obj.delete_conversation_to == userInformation.id).map((obj) => obj.conversation_id))
                            axios.get(apiKey + 'api/getAllMessage').then((messageResult) => {
                                // console.log('SHABU PA', messageResult.data.filter((obj)=> deletedConversaiton.data.filter((obj) => obj.delete_conversation_to == item.id).map((obj) => obj.conversation_id).includes(obj.conversation_id) == false).created_at)
                                console.log('SHABU PA', messageResult.data.filter((obj1) => deletedConversaiton.data.filter((obj2) => obj2.message_id == obj1.id && obj2.delete_conversation_to == item.id).map((item) => item.message_id).includes(obj1.id) == false))
                                setMessagesDb(messageResult.data.filter((obj1) => deletedConversaiton.data.filter((obj2) => obj2.message_id == obj1.id && obj2.delete_conversation_to == item.id).map((item) => item.message_id).includes(obj1.id) == false))
                                // setMessagesDb(messageResult.data.filter((obj) => deletedConversaiton.data.filter((obj) => obj.delete_conversation_to == item.id).map((obj) => obj.conversation_id).includes(messageResult.conversation_id) == false && Date.parse(new Date(deletedConversaiton.data.filter((obj) => obj.delete_conversation_to == item.id).map((obj) => obj.conversation_id).created_at)) > Date.parse(new Date(obj.created_at))))

                                axios.get(apiKey + 'api/getAllConversation').then((result) => {
                                    console.log("TEST1 :", result.data
                                        .filter((item2) => (
                                            messageResult.data
                                                .filter((obj) => obj.conversation_id == item2.id)
                                                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].messageFrom.user.role == 'ADMIN'
                                            ||
                                            messageResult.data
                                                .filter((obj) => obj.conversation_id == item2.id)
                                                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].messageFrom.user.role == 'STAFF'
                                            &&
                                            deletedConversaiton.data.filter((obj1) => obj1.delete_conversation_to == item.id).map((obj2) => obj2.message_id)
                                                .includes(
                                                    messageResult.data
                                                        .filter((obj) => obj.conversation_id == item2.id)
                                                        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].id
                                                ) == false
                                        )))





                                    console.log("TEST2 :", result.data
                                        .filter((item2) => (
                                            messageResult.data
                                                .filter((obj) => obj.conversation_id == item2.id)
                                                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].messageFrom.user.role != 'ADMIN'
                                            &&
                                            messageResult.data
                                                .filter((obj) => obj.conversation_id == item2.id)
                                                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].messageFrom.user.role != 'STAFF'
                                            &&
                                            deletedConversaiton.data.filter((obj1) => obj1.delete_conversation_to == item.id).map((obj2) => obj2.message_id)
                                                .includes(
                                                    messageResult.data
                                                        .filter((obj) => obj.conversation_id == item2.id)
                                                        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].id
                                                ) == false

                                        )))
                                    setInbox(result.data.filter((item2) => (
                                        messageResult.data
                                            .filter((obj) => obj.conversation_id == item2.id)
                                            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].messageFrom.user.role != 'ADMIN'
                                        &&
                                        messageResult.data
                                            .filter((obj) => obj.conversation_id == item2.id)
                                            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].messageFrom.user.role != 'STAFF'
                                        &&
                                        deletedConversaiton.data.filter((obj1) => obj1.delete_conversation_to == item.id).map((obj2) => obj2.message_id)
                                            .includes(
                                                messageResult.data
                                                    .filter((obj) => obj.conversation_id == item2.id)
                                                    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].id
                                            ) == false

                                    )))
                                    setSent(result.data
                                        // .filter((obj) => obj.from_guest_id == item.id || obj.to_guest_id == item.id)
                                        // .filter((obj2) => deletedConversaiton.data.filter((obj) => obj.delete_conversation_to == item.id).map((obj) => obj.conversation_id).includes(obj2.id) == false)
                                        .filter((item2) => (
                                            messageResult.data
                                                .filter((obj) => obj.conversation_id == item2.id)
                                                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].messageFrom.user.role == 'ADMIN'
                                            ||
                                            messageResult.data
                                                .filter((obj) => obj.conversation_id == item2.id)
                                                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].messageFrom.user.role == 'STAFF'
                                            &&
                                            deletedConversaiton.data.filter((obj1) => obj1.delete_conversation_to == item.id).map((obj2) => obj2.message_id)
                                                .includes(
                                                    messageResult.data
                                                        .filter((obj) => obj.conversation_id == item2.id)
                                                        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].id
                                                ) == false
                                        )))




                                    // setDeletedConversation(deletedConversaiton.data.filter((obj) => obj.delete_conversation_to == userInformation.id).map((obj) => obj.conversation_id))


                                }).catch((err) => {
                                    console.log(err)

                                });
                            }).catch((err) => {
                                console.log(err)

                            });
                        }).catch((err) => {
                            console.log(err)

                        });

                    }
                })
                console.log(guest.data)
            }).catch((err) => {
                console.log(err)

            });
        }).catch((err) => {
            console.log(err)
        });
    }, [reloadData])




    const [openCompose, setOpenCompose] = React.useState(false);

    const handleOpenCompose = () => setOpenCompose(true);
    const handleCloseCompose = () => {
        setOpenCompose(false)
        setReloadData(reloadData + 1);

        setMessage('')
        setSubject('')
    };


    const [viewMessage, setViewMessage] = React.useState(false);
    const [conversationId, setConversationId] = React.useState([]);

    const handleOpenViewMessage = (value) => {


        if (messagesDb.filter((obj) => obj.conversation_id == value.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].messageTo.user.role != 'NON-USER' && messagesDb.filter((obj) => obj.conversation_id == value.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].messageTo.user.role != 'CUSTOMER') {
            axios.patch(apiKey + 'api/updateMessage/' + messagesDb.filter((obj) => obj.conversation_id == value.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].id, {
                status: true,
            })
                .then((result) => {
                    console.log(result.data);
                })
                .catch((err) => {
                    console.log(err);

                });
        }


        setViewMessage(true)
        setConversationId(value)
        setMessage('')
        setSubject('')
    };
    const handleCloseViewMessage = () => {
        setReloadData(reloadData + 1);
        setViewMessage(false)
        setMessage('')
        setSubject('')
        setConversationId([])
        setAutoCompleteInputValue('')
        setAutoCompleteValue('')
    };

    const [inboxPage, setInboxPage] = useState(1)
    const [sentPage, setSentPage] = useState(1)


    const sendComposeMessage = (e) => {
        e.preventDefault()
        console.log('ASD')
        console.log('guestList.filter((obj)=> obj.user.userName == autoCompleteValue).map((item) => item.id)', autoCompleteValue.match(/\((.*)\)/).pop(), guestList.filter((obj) => obj.user.userName == autoCompleteValue.match(/\((.*)\)/).pop()).map((item) => item.id)[0])
        axios.get(apiKey + 'api/getAllGuest').then((guest) => {
            if (guest.data.length != 0) {
                guest.data.filter((obj) => obj.user.role == 'ADMIN').map((item, index) => {
                    if (index == 0) {
                        axios.post(apiKey + 'api/addConversation', {
                            from_guest_id: userInformation.id,
                            to_guest_id: guestList.filter((obj) => obj.user.userName == autoCompleteValue.match(/\((.*)\)/).pop()).map((item) => item.id)[0],
                            subject: subject,
                        }).then((result) => {
                            console.log(result.data);
                            axios.post(apiKey + 'api/addMessage', {
                                message: message,
                                conversation_id: result.data.new_conversation.id,
                                message_to_guest_id: guestList.filter((obj) => obj.user.userName == autoCompleteValue.match(/\((.*)\)/).pop()).map((item) => item.id)[0],
                                message_from_guest_id: userInformation.id,
                            }).then((result) => {
                                console.log(result.data);
                                // window.location.reload()

                                handleCloseCompose()
                            }).catch((err) => {
                                console.log(err);

                            });
                        }).catch((err) => {
                            console.log(err);

                        });
                    }

                })
            }
            else {
                console.log('no users')
            }
        }).catch((err) => {
            console.log(err);
        });

    }


    const sendReply = (value) => {
        console.log(value.id)
        if (value.conversationFrom.user.role == 'CUSTOMER' || value.conversationFrom.user.role == 'NON-USER') {
            axios.post(apiKey + 'api/addMessage', {
                message: message,
                conversation_id: value.id,
                message_to_guest_id: value.from_guest_id,
                message_from_guest_id: userInformation.id,
            }).then((result) => {
                console.log(result.data);
                axios.patch(apiKey + 'api/updateConversation/' + value.id, {
                    created_at: new Date(),
                }).then((result) => {
                    console.log(result.data);

                    handleCloseViewMessage()
                }).catch((err) => {
                    console.log(err);

                });
            }).catch((err) => {
                console.log(err);

            });
        }
        else {
            axios.post(apiKey + 'api/addMessage', {
                message: message,
                conversation_id: value.id,
                message_to_guest_id: value.to_guest_id,
                message_from_guest_id: userInformation.id,
            }).then((result) => {
                console.log(result.data);
                axios.patch(apiKey + 'api/updateConversation/' + value.id, {
                    created_at: new Date(Date.now()),
                }).then((result) => {
                    console.log(result.data);

                    handleCloseViewMessage()
                }).catch((err) => {
                    console.log(err);

                });
            }).catch((err) => {
                console.log(err);

            });
        }
    }



    const deleteConversation = (value) => {
        if (window.confirm('Are you sure you want to delete this conversation?')) {
            axios.get(apiKey + 'api/getAllMessage').then((result) => {
                result.data.filter((obj) => obj.conversation_id == value).map((item, index, array) => {

                    axios.get(apiKey + 'api/getAllDeleteConversation').then((deletedMessages) => {
                        if (deletedMessages.data.filter((obj) => obj.delete_conversation_to == userInformation.id && obj.message_id == item.id).length == 0) {
                            axios.post(apiKey + 'api/addDeleteConversation', {
                                delete_conversation_to: userInformation.id,
                                message_id: item.id,
                            }).then((result) => {
                                console.log(result.data)
                                if (index == array.length - 1) {
                                    window.location = ''
                                }
                            }).catch((err) => {
                                console.log(err)

                            });
                        }
                    }).catch((err) => {

                    });

                })


            }).catch((err) => {
                console.log(err)

            });



        }
    }



    const [search, setSearch] = useState('')
    const [endDateFilter, setEndDateFilter] = useState(null)
    const [startDateFilter, setStartDateFilter] = useState(null)
    const [categoryMenu, setCategoryMenu] = useState(null)

    useEffect(() => {
        if (startDateFilter != null && endDateFilter != null) {
            if (Date.parse(startDateFilter) > Date.parse(endDateFilter)) {
                // setEndDate(new Date(startDate).getTime() + 86400000)
                setEndDateFilter(new Date(Date.parse(startDateFilter) + 86400000))
            }
        }
    }, [startDateFilter, endDateFilter])



    return (

        <Container
            style={{ height: 'auto' }}
        >




            <Modal
                open={openCompose}
                onClose={handleCloseCompose}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Box
                    component='form'
                    onSubmit={sendComposeMessage}
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
                            Compose message
                        </Title>
                        <CloseIcon
                            onClick={handleCloseCompose}
                            style={{
                                color: 'white',
                                cursor: 'pointer',
                                margin: '10px',
                            }} />
                    </div>
                    <ContainerGlobal
                        w='95%' overflow='visible' margin='5px auto'
                        align='center' gap='10px'
                    >
                        <Title
                            size='16px'
                            color='black'
                            family='Helvetica'
                            fstyle='normal'
                            weight='400'
                            align='left'
                            margin='0px 0px 0px 0px'
                        >
                            <b>To:</b>
                        </Title>
                        {/* <TextField
                            id="outlined-basic" style={{ width: '400px' }}
                            label="Guest Name or Username"
                            variant="outlined"
                            size='small'
                            value={subject}
                            onChange={(e) => {
                                setToGuest(e.target.value)
                            }}
                            inputProps={{ maxLength: 150 }}
                            required
                        /> */}

                        <Autocomplete

                            value={autoCompleteValue}
                            onChange={(event, newValue) => {
                                setAutoCompleteValue(newValue);
                            }}
                            inputValue={autoCompleteInputValue}
                            onInputChange={(event, newInputValue) => {
                                setAutoCompleteInputValue(newInputValue);
                            }}
                            id="controllable-states-demo"
                            options={guestList.map((item) => item.firstName + ' ' + item.lastName + ' (' + item.user.userName + ') - ' + item.user.role)}
                            fullWidth={true}
                            renderInput={(params) => <TextField {...params} label="Guests" placeholder='Choose guest' required />}

                        />
                    </ContainerGlobal>
                    <ContainerGlobal
                        w='95%' overflow='visible' margin='5px auto'
                        align='center' gap='10px'
                    >
                        <Title
                            size='16px'
                            color='black'
                            family='Helvetica'
                            fstyle='normal'
                            weight='400'
                            align='left'
                            margin='0px 0px 0px 0px'
                        >
                            <b>Subject:</b>
                        </Title>
                        <TextField
                            id="outlined-basic" style={{ width: '400px' }}
                            label="Subject"
                            variant="outlined"
                            size='small'
                            value={subject}
                            onChange={(e) => {
                                setSubject(e.target.value)
                            }}
                            inputProps={{ maxLength: 150 }}
                            required
                        />
                    </ContainerGlobal>
                    <Title
                        size='16px'
                        color='black'
                        family='Helvetica'
                        fstyle='normal'
                        weight='400'
                        align='left' w='95%' margin='5px auto'
                    >
                        <b>Message:</b>
                    </Title>
                    <TextField
                        id="outlined-basic"
                        label="Write your message here..."
                        variant="outlined"
                        multiline
                        rows={10}
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value)
                        }}
                        required

                        inputProps={{ maxLength: 255 }}
                        style={{ width: '95%', margin: '0px auto' }} />
                    <ContainerGlobal
                        w='auto'
                        h='auto'
                        bg='none'
                        direction='row'
                        gap='10px'
                        justify='center'
                        margin='auto'
                        align='center'
                        overflow='none'
                    >
                        <Button variant="contained" size="large"
                            style={{ backgroundColor: '#948566' }}
                            type='submit'
                        >
                            Send
                        </Button>
                        <Button variant="contained" size="large"
                            style={{ backgroundColor: '#FF2400' }}

                            onClick={() => { handleCloseCompose() }}
                        >
                            Cancel
                        </Button>
                    </ContainerGlobal>
                </Box>
            </Modal>


            <Modal
                open={viewMessage}
                onClose={handleCloseViewMessage}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Box
                    component='form'
                    // onSubmit={updatePassword}
                    style={{
                        height: 'auto',
                        maxHeight: '90vh',
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
                        <div style={{
                            margin: '0px auto 0px 10px',
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center',
                            maxWidth: '600px'
                        }}>
                            <Title
                                size='16px'
                                color='white'
                                family='Helvetica'
                                fstyle='normal'
                                weight='bold'
                                align='left'
                                bg='#948566'
                                borderRadius='0.5rem'
                                padding='5px 10px'

                            >
                                Subject:
                            </Title>
                            <Title
                                size='14px'
                                color='white'
                                family='Helvetica'
                                fstyle='normal'
                                weight='normal'
                                align='left'
                                style={{
                                    width: '400px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}
                            >
                                {conversationId.subject}
                            </Title>
                        </div>
                        <CloseIcon
                            onClick={handleCloseViewMessage}
                            style={{
                                color: 'white',
                                cursor: 'pointer',
                                margin: '10px',
                            }} />
                    </div>
                    <div style={{ width: '100%', overflowY: 'scroll', height: '500px', overflowX: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        {messagesDb.length != 0 && conversationId.length != 0 ?
                            messagesDb
                                .filter((obj) => obj.conversation_id == conversationId.id)
                                .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
                                .map((item) => (
                                    item.messageTo.user.role == 'ADMIN' || item.messageTo.user.role == 'STAFF' ?
                                        <div style={{ display: 'flex', flexDirection: 'column', width: '50%', marginBottom: '30px', marginLeft: '5px' }}>
                                            <ContainerGlobal
                                                w='95%' overflow='visible' margin='5px auto'
                                            >
                                                <Title
                                                    size='16px'
                                                    color='black'
                                                    family='Helvetica'
                                                    fstyle='normal'
                                                    weight='400'
                                                    align='left'
                                                    margin='0px 0px 0px 0px'
                                                    style={{
                                                        width: '50%',
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis'
                                                    }}
                                                >
                                                    <b>From:</b> {item.messageFrom.firstName}({item.messageFrom.user.userName})
                                                </Title>
                                                <Title
                                                    size='16px'
                                                    color='black'
                                                    family='Helvetica'
                                                    fstyle='normal'
                                                    weight='400'
                                                    align='left'
                                                    margin='0px 0px 0px auto'
                                                >
                                                    {new Date(item.created_at).toLocaleDateString() + ' '}
                                                    {new Date(item.created_at).toLocaleTimeString().split(':')[0]}:{new Date(item.created_at).toLocaleTimeString().split(':')[0] + ' '}
                                                    {new Date(item.created_at).toLocaleTimeString().split(' ')[1] + ' '}

                                                </Title>
                                            </ContainerGlobal>
                                            <ContainerGlobal
                                                w='95%'
                                                h='auto'
                                                margin='auto'
                                                bg='rgb(183, 183, 183,.3)'
                                                padding='10px'
                                                style={{ textAlign: 'justify', minHeight: '100px' }}
                                                direction='column'
                                                overflow='auto'
                                            >
                                                <p style={{ wordWrap: 'break-word', width: '100%', margin: '0px', }}>{item.message}</p>
                                            </ContainerGlobal>
                                        </div>
                                        :
                                        <div style={{ display: 'flex', flexDirection: 'column', width: '50%', marginBottom: '30px', marginLeft: 'auto' }}>
                                            <ContainerGlobal
                                                w='95%' overflow='visible' margin='5px auto'
                                            >
                                                <Title
                                                    size='16px'
                                                    color='black'
                                                    family='Helvetica'
                                                    fstyle='normal'
                                                    weight='400'
                                                    align='left'
                                                    margin='0px 0px 0px 0px'
                                                >
                                                    {new Date(item.created_at).toLocaleDateString() + ' '}
                                                    {new Date(item.created_at).toLocaleTimeString().split(':')[0]}:{new Date(item.created_at).toLocaleTimeString().split(':')[0] + ' '}
                                                    {new Date(item.created_at).toLocaleTimeString().split(' ')[1]}
                                                </Title>
                                                <Title
                                                    size='16px'
                                                    color='black'
                                                    family='Helvetica'
                                                    fstyle='normal'
                                                    weight='400'
                                                    align='right'
                                                    margin='0px 0px 0px auto'
                                                    style={{
                                                        width: '50%',
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis'
                                                    }}
                                                >
                                                    <b>Reply from:</b> {item.messageFrom.user.userName}({item.messageFrom.user.role == 'ADMIN' ? 'Admin' : 'Front desk'})
                                                </Title>
                                            </ContainerGlobal>
                                            <ContainerGlobal
                                                w='95%'
                                                h='auto'
                                                margin='auto'
                                                bg='#d2c3a4'
                                                padding='10px'
                                                style={{ textAlign: 'justify', minHeight: '100px' }}
                                                direction='column'
                                                overflow='auto'
                                            >
                                                <p style={{ wordWrap: 'break-word', width: '100%', margin: '0px', }}>{item.message}</p>
                                            </ContainerGlobal>
                                        </div>

                                ))
                            : ''}




                    </div>

                    <hr style={{ width: '100%' }}></hr>
                    <Title
                        size='16px'
                        color='black'
                        family='Helvetica'
                        fstyle='normal'
                        weight='400'
                        align='left' w='95%' margin='5px auto'
                    >
                        <b>Message:</b>
                    </Title>
                    <TextField
                        id="outlined-basic"
                        label="Write your message here..."
                        variant="outlined"
                        multiline
                        rows={5}
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value)
                        }}

                        inputProps={{ maxLength: 255 }}
                        style={{ width: '95%', margin: '0px auto' }} />

                    <ContainerGlobal
                        w='auto'
                        h='auto'
                        bg='none'
                        direction='row'
                        gap='10px'
                        justify='center'
                        margin='auto'
                        align='center'
                        overflow='none'
                    >
                        <Button variant="contained" size="large"
                            style={{ backgroundColor: '#948566' }}
                            disabled={message == '' ? true : false}
                            onClick={() => sendReply(conversationId)}
                        >
                            Reply
                        </Button>
                        <Button variant="contained" size="large"
                            style={{ backgroundColor: '#FF2400' }}

                            onClick={() => { handleCloseViewMessage() }}
                        >
                            Cancel
                        </Button>
                    </ContainerGlobal>
                </Box>
            </Modal>










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
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
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
                            value={startDateFilter}
                            onChange={(newValue) => {
                                setStartDateFilter(newValue);
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
                            minDate={startDateFilter}
                            value={endDateFilter}
                            onChange={(newValue) => {
                                setEndDateFilter(newValue);
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

                    {startDateFilter != null || endDateFilter != null ?
                        <IconButton onClick={() => {
                            setStartDateFilter(null)
                            setEndDateFilter(null)
                            setSearch('')
                        }}>
                            <CloseIcon />
                        </IconButton>
                        : ''}


                </ContainerGlobal>
            </ContainerGlobal>




            <ContainerGlobal
                w='90%'
                h='700px'
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
                <TabContext value={value2} >
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange2} aria-label="lab API tabs example">
                            <Tab label="Inbox" value="1" />
                            <Tab label="Sent" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1" style={{ width: '100%', height: '900px', maxHeight: '500px', padding: '0px' }} >

                        <TableContainer
                            cellspacing="0"
                            cellpadding="0"
                            style={{
                                width: '95%',
                                height: '10px',
                                overflow: 'hidden',
                                position: 'static',
                                tableLayout: 'auto',
                                margin: '0px auto',
                                // border: '1px solid black'

                            }}
                        >
                            <thead>
                                <Tr cursor='normal'>
                                    <Th align='left' style={{ width: '10%', paddingLeft: '5px' }}>From</Th>
                                    <Th align='center' style={{ width: '20%' }}>Subject</Th>
                                    <Th align='center' style={{ width: '25%' }} >Message</Th>
                                    <Th align='center' style={{ width: '10%' }}>Date</Th>
                                    <Th align='center' style={{ width: '10%' }}>Time</Th>
                                    <Th align='center' style={{ width: '10%' }}>Action</Th>
                                </Tr>
                            </thead>
                            <tbody style={{ height: '10px', overflow: 'hidden' }}>
                                {inbox != 0 && messagesDb.length != 0 ?
                                    inbox
                                        .filter((item) => {
                                            if (startDateFilter != null && endDateFilter != null) {
                                                let filterDates = getDates(startDateFilter, endDateFilter);
                                                if (filterDates.includes(moment(item.created_at).format('YYYY-MM-DD'))) {
                                                    return item
                                                }
                                            }
                                            else {
                                                return item
                                            }
                                        })
                                        .filter((item) => {
                                            if (search != '') {
                                                if (new Date(item.created_at).toLocaleDateString().includes(search)
                                                    || (new Date(item.created_at).toLocaleTimeString().split(':')[0] + ':' + new Date(item.created_at).toLocaleTimeString().split(':')[1] + ' ' + new Date(item.created_at).toLocaleTimeString().split(' ')[1]).toLowerCase().includes(search.toLowerCase())
                                                    || item.subject.toLowerCase().includes(search.toLowerCase())
                                                ) {
                                                    return item;
                                                }
                                                else if (messagesDb != 0) {
                                                    if ((messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].messageFrom.user.userName).toLowerCase().includes(search.toLowerCase())) {
                                                        return messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].conversation_id == item.id
                                                    }
                                                    else if ((messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].message).toLowerCase().includes(search.toLowerCase())) {
                                                        return messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].conversation_id == item.id
                                                    }
                                                }
                                            }
                                            else {
                                                return item
                                            }
                                        })
                                        // .filter((obj) => obj.to_guest_id == userInformation.id || obj.to_guest_id == userInformation.id)
                                        // .filter((obj) => obj.message.message_to_guest_id != userInformation.id)
                                        // .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                                        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
                                        // .filter((obj)=> console.log('deletedConversation', deletedConversation))
                                        // .filter((obj) => deletedConversation.includes(obj.id) == false)
                                        // .filter((obj, index, array) => index != 0 ? array[index].id != array[index - 1].id : array[index])


                                        .slice((inboxPage - 1) * 6, inboxPage * 6)
                                        .map((item) => (
                                            <Tr
                                                whileHover={{ boxShadow: '0px 2px 2px gray' }}
                                                whileTap={{ boxShadow: 'none' }}
                                                style={messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].status == true && { backgroundColor: 'rgb(40,40,40, .05', }}
                                                onClick={() => handleOpenViewMessage(item)}
                                            >
                                                <Td align='left' style={{ paddingLeft: '5px' }} normal={messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].status == true && 'normal'}><p style={{ margin: 'auto', width: '300px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].messageFrom.user.userName}</p></Td>
                                                <Td align='center' normal={messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].status == true && 'normal'}><p style={{ margin: 'auto', width: '300px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{item.subject}</p></Td>
                                                <Td align='center' normal={messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].status == true && 'normal'}><p style={{ margin: 'auto', width: '300px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                                    {messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].message}
                                                </p>
                                                </Td>
                                                <Td align='center' normal={messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].status == true && 'normal'}>{new Date(item.created_at).toLocaleDateString()} </Td>
                                                {/* <Td align='center' normal={item.status == true && 'normal'}>{new Date(item.created_at).toLocaleTimeString().split(':')[0]}:{new Date(messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].created_at).toLocaleTimeString().split(':')[1]} {new Date(messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].created_at).toLocaleTimeString().split(' ')[1]}</Td> */}
                                                <Td align='center' normal={messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].status == true && 'normal'}>{new Date(item.created_at).toLocaleTimeString().split(':')[0]}:{new Date(item.created_at).toLocaleTimeString().split(':')[1]} {new Date(item.created_at).toLocaleTimeString().split(' ')[1]}</Td>
                                                <Td align='center' normal={messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].status == true && 'normal'}><ActionButtonMessages style={{ zIndex: '3' }} delete={() => deleteConversation(item.id)} /></Td>
                                            </Tr>
                                        )) :
                                    <Tr
                                    >
                                        <Td colSpan={5} align='center'>No Inbox</Td>
                                    </Tr>
                                }

                            </tbody>
                        </TableContainer>
                        <Pagination
                            page={inboxPage}
                            count={inbox.length != 0 && Math.ceil(inbox
                                .filter((item) => {
                                    if (startDateFilter != null && endDateFilter != null) {
                                        let filterDates = getDates(startDateFilter, endDateFilter);
                                        if (filterDates.includes(moment(item.created_at).format('YYYY-MM-DD'))) {
                                            return item
                                        }
                                    }
                                    else {
                                        return item
                                    }
                                })
                                .filter((item) => {
                                    if (search != '') {
                                        if (new Date(item.created_at).toLocaleDateString().includes(search)
                                            || (new Date(item.created_at).toLocaleTimeString().split(':')[0] + ':' + new Date(item.created_at).toLocaleTimeString().split(':')[1] + ' ' + new Date(item.created_at).toLocaleTimeString().split(' ')[1]).toLowerCase().includes(search.toLowerCase())
                                            || item.subject.toLowerCase().includes(search.toLowerCase())
                                        ) {
                                            return item;
                                        }
                                        else if (messagesDb != 0) {
                                            if ((messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].messageFrom.user.userName).toLowerCase().includes(search.toLowerCase())) {
                                                return messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].conversation_id == item.id
                                            }
                                            else if ((messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].message).toLowerCase().includes(search.toLowerCase())) {
                                                return messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].conversation_id == item.id
                                            }
                                        }
                                    }
                                    else {
                                        return item
                                    }
                                }).length / 6)}
                            onChange={(e, value) => {
                                setInboxPage(value)
                            }}
                            style={{
                                justifyContent: "center",
                                display: 'flex',
                                margin: '20px',
                            }}
                        />

                    </TabPanel>
                    <TabPanel value="2" style={{ width: '100%', height: '900px', maxHeight: '500px', padding: '0px' }}  >

                        <TableContainer
                            cellspacing="0"
                            cellpadding="0"
                            style={{
                                width: '95%',
                                height: '10px',
                                overflow: 'hidden',
                                position: 'static',
                                tableLayout: 'auto',
                                margin: '0px auto',
                                // border: '1px solid black'

                            }}
                        >
                            <Tr>
                                <Th align='left' style={{ width: '10%', paddingLeft: '5px' }}>To</Th>
                                <Th align='center' style={{ width: '20%' }}>Subject</Th>
                                <Th align='center' style={{ width: '45%' }} >Message</Th>
                                <Th align='center' style={{ width: '10%' }}>Date</Th>
                                <Th align='center' style={{ width: '10%' }}>Time</Th>
                                <Th align='center' style={{ width: '10%' }}>Action</Th>
                            </Tr>
                            {sent.length != 0 && messagesDb.length != 0 ?
                                sent
                                    .filter((item) => {
                                        if (startDateFilter != null && endDateFilter != null) {
                                            let filterDates = getDates(startDateFilter, endDateFilter);
                                            if (filterDates.includes(moment(item.created_at).format('YYYY-MM-DD'))) {
                                                return item
                                            }
                                        }
                                        else {
                                            return item
                                        }
                                    })
                                    .filter((item) => {
                                        if (search != '') {
                                            if (new Date(item.created_at).toLocaleDateString().includes(search)
                                                || (new Date(item.created_at).toLocaleTimeString().split(':')[0] + ':' + new Date(item.created_at).toLocaleTimeString().split(':')[1] + ' ' + new Date(item.created_at).toLocaleTimeString().split(' ')[1]).toLowerCase().includes(search.toLowerCase())
                                                || item.subject.toLowerCase().includes(search.toLowerCase())
                                            ) {
                                                return item;
                                            }
                                            else if (messagesDb != 0) {
                                                if ((messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].messageTo.user.userName).toLowerCase().includes(search.toLowerCase())) {
                                                    return messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].conversation_id == item.id
                                                }
                                                else if ((messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].message).toLowerCase().includes(search.toLowerCase())) {
                                                    return messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].conversation_id == item.id
                                                }
                                            }
                                        }
                                        else {
                                            return item
                                        }
                                    })
                                    // .filter((obj) => obj.to_guest_id == userInformation.id || obj.to_guest_id == userInformation.id)
                                    // .filter((obj) => obj.message.message_to_guest_id != userInformation.id)
                                    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
                                    // .filter((obj, index, array) => index != 0 ? array[index].id != array[index - 1].id : array[index])
                                    .slice((sentPage - 1) * 6, sentPage * 6)
                                    .map((item) => (
                                        messagesDb.filter((obj) => obj.conversation_id == item.id).length != 0 &&
                                        <Tr
                                            whileHover={{ boxShadow: '0px 2px 2px gray' }}
                                            whileTap={{ boxShadow: 'none' }}
                                            style={{ backgroundColor: 'rgb(40,40,40, .05', }}
                                            onClick={() => handleOpenViewMessage(item)}
                                        >
                                            <Td align='left' style={{ paddingLeft: '5px' }} normal><p style={{ margin: 'auto', width: '300px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].messageTo.user.userName}</p></Td>
                                            <Td align='center' normal><p style={{ margin: 'auto', width: '300px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{item.subject}</p></Td>
                                            <Td align='center' normal><p style={{ margin: 'auto', width: '300px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                                {messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].message}
                                            </p>
                                            </Td>
                                            <Td align='center' normal>{new Date(item.created_at).toLocaleDateString()} </Td>
                                            {/* <Td align='center' normal>{new Date(item.created_at).toLocaleTimeString().split(':')[0]}:{new Date(messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].created_at).toLocaleTimeString().split(':')[1]} {new Date(messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].created_at).toLocaleTimeString().split(' ')[1]}</Td> */}
                                            <Td align='center' normal>{new Date(item.created_at).toLocaleTimeString().split(':')[0]}:{new Date(item.created_at).toLocaleTimeString().split(':')[1]} {new Date(item.created_at).toLocaleTimeString().split(' ')[1]}</Td>
                                            <Td align='center' normal><ActionButtonMessages style={{ zIndex: '3' }} delete={() => deleteConversation(item.id)} /></Td>
                                        </Tr>
                                    )) : <Tr
                                    >
                                    <Td colSpan={5} align='center'>Empty, please check your inbox.</Td>
                                </Tr>}

                        </TableContainer>
                        <Pagination
                            page={sentPage}
                            count={sent.length != 0 && Math.ceil(sent
                                .filter((item) => {
                                    if (startDateFilter != null && endDateFilter != null) {
                                        let filterDates = getDates(startDateFilter, endDateFilter);
                                        if (filterDates.includes(moment(item.created_at).format('YYYY-MM-DD'))) {
                                            return item
                                        }
                                    }
                                    else {
                                        return item
                                    }
                                })
                                .filter((item) => {
                                    if (search != '') {
                                        if (new Date(item.created_at).toLocaleDateString().includes(search)
                                            || (new Date(item.created_at).toLocaleTimeString().split(':')[0] + ':' + new Date(item.created_at).toLocaleTimeString().split(':')[1] + ' ' + new Date(item.created_at).toLocaleTimeString().split(' ')[1]).toLowerCase().includes(search.toLowerCase())
                                            || item.subject.toLowerCase().includes(search.toLowerCase())
                                        ) {
                                            return item;
                                        }
                                        else if (messagesDb != 0) {
                                            if ((messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].messageTo.user.userName).toLowerCase().includes(search.toLowerCase())) {
                                                return messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].conversation_id == item.id
                                            }
                                            else if ((messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].message).toLowerCase().includes(search.toLowerCase())) {
                                                return messagesDb.filter((obj) => obj.conversation_id == item.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].conversation_id == item.id
                                            }
                                        }
                                    }
                                    else {
                                        return item
                                    }
                                }).filter((item) => {
                                    if (messagesDb.filter((obj) => obj.conversation_id == item.id).length != 0) {
                                        return item
                                    }
                                }).length / 6)}
                            onChange={(e, value) => {
                                setSentPage(value)
                            }}

                            style={{
                                justifyContent: "center",
                                display: 'flex',
                                margin: '20px',
                            }}
                        />
                    </TabPanel>
                </TabContext>





            </ContainerGlobal>

            <Button
                variant="contained"
                size="large"
                style={{ backgroundColor: '#2f2f2f', marginBottom: '10px' }}
                onClick={() => handleOpenCompose()}
            >

                Compose message
            </Button>


        </Container>
    )
}

export default MessagesContainer