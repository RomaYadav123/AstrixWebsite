import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../stylesheet/CarouselSmall.css";
import "bootstrap/dist/css/bootstrap.min.css";
import carousel10 from "../Assets/Images/carousel10.jpg";
import carousel11 from "../Assets/Images/carousel11.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faLocation, faMap } from "@fortawesome/free-solid-svg-icons";

function CarouselSmall() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAutoplay = () => {
    // Check if the active index is at the last slide
    if (activeIndex === Carousel.Item.length - 1) {
      // Reset to the first slide if at the end
      setActiveIndex(0);
    } else {
      // Otherwise, increment the active index to move to the next slide
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Effect to trigger autoplay every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(handleAutoplay, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSelect = (selectedIndex, event) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="parent-carousel">
      <Carousel
        className="carousel-parent"
        data-bs-theme="dark"
        activeIndex={activeIndex}
        onSelect={handleSelect}
        interval={null}
      >
        <Carousel.Item>
          <img
            className="d-block w-40 small-img"
            src={carousel10}
            alt="First slide"
          />
          <Carousel.Caption
            style={{ color: "#fff", fontSize: "12px", fontWeight: 600 }}
          >
            <p>Event Name</p>
            <p>Location</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-40 small-img"
            src={carousel11}
            alt="Second slide"
          />
          <Carousel.Caption
            style={{ color: "#fff", fontSize: "12px", fontWeight: 600 }}
          >
            <p>Event Name</p>
            <p>Location</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-40 small-img"
            src={carousel10}
            alt="Third slide"
          />
          <Carousel.Caption
            style={{ color: "#fff", fontSize: "12px", fontWeight: 600 }}
          >
            <p>Event Name</p>
            <p>Location</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselSmall;
