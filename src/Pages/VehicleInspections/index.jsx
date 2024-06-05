import React from "react";
import TopHeader from "../../Components/TopHeader";
import MainHeader from "../../Components/MainHeader";
import "../../Pages/UsedCarWarrenty/Services.css";
import MainBanners from "../../Components/MainBanners";
import inception01 from "../../assets/images/inception01.jpg"
import vehicleInspect2 from "../../assets/images/vehicle inspection 02.png"
import FAQ from "../../Components/FAQ";
import BlogSections from "../../Components/BlogSections";
import Footer from "../../Components/Footer";

function VehicleInspections() {
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
            <div className="service-detail mt-4 overflow-hidden ">
                <div className="container h-100">
                    <h2 className="text-decoration-underline text-center">
                        VEHICLE INSPECTION SERVICES
                    </h2>
                    <div className="row h-100">
                        <div
                            className="col-lg-6  mt-3 mb-3 overflow-hidden"
                            data-aos="fade-up-right"
                            data-aos-duration={1500}
                        >
                            <img
                                src={inception01}
                                alt="Image!"
                                height="300px"
                            />
                        </div>
                        <div
                            className="col-lg-6 my-auto overflow-hidden"
                            data-aos="fade-up-left"
                            data-aos-duration={1500}
                        >
                            <p>
                                A vehicle inspection is an essential service ideal for owners of all
                                types of vehicles, offering them user-friendly solutions like
                                thorough inspections, detailed reports, and flexible scheduling
                                options. Our expert inspectors have the ability to provide
                                sensational and reliable vehicle inspection services, giving our
                                clients guaranteed satisfaction. Our inspection services are
                                professionally designed and tailored to meet all your specific
                                needs. A vehicle inspection is a robust and powerful service that
                                will ensure your vehicle is in optimal condition from day one.
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

            <div className="choose-section mt-4 overflow-hidden">
                <div className="container h-100">
                    <div className="row h-100">
                        <div
                            className="col-lg-6 my-auto p-4"
                            data-aos="flip-left"
                            data-aos-duration={1500}
                        >
                            <h4>WHY CHOOSE OUR VEHICLE INSPECTION</h4>
                            <p>
                                Our vehicle inspection services are the best choice for ensuring the
                                safety and reliability of your vehicle. Our inspection plans include
                                comprehensive check-ups and customizable options to suit your
                                specific needs, ensuring your car gets the thorough evaluation it
                                deserves. One standout feature is our built-in report optimizer,
                                designed to streamline the inspection process and maximize your
                                understanding of your vehicle's condition, making it the first
                                choice for car owners. With our inspection services, you can have
                                peace of mind knowing your vehicle is thoroughly inspected. This
                                will enhance your confidence in your car's reliability and help you
                                keep track of all necessary information such as inspection details,
                                report status, and maintenance records, even from your phone.
                            </p>
                        </div>
                        <div
                            className="col-lg-6 overflow-hidden"
                            data-aos="flip-right"
                            data-aos-duration={1500}
                        >
                            <img
                                src={vehicleInspect2}
                                alt="Image!"
                                height="350px"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="services mt-4 overflow-hidden">
                <div className="container h-100">
                    <div className="row h-100 text-light">
                        <div
                            className="col-lg-6 my-auto"
                            data-aos="flip-up"
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
                            className="col-lg-6 my-auto p-4 overflow-hidden "
                            data-aos="flip-up"
                            data-aos-duration={1500}
                        >
                            <h4>VEHICLE INSPECTION SERVICES</h4>
                            <p>
                                Our vehicle inspection plans are versatile, offering comprehensive
                                evaluations and powerful benefits. Our skilled and professional team
                                provides premium inspection design and complete support to ensure
                                your vehicle is in optimal condition, taking your peace of mind to
                                the next level.
                            </p>
                            <h5>INSPECTION PLAN DESIGN &amp; CUSTOMIZATION:</h5>
                            <p>
                                Our inspection plan development follows industry standards to create
                                plans that are effective across all situations and for various
                                vehicle types. We offer customization services to tailor the
                                inspection to your specific needs while retaining the core benefits.
                            </p>
                            <h5>DATA MIGRATION TO OUR INSPECTION PLANS:</h5>
                            <p>
                                Our inspection services include data migration from your current
                                inspection records to our comprehensive inspection format. Our
                                experts make the entire transformation and migration process smooth
                                and hassle-free, ensuring a seamless transition.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Do-it mt-4 overflow-hidden">
                <div className="container py-5">
                    <div className="text-center ">
                        <h1>HOW WE DO IT</h1>
                    </div>
                    <div className="row py-4 ">
                        <div
                            className="col-lg-4 text-center overflow-hidden "
                            data-aos="zoom-in"
                            data-aos-duration={1500}
                        >
                            <div className="fs-1">
                                <i className="fa-regular fa-chart-bar" />
                            </div>
                            <h4>ANALYSIS</h4>
                            <p>
                                Our inspection specialists analyze your vehicle's condition and
                                offer the best inspection solution tailored to your requirements.
                                The terms and timelines of the inspection are based on expert
                                consultation provided by our inspection specialists.
                            </p>
                        </div>
                        <div
                            className="col-lg-4 text-center overflow-hidden "
                            data-aos="zoom-in"
                            data-aos-duration={1500}
                        >
                            <div className="fs-1">
                                <i className="fa-brands fa-creative-commons-share" />
                            </div>
                            <h4>CREATION</h4>
                            <p>
                                Our team meticulously designs and develops customized vehicle
                                inspection plans that meet the highest standards of quality and
                                reliability. We ensure that each plan provides comprehensive
                                evaluations tailored to your specific needs, offering you peace of
                                mind and assurance about your vehicle's condition. Our inspections
                                are crafted to be user-friendly and accessible, making it easy for
                                you to understand and manage your vehicle's maintenance needs.
                            </p>
                        </div>
                        <div
                            className="col-lg-4 text-center overflow-hidden "
                            data-aos="zoom-in"
                            data-aos-duration={1500}
                        >
                            <div className="fs-1">
                                <i className="fa-solid fa-screwdriver-wrench" />
                            </div>
                            <h4>SUPPORT</h4>
                            <p>
                                Our inspection experts ensure you are fully comfortable with the
                                process by providing continuous support and maintenance. We are
                                dedicated to keeping your vehicle in top condition and ensuring your
                                ownership experience remains worry-free and seamless.
                            </p>
                        </div>
                    </div>
                    <div
                        className="d-flex justify-content-center align-items overflow-hidden "
                        data-aos="zoom-in-up"
                        data-aos-duration={1500}
                    >
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
export default VehicleInspections;