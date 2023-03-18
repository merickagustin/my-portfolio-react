import React from "react";
import MyPic from "../img/agustin.jpg";
import classes from "../css/About.module.css";

const startYear = new Date("03/01/2014").getFullYear();
const curYear = new Date().getFullYear();
function About() {
  return (
    <div className="container mt-3 d-flex flex-row gap-5">
      <div className="about-container">
        <h2>About</h2>
        <p>
          My name is
          <strong className={classes.name}>Merick Icy Agustin</strong>, I've
          been in the I.T industry for&nbsp;
          <strong>{curYear - startYear}</strong> years.
        </p>
      </div>
      <div className="about-image">
        <img
          src={MyPic}
          rel="Profile picture of Merick Icy Agustin"
          className={classes.img_profile}
        />
      </div>
    </div>
  );
}

export default About;
