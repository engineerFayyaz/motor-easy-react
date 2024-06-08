import { useEffect, useState } from "react"
import Footer from "../../Components/Footer"
import MainHeader from "../../Components/MainHeader"
import TopHeader from "../../Components/TopHeader"
import "./bookservices.css"
import { Modal } from "react-bootstrap"
import { Link } from "react-router-dom"
export const BookServices = () => {

    const [show, setShow] = useState(false);

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
          <h5>Book a Service- Motor Easy</h5>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container">
      {/* MultiStep Form */}
      <div>
        <h1 className="text-center multi-step-form-container-title mt-md-5">
          Book a Service Now
        </h1>
        <div id="multi-step-form-container">
          {/* Form Steps / Progress Bar */}
          <ul className="form-stepper form-stepper-horizontal text-center mx-auto pl-0">
            {/* Step 1 */}
            <li
              className="form-stepper-active text-center form-stepper-list"
              step={1}
            >
              <a className="mx-2">
                <span className="form-stepper-circle">
                  <span>1</span>
                </span>
                <div className="label">Vehicle</div>
              </a>
            </li>
            {/* Step 2 */}
            <li
              className="form-stepper-unfinished text-center form-stepper-list"
              step={2}
            >
              <a className="mx-2">
                <span className="form-stepper-circle text-muted">
                  <span>2</span>
                </span>
                <div className="label text-muted">Services</div>
              </a>
            </li>
            {/* Step 3 */}
            <li
              className="form-stepper-unfinished text-center form-stepper-list"
              step={3}
            >
              <a className="mx-2">
                <span className="form-stepper-circle text-muted">
                  <span>3</span>
                </span>
                <div className="label text-muted">Appointment</div>
              </a>
            </li>
            {/* Step 4 */}
            <li
              className="form-stepper-unfinished text-center form-stepper-list"
              step={4}
            >
              <a className="mx-2">
                <span className="form-stepper-circle text-muted">
                  <span>4</span>
                </span>
                <div className="label text-muted">Contact &amp; Book</div>
              </a>
            </li>
          </ul>
          {/* Step Wise Form Content */}
          <form
            id="userAccountSetupForm"
            name="userAccountSetupForm"
            encType="multipart/form-data"
            className="userAccountSetupForm"
          >
            {/* Step 1 Content */}
            <section id="step-1" className="form-step">
              <h2 className="font-normal mb-0">Select Your Vehicle</h2>
              <p className="des">
                Enter your registration number to quickly identify your car
              </p>
              {/* Step 1 input fields */}
              <div className="mt-5 select-vehicle">
                <div className="input-group mt-3 mb-3  w-50">
                  <div className="row w-100 gap-2 gap-md-0">
                    <div className="col-md-3">
                      <select className="form-select">
                        <option>NSW</option>
                        <option>ACT</option>
                        <option>NT</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search"
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
                    <Link onClick={handleShow} >
                      or find your car by make, model and year
                    </Link>{" "}
                    <i className="fa-solid fa-arrow-right" />
                  </b>
                </div>
              </div>
              <div className="mt-3"></div>
            </section>
            {/* Step 2 Content, default hidden on page load. */}
            <section id="step-2" className="form-step d-none">
              <h2 className="font-normal">Services</h2>
              <p className="des">Select which type of service you want?</p>
              {/* Step 2 input fields */}
              <div className="mt-5">
                <label htmlFor="">
                  <strong>Select here</strong>
                </label>
                <div className="input-group mt-3 mb-3 w-100 w-md-50">
                  <select className="form-select">
                    <option>Used Car warrenty</option>
                    <option>Vehicle Inspection</option>
                    <option>Vehicle Service</option>
                    <option>Road Slide</option>
                    <option>Battery Replacement</option>
                    <option>Windscreen Repair</option>
                  </select>
                  {/* <div class="mt-5">
                                      <b><a href="" data-bs-toggle="modal" data-bs-target="#myModal" >or find your car by make, model and year</a> <i class="fa-solid fa-arrow-right"></i></b>
                                  </div> */}
                </div>
              </div>
              <div className="mt-5">
                <button
                  className="btn btn-danger btn-navigate-form-step"
                  type="button"
                  step_number={1}
                >
                  Prev
                </button>
                <button
                  className="btn btn-primary btn-navigate-form-step"
                  type="button"
                  step_number={3}
                >
                  Next
                </button>
              </div>
            </section>
            {/* Step 3 Content, default hidden on page load. */}
            <section id="step-3" className="form-step d-none">
              <h2 className="font-normal">Book an Appointment</h2>
              {/* Step 3 input fields */}
              <div className="mt-5">
                <div className="container p-0">
                  <div className="row mb-3">
                    <div className="col-md-6 pe-md-3">
                      <label htmlFor="fullName" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 ps-md-3 mt-1">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6 pe-md-3">
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 ps-md-3 mt-1">
                      <label htmlFor="appointmentDate" className="form-label">
                        Appointment Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="appointmentDate"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6 pe-md-3">
                      <label htmlFor="appointmentTime" className="form-label">
                        Appointment Time
                      </label>
                      <input
                        type="time"
                        className="form-control"
                        id="appointmentTime"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 ps-md-3 mt-1">
                      <label htmlFor="service" className="form-label">
                        Booked Service
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="bookedService"
                        defaultValue="Vehicle Service"
                        readOnly=""
                        disabled=""
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="notes" className="form-label">
                      Additional Notes
                    </label>
                    <textarea
                      className="form-control"
                      id="notes"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                  <div className="mb-3 text-center">
                    <button
                      type="submit"
                      className="btn btn-outline-primary button w-100 w-md-50  "
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <button
                  className="btn btn-danger btn-navigate-form-step"
                  type="button"
                  step_number={2}
                >
                  Prev
                </button>
                <button
                  className="btn btn-primary btn-navigate-form-step"
                  type="button"
                  step_number={4}
                >
                  Next
                </button>
              </div>
            </section>
          </form>
          {/* Step 4 Content, default hidden on page load. */}
          <section id="step-4" className="form-step d-none bg-light">
            <h2 className="font-normal">Contact &amp; Book</h2>
            {/* Step 3 input fields */}
            <div className="mt-5">
              <div className="mt-5">
                <div className="container p-0">
                  <form id="appointment-form">
                    <div className="row mb-3">
                      <div className="col-md-6 pe-md-3">
                        <label htmlFor="fullName" className="form-label">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          required=""
                        />
                      </div>
                      <div className="col-md-6 ps-md-3 mt-1">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="notes" className="form-label">
                        Additional Notes
                      </label>
                      <textarea
                        className="form-control"
                        id="notes"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <button
                className="btn btn-danger button btn-navigate-form-step"
                type="button"
                step_number={3}
              >
                Prev
              </button>
              <button
                className="btn btn-success button submit-btn"
                type="submit"
              >
                Save
              </button>
            </div>
          </section>
        </div>
      </div>
      {/* /.MultiStep Form */}
    </div>
  </section>
</main>


        <Footer />

        <>
    <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
        <Modal.Title>PLEASE ENTER YOUR CAR DETAILS</Modal.Title>
        </Modal.Header>
    <Modal.Body >
    <form id="vehicle-search-form">
  <div className="row mb-3 justify-content-between">
    <div className="col-md-7">
      <label htmlFor="registrationNumber" className="form-label">
        Registration Number
      </label>
      <input
        type="text"
        className="form-control"
        id="registrationNumber"
        maxLength={15}
        required=""
      />
    </div>
    <div className="col-md-4">
      <label htmlFor="state" className="form-label">
        State
      </label>
      <select className="form-select" id="state" required="">
        <option selected="">Choose...</option>
        <option value="NSW">NSW</option>
        <option value="VIC">VIC</option>
        <option value="QLD">QLD</option>
        {/* Add other states as needed */}
      </select>
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="make" className="form-label">
      Make
    </label>
    <select className="form-select" id="make" required="">
      <option selected="">Choose...</option>
      <option value="Toyota">Toyota</option>
      <option value="Ford">Ford</option>
      <option value="Honda">Honda</option>
      {/* Add other makes as needed */}
    </select>
  </div>
  <div className="mb-3">
    <label htmlFor="model" className="form-label">
      Model
    </label>
    <select className="form-select" id="model" required="">
      <option selected="">Choose...</option>
      <option value="Camry">Camry</option>
      <option value="Accord">Accord</option>
      <option value="Civic">Civic</option>
      {/* Add other models as needed */}
    </select>
  </div>
  <div className="mb-3">
    <label htmlFor="variant" className="form-label">
      Variant
    </label>
    <select className="form-select" id="variant">
      <option selected="">Choose...</option>
      <option value="Base">Base</option>
      <option value="Sport">Sport</option>
      <option value="Luxury">Luxury</option>
      {/* Add other variants as needed */}
    </select>
  </div>
  <div className="mb-3">
    <label htmlFor="year" className="form-label">
      Year
    </label>
    <select className="form-select" id="year">
      <option selected="">Choose...</option>
      <option value={2023}>2023</option>
      <option value={2022}>2022</option>
      <option value={2021}>2021</option>
      {/* Add other years as needed */}
    </select>
  </div>
</form>
    </Modal.Body>
    <Modal.Footer >
    <>
  <button type="button" className="btn btn-danger" onClick={handleClose}>
    Search with Rouge
  </button>
  <button type="submit" className="btn btn-primary">
    Search
  </button>
</>

    </Modal.Footer>
    </Modal>
</>

        </>
    )
}