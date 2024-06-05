import React from "react";
import TopHeader from "../../Components/TopHeader";
import MainHeader from "../../Components/MainHeader";
import "../../Pages/UsedCarWarrenty/Services.css";
import MainBanners from "../../Components/MainBanners";
import Road01 from "../../assets/images/road 01.png"
import Road02 from "../../assets/images/road 02.png"
import FAQ from "../../Components/FAQ";
import BlogSections from "../../Components/BlogSections";
import Footer from "../../Components/Footer";

function RoadSide() {
    return (
        <>

            <TopHeader />
            <MainHeader />
            <MainBanners />
            <div className="emergency-section mt-5 mb-5 ">
                <div className="container h-100">
                    <div className="row h-100">
                        <div
                            className="col-lg-4 text-light my-auto text-end "
                            data-aos="fade-right"
                            data-aos-duration={1500}
                        >
                            <i className="fa-solid fa-street-view" />
                        </div>
                        <div
                            className="col-lg-6 mx-2 text-light my-auto"
                            data-aos="fade-left"
                            data-aos-duration={1500}
                        >
                            <p>
                                <strong>Get Emergency Support.</strong> Our 24/7 Support
                                Representatives Will Help You With Your Project
                            </p>
                            <a href="contact_us.html">
                                <button className="rounded-5 px-3 py-1 fs-5">
                                    Click Here for Support
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-detail mt-4 overflow-hidden">
                <div className="container h-100">
                    <h2 className="text-decoration-underline text-center">
                        ROADSIDE ASSISTANCE
                    </h2>
                    <div className="row h-100">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1500">
                            <img src={Road01} alt="Image" style={{height: "400px"}} />
                        </div>
                        <div className="col-lg-6 my-auto" data-aos="fade-left" data-aos-duration="1500">
                            <p>
                                Roadside assistance is an essential service ideal for owners of all types of
                                vehicles,
                                providing them with user-friendly solutions such as comprehensive assistance
                                coverage, easy
                                claim management, and flexible payment options. Our expert service providers have
                                the
                                capability to offer sensational and reliable roadside assistance plans, ensuring our
                                clients
                                receive guaranteed satisfaction. Our assistance plans are professionally designed
                                and
                                tailored
                                with all your desired coverages. Roadside assistance is a robust and powerful
                                protection
                                plan
                                that will safeguard your vehicle investment from day one.
                            </p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items">
                        <a href="Book_Services.html"><button className="rounded-5 px-4 py-2">Get Started</button></a>

                    </div>
                </div>
            </div>

            <div className="choose-section mt-4 overflow-hidden">
                <div className="container h-100">
                    <div className="row h-100">
                        <div
                            className="col-lg-6 my-auto"
                            data-aos="fade-up-right"
                            data-aos-duration={1500}
                        >
                            <h4>WHY CHOOSE OUR ROADSIDE ASSISTANCE</h4>
                            <p>
                                Our roadside assistance is the best choice for maintaining and
                                protecting your vehicle. Our assistance plans include comprehensive
                                coverage options and customizable plans to suit your specific needs,
                                ensuring your car gets the help it deserves. One standout feature is
                                our built-in claim optimizer, designed to streamline the assistance
                                process and maximize your benefits, making it the first choice for
                                car owners. With our assistance, you can have peace of mind knowing
                                your vehicle is well-supported. This will enhance your confidence in
                                your car's reliability and help you keep track of all necessary
                                information such as assistance details, claim status, and
                                maintenance records, even from your phone.
                            </p>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="fade-up-left"
                            data-aos-duration={1500}
                        >
                            <img src={Road02} alt="Image!" height="400px" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="services mt-4 overflow-hidden">
                <div className="container h-100">
                    <div className="row h-100 text-light">
                        <div
                            className="col-lg-6 my-auto p-2"
                            data-aos="fade-down-left"
                            data-aos-duration={1500}
                        >
                            {/* -------------- video section ----------- */}
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
                        <div
                            className="col-lg-6 my-auto p-4"
                            data-aos="fade-down-right"
                            data-aos-duration={1500}
                        >
                            <h4>ROADSIDE ASSISTANCE</h4>
                            <p>
                                Our roadside assistance plans are versatile, offering comprehensive
                                coverage and powerful benefits. Our skilled and professional team
                                provides premium assistance design and complete support to ensure
                                your vehicle is protected, taking your peace of mind to the next
                                level.
                            </p>
                            <h5>ASSISTANCE PLAN DESIGN &amp; CUSTOMIZATION:</h5>
                            <p>
                                Our assistance plan development follows industry standards to create
                                plans that are effective across all situations and for various
                                vehicle types. We offer customization services to tailor the
                                assistance to your specific needs while retaining the core benefits.
                            </p>
                            <h5>DATA MIGRATION TO OUR ASSISTANCE PLANS:</h5>
                            <p>
                                Our assistance includes data migration from your current plan to our
                                comprehensive assistance format. Our experts make the entire
                                transformation and migration process smooth and hassle-free,
                                ensuring a seamless transition.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Do-it mt-4 overflow-hidden">
    <div className="container py-5">
      <div className="text-center">
        <h1>HOW WE DO IT</h1>
      </div>
      <div className="row py-4">
        <div
          className="col-lg-4 text-center p-3"
          data-aos="zoom-in"
          data-aos-duration={1500}
        >
          <div className="fs-1">
            <i className="fa-regular fa-chart-bar" />
          </div>
          <h4>ANALYSIS</h4>
          <p>
            Our assistance specialists analyze your vehicle's needs and offer
            the best roadside solution tailored to your requirements. The terms
            and timelines of the coverage are based on expert consultation
            provided by our assistance specialists.
          </p>
        </div>
        <div
          className="col-lg-4 text-center p-3"
          data-aos="zoom-in"
          data-aos-duration={1500}
        >
          <div className="fs-1">
            <i className="fa-brands fa-creative-commons-share" />
          </div>
          <h4>CREATION</h4>
          <p>
            Our team meticulously designs and develops customized roadside
            assistance plans that meet the highest standards of quality and
            reliability. We ensure that each plan provides comprehensive
            coverage tailored to your specific needs, offering you peace of mind
            and protection against unexpected breakdowns. Our assistance
            services are crafted to be user-friendly and accessible, making it
            easy for you to understand and manage your coverage.
          </p>
        </div>
        <div
          className="col-lg-4 text-center p-3"
          data-aos="zoom-in"
          data-aos-duration={1500}
        >
          <div className="fs-1">
            <i className="fa-solid fa-screwdriver-wrench" />
          </div>
          <h4>SUPPORT</h4>
          <p>
            Our assistance experts ensure you are fully comfortable with your
            coverage by providing continuous support and maintenance. We are
            dedicated to keeping your vehicle protected and ensuring your
            ownership experience remains worry-free and seamless.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items">
        <a href="Book_Services.html">
          <button className="rounded-5 px-4 py-2">Get Started</button>
        </a>
      </div>
    </div>
  </div>
            <FAQ />
            <BlogSections />
            <Footer />
        </>
    )
}
export default RoadSide;