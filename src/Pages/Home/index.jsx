import React from "react";
import TopHeader from "../../Components/TopHeader";
import MainHeader from "../../Components/MainHeader";
import MainBanners from "../../Components/MainBanners";
import "../../styles/App.css";
import umberla from "../../assets/images/umbrala.png";
import AmvSection from "../../Components/AmvSection";
import ServicesCarousel from "../../Components/ServicesCarousel";
import CounterServices from "../../Components/CounterServices";
import InsuranceServices from "../../Components/InsuranceServices";
import Feedbacks from "../../Components/Feebacks";
import FAQ from "../../Components/FAQ";
import BrandsPartners from "../../Components/BrandsPartners";
import BlogSections from "../../Components/BlogSections";
import Footer from "../../Components/Footer";

function Home() {
    return (
        <>
            <TopHeader />
            <MainHeader />
            <main>
                <section>
                    <div className="container-fluid d-flex flex-column">
                        <MainBanners />
                        <div className="container card-section">
                            <div className="row mt-5 d-flex flex-wrap justify-content-center">
                                <div className="col-lg-4 d-flex justify-content-center">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-main">
                                                <img src={umberla} alt="Umberla" />
                                                <div className="card_main_position d-flex flex-column text-center">
                                                    <i className="fa-solid fa-car"></i>
                                                    <h3 className="card-title">Used Car Warranty</h3>
                                                    <p className="card-text">
                                                        Hassle-free Cap Price Servicing, with all work monitored by your own Motor Easy.
                                                    </p>
                                                    <a href="#">Read More &gt;&gt;</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-flex justify-content-center">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-main">
                                                <img src={umberla} alt="Umberla" />
                                                <div className="card_main_position d-flex flex-column text-center">
                                                    <i className="fa-solid fa-car"></i>
                                                    <h3 className="card-title">Servicing &amp; Repairs</h3>
                                                    <p className="card-text">
                                                        Hassle-free Cap Price Servicing, with all work monitored by your own Motor Easy.
                                                    </p>
                                                    <a href="#">Read More &gt;&gt;</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-flex justify-content-center">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-main">
                                                <img src={umberla} alt="Umberla" />
                                                <div className="card_main_position d-flex flex-column text-center">
                                                    <i className="fa-solid fa-car"></i>
                                                    <h3 className="card-title">Inspection &amp; Roadside</h3>
                                                    <p className="card-text">
                                                        Get your car inspected a problem can creep up when you least expect. Get a quote.
                                                    </p>
                                                    <a href="#">Read More &gt;&gt;</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row" style={{ marginTop: "-200px", position: "relative" }}>
                                <div className="col-lg-6 col-md-12  third_section">
                                    <div>
                                        <h6>MOTOREASY CAR WARRANTY</h6>
                                        <h4>
                                            Vehicle Inspection &amp;{" "}
                                            <span>
                                                Vehicle <br /> Protection Warranty Australia
                                            </span>
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 MORE_ABOUT_US">
                                    <a href="/About-us">MORE ABOUT US &gt;</a>
                                    <p className="mt-4">
                                        We offer car protection warranty against expensive repair cost. Now
                                        you can stop worrying with our 1, 2 or 3 year used car warranty cover.{" "}
                                        <span> WARRANTY MADE EASY AGAINST EXPENSIVE BILLS</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <AmvSection />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mt-5 mb-5">
                                    <div className="text-center Great_customer">
                                        <h5>GREAT FOR CUSTOMER</h5>
                                        <h3>
                                            Customer Service <span>Section</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ServicesCarousel />
                        <CounterServices />
                        <div className="row">
                            <iframe
                                width={560}
                                height={450}
                                src="https://www.youtube.com/embed/BS4TUd7FJSg?si=vCM6niDT4XVKw5fm"
                                title="YouTube video player"
                                frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen=""
                            />
                        </div>
                        <InsuranceServices/>
                        <Feedbacks/>
                        <FAQ/>
                        <BrandsPartners/>
                        <BlogSections/>


                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default Home;
