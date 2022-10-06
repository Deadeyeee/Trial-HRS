import React, { useEffect, useState } from 'react'
import { Title } from '../../components/title/styles'
import { BrownTab, Container, FlexboxContainer, HeadContainer, TabContainer, TableColumn, TableContainer, TableRow, Td, Th, Tr } from './Styles'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ContainerGlobal } from '../../../admin/components/container/container';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { HorizontalLine } from '../../components/horizontalLine/HorizontalLine';
import { Button as Button2 } from '../../components/button/styles';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from 'axios'


const BillingSummaryContainer = () => {
    const [value, setValue] = React.useState('cash');
    const [grandTotal, setGrandTotal] = useState(0);
    const [bookingInformation, setBookingInformation] = useState([])
    const [modeOfPayment, setModeOfPayment] = useState([]);
    const [modeOfPaymentValue, setModeOfPaymentValue] = useState();
    const [typeOfPayment, setTypeOfPayment] = useState('Down Payment');
    const [discount, setDiscount] = useState([]);
    const [discountValue, setDiscountValue] = useState();


    const [paymentModeId, setPaymentModeId] = useState();
    const [discountId, setDiscountId] = useState();


    useEffect(() => {
        setBookingInformation(JSON.parse(window.sessionStorage.getItem("AvailedRoom")))
        console.log(bookingInformation)

        axios.get('http://localhost:3001/api/getAllPaymentMode').then((result) => {
            setModeOfPayment(result.data);

        }).catch((err) => {
            console.log(err.result)
        });

        axios.get('http://localhost:3001/api/getAllDiscount').then((result) => {
            setDiscount(result.data);
        }).catch((err) => {
            console.log(err.result)
        });
    }, [])


    useEffect(() => {
        setGrandTotal(0);
        bookingInformation.map((item) => (
            setGrandTotal((prevValue) => prevValue + (item.roomRate * item.roomQuantity * item.nights))
        ))



    }, [bookingInformation])

    useEffect(() => {
        modeOfPayment.map((value) => {
            if (value.paymentMode == modeOfPaymentValue) {
                setPaymentModeId(value.id)
                console.log(value.paymentMode)
            }
        })

        discount.map((value) => {
            if (value.discountType == discountValue) {
                setDiscountId(value.id)
                console.log(value.discountType)
            }
        })


        console.log(discountId)
        console.log(paymentModeId)
    }, [modeOfPaymentValue, discountValue])



    const createReservation = () => {
        console.log(discountId)
        console.log(paymentModeId)
        axios.post("http://localhost:3001/api/addUser", {
            contactNumber: window.sessionStorage.getItem('contactNumber'),
            email: window.sessionStorage.getItem('email'),
            role: "NON-USER"
        }).then((result) => {
            console.log(result.data)
            axios.post("http://localhost:3001/api/addGuest", {
                user_id: result.data.account.id,
                firstName: window.sessionStorage.getItem('firstName'),
                lastName: window.sessionStorage.getItem('lastName'),
                birthDate: window.sessionStorage.getItem('birthday'),
                gender: window.sessionStorage.getItem('gender'),
                address: window.sessionStorage.getItem('address'),
                nationality: window.sessionStorage.getItem('nationality'),
            }).then((result) => {
                console.log(result.data)
                axios.post("http://localhost:3001/api/addReservation", {
                    reservationDate: reservationDate,
                    guest_id: result.data.new_guest.id,
                    reservationReferenceNumber: Math.random().toString(36).slice(2),
                }).then((result) => {
                    console.log(result.data)


                    axios.post("http://localhost:3001/api/addPayment", {
                        paymentMade: 0,
                        discount_id: discountId,
                        paymentMode_id: paymentModeId,
                        reservation_id: result.data.new_reservation.id,
                    }).then((result) => {
                        console.log(result.data)

                    }).catch((err) => {
                        console.log(err.result)

                    });


                    for (let index = 0; index < bookingInformation.length; index++) {
                        bookingInformation[index].roomID.map((value) => {
                            let items = {
                                checkInDate: bookingInformation[index].checkIn,
                                checkOutDate: bookingInformation[index].checkOut,
                                numberOfNights: bookingInformation[index].nights,
                                reservation_id: result.data.new_reservation.id,
                                room_id: value,
                                // numberOfAdults:
                                // numberOfKids:
                            }
                            axios.post("http://localhost:3001/api/addReservationSummary", items).then((result) => {
                                console.log(result.data)

                            }).catch((err) => {
                                console.log(err.result)

                            });
                        })
                    }

                    // bookingInformation.map((item) => {
                    //     axios.post("http://localhost:3001/api/addReservationSummary", {
                    //         reservation_id: result.id,
                    //         room_id: item.id,
                    //         checkInDate: item.checkIn,
                    //         checkOutDate: item.checkOut,
                    //         numberOfNights: item.nights
                    //     }).then((result) => {
                    //         console.log(result.data)
                    //     }).catch((err) => {
                    //         console.log(err.result)
                    //     });
                    // })



                }).catch((err) => {
                    console.log(err.result)

                });

            }).catch((err) => {
                console.log(err.result)
            });
        }).catch((err) => {
            console.log(err.result)
        });

    }


    const numberFormat = (value) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'PHP'
        }).format(value);

    let reservationDate = Date.now()
    return (
        <Container>
            <Title
                color='#bfaa7e'
                weight='normal'
                size='50px'
                margin='60px 0px 10px 0px'
            >
                Billing Summary
            </Title>
            <HorizontalLine
                w="30%"
                margin="0PX 0PX 10PX 0PX"
            ></HorizontalLine>

            <FlexboxContainer>

                <TabContainer
                    direction='column'
                    border='0.2px solid black'>
                    <HeadContainer>
                        <Title
                            size='18px'
                            color='#BFAA7E'
                            family='Raleway'
                            fstyle='normal'
                            weight='500'
                            align='left'
                            margin='20px 30px'
                        >
                            Guest Information
                        </Title>
                    </HeadContainer>
                    <TabContainer>
                        <TableContainer
                        >
                            <Title
                                size='18px'
                                color='#2e2e2e'
                                family='Raleway'
                                fstyle='normal'
                                weight='500'
                                align='left'
                                margin='20px 30px'
                            >
                                <b>Name:</b> {window.sessionStorage.getItem('firstName').toLocaleLowerCase() + " " + window.sessionStorage.getItem('lastName').toLocaleLowerCase()}
                            </Title>
                            <Title
                                size='18px'
                                color='#2e2e2e'
                                family='Raleway'
                                fstyle='normal'
                                weight='500'
                                align='left'
                                margin='20px 30px'
                            >
                                <b>Email Address:</b> {window.sessionStorage.getItem('email').toLocaleLowerCase()}
                            </Title>
                            <Title
                                size='18px'
                                color='#2e2e2e'
                                family='Raleway'
                                fstyle='normal'
                                weight='500'
                                align='left'
                                margin='20px 30px'
                            >
                                <b>Contact number:</b> {window.sessionStorage.getItem('contactNumber')}
                            </Title>

                            <Title
                                size='18px'
                                color='#2e2e2e'
                                family='Raleway'
                                fstyle='normal'
                                weight='500'
                                align='left'
                                margin='20px 30px'
                            >
                                <b>Birthdate:</b> {window.sessionStorage.getItem('birthday')}
                            </Title>
                        </TableContainer>
                        <TableContainer>
                            <Title
                                size='18px'
                                color='#2e2e2e'
                                family='Raleway'
                                fstyle='normal'
                                weight='500'
                                align='left'
                                margin='20px 30px'
                            >
                                <b>Nationality:</b> {window.sessionStorage.getItem('nationality')}
                            </Title>
                            <Title
                                size='18px'
                                color='#2e2e2e'
                                family='Raleway'
                                fstyle='normal'
                                weight='500'
                                align='left'
                                margin='20px 30px'
                            >
                                <b>Gender:</b> Male
                            </Title>
                            <Title
                                size='18px'
                                color='#2e2e2e'
                                family='Raleway'
                                fstyle='normal'
                                weight='500'
                                align='left'
                                margin='20px 30px'
                            >
                                <b>Address:</b> {window.sessionStorage.getItem('address')}
                            </Title>
                        </TableContainer>
                    </TabContainer>
                </TabContainer>
                <TabContainer
                    direction='column'
                    border='0.2px solid black'
                >
                    <TabContainer w='100%'>
                        <HeadContainer>
                            <Title
                                size='18px'
                                color='#BFAA7E'
                                family='Raleway'
                                fstyle='normal'
                                weight='500'
                                align='left'
                                margin='20px 30px'
                            >
                                Mode of Payment:
                            </Title>
                        </HeadContainer>
                        <HeadContainer>
                            <Title
                                size='18px'
                                color='#BFAA7E'
                                family='Raleway'
                                fstyle='normal'
                                weight='500'
                                align='left'
                                margin='20px 30px'
                            >
                                Type of Payment:
                            </Title>
                        </HeadContainer>
                    </TabContainer>
                    <TabContainer>
                        <TableContainer style={{ borderRight: '0.2px solid black' }}>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={modeOfPaymentValue}
                                onChange={(e) => {
                                    setModeOfPaymentValue(e.target.value)
                                }}
                                style={{ margin: '0px 0px 0px 30px' }}
                            >
                                {modeOfPayment.map((item) => (
                                    item.paymentMode === "Cash" ? <FormControlLabel value={item.paymentMode} control={<Radio />} label={item.paymentMode} disabled={typeOfPayment === "Full Payment" ? true : false} /> : <FormControlLabel value={item.paymentMode} control={<Radio />} label={item.paymentMode} />
                                ))}
                            </RadioGroup>
                        </TableContainer>

                        <TableContainer>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={typeOfPayment}
                                onChange={(e) => {
                                    setTypeOfPayment(e.target.value)
                                }}
                                style={{ margin: '0px 0px 0px 30px' }}

                            >
                                <FormControlLabel value="Down Payment" control={<Radio />} label="Down Payment" />
                                <FormControlLabel value="Full Payment" control={<Radio />} label="Full Payment" disabled={modeOfPaymentValue === "Cash" ? true : false} />
                            </RadioGroup>
                        </TableContainer>
                    </TabContainer>
                </TabContainer>


                <TabContainer

                    direction='column'
                    border='0.2px solid black'>
                    <HeadContainer>
                        <Title
                            size='18px'
                            color='#BFAA7E'
                            family='Raleway'
                            fstyle='normal'
                            weight='500'
                            align='left'
                            margin='20px 30px'
                        >
                            Discount:
                        </Title>
                    </HeadContainer>
                    <TabContainer >
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={discountValue}
                            onChange={(e) => {
                                setDiscountValue(e.target.value)
                            }}
                            style={{ margin: '0px 0px 0px 30px' }}

                        >
                            {discount.map((item) => (
                                <FormControlLabel value={item.discountType} control={<Radio />} label={item.discountType} />
                            ))}

                            <p><b><i>NOTE:</i></b> Discount will only be <b> applied upon check in</b>. Guest <b> must present their Senior citizen / PWD I.D</b>, Thank you!.</p>
                        </RadioGroup>
                    </TabContainer>

                </TabContainer>



                <TabContainer
                    direction='column'
                    border='0.2px solid black'>
                    <HeadContainer>
                        <Title
                            size='18px'
                            color='#BFAA7E'
                            family='Raleway'
                            fstyle='normal'
                            weight='500'
                            align='left'
                            margin='20px 30px'
                        >
                            Booking Summary:
                        </Title>
                    </HeadContainer>
                    <TableContainer
                        border='0.2px solid black'
                        cellspacing="0"
                        cellpadding="0">
                        <Tr>
                            <Th align='center'>Room type</Th>
                            <Th align='center'>Check in</Th>
                            <Th align='center'>Check out</Th>
                            <Th align='center'>Total nights</Th>
                            <Th align='center'>Room quantity</Th>
                            <Th align='center'>Rate per night</Th>
                            <Th align='center'>Total amout due</Th>
                        </Tr>
                        {bookingInformation.map((item, index) => (

                            <Tr>

                                <Td align='center'>{item.roomName}</Td>
                                <Td align='center'>{item.checkIn}</Td>
                                <Td align='center'>{item.checkOut}</Td>
                                <Td align='center'>{item.nights}</Td>
                                <Td align='center'>{item.roomQuantity}</Td>
                                <Td align='center'>{numberFormat(item.roomRate)}</Td>
                                <Td align='center'>{numberFormat(item.roomRate * item.roomQuantity * item.nights)}</Td>

                            </Tr>

                        ))}
                    </TableContainer>

                </TabContainer>

                <TabContainer
                    border='0.2px solid black'
                    direction='column'>
                    <HeadContainer>
                        <Title
                            size='18px'
                            color='#BFAA7E'
                            family='Raleway'
                            fstyle='normal'
                            weight='500'
                            align='left'
                            margin='20px 30px'
                        >
                            Grand total:
                        </Title>
                    </HeadContainer>
                    <TableContainer>
                        <Title
                            size='25px'
                            color='#2e2e2e'
                            family='Raleway'
                            fstyle='normal'
                            weight='700'
                            align='Right'
                            margin='20px 30px'
                        >
                            Grand total: {numberFormat(grandTotal)}
                        </Title>
                    </TableContainer>
                </TabContainer>
            </FlexboxContainer>
            <Button2
                whileHover={{ backgroundColor: "#0C4426", color: "white" }}
                w='200px'
                h='60px'
                textcolor="#0C4426"
                fam='Playfair Display, serif'
                weight='-400'
                fontStyle='Normal'
                radius="0px"
                border="1px solid #0C4426"
                margin='30px 0px 0px 0px'
                fontsize='23px'
                onClick={createReservation}
            >
                Continue
            </Button2>
            <Button2
                whileHover={{ color: "#0C4426" }}
                w='100px'
                h='40px'
                textcolor='#FFFFFF'
                fam='Times New Roman, serif'
                weight='-400'
                fontStyle='Italic'
                radius="0px"
                margin='20px 0px 40px 0px'
                fontsize='16px'
                bg='#FF9292'
                href='/guestInformation'
            >
                Cancel
            </Button2>
        </Container>
    )
}

export default BillingSummaryContainer