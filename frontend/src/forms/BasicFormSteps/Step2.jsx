import { useSelector, useDispatch } from "react-redux";
import { setBasicInformation } from "../../redux/registrationSlice";

const Step2Content = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.registration);

    const Prefix= state.profilefor === "self" ? "Your" : state.gender === "male" ? "His" :  state.gender ==="female" ? "Her" :"His/Her"

    // Calculate max date for 20 years ago
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 20, today.getMonth(), today.getDate());
    const maxDateString = maxDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setBasicInformation({ key: name, value }));
    };
    const castes = [
        "adaviyar",
        "agamudayar",
        "ambattar",
        "arunattu-vellalar",
        "ashtasahasram",
        "chettiar",
        "chozhia-vellalar",
        "desikar",
        "devanga",
        "devendrakulam",
        "elur-chetty",
        "gounder",
        "hebbar-iyengar",
        "ilai-vaniyar",
        "irula-people",
        "isai-vellalar",
        "iyengar",
        "iyer",
        "jain-communities",
        "kaarkaathaar",
        "kallar",
        "kamma",
        "kammalar",
        "karaiyar",
        "katesar",
        "kodikaal-vellalar",
        "koliyar",
        "konar",
        "kondaikatti-vellalar",
        "kongu-vellalar",
        "koravar",
        "kosar-people",
        "koshta",
        "kulala",
        "kuravar",
        "kuruba",
        "kurumba-gounder",
        "malai-vellalar",
        "maravar",
        "marakkar",
        "meenavar",
        "mudugar",
        "mukkulathor",
        "nadan",
        "nadar",
        "nadar-climber",
        "nagarathar",
        "nankudi-vellalar",
        "padmasali",
        "palayakkara-naicker",
        "palayakkaran",
        "paliyan",
        "panar",
        "pannaiyar",
        "paravar",
        "pattanavar",
        "pattariyar",
        "pattusali",
        "reddy",
        "rowther",
        "saurashtra-people",
        "sembadavar",
        "sengunthar",
        "siviyar",
        "tamil-brahmin",
        "tamil-jain",
        "thigala",
        "thondaimandala-vellalar",
        "thuluva-vellala",
        "thurumbar",
        "udayar",
        "uppara",
        "vadama",
        "vaddera",
        "valangai",
        "vallanattu-chettiar",
        "valluvar",
        "vannar",
        "vanniyar",
        "vathima",
        "vatuka",
        "velar",
        "vellalar"
    ];
    

    return (
        <div className="flex flex-col font-jost space-y-4">
            <div className="flex flex-col gap-1">
                <label htmlFor="dob" className="font-semibold">{Prefix} Date Of Birth</label>
                <input
                    type="date"
                    name="dob"
                    id="dob"
                    max={maxDateString} // Set minimum date to 20 years ago
                    value={state.dob || ''}
                    onChange={handleChange}
                    placeholder="Date of Birth"
                    className="border outline-none p-2 rounded"
                    required
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="religion" className="font-semibold">{Prefix} Religion</label>
                <select
                    id="religion"
                    name="religion"
                    onChange={handleChange}
                    value={state.religion || ''}
                    className="border outline-none p-2 rounded"
                    required
                >   <option value="">Select</option>

                    <option value="Hindu">Hindu</option>
                </select>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="community" className="font-semibold">{Prefix} Caste</label>
                <select
               id="community"
               name="community"
               onChange={handleChange}
               value={state.community || ''}
               className="border outline-none p-2 rounded"
               required>
                                 <option value="">select Your caste</option>

                       {castes.map(each => (
                         <option key={each} value={each}>
                               {each}
                             </option>))}
                             <option value="nocaste">No Caste</option>
                 </select>  
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="maritalStatus" className="font-semibold">{Prefix} Marital Status</label>
                <select
               id="maritalStatus"
               name="maritalStatus"
               onChange={handleChange}
               value={state.maritalStatus || ''}
               className="border outline-none p-2 rounded"
               required>
                                 <option value="">select Marital Status</option>
                                 <option value="never married">Never Married</option>
                                 <option value="divorced">Divorced</option>
                                 <option value="widow">Widow</option>
                                 <option value="widower">Widower</option>
      
                 </select>
                 
            
            </div>
            
        </div>
    );
};

export default Step2Content