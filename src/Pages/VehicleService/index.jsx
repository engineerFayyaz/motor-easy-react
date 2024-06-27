import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import TopHeader from "../../Components/TopHeader";
import MainHeader from "../../Components/MainHeader";
import "../../Pages/UsedCarWarrenty/Services.css";
import MainBanners from "../../Components/MainBanners";
import service01 from "../../assets/images/service vehicle 01.png"
import service02 from "../../assets/images/service vehicle 02.png"
import FAQ from "../../Components/FAQ";
import BlogSections from "../../Components/BlogSections";
import Footer from "../../Components/Footer";

function VehicleService() {
    const [bannerUrls, setBannerUrls] = useState([]);
    useEffect(() => {
        const fetchBannerUrls = async () => {
            const listRef = ref(storage, 'Vehicle Service');
            try {
                const res = await listAll(listRef);
                const urls = await Promise.all(res.items.map((itemRef) => getDownloadURL(itemRef)));
                setBannerUrls(urls);
            } catch (error) {
                console.error("Error fetching images: ", error);
            }
        };

        fetchBannerUrls();
    }, []);

    return (
        <>

            <TopHeader />
            <MainHeader />
            <MainBanners bannerUrls={bannerUrls} />
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
                            <a href="/contact-us">
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
                    <h2 className="text-decoration-underline text-center">VEHICLE SERVICE</h2>
                    <div className="row h-100">
                        <div
                            className="col-lg-6"
                            data-aos="fade-right"
                            data-aos-duration={1500}
                        >
                            <img
                                src={service01}
                                alt="Image"
                                style={{ height: 400 }}
                            />
                        </div>
                        <div
                            className="col-lg-6 my-auto"
                            data-aos="fade-left"
                            data-aos-duration={1500}
                        >
                            <p>
                                Vehicle service is an essential offering ideal for owners of all
                                types of vehicles, providing them with user-friendly solutions such
                                as comprehensive maintenance coverage, easy claim management, and
                                flexible payment options. Our expert service providers have the
                                capability to offer sensational and reliable vehicle service plans,
                                ensuring our clients receive guaranteed satisfaction. Our service
                                plans are professionally designed and tailored with all your desired
                                coverages. Vehicle service is a robust and powerful protection plan
                                that will safeguard your vehicle investment from day one.
                            </p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items">
                        <a href="/Book_Services">
                            <button className="rounded-5 px-4 py-2">Get Started</button>
                        </a>
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
                            <h4>WHY CHOOSE OUR VEHICLE SERVICE</h4>
                            <p>
                                Our vehicle service is the best choice for maintaining and
                                protecting your vehicle. Our service plans include comprehensive
                                maintenance options and customizable plans to suit your specific
                                needs, ensuring your car gets the care it deserves. One standout
                                feature is our built-in claim optimizer, designed to streamline the
                                service process and maximize your benefits, making it the first
                                choice for car owners. With our service, you can have peace of mind
                                knowing your vehicle is well-maintained. This will enhance your
                                confidence in your car's reliability and help you keep track of all
                                necessary information such as service details, claim status, and
                                maintenance records, even from your phone.
                            </p>
                        </div>
                        <div
                            className="col-lg-6 d-flex justify-content-center"
                            data-aos="fade-up-left"
                            data-aos-duration={1500}
                        >
                            <img
                                src={service02}
                                alt="Image!"
                                height="400px"
                            />
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
                            {/* <img src="/assets/images/choose.png" alt="Image!" height="400px"> */}
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
                            <h4>VEHICLE SERVICE</h4>
                            <p>
                                Our vehicle service plans are versatile, offering comprehensive
                                coverage and powerful benefits. Our skilled and professional team
                                provides premium service design and complete support to ensure your
                                vehicle is maintained, taking your peace of mind to the next level.
                            </p>
                            <h5>SERVICE PLAN DESIGN &amp; CUSTOMIZATION:</h5>
                            <p>
                                Our service plan development follows industry standards to create
                                plans that are effective across all situations and for various
                                vehicle types. We offer customization services to tailor the service
                                to your specific needs while retaining the core benefits.
                            </p>
                            <h5>DATA MIGRATION TO OUR SERVICE PLANS:</h5>
                            <p>
                                Our service includes data migration from your current plan to our
                                comprehensive service format. Our experts make the entire
                                transformation and migration process smooth and hassle-free,
                                ensuring a seamless transition.
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
                        <a href="/Book_Services">
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
export default VehicleService;