import { GiCrownedHeart } from "react-icons/gi";

export default function Navbar(){

    return(
        <div className="h-[70px] flex items-center w-full bg-[#FFDF00] font-jost px-5 text-xl">
            <div className="hover:text-white">
                SHAADI TAMIL
            </div>
            <div className="mx-auto flex gap-10 ">
                <a href="/shaadhiTamil/main" className="text-[#000] hover:text-[#FC014E]">Dashboard</a>
                <a href="" className="text-[#000] hover:text-[#FC014E]">MyProfile</a>
                <a href="" className="text-[#000] hover:text-[#FC014E]">Matches</a>
                <a href="" className="text-[#000] hover:text-[#FC014E]">Chat</a> 
            </div>
            <div className="flex items-center gap-10">
                <a href="/shaadhiTamil/main/upgrade">
                   <div className="flex items-center gap-2 border-4 p-2 border-[#000] ">
                      <h1 className="font-semibold">UPGRADE</h1>
                      <GiCrownedHeart className="text-3xl"/>
                   </div>
                </a>
                <div className="bg-red-600 flex justify-center items-center text-white h-12 w-12 rounded-full">
                     N
                </div>
            </div>
        </div>
    )
}