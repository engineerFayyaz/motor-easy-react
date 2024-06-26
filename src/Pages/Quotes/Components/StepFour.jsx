import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
// import "../script.js";
const StepFour = () => {
  return (
    <div className="container g-0 mt-4">
      <div className="row ">
        {/* first row  */}
        <div className="d-flex Optional_Additions justify-content-between flex-row">
          <h3>
            4: My Optional Additions
          </h3>
          <p>
            <span className="text-danger">*</span>Mandatory field
          </p>
        </div>
        {/* second row */}
        <div className="second_row">
          <h5>
            
              Save money with our optional additions! Why not spread the cost of
              your MOT and services totally interest-free?
            
          </h5>
        </div>
        {/* third row */}
        <div className="row id_4_third_row mt-3">
          <div className="col-md-6">
            <h5 style={{ color: "#0fa582" }}>
               Due on 30/1/2024 – book today to reserve a space!
            </h5>
          </div>
          <div className="col-md-6 text-end">
            <button className="btn btn-primary">Add to basket</button>
            <button
              type="button"
              className="btn btn-light"
              data-toggle="collapse"
              data-target="#demo"
            >
              Learn More <i className="fa-solid fa-caret-down" />
            </button>
            <p>
              * price might be adjusted based on your workshop selection
            </p>
          </div>
          {/* collapse section */}
          <div className="row">
            <div className="col-lg-12">
              <div id="demo" className="collapse">
                <div className="row">
                  <div className="col-lg-8 mt-5">
                    <p>
                      Our MOT's start from just £39.99. Workshops are allowed by
                      the DVSA, who govern MOT tests, to charge you up to £54.85
                      for your annual MOT test. So that's a saving of up to
                      £14.85!
                    </p>
                    <div className="d-flex flex-row icon_sections">
                      <i className="fas fa-key" />
                      <h4>
                        
                          Select a top performing workshop close to your work or
                          home
                        
                      </h4>
                    </div>
                    <div className="d-flex flex-row mt-5 icon_sections">
                      <i className="fa-solid fa-thumbs-up" />
                      <h4>
                        Check your MOT result is fair
                      </h4>
                    </div>
                    ٖ
                    <div className="d-flex flex-row mt-5 icon_sections">
                      <i className="fa-solid fa-comment-dots" />
                      <h4>
                        
                          Negotiate labour times and parts prices on any repairs
                          required
                        
                      </h4>
                    </div>
                    ٖ
                    <div className="d-flex flex-row mt-2 icon_sections">
                      <h5>
                        All work is guaranteed for 12 months. If you have a car
                        warranty we’ll seek authority for repairs to be covered.
                        We deal with any workshop problems, so you don't have
                        to.
                      </h5>
                    </div>
                    ٖ
                    <div>
                      <h4>
                        What's included:
                      </h4>
                    </div>
                    <div className="d-flex flex-row mt-5 icon_sections">
                      <i className="fa-solid fa-car-side" />
                      <h4>
                        Official DVSA MOT test
                      </h4>
                    </div>
                    ٖ
                    <div className="d-flex flex-row mt-3 icon_sections">
                      <i className="fa-solid fa-rotate-right" />
                      <h4>
                        Free retest if required
                      </h4>
                    </div>
                    ٖ
                  </div>
                  <div className="col-lg-3 text-end mt-5">
                    <button
                      type="button"
                      className="btn btn-light p-3"
                      data-toggle="#"
                    >
                      MOT Doucment
                    </button>
                    <br />
                    <button
                      type="button"
                      className="btn btn-light mt-4 p-3"
                      data-toggle="#"
                    >
                      Which garage?
                    </button>
                  </div>
                </div>
                <hr style={{ border: "1px solid black" }} />
                <div className="col-lg-12">
                  <h4>
                    Customise Your Booking
                  </h4>
                  <div className="row d-flex flex-column">
                    <div className="col-lg-4 d-flex flex-column">
                      <div className="d-flex mt-2 justify-content-between">
                        <label htmlFor="#">Booking Date</label>
                        {/* <i class="fa-regular fa-circle-question mt-5"></i> */}
                      </div>
                      <input className="mb-5" type="date" />
                    </div>
                    <h5 className="mt-1 mb-3">
                      The further away your MOT is, the more months you can
                      spread payments over.
                    </h5>
                  </div>
                </div>
                <hr style={{ border: "1px solid black" }} />
                <div className="col-lg-8 d-flex flex-row icons_set_payment">
                  <i className="fa-solid fa-calendar-days mt-4" />
                  <div className="">
                    <h5>
                      Payment options
                    </h5>
                    <h6>
                      Reserve booking in at least two months in advance to
                      unlock option to pay in instalments.
                    </h6>
                  </div>
                </div>
                <div className="col-lg-6 mt-5">
                  <h6 className="mb-4">
                    You can change all the details nearer the time, but to
                    reserve the best workshop in advance for you, it helps if
                    you set an initial date now and confirm the address you want
                    the workshop to be near.
                  </h6>
                  <p className="mt-4">
                    Enter Postcode You Need The Workshop Close To
                  </p>
                  <div className="looup_input">
                    <input type="text" placeholder="Enter Your Postcode " />
                    <button>Lookup</button>
                  </div>
                  <div className="mt-5">
                    <p>
                      <strong>Optional</strong> - Please add any comments or
                      notes that you like to make us aware of.
                    </p>
                    <div className="mb-2">
                      <label htmlFor="" className="form-label" />
                      <textarea
                        className="form-control"
                        name=""
                        id=""
                        rows={10}
                        defaultValue={""}
                      />
                    </div>
                    <p>
                      <span style={{ color: "red" }}>*</span> price might be
                      adjusted based on your workshop selection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============================= collapse Second row ========================== */}
        <div className="row collapse_sec_row">
          <div className="row collaspe_button">
            <div className="col-lg-3">
              <button id="btn1" className="active">
                <p>
                  
                    Local Recovery <br />
                    £36.30
                  
                </p>
              </button>
            </div>
            <div className="col-lg-3">
              <button id="btn2">
                <p>
                  
                    Nationwide Recovery <br />
                    £54.30
                  
                </p>
              </button>
            </div>
            <div className="col-lg-3">
              <button id="btn3">
                <p>
                  
                    Nationwide Recovery and Home Assist
                    <br />
                    £12.30
                  
                </p>
              </button>
            </div>
            <div className="col-lg-3">
              <button id="btn4">
                <p>
                  
                    Europewide Recovery and Home Assist
                    <br />
                    £140.30
                  
                </p>
              </button>
            </div>
          </div>
          <div className="row collapse_call_ids px-0">
            {/* ==================== first section ==========================  */}
            <div
              id="content11"
              className="content"
              style={{ display: "block" }}
            >
              <div className="row">
                <div className="col-md-6">
                  <h5 style={{ color: "#0fa582" }}>
                    
                      Relax with 24/7 roadside assistance – for help when you
                      need it
                    
                  </h5>
                </div>
                <div className="col-md-6 text-end">
                  <button className="btn btn-primary">Add to basket</button>
                  <button
                    type="button"
                    className="btn btn-light"
                    data-toggle="collapse"
                    data-target="#collapse"
                  >
                    Learn More <i className="fa-solid fa-caret-down" />
                  </button>
                  {/* <h5>* price might be adjusted based on your workshop
                                                                    selection</h5> */}
                </div>
              </div>
              {/* second_section */}
              <div className="row">
                <div className="col-lg-12 collapse" id="collapse">
                  <div>
                    <p>
                      
                        Get back on your way quickly, with 80% of failures
                        repaired at the roadside.
                      
                    </p>
                    <p>
                      Our nationwide and home assist level of breakdown cover,
                      protects your vehicle for faults and recovery anywhere in
                      the UK.
                    </p>
                  </div>
                  <div className="text-end btn_combination">
                    <button>Breakdown cover doucment </button>
                    <button>
                      Insurance Product Information Doucment (IPID){" "}
                    </button>
                  </div>
                  <hr style={{ borderBottom: "1px solid black" }} />
                  <div className="row thrid_section_of_icon">
                    <div className="col-md-1">
                      <i className="fa-regular fa-clock mt-3" />
                    </div>
                    <div className="col-md-6">
                      <h4>
                        Duration
                      </h4>
                      <h4>How long are you looking to keep the car?</h4>
                    </div>
                    <div className="col-md-">
                      <div className="timeline-container">
                        <div className="timeline">
                          <label className="timeline-item">
                            <div className="circle">
                              <input
                                type="checkbox"
                                name="duration"
                                defaultValue={12}
                              />
                            </div>
                            <div className="label">12 months</div>
                          </label>
                          <label className="timeline-item">
                            <div className="circle">
                              <input
                                type="checkbox"
                                name="duration"
                                defaultValue={24}
                              />
                            </div>
                            <div className="label">24 months</div>
                          </label>
                          <label className="timeline-item">
                            <div className="circle">
                              <input
                                type="checkbox"
                                name="duration"
                                defaultValue={36}
                                defaultChecked=""
                              />
                            </div>
                            <div className="label">36 months</div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr style={{ borderBottom: "1px solid black" }} />
                  <div className="row  thrid_section_of_icon">
                    <div className="col-md-1">
                      <i className="fa-regular fa-calendar-days" />
                    </div>
                    <div className="col-md-6">
                      <h4>
                        Start Date
                      </h4>
                      <h4>
                        Choose the date when you would like your breakdown cover
                        to start.
                      </h4>
                    </div>
                    <div className="col-md-5">
                      <input type="date" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ======================= Second section =================== */}
            <div id="content12" className="content">
              <div className="row">
                <div className="col-md-6">
                  <h5 style={{ color: "#0fa582" }}>
                    
                      Relax with 24/7 roadside assistance – for help when you
                      need it with nationwide recovery
                    
                  </h5>
                </div>
                <div className="col-md-6 text-end">
                  <button className="btn btn-primary">Add to basket</button>
                  <button
                    type="button"
                    className="btn btn-light"
                    data-toggle="collapse"
                    data-target="#collapse_1"
                  >
                    Learn More <i className="fa-solid fa-caret-down" />
                  </button>
                  {/* <h5>* price might be adjusted based on your workshop
                                                                    selection</h5> */}
                </div>
              </div>
              {/* second_section */}
              <div className="row">
                <div className="col-lg-12 collapse" id="collapse_1">
                  <div>
                    <p>
                      
                        Get back on your way quickly, with 80% of failures
                        repaired at the roadside.
                      
                    </p>
                    <p>
                      Our nationwide and home assist level of breakdown cover,
                      protects your vehicle for faults and recovery anywhere in
                      the UK.
                    </p>
                  </div>
                  <div className="text-end btn_combination">
                    <button>Breakdown cover doucment </button>
                    <button>
                      Insurance Product Information Doucment (IPID){" "}
                    </button>
                  </div>
                  <hr style={{ borderBottom: "1px solid black" }} />
                  <div className="row thrid_section_of_icon">
                    <div className="col-md-1">
                      <i className="fa-regular fa-clock mt-3" />
                    </div>
                    <div className="col-md-6">
                      <h4>
                        Duration
                      </h4>
                      <h4>How long are you looking to keep the car?</h4>
                    </div>
                    <div className="col-md-5">
                      <div className="timeline-container">
                        <div className="timeline">
                          <label className="timeline-item">
                            <div className="circle">
                              <input
                                type="checkbox"
                                name="duration"
                                defaultValue={12}
                              />
                            </div>
                            <div className="label">12 months</div>
                          </label>
                          <label className="timeline-item">
                            <div className="circle">
                              <input
                                type="checkbox"
                                name="duration"
                                defaultValue={24}
                              />
                            </div>
                            <div className="label">24 months</div>
                          </label>
                          <label className="timeline-item">
                            <div className="circle">
                              <input
                                type="checkbox"
                                name="duration"
                                defaultValue={36}
                                defaultChecked=""
                              />
                            </div>
                            <div className="label">36 months</div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr style={{ borderBottom: "1px solid black" }} />
                  <div className="row  thrid_section_of_icon">
                    <div className="col-md-1">
                      <i className="fa-regular fa-calendar-days" />
                    </div>
                    <div className="col-md-6">
                      <h4>
                        Start Date
                      </h4>
                      <h4>
                        Choose the date when you would like your breakdown cover
                        to start.
                      </h4>
                    </div>
                    <div className="col-md-5">
                      <input type="date" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ========================= third section ================== */}
            <div id="content13" className="content">
              <div className="row">
                <div className="col-md-6">
                  <h4 style={{ color: "#0fa582" }}>
                    
                      Relax with 24/7 roadside assistance – for help when you
                      need it with nationwide recovery and assistance at home
                    
                  </h4>
                </div>
                <div className="col-md-6 text-end">
                  <button className="btn btn-primary">Add to basket</button>
                  <button
                    type="button"
                    className="btn btn-light"
                    data-toggle="collapse"
                    data-target="#collapse_3"
                  >
                    Learn More <i className="fa-solid fa-caret-down" />
                  </button>
                  {/* <h5>* price might be adjusted based on your workshop
                                                                    selection</h5> */}
                </div>
              </div>
              {/* second_section */}
              <div className="row">
                <div className="col-lg-12 collapse" id="collapse_3">
                  <div>
                    <p>
                      
                        Get back on your way quickly, with 80% of failures
                        repaired at the roadside.
                      
                    </p>
                    <p>
                      Our nationwide and home assist level of breakdown cover,
                      protects your vehicle for faults and recovery anywhere in
                      the UK.
                    </p>
                  </div>
                  <div className="text-end btn_combination">
                    <button>Breakdown cover doucment </button>
                    <button>
                      Insurance Product Information Doucment (IPID){" "}
                    </button>
                  </div>
                  <hr style={{ borderBottom: "1px solid black" }} />
                  <div className="row thrid_section_of_icon">
                    <div className="col-md-1">
                      <i className="fa-regular fa-clock mt-3" />
                    </div>
                    <div className="col-md-6">
                      <h4>
                        Duration
                      </h4>
                      <h4>How long are you looking to keep the car?</h4>
                    </div>
                    <div className="col-md-5">
                      <div className="timeline-container">
                        <div className="timeline">
                          <label className="timeline-item">
                            <div className="circle">
                              <input
                                type="checkbox"
                                name="duration"
                                defaultValue={12}
                              />
                            </div>
                            <div className="label">12 months</div>
                          </label>
                          <label className="timeline-item">
                            <div className="circle">
                              <input
                                type="checkbox"
                                name="duration"
                                defaultValue={24}
                              />
                            </div>
                            <div className="label">24 months</div>
                          </label>
                          <label className="timeline-item">
                            <div className="circle">
                              <input
                                type="checkbox"
                                name="duration"
                                defaultValue={36}
                                defaultChecked=""
                              />
                            </div>
                            <div className="label">36 months</div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr style={{ borderBottom: "1px solid black" }} />
                  <div className="row  thrid_section_of_icon">
                    <div className="col-md-1">
                      <i className="fa-regular fa-calendar-days" />
                    </div>
                    <div className="col-md-6">
                      <h4>
                        Start Date
                      </h4>
                      <h4>
                        Choose the date when you would like your breakdown cover
                        to start.
                      </h4>
                    </div>
                    <div className="col-md-5">
                      <input type="date" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ======================== fourth secion ========================= */}
            <div id="content14" className="content">
              <div className="row">
                <div className="col-md-6">
                  <h4 style={{ color: "#0fa582" }}>
                    
                      Relax with 24/7 assistance – for help when you need it
                      with nationwide recovery and assistance at home &amp;
                      throughout Europe
                    
                  </h4>
                </div>
                <div className="col-md-5 text-end">
                  <button className="btn btn-primary">Add to basket</button>
                  <button
                    type="button"
                    className="btn btn-light"
                    data-toggle="collapse"
                    data-target="#collapse_4"
                  >
                    Learn More <i className="fa-solid fa-caret-down" />
                  </button>
                  {/* <h5>* price might be adjusted based on your workshop
                                                                    selection</h5> */}
                </div>
              </div>
              {/* second_section */}
              <div className="row">
                <div className="col-lg-12 collapse" id="collapse_4">
                  <div>
                    <p>
                      
                        Get back on your way quickly, with 80% of failures
                        repaired at the roadside.
                      
                    </p>
                    <p>
                      Our most comprehensive level of breakdown cover. Protects
                      your vehicle for faults and recovery across the UK and 45
                      European countries.
                    </p>
                  </div>
                  <div className="text-end btn_combination">
                    <button>Breakdown cover doucment </button>
                    <button>
                      Insurance Product Information Doucment (IPID){" "}
                    </button>
                  </div>
                  <hr style={{ borderBottom: "1px solid black" }} />
                  <div className="row thrid_section_of_icon">
                    <div className="col-md-1">
                      <i className="fa-regular fa-clock mt-3" />
                    </div>
                    <div className="col-md-6">
                      <h4>
                        Duration
                      </h4>
                      <h4>How long are you looking to keep the car?</h4>
                    </div>
                    <div className="col-md-5">
                      <div className="timeline-container">
                        <div className="timeline">
                          <label className="timeline-item">
                            <div className="circle">
                              <input
                                type="checkbox"
                                name="duration"
                                defaultValue={12}
                              />
                            </div>
                            <div className="label">12 months</div>
                          </label>
                          <label className="timeline-item">
                            <div className="circle">
                              <input
                                type="checkbox"
                                name="duration"
                                defaultValue={24}
                              />
                            </div>
                            <div className="label">24 months</div>
                          </label>
                          <label className="timeline-item">
                            <div className="circle">
                              <input
                                type="checkbox"
                                name="duration"
                                defaultValue={36}
                                defaultChecked=""
                              />
                            </div>
                            <div className="label">36 months</div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr style={{ borderBottom: "1px solid black" }} />
                  <div className="row  thrid_section_of_icon">
                    <div className="col-md-1">
                      <i className="fa-regular fa-calendar-days" />
                    </div>
                    <div className="col-md-6">
                      <h4>
                        Start Date
                      </h4>
                      <h4>
                        Choose the date when you would like your breakdown cover
                        to start.
                      </h4>
                    </div>
                    <div className="col-md-5">
                      <input type="date" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============================= last one row ========================== */}
        <div className="row last_one_portion">
          <div className="row">
            <div className="col-md-6">
              <h5 style={{ color: "#0fa582" }}>
                 Due on 30/1/2024 – book today to reserve a space!
              </h5>
            </div>
            <div className="col-md-6 text-end">
              <button className="btn btn-primary">Add to basket</button>
              <button
                type="button"
                className="btn btn-light"
                data-toggle="collapse"
                data-target="#collapse_5"
              >
                Learn More
                <i className="fa-solid fa-caret-down" />
              </button>
            </div>
            <div className="row">
              <div className="col-lg-12 collapse" id="collapse_5">
                <p>
                  Vehicle health checks are a critical aspect of maintaining the
                  longevity and efficiency of a vehicle. These checks involve a
                  thorough inspection of various components of the vehicle, such
                  as the engine, brakes, steering, suspension, and tires, to
                  ensure they are in good working order.
                </p>
                <h4 style={{ color: "#0fa582", marginTop: "20px !important" }}>
                  
                    Checks include a 20-point visual inspection of key working
                    components including
                  
                </h4>
                <div className="row">
                  <div className="col-md-8">
                    <div className="icon_text d-flex  flex-row">
                      <i className="fa-solid fa-check" />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <h4>
                        Brake discs, drums, pads/shoes, pipes, and calipers
                      </h4>
                    </div>
                    <div className="icon_text d-flex  flex-row">
                      <i className="fa-solid fa-check" />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <h4>Tyres</h4>
                    </div>
                    <div className="icon_text d-flex  flex-row">
                      <i className="fa-solid fa-check" />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <h4>Wheel cylinders</h4>
                    </div>
                    <div className="icon_text d-flex  flex-row">
                      <i className="fa-solid fa-check" />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <h4>Steering system fluids and condition</h4>
                    </div>
                    <div className="icon_text d-flex  flex-row">
                      <i className="fa-solid fa-check" />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <h4>Shock absorbers</h4>
                    </div>
                    <div className="icon_text d-flex  flex-row">
                      <i className="fa-solid fa-check" />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <h4>Cooling systems including fluids and hoses</h4>
                    </div>
                    <div className="icon_text d-flex  flex-row">
                      <i className="fa-solid fa-check" />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <h4>Battery and charging system</h4>
                    </div>
                    <div className="icon_text d-flex  flex-row">
                      <i className="fa-solid fa-check" />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <h4>Auxiliary belts</h4>
                    </div>
                    <div className="icon_text d-flex  flex-row">
                      <i className="fa-solid fa-check" />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <h4>Windscreen wipers and bottle</h4>
                    </div>
                    <div className="icon_text d-flex  flex-row">
                      <i className="fa-solid fa-check" />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <h4>Exhaust system and emissions</h4>
                    </div>
                    <div className="icon_text d-flex  flex-row">
                      <i className="fa-solid fa-check" />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <h4>External body condition</h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6  d-flex flex-column">
                    <h4
                      style={{ color: "#0fa582", marginTop: "20px !important" }}
                    >
                      Customise Your Booking
                    </h4>
                    <p>
                      Booking Date:
                    </p>
                    <input type="date" />
                    <p className="mt-5">
                      You can change all the details nearer the time, but to
                      reserve the best workshop in advance for you, it helps if
                      you set an initial date now and confirm the address you
                      want the workshop to be near.
                    </p>
                    <p>
                      Enter Postcode You Need The Workshop Close To
                    </p>
                    <div className="d-flex flex-row input_button">
                      <input type="text" />
                      <button>Look Up</button>
                    </div>
                  </div>
                </div>
                <hr style={{ color: "black", border: "1px solid black" }} />
                <div className="col-lg-6">
                  <p>
                    <strong>Optional</strong> - Please add any comments or notes
                    that you would like to make us aware of.
                  </p>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label" />
                    <textarea
                      className="form-control"
                      name=""
                      id=""
                      rows={10}
                      placeholder="Enter Your Comment"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="two_step_button d-flex justify-content-between mt-5">
          <button className="text-start">Previous step</button>
          <button className="text-end">Next step -Finalise</button>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
