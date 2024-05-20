import React from "react";
import "../stylesheet/FirstPage.css";
import { Logo } from "../Assets/svgs";
import TextItem from "./TextItem";

const FirstPage = () => {
  return (
    <div className="a-parent">
      <div className="header">
        <Logo />
        <h1>Astrix.</h1>
      </div>
      <TextItem />
    </div>
  );
};

export default FirstPage;
