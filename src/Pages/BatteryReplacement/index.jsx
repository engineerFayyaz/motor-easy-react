import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import TopHeader from "../../Components/TopHeader";
import MainHeader from "../../Components/MainHeader";
import "../../Pages/UsedCarWarrenty/Services.css";
import MainBanners from "../../Components/MainBanners";
import battery01 from "../../assets/images/battery 01.png"
import battery02 from "../../assets/images/battery 01.png"
import FAQ from "../../Components/FAQ";
import BlogSections from "../../Components/BlogSections";
import Footer from "../../Components/Footer";

function BatteryReplacement() {
    const [bannerUrls, setBannerUrls] = useState([]);
    useEffect(() => {
        const fetchBannerUrls = async () => {
            const listRef = ref(storage, 'Battery Replacement');
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
                    <h2 className="text-decoration-underline text-center">
                        BATTERY REPLACEMENT
                    </h2>
                    <div className="row h-100">
                        <div
                            className="col-lg-6"
                            data-aos="fade-right"
                            data-aos-duration={1500}
                        >
                            <img
                                src={battery01}
                                alt="Battery Replacement Image"
                                style={{ height: 400 }}
                            />
                        </div>
                        <div
                            className="col-lg-6 my-auto"
                            data-aos="fade-left"
                            data-aos-duration={1500}
                        >
                            <p>
                                Battery replacement is a vital service for all vehicle owners,
                                offering convenient solutions such as timely replacement,
                                hassle-free claim processing, and flexible payment options. Our
                                skilled technicians deliver exceptional and trustworthy battery
                                replacement services, ensuring complete satisfaction for our
                                customers. Our service plans are expertly crafted and customized to
                                meet all your needs. Battery replacement provides robust protection
                                to safeguard your vehicle investment from the very beginning.
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
                            <h4>WHY CHOOSE OUR BATTERY REPLACEMENT</h4>
                            <p>
                                Our battery replacement service is the optimal choice for
                                maintaining and safeguarding your vehicle's power source. We offer
                                comprehensive coverage options and customizable plans tailored to
                                your specific requirements, ensuring your vehicle receives the
                                assistance it deserves. One standout feature is our integrated claim
                                optimizer, engineered to simplify the replacement process and
                                optimize your benefits, making it the preferred option for vehicle
                                owners. With our service, you can enjoy peace of mind knowing your
                                vehicle's power needs are well-addressed. This will boost your
                                confidence in your vehicle's dependability and enable you to
                                conveniently access all essential information, including replacement
                                details, claim status, and maintenance records, right from your
                                phone.
                            </p>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="fade-up-left"
                            data-aos-duration={1500}
                        >
                            <img
                                src={battery02}
                                alt="Battery Replacement Image"
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
                            <h4>BATTERY REPLACEMENT</h4>
                            <p>
                                Our battery replacement services offer versatility, providing
                                comprehensive coverage and significant benefits. Our skilled and
                                professional team designs premium replacement solutions and provides
                                full support to ensure your vehicle's power needs are met, elevating
                                your peace of mind.
                            </p>
                            <h5>REPLACEMENT PLAN DESIGN &amp; CUSTOMIZATION:</h5>
                            <p>
                                Our replacement plan development adheres to industry standards to
                                create effective plans suitable for various vehicle types and
                                situations. We offer customization options to tailor the replacement
                                to your specific requirements while preserving the essential
                                benefits.
                            </p>
                            <h5>DATA MIGRATION TO OUR REPLACEMENT PLANS:</h5>
                            <p>
                                Our services include seamless data migration from your current plan
                                to our comprehensive replacement format. Our experts handle the
                                entire transformation and migration process with ease, ensuring a
                                smooth transition.
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
                                Our specialists analyze your vehicle's power needs and recommend the
                                best battery replacement solution tailored to your requirements. The
                                terms and conditions of the replacement are determined through
                                expert consultation provided by our specialists.
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
                                Our team meticulously designs and develops customized battery
                                replacement plans that adhere to the highest standards of quality
                                and reliability. We ensure that each plan offers comprehensive
                                coverage tailored to your specific needs, providing you with peace
                                of mind and protection against unexpected power failures. Our
                                replacement services are designed to be user-friendly and
                                accessible, making it easy for you to understand and manage your
                                coverage.
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
                                Our experts ensure you are fully satisfied with your battery
                                replacement by offering continuous support and maintenance. We are
                                committed to keeping your vehicle powered and ensuring your
                                ownership experience remains worry-free and seamless.
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
            <FAQ />
            <BlogSections />
            <Footer />
        </>
    )
}
export default BatteryReplacement;