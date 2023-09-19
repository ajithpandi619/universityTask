import React from "react";
import "./service.css";
import { AiOutlineRight } from "react-icons/ai";
import { SiGooglemybusiness } from "react-icons/si";
import { FiBookOpen } from "react-icons/fi";
import {
  BsFillPostageHeartFill,
  BsGraphUpArrow,
  BsHandIndex,
  BsBook,
} from "react-icons/bs";
import { BiLogoAirbnb, BiDollarCircle } from "react-icons/bi";
import { VscGraph } from "react-icons/vsc";
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import headerimg from "../assets/service/heder.png";
import image1 from "../assets/service/img1.png";
import image2 from "../assets/service/img-2.png";
import image3 from "../assets/service/img-3.png";
import image4 from "../assets/service/img-4.png";
import image5 from "../assets/service/img-5.png";
import image6 from "../assets/service/img-6.png";
import image7 from "../assets/service/img-7.png";
import image8 from "../assets/service/img-8.png";
import Footer from "./Footer";

function Service() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide mb-5"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={headerimg} className="img-fluid" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={headerimg} alt="..." />
          </div>
          <div class="carousel-item">
            <img src={headerimg} alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container">
        <div className="heading">
          <div className="circle1"></div>
          <FiBookOpen className="book" />

          <h1>OUR SERVICES</h1>
          <p className="par">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            laudantium maiores. rerum repellendus .
          </p>
        </div>
        <div className="row topsec mb-5">
          <div className="col-lg-4 col-lg-4 col-12 box1">
            <img src={image1} alt="" />
            <h5>Website Desigin & Development</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odit tempore blanditiis excepturi quae autem architecto mollitia
              aspernatur eos voluptates.
            </p>
            <a href="#" className="viewmore">
              <p className="text-end ">
                view more <AiOutlineRight />
              </p>
            </a>
          </div>
          <div className="col-lg-4 col-lg-4 col-12 box1">
            <img src={image2} alt="" />
            <h5>Logo & Banner</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odit tempore blanditiis excepturi quae autem architecto mollitia
              aspernatur eos voluptates.
            </p>
            <a href="#" className="viewmore">
              <p className="text-end ">
                view more <AiOutlineRight />
              </p>
            </a>
          </div>
          <div className="col-lg-4 col-lg-4 col-12 box1">
            <img src={image3} alt="" />
            <h5>Android App Development</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odit tempore blanditiis excepturi quae autem architecto mollitia
              aspernatur eos voluptates.
            </p>
            <a href="#" className="viewmore">
              <p className="text-end ">
                view more <AiOutlineRight />
              </p>
            </a>
          </div>
        </div>
        <div className="row topsec">
          <div className="col-lg-4 col-lg-4 col-lg-12 box1">
            <img src={image4} alt="" />
            <h5>Wordpress Development</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odit tempore blanditiis excepturi quae autem architecto mollitia
              aspernatur eos voluptates.
            </p>
            <a href="#" className="viewmore">
              <p className="text-end ">
                view more <AiOutlineRight />
              </p>
            </a>
          </div>
          <div className="col-lg-4 col-lg-4 col-lg-12 box1">
            <img src={image5} alt="" />
            <h5>Content Marketing</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odit tempore blanditiis excepturi quae autem architecto mollitia
              aspernatur eos voluptates.
            </p>
            <a href="#" className="viewmore">
              <p className="text-end ">
                view more <AiOutlineRight />
              </p>
            </a>
          </div>
          <div className="col-lg-4 col-lg-4 col-lg-12 box1">
            <img src={image6} alt="" />
            <h5>IOS App Development</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odit tempore blanditiis excepturi quae autem architecto mollitia
              aspernatur eos voluptates.
            </p>
            <a href="#" className="viewmore">
              <p className="text-end ">
                view more <AiOutlineRight />
              </p>
            </a>
          </div>
        </div>
        <div className="btncont mb-5">
          <button className="btnviewmore">View More Services</button>
        </div>
      </div>
      <div className="section mt-5">
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-8 col-md-8 col-12">
              <div className="imgsec1">
                <img src={image7} className="img-fluid" alt="" />
              </div>
              <div className="topbox">
                <div className="iconbox">
                  <div>
                    <BiLogoAirbnb className="icon1 icon" />
                  </div>{" "}
                  <div>
                    <h5> Logo Design</h5>
                  </div>
                </div>
                <div className="iconbox">
                  <BsFillPostageHeartFill className="icon2 icon" />{" "}
                  <h5> Poster Design</h5>
                </div>

                <div className="iconbox">
                  <SiGooglemybusiness className="icon3 icon" />
                  <h5>Businees Card</h5>
                </div>
              </div>
              <div className="bottombox">
                <div className="iconbox">
                  <BsGraphUpArrow className="icon1 icon" />
                  <h5>Product Marketing</h5>
                </div>
                <div className="iconbox">
                  <BiDollarCircle className="icon2 icon" />
                  <h5>Infuluencer Marketing</h5>
                </div>

                <div className="iconbox">
                  <VscGraph className="icon3 icon" />
                  <h5>Content Marketing</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 ">
              <div className="contactbox">
                <h5 className="green">WHAT WE DO</h5>
                <h2>We Help Companies</h2>
                <h2>Scall With Vetted,</h2>
                <h2>Expert Talent &</h2>
                <h2>Resources</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. ,
                  facilis dicta saepe quibusdam nulla sed impedit assumenda
                  dolorum fugit enim aliquam, minima sit.
                </p>
                <button className="contactbtn">Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container-fluid lsection">
          <div className="heading mt-5">
            <h1>A BETTER WAY TO SCALE YOUR TEAM</h1>
            <p className="parlast">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
              eaque veritatis vitae, eum odio culpa optio consectetur ducimus
              molestias,
            </p>
          </div>
          <div
            className="row lastsecion img-fluid"
            style={{ backgroundImage: `url(${image8})` }}
          >
            <div className="col-lg-4 col-md-4 col-12 bbox">
              <div className="lbox1 lbox">
                <RiCustomerServiceFill className="licons licon1" />
                <h4>Talk With Our </h4>
                <h4>Specialists</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Provident autem cum vitae delectus
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 bbox">
              <div className="lbox2 lbox">
                <IoMdContact className="licons licon2" />
                <h4>Talk With Our </h4>
                <h4>Specialists</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Provident autem cum vitae delectus
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 bbox">
              <div className="lbox3 lbox">
                <BsHandIndex className="licons licon3" />
                <h4>Talk With Our </h4>
                <h4>Specialists</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Provident autem cum vitae delectus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Service;
