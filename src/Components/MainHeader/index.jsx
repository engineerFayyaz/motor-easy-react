import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../MainHeader/header_index.css";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const { currentUser, signOut } = useAuth();
  const [loggingOut, setLoggingOut] = useState(false);
    const navigate = useNavigate();
  const handleLogout = async () => {
    setLoggingOut(true);
    try {

      await signOut();
      toast.success("You are now logged out");

      setTimeout(() => {
        navigate("/Sign_In")
      }, 1000)
    } catch (error) {
      console.error("Failed to log out", error);
      toast.error("Failed to log out. Please try again later.");
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <>
    <ToastContainer />
      <div className="second_header sticky-top top-0">
        <header>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav text-light mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/About-us">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
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
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
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
                    <a className="nav-link" href="/Pricing">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Blogs">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Contact-us">
                      Contact Us
                    </a>
                  </li>
                  <li
                    className="nav-link ms-4 text-light"
                    style={{ "--i": "1.35s" }}
                  >
                    <i className="fa fa-search mt-2"></i>
                  </li>
                </ul>
              </div>
              <div className="log-sign navbar-nav">
                {currentUser ? (
                  <div className="dropdown">
                    <button
                      className="btn btn-dark user-btn"
                      style={{ backgroundColor: "#003a63" }}
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {currentUser.email.split("@")[0]}{" "}
                      <i className="fa fa-user ms-2 bg-dark p-2 rounded-circle"></i>
                    </button>
                    <ul className="dropdown-menu user-dropdown-menu">
                      <li className="dropdown-link">
                        <Link className="dropdown-item" onClick={handleLogout}>
                          {loggingOut ? "Logging out..." : "Log out"}
                        </Link>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <>
                    <Link to="/Sign_in">
                      <button className="btn-transparent">Log in</button>
                    </Link>
                    <Link to="/Sign_up">
                      <button className="btn-solid">Sign up</button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default MainHeader;
