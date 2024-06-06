import React from "react";
import "../MainHeader/header_index.css";

const MainHeader = () => {
    return (
        <>
            <div className="second_header sticky-top top-0">
                <header>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav text-light mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/About-us">About Us</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Services
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-link">
                                                <a href="/Used-Car-Warrenty">Used Car warranty</a>
                                            </li>
                                            <li className="dropdown-link">
                                                <a href="/Vehicle-inspections">Vehicle inspection</a>
                                            </li>
                                            <li className="dropdown-link">
                                                <a href="/Vehicle-service">Vehicle Service</a>
                                            </li>
                                            <li className="dropdown-link">
                                                <a href="/Road-side">Road Side</a>
                                            </li>
                                            <li className="dropdown-link">
                                                <a href="/Battery-Replacement">Battery Replacement</a>
                                            </li>
                                            <li className="dropdown-link">
                                                <a href="/wind-screen-Repair">Windscreen Repair</a>
                                            </li>
                                            <li className="dropdown-link">
                                                {/* <a href="/Look For Services/other_service.html">other service</a> */}
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Pages
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-link">
                                                <a href="/Faq-Page">Faq</a>
                                            </li>
                                            <li className="dropdown-link">
                                                <a href="/Testominals">Testimonial</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/Pricing">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/Blogs">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/Contact-us">Contact Us</a>
                                    </li>
                                    <li className="nav-link ms-4 text-light" style={{ '--i': '1.35s' }}>
                                        <i className="fa fa-search mt-2"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="log-sign">
                                <a href="/Sign_in"><button className="btn-transparent">Log in</button></a>
                                <a href="/Sign_up"><button className="btn-solid">Sign up</button></a>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    );
}
export default MainHeader;