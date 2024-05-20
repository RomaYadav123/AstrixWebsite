import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

import "bootstrap/dist/css/bootstrap.min.css";
import carousel1 from "../Assets/Images/carousel1.jpeg";
import carousel2 from "../Assets/Images/carousel2.jpeg";
import carousel7 from "../Assets/Images/carousel7.jpg";
import carousel4 from "../Assets/Images/carousel4.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faLocation, faMap } from "@fortawesome/free-solid-svg-icons";
import "../stylesheet/CarouselPage.css";

function CarouselPage() {
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
      style={{
        marginRight: "10px",
        marginLeft: "10px",
        // width: "50%",
      }}
    >
      <Carousel.Item className='c-width'>
        <Carousel.Caption
          style={{ color: "#fff", fontSize: "42px", fontWeight: 600 }}
        >
          <p>Event Name</p>
          <p>Location</p>
        </Carousel.Caption>
        <img className="caro-img" src={carousel1} alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption
          style={{ color: "#fff", fontSize: "42px", fontWeight: 600 }}
        >
          <p>Event Name</p>
          <p>Location</p>
        </Carousel.Caption>
        <img className="caro-img" src={carousel4} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption
          style={{ color: "#fff", fontSize: "42px", fontWeight: 600 }}
        >
          <p>Event Name</p>
          <p>Location</p>
        </Carousel.Caption>
        <img className="caro-img" src={carousel7} alt="Third slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="caro-img" src={carousel4} alt="Third slide" />
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

export default CarouselPage;
