import React from "react";
import "../MainHeader/header_index.css";
const TopHeader = () => {
    return (
        <>
            <section className="top_header d-none d-md-block">
                <div className="main">
                    <div className="container">
                        <div className="row d-flex flex-row  justify-content-center align-items-center">
                            <div className="col-lg-3 col-md-6 col-sm-6 company_logo">
                                <a href="/">
                                    <h2 style={{ color: "#04BAE0" }}>Motor Easy</h2>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 g-0">
                                <div className="row d-flex flex-row">
                                    <div className="col-md-2 icons   d-flex align-items-center justify-content-center">
                                        <i className="fa-solid fa-location-dot" />
                                    </div>
                                    <div className="col-md-9 p-2 mt-3 d-flex flex-column ">
                                        <h6>Address:</h6>
                                        <p>
                                            Brisbane, Canberra,
                                            <br />
                                            Melbourne, Sydney
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 g-0">
                                <div className="row d-flex flex-row">
                                    <div className="col-md-2 icons  d-flex align-items-center ">
                                        <i className="fa-solid fa-phone" />
                                    </div>
                                    <div className="col-md-9 p-2 mt-3 d-flex flex-column">
                                        <h6>Phone:</h6>
                                        <p>1300 221 480</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 g-0">
                                <div className="row d-flex flex-row">
                                    <div className="col-md-2 icons  d-flex align-items-center justify-content-center">
                                        <i className="fa-solid fa-envelope" />
                                    </div>
                                    <div className="col-md-9 p-2 mt-3 d-flex flex-column">
                                        <h6>Email</h6>
                                        <p>Info@Motoreasy.com.au</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default TopHeader;