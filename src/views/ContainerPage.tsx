import React, { Suspense } from "react";
import { Row } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import routes from "../routes";

// import About from "../components/portfolio/About";
// import MainAnimate from "../components/portfolio/MainAnimate";

// const checkPathname = (pathname) => {
//   switch (pathname) {
//     case "/":
//       return 1;
//     case "/portfolio":
//       return 2;
//     case "/contact":
//       return 3;
//     default:
//       return 1;
//   }
// };

const ContainerPage = () => {
  // const location = useLocation();
  // const [currentState, setCurrent] = useState(1);

  // useEffect(() => {
  //   console.log("current pathname:", location.pathname);
  //   setCurrentState(location.pathname);
  // }, [location]);

  // function setCurrentState(path) {
  //   setCurrent(checkPathname(path));
  // }

  function loading() {
    return <div className="animated fadeIn pt-1 text-center">Loading...</div>;
  }

  return (
    <Row className="h-100 full m-0 pos-rel" style={{ flexDirection: "column" }}>
      <Suspense fallback={loading()}>
        <Switch>
          {routes.map((route, idx) => {
            return route.component ? (
              <Route
                exact={route.exact}
                key={idx}
                path={route.path}
                name={route.name}
                render={(props) => <route.component {...props} />}
              />
            ) : null;
          })}
        </Switch>
      </Suspense>
    </Row>
  );
};

export default ContainerPage;
