import React from "react";
import "./items.css";
import Img_com_tuna from "../img/img_com_tuna.png";
import Img_com_tunaavocado from "../img/img_com_tunaavocado.png";
import Img_com_tunabacon from "../img/img_com_tunabacon.png";
import Arw_left from "../img/arw_left.svg";
import Arw_right from "../img/arw_right.svg";

const items = () => {
  const items_data = [
    {
      image: Img_com_tuna,
      class: "img_com_tuna",
      name: "참치 콤보",
      ingredient: "참치 2스쿱, 치즈 2장, 음료",
      price: 5100,
      date: "09.01 ~ 10.31",
    },
    {
      image: Img_com_tunabacon,
      class: "img_com_tunabacon",
      name: "참치+베이컨 콤보",
      ingredient: "참치 2스쿱, 치즈 2장, 베이컨2장 , 음료",
      price: 5100,
      date: "09.01 ~ 10.31",
    },
    {
      image: Img_com_tunaavocado,
      class: "img_com_tunaavocado",
      name: "참치+아보카도 콤보",
      ingredient: "참치 2스쿱, 치즈 2장, 아보카 , 음료",
      price: 6400,
      date: "09.01 ~ 10.31",
    },
  ];
  const imageClick = (e) => {
    console.log("Click " + e);
  };
  return (
    <div class="container_items">
      {items_data.map((data, index) => (
        <div class="item">
          <div
            key={index}
            className={data.div_class}
            onClick={() => imageClick(`${data.name}`)}
          >
            <div>
              <img src={data.image} class={data.class} alt={data.class}></img>
            </div>
            <div class="name">{data.name}</div>
            <div class="ingredient">{data.ingredient}</div>
            {/* 숫자 천 단위 콤마 */}
            <div class="price">
              {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
            <div class="date">{data.date}</div>
          </div>
        </div>
      ))}
      <img src={Arw_left} class="arw_left" alt="arw_left"></img>
      <img src={Arw_right} class="arw_right" alt="arw_right"></img>
    </div>
  );
};

export default items;
