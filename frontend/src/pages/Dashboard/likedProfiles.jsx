import { useState } from "react";
import { MdEmail } from "react-icons/md";

import { FaPhone } from "react-icons/fa6";
import profiles from "../../data/data1";
import { BsBalloonHeart, BsBalloonHeartFill } from "react-icons/bs";
import profileimg from "../../assets/profile_1.jpeg";

export default function LikedProfiles(){

    const [like, setLike] = useState(true);


    const handleHeart = () => {
        setLike(!like);
    };

    return(
        <div className="ml-10 flex flex-col gap-3.5">
                        <h1 className="text-2xl underline font-semibold font-jost">LIKED PROFILES (50)</h1>
                        <ul className="flex flex-col  gap-3  h-[800px] overflow-x-hidden  overflow-y-visible no-scrollbar">
                            <li className=" mt-3 flex gap-2  backdrop-blur-sm bg-gradient-to-br from-[#fc014c65] to-[rgba(255,255,255,0.1)]  rounded-xl  drop-shadow-md h-[500px]  mx-5">
                                <div className="w-[30%] relative">
                                    <img src={profileimg} className="h-full w-full rounded-xl" alt="Profile" />
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 " onClick={handleHeart}>
                                        {like ? (
                                            <BsBalloonHeartFill className="text-5xl text-[#FC014E] stroke-white" />
                                        ) : (
                                            <BsBalloonHeart className="text-5xl text-[#FC014E] animate-bounce hover:animate-none" />
                                        )}
                                    </div>
                                </div>
                                <div className="w-[70%] text-xl font-jost flex flex-col mt-5 mx-5 gap-3">
                                    <h1 className="font-semibold">SARAVANAN KUMAR (Profile created by Parents)</h1>
                                    <div className="flex gap-10">
                                        <p>
                                            <span className="font-semibold underline">AGE</span>
                                            <span className="font-semibold">: </span>29 years, 7 months
                                        </p>
                                        <p>
                                            <span className="font-semibold underline">LOCATION</span>
                                            <span className="font-semibold">: </span>Chennai, Tamilnadu, India
                                        </p>
                                    </div>
                                    <div className="flex gap-10">
                                        <p>
                                            <span className="font-semibold underline">EDUCATION</span>
                                            <span className="font-semibold">: </span>Undergraduate - Engineering / Computers
                                        </p>
                                        <p>
                                            <span className="font-semibold underline">PROFESSION</span>
                                            <span className="font-semibold">: </span>Engineer - Non IT
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h1 className="font-semibold underline">ABOUT</h1>
                                        <p className="line-clamp-3">
                                        Hello! I’m a well-rounded individual with a background in engineering, deeply rooted in traditional values while being open to new experiences. My career as a Mechanical Engineer has allowed me to develop a strong sense of responsibility, problem-solving skills, and a keen eye for detail. I approach life with the same passion and dedication that I bring to my work, always striving to learn and grow.

Family is very important to me, and I cherish the time spent with my loved ones. I believe in maintaining a healthy balance between work and personal life, and I enjoy engaging in various activities such as traveling, reading, and exploring new cuisines. My friends and family describe me as caring, dependable, and someone who always has a positive outlook on life.

I am looking for a partner who shares similar values and is ready to embark on this journey of life with mutual respect, love, and understanding. Together, I believe we can build a harmonious and joyful life.
                                        </p>
                                    </div>
                                    <div className="flex mt-auto gap-5 items-center justify-center">
                                      <div className="flex items-center justify-center p-2 rounded-md gap-2 bg-green-500">
                                          <FaPhone  className="fill-white" />
                                          <h1 className="text-md  text-white">VIEW MOBILE NUMBER</h1>
                                      </div>
                                      <div className="flex items-center justify-center text-white gap-2 p-2 rounded-md bg-blue-500">
                                          <MdEmail className="fill-white text-2xl" />
                                          <h1 className="text-md ">VIEW EMAIL ADDRESS</h1>
                                      </div>
                                  </div>
                                  <button className="bg-[#FC014E] rounded font-semibold mx-auto mt-auto mb-5 px-3 py-2  text-white">CLICK TO VIEW</button>

                                </div>
                            </li>
                            {profiles.map(each=>(
                              <li className="flex gap-2 backdrop-blur-sm bg-gradient-to-br from-[#fc014c65] to-[rgba(255,255,255,0.1)]  rounded-xl drop-shadow-md min-h-[400px]  mx-5">
                              <div className="w-[30%] relative">
                                  <img src={profileimg} className="h-full w-full rounded-xl" alt="Profile" />
                                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 " onClick={handleHeart}>
                                      {like ? (
                                          <BsBalloonHeartFill className="text-5xl text-[#FC014E] stroke-white" />
                                      ) : (
                                          <BsBalloonHeart className="text-5xl text-[#FC014E] animate-bounce hover:animate-none" />
                                      )}
                                  </div>
                              </div>
                              <div className="w-[70%] font-jost flex flex-col mt-5 mx-5 gap-3">
                              <h1 className="font-semibold text-xl">
  {each.firstName.toUpperCase()} {each.lastName.toUpperCase()}
  <span className="text-sm font-light bg-indigo-900">
    (Profile created by {each.profilefor})
  </span>
</h1>
                                  <div className="flex gap-10">
                                      <p>
                                          <span className="font-semibold underline">AGE</span>
                                          <span className="font-semibold">: </span> {each.dob}
                                      </p>
                                      <p>
                                          <span className="font-semibold underline">LOCATION</span>
                                          <span className="font-semibold">: </span>{each.livingcity} {each.livingcountry}
                                      </p>
                                  </div>
                                  <div className="flex gap-10">
                                      <p>
                                          <span className="font-semibold underline">EDUCATION</span>
                                          <span className="font-semibold">: </span> {each.educationQualification} {each.educationSpecification}
                                      </p>
                                      <p>
                                          <span className="font-semibold underline">PROFESSION</span>
                                          <span className="font-semibold">: </span> {each.currentEmployment.department}
                                      </p>
                                  </div>
                                  <div className="flex flex-col gap-2">
                                      <h1 className="font-semibold underline">ABOUT</h1>
                                      <p className="line-clamp-3">
                                           {each.aboutYou}
                                      </p>
                                  </div>
                                  <div className="flex mt-auto gap-5 items-center justify-center">
                                      <div className="flex items-center justify-center p-2 rounded-md gap-2 bg-green-500">
                                          <FaPhone  className="fill-white" />
                                          <h1 className="text-md  text-white">VIEW MOBILE NUMBER</h1>
                                      </div>
                                      <div className="flex items-center justify-center text-white gap-2 p-2 rounded-md bg-blue-500">
                                          <MdEmail className="fill-white text-2xl" />
                                          <h1 className="text-md ">VIEW EMAIL ADDRESS</h1>
                                      </div>
                                  </div>
                                  <button className="bg-[#FC014E] rounded font-semibold mx-auto mt-auto mb-5 px-3 py-2  text-white">CLICK TO VIEW</button>

                              </div>
                          </li>
                            ))}
                        </ul>
                    </div>
    )
}