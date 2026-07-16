import { useState } from "react";
import { useReducer } from "react";
import BookingForm from "./BookingForm";
import BookingTable from "./BookingTable"
import { initializeTimes, updateTimes } from "./bookingReducer";
import { submitAPI } from "./api";
import { useNavigate } from "react-router-dom";

function BookingPage() {
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const [bookingData, setBookingData] = useState(() => {
        const savedBookings = localStorage.getItem("bookingData");
        return savedBookings ? JSON.parse(savedBookings) : [];
    });

    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        initializeTimes()
    );

    const addBooking = (booking) => {
        const updatedBookings = [...bookingData, booking];

        setBookingData(updatedBookings);

        localStorage.setItem(
            "bookingData",
            JSON.stringify(updatedBookings)
        );
    };

    const navigate = useNavigate();

    const submitForm = (formData) => {

        if (submitAPI(formData)) {
            navigate("/confirmed");
        }

    };

    return (
        <>
            <BookingForm
            date={date}
            setDate={setDate}
            hour={hour}
            setHour={setHour}
            guests={guests}
            setGuests={setGuests}
            occasion={occasion}
            setOccasion={setOccasion}
            availableTimes={availableTimes}
            dispatch={dispatch}
            addBooking={addBooking}
            submitForm={submitForm}/>
            <BookingTable bookingData={bookingData}/>
        </>
    );
}

export default BookingPage;