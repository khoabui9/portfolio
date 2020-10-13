import React from "react";
import { Col, Row, Container } from "reactstrap";
import Lottie from "react-lottie";
import animationData from "../assets/svg/Astronaut/astronaout.json";

const Page404 = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="app  full flex-row align-items-center m-0">
      <Container className="full">
        <Row className="justify-content-center full center m-0">
          <Col md="6">
            <div className="center">
              <Lottie options={defaultOptions} height={400} width={400} />
            </div>
            <div
              className="clearfix center"
              style={{ flexDirection: "column" }}
            >
              <h1 className="float-left display-3 mr-4">404</h1>
              <h4 className="pt-3">Oops! You're lost.</h4>
              <p className="text-muted float-left text-center">
                The page you are looking for was not found.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page404;
