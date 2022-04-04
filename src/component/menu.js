import React from "react";
import "./menu.css";
import ico_promotion from "../img/ico_promotion.svg";
import ico_morning from "../img/ico_morning.svg";
import ico_sandwich from "../img/ico_sandwich.svg";
import ico_salade from "../img/ico_salade.svg";
import ico_wrap from "../img/ico_wrap.svg";
import ico_side from "../img/ico_side.svg";

const menu = () => {
  const imageClick = (e) => {
    console.log("Click" + e);
  };
  return (
    <div class="">
      <div>
        <img
          src={ico_promotion}
          class="ico_promotion"
          alt="ico_promotion"
          onClick={() => imageClick("promotion")}
        ></img>
        <img
          src={ico_morning}
          class="ico_morning"
          alt="ico_morning"
          onClick={() => imageClick("morning")}
        ></img>
        <img
          src={ico_sandwich}
          class="ico_sandwich"
          alt="ico_sandwich"
          onClick={() => imageClick("sandwich")}
        ></img>
        <img
          src={ico_salade}
          class="ico_salade"
          alt="ico_salade"
          onClick={() => imageClick("salade")}
        ></img>
        <img
          src={ico_wrap}
          class="ico_wrap"
          alt="ico_wrap"
          onClick={() => imageClick("wrap")}
        ></img>
        <img
          src={ico_side}
          class="ico_side"
          alt="ico_side"
          onClick={() => imageClick("side")}
        ></img>
      </div>
      <div>
        <span class="span_promotion" onClick={() => imageClick("promotion")}>
          프로모션
        </span>
        <span class="span_morning" onClick={() => imageClick("morning")}>
          아침메뉴
        </span>
        <span class="span_sandwich" onClick={() => imageClick("sandwich")}>
          샌드위치
        </span>
        <span class="span_salade" onClick={() => imageClick("salade")}>
          찹샐러드
        </span>
        <span class="span_wrap" onClick={() => imageClick("wrap")}>
          랩/기타
        </span>
        <span class="span_side" onClick={() => imageClick("side")}>
          사이드/음료
        </span>
      </div>
    </div>
  );
};

export default menu;
