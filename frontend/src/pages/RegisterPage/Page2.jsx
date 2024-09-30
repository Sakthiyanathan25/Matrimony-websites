import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/LOGO.png";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setPrivacyAndImages } from "../../redux/registrationSlice";
import { IoIosClose } from "react-icons/io";

const Page2 = () => {
  const state = useSelector((state) => state.registration);
  const dispatch = useDispatch();
  const [preview, setPreview] = useState(null);

  const handlePrivacy = (e) => {
    const { name, checked } = e.target;
    
    dispatch(setPrivacyAndImages({ key: name, value: checked }));
  };

  const handleImage = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    

    if (file) {
      dispatch(setPrivacyAndImages({ key: name,file }));
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setPreview(fileReader.result);
        console.log(fileReader.result)
      };
      fileReader.readAsDataURL(file);
      
    }
  };

  const handleImageRemove = () => {
    console.log(state.ProfileDP)
    dispatch(setPrivacyAndImages({ key: "ProfileDP", value: "" }));
    setPreview(null);
    
  };

  return (
    <div className="pt-5 min-h-full">
      <NavLink to="/" className="mt-5">
        <img src={Logo} alt="logo" className="ml-2 h-20 w-28" />
      </NavLink>
      <h1 className="md:text-3xl text-lg font-bold font-jost text-center">
        Privacy, Terms, and Image Upload
      </h1>
      <div className="min-h-[500px]">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[60%]">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Upload Profile Photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="ProfileDP"
                      accept="image/*"
                      type="file"
                      className="sr-only"
                      value={state.ProfileDP || ""}
                      onChange={handleImage}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 2MB
                </p>
              </div>
            </div>

            <div className="border border-dashed border-gray-900/25 my-10 h-[300px] p-2 flex justify-center items-center overflow-hidden">
              {preview ? (
                <div className="relative p-5">
                  <div
                    className="absolute top-0 right-0 cursor-pointer"
                    onClick={handleImageRemove}
                  >
                    <IoIosClose size={25} />
                  </div>
                  <img src={preview} alt="Profile Photo" className="h-[250px]" />
                </div>
              ) : (
                <div>No Images Uploaded</div>
              )}
            </div>

            <div className="flex items-center my-4 font-jost">
              <input
                type="checkbox"
                id="terms"
                name="agreeToPrivacyPolicy"
                onChange={handlePrivacy}
                checked={state.agreeToPrivacyPolicy || false}
                className="h-[1rem] w-4  accent-indigo-600"
              />
              <label htmlFor="terms" className="ml-2 text-sm md:text-xl">
                I agree to the{" "}
                <span className="text-blue-500 underline">
                  <NavLink to="/shaadhiTamil/privacyPolicy/view">
                    privacy policy.
                  </NavLink>
                </span>
              </label>
            </div>
            
            <div className="flex items-center my-4 font-jost">
            <input
  type="checkbox"
  id="agreeToTerms"
  name="agreeToTerms"
  onChange={handlePrivacy}
  checked={state.agreeToTerms}
  className="h-[1rem] w-4 accent-indigo-600 "
 
/>
              <label htmlFor="agreeToTerms" className="ml-2 text-sm md:text-xl">
                I accept the{" "}
                <span className="text-blue-500 underline">
                  <NavLink to="/shaadhiTamil/TermsandContions/view">
                    terms and conditions
                  </NavLink>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Page2;
