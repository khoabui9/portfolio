import React, { Suspense, useEffect, useState } from "react";
import { Container } from "reactstrap";
import "./containers.scss";
import { IsMobileSize } from "../../helpers/helpers";

import MainContainer from "../../views/ContainerPage";
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));
const DefaultFooter = React.lazy(() => import("./DefaultFooter"));

const DefaultLayout = () => {
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

  function loading() {
    return <div className="animated fadeIn pt-1 text-center">Loading...</div>;
  }

  return (
    <Suspense fallback={loading()}>
    <Container fluid className="appContainer">
        <DefaultHeader IsOnMobileSize={IsOnMobileSize} />
      <div className="appMain">
        <MainContainer />
      </div>
        <DefaultFooter IsOnMobileSize={IsOnMobileSize} />
    </Container>
    </Suspense>

  );
};

export default DefaultLayout;
