import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="Contact">
      <div
        className="main_box col-11 d-flex col-md-6"
        style={{ marginBottom: "100px" }}
      >
        <div className="text_inner ">
          <h1 className="head fw-bold">CONTACT FROM</h1>
          <div className="map col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10326.680744622643!2d106.81098058288838!3d-6.189725853624469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f69dbf3077c5%3A0x617afe28c3769a0f!2sKebon%20Kacang%2C%20Tanah%20Abang%2C%20Central%20Jakarta%20City%2C%20Jakarta%2C%20Indonesia!5e0!3m2!1sen!2sin!4v1694591282503!5m2!1sen!2sin"></iframe>
          </div>
          <div className="left">
            <form action="#">
              <h4>Get in Touch</h4>
              <h6
                className="text-body-secondary"
                style={{ margin: "15px 0px " }}
              >
                Enter your message to reach out
              </h6>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label>
                  Email address <span>*</span>{" "}
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  Phone number <span>*</span>{" "}
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter your number"
                  required
                />
              </div>
              <div className="form-group">
                <label>Comment or Message</label>
                <div></div>
                <textarea
                  style={{ width: "380px" }}
                  className="p-3  "
                  name="comments"
                  id="comments"
                  cols="50"
                  rows="4"
                  placeholder="Enter your comments"
                ></textarea>
              </div>
              <button className="btn text-bg-success fw-bold">SEND</button>
              <hr className="line" />
              <div className="row">
                <div className="col d-flex ">
                  <FontAwesomeIcon icon={faPhoneVolume} className="icon" />
                  <h6>
                    PHONE <br />
                    <a href="#" className="text-success fw-bold ">
                      +91 96677 87882
                    </a>
                  </h6>
                </div>
                <div className="col d-flex ">
                  <FontAwesomeIcon icon={faEnvelopeOpenText} className="icon" />
                  <h6>
                    {" "}
                    EMAIL
                    <br />
                    <div className="text-success fw-bold">
                      info@marcc.com.au
                    </div>
                  </h6>
                </div>
                <div className="col d-flex ">
                  <FontAwesomeIcon icon={faLocationDot} className="icon" />
                  <h6>
                    ADDRESS <br />
                    <div className="text-success fw-bold ">
                      {" "}
                      The Estate ,8th Floor ,Dickenson Read,Bangalore-560042
                    </div>
                  </h6>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="Green col-1 bg-success"></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
