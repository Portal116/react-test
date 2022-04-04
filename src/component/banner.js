import React from "react";
import img_top_banner from "../img/img_top_banner.png";
import ico_allergy from "../img/ico_allergy.svg";
import ico_lan_eng from "../img/ico_lan_eng.png";
import ico_gohome from "../img/ico_gohome.svg";
import "./banner.css";

const banner = () => {
  const imageClick = (e) => {
    console.log("Click" + e);
  };
  return (
    <div className="container">
      <img
        src={img_top_banner}
        alt="img_top_banner"
        onClick={() => imageClick("banner")}
      />
      <div class="ico">
        <img
          src={ico_allergy}
          class="ico_allergy"
          alt="ico_allergy"
          onClick={() => imageClick("allergy")}
        />
        <img
          src={ico_lan_eng}
          srcset="img/ico-allergy@2x.png 2x,
             img/ico-allergy@3x.png 3x"
          class="ico_lan_eng"
          alt="ico_lan_eng"
          onClick={() => imageClick("ENG")}
        />
        <img
          src={ico_gohome}
          class="ico_gohome"
          alt="ico_gohome"
          onClick={() => imageClick("home")}
        />
      </div>
    </div>
  );
};

export default banner;
