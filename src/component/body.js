import React from "react";
import "./body.css";
import Banner from "./banner";
import Menu from "./menu";
import Items from "./items";
import Price from "./price";
import Pay from "./pay";

const body = () => {
  return (
    <div class="__">
      {/* Banner : 298 / menu : 156 / line : 4 / items : 992 / price : 100 / pay : 370 */}
      <Banner />
      <Menu />
      <Items />
      <Price />
      <Pay />
    </div>
  );
};

export default body;
