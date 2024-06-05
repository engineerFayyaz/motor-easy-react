import React from "react";
import Counter1 from "../../assets/images/counter1.png"
import Counter2 from "../../assets/images/counter2.png"
import Counter3 from "../../assets/images/counter3.png"
import Counter4 from "../../assets/images/counter4.png"
function CounterServices(){
    return(
        <>
        <div className="counter">
      <div className="container">
        <div className="row mt-4">
          <div className="col-12 col-lg-3">
            <img src={Counter1} alt="" />
            <div className="count-up">
              <p className="counter-count">15</p><span>k+</span>
              <h3>PROJECT COMPLETE</h3>
            </div>
          </div>

          <div className="col-12 col-lg-3">
            <img src={Counter2} alt="" />
            <div className="count-up">
              <p className="counter-count">97</p><span>%</span>
              <h3>CLIENT SATISFACTION</h3>
            </div>
          </div>

          <div className="col-12 col-lg-3">
            <img src={Counter3} alt="" />
            <div className="count-up">
              <p className="counter-count">10</p><span>k+</span>
              <h3>EXPERIENCED STAFF</h3>
            </div>
          </div>

          <div className="col-12 col-lg-3">
            <img src={Counter4} alt="" />
            <div className="count-up">
              <p className="counter-count">8</p><span>k+</span>
              <h3>WORLDWIDE CLIENT</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
export default CounterServices;