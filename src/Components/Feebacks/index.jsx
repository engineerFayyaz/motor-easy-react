import React, { useState, useEffect } from 'react';
import testiSideImage from "../../assets/images/testi-side.png";
import testiImage1 from "../../assets/images/testi-side.png";
import testiImage2 from "../../assets/images/testimonial.jpg";
import testiImage3 from "../../assets/images/testi-side.png";
import testiImage4 from "../../assets/images/testimonial.jpg";
import testiImage5 from "../../assets/images/title-shap.png";

const Feedbacks = () => {
  const [feedbacks] = useState([
    { name: 'John Doe', position: 'Mechanical Engineer', message: 'Excellent service! Highly recommend Simon Motors for their expertise and professionalism.' },
    { name: 'Jane Smith', position: 'Electrical Engineer', message: 'Great experience with Simon Motors. They provided exceptional quality work and excellent customer service.' },
    { name: 'David Brown', position: 'Automotive Technician', message: 'Simon Motors exceeded my expectations. Their team is knowledgeable, efficient, and friendly.' },
    { name: 'Emily Johnson', position: 'Quality Assurance Manager', message: 'I\'ve been a loyal customer of Simon Motors for years. They consistently deliver top-notch service and reliability.' },
    { name: 'Michael Wilson', position: 'Project Manager', message: 'Simon Motors is my go-to for all automotive needs. Trustworthy, dependable, and skilled professionals.' }
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1));
    }, 9000);
    return () => clearInterval(interval);
  }, [feedbacks.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1));
  };

  return (
    <div className="row p-4 mt-3 feedback_portion">
      <div className="col-lg-6">
        <img src={testiSideImage} alt="" />
      </div>
      <div className="col-lg-6 d-flex justify-content-evenly flex-column">
        <div className="d-flex justify-content-center align-items-center text-center flex-column">
          <h2 style={{ color: '#04BAE0' }} className="mb-2 mt-2">OUR CLIENT FEEDBACKS</h2>
          <h6 className="mb-3 mt-1">What People Says About Company</h6>
        </div>
        <div className="row two_side mt-3 d-flex justify-content-evenly">
          <div className="col-md-4">
            <img src={getRandomImage()} alt="" />
          </div>
          <div className="col-md-7 mt-5">
            <h2>{feedbacks[currentIndex].name}</h2>
            <p>{feedbacks[currentIndex].position}</p>
          </div>
          <div className="row feedback_portion_two">
            <div className="col-lg-2 text-end">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <div className="col-lg-10">
              <p>{feedbacks[currentIndex].message}</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-primary me-2" onClick={handlePrev}>Previous</button>
          <button className="btn btn-primary" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;

function getRandomImage() {
  const images = [testiImage1, testiImage2, testiImage3, testiImage4, testiImage5];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}
