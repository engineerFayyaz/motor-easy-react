import React from "react";
import TopHeader from "../../Components/TopHeader";
import MainHeader from "../../Components/MainHeader";
import "../../Pages/Pricing/Pricing.css";
import ComapniesAttached from "../../Components/ComapniesAttached";
import BlogSections from "../../Components/BlogSections";
import Footer from "../../Components/Footer";

function Pricing() {
    return (
        <>
            <TopHeader />
            <MainHeader />
            <main>
                <section>
                    <div className="container-fliud">
                        <div className="row">
                            <div className="col-lg-12 about_us_bg_image d-flex justify-content-center align-items-center flex-column">
                                <h5>Pricing - Motor Easy</h5>
                                <p>You Here! &gt; Home &gt; Pricing</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row title_shape text-center">
                            <p>OUR COSTING</p>
                            <h3>
                                Our <span>Pricing</span>
                            </h3>
                        </div>
                        <div className="row Pricing mt-4">
                            <h2 className="text-center">
                                Worrying with 1,2or 3 year used car warrenty protection cover.
                            </h2>
                            {/* =================== Icon section ============= */}
                            <div className="row mt-4 mb-3 text-center icons_color">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <i className="fa-solid fa-wrench" />
                                    <h5>Sudden mechanical or electrical failures</h5>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <i className="fa-solid fa-fire" />
                                    <h5>Failures caused by overheating</h5>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <i className="fa-solid fa-motorcycle" />
                                    <h5>Air conditioning problems</h5>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <i className="fa-solid fa-virus" />
                                    <h5>Failures identified during MOT and servicing</h5>
                                </div>
                            </div>
                            {/* Second row */}
                            <div className="row mt-4 mb-3 text-center icons_color">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <i className="fa-solid fa-box-tissue" />
                                    <h5>Emissions-related issues</h5>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <i className="fa-solid fa-music" />
                                    <h5>In-car entertainment</h5>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <i className="fa-solid fa-truck" />
                                    <h5>Recovery</h5>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <i className="fa-solid fa-location-dot" />
                                    <h5>Sat nav</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mt-4">
                                    <h3 className="mt-3">
                                        Protected warrenty <span>Made Easy against expensive bills</span>
                                    </h3>
                                    <p className="mt-4">
                                        Money-saving protection provides cover for the mechanical breakdown
                                        of over 5,000 components. We offer a choice to help you get the
                                        coverage you want from three basic levels of cover: from our basic
                                        level we will cover any part that stops working due to wear and tear
                                        or unexpected failure.
                                    </p>
                                    <p>
                                        All parts and labour are included in each policy. You may claim as
                                        often as necessary during your service period. Make sure you and
                                        your family are well looked after if any problems arise from your
                                        vehicle with peace of mind collection and delivery of your car to
                                        your preferred repair shop free towing.
                                    </p>
                                    <p>
                                        We include full parts and labour in making sure those weeks without
                                        your car are minimal, ensuring you are back on the road as fast,
                                        safe, and comfortable. Providing one of the best warranty products
                                        on today’s market.
                                    </p>
                                    <p>
                                        {" "}
                                        Make sure you and your family are well looked after if any problems
                                        arise from your vehicle with peace of mind collection and delivery
                                        of your car to your preferred repair shop free towing.
                                    </p>
                                </div>
                                <div className="col-lg-6 mt-5">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <i className="fa fa-check" /> Air conditioning systems{" "}
                                                </td>
                                                <td>
                                                    <i className="fa fa-check" /> Brake hydraulics{" "}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="fa fa-check" /> Brake hydraulic systems
                                                </td>
                                                <td>
                                                    <i className="fa fa-check" /> Clutch system including{" "}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="fa fa-check" /> cover and release plate
                                                </td>
                                                <td>
                                                    <i className="fa fa-check" /> Cooling system thermostat{" "}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="fa fa-check" /> water pump
                                                </td>
                                                <td>
                                                    <i className="fa fa-check" /> Cooling &amp; AC radiators and
                                                    fans{" "}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="fa fa-check" /> Drive belts &amp; tensioners
                                                </td>
                                                <td>
                                                    <i className="fa fa-check" /> Main ECUs (computers){" "}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="fa fa-check" /> Other ECUs (computers)
                                                </td>
                                                <td>
                                                    <i className="fa fa-check" /> Airbag electronics{" "}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="fa fa-check" /> Starter motor and alternator
                                                </td>
                                                <td>
                                                    <i className="fa fa-check" /> Catalytic converters{" "}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="fa fa-check" /> Fuel System
                                                </td>
                                                <td>
                                                    <i className="fa fa-check" /> Drive Line System{" "}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="fa fa-check" /> Camshaft systems
                                                </td>
                                                <td>
                                                    <i className="fa fa-check" /> Ignition systems{" "}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="row Pricing mt-4 mb-4">
                            <h2 className="text-center mb-4 mt-4">
                                We Offer a varitey of plans to suit your needs and budgets
                            </h2>
                            <div className="col-lg-3 mt-5 col-md-6 col-sm-6 d-flex flex-wrap">
                                <table className="Titanium table-bordered">
                                    <tbody>
                                        <tr>
                                            <th>Eligible Vehicles:</th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Maximum inception mileage: 100%</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" /> Brake hydraulic systems
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" /> cover and release plate
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" /> water pump
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" /> Drive belts &amp; tensioners
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" /> Other ECUs (computers)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" /> Starter motor and alternator
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" /> Fuel System
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" /> Camshaft systems
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" /> Air conditioning systems{" "}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" /> Brake hydraulic systems
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" /> cover and release plate
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" /> water pump
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" /> Drive belts &amp; tensioners
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" /> Other ECUs (computers)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" /> Starter motor and alternator
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" /> Fuel System
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" /> Camshaft systems
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 d-flex flex-wrap">
                                <div className="paltinum_span">
                                    <span>A</span>
                                </div>
                                <table className="Platinum  table-bordered">
                                    <tbody>
                                        <tr>
                                            <th>
                                                Cover for cars 3 years and older coming out of the
                                                manufacturer’s guarantee
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>60%</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 d-flex flex-wrap">
                                <div className="Gold_span">
                                    <span>B</span>
                                </div>
                                <table className="Gold table-bordered">
                                    <tbody>
                                        <tr>
                                            <th>Essential cover for cars 5 years and older</th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>100%</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-remove" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 d-flex flex-wrap">
                                <div className="paltinum_span">
                                    <span>C</span>
                                </div>
                                <table className="Silver table-bordered">
                                    <tbody>
                                        <tr>
                                            <th>Cars 10 years and older</th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>120%</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-remove" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="fa fa-check" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <ComapniesAttached/>
                    <BlogSections/>
                </section>
            </main>
            <Footer/>

        </>
    );
}
export default Pricing;