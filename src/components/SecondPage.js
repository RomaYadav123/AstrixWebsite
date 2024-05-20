import React from "react";
import { Logo } from "../Assets/svgs";
import Button from "react-bootstrap/Button";
import "../stylesheet/SecondPage.css";
import CarouselPage from "./CarouselPage";
import CarouselSmall from "./CarouselSmall";

import scannerImg from "../Assets/Images/scanner.jpg";

import {
  FontAwesomeIcon,
  faMap,
  faClock,
} from "@fortawesome/react-fontawesome";
import ToggleButton from "../components/ToggleButton";
import { ArrowRight } from "@reacticons/bootstrap-icons";

const SecondPage = () => {
  return (
    <div className="s-parent">
      {/* <div className="background-text">ASTRIX EVENTS</div> */}
      <div className="header-parent">
        <div className="section-one">
          <div className="header-child">
            <Logo />
            <h1 className="logo-title">Astrix .</h1>
          </div>
          <CarouselPage />
        </div>

        {/* <div className="section-two">
          <span id="scroll-text">Collection</span>{" "}
          <span id="scroll-text"> Live: Delhi</span>{" "}
          <span id="scroll-text">Tour Oasis:</span>{" "}
          <span id="scroll-text"> JNS Stadium</span>
        </div> */}
        <div className="section-two" id="scroll-container">
          <div id="scroll-text">
            <div className="rotate-me">
              JNS Stadium:
              <br /> Delhi,
              <br /> Bus Tour :<br />
              Oasis:
              <br />
              Location :<br />
            </div>
          </div>
        </div>

        <div className="section-last">
          <p className="title">Explore your first Event</p>
          <div style={{ color: "#fff" }}>
            <h2 style={{ textAlign: "start" }}>Event Name</h2>
            <div className="side-section">
              <span>
                Venue <span style={{ marginLeft: 10 }}>04/3/2024</span>
                <span style={{ marginLeft: 15 }}>@19:00</span>
              </span>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>

              <div>
                <h3> Artist Lineup</h3>
                <CarouselSmall />
              </div>

              <div className="d-flex last-sec">
                <img className="scanner-img" src={scannerImg} />
                <Button className="cta-wait" variant="warning">
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        </div>
       
      </div>

    
    </div>
  );
};

export default SecondPage;
