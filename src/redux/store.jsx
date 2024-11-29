import { configureStore } from "@reduxjs/toolkit";
import navSlice from './navSlice'

const store = configureStore({
    reducer: {
        navbar: navSlice
    }
})

export default store