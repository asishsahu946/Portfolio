import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggle: false,
}

const navSlice = createSlice({

    name : 'navbar',
    initialState,
    reducers: {
        sideBarOn : (state) => {
            state.toggle = true
            console.log('side bar open');
        } ,
        sideBarOff : (state,) => {
            state.toggle = false
            console.log('side bar close');
        }
    }
}
)

export const { sideBarOn , sideBarOff } = navSlice.actions;
export default navSlice.reducer