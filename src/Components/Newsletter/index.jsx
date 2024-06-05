import React from "react";

function Newsletter(){
    return(
        <>
        <div className="container">
    <div className="row about_last_portion d-flex flex-wrap">
      <div className="col-lg-6 col-md-12 col-sm-12 Newsletter d-flex justify-content-center align-items-center">
        <h1>Subscribe Our Newsletter</h1>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 Newsletter_email  d-flex justify-content-center align-items-center flex-row">
        <input type="text" placeholder="Email Address" />
        <button>Subscribe Now</button>
      </div>
    </div>
  </div>
        </>
    )
};
export default Newsletter;