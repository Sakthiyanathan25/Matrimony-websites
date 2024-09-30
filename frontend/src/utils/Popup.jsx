import { IoIosClose } from "react-icons/io";

function Popup({ handleClickPopup, content, bgImg }) {
  
  const handleCloseButtonClick = (event) => {
    event.stopPropagation();
    handleClickPopup(); 
  };

  const handleContentClick = (event) => {
    event.stopPropagation(); // Prevent click events from bubbling up
  };

   

  return (
    <>
      <div 
        className="fixed z-50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center transition-all duration-1000 ease-in-out"
        onClick={handleClickPopup} // Clicking outside the popup closes it
      >
        <div className="relative group w-full mx-10">
          <div className={`absolute -inset-0.5 bg-[#FC014E] ${bgImg ? "bg-red-700" :"bg-[#FC014E]"} w-[350px] md:w-[500px] rounded-sm blur-lg transition duration-300 opacity-50 group-hover:opacity-100`}></div>
          <div 
            className="relative bg-white md:h-[520px] h-[420px] w-[420px] md:w-[520px] px-6 py-2 rounded-lg flex flex-col bg-cover "
            style={{ backgroundImage: `url(${bgImg})` }} // Set the background image dynamically
            onClick={handleContentClick} // Clicking inside the popup does not close it
          >
            <div className="self-end mb-2">
              <button onClick={handleCloseButtonClick} className={` pb-2 ${bgImg ? "text-white" :"text-black"}`}>
                <IoIosClose size={40} />
              </button>
            </div>
            <div className="z-10">
              {content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
