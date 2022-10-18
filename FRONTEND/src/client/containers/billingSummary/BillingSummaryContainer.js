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
import { Button2 } from '../../components/button/styles';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from 'axios'
import * as moment from 'moment';
import { apiKey } from '../../../apiKey';


const BillingSummaryContainer = () => {
    if (window.sessionStorage.getItem("AvailedRoom") == null) {
        window.location = '/booking'
    }

    const [grandTotal, setGrandTotal] = useState(0);
    const [bookingInformation, setBookingInformation] = useState([])
    const [modeOfPayment, setModeOfPayment] = useState([]);
    const [modeOfPaymentValue, setModeOfPaymentValue] = useState("");
    const [typeOfPayment, setTypeOfPayment] = useState('Down Payment');
    const [discount, setDiscount] = useState([]);
    const [discountValue, setDiscountValue] = useState("");
    const [notAvailableRoom, setNotAvailableRoom] = useState([]);
    const [userInformation, setUserInformation] = useState([])

    const [paymentModeId, setPaymentModeId] = useState("");
    const [discountId, setDiscountId] = useState("");



    const getNotAvailableRoom = () => {

        axios.get(apiKey+'api/getAllReservationSummary').then((result) => {
            setNotAvailableRoom([])

            for (let index = 0; index < result.data.length; index++) {
                if (result.data[index].reservation.reservationStatus == "PENDING" || result.data[index].reservation.reservationStatus == "RESERVED" || result.data[index].reservation.reservationStatus == "BOOKED") {
                    for (let k = 0; k < bookingInformation.length; k++) {
                        let systemDates = getDates(bookingInformation[k].checkIn, bookingInformation[k].checkOut);
                        systemDates.pop()
                        let dataBaseDates = getDates(result.data[index].checkInDate, result.data[index].checkOutDate);
                        dataBaseDates.pop()
                        loop1:
                        for (let i = 0; i < systemDates.length; i++) {
                            loop2:
                            for (let j = 0; j < dataBaseDates.length; j++) {
                                if (systemDates[i] == dataBaseDates[j]) {
                                    setNotAvailableRoom((oldData) => [...oldData, result.data[index].room_id])
                                    break loop1;
                                }
                                else {
                                    console.log(false)
                                }
                            }

                        }
                    }
                }

            }



        }).then(() => {
            console.log(notAvailableRoom)
        }).catch((error) => {
            console.log(error)
        })
        if (notAvailableRoom != null) {
            console.log(notAvailableRoom)
        }
    }


    useEffect(() => {
        axios.get(apiKey+"auth/verify-token").then((response) => {
            console.log(response.data)
            window.sessionStorage.removeItem('contactNumber');
            window.sessionStorage.removeItem('email');
            window.sessionStorage.removeItem('firstName');
            window.sessionStorage.removeItem('lastName');
            window.sessionStorage.removeItem('birthday');
            window.sessionStorage.removeItem('gender');
            window.sessionStorage.removeItem('address');
            window.sessionStorage.removeItem('nationality');

            axios.get(apiKey+'api/getAllGuest').then((guest) => {
                console.log(guest.data)
                guest.data.map((item) => {
                    if (response.data.id == item.user_id && response.data.role != 'NON-USER') {
                        setUserInformation(item);
                    }
                })
            }).catch((err) => {
                console.log(err)

            });

        }).catch((err) => {
            if (window.sessionStorage.getItem('firstName') == null) {
                window.location = '/guestInformation';
            }

        });

        if (JSON.parse(window.sessionStorage.getItem("AvailedRoom")).length != 0 || window.sessionStorage.getItem("AvailedRoom") != null) {
            setBookingInformation(JSON.parse(window.sessionStorage.getItem("AvailedRoom")))
        }
        else {
            window.location = '/booking';
        }

        console.log(bookingInformation)

        axios.get(apiKey+'api/getAllPaymentMode').then((result) => {
            setModeOfPayment(result.data);

        }).catch((err) => {
            console.log(err.result)
        });

        axios.get(apiKey+'api/getAllDiscount').then((result) => {
            setDiscount(result.data);
        }).catch((err) => {
            console.log(err.result)
        });


    }, [])

    useEffect(() => {
        if (userInformation != 0) {
            console.log(userInformation)
        }
    }, [userInformation])

    useEffect(() => {
        if (modeOfPayment.length != 0) {
            modeOfPayment.map((item) => {
                if (item.paymentMode == "Pay at The Hotel") {
                    setModeOfPaymentValue(item.paymentMode);
                }
            })
        }

    }, [modeOfPayment])

    useEffect(() => {

        if (discount.length != 0) {
            discount.map((item) => {
                if (item.discountType == "No discount") {
                    setDiscountValue(item.discountType);
                }
            })
        }
    }, [discount])

    useEffect(() => {
        if (bookingInformation.length != 0) {
            getNotAvailableRoom();
        }
    }, [bookingInformation])

    useEffect(() => {
        console.log(notAvailableRoom)
    }, [notAvailableRoom])

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
        getNotAvailableRoom();



        if (userInformation.length == 0) {
            let formatNumber;
            if (window.sessionStorage.getItem('contactNumber').slice(0, 3) == "+63") {
                formatNumber = window.sessionStorage.getItem('contactNumber').replace("+63", "0");
            }
            else {
                formatNumber = window.sessionStorage.getItem('contactNumber');
            }
            axios.post(apiKey+"api/addUser", {

                contactNumber: formatNumber,
                email: window.sessionStorage.getItem('email').toLocaleLowerCase(),
                role: "NON-USER",

            }).then((user) => {
                console.log(user.data)
                axios.post(apiKey+"api/addGuest", {
                    user_id: user.data.account.id,
                    firstName: window.sessionStorage.getItem('firstName').toLocaleLowerCase(),
                    lastName: window.sessionStorage.getItem('lastName').toLocaleLowerCase(),
                    birthDate: window.sessionStorage.getItem('birthday'),
                    gender: window.sessionStorage.getItem('gender'),
                    address: window.sessionStorage.getItem('address'),
                    nationality: window.sessionStorage.getItem('nationality'),
                }).then((guest) => {
                    console.log(guest.data)
                    axios.post(apiKey+"api/addPayment", {
                        paymentMade: 0,
                        discount_id: discountId,
                        paymentMode_id: paymentModeId,
                        paymentType: typeOfPayment,
                        grandTotal: 0,
                        balance: 0,
                    }).then((payment) => {
                        console.log(payment.data)
                        axios.post(apiKey+"api/addReservation", {
                            reservationDate: reservationDate,
                            guest_id: guest.data.new_guest.id,
                            payment_id: payment.data.new_payment.id
                        }).then((reservation) => {
                            console.log(reservation.data.new_reservation.reservationReferenceNumber + guest.data.new_guest.lastName)
                            axios.patch(apiKey+'api/updateUsers/' + user.data.account.id, {
                                password: reservation.data.new_reservation.reservationReferenceNumber + guest.data.new_guest.lastName,
                                userName: reservation.data.new_reservation.reservationReferenceNumber,
                            }).then((patchUser) => {
                                console.log(patchUser.data)
                            }).catch((err) => {
                                console.log(err)
                            });
                            console.log(reservation.data)
                            for (let index = 0; index < bookingInformation.length; index++) {
                                bookingInformation[index].roomID.map((value) => {
                                    if (notAvailableRoom.includes(value)) {
                                        axios.delete(apiKey+'api/deleteReservation/' + reservation.data.new_reservation.id).then((result) => {
                                            console.log(result)
                                            axios.delete(apiKey+'api/deletePayment/' + payment.data.new_payment.id).then((result) => {
                                                console.log(result)
                                                axios.delete(apiKey+'api/deleteGuest/' + guest.data.new_guest.id).then((result) => {
                                                    console.log(result)
                                                    axios.delete(apiKey+'api/deleteUser/' + user.data.account.id).then((result) => {
                                                        console.log(result)
                                                        window.sessionStorage.clear();
                                                        window.location = '/booking'
                                                    }).catch((err) => {
                                                        console.log(err)
                                                    });
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
                                    else {
                                        let items = {
                                            checkInDate: bookingInformation[index].checkIn,
                                            checkOutDate: bookingInformation[index].checkOut,
                                            kids: bookingInformation[index].kid,
                                            adults: bookingInformation[index].adult,
                                            numberOfNights: bookingInformation[index].nights,
                                            reservation_id: reservation.data.new_reservation.id,
                                            room_id: value,
                                            specialInstrcution: bookingInformation[index].specialInstruction,

                                            // numberOfAdults:
                                            // numberOfKids:
                                        }
                                        axios.post(apiKey+"api/addReservationSummary", items).then((reservationSummary) => {

                                            axios.get(apiKey+"api/getReservationSummary/" + reservationSummary.data.new_reservationSummary.id).then((getreservationSummary) => {

                                                axios.get(apiKey+'api/getPayment/' + payment.data.new_payment.id).then((getPayment) => {

                                                    console.log(getPayment.data)

                                                    // axios.patch(apiKey+'api/updatePayment/' + payment.data.new_payment.id, {

                                                    //     grandTotal: parseFloat(getPayment.data.grandTotal) + parseFloat(getreservationSummary.data.numberOfNights * getreservationSummary.data.room.roomType.roomRate),
                                                    //     balance: (parseFloat(getPayment.data.grandTotal) + parseFloat(getreservationSummary.data.numberOfNights * getreservationSummary.data.room.roomType.roomRate)) - parseFloat(getPayment.data.paymentMade),
                                                    // }).then((result) => {
                                                    // console.log(result)
                                                    if (index == bookingInformation.length - 1) {
                                                        axios.patch(apiKey+'api/updateGrandTotal/' + payment.data.new_payment.id, {
                                                            paymentMade: getPayment.data.paymentMade,
                                                        }).then((result) => {
                                                            axios.post(apiKey+'api/sendReservationEmail', {
                                                                email: user.data.account.email.toLocaleLowerCase(),
                                                                birthDay: guest.data.new_guest.birthDate,
                                                                nationality: guest.data.new_guest.nationality,
                                                                emailAddress: user.data.account.email.toLocaleLowerCase(),
                                                                address: guest.data.new_guest.address,
                                                                contactNumber: user.data.account.contactNumber,
                                                                firstName: guest.data.new_guest.firstName.toLocaleLowerCase(),
                                                                lastName: guest.data.new_guest.lastName.toLocaleLowerCase(),
                                                                reservationStatus: reservation.data.new_reservation.reservationStatus,
                                                                accountName: getPayment.data.paymentMode.accountName,
                                                                accountNumber: getPayment.data.paymentMode.accountNumber,
                                                                paymentType: getPayment.data.paymentType,
                                                                paymentMode: getPayment.data.paymentMode.paymentMode,
                                                                reservationNumber: reservation.data.new_reservation.reservationReferenceNumber,
                                                                reservationDate: new Date(reservation.data.new_reservation.reservationDate).toLocaleDateString() + " " + new Date(reservation.data.new_reservation.reservationDate).toLocaleTimeString(),
                                                                reservationId: reservation.data.new_reservation.id,
                                                                role: user.data.account.role,
                                                                grandTotal: result.data.grandTotal,
                                                                discountType: result.data.discount.discountType,
                                                                expirationDate: new Date(new Date(reservation.data.new_reservation.reservationDate).getTime() + 60 * 60 * 24 * 1000).toLocaleDateString() + " " + new Date(reservation.data.new_reservation.reservationDate).toLocaleTimeString(),

                                                                // payment: ,
                                                                // reservedRooms: ,
                                                            }).then((result) => {
                                                                console.log(result)
                                                                console.log(reservationSummary.data)
                                                                window.sessionStorage.clear();
                                                                window.location = '/booking/confirmation/' + reservation.data.new_reservation.id;
                                                            }).catch((err) => {
                                                                console.log(err)

                                                            });
                                                        }).catch((err) => {
                                                            axios.delete(apiKey+'api/deleteReservationSummary/' + reservationSummary.data.new_reservationSummary.id).then((result) => {
                                                                console.log(result)
                                                                axios.delete(apiKey+'api/deleteReservation/' + reservation.data.new_reservation.id).then((result) => {
                                                                    console.log(result)
                                                                    axios.delete(apiKey+'api/deletePayment/' + payment.data.new_payment.id).then((result) => {
                                                                        console.log(result)
                                                                        axios.delete(apiKey+'api/deleteGuest/' + guest.data.new_guest.id).then((result) => {
                                                                            console.log(result)
                                                                            axios.delete(apiKey+'api/deleteUser/' + user.data.account.id).then((result) => {

                                                                                console.log(result)

                                                                            }).catch((err) => {
                                                                                console.log(err)
                                                                            });
                                                                        }).catch((err) => {
                                                                            console.log(err)
                                                                        });
                                                                    }).catch((err) => {
                                                                        console.log(err)
                                                                    });
                                                                }).catch((err) => {
                                                                    console.log(err)
                                                                });
                                                            }).catch((err) => {
                                                                console.log(err)
                                                            });


                                                        });
                                                    }

                                                    // }).catch((err) => {
                                                    //     axios.delete(apiKey+'api/deleteReservationSummary/' + reservationSummary.data.new_reservationSummary.id).then((result) => {
                                                    //         console.log(result)
                                                    //         axios.delete(apiKey+'api/deleteReservation/' + reservation.data.new_reservation.id).then((result) => {
                                                    //             console.log(result)
                                                    //             axios.delete(apiKey+'api/deletePayment/' + payment.data.new_payment.id).then((result) => {
                                                    //                 console.log(result)
                                                    //                 axios.delete(apiKey+'api/deleteGuest/' + guest.data.new_guest.id).then((result) => {
                                                    //                     console.log(result)
                                                    //                     axios.delete(apiKey+'api/deleteUser/' + user.data.account.id).then((result) => {

                                                    //                         console.log(result)

                                                    //                     }).catch((err) => {
                                                    //                         console.log(err)
                                                    //                     });
                                                    //                 }).catch((err) => {
                                                    //                     console.log(err)
                                                    //                 });
                                                    //             }).catch((err) => {
                                                    //                 console.log(err)
                                                    //             });
                                                    //         }).catch((err) => {
                                                    //             console.log(err)
                                                    //         });
                                                    //     }).catch((err) => {
                                                    //         console.log(err)
                                                    //     });


                                                    // });
                                                }).catch((err) => {
                                                    console.log(err)
                                                    axios.delete(apiKey+'api/deleteReservationSummary/' + reservationSummary.data.new_reservationSummary.id).then((result) => {
                                                        console.log(result)
                                                        axios.delete(apiKey+'api/deleteReservation/' + reservation.data.new_reservation.id).then((result) => {
                                                            console.log(result)
                                                            axios.delete(apiKey+'api/deletePayment/' + payment.data.new_payment.id).then((result) => {
                                                                console.log(result)
                                                                axios.delete(apiKey+'api/deleteGuest/' + guest.data.new_guest.id).then((result) => {
                                                                    console.log(result)
                                                                    axios.delete(apiKey+'api/deleteUser/' + user.data.account.id).then((result) => {

                                                                        console.log(result)

                                                                    }).catch((err) => {
                                                                        console.log(err)
                                                                    });
                                                                }).catch((err) => {
                                                                    console.log(err)
                                                                });
                                                            }).catch((err) => {
                                                                console.log(err)
                                                            });
                                                        }).catch((err) => {
                                                            console.log(err)
                                                        });
                                                    }).catch((err) => {
                                                        console.log(err)
                                                    });
                                                });
                                            }).catch((err) => {
                                                axios.delete(apiKey+'api/deleteReservationSummary/' + reservationSummary.data.new_reservationSummary.id).then((result) => {
                                                    console.log(result)
                                                    axios.delete(apiKey+'api/deleteReservation/' + reservation.data.new_reservation.id).then((result) => {
                                                        console.log(result)
                                                        axios.delete(apiKey+'api/deletePayment/' + payment.data.new_payment.id).then((result) => {
                                                            console.log(result)
                                                            axios.delete(apiKey+'api/deleteGuest/' + guest.data.new_guest.id).then((result) => {
                                                                console.log(result)
                                                                axios.delete(apiKey+'api/deleteUser/' + user.data.account.id).then((result) => {

                                                                    console.log(result)

                                                                }).catch((err) => {
                                                                    console.log(err)
                                                                });
                                                            }).catch((err) => {
                                                                console.log(err)
                                                            });
                                                        }).catch((err) => {
                                                            console.log(err)
                                                        });
                                                    }).catch((err) => {
                                                        console.log(err)
                                                    });
                                                }).catch((err) => {
                                                    console.log(err)
                                                });
                                            });

                                        }).catch((err) => {
                                            console.log(err)
                                            axios.delete(apiKey+'api/deleteReservation/' + reservation.data.new_reservation.id).then((result) => {
                                                console.log(result)
                                                axios.delete(apiKey+'api/deletePayment/' + payment.data.new_payment.id).then((result) => {
                                                    console.log(result)
                                                    axios.delete(apiKey+'api/deleteGuest/' + guest.data.new_guest.id).then((result) => {
                                                        console.log(result)
                                                        axios.delete(apiKey+'api/deleteUser/' + user.data.account.id).then((result) => {
                                                            console.log(result)
                                                        }).catch((err) => {
                                                            console.log(err)
                                                        });
                                                    }).catch((err) => {
                                                        console.log(err)
                                                    });
                                                }).catch((err) => {
                                                    console.log(err)
                                                });
                                            }).catch((err) => {
                                                console.log(err)
                                            });

                                        });
                                    }
                                })


                            }

                        }).catch((err) => {
                            console.log(err)
                            axios.delete(apiKey+'api/deletePayment/' + payment.data.new_payment.id).then((result) => {
                                console.log(result)
                                axios.delete(apiKey+'api/deleteGuest/' + guest.data.new_guest.id).then((result) => {
                                    console.log(result)
                                    axios.delete(apiKey+'api/deleteUser/' + user.data.account.id).then((result) => {
                                        console.log(result)
                                    }).catch((err) => {
                                        console.log(err)
                                    });
                                }).catch((err) => {
                                    console.log(err)
                                });
                            }).catch((err) => {
                                console.log(err)
                            });

                        });
                    }).catch((err) => {
                        console.log(err)
                        axios.delete(apiKey+'api/deleteGuest/' + guest.data.new_guest.id).then((result) => {
                            console.log(result)
                            axios.delete(apiKey+'api/deleteUser/' + user.data.account.id).then((result) => {
                                console.log(result)
                            }).catch((err) => {
                                console.log(err)
                            });
                        }).catch((err) => {
                            console.log(err)
                        });

                    });


                }).catch((err) => {
                    console.log(err.result)
                    axios.delete('ttp://localhost:3001/api/deleteUser/' + user.data.account.id)
                });
            }).catch((err) => {
                console.log(err.result)
            });


        }
        else {

            axios.post(apiKey+"api/addPayment", {
                paymentMade: 0,
                discount_id: discountId,
                paymentMode_id: paymentModeId,
                paymentType: typeOfPayment,
                grandTotal: 0,
                balance: 0,
            }).then((payment) => {
                console.log(payment.data)
                axios.post(apiKey+"api/addReservation", {
                    reservationDate: reservationDate,
                    guest_id: userInformation.id,
                    payment_id: payment.data.new_payment.id,
                }).then((reservation) => {
                    console.log(reservation.data)
                    for (let index = 0; index < bookingInformation.length; index++) {
                        bookingInformation[index].roomID.map((value) => {
                            if (notAvailableRoom.includes(value)) {
                                axios.delete(apiKey+'api/deleteReservation/' + reservation.data.new_reservation.id).then((result) => {
                                    console.log(result)
                                    axios.delete(apiKey+'api/deletePayment/' + payment.data.new_payment.id).then((result) => {
                                        console.log(result)
                                        window.sessionStorage.clear();
                                        window.location = '/booking'
                                    }).catch((err) => {
                                        console.log(err)
                                    });
                                }).catch((err) => {
                                    console.log(err)
                                });
                            }
                            else {
                                let items = {
                                    checkInDate: bookingInformation[index].checkIn,
                                    checkOutDate: bookingInformation[index].checkOut,
                                    kids: bookingInformation[index].kid,
                                    adults: bookingInformation[index].adult,
                                    numberOfNights: bookingInformation[index].nights,
                                    reservation_id: reservation.data.new_reservation.id,
                                    room_id: value,
                                    specialInstrcution: bookingInformation[index].specialInstruction,

                                    // numberOfAdults:
                                    // numberOfKids:
                                }
                                axios.post(apiKey+"api/addReservationSummary", items).then((reservationSummary) => {
                                    console.log(reservationSummary.data)


                                    axios.get(apiKey+"api/getReservationSummary/" + reservationSummary.data.new_reservationSummary.id).then((getreservationSummary) => {
                                        console.log(getreservationSummary.data)

                                        axios.get(apiKey+'api/getPayment/' + payment.data.new_payment.id).then((getPayment) => {
                                            console.log('grandTotal', getPayment.data.grandTotal)
                                            // axios.patch(apiKey+'api/updatePayment/' + payment.data.new_payment.id, {
                                            //     grandTotal: parseFloat(getPayment.data.grandTotal) + parseFloat(getreservationSummary.data.numberOfNights * getreservationSummary.data.room.roomType.roomRate),
                                            //     balance: (parseFloat(getPayment.data.grandTotal) + parseFloat(getreservationSummary.data.numberOfNights * getreservationSummary.data.room.roomType.roomRate)) - parseFloat(getPayment.data.paymentMade),
                                            // }).then((result) => {
                                            //     console.log(result)
                                            if (index == bookingInformation.length - 1) {
                                                axios.patch(apiKey+'api/updateGrandTotal/' + payment.data.new_payment.id, {
                                                    paymentMade: getPayment.data.paymentMade,
                                                }).then((result) => {
                                                    console.log("new payment", result.data)
                                                    axios.post(apiKey+'api/sendReservationEmail', {
                                                        email: userInformation.user.email.toLocaleLowerCase(),
                                                        birthDay: userInformation.birthDate,
                                                        nationality: userInformation.nationality,
                                                        emailAddress: userInformation.user.email.toLocaleLowerCase(),
                                                        address: userInformation.address,
                                                        contactNumber: userInformation.user.contactNumber,
                                                        firstName: userInformation.firstName.toLocaleLowerCase(),
                                                        lastName: userInformation.lastName.toLocaleLowerCase(),
                                                        reservationStatus: reservation.data.new_reservation.reservationStatus,
                                                        accountName: getPayment.data.paymentMode.accountName,
                                                        accountNumber: getPayment.data.paymentMode.accountNumber,
                                                        paymentType: getPayment.data.paymentType,
                                                        paymentMode: getPayment.data.paymentMode.paymentMode,
                                                        reservationNumber: reservation.data.new_reservation.reservationReferenceNumber,
                                                        reservationDate: new Date(reservation.data.new_reservation.reservationDate).toLocaleDateString() + " " + new Date(reservation.data.new_reservation.reservationDate).toLocaleTimeString(),
                                                        reservationId: reservation.data.new_reservation.id,
                                                        role: userInformation.user.role,
                                                        grandTotal: result.data.grandTotal,
                                                        discountType: result.data.discount.discountType,
                                                        expirationDate: new Date(new Date(reservation.data.new_reservation.reservationDate).getTime() + 60 * 60 * 24 * 1000).toLocaleDateString() + " " + new Date(reservation.data.new_reservation.reservationDate).toLocaleTimeString(),
                                                        // payment: ,
                                                        // reservedRooms: ,
                                                    }).then((result) => {
                                                        console.log(result)
                                                        console.log(reservationSummary.data)
                                                        window.sessionStorage.clear();
                                                        window.location = '/booking/confirmation/' + reservation.data.new_reservation.id;
                                                    }).catch((err) => {
                                                        console.log(err)

                                                    });
                                                }).catch((err) => {
                                                    console.log(err)

                                                    axios.delete(apiKey+'api/deleteReservationSummary/' + reservationSummary.data.new_reservationSummary.id).then((result) => {

                                                        console.log(result)

                                                        axios.delete(apiKey+'api/deleteReservation/' + reservation.data.new_reservation.id).then((result) => {

                                                            console.log(result)


                                                            axios.delete(apiKey+'api/deletePayment/' + payment.data.new_payment.id).then((result) => {
                                                                console.log(result)

                                                            }).catch((err) => {
                                                                console.log(err)
                                                            });
                                                        }).catch((err) => {
                                                            console.log(err)
                                                        });
                                                    }).catch((err) => {
                                                        console.log(err)
                                                    });
                                                });


                                            }

                                            // }).catch((err) => {
                                            //     console.log(err)

                                            //     axios.delete(apiKey+'api/deleteReservationSummary/' + reservationSummary.data.new_reservationSummary.id).then((result) => {

                                            //         console.log(result)

                                            //         axios.delete(apiKey+'api/deleteReservation/' + reservation.data.new_reservation.id).then((result) => {

                                            //             console.log(result)


                                            //             axios.delete(apiKey+'api/deletePayment/' + payment.data.new_payment.id).then((result) => {
                                            //                 console.log(result)

                                            //             }).catch((err) => {
                                            //                 console.log(err)
                                            //             });
                                            //         }).catch((err) => {
                                            //             console.log(err)
                                            //         });
                                            //     }).catch((err) => {
                                            //         console.log(err)
                                            //     });

                                            // });
                                        }).catch((err) => {
                                            console.log(err)
                                            axios.delete(apiKey+'api/deleteReservationSummary/' + reservationSummary.data.new_reservationSummary.id).then((result) => {

                                                console.log(result)

                                                axios.delete(apiKey+'api/deleteReservation/' + reservation.data.new_reservation.id).then((result) => {

                                                    console.log(result)


                                                    axios.delete(apiKey+'api/deletePayment/' + payment.data.new_payment.id).then((result) => {
                                                        console.log(result)

                                                    }).catch((err) => {
                                                        console.log(err)
                                                    });
                                                }).catch((err) => {
                                                    console.log(err)
                                                });
                                            }).catch((err) => {
                                                console.log(err)
                                            });
                                        });
                                    }).catch((err) => {
                                        console.log(err)
                                        axios.delete(apiKey+'api/deleteReservationSummary/' + reservationSummary.data.new_reservationSummary.id).then((result) => {

                                            console.log(result)

                                            axios.delete(apiKey+'api/deleteReservation/' + reservation.data.new_reservation.id).then((result) => {

                                                console.log(result)


                                                axios.delete(apiKey+'api/deletePayment/' + payment.data.new_payment.id).then((result) => {
                                                    console.log(result)

                                                }).catch((err) => {
                                                    console.log(err)
                                                });
                                            }).catch((err) => {
                                                console.log(err)
                                            });
                                        }).catch((err) => {
                                            console.log(err)
                                        });
                                    });


                                }).catch((err) => {
                                    console.log(err)
                                    axios.delete(apiKey+'api/deleteReservation/' + reservation.data.new_reservation.id).then((result) => {
                                        console.log(result)
                                        axios.delete(apiKey+'api/deletePayment/' + payment.data.new_payment.id).then((result) => {
                                            console.log(result)
                                        }).catch((err) => {
                                            console.log(err)
                                        });
                                    }).catch((err) => {
                                        console.log(err)
                                    });


                                });
                            }

                        })


                    }

                }).catch((err) => {
                    console.log(err)
                    axios.delete(apiKey+'api/deletePayment/' + payment.data.new_payment.id).then((result) => {
                        console.log(result)
                    }).catch((err) => {
                        console.log(err)
                    });
                });
            }).catch((err) => {
                console.log(err)

            });





        }








    }


    const numberFormat = (value) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'PHP'
        }).format(value);

    let reservationDate = Date.now()

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


    const output = (value) => {
        if (value == 'name') {
            if (window.sessionStorage.getItem('firstName') != null && window.sessionStorage.getItem('lastName') != null) {
                return window.sessionStorage.getItem('firstName').toLocaleLowerCase() + " " + window.sessionStorage.getItem('lastName').toLocaleLowerCase();
            }
            else if (userInformation.length != 0) {
                return userInformation.firstName.toLocaleLowerCase() + " " + userInformation.lastName.toLocaleLowerCase();
            }
            else {
                return " ";
            }
        }
        else if (value == 'email') {
            if (window.sessionStorage.getItem('email') != null) {
                return window.sessionStorage.getItem('email').toLocaleLowerCase()
            }
            else if (userInformation.length != 0) {
                return userInformation.user.email.toLocaleLowerCase()
            }
            else {
                return " "
            }
        }
        else if (value == 'contact') {
            if (window.sessionStorage.getItem('contactNumber') != null) {
                return window.sessionStorage.getItem('contactNumber')
            }
            else if (userInformation.length != 0) {
                return userInformation.user.contactNumber
            }
            else {
                return " "
            }
        }
        else if (value == 'birthday') {
            if (window.sessionStorage.getItem('birthday') != null) {
                return window.sessionStorage.getItem('birthday')
            }
            else if (userInformation.length != 0) {
                return userInformation.birthDate
            }
            else {
                return " "
            }
        }
        else if (value == 'nationality') {
            if (window.sessionStorage.getItem('nationality') != null) {
                return window.sessionStorage.getItem('nationality')
            }
            else if (userInformation.length != 0) {
                return userInformation.nationality
            }
            else {
                return " "
            }
        }
        else if (value == 'gender') {
            if (window.sessionStorage.getItem('gender') != null) {
                return window.sessionStorage.getItem('gender')
            }
            else if (userInformation.length != 0) {
                return userInformation.gender.toLocaleLowerCase()
            }
            else {
                return " "
            }
        }
        else if (value == 'address') {
            if (window.sessionStorage.getItem('address') != null) {
                return window.sessionStorage.getItem('address')
            }
            else if (userInformation.length != 0) {
                return userInformation.address
            }
            else {
                return " "
            }
        }
    }




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
                                <b>Name:</b> {output('name')}
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
                                <b>Email Address:</b> {output('email')}
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
                                <b>Contact number:</b>{output('contact')}
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
                                <b>Birthdate:</b> {output('birthday')}
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
                                <b>Nationality:</b> {output('nationality')}
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
                                <b>Gender:</b> {output('gender')}
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
                                <b>Address:</b> {output('address')}
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
                                defaultValue={modeOfPaymentValue}
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
                                <FormControlLabel value="Full Payment" control={<Radio />} label="Full Payment" disabled={modeOfPaymentValue === "Pay at The Hotel" ? true : false} />
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