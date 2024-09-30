import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Step 1: Basic Information
  profilefor:'',
  firstName: '',
  lastName: '',
  gender: '',
  dob: '',
  religion: '',
  community: '',
  email: '',
  phoneNumber: '',
  phoneCode:'',
  address: {
    doorNo: '',
    streetName: '',
    city: '',
    pincode: ''
  },
  address1: {
    doorNo: '',
    streetName: '',
    city: '',
    pincode: ''
  },
  address2: {
    doorNo: '',
    streetName: '',
    city: '',
    pincode: ''
  },
  maritalStatus: '',
  livingSituation: '',
  livingcountry:"",
  livingcity:"",
  height: '',
  weight: '',
  diet: '',

  // Step 2: Customer Details
  educationQualification: '',
  educationSpecification:'',

  currentEmployment: {
    status:'',
    workplace: '',
    department: ''
  },
  income: '',
  aboutYou: '',
  livingWithFamily:'',
  familyDetails: '',
  aboutYourFamily: '',

  // Step 3: Privacy, Terms, and Image Upload
  ProfileDP: null,
  agreeToPrivacyPolicy: false,
  agreeToTerms: false,
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    // Update state for Step 1
    setBasicInformation(state, action) {
      const { key, value } = action.payload;
      state[key] = value;
    },
    setAddress(state, action) {
        const { key, value } = action.payload;
      state[key] = { ...state[key], value };
    },
    
    // Update state for Step 2
    setCurrentEmployment(state, action) {
      state.currentEmployment = { ...state.currentEmployment, ...action.payload };
    },
    // Update state for Step 3
    setPrivacyAndImages(state, action) {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});
export const {
  setBasicInformation,
  setAddress,
  setCurrentEmployment,
  setPrivacyAndImages,
} = registrationSlice.actions;

export default registrationSlice.reducer;
