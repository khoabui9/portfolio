import React from "react";
import { social } from "../../data/socialmedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./social.scss";
const SocialList = () => {
  return (
    <div className="contact_social_list">
      {social.map((item, idx) => (
        <div key={idx} className="contact_item pointer">
          <a className="color-gray" target="blank" href={item.url}>
            <FontAwesomeIcon icon={item.icon} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialList;
