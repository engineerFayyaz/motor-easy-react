import { useEffect, useState } from "react";
import Footer from "../../Components/Footer";
import MainHeader from "../../Components/MainHeader";
import TopHeader from "../../Components/TopHeader";
import "./bookservices.css";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

export const BookServices = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    vehicleDetails: {
      registrationNumber: "",
      state: "",
      make: "",
      model: "",
      variant: "",
      year: "",
    },
    services: {
      selectedService: "",
    },
    appointment: {
      Title:"",
      FirstName: "",
      SurName:"",
      PhoneNumber:"",
      email: "",
      phone: "",
      appointmentDate: "",
      appointmentTime: "",
      notes: "",
    },
    contact: {
      fullName: "",
      email: "",
      notes: "",
    },
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "appointments"), formData);
      console.log("Document written with ID: ", docRef.id);
      // You can add further logic here, like showing a success message or redirecting the user
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleInputChange = (e, step) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [step]: {
        ...prevFormData[step],
        [id]: value,
      },
    }));
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    const navigateToFormStep = (stepNumber) => {
      document.querySelectorAll(".form-step").forEach((formStepElement) => {
        formStepElement.classList.add("d-none");
      });
      document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
        formStepHeader.classList.add("form-stepper-unfinished");
        formStepHeader.classList.remove("form-stepper-active", "form-stepper-completed");
      });
      document.querySelector("#step-" + stepNumber).classList.remove("d-none");
      const formStepCircle = document.querySelector('li[step="' + stepNumber + '"]');
      formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-completed");
      formStepCircle.classList.add("form-stepper-active");
      for (let index = 0; index < stepNumber; index++) {
        const formStepCircle = document.querySelector('li[step="' + index + '"]');
        if (formStepCircle) {
          formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-active");
          formStepCircle.classList.add("form-stepper-completed");
        }
      }
    };

    document.querySelectorAll(".btn-navigate-form-step").forEach((formNavigationBtn) => {
      formNavigationBtn.addEventListener("click", () => {
        const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));
        navigateToFormStep(stepNumber);
      });
    });
  }, []);

  return (
    <>
      <TopHeader />
      <MainHeader />
      <main>
        <section>
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-lg-12 about_us_bg_image d-flex justify-content-center align-items-center flex-column">
                <h5>Book a Service - Motor Easy</h5>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div>
              <h1 className="text-center multi-step-form-container-title mt-md-5">
                Book a Service Now
              </h1>
              <div id="multi-step-form-container">
                <ul className="form-stepper form-stepper-horizontal text-center mx-auto pl-0">
                  <li className="form-stepper-active text-center form-stepper-list" step={1}>
                    <a className="mx-2">
                      <span className="form-stepper-circle">
                        <span>1</span>
                      </span>
                      <div className="label">Vehicle</div>
                    </a>
                  </li>
                  <li className="form-stepper-unfinished text-center form-stepper-list" step={2}>
                    <a className="mx-2">
                      <span className="form-stepper-circle text-muted">
                        <span>2</span>
                      </span>
                      <div className="label text-muted">Services</div>
                    </a>
                  </li>
                  <li className="form-stepper-unfinished text-center form-stepper-list" step={3}>
                    <a className="mx-2">
                      <span className="form-stepper-circle text-muted">
                        <span>3</span>
                      </span>
                      <div className="label text-muted">Appointment</div>
                    </a>
                  </li>
                  <li className="form-stepper-unfinished text-center form-stepper-list" step={4}>
                    <a className="mx-2">
                      <span className="form-stepper-circle text-muted">
                        <span>4</span>
                      </span>
                      <div className="label text-muted">Contact & Book</div>
                    </a>
                  </li>
                </ul>
                <form
                  id="userAccountSetupForm"
                  name="userAccountSetupForm"
                  encType="multipart/form-data"
                  className="userAccountSetupForm"
                  onSubmit={handleFormSubmit}
                >
                  <section id="step-1" className="form-step">
                    <h2 className="font-normal mb-0">Select Your Vehicle</h2>
                    <p className="des">Enter your registration number to quickly identify your car</p>
                    <div className="mt-5 select-vehicle">
                      <div className="input-group mt-3 mb-3  w-50">
                        <div className="row w-100 gap-2 gap-md-0">
                          <div className="col-md-3">
                            <select
                              className="form-select"
                              id="state"
                              value={formData.vehicleDetails.state}
                              onChange={(e) => handleInputChange(e, "vehicleDetails")}
                            >
                              <option value="NSW">NSW</option>
                              <option value="ACT">ACT</option>
                              <option value="NT">NT</option>
                              <option value="VIC">VIC</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <input
                              type="search"
                              className="form-control"
                              id="registrationNumber"
                              placeholder="Search"
                              value={formData.vehicleDetails.registrationNumber}
                              onChange={(e) => handleInputChange(e, "vehicleDetails")}
                            />
                          </div>
                          <div className="col-md-3">
                            <button
                              className="btn rounded-5 btn-navigate-form-step"
                              type="button"
                              step_number={2}
                            >
                              Find My Car
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5">
                        <b>
                          <Link onClick={handleShow}>
                            or find your car by make, model and year
                          </Link>{" "}
                          <i className="fa-solid fa-arrow-right" />
                        </b>
                      </div>
                    </div>
                    <div className="mt-3"></div>
                  </section>
                  <section id="step-2" className="form-step d-none">
                    <h2 className="font-normal mb-0">Choose Your Service</h2>
                    <p className="des">
                      Whether it’s time for your rego check or you just need an urgent service,
                      we can help.
                    </p>
                    <div className="mt-3 choose-service">
                      <div className="input-group">
                        <div className="row w-100 mt-3">
                          <div className="col-md-3">
                            <select
                              className="form-select"
                              id="selectedService"
                              value={formData.services.selectedService}
                              onChange={(e) => handleInputChange(e, "services")}
                            >
                              <option value="car warranty">car warranty</option>
                              <option value="GAP Insurance">GAP Insurance</option>
                              <option value="BreakDown cover">BreakDown cover</option>
                              <option value="Alloy Wheel Insurance">Alloy Wheel Insurance</option>
                              <option value="tyre Insurance">tyre Insurance</option>
                              <option value="Cosmetic Repair Insurance">Cosmetic Repair Insurance</option>
                              <option value="Car service">Car service</option>
                              <option value="MOT">MOT</option>
                              <option value="Car Repair">Car Repair</option>
                              <option value="Tyres">Tyres</option>
                              <option value="Car Insurance">Car Insurance</option>
                              <option value="Battery Cover">Battery Cover</option>
                            </select>
                          </div>
                          <div className="col-md-3">
                            <button
                              className="btn rounded-5 btn-navigate-form-step"
                              type="button"
                              step_number={3}
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section id="step-3" className="form-step d-none">
                    <h2 className="font-normal mb-0">Book Your Appointment</h2>
                    <p className="des">Select your preferred appointment time</p>
                    <div className="mt-3 appointment">
                      <div className="row">
                      <div className="col-md-4">
                          <input
                            type="text"
                            className="form-control"
                            id="Title"
                            placeholder="Title"
                            value={formData.appointment.Title}
                            onChange={(e) => handleInputChange(e, "appointment")}
                          />
                        </div>
                        <div className="col-md-4">
                          <input
                            type="text"
                            className="form-control"
                            id="FirstName"
                            placeholder="First Name"
                            value={formData.appointment.FirstName}
                            onChange={(e) => handleInputChange(e, "appointment")}
                          />
                        </div>
                        <div className="col-md-4">
                          <input
                            type="text"
                            className="form-control"
                            id="SurName"
                            placeholder="SurName"
                            value={formData.appointment.SurName}
                            onChange={(e) => handleInputChange(e, "appointment")}
                          />
                        </div>
                        <div className="col-md-4">
                          <input
                            type="text"
                            className="form-control"
                            id="PhoneNumber"
                            placeholder="PhoneNumber"
                            value={formData.appointment.PhoneNumber}
                            onChange={(e) => handleInputChange(e, "appointment")}
                          />
                        </div>
                        <div className="col-md-4">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            value={formData.appointment.email}
                            onChange={(e) => handleInputChange(e, "appointment")}
                          />
                        </div>
                       </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <input
                            type="date"
                            className="form-control"
                            id="appointmentDate"
                            value={formData.appointment.appointmentDate}
                            onChange={(e) => handleInputChange(e, "appointment")}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="time"
                            className="form-control"
                            id="appointmentTime"
                            value={formData.appointment.appointmentTime}
                            onChange={(e) => handleInputChange(e, "appointment")}
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-12">
                          <textarea
                            className="form-control"
                            id="notes"
                            placeholder="Tell us about your OwnerShip"
                            value={formData.appointment.notes}
                            onChange={(e) => handleInputChange(e, "appointment")}
                          ></textarea>
                        </div>
                      </div>
                      <div className="mt-3">
                        <button
                          className="btn rounded-5 btn-navigate-form-step"
                          type="button"
                          step_number={4}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </section>
                  <section id="step-4" className="form-step d-none">
                    <h2 className="font-normal mb-0">Contact & Book</h2>
                    <p className="des">Please confirm your details and proceed with booking.</p>
                    <div className="mt-3 contact-book">
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            placeholder="Full Name"
                            value={formData.contact.fullName}
                            onChange={(e) => handleInputChange(e, "contact")}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            value={formData.contact.email}
                            onChange={(e) => handleInputChange(e, "contact")}
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-12">
                          <textarea
                            className="form-control"
                            id="notes"
                            placeholder="Additional Notes"
                            value={formData.contact.notes}
                            onChange={(e) => handleInputChange(e, "contact")}
                          ></textarea>
                        </div>
                      </div>
                      <div className="mt-3">
                        <button className="btn rounded-5" type="submit">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </section>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Your Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label>Make</label>
            <input
              type="text"
              className="form-control"
              id="make"
              value={formData.vehicleDetails.make}
              onChange={(e) => handleInputChange(e, "vehicleDetails")}
            />
          </div>
          <div className="form-group">
            <label>Model</label>
            <input
              type="text"
              className="form-control"
              id="model"
              value={formData.vehicleDetails.model}
              onChange={(e) => handleInputChange(e, "vehicleDetails")}
            />
          </div>
          <div className="form-group">
            <label>Variant</label>
            <input
              type="text"
              className="form-control"
              id="variant"
              value={formData.vehicleDetails.variant}
              onChange={(e) => handleInputChange(e, "vehicleDetails")}
            />
          </div>
          <div className="form-group">
            <label>Year</label>
            <input
              type="text"
              className="form-control"
              id="year"
              value={formData.vehicleDetails.year}
              onChange={(e) => handleInputChange(e, "vehicleDetails")}
            />
          </div>
          <button className="btn btn-primary mt-3" onClick={handleClose}>
            Save
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};
