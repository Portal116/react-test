import React, { useState, useEffect } from "react";
import "./Menu.css";
import Ico_promotion from "../img/ico_promotion.svg";
import Ico_morning from "../img/ico_morning.svg";
import Ico_sandwich from "../img/ico_sandwich.svg";
import Ico_salade from "../img/ico_salade.svg";
import Ico_wrap from "../img/ico_wrap.svg";
import Ico_side from "../img/ico_side.svg";
import img_bar_yellow from "../img/img_bar_yellow.svg";

const Menu = (props) => {
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    props.setItemsCount(menu_data.length);
  }, []);
  useEffect(() => {
    if (props.changedIndex == 6 && selected == 5) {
      document.getElementsByClassName("container_menu")[0].scrollLeft = 117;
    } else if (props.changedIndex == 0 && selected == 1) {
      document.getElementsByClassName("container_menu")[0].scrollLeft = 0;
    }
    setSelected(props.changedIndex);
  }, [props.changedIndex]);
  useEffect(() => {
    // document.getElementsByClassName("container_menu")[0].scrollLeft =
    //   menu_data.length / 2 <= selected ? 117 : 0;
    props.setIndex(selected);
  }, [selected]);
  const menu_data = [
    {
      image: Ico_promotion,
      class: "ico_promotion",
      name: "promotion",
      div_class: "div_promotion",
      span_class: "span_promotion",
      span_name: "프로모션",
      width: "98px",
    },
    {
      image: Ico_morning,
      class: "ico_morning",
      name: "morning",
      div_class: "div_morning",
      span_class: "span_morning",
      span_name: "아침메뉴",
      width: "98px",
    },
    {
      image: Ico_sandwich,
      class: "ico_sandwich",
      name: "sandwich",
      div_class: "div_sandwich",
      span_class: "span_sandwich",
      span_name: "샌드위치",
      width: "98px",
    },
    {
      image: Ico_salade,
      class: "ico_salade",
      name: "salade",
      div_class: "div_salade",
      span_class: "span_salade",
      span_name: "찹샐러드",
      width: "98px",
    },
    {
      image: Ico_wrap,
      class: "ico_wrap",
      name: "wrap",
      div_class: "div_wrap",
      span_class: "span_wrap",
      span_name: "랩/기타",
      width: "98px",
    },
    {
      image: Ico_side,
      class: "ico_side",
      name: "side",
      div_class: "div_side",
      span_class: "span_side",
      span_name: "사이드/음료",
      width: "128px",
    },
    {
      image: Ico_side,
      class: "ico_side",
      name: "side",
      div_class: "div_side2",
      span_class: "span_side",
      span_name: "사이드/음료",
      width: "128px",
    },
  ];

  // const imageClick = (e) => {
  //   console.log(e);
  // };
  return (
    <div className="container_menu">
      {menu_data.map((data, index) => (
        <div
          key={index}
          className={data.div_class}
          // onClick={() => imageClick(`${data.name}`)}
          onClick={() => setSelected(index)}
        >
          <div>
            <img src={data.image} className={data.class} alt={data.class}></img>
          </div>
          <span className={data.span_class}>{data.span_name}</span>
          <div className="yellow_bar_div">
            {selected === index && (
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
        </div>
      ))}
    </div>
  );
};

export default Menu;
