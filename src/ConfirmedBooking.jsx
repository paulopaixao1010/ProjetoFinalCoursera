import { useNavigate } from "react-router-dom";

function ConfirmedBooking(){
    const navigate = useNavigate();
    const backToReservations = () => {
        navigate("../reservations");
    }

    return (
        <section className="container" id="confirmed">
            <h1>Reservation Confirmed!</h1>
            <p>Your table has been successfully reserved.</p>
            <button onClick={backToReservations}>Back to Reservations</button>
        </section>
    );
}

export default ConfirmedBooking;