import React, { useState } from 'react';
import services2 from "../../assets/images/services2.png"
import services1 from "../../assets/images/services1.png"
import car_service_2 from "../../assets/images/car_service_2.png"
import car_service_3 from "../../assets/images/car_service_3.png"
import services4 from "../../assets/images/services4.png"



const InsuranceServices = () => {
    const [activeContent, setActiveContent] = useState('warranty_content');

  const toggleContent = (target) => {
    setActiveContent(target === activeContent ? '' : target);
  };

  return (
    <div className="container six_images">
      <div className="row">
        <div className="col-lg-12 mt-5 mb-5">
          <div className="text-center Great_customer">
            <h5>YOUR FAVORITE INSURANCE</h5>
            <h3>Get Started favorite <span>insurance</span></h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 gap-1 button_store_services d-flex justify-content-center flex-wrap">
          <button className="service_button" onClick={() => toggleContent('warranty_content')}>
            Used Car warranty <i className="fa-solid fa-square-arrow-up-right"></i>
          </button>
          <button className="service_button" onClick={() => toggleContent('inspection_content')}>
            Vehicle inspection <i className="fa-solid fa-square-arrow-up-right"></i>
          </button>
          <button className="service_button" onClick={() => toggleContent('service_content')}>
            Vehicle Service <i className="fa-solid fa-square-arrow-up-right"></i>
          </button>
          <button className="service_button" onClick={() => toggleContent('roadside_content')}>
            Road Side <i className="fa-solid fa-square-arrow-up-right"></i>
          </button>
          <button className="service_button" onClick={() => toggleContent('battery_content')}>
            Battery replacement <i className="fa-solid fa-square-arrow-up-right"></i>
          </button>
          <button className="service_button" onClick={() => toggleContent('windscreen_content')}>
            Windscreen repair <i className="fa-solid fa-square-arrow-up-right"></i>
          </button>
        </div>
      </div>
      {/* ----------------- Ids Page of button services ------------ */}
      <div className={`row mt-5 mb-5 ${activeContent === 'warranty_content' ? '' : 'd-none'}`} id="warranty_content">
        <div className="col-lg-6">
          <h4>Car warranty</h4>
          <p>"Car Warranty Explained: A Comprehensive Guide to Understanding the Benefits, Coverage Options, and Fine Print of Vehicle Warranties, Ensuring Peace of Mind and Protection for Your Automotive Investment."</p>
          <p>"Car Warranty Explained: A Comprehensive Guide to Understanding the Benefits, Coverage Options, and Fine Print of Vehicle Warranties, Ensuring Peace of Mind and Protection for Your Automotive Investment."</p>
        </div>
        <div className="col-lg-6">
          <img src={services2} alt="Used Car warranty image" />
        </div>
      </div>
      <div className={`row mt-5 mb-5 ${activeContent === 'inspection_content' ? '' : 'd-none'}`} id="inspection_content">
        <div className="col-lg-6">
          <h4>Vehicle inspection</h4>
          <p>"Vehicle Inspection: The Ultimate Guide to Understanding the Importance, Process, and Benefits of Regular Vehicle Inspections for Safety, Performance, and Longevity of Your Vehicle."</p>
          <p>"Vehicle Inspection: The Ultimate Guide to Understanding the Importance, Process, and Benefits of Regular Vehicle Inspections for Safety, Performance, and Longevity of Your Vehicle."</p>
        </div>
        <div className="col-lg-6">
          <img src={services1} alt="Vehicle inspection image" />
        </div>
      </div>
      <div className={`row mt-5 mb-5 ${activeContent === 'service_content' ? '' : 'd-none'}`} id="service_content">
        <div className="col-lg-6">
          <h4>Vehicle Service</h4>
          <p>"Vehicle Service: A Comprehensive Overview of Essential Maintenance Procedures, Tips, and Benefits to Keep Your Vehicle Running Smoothly and Safely for Years to Come."</p>
          <p>"Vehicle Service: A Comprehensive Overview of Essential Maintenance Procedures, Tips, and Benefits to Keep Your Vehicle Running Smoothly and Safely for Years to Come."</p>
        </div>
        <div className="col-lg-6">
          <img src={car_service_2} alt="Vehicle Service image" />
        </div>
      </div>
      <div className={`row mt-5 mb-5 ${activeContent === 'roadside_content' ? '' : 'd-none'}`} id="roadside_content">
        <div className="col-lg-6">
          <h4>Road Side</h4>
          <p>"Roadside Assistance: The Complete Guide to Understanding Services, Benefits, and Providers, Ensuring Safety and Peace of Mind During Emergencies and Travel."</p>
          <p>"Roadside Assistance: The Complete Guide to Understanding Services, Benefits, and Providers, Ensuring Safety and Peace of Mind During Emergencies and Travel."</p>
        </div>
        <div className="col-lg-6">
          <img src={car_service_3} alt="Road Side image" />
        </div>
      </div>
      <div className={`row mt-5 mb-5 ${activeContent === 'battery_content' ? '' : 'd-none'}`} id="battery_content">
        <div className="col-lg-6">
          <h4>Battery replacement</h4>
          <p>"Battery Replacement: A Detailed Guide on When, Why, and How to Replace Your Vehicle's Battery, Ensuring Reliable Performance and Avoiding Unexpected Breakdowns."</p>
          <p>"Battery Replacement: A Detailed Guide on When, Why, and How to Replace Your Vehicle's Battery, Ensuring Reliable Performance and Avoiding Unexpected Breakdowns."</p>
        </div>
        <div className="col-lg-6">
          <img src={services1} alt="Battery replacement image" />
        </div>
      </div>
      <div className={`row mt-5 mb-5 ${activeContent === 'windscreen_content' ? '' : 'd-none'}`} id="windscreen_content">
        <div className="col-lg-6">
          <h4>Windscreen repair</h4>
          <p>"Windscreen Repair: Everything You Need to Know About Fixing Chips, Cracks, and Damage to Your Vehicle's Windshield for Safe Driving and Maintaining Visibility."</p>
          <p>"Windscreen Repair: Everything You Need to Know About Fixing Chips, Cracks, and Damage to Your Vehicle's Windshield for Safe Driving and Maintaining Visibility."</p>
        </div>
        <div className="col-lg-6">
          <img src={services4} alt="Windscreen repair image" />
        </div>
      </div>
    </div>
  );
};

export default InsuranceServices;
