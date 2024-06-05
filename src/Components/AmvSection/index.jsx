import React, { useState } from "react";
import service3 from "../../assets/images/car_service_3.png";
import service2 from "../../assets/images/car_service_2.png";
import service1 from "../../assets/images/car_service_1.png";

function AmvSection() {
  const [activeSection, setActiveSection] = useState("about");

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6" id="image_section">
          <img
            id="about_image"
            src={service3}
            alt=""
            className={`toggle-image ${activeSection === "about" ? "" : "hidden"}`}
          />
          <img
            id="mission_image"
            src={service2}
            alt=""
            className={`toggle-image ${activeSection === "mission" ? "" : "hidden"}`}
          />
          <img
            id="vision_image"
            src={service1}
            alt=""
            className={`toggle-image ${activeSection === "vision" ? "" : "hidden"}`}
          />
        </div>
        <div className="col-lg-6">
          <div className="fourth_portion d-flex flex-row mt-4 justify-content-between ms-5">
            <button
              className={`toggle-btn ${activeSection === "about" ? "button-active" : ""}`}
              onClick={() => handleButtonClick("about")}
            >
              About Us
              <i className="fa-solid fa-square-arrow-up-right" />
            </button>
            <button
              className={`toggle-btn ${activeSection === "mission" ? "button-active" : ""}`}
              onClick={() => handleButtonClick("mission")}
            >
              Mission
              <i className="fa-solid fa-square-arrow-up-right" />
            </button>
            <button
              className={`toggle-btn ${activeSection === "vision" ? "button-active" : ""}`}
              onClick={() => handleButtonClick("vision")}
            >
              Vision
              <i className="fa-solid fa-square-arrow-up-right" />
            </button>
          </div>
          {/* ----------- about us ---------*/}
          <div className={`section ${activeSection === "about" ? "" : "hidden"}`} id="about_us_section">
            <div className="row mx-auto">
              <div className="col-md-11 mt-5 ms-5">
                <p>
                  Contact us for more details and learn about our comprehensive
                  insurance solutions, customer service, and commitment to
                  excellence.
                </p>
              </div>
              <div className="col-md-6 mx-auto">
                <div className="d-flex flex-row set_ids">
                  <input type="checkbox" />
                  <p>Best Insurance Agency</p>
                </div>
                <div className="d-flex flex-row set_ids">
                  <input type="checkbox" />
                  <p>Trusted &amp; Insurance</p>
                </div>
                <div className="d-flex flex-row set_ids">
                  <input type="checkbox" />
                  <p>Dedicated &amp; Security</p>
                </div>
              </div>
              <div className="col-md-6 mx-auto">
                <div className="d-flex flex-row set_ids">
                  <input type="checkbox" />
                  <p>Board Composition</p>
                </div>
                <div className="d-flex flex-row set_ids">
                  <input type="checkbox" />
                  <p>Key Managerial Persons</p>
                </div>
                <div className="d-flex flex-row set_ids">
                  <input type="checkbox" />
                  <p>Board Committees</p>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------mission ----------- */}
          <div className={`section ${activeSection === "mission" ? "" : "hidden"}`} id="mission_section">
            <div className="row mx-auto">
              <div className="col-md-11 ms-5 mt-5">
                <p>
                  Our mission is to provide top-notch insurance services, ensuring
                  peace of mind and security for all our clients.
                </p>
              </div>
              <div className="col-md-6 mx-auto">
                <div className="d-flex flex-row set_ids">
                  <input type="checkbox" />
                  <p>Best Insurance Agency</p>
                </div>
                <div className="d-flex flex-row set_ids">
                  <input type="checkbox" />
                  <p>Trusted &amp; Insurance</p>
                </div>
                <div className="d-flex flex-row set_ids">
                  <input type="checkbox" />
                  <p>Dedicated &amp; Security</p>
                </div>
              </div>
              <div className="col-md-6 mx-auto">
                <div className="d-flex flex-row set_ids">
                  <input type="checkbox" />
                  <p>Board Composition</p>
                </div>
                <div className="d-flex flex-row set_ids">
                  <input type="checkbox" />
                  <p>Key Managerial Persons</p>
                </div>
                <div className="d-flex flex-row set_ids">
                  <input type="checkbox" />
                  <p>Board Committees</p>
                </div>
              </div>
            </div>
          </div>
          {/* -------------- Vision -------------- */}
          <div className={`section ${activeSection === "vision" ? "" : "hidden"}`} id="vision_section">
            <div className="row mx-auto">
              <div className="col-md-11 ms-5 mt-5">
                <p>
                  Our vision is to be the leading insurance provider, recognized
                  for our innovation, reliability, and customer-centric approach.
                </p>
              </div>
              <div className="col-md-6 mx-auto">
                <div className="d-flex flex-row set_ids">
                  <input type="checkbox" />
                  <p>Best Insurance Agency</p>
                </div>
                <div className="d-flex flex-row set_ids">
                  <input type="checkbox" />
                  <p>Trusted &amp; Insurance</p>
                </div>
                <div className="d-flex flex-row set_ids">
                  <input type="checkbox" />
                  <p>Dedicated &amp; Security</p>
                </div>
              </div>
              <div className="col-md-6 mx-auto">
                <div className="d-flex flex-row set_ids">
                  <input type="checkbox" />
                  <p>Board Composition</p>
                </div>
                <div className="d-flex flex-row set_ids">
                  <input type="checkbox" />
                  <p>Key Managerial Persons</p>
                </div>
                <div className="d-flex flex-row set_ids">
                  <input type="checkbox" />
                  <p>Board Committees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmvSection;
