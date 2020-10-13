import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import "./styles/about.scss";
import { about } from "../../data/portfolio";
import "./styles/about.scss";
import { RevealTextOp } from "./styled/revealImage";
import { IsMobileSize } from "../../helpers/helpers";

const About = () => {
  const [revealText, revealTextOp] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [IsOnMobileSize, setIsOnMobile] = useState(IsMobileSize());

  useEffect(() => {
    // initiate the event handler
    window.addEventListener("resize", windowResize);

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener("resize", windowResize);
    };
  });

  function windowResize() {
    setIsOnMobile(IsMobileSize());
  }

  useEffect(() => {
    onRevealText();
  });

  useEffect(() => {
    const interval = setInterval(() => {
      onChangeText();
    }, 5000);
    return () => clearInterval(interval);
  });

  function onChangeText() {
    let current = currentText + 1;
    if (current > 1) current = 0;
    setCurrentText(current);
  }

  function onRevealText() {
    revealTextOp(true);
  }

  return (
    <div className={`about_outer  ${IsOnMobileSize && "center"}`}>
      <Row className="full pos-rel m-0">
        <Col md="3" sm="12" lg="3">
          <div className="about">
            <div className="about_textList pos-rel">
              {about.map((text, i) => (
                <RevealTextOp
                  key={i}
                  pose={revealText && currentText === i ? "open" : "closed"}
                >
                  <TextItem text={text} />
                </RevealTextOp>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const TextItem = (props) => {
  const { text } = props;

  return (
    <div className="pos-absolute about_text">
      <p>{text}</p>
    </div>
  );
};

export default About;
