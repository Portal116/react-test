import React from "react";
import Img_top_banner from "../img/img_top_banner.png";
import Ico_allergy from "../img/ico_allergy.svg";
import Ico_lan_eng from "../img/ico_lan_eng.png";
import Ico_gohome from "../img/ico_gohome.svg";
import "./banner.css";

const banner = () => {
  const banner_data = [
    {
      image: Ico_allergy,
      class: "ico_allergy",
      name: "allergy",
    },
    {
      image: Ico_lan_eng,
      class: "ico_lan_eng",
      name: "ENG",
    },
    {
      image: Ico_gohome,
      class: "ico_gohome",
      name: "gohome",
    },
  ];
  const imageClick = (e) => {
    console.log("Click " + e);
  };
  return (
    <div className="container_banner">
      <img
        src={Img_top_banner}
        alt="img_top_banner"
        onClick={() => imageClick("banner")}
      />
      <div>
        {banner_data.map((data, index) => (
          <img
            key={index}
            src={data.image}
            class={data.class}
            alt={data.class}
            onClick={() => imageClick(`${data.name}image`)}
          />
        ))}
      </div>
    </div>
  );
};

export default banner;
