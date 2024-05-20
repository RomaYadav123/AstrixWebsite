import React from "react";
import banner1 from "../Assets/Images/banner1.jpg";
import banner2 from "../Assets/Images/banner2.jpg";
import banner3 from "../Assets/Images/banner3.jpg";
import banner4 from "../Assets/Images/banner4.jpg";
import "../stylesheet/TextItem.css";

const TextItem = () => {
  return (
    <div
      onClick={() => {
        console.log("clicke");
        window.scroll({
          top: document.body.offsetHeight,
          left: 0,
          behavior: "smooth",
        });
      }}
      className="text-item-container text-mob text-tab"
    >
      <div className="text-item">
        <div className="left-content content1">
          <p className="text-style">WE</p>
          <img className="banners" src={banner1} alt="banner1" />
        </div>
        <div className="right-content animate-left">
          <p className="text-style ">ORGANIZE THE</p>
        </div>
      </div>

      <div className="text-item">
        <div className="left-content content2">
          <p className="text-style ">CONNECTION</p>
          <img className="banners" src={banner2} alt="banner2" />
        </div>
        <div className="right-content animate-left"></div>
      </div>

      <div className="text-item">
        <div className="left-content content2">
          <img className="banners" src={banner3} alt="banner2" />
          <p className="text-style">BETWEEN</p>
        </div>
        <div className="right-content animate-left">
          <img className="banners" src={banner4} alt="banner2" />
          <p className="text-style">MUSIC</p>
        </div>
      </div>

      <div className="text-item">
        <div className="left-content content2">
          <p className="text-style">ARTIST</p>
          <img className="banners" src={banner2} alt="banner2" />
        </div>
        <div className="right-content animate-left">
          <p className="text-style">CULTURE</p>
          <img className="banners" src={banner1} alt="banner1" />
        </div>
      </div>

      <div className="text-item">
        <div className="left-content content2">
          <img className="banners" src={banner2} alt="banner2" />
          <p className="text-style">ART</p>
        </div>
        <div className="right-content animate-left">
          <img className="banners" src={banner2} alt="banner2" />
          <p className="text-style">& COLLECTIONS</p>
        </div>
      </div>
    </div>
  );
};

export default TextItem;
