import { GiQueenCrown } from "react-icons/gi";
import { FaCrown } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { IoHeart } from "react-icons/io5";


export default function Upgrade(){

    return(
        <div className="font-jost  ">
             <Navbar/>
             <div className="mt-10">
             <h1 className="text-3xl font-bold text-center"><span className="text-[#FC014E]">UPGRADE NOW</span> for Unlimited Matches </h1>
             {/* <div className="h-20 flex justify-center items-center text-2xl w-full font-semibold bg-[]">
                        <h1 className="pt-1">RISE AS A </h1>
                        <div className="flex flex-col -mt-5 mx-1 justify-center items-center">
                            <FaCrown className="translate-y-[6px]"/>
                            KING
                        </div>
                        <h1 className="pt-1">, DISCOVER YOUR </h1>
                        <div className="flex flex-col -mt-5 mx-1 justify-center items-center">
                            <GiQueenCrown className="translate-y-[6px]"/>
                            QUEEN
                        </div>
                    </div>*/}
                <ul className="flex flex-col  ml-[20%] my-10 gap-5 ">
                    <li className="flex  items-center gap-5 text-2xl font-semibold">
                    <IoHeart className="fill-[#FC014E]"/>
                    <h1>Check compatibility with matches by viewing unlimited horoscopes.</h1>
                    </li>
                    <li className="flex items-center gap-5 text-2xl font-semibold">
                    <IoHeart className="fill-[#FC014E]"/>
                    <h1>Access and contact ID-verified matches with photos from the exclusive section.</h1>
                    </li>
                    <li className="flex items-center gap-5 text-2xl font-semibold">
                    <IoHeart className="fill-[#FC014E]"/>
                    <h1>Enjoy priority customer service with a dedicated helpline.</h1>
                    </li>
                   
                </ul>
                 <div className="mt-[100px] mx-32 flex gap-5 justify-around items-center">
                 <div class="card_box card-box-1">
                    <div className="flex gap-3 flex-col h-full justify-center items-center">
                    <h1 className="text-xl font-bold ">SILVER MEMBERSHIP </h1>
                    <p className=" text-xl font-bold ">1 Month</p>
                    <div className="font-lg flex gap-2 items-center"> <p className="line-through">₹2,000</p> 
                    <p className="text-red-700 font-semibold text-xl">(5%)</p></div>
                    <p className="text-2xl font-bold">₹1,900</p>
                    <ul className="list-disc font-semibold text-lg space-y-2">
                        <li>Limited profile views (up to 50)</li>
                        <li>Messaging with potential matches</li>
                        <li>Access to basic features</li>
                    </ul>
                    </div>
                 <span></span>
                 </div>
                 <div class="card_box card-box-2">
                 <div className="flex gap-3 flex-col h-full justify-center items-center">
                    <h1 className="text-xl font-bold ">GOLD MEMBERSHIP </h1>
                    <p className=" text-xl font-bold ">3 Month</p>
                    <div className="font-lg flex gap-2 items-center"> <p className="line-through">₹5,000</p> 
                    <p className="text-red-700 font-semibold text-xl">(10%)</p></div>
                    <p className="text-2xl font-bold">₹4,500</p>
                    <ul className="list-disc font-semibold text-lg space-y-2">
                        <li>Limited profile views (up to 300)</li>
                        <li>Messaging with potential matches</li>
                        <li>Access to premium features</li>
                    </ul>
                    </div>
                 <span></span>
                 </div>
                 <div class="card_box card-box-3">
                 <div className="flex gap-3 flex-col h-full justify-center items-center">
                    <h1 className="text-xl font-bold mt-10 ">PLATINUM MEMBERSHIP </h1>
                    <p className=" text-xl font-bold ">6 Month</p>
                    <div className="font-lg flex gap-2 items-center"> <p className="line-through">₹10,000</p> 
                    <p className="text-red-700 font-semibold text-xl">(15%)</p></div>
                    <p className="text-2xl font-bold">₹8,500</p>
                    <ul className="list-disc font-semibold text-lg space-y-2">
                        <li>Unlimited profile views</li>
                        <li>Priority messaging</li>
                        <li>Personalized matchmaking service</li>
                        <li>Exclusive events and webinars</li>
                    </ul>
                    </div>
                 <span></span>
                 </div>
                 </div>
                 <div className="bg-[rgb(252,1,78)] mt-10 min-h-[200px] flex justify-center items-center">
                   <p  className="text-white text-2xl font-bold">ShaadiTamil helps you find your perfect soulmate. Join today and start searching for your partner right away.</p>
                 </div>
             </div>
           
        </div>
    )
}