 
import { configureStore } from '@reduxjs/toolkit';
import PopupToggleReducer from './PopupToggleSlice'; 
import registrationSlice from './registrationSlice';

const store = configureStore({
    reducer: {
        popup: PopupToggleReducer ,
        registration:registrationSlice// Use the reducer here
    }
});

export default store;