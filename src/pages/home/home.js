import React from "react";
import "./style.css";
import { scrollToSection } from "./functions";
import Section1 from "../../components/section1";
import Experiences from "../../components/experiences";
import Skills from "../../components/skills";
import Education from "../../components/education";
import Portfolio from "../../components/portfolio";
import Introduction from "../../components/introduction";
const Home = () => {
  return (
    <div id="maincontainer" className="maincontainer">
      <div id="navbar">
        <a onClick={() => scrollToSection("section1")}>Adventure</a>
        <a onClick={() => scrollToSection("section2")}>Education</a>
        <a onClick={() => scrollToSection("section3")}>Experiences</a>
        <a onClick={() => scrollToSection("section4")}>Skills</a>
        <a onClick={() => scrollToSection("section5")}>Portfolio</a>
      </div>
      <div>
        <Introduction />
      </div>
      <div style={{ marginLeft: "20%" }}>
        <div id="section1">
          <Section1 />
        </div>
        <div id="section2">
          <Education />
        </div>
        <div id="section3">
          <Experiences />
        </div>
        <div id="section4">
          <Skills />
        </div>
        <div id="section5">
          <Portfolio />
        </div>
      </div>
    </div>
  );
};
export default Home;
