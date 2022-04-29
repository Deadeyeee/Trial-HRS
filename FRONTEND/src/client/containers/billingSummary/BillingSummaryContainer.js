import React from 'react'
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


const BillingSummaryContainer = () => {
    const [value, setValue] = React.useState('cash');


    const Input = styled('input')({
        display: 'none',
    });

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    const [valueType, setValueType] = React.useState('installment');

    const handleChangeType = (event) => {
        setValueType(event.target.valueType);
    };
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
                                <b>Name:</b> PEDRO JUAN
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
                                <b>Email Address:</b> PedroJuan@gmail.com
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
                                <b>Email Address:</b> 09292333312
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
                                <b>Birthdate:</b> 2000/12/21
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
                                <b>Reservation Date:</b> 03/01/2022 2:31PM
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
                                <b>Nationality:</b> Filipino
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
                                <b>Address:</b> Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401
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
                                <b>Special Instruction:</b> NaN
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
                                value='cash'
                                onChange={handleChange}
                                style={{ margin: '0px 0px 0px 30px' }}
                            >
                                <FormControlLabel value="cash" control={<Radio />} label="Cash" />
                                <FormControlLabel value="bank" control={<Radio />} label="Bank(Metro Bank)" />
                                <FormControlLabel value="ebank" control={<Radio />} label="E-Payment(Gcash)" />
                            </RadioGroup>
                        </TableContainer>

                        <TableContainer>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value='Down Payment'
                                onChange={handleChange}
                                style={{ margin: '0px 0px 0px 30px' }}
                            >
                                <FormControlLabel value="Down Payment" control={<Radio />} label="Down Payment" />
                                <FormControlLabel value="full" control={<Radio />} label="Full Payment" />
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
                            value='None'
                            onChange={handleChange}
                            style={{ margin: '0px 0px 0px 30px' }}
                        >
                            <FormControlLabel value="None" control={<Radio />} label="None" />
                            <ContainerGlobal
                                align='center'
                                overflow='visible'
                            >
                                <FormControlLabel value="Senior Citizen" control={<Radio />} label="Senior Citizen" />
                                <label htmlFor="contained-button-file">
                                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                    <Button variant="contained" component="span" size='small' style={{ backgroundColor: "#2E2E2E" }}>
                                        Upload
                                    </Button>
                                </label>
                            </ContainerGlobal>
                            <ContainerGlobal
                                align='center'
                                overflow='visible'
                            >
                                <FormControlLabel value="PWD" control={<Radio />} label="PWD" />
                                <label htmlFor="contained-button-file">
                                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                    <Button variant="contained" component="span" size='small' style={{ backgroundColor: "#2E2E2E" }}>
                                        Upload
                                    </Button>
                                </label>
                            </ContainerGlobal>
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
                            <Th align='center'>Room number</Th>
                            <Th align='center'>Room type</Th>
                            <Th align='center'>Check in</Th>
                            <Th align='center'>Check out</Th>
                            <Th align='center'>Total nights</Th>
                            <Th align='center'>Rate per night</Th>
                            {/* <Th align='center'>Action</Th> */}
                        </Tr>
                        <Tr>
                            <Td align='center'>102</Td>
                            <Td align='center'>Premium Room</Td>
                            <Td align='center'>03/04/2022</Td>
                            <Td align='center'>03/08/20222</Td>
                            <Td align='center'>4</Td>
                            <Td align='center'>PHP 2,000.00</Td>
                            {/* <Td align='center'>
              <IconButton type="submit" sx={{ p: '8px', backgroundColor: 'rgb(255, 36, 0, 0.7)' }} aria-label="search" title='Delete'>
                    <DeleteIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
                </IconButton></Td> */}
                        </Tr>
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
                            Amout Due:
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
                            Total Amount: PHP 8,000.00
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
                href='/booking/confirmation'
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