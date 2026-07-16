import { test, expect } from "vitest";
import { initializeTimes, updateTimes } from "./bookingReducer";


test("initializeTimes returns available times", () => {
    const result = initializeTimes();

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
});


test("updateTimes returns available times for the selected date", () => {

    const state = [];

    const result = updateTimes(state, {
        type: "UPDATE",
        date: "2026-07-16"
    });

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
});