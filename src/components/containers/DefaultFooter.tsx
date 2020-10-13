import React from "react";
import SocialList from "../social/SocialList";
import { history } from "../../utils/history";

const Footer = (props) => {
  const { IsOnMobileSize } = props;

  return (
    <footer className="appFooter pos-rel">
      <div className="appFooter_nav pos-absolute center">
        <SocialList />
      </div>

      <div
        onClick={() => history.push("/contact")}
        className="appHeader_contact pos-absolute pointer"
      >
        {IsOnMobileSize ? <p>say hi.</p> : <p className="color-gray">....</p>}
      </div>
    </footer>
  );
};

export default Footer;
