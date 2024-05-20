import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

import "bootstrap/dist/css/bootstrap.min.css";
import carousel6 from "../Assets/Images/carousel6.jpg";
import carousel7 from "../Assets/Images/carousel7.jpg";
import carousel8 from "../Assets/Images/carousel8.jpg";
import carousel9 from "../Assets/Images/carousel9.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faLocation, faMap } from "@fortawesome/free-solid-svg-icons";

function CarouselSecond() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle automatic slide transition
  const handleAutoplay = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 4); // Wrap around at the end
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
    <Carousel
      data-bs-theme="dark"
      activeIndex={activeIndex}
      onSelect={handleSelect}
      interval={null}
      style={{ marginRight: "10px", marginLeft: "10px" }}
    >
      <Carousel.Item>
        <img className="d-block w-70" src={carousel6} alt="First slide" />
        <Carousel.Caption
          style={{ color: "#fff", fontSize: "42px", fontWeight: 600 }}
        >
          <p>Event Name</p>
          <p>Location</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-70" src={carousel7} alt="Second slide" />
        <Carousel.Caption
          style={{ color: "#fff", fontSize: "42px", fontWeight: 600 }}
        >
          <p>Event Name</p>
          <p>Location</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-70" src={carousel8} alt="Third slide" />
        <Carousel.Caption
          style={{ color: "#fff", fontSize: "42px", fontWeight: 600 }}
        >
          <p>Event Name</p>
          <p>Location</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-70" src={carousel9} alt="Third slide" />
        <Carousel.Caption
          style={{ color: "#fff", fontSize: "42px", fontWeight: 600 }}
        >
          <p>Event Name</p>
          <p>Location</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSecond;
