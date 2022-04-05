import React from "react";
import "./Body.css";
import Banner from "./Banner";
import Items from "./Items";
import Pay from "./Pay";

const Body = () => {
  return (
    <div className="__">
      {/* Banner : 298 / menu : 156 / line : 4 / items : 992 / pay : 470 */}
      <Banner />
      <Items />
      <Pay />
    </div>
  );
};

export default Body;
