import React, { Suspense } from "react";
import { Row } from "reactstrap";
import { Route, Switch, Router } from "react-router-dom";
import routes from "../routes";
import { history } from "../utils/history";

const ContainerPage = () => {

  function loading() {
    return <div className="animated fadeIn pt-1 text-center">Loading...</div>;
  }

  return (
    <Row className="h-100 full m-0 pos-rel" style={{ flexDirection: "column" }}>
      <Suspense fallback={loading()}>
        <Router history={history}>
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
        </Router>
      </Suspense>
    </Row>
  );
};

export default ContainerPage;
