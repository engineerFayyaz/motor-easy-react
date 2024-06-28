import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
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
                    <a className="nav-link" href="/admin/Dashboard">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/admin/AddPost">
                      Add Post
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/admin/ManageUsers">
                      Manage Users
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/admin/Appointments">
                    Appointments Data
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/admin/AddPost">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/admin/Upload-banners">
                      Upload Banners
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/admin/Message-Request">
                      Contact Request
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/admin/Add-Pricings">
                      Add Pricings 
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/admin/Create-Coupans">
                      Create Coupans
                    </a>
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

export default AdminHeader;
