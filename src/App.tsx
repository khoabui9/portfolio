import React from "react";
import Loadable from "react-loadable";
import { Route, Router, Switch } from "react-router-dom";
import { history } from "./utils/history";

import "./App.scss";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

const Page404 = Loadable({
  loader: () => import("./views/404"),
  loading,
});

const DefaultLayout = Loadable({
  loader: () => import("./components/containers/DefaultLayout"),
  loading,
  delay: 300,
});

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/404" name="Page 404" component={Page404} />
        <Route path="/" name="Home" component={DefaultLayout} />
      </Switch>
    </Router>
  );
}

export default App;
