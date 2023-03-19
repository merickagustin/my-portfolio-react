import React from "react";
import MyPic from "../img/my_picture.jpg";
import classes from "../css/Home.module.css";

const startYear = new Date("03/01/2014").getFullYear();
const curYear = new Date().getFullYear();
function About() {
  return (
    <div className="container">
      <div className="about-container mt-4 d-flex flex-row gap-4">
        <div className={classes["about-content"]}>
          <h1>About</h1>
          <p>
            My name is&nbsp;
            <strong className={classes.name}>Merick Icy Agustin</strong>, I've
            been in the I.T industry for&nbsp;
            <strong>{curYear - startYear}</strong> years. I graduated at Notre
            Dame of Dadiangas Universisty with a Degree of Bachelor Science in
            Computer Science.
          </p>
          <p>I'm currently exploring new techs in building web applications.</p>
        </div>
        <div className="about-image">
          <img
            src={MyPic}
            rel="Profile picture of Merick Icy Agustin"
            className={classes["img-profile"]}
          />
        </div>
      </div>
      <div className="experience-container mt-4">
        <h1>Experience</h1>
      </div>
    </div>
  );
}

export default About;
