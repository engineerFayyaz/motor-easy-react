import React from "react";

const StepFive = () => {

    return (
        <>
        <div className="row fifth_portion">
  <div className="col-lg-10 mt-4 mx-auto fifth_portion overflow-x-hidden">
    <p>
      Please check the following details are correct and accept the terms &amp;
      conditions. Incorrect information may invalidate your policy at the point
      of a claim.
    </p>
    <div className="container ">
      <div className="row">
        <div className="col-lg-6">
          <div className="table-container bg-light">
            <h4>My Vehicle Details</h4>
            <table className="vehicle-table">
              <tbody>
                <tr>
                  <th>Reg</th>
                  <td>CS123</td>
                </tr>
                <tr>
                  <th>Make</th>
                  <td>ABARTH</td>
                </tr>
                <tr>
                  <th>Model</th>
                  <td>124 SPIDER SCORPIONE MULTIAIR</td>
                </tr>
                <tr>
                  <th>MOT expiry date</th>
                  <td>01/11/2024</td>
                </tr>
                <tr>
                  <th>Current Mileage</th>
                  <td>45</td>
                </tr>
                <tr>
                  <th>Last service date</th>
                  <td>04/2024</td>
                </tr>
              </tbody>
            </table>
            <button className="btn btn-secondary btn-custom ">
              Edit-mymotor
            </button>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="table-container bg-light">
            <h4>My Personal Details</h4>
            <table className="personal-table vehicle-table ">
              <tbody>
                <tr>
                  <th>Title</th>
                  <td>Mr</td>
                </tr>
                <tr>
                  <th>First name</th>
                  <td>Shani</td>
                </tr>
                <tr>
                  <th>Surname</th>
                  <td>Zulfi</td>
                </tr>
                <tr>
                  <th>Phone number</th>
                  <td>440959870943875</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>Example3434@gmail.com</td>
                </tr>
                <tr>
                  <th />
                  <td />
                </tr>
                <tr>
                  <th />
                  <td />
                </tr>
              </tbody>
            </table>
            <button className="btn btn-secondary btn-custom-personal">
              Edit-myinfo
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="container bg-light justify-content-between flex-row p-3 mt-4 mb-4">
      <div className="detail-section d-flex justify-content-between">
        <h4>My warranty details</h4>
        <button
          type="button"
          className="btn btn-secondary mt-auto align-self-end  "
          data-toggle="collapse"
          data-target="#demo_1"
        >
          Expand and check
        </button>
      </div>
      <div id="demo_1" className="collapse mt-3">
        <div className="row">
          <div className="col-lg-3">
            <img src="assets/image/car-12.jpg" alt="CarImage" height="200px" />
          </div>
          <div className="col-lg-3">
            <h6>Car Warranty Name: Plan A</h6>
            <h6>What Is Included?</h6>
            <ul>
              <li>Air conditioning</li>
              <li>Braking System hydraulics</li>
              <li>Braking System cables, pedal assembly &amp; vacuum pump</li>
              <li>Clutch plate &amp; cover &amp; release bearing</li>
              <li>Cooling system thermostat &amp; water pump</li>
              <li>Cooling system radiators &amp; fans</li>
              <li>Main ECU (computer)</li>
              <li>
                Ignition system - coils and crankshaft &amp; camshaft sensors
              </li>
              <li>Airbag electrics (external to airbags)</li>
              <li>Gearboxes</li>
              <li>Starter motor &amp; alternator</li>
              <li>Main electrical system components</li>
              <li>Emission system components</li>
              <li>Other ECUs (computers)</li>
              <li>Clutch ancillaries</li>
              <li>Engine</li>
              <li>Fluids &amp; consumables</li>
              <li>Flywheels &amp; drive plates</li>
              <li>Fuel system - pumps &amp; tank</li>
              <li>Fuel system - other components</li>
              <li>Ignition system - other components</li>
              <li>Crankshaft rear oil seal</li>
              <li>Casings</li>
              <li>Gearbox input shaft oil seal</li>
              <li>Other oil seals &amp; gaskets</li>
              <li>Catalytic converters &amp; diesel particulate filters</li>
              <li>Power steering motor, pump and ram</li>
              <li>Other steering system components</li>
              <li>Super/turbochargers</li>
              <li>Suspension</li>
              <li>Transmissions</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h6>Warranty Payment Preference</h6>
            <div className="warranty-item">
              <strong>Continuous Plan:</strong>
              <span>Yes</span>
            </div>
            <div className="warranty-item">
              <strong>Repairer Preference:</strong>
              <span>MotorEasy Network</span>
            </div>
            <div className="warranty-item">
              <strong>Garage Labour Rate:</strong>
              <span>£60</span>
            </div>
            <div className="warranty-item">
              <strong>Your Repair Contribution:</strong>
              <span>£50</span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="warranty-item">
              <strong>Total Price</strong>
              <span>£50.45</span>
            </div>
          </div>
          <div className="text-start mb-5 car_warrarnty">
            <button className="p-2 ">Edit - My car warranty</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default StepFive;