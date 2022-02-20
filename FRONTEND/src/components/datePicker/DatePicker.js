import React, { useEffect, useReducer, useState } from 'react';
import { DateRangeInput } from "@datepicker-react/styled";
import { ThemeProvider } from "styled-components";
import { Container, DateContainer, DateLabel } from './styles';
import { Title } from '../title/styles';
import './style.css';
import { LabelDiv } from '../../containers/bookingPage/Styles';

const initialState = {
    startDate: null,
    endDate: null,
    focusedInput: null,
}

let dateStart;
let dateEnd;

function reducer(state, action) {
    switch (action.type) {
        case 'focusChange':
            return { ...state, focusedInput: action.payload }
        case 'dateChange':
            return action.payload
        default:
            throw new Error()
    }
}

export const DatePicker = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [nights, setNights] = useState();
    useEffect(()=>{
        if(state.startDate !== null && state.endDate !== null){
           setNights( Math.floor((state.endDate - state.startDate) / (24*60*60*1000)));
        }
        else{
            setNights(0);
        }
    })
    return (
        <Container>
            <DateContainer>
                <DateLabel>
                    <Title
                        size="12px">
                        Check in date
                    </Title>
                    <Title
                        size="12px">
                        Check out date
                    </Title>
                </DateLabel>
                <ThemeProvider
                    theme={{
                        breakpoints: ["32em", "48em", "64em"],
                        reactDatepicker: {
                            inputFontSize: "16px",
                            inputLabelBorder: "1px solid #f2f2f2",
                            inputBackground: "#f2f2f2",
                            inputPlaceholderFontWeight: "bold",
                            datepickerBorderRadius: "20px",
                            daySelectedFirstOrLastBackground: "green",
                            daySize: [80, 35.5],
                            closeColor: 'red',
                            resetDatesIconColor: 'red',
                            dayBackground: '#2e2e2e',
                            dayColor: 'white',
                            fontFamily: "'Playfair Display', serif",
                            colors: {
                                accessibility: "#D80249",
                                selectedDay: "gray",
                                primaryColor: "white"
                            }
                        },
                    }}

                >
                    <DateRangeInput
                        onDatesChange={data => dispatch({ type: 'dateChange', payload: data })}
                        onFocusChange={focusedInput => dispatch({ type: 'focusChange', payload: focusedInput })}
                        startDate={state.startDate} // Date or null
                        endDate={state.endDate} // Date or null
                        focusedInput={state.focusedInput} // START_DATE, END_DATE or null
                    />
                </ThemeProvider>
                
            </DateContainer>
            <LabelDiv>
                    <Title
                        color='black'
                        size='15px'
                    >
                        
                    Number of Nights
                    </Title>

                    <Title
                    family='libre baskerville'
                    size='25px'
                    color='#2e2e2e'
                    weight='normal'
                    fStyle='normal'
                    margin='auto 0px 0px 0px'
                >
                    <b>{nights}</b> {nights == 1 || nights == 0? "night" : "night(s)"}
                </Title>
                </LabelDiv>
        </Container>
    )
}

export default DatePicker;