import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import Page1 from "./pages/RegisterPage/Page1"
import Page2 from "./pages/RegisterPage/Page2"
import TermsAndConditions from './pages/Terms&policy/TermsandContions';
import PrivacyPolicy from './pages/Terms&policy/PrivacyPolicy';
import Dashboard from "./pages/Dashboard/dashboard";
import Upgrade from './pages/upgrade';

import './App.css'

function App() {


   
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/register/Step/2" element={<Page1/>}/>
        <Route path="/register/Step/3" element={<Page2/>}/>
        <Route path="/shaadhiTamil/TermsandContions/view" element={<TermsAndConditions/>}/>
        <Route path="/shaadhiTamil/privacyPolicy/view" element={<PrivacyPolicy/>}/>
        <Route path="/shaadhiTamil/main" element={<Dashboard/>}/>
        <Route path="/shaadhiTamil/main/upgrade" element={<Upgrade/>}/>
      </Routes>
    </Router>
  )
}

export default App
