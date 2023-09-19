import React from "react";
import "./Form.css";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import Footer from "./Footer";

function FormFile() {
  return (
    <div>
      <Container
        className="Form_Container"
        style={{
          maxWidth: "1200px",
          marginBottom: "100px",
          height: "920px",
        }}
      >
        <h4 className="text-center fw-semibold text-success pt-5">
          SENCHOLA UNIVERSITY
        </h4>
        <h6 className="fw-bold text-center mt-2">
          <u>U</u>SER FORM
        </h6>
        <div
          style={{ marginTop: "40px", marginLeft: "100px" }}
          className="forms"
        >
          <Row>
            <Col xs={12} md={6}>
              <div>
                <label htmlFor="FirstName">
                  First Name <span className="text-danger">*</span>
                </label>
              </div>
              <input
                className="form_input mt-2"
                type="text"
                name="FirstName"
                placeholder="Enter your name"
              ></input>
            </Col>
            <Col xs={12} md={6}>
              <div>
                <label htmlFor="LastName">
                  Last Name <span className="text-danger"> *</span>
                </label>
              </div>
              <input
                className="form_input mt-2"
                type="text"
                name="LastName"
                placeholder="Enter your name"
              ></input>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} md={6}>
              <div>
                <label htmlFor="EducationQualification">
                  Education Qualification{" "}
                  <span className="text-danger"> *</span>
                </label>
              </div>
              <Form.Select
                style={{
                  padding: "8px",
                  height: "40px",
                  width: "400px",
                  fontSize: "10px",
                }}
                className="form-select mt-2 fw-bolder ps-3"
              >
                <option> --Select your Degree--</option>
              </Form.Select>
            </Col>
            <Col xs={12} md={6}>
              <div>
                <label htmlFor="FatherName">
                  Father Name <span className="text-danger"> *</span>
                </label>
              </div>
              <input
                className="form_input mt-2"
                type="text"
                name="FatherName"
                placeholder="Enter your name"
              ></input>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} md={6}>
              <div>
                <label htmlFor="PhoneNumber">
                  Phone Number <span className="text-danger"> *</span>
                </label>
              </div>
              <input
                className="form_input mt-2"
                type="tel"
                name="PhoneNumber"
                placeholder="Enter your number"
              ></input>
            </Col>
            <Col xs={12} md={6}>
              <div>
                <label htmlFor="email">
                  Enter your email<span className="text-danger"> *</span>
                </label>
              </div>
              <input
                className="form_input mt-2"
                type="email"
                name="email"
                placeholder="Enter your email"
              ></input>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col
              style={{ marginLeft: "0px", marginTop: "0px", height: "80px" }}
            >
              <div>
                <label htmlFor="email">
                  Date of Birth (DOB)<span className="text-danger"> *</span>
                </label>
              </div>
              <div
                style={{
                  padding: "5px",
                  backgroundColor: "white",
                  width: "400px",
                  borderRadius: "5px",
                  boxShadow:
                    "0 7px 15px 0 rgba(0, 0, 0, 0.13), 0 1px 4px 0 rgba(0, 0, 0, 0.11)",
                }}
                className="form_input mt-2 h-50"
              >
                <button
                  style={{
                    width: "100px",
                    border: "1px solid grey",
                    fontSize: "10px",
                    marginLeft: "20px",
                    padding: "4px",
                  }}
                  className="fw-semibold"
                >
                  Select DOB
                </button>
              </div>
            </Col>

            <Col xs={12} md={6}>
              <div>
                <label htmlFor="BatchNo">
                  Your Batch no<span className="text-danger"> *</span>
                </label>
              </div>
              <Form.Select
                style={{
                  padding: "8px",
                  height: "40px",
                  width: "400px",
                  fontSize: "10px",
                }}
                className="form-select mt-2 fw-bolder ps-3"
              >
                <option> --Select your Batch--</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="mt-0">
            <Col xs={12} md={6}>
              <div>
                <label htmlFor="Domain">
                  Your Domain<span className="text-danger"> *</span>
                </label>
              </div>
              <Form.Select
                style={{
                  padding: "8px",
                  height: "40px",
                  width: "400px",
                  fontSize: "10px",
                }}
                className="form-select mt-2 fw-bolder ps-3 "
              >
                <option>--Select your Domain--</option>
              </Form.Select>
            </Col>
            <Col style={{ marginLeft: "0px", marginTop: "0", height: "80px" }}>
              <div>
                <label htmlFor="email">
                  Upload KYC Documents<span className="text-danger"> *</span>
                </label>
              </div>
              <div
                style={{
                  padding: "5px",
                  backgroundColor: "white",
                  width: "400px",
                  borderRadius: "5px",
                  boxShadow:
                    "0 7px 15px 0 rgba(0, 0, 0, 0.13), 0 1px 4px 0 rgba(0, 0, 0, 0.11)",
                }}
                className="form_input mt-2 h-50"
              >
                <span
                  style={{
                    fontSize: "10px",
                    marginLeft: "20px",
                    color: "black",
                  }}
                >
                  Choose PDF File
                </span>
                <button
                  style={{
                    width: "100px",
                    border: "1px solid grey",
                    padding: "2px",
                    fontSize: "10px",
                    marginLeft: "170px",
                  }}
                  className="fw-semibold"
                >
                  Upload File
                </button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              style={{ marginLeft: "0px", height: "80px", marginTop: "10px" }}
            >
              <div>
                <label htmlFor="email">
                  Upload Resume<span className="text-danger"> *</span>
                </label>
              </div>
              <div
                style={{
                  padding: "5px",
                  backgroundColor: "white",
                  width: "400px",
                  borderRadius: "5px",
                  boxShadow:
                    "0 7px 15px 0 rgba(0, 0, 0, 0.13), 0 1px 4px 0 rgba(0, 0, 0, 0.11)",
                }}
                className="form_input mt-2 h-50"
              >
                <span
                  style={{
                    fontSize: "10px",
                    marginLeft: "20px",
                    color: "black",
                  }}
                >
                  Choose File
                </span>
                <button
                  style={{
                    width: "100px",
                    border: "1px solid grey",
                    padding: "2px",
                    fontSize: "10px",
                    marginLeft: "180px",
                  }}
                  className="fw-semibold"
                >
                  Upload File
                </button>
              </div>
            </Col>
          </Row>
          <Button
            style={{ width: "60%", marginTop: "40px", marginLeft: "180px" }}
            className="bg-success rounded-pill border-0 fw-semibold"
          >
            REGISTER
          </Button>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default FormFile;
