import React from "react";
import navigations from "../../data/nav";

import { history } from "../../utils/history";

type HeaderProps = {
  IsOnMobileSize: boolean
}

type NavigationItemProps = {
  navigation: {
    name: string,
    url: string
  }
}

const Header = (props : HeaderProps) => {
  const { IsOnMobileSize } = props;
  return (
    <header className="appHeader">
      <div className="appHeader_container">
        <div
          className="appHeader_logo pos-absolute center pointer"
          onClick={() => history.push("/")}
        >
          <p>
            <span>K</span>
            <span>B</span>
          </p>
        </div>
        <div
          className="appHeader_nav pos-absolute center"
          style={{ justifyContent: IsOnMobileSize ? "flex-end" : "center" }}
        >
          <Navigations navigations={navigations} />
        </div>
        {!IsOnMobileSize && (
          <div
            onClick={() => history.push("/contact")}
            className="appHeader_contact pos-absolute pointer"
          >
            <p>say hi.</p>
          </div>
        )}
      </div>
    </header>
  );
};



const Navigations = (props) => {
  const { navigations } = props;
  return (
    <div className="appHeader_nav__list">
      {navigations &&
        navigations.items.map((item, i) => (
          <NavigationItem key={i} navigation={item} />
        ))}
    </div>
  );
};

const NavigationItem = (props : NavigationItemProps) => {
  const { navigation } = props;

  function handleItemClick() {
    history.push(`${navigation.url}`);
  }

  return (
    <div onClick={handleItemClick} className="appHeader_nav__item pointer">
      <p>{navigation.name}</p>
    </div>
  );
};

export default Header;
