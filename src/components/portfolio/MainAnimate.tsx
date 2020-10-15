import React from "react";
import { Col } from "reactstrap";
import "./styles/animate.scss";
// import mainImage from "../../assets/images/main.jpg";
// import { RevealDiv } from "./styled/revealImage";
import About from "./About";
import Lottie from "react-lottie";
import animationData from "../../assets/svg/GrowthColoured/GrowthAnimation.json";

const MainAnimate = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <React.Fragment>
      <Col className="mainAnimate_outer center" xs="12" sm="12" md="6">
        <div className="mainAnimate_col">
          <div className="mainAnimate_imageContainer full center">
            <div className="mainAnimate_image pos-rel center">
              <Lottie options={defaultOptions} />
            </div>
          </div>
        </div>
      </Col>
      <About />
    </React.Fragment>
  );
};

export default MainAnimate;
