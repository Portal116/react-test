import React from "react";
import "./Body.scss";
import Banner from "./Banner";
import Items from "./Items";

const Body = () => {
  return (
    <div className="__">
      {/* Banner : 298 / menu : 156 / line : 4 / items : 992 / pay : 470 */}
      <Banner />
      <Items />
    </div>
  );
};

export default Body;
