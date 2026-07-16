import { test, expect, beforeEach } from "vitest";


beforeEach(() => {
    localStorage.clear();
});


test("saves booking data to localStorage", () => {

    const booking = {
        date: "2026-07-16",
        hour: "19:00",
        guests: 2,
        occasion: "Birthday"
    };


    localStorage.setItem(
        "bookingData",
        JSON.stringify([booking])
    );


    const savedData = JSON.parse(
        localStorage.getItem("bookingData")
    );


    expect(savedData).toContainEqual(booking);

});

test("reads booking data from localStorage", () => {

    const bookingData = [
        {
            date: "2026-07-16",
            hour: "20:00",
            guests: 4,
            occasion: "Anniversary"
        }
    ];


    localStorage.setItem(
        "bookingData",
        JSON.stringify(bookingData)
    );


    const result = JSON.parse(
        localStorage.getItem("bookingData")
    );


    expect(result).toEqual(bookingData);

});