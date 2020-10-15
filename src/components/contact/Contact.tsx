import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { social } from "../../data/socialmedia";
import { IsMobileSize } from "../../helpers/helpers";
import Fade from "react-reveal/Fade";
import TransitionGroup from "react-transition-group/TransitionGroup";

import "./contact.scss";

const Contact = () => {
  const [IsOnMobileSize, setIsOnMobile] = useState(IsMobileSize());
  let groupProps = {
    appear: true,
    enter: false,
    exit: false,
  };
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

  return (
    <Row className="full m-0">
      <Col sm="12" className={`contact_outer full center`}>
      <TransitionGroup {...groupProps}>
        <div className="contact">
        <Fade bottom>
          <div className="contact-header">
            <h2>send me "anything"</h2>
            <p className="color-gray">drop me a message</p>
          </div>
          </Fade>
          <Fade bottom>
          <div className="contact-name">
            <h3>Khoa Bui</h3>
          </div>
          </Fade>
          <div className="contact-content">
          <Fade bottom>
            <div className="contact-email">
              <p className="color-gray">email:</p>
              <h5>
                <a href="mailto:khoabui2497@gmail.com">khoabui2497@gmail.com</a>
              </h5>
            </div>
            </Fade>
            <Fade bottom>
            <div className="contact-social">
              <p className="color-gray">or check out my:</p>
              <div
                className="contact-social-list"
                style={{ flexDirection: IsOnMobileSize ? "column" : "row" }}
              >
                {social.map((item, idx) => (
                  <h5 key={idx}>
                    <a target="blank" href={item.url}>
                      {item.name}
                    </a>
                  </h5>
                ))}
              </div>
            </div>
            </Fade>
          </div>
        </div>
        </TransitionGroup>
      </Col>
    </Row>
  );
};

export default Contact;
