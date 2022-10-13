import React from "react";
import { ContainerGlobal } from "../../components/container/container";
import logo from "../../../client/images/logo.png";
import { Title } from "../../../client/components/title/styles";
import "./or.css";
const AcknowledgementReceipt = () => {
  return (
    <div style={{width: 'auto', height: '50px'}}>
         <ContainerGlobal radius='0px' 
      direction="column"
      align="center"
      justify="center"
      margin="0px 20px 20px 20px"
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
      <ContainerGlobal radius='0px'  direction="column" align="flex-Start" w="80%">
        
        <ContainerGlobal radius='0px'  w="100%" align="flex-start" justify="space-between">
          <ContainerGlobal radius='0px'  direction="column">
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
          <ContainerGlobal radius='0px'  direction="column">
            <Title family="Belleza" size="1.5vw" fstyle="none">
              Receipt No.: 0001
            </Title>
            <Title family="Belleza" size="1.5vw" fstyle="none">
              Receipt Date.: 09-09-2022
            </Title>
          </ContainerGlobal>
        </ContainerGlobal>
      </ContainerGlobal>

      <ContainerGlobal radius='0px'  w="80%" direction="column" align="center" margin="0px 0px 50px 0px">
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

        <ContainerGlobal radius='0px'  w="100%" direction="column">
          <Title family="Barlow Condensed" fstyle="none" size="2.5vw">Guest Details</Title>
          <ContainerGlobal radius='0px'  w="50%" direction="column" margin="10px 0px 10px 0px">
            <ContainerGlobal radius='0px'  w="100%" justify="space-between">
              <Title family="Barlow Condensed" fstyle="none" size="2vw">Guest name:</Title>

              <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">Pedro Juan</Title>
            </ContainerGlobal>
            <ContainerGlobal radius='0px'  w="100%" justify="space-between">
              <Title family="Barlow Condensed" fstyle="none" size="2vw">Address:</Title>

              <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">Quezon City</Title>
            </ContainerGlobal>
            <ContainerGlobal radius='0px'  w="100%" justify="space-between">
              <Title family="Barlow Condensed" fstyle="none" size="2vw">Contact Number:</Title>

              <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">123456789</Title>
            </ContainerGlobal>
            <ContainerGlobal radius='0px'  w="100%" justify="space-between">
              <Title family="Barlow Condensed" fstyle="none" size="2vw">Email Address:</Title>

              <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">pedrojuan@yahoo.com</Title>
            </ContainerGlobal>
          </ContainerGlobal>
        </ContainerGlobal>

        <hr style={{ width: "100%" }} />

        <ContainerGlobal radius='0px'  w="100%" direction="column">
          <Title family="Barlow Condensed" fstyle="none" size="2.5vw">Booking Details</Title>
          <ContainerGlobal radius='0px'  w="100%" direction="column">
            <ContainerGlobal radius='0px'  w="100%" justify="space-between">
              <Title family="Barlow Condensed" fstyle="none" size="2vw">Reference Number: 2492</Title>

              <Title family="Barlow Condensed" fstyle="none" size="2vw">Booking Date: 09/09/22</Title>
            </ContainerGlobal>

            <table
              style={{
                width: "100%",
              }}
            >
              <tr>
                <th>Room Type</th>
                <th>Total Nights</th>
                <th>Rate per Night</th>
                <th>Total Amount Due</th>
              </tr>
              <tr>
                <td>Deluxe x 1</td>
                <td>2</td>
                <td>₱2000.00</td>
                <td></td>
              </tr>
              <tr>
                <td>Family Room x 2</td>
                <td>3</td>
                <td>₱2000.00</td>
                <td></td>
              </tr>
            </table>
          </ContainerGlobal>
        </ContainerGlobal>

        <hr style={{ width: "100%" }} />

        <ContainerGlobal radius='0px'  w="100%" direction="column">
          <Title family="Barlow Condensed" fstyle="none" size="2.5vw" >Payment Details</Title>
          <ContainerGlobal radius='0px'  w="100%" direction="column" gap="10px">
            <ContainerGlobal radius='0px'  w="100%" justify="space-between" align="flex-end">
              <Title family="Barlow Condensed" fstyle="none" size="2vw">Payment Method:</Title>

              <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">Value</Title>
            </ContainerGlobal>
            <ContainerGlobal radius='0px'  w="100%" justify="space-between" align="flex-end">
              <Title family="Barlow Condensed" fstyle="none" size="2vw" >Rooms:</Title>

              <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">Value</Title>
            </ContainerGlobal>
            <ContainerGlobal radius='0px'  w="100%" justify="space-between" margin="40px 0px">
              <Title family="Barlow Condensed" fstyle="none" size="2vw">Additional Charges:</Title>

              <ContainerGlobal radius='0px'  w="40%" direction="column">
                <ContainerGlobal radius='0px'  w="100%" justify="space-between">
                  <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">Towel x 1</Title>
                  <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">₱200</Title>
                </ContainerGlobal>
                <ContainerGlobal radius='0px'  w="100%" justify="space-between">
                  <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">Additional Guests x 2</Title>
                  <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">₱700</Title>
                </ContainerGlobal>
              </ContainerGlobal>
            </ContainerGlobal>
            <ContainerGlobal radius='0px'  w="100%" justify="space-between">
              <Title family="Barlow Condensed" fstyle="none" size="2vw">VAT(12%):</Title>

              <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">Value</Title>
            </ContainerGlobal>
            <ContainerGlobal radius='0px'  w="100%" justify="space-between">
              <Title family="Barlow Condensed" fstyle="none" size="2vw">Discount:</Title>

              <Title family="Barlow Condensed" fstyle="none" size="2vw" weight="400">Value</Title>
            </ContainerGlobal>
          </ContainerGlobal>
        </ContainerGlobal>
        <hr style={{ width: "100%" }} />

        <ContainerGlobal radius='0px'  w="100%" direction="column">
          <ContainerGlobal radius='0px' 
            w="100%"
            direction="column"
            gap="10px"
            align="flex-end"
          >
            <ContainerGlobal radius='0px'  w="50%" justify="space-between">
              <Title family="Barlow Condensed" fstyle="none" size="3vw" weight="400">Grand Total:</Title>
              <Title family="Barlow Condensed" fstyle="none" size="3vw" weight="400">₱2900.00</Title>
            </ContainerGlobal>
            <ContainerGlobal radius='0px'  w="50%" justify="space-between">
              <Title family="Barlow Condensed" fstyle="none" size="3vw" weight="400">Downpayment:</Title>
              <Title family="Barlow Condensed" fstyle="none" size="3vw" weight="400">₱2900.00</Title>
            </ContainerGlobal>
            <ContainerGlobal radius='0px'  w="50%" justify="space-between">
              <Title family="Barlow Condensed" fstyle="none" size="3vw">Remaining Balance:</Title>
              <Title family="Barlow Condensed" fstyle="none" size="3vw" color="red">₱0</Title>
            </ContainerGlobal>
          </ContainerGlobal>
        </ContainerGlobal>
      </ContainerGlobal>
    </ContainerGlobal>
    </div>
  );
};

export default AcknowledgementReceipt;
