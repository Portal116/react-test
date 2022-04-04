import React from "react";
import "./menu.css";
import Ico_promotion from "../img/ico_promotion.svg";
import Ico_morning from "../img/ico_morning.svg";
import Ico_sandwich from "../img/ico_sandwich.svg";
import Ico_salade from "../img/ico_salade.svg";
import Ico_wrap from "../img/ico_wrap.svg";
import Ico_side from "../img/ico_side.svg";
import img_bar_yellow from "../img/img_bar_yellow.svg";

const menu = () => {
  const menu_data = [
    {
      image: Ico_promotion,
      class: "ico_promotion",
      name: "promotion",
      div_class: "div_promotion",
      span_class: "span_promotion",
      span_name: "프로모션",
      width: "98px",
      selected: true,
    },
    {
      image: Ico_morning,
      class: "ico_morning",
      name: "morning",
      div_class: "div_morning",
      span_class: "span_morning",
      span_name: "아침메뉴",
      width: "98px",
      selected: false,
    },
    {
      image: Ico_sandwich,
      class: "ico_sandwich",
      name: "sandwich",
      div_class: "div_sandwich",
      span_class: "span_sandwich",
      span_name: "샌드위치",
      width: "98px",
      selected: false,
    },
    {
      image: Ico_salade,
      class: "ico_salade",
      name: "salade",
      div_class: "div_salade",
      span_class: "span_salade",
      span_name: "찹샐러드",
      width: "98px",
      selected: false,
    },
    {
      image: Ico_wrap,
      class: "ico_wrap",
      name: "wrap",
      div_class: "div_wrap",
      span_class: "span_wrap",
      span_name: "랩/기타",
      width: "98px",
      selected: false,
    },
    {
      image: Ico_side,
      class: "ico_side",
      name: "side",
      div_class: "div_side",
      span_class: "span_side",
      span_name: "사이드/음료",
      width: "128px",
      selected: false,
    },
    {
      image: Ico_side,
      class: "ico_side",
      name: "side",
      div_class: "div_side",
      span_class: "span_side",
      span_name: "사이드/음료",
      width: "128px",
      selected: false,
    },
  ];

  const imageClick = (e) => {
    console.log("Click " + e);
  };
  return (
    <div>
      <div className="container_menu">
        {menu_data.map((data, index) => (
          <div
            key={index}
            className={data.div_class}
            onClick={() => imageClick(`${data.name}`)}
          >
            <div>
              <img src={data.image} class={data.class} alt={data.class}></img>
            </div>
            <span class={data.span_class}>{data.span_name}</span>
            {data.selected && (
              <img
                style={{
                  width: data.width,
                  height: "12px",
                }}
                id="img_bar_yellow"
                src={img_bar_yellow}
                alt="img_bar_yellow"
              ></img>
            )}
          </div>
        ))}
      </div>
      <div class="line_divide"></div>
    </div>
  );
};

export default menu;
