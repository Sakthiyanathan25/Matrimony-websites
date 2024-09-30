import React from 'react';
import Logo from "../assets/LOGO.png";
import Popup from "../utils/Popup";
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoginPopup } from "../redux/PopupToggleSlice"; 
import LoginForm from "../forms/LoginForm";

export default function Header() {
    // Use hooks inside the component
    const dispatch = useDispatch();
    const showPopUpLogin = useSelector((state) => state.popup.LoginPopup);

    const handleLoginPopup = () => {
        dispatch(toggleLoginPopup()); 
    };

    return (
        <div className="relative z-50 w-full flex justify-between items-center text-white font-jost bg-[#FFDF00] px-4">
            <div className="relative z-10">
                <img src={Logo} alt="logo" className="h-[100px] p-2" />
            </div>
            <div className="relative z-30 flex gap-5 items-center mr-[10%] text-xl">
                <button
                    type="button"
                    onClick={handleLoginPopup}
                    className="px-5 py-2 rounded-md text-white bg-[#FC014E]"
                >
                    Login
                </button>
                <h1 className="my-auto text-[#FC014E]">Help</h1>
            </div>
            {showPopUpLogin && (
                <Popup handleClickPopup={handleLoginPopup} content={<LoginForm />} />
            )}
        </div>
    );
}
