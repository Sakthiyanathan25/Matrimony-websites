import profiles from "../../data/data1";
import profileimg from "../../assets/profile_1.jpeg";

export default function LikesReceived(){

    return(
        <div className="ml-10 flex flex-col gap-3.5">
                        <h1 className="text-2xl underline font-semibold font-jost">LIKES RECIVED</h1>
                        <ul className="flex  gap-3 flex-wrap h-[800px] no-scrollbar overflow-x-hidden overflow-y-visible ">
                            {profiles.map(each=>(
                              <li className="flex flex-col justify-center w-[300px] no-scrollbar gap-2 backdrop-blur-sm bg-gradient-to-br from-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0.1)] border-2 border-black rounded-xl drop-shadow-md min-h-[400px]   mx-5">
                              <div className=" relative">
                                  <img src={profileimg} className="h-full w-full rounded-xl" alt="Profile" />
                              </div>
                              <div className=" text-xl font-jost flex flex-col mt-5 mx-5 gap-3">
                                  <h1 className="font-semibold">{each.firstName} {each.lastName} (Profile created by {each.profilefor})</h1>
                                  
                                  <button className="bg-[#FC014E] rounded font-semibold mx-auto mt-auto mb-2 px-3 py-2  text-white">CLICK TO VIEW</button>

                              </div>
                          </li>
                            ))}
                        </ul>
                    </div>
    )
}