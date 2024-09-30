import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    LoginPopup: false,
    RegisterPopup:false,
};

const PopupToggleSlice =createSlice({
    name:"PopupToggle",
    initialState,
    reducers:{
        toggleLoginPopup(state){
            state.LoginPopup=!state.LoginPopup
        },
        toggleRegisterPopup(state){
            state.RegisterPopup=!state.RegisterPopup
        }
    }
    
})

export const {toggleLoginPopup,toggleRegisterPopup}= PopupToggleSlice.actions
export default PopupToggleSlice.reducer