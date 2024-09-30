import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Popup from "../../utils/Popup";
import img from "../../assets/HI.jpg";
import { GiCrownedHeart } from "react-icons/gi";
import { GiQueenCrown } from "react-icons/gi";
import { FaCrown } from "react-icons/fa";
import profileimg from "../../assets/profile_1.jpeg";

import LikedProfiles from "./likedProfiles";
import LikesReceived from "./likesReceived";
import Notifications from "./notifications";
import Settings from "./settings";
import HelpCenter from "./helpcenter";

export default function Dashboard() {
    const [oneTimePopup, setOneTimePopup] = useState(false);
    const [currentSection, setCurrentSection] = useState('LIKED PROFILES');

    const DashboardSectionContent=[{id:1,name:"LIKED PROFILES",content:<LikedProfiles/>},
        {id:2,name:"LIKES RECEIVED",content:<LikesReceived/>},
        {id:3,name:"SETTINGS",content:<Settings/>},
        {id:4,name:"NOTIFICATIONS",content:<Notifications/>},
        {id:1,name:"HELP CENTER",content:<HelpCenter/>}
    ]
    useEffect(() => {
        const timer = setTimeout(() => {
            setOneTimePopup(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const onHandleChange = () => {
        setOneTimePopup(false);
    };

    return (
        <div className="min-h-[100vh]">
            <Navbar />
            {oneTimePopup && <Popup handleClickPopup={onHandleChange} bgImg={img} />}
            <div className="flex m-5 rounded gap-2">
                <div className="h-[1000px] w-[350px] bg-[#FC014E] flex flex-col items-center py-5 gap-3 rounded-xl">
                    <div className="h-[180px] relative w-[180px]">
                        <svg viewBox="0 0 36 36" className="w-full h-full">
                            <path className="stroke-white stroke-[2.8]" d="M18 2.0845 A 15.9155 15.9155 0 1 1 17.9995 2.0845" fill="none" />
                            <path className="stroke-[2.8] stroke-green-500" strokeDasharray="90, 10" strokeLinecap="round" d="M18 2.0845 A 15.9155 15.9155 0 1 1 17.9995 2.0845" fill="none" />
                        </svg>
                        <div className="h-[120px] w-[120px] bg-[#FFDF00] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-[50px] text-white">
                            <img src={profileimg} alt="img" className="rounded-full h-[120px] w-[120px]"/>
                        </div>
                        <div className="h-[30px] w-[50px] bg-[white] absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-xl flex items-center justify-center font-jost text-black">
                            90%
                        </div>
                    </div>
                    <h1 className="text-2xl font-jost text-white">SAKTHI</h1>
                    <div className="mb-2">
                        <h1 className="text-xl font-jost text-[#008080]">{/* Content here */}</h1>
                    </div>
                    <div className="flex flex-col items-center mt-5">
                        <div className="flex">
                            <h1 className="text-xl font-jost text-white font-semibold">BECOME A</h1>
                            <div className="flex flex-col -mt-5 mx-1 justify-center items-center text-xl font-jost text-white font-semibold">
                                <FaCrown />
                                KING
                            </div>
                            <h1 className="text-xl font-jost text-white font-semibold">NOW</h1>
                        </div>
                        <a href="/shaadhiTamil/main/upgrade">
                            <div className="flex items-center gap-2 border-4 px-5 py-2 text-[#FFDF00] border-[#FFDF00] hover:border-[#f1e593]">
                                <h1 className="text-3xl font-jost font-bold">UPGRADE</h1>
                                <GiCrownedHeart className="text-5xl" />
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-col gap-2 w-full text-2xl pt-5 text-white font-jost items-center">
                        <h1
                            onClick={() => setCurrentSection("LIKED PROFILES")}
                            className={`w-[90%] text-center p-5  ${
                                currentSection === "LIKED PROFILES" ? "bg-[#FFD700] text-black" : ""
                            } hover:bg-[#FFD700] hover:text-black rounded-lg`}
                        >
                            LIKED PROFILES
                        </h1>
                        <h1
                            onClick={() => setCurrentSection("LIKES RECEIVED")}
                            className={`w-[90%] text-center p-5 ${
                                currentSection === "LIKES RECEIVED" ? "bg-[#FFD700] text-black" : ""
                            } hover:bg-[#FFD700] hover:text-black rounded-lg`}
                        >
                            LIKES RECEIVED
                        </h1>
                        <h1
                            onClick={() => setCurrentSection("NOTIFICATIONS")}
                            className={`w-[90%] text-center p-5 ${
                                currentSection === "NOTIFICATIONS" ? "bg-[#FFD700] text-black" : ""
                            } hover:bg-[#FFD700] hover:text-black rounded-lg`}
                        >
                            NOTIFICATIONS
                        </h1>
                        <h1
                            onClick={() => setCurrentSection("CHAT")}
                            className={`w-[90%] text-center p-5 ${
                                currentSection === "CHAT" ? "bg-[#FFD700] text-black" : ""
                            } hover:bg-[#FFD700] hover:text-black rounded-lg`}
                        >
                            CHAT
                        </h1>
                        <h1
                            onClick={() => setCurrentSection("SETTINGS")}
                            className={`w-[90%] text-center p-5 ${
                                currentSection === "SETTINGS" ? "bg-[#FFD700] text-black" : ""
                            } hover:bg-[#FFD700] hover:text-black rounded-lg`}
                        >
                            SETTINGS
                        </h1>
                        <h1
                            onClick={() => setCurrentSection("HELP CENTER")}
                            className={`w-[90%] text-center p-5 ${
                                currentSection === "HELP CENTER" ? "bg-[#FFD700] text-black" : ""
                            } hover:bg-[#FFD700] hover:text-black rounded-lg`}
                        >
                            HELP CENTER
                        </h1>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-10">
                    <div className="h-20 flex justify-center items-center text-2xl w-full font-semibold bg-yellow-200">
                        <h1 className="pt-1">RISE AS A </h1>
                        <div className="flex flex-col -mt-5 mx-1 justify-center items-center">
                            <FaCrown />
                            KING
                        </div>
                        <h1 className="pt-1">, DISCOVER YOUR </h1>
                        <div className="flex flex-col -mt-5 mx-1 justify-center items-center">
                            <GiQueenCrown />
                            QUEEN
                        </div>
                    </div>
                    <div className="min-h-[400px] max-w-full">
                        {DashboardSectionContent.find(each=>each.name === currentSection)?.content}
                    </div> 
                </div> 
            </div> 
        </div> 
    );  
}   