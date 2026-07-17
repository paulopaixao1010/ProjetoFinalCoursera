function BookingForm(props) {
   
    const getIsFormValid = () => {
        return (
            props.date !== "" &&
            props.hour !== "" &&
            props.guests >= 1 &&
            props.occasion !== ""
        );
    };

    const clearForm = () => { 
        props.setDate(""); 
        props.setHour("17:00"); 
        props.setGuests(1); 
        props.setOccasion("Birthday");  
    }; 

    const handleSubmit = (e) => { 
        e.preventDefault(); 
         props.addBooking({
            date: props.date,
            hour: props.hour,
            guests: props.guests,
            occasion: props.occasion
        });
        props.submitForm({
            date: props.date,
            hour: props.hour,
            guests: props.guests,
            occasion: props.occasion
        });
        clearForm(); 
    };
  return (
    <section id="booking-form" className="bg-primary">
        <div className="container">
            <h1>Reserve a table</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date"id="res-date" value={props.date} onChange={(e) => { 
                    props.setDate(e.target.value); 
                    props.dispatch({
                            type:"UPDATE",
                            date:e.target.value
                    })
                    }} min={new Date().toISOString().split("T")[0]} required/>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={props.hour} onChange={(e) => { 
                    props.setHour(e.target.value); 
                    }} required>
                {props.availableTimes.map(time => {
                    return <option key={time} value={time}>{time}</option>
                })
                }
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" min="1" max="10" value={props.guests} onChange={(e) => { 
                    props.setGuests(Number(e.target.value)); 
                    }} required/>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={props.occasion} onChange={(e) => { 
                    props.setOccasion(e.target.value); 
                    }} required>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <button type="submit" disabled={!getIsFormValid()}>Make Your Reservation</button>
            </form>
        </div>
    </section>
    
  );
}

export default BookingForm;