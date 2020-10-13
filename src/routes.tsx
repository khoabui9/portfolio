import React from "react";

const MainAnimate = React.lazy(
  () => import("./components/portfolio/MainAnimate")
);

const Portfolio = React.lazy(() => import("./components/portfolio/Portfolio"));
const Contact = React.lazy(() => import("./components/contact/Contact"));
const FourZeroFour = React.lazy(() => import("./views/404"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home", component: MainAnimate },
  { path: "/portfolio", exact: true, name: "Portfolio", component: Portfolio },
  { path: "/contact", exact: true, name: "Contact", component: Contact },
  { component: FourZeroFour },
];

export default routes;
