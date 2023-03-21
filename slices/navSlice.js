import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.origin = action.payload;
        },
        settraveltimeInformation: (state, action) => {
            state.origin = action.payload;
        },
    },
});

export const {setOrigin, setDestination, settraveltimeInformation} = navSlice.actions;

// selectors

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selecttravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;