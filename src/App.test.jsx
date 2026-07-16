import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";


test("Renders the occasion label", () => {

    render(
        <BookingForm
            date=""
            setDate={() => {}}
            hour="17:00"
            setHour={() => {}}
            guests={1}
            setGuests={() => {}}
            occasion="Birthday"
            setOccasion={() => {}}
            availableTimes={[
                "17:00",
                "18:00",
                "19:00"
            ]}
        />
    );


    const occasionLabel = screen.getByText("Occasion");

    expect(occasionLabel).toBeInTheDocument();

});