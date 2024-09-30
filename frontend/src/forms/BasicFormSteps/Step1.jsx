import { useSelector, useDispatch } from "react-redux";
import { setBasicInformation } from "../../redux/registrationSlice";
const Step1Content = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.registration);
    const firstName = useSelector(state => state.registration.firstName);
    const lastName = useSelector(state => state.registration.lastName);

    const Prefix= state.profilefor === "self" ? "Your" : state.gender === "male" ? "His" :  state.gender ==="female" ? "Her" :"His/Her"
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setBasicInformation({ key: name, value }));
    };
    return (
        <div className="flex flex-col space-y-4 font-jost">
            <div className="flex flex-col gap-1">
            <label htmlFor="profilefor" className="font-semibold font-jost">Profile for</label>
            <select required onChange={handleChange} value={state.profilefor || ''} id="profilefor" name="profilefor" className="border  outline-none p-2 rounded">
                <option value="">Select</option>
                <option value="self">Self</option>
                <option value="son">Son</option>
                <option value="daughter">Daughter</option>
                <option value="brother">Brother</option>
                <option value="sister">Sister</option>
                <option value="friend">Friend</option>
            </select>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="font-semibold font-jost">{Prefix} First Name</label>
                <input
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="border  outline-none p-2 rounded"
                    required
                />
            </div>
            <div className="flex flex-col gap-1">
                <label  htmlFor="lastName" className="font-semibold">{Prefix} Last Name</label>
                <input
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="border p-2 rounded"
                    required
                />
            </div>
            <div className="flex flex-col gap-1">
            <label htmlFor="gender" className="font-semibold font-jost">Gender</label>
            <select required id="gender" name="gender" onChange={handleChange} value={state.gender || ''} className="border  outline-none p-2 rounded">
                <option value="">Select Gender </option>
                <option value="male">Male </option>
                <option value="female">Female </option>
            </select>
            </div>
        </div>
    );
};

export default Step1Content