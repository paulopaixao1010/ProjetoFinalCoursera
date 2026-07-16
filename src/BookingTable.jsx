function BookingTable({ bookingData }) {

    return (
        <section id="bookings">
            <h1>Bookings</h1>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Guests</th>
                            <th>Occasion</th>
                        </tr>
                    </thead>

                    <tbody>
                        {bookingData.map((booking, index) => (
                            <tr key={index}>
                                <td>{booking.date}</td>
                                <td>{booking.hour}</td>
                                <td>{booking.guests}</td>
                                <td>{booking.occasion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </section>
    );
}

export default BookingTable;