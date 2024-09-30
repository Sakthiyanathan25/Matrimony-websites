import { useState } from "react";
import { useSelector } from "react-redux";
import { IoIosClose,IoIosArrowRoundBack } from "react-icons/io";
import Step1Content from "./BasicFormSteps/Step1";
import Step2Content from "./BasicFormSteps/Step2";
import Step3Content from "./BasicFormSteps/Step3";
import Step4Content from "./BasicFormSteps/Step4";
import { useNavigate } from "react-router-dom";

const BasicFormStepper = ({handleClickPopup}) => {
    const state=useSelector(state=>state.registration)
    const [currentStep, setCurrentStep] = useState(1);
    const [slideDirection, setSlideDirection] = useState('');
    const [error,setError]=useState('')
    const navigate=useNavigate()
    // State to determine slide direction
    const steps = [
        { id: 1, label: 'Step 1', content: <Step1Content /> },
        { id: 2, label: 'Step 2', content: <Step2Content /> },
        { id: 3, label: 'Step 3', content: <Step3Content /> },
        { id: 4, label: 'Step 4', content: <Step4Content /> },
    ];

    const nextStep = () => {
        
        if (currentStep < steps.length) {
            setSlideDirection('next'); // Set slide direction to 'next'
            setCurrentStep(currentStep + 1);
            setError("")
        }

        else if (currentStep === 4) {
            const errors = [];
            
            if (state.firstName === "") errors.push("First Name");
            if (state.lastName === "") errors.push("Last Name");
            if (state.profilefor === "") errors.push("Profile For");
            if (state.gender === "") errors.push("Gender");
            if (state.dob === "") errors.push("Date of Birth");
            if (state.religion === "") errors.push("Religion");
            if (state.castes === "") errors.push("Castes");
            if (state.maritalStatus === "") errors.push("Marital Status");
            if (state.height === "") errors.push("Height");
            if (state.weight === "") errors.push("Weight");
            if (state.diet === "") errors.push("Diet");
            if (state.livingcountry === "") errors.push("Living Country");
            if (state.livingcity === "") errors.push("Living City");
            if (state.email === "") errors.push("Email");
            if (state.phoneNumber === "") errors.push("Phone Number");
            if (state.phoneCode === "") errors.push("Phone Code"); 
        
            if (errors.length > 0) {
                console.log("Error: Please complete the following fields:");   
                const errorMessage = errors.join(", ");  
                setError(`Complete the following fields: ${errorMessage}`);
            }else{
                console.log("Basic details completed")
                setError("")
                navigate("/register/Step/2")
            }
        
        }  
    };
    const prevStep = () => {
        if (currentStep > 1) {
            setSlideDirection('prev'); // Set slide direction to 'prev'
            setCurrentStep(currentStep - 1);
             setError("")
        }
    };

    const handleCloseButtonClick = (event) => {
        event.stopPropagation();
        handleClickPopup(); 
      };
    return (
      <div className="fixed z-[60]  top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2" >
          
          <div className="relative group w-full h-full mx-10">
          <div className='absolute -inset-0.5 bg-[#FC014E] w-[350px] md:w-[500px] rounded-sm blur-lg  transition duration-300 opacity-50 group-hover:opacity-100'></div>
          <div className=" relative bg-white  md:h-[520px] h-[440px]  w-[350px] md:w-[500px] px-6 py-2 rounded-lg flex-col flex" >
            <div className="flex ">
            <div className=" mb-2">
              <button onClick={prevStep}  className={`text-black pb-2 ${currentStep===1 ?"invisible":"null"}`}>
                <IoIosArrowRoundBack size={40} />
              </button>
              </div>
            <div className="ml-[25%] flex justify-center items-center">
                <h1 className="text-black text-xl font-semibold font-jost">BASIC DETAILS</h1>
            </div>
            <div className="ml-auto mb-2 ">
              <button onClick={handleCloseButtonClick}  className="text-black pb-2">
                <IoIosClose size={40} />
              </button>
            </div>
            </div>
            <div className=" w-full overflow-hidden ">
            <div
        className={`p-2 md:p-5 rounded-lg bg-white shadow  ${
          slideDirection === 'next' ? ' slide-in-from-right' : 'slide-in-from-left'
        }`}
        key={currentStep} // This key forces React to re-render the component, allowing the animation to trigger each time
      >
        {steps[currentStep - 1].content}

        <p className="pt-2 text-lg text-red-500">{error}</p>
      </div>
            </div>
            <button onClick={nextStep} className="absolute  bottom-2  md:bottom-10 rounded font-jost text-white  right-10 bg-blue-500 h-10 w-20" >Next</button>

          </div>
        </div>
        
          </div>
    );
};

export default BasicFormStepper;
