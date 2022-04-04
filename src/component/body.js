import React from "react";
import "./body.css";
import Banner from "./banner";
import Menu from "./menu";
import img_bar_yellow from "../img/img_bar_yellow.svg";

const body = () => {
  return (
    <div class="__">
      {/* Banner : 298 / menu : 156 / line : 4 / items : 992 / price : 100 / pay : 370 */}
      <Banner />
      <Menu />
      <img
        style={{
          width: "120px",
          height: "12px",
        }}
        src={img_bar_yellow}
        class="img_bar_yellow"
        alt="img_bar_yellow"
      ></img>
      <div class="line_divide"></div>
    </div>
  );
};

export default body;
