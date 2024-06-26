import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase";
import { toast } from "react-toastify";
import TopHeader from "../../Components/TopHeader";
import MainHeader from "../../Components/MainHeader";
import "../../Pages/Contactus/Contactus.css";
import Footer from "../../Components/Footer";

function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), formData);
      toast.success("Message submitted successfully");
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Error submitting message");
    }
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <TopHeader />
      <MainHeader />
      <div className="bg-info container contact4 overflow-hidden position-relative">
        <div className="row no-gutters mt-5 mb-5">
          <div className="container">
            <div className="col-lg-6 contact-box mb-4 mb-md-0">
              <div className="">
                <h1 className="title font-weight-light text-white mt-2">
                  Contact Us
                </h1>
                <form className="mt-3" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control text-blue"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control text-blue"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="email address"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <textarea
                          className="form-control text-blue"
                          rows={3}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="message"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 d-flex align-items-center mt-2">
                      <button
                        type="submit"
                        className="btn bg-white text-inverse px-3 py-2"
                      >
                        <span> Submit</span>
                      </button>
                      <span className="ml-auto text-white align-self-center">
                        <i className="icon-phone mr-2" />
                        251 546 9442
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 right-image p-r-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619902.0054433027!2d-122.68851282163044!3d37.534535608111824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1507725785789"
              width="100%"
              height={538}
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen=""
              data-aos="fade-left"
              data-aos-duration={3000}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
