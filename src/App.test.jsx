import { render, screen, fireEvent  } from "@testing-library/react";
import BookingForm from "./BookingForm";


test("Date input has required attribute", () => {

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


    const dateInput = screen.getByLabelText("Choose date");

    expect(dateInput).toBeRequired();

});

test("Guests input has correct validation attributes", () => {

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


    const guestsInput = screen.getByLabelText("Number of guests");


    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toBeRequired();

});


test("Occasion select is required", () => {

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


    const occasionSelect = screen.getByLabelText("Occasion");

    expect(occasionSelect).toBeRequired();

});

test("Time select is required", () => {

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


    const timeSelect = screen.getByLabelText("Choose time");

    expect(timeSelect).toBeRequired();

});

test("submit button is disabled when form is invalid", () => {

    render(
        <BookingForm
            date=""
            setDate={() => {}}
            hour=""
            setHour={() => {}}
            guests={0}
            setGuests={() => {}}
            occasion=""
            setOccasion={() => {}}
            availableTimes={[
                "17:00",
                "18:00",
                "19:00"
            ]}
        />
    );


    const button = screen.getByRole("button");

    expect(button).toBeDisabled();

});
/*
test("submits form when all fields are valid", () => {

    const submitForm = vi.fn();
    const addBooking = vi.fn();


    render(
        <BookingForm
            date="2026-07-16"
            setDate={() => {}}
            hour="19:00"
            setHour={() => {}}
            guests={2}
            setGuests={() => {}}
            occasion="Birthday"
            setOccasion={() => {}}
            availableTimes={[
                "17:00",
                "18:00"
            ]}
            submitForm={submitForm}
            addBooking={addBooking}
        />
    );


    const button = screen.getByRole("button");

    fireEvent.click(button);


    expect(addBooking).toHaveBeenCalled();
    expect(submitForm).toHaveBeenCalled();

});*/