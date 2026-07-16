import { test, expect } from "vitest";
import { initializeTimes, updateTimes } from "./bookingReducer";


test("initializeTimes returns the correct initial times", () => {

    const result = initializeTimes();

    expect(result).toEqual([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ]);

});


test("updateTimes returns the same state", () => {

    const state = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ];


    const result = updateTimes(state, {
        date: "2026-07-16"
    });


    expect(result).toEqual(state);

});