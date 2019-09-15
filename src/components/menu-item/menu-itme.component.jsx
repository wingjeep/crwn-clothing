import React from "react";
import { withRouter } from "react-router-dom";
import "./menut-item.scss";

const MenuItem = ({ title, imageUrl, id, size, linkUrl, history, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(match.url + linkUrl)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default withRouter(MenuItem); //with access location, history, matches
// export default MenuItem;
