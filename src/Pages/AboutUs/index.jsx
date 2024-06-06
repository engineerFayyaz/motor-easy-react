import React from "react";
import "../AboutUs/about_us.css";
import TopHeader from "../../Components/TopHeader";
import MainHeader from "../../Components/MainHeader";
import AboutH3Image from "../../assets/images/H3-about-img.jpg";
import ServicesCarousel from "../../Components/ServicesCarousel";
import H3TabImage from "../../assets/images/H3-tab-img.png"
import GetInTouch from "../../Components/GetInTouch";
import BrandsPartners from "../../Components/BrandsPartners";
import Newsletter from "../../Components/Newsletter";
import Footer from "../../Components/Footer";
function AboutUs() {
    return (
        <>
            <TopHeader />
            <MainHeader />
            <div className="container-fliud">
                <div className="row">
                    <div className="col-lg-12 about_us_bg_image d-flex justify-content-center align-items-center flex-column">
                        <h5>About - Motor Easy</h5>
                        <p>You Here! &gt; Home &gt; About</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-5 mb-5  d-flex justify-content-between">
                        <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column flex-wrap justify-content-center">
                            <div className=" card_section_first d-flex justify-content-center">
                                <div className="card d-flex flex-row m-2">
                                    <div className="icon">
                                        <i className="fa-solid fa-shield-virus" />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Worthy Company</h4>
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet, cons- ectetur adipiscing elit, sed
                                            do is eiusmod tempor elit
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column flex-wrap justify-content-center">
                            <div className=" card_section_first d-flex justify-content-center">
                                <div className="card d-flex flex-row m-2">
                                    <div className="icon">
                                        <i className="fa-solid fa-shield-virus" />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Worthy Company</h4>
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet, cons- ectetur adipiscing elit, sed
                                            do is eiusmod tempor elit
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column flex-wrap justify-content-center">
                            <div className=" card_section_first d-flex justify-content-center">
                                <div className="card d-flex flex-row m-2">
                                    <div className="icon">
                                        <i className="fa-solid fa-shield-virus" />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Worthy Company</h4>
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet, cons- ectetur adipiscing elit, sed
                                            do is eiusmod tempor elit
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="conatiner">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 d-flex flex-wrap justify-content-center">
                            <img src={AboutH3Image} width="100%" alt="" />
                        </div>
                        <div className="col-lg-6 two_side_image">
                            <div>
                                <h5>ABOUT OUR COMPANY</h5>
                                <h3>
                                    Big Dreams Start Small <span>Live Your Life Beautifully...</span>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod te- mpor incididunt ut labore et dolore magna aliqua. Quis
                                    ipsum suspend- isse ultrices gravida. Risus commodo viverra
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <h4>Our Company History</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut
                                    </p>
                                    <h4>Our Company Mission</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <a href="/About-us"><button className="Read_More">Read More</button></a>
                                    <a href="/Contact-us"><button className="A_quote">Get A quote</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

                <div className="container">
                    <div className="row ">
                        <div className="col-lg-8 mt-4 mb-5 mx-auto text-center Discounts_section">
                            <h1>
                                Discounts That Make <span>Gogrin Car Insurance Simple</span>And
                                Convenient
                            </h1>
                            <h6>
                                Car insurance helps to protect you against financial loss in the event
                                of an accident, theft or damage to your car. Auto insur- ance covers
                                the injuries and damages caused by an accident for which you are
                                legally responsible. Coverage might be available to cover the costs of
                                repairing or replacing your vehicle if it is damaged or stolen.
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="counter-box_1 mb-5 p-4">
                    <div className="container ">
                        <div className="row">
                            <div className="four four1 col-md-3 mx-auto">
                                <div className="counter-box">
                                    <i className="fa fa-thumbs-o-up" />
                                    <p className="counter">15</p>
                                    <span>k+</span>
                                    <h3>PROJECT COMPLETE</h3>
                                </div>
                            </div>
                            <div className="four four2 col-md-3 mx-auto">
                                <div className="counter-box">
                                    <p className="counter">97</p>
                                    <span>%</span>
                                    <h3>CLIENT SATISFACTION</h3>
                                </div>
                            </div>
                            <div className="four four3 col-md-3 mx-auto">
                                <div className="counter-box">
                                    <p className="counter">10</p>
                                    <span>k+</span>
                                    <h3>EXPERIENCED STAFF</h3>
                                </div>
                            </div>
                            <div className="four four4 col-md-3 mx-auto">
                                <div className="counter-box">
                                    <p className="counter">8</p>
                                    <span>k+</span>
                                    <h3>WORLDWIDE CLIENT</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
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
                </div>
                <div className="container">
                    <div className="row FREE_ESTIMATE mt-5 mb-5">
                        <div className="col-lg-6">
                            <img src={H3TabImage} width="100%" alt="" />
                        </div>
                        <div className="col-lg-6 mt-5">
                            <h6>GET A FREE ESTIMATE</h6>
                            <h2>
                                Get Started Favorite{" "}
                                <span>Insurance &amp; Check Your Insurance.</span>
                            </h2>
                            <h6>Get Started Favorite Insurance:</h6>
                            <p>
                                Begin your journey to securing your future with our top-rated
                                insurance plans. Choose from a variety of options tailored to fit your
                                needs and protect what matters most.
                            </p>
                            <h6> Check Your Insurance:</h6>
                            <p>
                                Review your insurance policy to ensure comprehensive coverage.
                                Regularly checking your plan helps you stay updated with benefits,
                                make necessary adjustments, and ensure peace of mind.
                            </p>
                        </div>
                    </div>
                </div>
                <GetInTouch/>
                <BrandsPartners/>
                <Newsletter/>
            </div>

            <Footer/>

        </>
    )
};
export default AboutUs;