import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Contactus from "./Pages/Contactus"
import UsedCarWarrenty from './Pages/UsedCarWarrenty';
import VehicleInspections from './Pages/VehicleInspections';
import VehicleService from './Pages/VehicleService';
import RoadSide from './Pages/RoadSide';
import BatteryReplacement from './Pages/BatteryReplacement';
import WindScreenRepair from './Pages/WindScreenRepair';
import FAQPage from './Pages/FAQPage';
import Testimonial from './Pages/Testominals';
import Pricing from './Pages/Pricing';
import {Blogs} from "./Pages/Blogs"
import {BlogsDetail} from "./Pages/BlogsDetail"
import {SignIn} from "./Pages/Auth/SignIn"
import {SignUp} from "./Pages/Auth/SignUp"
import { BookServices } from './Pages/BookServices';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About-us" element={<AboutUs />} />
        <Route path='/Contact-us' element={<Contactus/>}/>
        <Route path='/Used-Car-Warrenty' element={<UsedCarWarrenty/>}/>
        <Route path='/Vehicle-inspections' element={<VehicleInspections/>}/>
        <Route path='/Vehicle-service' element={<VehicleService/>}/>
        <Route path="/Road-side" element={<RoadSide/>}/>
        <Route path='/Battery-Replacement' element={<BatteryReplacement/>}/>
        <Route path='/wind-screen-Repair' element={<WindScreenRepair/>}/>
        <Route path='/Faq-Page' element={<FAQPage/>}/>
        <Route path='/Testominals' element={<Testimonial/>}/>
        <Route path='/Pricing' element={<Pricing/>}/>
        <Route path='/Blogs' element={<Blogs/>}/>
        <Route path='/BlogsDetail' element={<BlogsDetail/>}/>
        <Route path='/Sign_In' element={<SignIn />}/>
        <Route path='/Sign_Up' element={<SignUp />}/>
        <Route path='/Book_Services' element={<BookServices />}/>



      </Routes>
    </Router>
  );
}

export default App;
