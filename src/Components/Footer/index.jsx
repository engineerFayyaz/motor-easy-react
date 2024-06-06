import React from 'react';
import "../../Components/Footer/footer.css";

const Footer = () => {
    return (
        <footer className="mt-4">
            <div className="container-fluid footer_header p-0">
                <div className="row d-flex flex-wrap p-0 m-0">
                    <div className="col-lg-9 p-5">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <h3>About</h3>
                                <div><a href="/About-us">About Us</a></div>
                                <div><a href="contact-us">Contact Us</a></div>
                                <div><a href="/Blogs">Blog</a></div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h3>Our Services</h3>
                                <div className="d-flex flex-column flex-wrap">
                                    <a href="/Used-Car-Warrenty">Used Car Warranty</a>
                                    <a href="/Vehicle-inspections">Vehicle Inspection</a>
                                    <a href="Vehicle-Service">Vehicle Service</a>
                                    <a href="/Road-side">Road Side</a>
                                    <a href="/Battery-Replacement">Battery Replacement</a>
                                    <a href="/Wind-screen-Repair">Windscreen Repair</a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <h3>Pages</h3>
                                <div className="d-flex flex-column flex-wrap">
                                    <a href="/FAQ-page">FAQ</a>
                                    <a href="/testominals">Testimonial</a>
                                    <a href="/Pricing">Pricing</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <h3>Contact Info</h3>
                                <ul className="list-unstyled">
                                    <li><strong>Address:</strong> 123 Motor St, Car City</li>
                                    <li><strong>Phone:</strong> (123) 456-7890</li>
                                    <li><strong>Email:</strong> info@motoreasy.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 p-5 second_footer">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>Social</h3>
                                <ul className="list-unstyled">
                                    <li><strong><i className="fa-brands fa-instagram"></i></strong> Instagram</li>
                                    <li><strong><i className="fa-brands fa-facebook"></i></strong> Facebook</li>
                                    <li><strong><i className="fa-brands fa-twitter"></i></strong> Twitter</li>
                                    <li><strong><i className="fa-brands fa-youtube"></i></strong> Youtube</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
