import React from 'react';
import "../../Components/Footer/footer.css";

const Footer = () => {
    return (
        <footer className="mt-4">
            <div className="container-fluid footer_header">
                <div className="row d-flex flex-wrap">
                    <div className="col-lg-9 p-5">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <h3>About</h3>
                                <div><a href="about_us.html">About Us</a></div>
                                <div><a href="contact_us.html">Contact Us</a></div>
                                <div><a href="Blogs.html">Blog</a></div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h3>Our Services</h3>
                                <div className="d-flex flex-column flex-wrap">
                                    <a href="/service-car-warranty.html">Used Car Warranty</a>
                                    <a href="/service-inspection.html">Vehicle Inspection</a>
                                    <a href="Vehicle-Service.html">Vehicle Service</a>
                                    <a href="Road-side.html">Road Side</a>
                                    <a href="Battery-Replacement.html">Battery Replacement</a>
                                    <a href="Windscreen-Repair.html">Windscreen Repair</a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <h3>Pages</h3>
                                <div className="d-flex flex-column flex-wrap">
                                    <a href="FAQs.html">FAQ</a>
                                    <a href="testimonial.html">Testimonial</a>
                                    <a href="Pricing.html">Pricing</a>
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
