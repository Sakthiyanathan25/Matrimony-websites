// Importing Components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Importing Assets
import CoupleImage_1 from "../assets/CoupleImage_1.png";
import IMG_1 from "../assets/IMG_1.png";
import IMG_2 from "../assets/IMG_2.png";
import IMG_3 from "../assets/IMG_3.png";
import IMG_4 from "../assets/IMG_4.png";

import R_1 from "../assets/R_1.jpeg";
import R_2 from "../assets/R_2.jpeg";
import R_3 from "../assets/R_3.jpeg";
import R_4 from "../assets/R_4.jpeg";
import R_5 from "../assets/R_5.jpeg";
import R_6 from "../assets/R_6.jpeg";
import R_7 from "../assets/R_7.jpeg";
import R_8 from "../assets/R_8.jpeg";
import R_9 from "../assets/R_9.jpeg";
import R_10 from "../assets/R_10.jpeg";

// Importing Icons
import { FaEdit, FaUserFriends } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";

// Importing Utilities
import { ImageAndTextSlider, TextSlider, ImageSlider } from "../utils/slider";
import Popup from "../utils/Popup";

// Importing Forms
import LoginForm from "../forms/LoginForm";
import BasicFormStepper from "../forms/BasicFormDetails";

// Importing Redux Hooks
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoginPopup, toggleRegisterPopup } from "../redux/PopupToggleSlice";

import AnimationCounter from "../utils/AnimationCounter";

export default function LandingPage() {
    // Steps Data
    const Steps = [
        { id: 1, name: "REGISTER", icon: <FaEdit />, content: "Join Our Community and Start Your Journey" },
        { id: 2, name: "FIND YOUR SOULMATE", icon: <FaUserFriends />, content: "Discover Your Perfect Match" },
        { id: 3, name: "CONNECT", icon: <MdConnectWithoutContact />, content: "Start Building Your Love Story" }
    ];

    // Reviews Data
    const Reviews = [
        // Type 1: Image and Content
        {
            id: 1,
            type: "imageAndContent",
            Mr_name: "Arun",
            Mrs_name: "Priya",
            review: "We met on this platform during a time when we had almost given up on finding the right partner. The journey started with a few exchanged messages, and as we got to know each other, we realized how perfectly we complemented each other. Our families met, and it was an instant connection. Now, we're happily married and continue to cherish the love and companionship we've found.",
            img: R_1
        },
        {
            id: 2,
            type: "imageAndContent",
            Mr_name: "Rahul",
            Mrs_name: "Sneha",
            review: "Our story began here, and it has been nothing short of a fairy tale. We were initially hesitant to join a matrimony site, but after a few conversations, we realized how wrong we were. The connection was instant, and every interaction brought us closer.",
            img: R_2
        },
        {
            id: 3,
            type: "imageAndContent",
            Mr_name: "Vikram",
            Mrs_name: "Aishwarya",
            review: "It’s amazing how a single platform can change your life. We were both searching for someone who shared our values and aspirations. After connecting here, we quickly realized we had found that person in each other.",
            img: R_3
        },
        {
            id: 4,
            type: "imageAndContent",
            Mr_name: "Suresh",
            Mrs_name: "Anita",
            review: "Finding the right partner seemed like an overwhelming task, but this platform made it easier than we could have imagined. We connected over shared interests, and as we talked more, we found that our life goals aligned perfectly.",
            img: R_4
        },
        {
            id: 5,
            type: "imageAndContent",
            Mr_name: "Karthik",
            Mrs_name: "Deepa",
            review: "Our story is one of patience and hope. After joining this site, we started talking and quickly realized that we had a lot in common. We spent months getting to know each other, building a foundation of trust and respect.",
            img: R_5
        },
        // Type 2: Only Image
        {
            id: 6,
            type: "onlyImage",
            Mr_name: "Amit",
            Mrs_name: "Meena",
            img: R_6
        },
        {
            id: 7,
            type: "onlyImage",
            Mr_name: "Ravi",
            Mrs_name: "Divya",
            img: R_7
        },
        {
            id: 8,
            type: "onlyImage",
            Mr_name: "Sanjay",
            Mrs_name: "Ritika",
            img: R_8
        },
        {
            id: 9,
            type: "onlyImage",
            Mr_name: "Ashok",
            Mrs_name: "Neha",
            img: R_9
        },
        {
            id: 10,
            type: "onlyImage",
            Mr_name: "Vivek",
            Mrs_name: "Pooja",
            img: R_10
        },
        // Type 3: Only Text
        {
            id: 11,
            type: "onlyText",
            Mr_name: "Rohan",
            Mrs_name: "Anjali",
            review: "This platform made it easy to find someone who truly understands and complements me. We're now happily married!"
        },
        {
            id: 12,
            type: "onlyText",
            Mr_name: "Siddharth",
            Mrs_name: "Riya",
            review: "I found the love of my life on this site. We are forever grateful for this platform!"
        },
        {
            id: 13,
            type: "onlyText",
            Mr_name: "Manoj",
            Mrs_name: "Shalini",
            review: "Thank you for helping me find my soulmate. Our journey together has been nothing short of extraordinary."
        },
        {
            id: 14,
            type: "onlyText",
            Mr_name: "Vishal",
            Mrs_name: "Kavya",
            review: "We were destined to meet, and this site made it possible. Now, we are embarking on a beautiful journey together."
        },
        {
            id: 15,
            type: "onlyText",
            Mr_name: "Gaurav",
            Mrs_name: "Smita",
            review: "Finding someone who shares your dreams and values is priceless. This platform connected us, and we couldn't be happier."
        }
    ];

    // Filtering Reviews by Type
    const ImageAndTextReview = Reviews.filter(each => each.type === "imageAndContent");
    const ImageReview = Reviews.filter(each => each.type === "onlyImage");
    const TextReview = Reviews.filter(each => each.type === "onlyText");

    // Redux Hooks
    const dispatch = useDispatch();
    const showPopUp = useSelector((state) => state.popup);

    // Handlers for Popup Toggles
    const handleLoginPopup = () => {
        dispatch(toggleLoginPopup());
    };

    const handleRegisterPopup = () => {
        dispatch(toggleRegisterPopup());
    };

    return(
        <div className="max-w-[100%]">
           {showPopUp.LoginPopup && <Popup handleClickPopup={handleLoginPopup} content={<LoginForm/>}  />}
           {showPopUp.RegisterPopup && <BasicFormStepper handleClickPopup={handleRegisterPopup}/>}


        {/*/Header or Navbar from Header.jsx */}
         <Header/>
        {/* Head Content */}
        <div className="bg-[#fff] md:flex relative h-[700px] w-full ">
            
                <img src={IMG_2}  className="absolute z-10 bottom-0 right-0 invert saturate-[360%] hue-rotate-90 sepia opacity-5" alt="NadaswaramDrums" />
            
            <div className="absolute z-40 bottom-0 left-0 hidden md:block w-1/2 ">
               <img src={CoupleImage_1} alt="Couple Photo" className="max-h-[700px]  drop-shadow-xl"/>
            </div>
            <div className="flex md:absolute left-[40%] z-40  p-10 md:p-0 md:-mt-14 flex-col justify-center text-left gap-3 h-full font-jost md:w-[60%] md:ml-auto px-3 md:px-10">
                <h1 className="text-black text-2xl md:text-5xl font-bold font-playfair">Find Your <span className="text-[#FC014E]">Forever</span> <br/>Is <span className="text-[#FC014E]">True Love</span> What You Seek?</h1>
                <p className="text-black text-xl md:text-xl font-Lato">Join us to connect with like-minded singles and find your perfect match. Sign up now and start your journey to true love!</p>
                <div className="flex gap-3  ">
                     <button onClick={handleLoginPopup} type="button" className=" bg-[#FC014E] h-10 w-[130px] rounded text-white text-xl font-bold hover:bg-white hover:text-[#FC014E] transition-all duration-500">LOGIN</button>
                     <button onClick={handleRegisterPopup} type="button" className=" h-10 w-[140px] border-4 rounded  border-black text-black hover:border-[#FC014E] hover:text-[#FC014E] text-xl font-bold transition-all duration-500">LET'S START</button>
                </div>
                <div className=" md:absolute z-30 mt-10 md:mt-5 md:left-1/2 md:top-[85%] md:-translate-x-1/2  flex flex-col items-center md:flex-row gap-0 md:gap-10">
                   <div className="flex flex-col gap-1 justify-center items-center">
                   <label htmlFor="gender">Gender</label>
                   <select id="gender" name="gender" className="outline-none h-10 w-[100px] text-center">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                   </div>
                    <div className="flex items-center  space-x-2 md:space-x-4">
                          <div className="flex flex-col gap-1">
                          <label htmlFor="age-from">Age</label>
                          <input type="number" id="age-from" name="age-from" min="20" placeholder="e.g., 20" className="outline-none h-10 w-[100px] text-center"/>
                          </div>
                          <h1 className="mt-auto text-2xl">to</h1>
                          <div className="flex flex-col mt-auto">
                          <input type="number" id="age-to" name="age-to" min="20" placeholder="e.g., 27" className="outline-none h-10 w-[100px] text-center"/>
                          </div>
                    </div>
                    <button onClick={handleRegisterPopup} className="h-10 w-[100px] bg-[#FC014E] mt-5 md:mt-auto text-white text-xl">Search</button>
                </div>
            </div>
        </div>
        <div className="flex overflow-hidden">
            <img src={IMG_1} className="md:h-14 h-10" alt="border"/>
            <img src={IMG_1} className="md:h-14 h-10" alt="border"/>
            <img src={IMG_1} className="md:h-14 h-10" alt="border"/>
        </div>
        <div className="flex flex-col justify-center items-center w-full overflow-hidden">
            <h1 className="font-jost text-[#FC014E] mt-5 md:text-5xl text-3xl font-bold text-center">HOW <span className="text-black">IT</span> WORKS</h1>
            <img src={IMG_3} alt="border" className="w-[600px]"/>
            <h1 className="font-jost text-black md:text-5xl text-[22px] font-bold text-center">Find Your Soulmate In Just Few Steps</h1>
            <p className="text-xl font-jost px-[10%] text-center py-3"><span className="text-[#FC014E] font-bold">SHAADI TAMIL</span> simplifies your journey to finding the perfect match in just a few steps. While you focus on what truly matters, we'll take care of everything else.</p>
            <div className="flex flex-col md:flex-row justify-center items-center flex-wrap w-full gap-10  md:mt-[5%] md:mb-[7%] px-[5%] font-jost ">
                {Steps.map(step=>(

                    <div key={step.id} className="flex flex-col justify-center py-[5%]  md:py-0  items-center gap-4 relative p-[5%] h-[350px] max-h-[380px] w-[300px] md:min-w-[330px] md:w-[30%] md:h-full">
                        <div className="absolute  -z-10 h-full w-full">
                        <img src={IMG_4} alt="pink_background " className=" animate-spin-slow "/>
                        </div>
                        
                       <div className="md:text-[100px] text-[50px] text-white pt-5">
                            {step.icon}
                       </div>
                       <h1 className="text-xl md:text-3xl font-bold px-[5%] text-white text-center">{step.name}</h1>
                       <p className="text-md md:text-xl text-center px-[5%] text-white">{step.content}</p>
                       <p className="text-black text-lg">{step.id}</p>
                    </div>
                
                ))}
            </div>
        </div>
        <h1 className="font-jost text-black md:text-5xl text-[22px] font-bold text-center py-5">Where Every <span className="text-[#FC014E]">Match</span> Has a Story</h1>
    <div>
    
    <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3  md:grid-rows-2 gap-4 px-2">
  {/* First Row: Spans across 2 columns on md screens */}
  <div className="bg-[#FC014E] h-[300px] md:h-[400px] md:col-span-2 rounded-2xl">
    <ImageAndTextSlider ImageAndText={ImageAndTextReview} />
  </div>
  
  {/* First Row: Takes the remaining column space on md screens */}
  <div className="bg-green-600 h-[300px] md:h-[400px] rounded-2xl">
    <ImageSlider Image={ImageReview} />
  </div>
  
  {/* Second Row: Spans across all 3 columns on md screens */}
  <div  className="bg-[#FFDF00] h-[200px] md:h-[200px] md:col-span-3  md:w-[60%] md:justify-self-center rounded-2xl overflow-hidden">
    <TextSlider Text={TextReview} />
  </div>
</div>
</div>
<div className="bg-[#FC014E] mx-[auto] -mt-[50px] md:-mt-[150px] p-2 rounded-lg md:w-[80%] w-[90%] md:h-[200px] h-[150px]">
   <h1 className="text-white md:text-2xl text-xl font-jost text-center">Month: September 2024</h1>

   <div className="flex py-5 md:divide-x-4 divide-x-2 ">
   <div className="flex flex-col gap-1 justify-center items-center w-[30%]">
    <h1 className="text-white md:text-xl text-md font-jost ">Members</h1>
   <AnimationCounter  id="Text1" start={0} end={5200} duration={10000}/>
   </div>
   <div className="flex flex-col gap-1 justify-center items-center w-[30%]">
    <h1 className="text-white md:text-xl text-md  font-jost ">Subscriptions</h1>
   <AnimationCounter  id="Text1" start={0} end={700} duration={10000}/>
   </div>
   <div className="flex flex-col gap-1 justify-center items-center w-[35%]">
    <h1 className="text-white md:text-xl text-md  font-jost ">User Engagement</h1>
   <AnimationCounter  id="Text1" start={0} end={12500} duration={10000}/>
   </div>
   </div>
</div>
<Footer/>
        </div>
         
    )
}