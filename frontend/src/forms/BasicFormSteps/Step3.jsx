import { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBasicInformation } from "../../redux/registrationSlice";


const Step3Content = () => {
    const [countries, setCountries] = useState([]);
    const dispatch = useDispatch();
    const state = useSelector(state => state.registration);
    

    const Prefix= state.profilefor === "self" ? "Your" : state.gender === "male" ? "His" :  state.gender ==="female" ? "Her" :"His/Her"

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setBasicInformation({ key: name, value }));
    };

    useEffect(() => {
        // Fetch countries when the component mounts
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://countriesnow.space/api/v0.1/countries');
                const data = await response.json();
                setCountries(data.data);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);

    return (
        <div className="flex flex-col space-y-4 font-jost">
            <div className="flex justify-around w-full">
                <div className="flex flex-col gap-1 w-[150px]">
                    <label htmlFor="height" className="font-semibold font-jost">{Prefix} height</label>
                    <input
                        type="number"
                        name="height"
                        id="height"
                        value={state.height}
                        onChange={handleChange}
                        placeholder="Height in Ft."
                        className="border outline-none p-2 rounded"
                        required
                    />
                </div>
                <div className="flex flex-col gap-1 w-[150px]">
                    <label htmlFor="weight" className="font-semibold font-jost">{Prefix} weight</label>
                    <input
                        type="number"
                        name="weight"
                        id="weight"
                        value={state.weight}
                        onChange={handleChange}
                        placeholder="Weight in Kg"
                        className="border outline-none p-2 rounded"
                        required
                    />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="diet" className="font-semibold font-jost">{Prefix} Diet</label>
                <select required id="diet" name="diet" onChange={handleChange} value={state.diet || ''} className="border outline-none p-2 rounded">
                    <option value="">Select Your Diet</option>
                    <option value="vegan">Vegan</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="non-vegetarian">Non-Vegetarian</option>
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="livingcountry" className="font-semibold font-jost flex-wrap">{Prefix} Current Residence Country</label>
                <select required id="livingcountry" name="livingcountry" onChange={handleChange} value={state.livingcountry || ''} className="border outline-none p-2 rounded">
                    <option value="">Select Your Country</option>
                    {countries.map((country) => (
                        <option className="font-jost" key={country.country} value={country.country}>
                            {country.country}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="livingcity" className="font-semibold font-jost flex-wrap">{Prefix} Current Residence City</label>
                <select required id="livingcity" name="livingcity" onChange={handleChange} value={state.livingcity || ''} className="border outline-none p-2 rounded">
                    <option value="">Select Your City</option>
                    {countries
                        .filter(country => country.country === state.livingcountry)
                        .flatMap(country => country.cities) // Flatten the cities array
                        .map((city, index) => (
                            <option className="font-jost" key={index} value={city}>
                                {city}
                            </option>
                        ))}
                </select>
            </div>
        </div>
    );
};


export default Step3Content