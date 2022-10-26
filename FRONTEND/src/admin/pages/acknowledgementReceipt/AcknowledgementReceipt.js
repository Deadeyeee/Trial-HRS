import React, { useEffect, useState } from "react";
import { ContainerGlobal } from "../../components/container/container";
import logo from "../../../client/images/logo.png";
import { Title } from "../../../client/components/title/styles";
import "./or.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiKey } from "../../../apiKey";
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
const AcknowledgementReceipt = () => {

  const { id } = useParams();

  const [reservationInformation, setReservationInformation] = useState([])
  const [reservationSummaryInformation, setReservationSummaryInformation] = useState([])
  const [orderedAmenities, setOrderedAmenities] = useState([])
  const [amenities, setAmenities] = useState([])

  let url = id.split('_')

  const numberFormat = (value) =>
    new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'PHP'
    }).format(value);


  const handleDownloadImage = async () => {
    const element = document.getElementById('acknowledgeReceipt'),
      canvas = await html2canvas(element),
      data = canvas.toDataURL('image/jpg'),
      link = document.createElement('a');

    link.href = data;
    link.download = 'acknowledgementReceipt'+Date.now()+'.jpg';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  useEffect(() => {
    axios.get(apiKey + 'api/getReservation/' + url[0]).then((result) => {
      setReservationInformation(result.data)
      console.log(result.data.payment.grandTotal)

      axios.get(apiKey + 'api/getAllReservationSummary').then((result) => {
        setReservationSummaryInformation(result.data.filter((obj) => obj.reservation_id == url[0]))

        axios.get(apiKey + 'api/getAllOrderedAmenities').then((result) => {
          setOrderedAmenities(result.data.filter((obj) => obj.reservationSummary.reservation.id == url[0]))
          console.log(result.data.filter((obj) => obj.reservationSummary.reservation.id == url[0]))

          axios.get(apiKey + 'api/getAllAmenities').then((result) => {
            setAmenities(result.data)

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




  }, [])


  useEffect(() => {
    if (amenities.length != 0) {
      if (url[1] == 'download') {
        handleDownloadImage().then((result) => {

          window.close();
        }).catch((err) => {

        });
      }
      else if (url[1] == 'print') {
        window.print();
      }
    }
  }, [amenities])

  console.log(url[0])

  return (
    <div style={{ width: 'auto', height: 'auto' }}
      id='acknowledgeReceipt'>
      <ContainerGlobal radius='0px'
        direction="column"
        align="center"
        justify="center"
        margin="0px 20px 20px 20px"
        bg='white'
      >
        <ContainerGlobal
          radius="0px"
          direction="row"
          align="flex-start"
          margin="20px 0px 0px 0px"
          w="80%"

        >
          <img src={logo} width="12%" height="12%" ></img>
        </ContainerGlobal>
        <ContainerGlobal radius='0px' direction="column" align="flex-Start" w="80%">

          <ContainerGlobal radius='0px' w="100%" align="flex-start" justify="space-between">
            <ContainerGlobal radius='0px' direction="column">
              <Title family="Belleza" size="1.5vw" fstyle="none" weight="400" >
                68 Cenacle Drive Sanville Subdivision, Quezon City, 1128 Metro
                Manila
              </Title>
              <Title family="Belleza" size="1.5vw" fstyle="none" weight="400">
                rmluxe.hotelqc@gmail.com
              </Title>
              <Title family="Belleza" size="1.5vw" fstyle="none" weight="400">
                0956 672 8906
              </Title>
            </ContainerGlobal>
            <ContainerGlobal radius='0px' direction="column">
              <Title family="Belleza" size="1.5vw" fstyle="none">
                Receipt No.: 0001
              </Title>
              <Title family="Belleza" size="1.5vw" fstyle="none">
                Receipt Date.: {new Date().toLocaleDateString()}
              </Title>
            </ContainerGlobal>
          </ContainerGlobal>
        </ContainerGlobal>

        <ContainerGlobal radius='0px' w="80%" direction="column" align="center" margin="0px 0px 50px 0px">
          <ContainerGlobal radius='0px'
            direction="column"
            margin="20px 0px 20px 0px"
            align="center"
          >
            <Title family="Roboto Slab" size="3vw" fstyle="none">
              Acknowledgement Receipt
            </Title>
          </ContainerGlobal>

          <hr style={{ width: "100%" }} />

          <ContainerGlobal radius='0px' w="100%" direction="column">
            <Title family="Barlow Condensed" fstyle="none" size="2.5vw">Guest Details</Title>
            <ContainerGlobal radius='0px' w="50%" direction="column" margin="10px 0px 10px 0px">
              <ContainerGlobal radius='0px' w="100%" justify="space-between">
                <Title family="Barlow Condensed" fstyle="none" size="2vw">Guest name:</Title>

                <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">{reservationInformation.length != 0 && reservationInformation.guestInformation.firstName.toLowerCase() + ' ' + reservationInformation.guestInformation.lastName.toLowerCase()}</Title>
              </ContainerGlobal>
              <ContainerGlobal radius='0px' w="100%" justify="space-between">
                <Title family="Barlow Condensed" fstyle="none" size="2vw">Address:</Title>

                <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">{reservationInformation.length != 0 && reservationInformation.guestInformation.address.toLowerCase()}</Title>
              </ContainerGlobal>
              <ContainerGlobal radius='0px' w="100%" justify="space-between">
                <Title family="Barlow Condensed" fstyle="none" size="2vw">Contact Number:</Title>

                <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">{reservationInformation.length != 0 && reservationInformation.guestInformation.user.contactNumber}</Title>
              </ContainerGlobal>
              <ContainerGlobal radius='0px' w="100%" justify="space-between">
                <Title family="Barlow Condensed" fstyle="none" size="2vw">Email Address:</Title>

                <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">{reservationInformation.length != 0 && reservationInformation.guestInformation.user.email.toLowerCase()}</Title>
              </ContainerGlobal>
            </ContainerGlobal>
          </ContainerGlobal>

          <hr style={{ width: "100%" }} />

          <ContainerGlobal radius='0px' w="100%" direction="column">
            <Title family="Barlow Condensed" fstyle="none" size="2.5vw">Booking Details</Title>
            <ContainerGlobal radius='0px' w="100%" direction="column">
              <ContainerGlobal radius='0px' w="100%" justify="space-between">
                <Title family="Barlow Condensed" fstyle="none" size="2vw">Reference Number: {reservationInformation.length != 0 && reservationInformation.reservationReferenceNumber}</Title>

                <Title family="Barlow Condensed" fstyle="none" size="2vw">Booking Date: {reservationInformation.length != 0 && new Date(reservationInformation.reservationDate).toLocaleDateString()}</Title>
              </ContainerGlobal>

              <table
                style={{
                  width: "100%",
                  fontSize: '1.5vw'
                }}
              >
                <tr>
                  <th>Room Type</th>
                  <th>Total Nights</th>
                  <th>Rate per Night</th>
                  <th>Total Amount Due</th>
                </tr>
                {reservationSummaryInformation.length != 0 ? reservationSummaryInformation.map((item) => (
                  <tr>
                    <td>{item.room.roomType.roomType}</td>
                    <td>{item.numberOfNights}</td>
                    <td>{numberFormat(item.room.roomType.roomRate)}</td>
                    <td>{numberFormat(item.room.roomType.roomRate * item.numberOfNights)}</td>
                  </tr>
                )) : ''}


              </table>
            </ContainerGlobal>
          </ContainerGlobal>

          <hr style={{ width: "100%" }} />

          <ContainerGlobal radius='0px' w="100%" direction="column">
            <Title family="Barlow Condensed" fstyle="none" size="2.5vw" >Payment Details</Title>
            <ContainerGlobal radius='0px' w="100%" direction="column" gap="0px">
              <ContainerGlobal radius='0px' w="100%" justify="space-between" align="flex-end">
                <Title family="Barlow Condensed" fstyle="none" size="2vw">Payment Method:</Title>

                <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">{reservationInformation.length != 0 && reservationInformation.payment.paymentMode.paymentMode}</Title>
              </ContainerGlobal>
              <ContainerGlobal radius='0px' w="100%" justify="space-between" align="flex-end">
                <Title family="Barlow Condensed" fstyle="none" size="2vw">Payment type:</Title>

                <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">{reservationInformation.length != 0 && reservationInformation.payment.paymentType}</Title>
              </ContainerGlobal>
              <ContainerGlobal radius='0px' w="100%" justify="space-between" align="flex-end">
                <Title family="Barlow Condensed" fstyle="none" size="2vw">Discount type:</Title>

                <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">{reservationInformation.length != 0 && reservationInformation.payment.discountValid == true ? reservationInformation.payment.discount.discountType : 'No Discount'}</Title>
              </ContainerGlobal>
              <ContainerGlobal radius='0px' w="100%" justify="space-between" align="flex-end" margin='20px 0px 0px 0px'>
                <Title family="Barlow Condensed" fstyle="none" size="2vw" >Rooms:</Title>

                <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">{reservationSummaryInformation != 0 && numberFormat(reservationSummaryInformation.map((item) => item.room.roomType.roomRate).reduce((accumulator, value) => accumulator + value))}</Title>
              </ContainerGlobal>
              <ContainerGlobal radius='0px' w="100%" justify="space-between" margin="10px 0px 40px 0px">
                <Title family="Barlow Condensed" fstyle="none" size="2vw">Additional Charges:</Title>

                <ContainerGlobal radius='0px' w="40%" direction="column">
                  {orderedAmenities.length != 0 &&
                    amenities.map((item) => (
                      orderedAmenities.filter((obj) => obj.amenity.amenityName == item.amenityName).map((item) => item.quantity).reduce((accumulator, value) => accumulator + value) != 0 &&
                      <ContainerGlobal radius='0px' w="100%" justify="space-between">
                        <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">{item.amenityName} x {orderedAmenities.filter((obj) => obj.amenity.amenityName == item.amenityName).map((item) => item.quantity).reduce((accumulator, value) => accumulator + value)}</Title>
                        <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">{numberFormat(parseFloat(item.amenityRate) * parseFloat(orderedAmenities.filter((obj) => obj.amenity.amenityName == item.amenityName).map((item) => item.quantity).reduce((accumulator, value) => accumulator + value)))}</Title>
                      </ContainerGlobal>

                    ))
                  }


                  {reservationSummaryInformation.length != 0 &&
                    reservationSummaryInformation.map((item) => item.others).reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value)) != 0 &&
                    <ContainerGlobal radius='0px' w="100%" justify="space-between">
                      <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">Others</Title>
                      <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">{numberFormat(reservationSummaryInformation.map((item) => item.others).reduce((accumulator, value) => parseFloat(accumulator) + parseFloat(value)))}</Title>
                    </ContainerGlobal>


                  }
                </ContainerGlobal>
              </ContainerGlobal>

              <ContainerGlobal radius='0px' w="100%" justify="space-between">
                <Title family="Barlow Condensed" fstyle="none" size="2vw">Total:</Title>
                {reservationInformation.length != 0 ?
                  reservationInformation.payment.discountValid == true ?
                    <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">{numberFormat((reservationInformation.payment.grandTotal * 1.12) / .80)}</Title>
                    :
                    <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">{numberFormat((reservationInformation.payment.grandTotal))}</Title>
                  :
                  ''
                }
              </ContainerGlobal>
              <ContainerGlobal radius='0px' w="100%" justify="space-between">
                <Title family="Barlow Condensed" fstyle="none" size="2vw">VAT Sales:</Title>

                {reservationInformation.length != 0 ?
                  reservationInformation.payment.discountValid == true ?
                    <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">{numberFormat(parseFloat((reservationInformation.payment.grandTotal * 1.12) / .80) / 1.12)}</Title>
                    :
                    <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">{numberFormat(parseFloat(reservationInformation.payment.grandTotal) / 1.12)}</Title>
                  :
                  ''
                }
              </ContainerGlobal>
              <ContainerGlobal radius='0px' w="100%" justify="space-between">
                <Title family="Barlow Condensed" fstyle="none" size="2vw">VAT({reservationInformation.length != 0 && reservationInformation.payment.discountValid == true ? '0%' : '12%'}):</Title>
                {reservationInformation.length != 0 ?
                  reservationInformation.payment.discountValid == true ?
                    <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">  - {numberFormat(parseFloat((reservationInformation.payment.grandTotal * 1.12) / .80) - (parseFloat((reservationInformation.payment.grandTotal * 1.12) / .80) / 1.12))}</Title>
                    :
                    <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">{numberFormat(parseFloat(reservationInformation.payment.grandTotal) - (parseFloat(reservationInformation.payment.grandTotal) / 1.12))}</Title>
                  :
                  ''
                }
              </ContainerGlobal>

              {reservationInformation.length != 0 ?
                reservationInformation.payment.discountValid == true ?
                  <ContainerGlobal radius='0px' w="100%" justify="space-between">

                    <Title family="Barlow Condensed" fstyle="none" size="2vw">Discount:</Title>

                    <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">{numberFormat((parseFloat((reservationInformation.payment.grandTotal * 1.12) / .80) / 1.12) * .20)}</Title>
                  </ContainerGlobal>
                  :
                  ''
                :
                ''
              }
            </ContainerGlobal>
          </ContainerGlobal>
          <hr style={{ width: "100%" }} />

          <ContainerGlobal radius='0px' w="100%" direction="column">
            <ContainerGlobal radius='0px'
              w="100%"
              direction="column"
              gap="10px"
              align="flex-end"
            >

              {/* {reservationInformation.length != 0 &&
                reservationInformation.payment.paymentType == 'Down Payment' ?

                <ContainerGlobal radius='0px' w="50%" justify="space-between">
                  <Title family="Barlow Condensed" fstyle="none" size="3vw" weight="400">Down Payment:</Title>
                  <Title family="Barlow Condensed" fstyle="none" size="3vw" weight="400">{numberFormat(parseFloat(reservationInformation.payment.grandTotal) / 2)}</Title>
                </ContainerGlobal>
                :
                <ContainerGlobal radius='0px' w="50%" justify="space-between">
                  <Title family="Barlow Condensed" fstyle="none" size="3vw" weight="400">Full Payment:</Title>
                  <Title family="Barlow Condensed" fstyle="none" size="3vw" weight="400">{numberFormat(parseFloat(reservationInformation.payment.grandTotal))}</Title>
                </ContainerGlobal>

              } */}


              <ContainerGlobal radius='0px' w="50%" justify="space-between">
                <Title family="Barlow Condensed" fstyle="none" size="3vw" weight="400">Grand Total:</Title>
                <Title family="Barlow Condensed" fstyle="none" size="3vw" weight="400">{reservationInformation.length != 0 && numberFormat(reservationInformation.payment.grandTotal)}</Title>
              </ContainerGlobal>
              <ContainerGlobal radius='0px' w="50%" justify="space-between">
                <Title family="Barlow Condensed" fstyle="none" size="3vw" weight="400">Payment Made:</Title>
                <Title family="Barlow Condensed" fstyle="none" size="3vw" weight="400">{reservationInformation.length != 0 && numberFormat(reservationInformation.payment.paymentMade)}</Title>
              </ContainerGlobal>

              <ContainerGlobal radius='0px' w="50%" justify="space-between">
                <Title family="Barlow Condensed" fstyle="none" size="3vw">Remaining Balance:</Title>
                <Title family="Barlow Condensed" fstyle="none" size="3vw" color="red">{reservationInformation.length != 0 && numberFormat(reservationInformation.payment.balance)}</Title>
              </ContainerGlobal>
            </ContainerGlobal>
          </ContainerGlobal>
        </ContainerGlobal>
      </ContainerGlobal>
    </div >
  );
};

export default AcknowledgementReceipt;
