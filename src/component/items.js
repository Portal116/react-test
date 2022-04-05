import React, { useState } from "react";
import "./Items.scss";
import Menu from "./Menu";
import Img_com_tuna from "../img/img_com_tuna.png";
import Img_com_tunaavocado from "../img/img_com_tunaavocado.png";
import Img_com_tunabacon from "../img/img_com_tunabacon.png";
import Arw_left from "../img/arw_left.svg";
import Arw_left_yellow from "../img/arw_left_yellow.svg";
import Arw_right from "../img/arw_right.svg";
import Arw_right_yellow from "../img/arw_right_yellow.svg";
import Pay from "./Pay";

const Items = () => {
  const [index, setIndex] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);
  const [selected, setSelected] = useState("");
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
  // const imageClick = (e) => {
  //   console.log("Click " + e);
  // };
  return (
    <div>
      <Menu
        changedIndex={index}
        setIndex={setIndex}
        setItemsCount={setItemsCount}
      />
      <div className="line_divide"></div>
      <div className="container_items">
        {items_data.map((data, index) => (
          <div className="item" key={index}>
            <div className={data.div_class} onClick={() => setSelected(data)}>
              <div>
                <img
                  src={data.image}
                  className={data.class}
                  alt={data.class}
                ></img>
              </div>
              <div className="name">{data.name}</div>
              <div className="ingredient">{data.ingredient}</div>
              {/* 숫자 천 단위 콤마 */}
              <div className="price">
                {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </div>
              <div className="date">{data.date}</div>
            </div>
          </div>
        ))}
        <img
          src={index === 0 ? Arw_left : Arw_left_yellow}
          className="arw_left"
          alt="arw_left"
          onClick={() => (index === 0 ? "" : setIndex(index - 1))}
        ></img>
        <img
          src={index === itemsCount - 1 ? Arw_right : Arw_right_yellow}
          className="arw_right"
          alt="arw_right"
          onClick={() => (index === itemsCount - 1 ? "" : setIndex(index + 1))}
        ></img>
      </div>
      <Pay addSelected={selected} setSelected={setSelected} />
    </div>
  );
};

export default Items;
