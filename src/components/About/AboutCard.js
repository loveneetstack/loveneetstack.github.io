import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Loveneet Chahal </span>
            from <span className="purple"> Punjab, India.</span>
            <br />
            I am currently employed as a Senior Software Developer and Solutions Architect at Evolvous.
            <br />
            I have completed B-Tech in Information Technology from PTU Jalandhar (2009 - 2013).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Surfing Internet
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Driving
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't hate if you can't Love!"{" "}
          </p>
          <footer className="blockquote-footer">Loveneet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
