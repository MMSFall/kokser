import { createSlice } from "@reduxjs/toolkit";

//init info used pour coord + temps travel 
const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
};

// define info used : coord + trvl time
export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload; 
        },
        setDestination: (state, action) => {
            state.destination = action.payload; 
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload; 
        },
    },
});

export const {setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions;

//selecteurs pour fetch ces infos
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;
