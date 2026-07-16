import { fetchAPI } from "./api.js";
export const initializeTimes = () => {

    const today = new Date();

    return fetchAPI(today);

};

export const updateTimes = (state, action) => {

    const date = new Date(action.date);

    return fetchAPI(date);

};