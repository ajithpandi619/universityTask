import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="header border-bottom bg-light mt-0"
    >
      <Container className=" d-flex justify-content-between ">
        <div className="mr-auto">
          <Navbar.Brand className="text-dark fw-bold fs-5" to="/home">
            Sencholan University{" "}
            <span className="fw-semibold text-success fs-3 ">.</span>
          </Navbar.Brand>
        </div>
        {/* Toggle button for mobile view */}
        <Navbar.Toggle className="text-dark" aria-controls="basic-navbar-nav" />
        <div>
          {" "}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto nav">
              <Link to="/" className="text-dark nav_link">
                Home
              </Link>
              <Link className="text-dark nav_link" to="/about">
                About Us
              </Link>
              <Link className="text-dark nav_link" to="/services">
                Services
              </Link>
              <Link className="text-dark nav_link" to="/whysenchola">
                Why Senchola
              </Link>
              <Link className="text-dark nav_link" to="/form">
                Form
              </Link>
              <Link className="text-dark nav_link" to="/contact">
                Contact Us
              </Link>
            </Nav>
            <Link to="/signin">
              {" "}
              <Button
                style={{
                  width: "130px",
                  fontSize: "13px",
                  height: "30px",
                  marginTop: "0px",
                }}
                className="bg-light text-dark border-dark rounded-pill ms-5 fw-bolder"
              >
                Login
              </Button>
            </Link>

            <Link to="/signup">
              <Button
                style={{
                  width: "130px",
                  fontSize: "10px",
                  height: "30px",
                  marginTop: "0px",
                }}
                className="bg-success border-success rounded-pill ms-4 fw-bolder "
              >
                Sign Up
              </Button>
            </Link>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
