import Logo from "../../assets/LOGO.png"
import { useDispatch,useSelector } from "react-redux"
import { setBasicInformation,setCurrentEmployment } from "../../redux/registrationSlice"
import { NavLink,useNavigate} from "react-router-dom"
import { useState } from "react"
import  Footer from "../../components/Footer"
const EducationDetails=()=>{
    const dispatch=useDispatch()
    const state= useSelector(state=>state.registration)
    const Prefix= state.profilefor === "self" ? "Your" : state.gender === "male" ? "His" :  state.gender ==="female" ? "Her" :"His/Her"

    const handleChange=(e)=>{
        const {name,value}=e.target
        dispatch(setBasicInformation({key:name,value}))
    }

    const showEducationDetails =
    state.educationQualification !== 'high_school' &&
    state.educationQualification !== 'no_formal_education' &&
    state.educationQualification !== '';
    return(
        <div className="flex flex-col md:flex-row mt-10 gap-3 justify-center items-center">
            <div className="flex flex-col gap-1 w-[60%] md:w-[30%]">
            <label htmlFor="educationQualification" className="font-semibold">
                  Highest EducationQualification
                </label>
                <select required onChange={handleChange} value={state.educationQualification || ''} id="educationQualification" name="educationQualification" className="border  outline-none p-2 rounded">
                <option value="">Select Your Education Qualification</option>
                <option value="no_formal_education">No Formal Education</option>
                <option value="high_school">High School / Secondary School</option>
                <option value="associate_degree">Associate's Degree / Diploma</option>
                <option value="bachelor_degree">Bachelor's Degree</option>
                <option value="master_degree">Master's Degree</option>
                <option value="doctorate">Doctorate / PhD</option>
                <option value="postdoctoral_research">Postdoctoral Research</option>
                <option value="professional_certification">Professional Certification</option>
                <option value="vocational_training">Vocational Training / Trade School</option>
               <option value="other">Other</option>
            </select>
            </div>
            <div className={`flex flex-col gap-1 w-[60%] md:w-[30%]  ${showEducationDetails?'':'hidden'}`} >
                <label  htmlFor="educationSpecification" className="font-semibold">{Prefix} Field of Study</label>
                <input
                    name="educationSpecification"
                    id="educationSpecification"
                    value={state.educationSpecification}
                    onChange={handleChange}
                    placeholder="Field of Study"
                    className="border p-2 rounded outline-none"
                    required
                />
            </div>
        </div>
    )
}

const CurrentEmploymentDetails=()=>{
    const dispatch=useDispatch()
    const state= useSelector(state=>state.registration)
    const Prefix= state.profilefor === "self" ? "Your" : state.gender === "male" ? "His" :  state.gender ==="female" ? "Her" :"His/Her"

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setCurrentEmployment({ [name]: value }));
      }

      const handleChange2 = (e) => {
        const { name, value } = e.target;
        dispatch(setBasicInformation({ key:name, value }));
      }

      const LengthOfaboutYou = state.aboutYou.length;

    const showEmploymentDetails =
    state.currentEmployment.status !== '' &&
    state.currentEmployment.status !== 'unemployed' 
    return(
        <div className="flex flex-col  mt-10 gap-3 justify-center items-center">
            <div className="flex flex-col gap-1 w-[60%] md:w-[30%]">
            <label htmlFor="educationQualification" className="font-semibold">
                  Current Employment Status
                </label>
                <select  onChange={handleChange} value={state.currentEmployment.status || ''} id="currentEmployment" name="status" className="border  outline-none p-2 rounded">
                 <option value="">Select Your Employment Status</option>
                 <option value="full_time">Employed Full-Time</option>
                 <option value="part_time">Employed Part-Time</option>
                 <option value="self_employed">Self-Employed</option>
                 <option value="freelancer">Freelancer</option>
                 <option value="unemployed">Unemployed</option>
            </select>
            </div>
            <div className={`flex flex-col gap-1 w-[60%] md:w-[30%]  ${showEmploymentDetails?'':'hidden'}`} >
                <label  htmlFor="department" className="font-semibold">{Prefix} Working Department</label>
                <input
                    name="department"
                    id="department"
                    value={state.currentEmployment.department}
                    onChange={handleChange}
                    placeholder="Working Department"
                    className="border p-2 rounded outline-none"
                    required
                />
            </div>

            <div className={`flex flex-col gap-1 w-[60%] md:w-[30%]`} >
                <label  htmlFor="income" className="font-semibold">{Prefix} Annual Income</label>
                <input
                  required
                    type="number"
                    min="10000"
                    name="income"
                    id="income"
                    value={state.income}
                    onChange={handleChange2}
                    placeholder="Annual Income"
                    className="border p-2 rounded outline-none"
                    
                />
                 

            </div>
            <div className={`flex flex-col gap-1 w-full px-[10%]`} >
                <label  htmlFor="aboutYou" className="font-semibold"> {`About (${Prefix})self`}</label>
                <textarea
                  required
                    type="number"
                    rows="20"
                   cols="40"
                    name="aboutYou"
                    id="aboutYou"
                    value={state.aboutYou}
                    onChange={handleChange2}
                    placeholder="Type your text here ( 1500 letters)"
                   
                    className={`border p-2 rounded outline-none ${LengthOfaboutYou>2000 ? "border-red-500 ":""}`}
                />
                <label  htmlFor="aboutYou" className={`ml-auto ${LengthOfaboutYou>2000 ? "text-red-500":"text-black"}  `}>{LengthOfaboutYou}/1500</label>
                </div>

        </div>
    )
}

const FamilyDetails=()=>{
    const dispatch=useDispatch()
    const state= useSelector(state=>state.registration)
    const Prefix= state.profilefor === "self" ? "Your" : state.gender === "male" ? "His" :  state.gender ==="female" ? "Her" :"His/Her"

    const handleChange=(e)=>{
        const {name,value}=e.target
        dispatch(setBasicInformation({key:name,value}))
    }
    
    //const showAboutFamily = state.livingWithFamily === 'yes'
    const LengthOfaboutFamily=state.aboutYourFamily.length;

    return(
        <div className="flex flex-col mt-10 gap-3 justify-center items-center">

            <div className="flex flex-col gap-2 w-[60%] md:w-[30%]">
      <label className="font-semibold">
        Are you living with your family?
        <div className="flex gap-4 mt-2">
          <label className="flex items-center">
            <input
              name="livingWithFamily"
              type="radio"
              value="yes"
              checked={state.livingWithFamily === 'yes'}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </label>
          <label className="flex items-center">
            <input
              name="livingWithFamily"
              type="radio"
              value="no"
              checked={state.livingWithFamily === 'no'}
              onChange={handleChange}
              className="mr-2"
            />
            No
          </label>
        </div>
      </label>
    </div>
    <div className={`flex flex-col gap-1 w-full px-[10%]`} >
                <label  htmlFor="aboutYourFamily" className="font-semibold"> About Family</label>
                <textarea
                  required
                    type="number"
                    rows="20"
                   cols="40"
                    name="aboutYourFamily"
                    id="aboutYourFamily"
                    value={state.aboutYourFamily}
                    onChange={handleChange}
                    placeholder="Type your text here ( 1500 letters)"
                   
                    className={`border p-2 rounded outline-none ${ LengthOfaboutFamily>2000 ? "border-red-500 ":""}`}
                />
                <label  htmlFor="aboutYourFamily" className={`ml-auto ${ LengthOfaboutFamily>2000 ? "text-red-500":"text-black"}  `}>{ LengthOfaboutFamily}/1500</label>
                </div>

        </div>
    )
}

const Page1 =()=>{
  
    const state=useSelector(state=>state.registration)
    const [error,setError]=useState("")
    const Prefix= state.profilefor === "self" ? "Your" : state.gender === "male" ? "His" :  state.gender ==="female" ? "Her" :"His/Her"
    const navigate=useNavigate()
    const SubmitForm=()=>{
        const errors = [];
            
            if (state.educationQualification === "") errors.push("Education Qualification");
            if ((state.educationQualification !== ""  && state.educationQualification !== 'high_school' &&  state.educationQualification !== 'no_formal_education' )&& state.educationSpecification==="") errors.push("Field of Study");
            if (state.currentEmployment.status === "") errors.push("Employment status");
            if ( state.currentEmployment.status !== '' && state.currentEmployment.status !== 'unemployed' && state.currentEmployment.department==="" ) errors.push("Working department");
            if (state.income === "") errors.push("Annual Income");
            if (state.aboutYou === "" && state.aboutYou.length<=1500) errors.push("About");
            if (state.aboutYourFamily === "" && state.aboutYourFamily.length<=1500) errors.push("About");
            if (state.livingWithFamily === "") errors.push("Living with your family");

        
            if (errors.length > 0) {
                console.log("Error: Please complete the following fields:");   
                const errorMessage = errors.join(", ");  
                setError(`Complete the following fields: ${errorMessage}`);
            }else{
                console.log("Basic details completed")
                setError("")
                navigate("/register/Step/3")
            }
    }
    return (
       <div className="font-jost min-h-full">
         <NavLink to="/" className="mt-5">
            <img src={Logo} alt="logo" className="ml-2 h-20 w-28"/>
         </NavLink>
        <h1 className="text-center mt-5 md:text-3xl text-xl font-bold">{Prefix} Details & Education Qualification</h1>
        <div>
            <EducationDetails/>
            <CurrentEmploymentDetails/>
            <FamilyDetails/>
     
        </div>
        <p className="pt-2 text-lg text-center text-red-500">{error}</p>
        <div className=" relative flex justify-end mr-[10%] my-[5%] ">
        <button onClick={SubmitForm} type="button" className="bg-blue-500 h-8 w-20 text-white ">Next </button>
        </div>
        <Footer/>
       </div>
    )
}



export default Page1