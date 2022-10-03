import { createContext, useState } from "react";

const BookingContext = createContext();

export function BookingProvider({ children }) {

    const [startDate, setStartDate] = useState(new Date().setHours(0, 0, 0, 0));
    const [endDate, setEndDate] = useState(new Date(new Date().getTime() + 86400000).setHours(0, 0, 0, 0));
    const [nights, setNights] = useState();
    const [checkIn, setCheckIn] = useState();
    const [checkOut, setCheckOut] = useState();
    const [availedRooms, setAvailedRooms] = useState([])

    const addAvailedRooms = (room)=>{
        setAvailedRooms((prevState) => [...prevState, room])
    }
    return (
        <BookingContext.Provider
            value={{ 
                startDate, 
                setStartDate, 
                endDate, 
                setEndDate, 
                nights, 
                setNights, 
                checkIn,
                setCheckIn,
                checkOut,
                setCheckOut,
                availedRooms,
                addAvailedRooms,
            }}
        >
            {children}
        </BookingContext.Provider>
    );
}

export default BookingContext


