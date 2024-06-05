import React, { useState } from 'react';
import image1 from "../../assets/images/faq-image.png";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mt-5">
      <div className="row mt-4 mb-3">
        <div className="col-lg-6">
          <div className="faq-section">
            <h2 className="text-center">FAQ</h2>
            {faqData.map((faq, index) => (
              <div className="faq-item" key={index}>
                <button
                  className={`accordion ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                  style={{ width: '100%', padding: '10px', marginBottom: '5px', cursor: 'pointer', textAlign: 'left', backgroundColor: '#EEFAFF', border: 'none', outline: 'none', transition: '0.4s' }}
                >
                  {faq.question}
                </button>
                <div
                  className={`panel ${activeIndex === index ? 'show' : ''}`}
                  style={{ maxHeight: activeIndex === index ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.2s ease-out', padding: '0 18px', backgroundColor: 'white' }}
                >
                  <p style={{ margin: '10px 0' }}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="image-grid">
            <img src={image1} alt="Image 1" style={{ maxWidth: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: 'What services does Simon Motors offer?',
    answer: 'Simon Motors offers a wide range of automotive services including repairs, maintenance, inspections, and more. Our team of skilled technicians is dedicated to ensuring your vehicle runs smoothly and safely.'
  },
  {
    question: 'How can I schedule a service appointment?',
    answer: 'Scheduling a service appointment at Simon Motors is easy. You can either call our service center or use our online booking system on our website to choose a convenient date and time for your appointment.'
  },
  {
    question: 'What types of vehicles does Simon Motors work on?',
    answer: 'Simon Motors specializes in servicing a variety of vehicles including cars, trucks, SUVs, and vans. Our experienced team can handle vehicles of all makes and models.'
  },
  {
    question: 'Does Simon Motors offer warranty on repairs?',
    answer: 'Yes, Simon Motors provides warranty on all repair work performed at our facility. We stand behind the quality of our services and strive for customer satisfaction.'
  },
  {
    question: 'Can I get a quote for services before scheduling an appointment?',
    answer: 'Absolutely! You can request a quote for any services you need before scheduling an appointment. Our team will provide you with a detailed estimate of the costs involved.'
  },
  {
    question: 'How often should I service my vehicle?',
    answer: 'Regular vehicle maintenance is essential for optimal performance and longevity. It is recommended to follow the manufacturer\'s guidelines for service intervals, typically every 6 months or every 5,000 miles.'
  },
  {
    question: 'What payment methods does Simon Motors accept?',
    answer: 'Simon Motors accepts various payment methods including cash, credit cards, and debit cards. We strive to make the payment process as convenient as possible for our customers.'
  },
];

export default FAQ;
