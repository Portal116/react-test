import React, { useEffect, useState } from "react";
import "./Pay.css";
import Ico_credit from "../img/ico_credit.svg";

const Pay = (props) => {
  const [selected, setSelected] = useState([]);
  const price_sum = selected.reduce(
    (total, currentItem) => (total = total + currentItem.price),
    0
  );
  const cancel_items = () => {
    setSelected([]);
  };
  useEffect(() => {
    if (props.addSelected !== "") {
      setSelected((selected) => selected.concat(props.addSelected));
      props.setSelected("");
    }
  }, [props.addSelected]);
  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const startPay = () => {
    alert("결제완료");
    setSelected([]);
  };
  return (
    <div className="container_pay">
      <div className="pay_price">
        <span className="cancel_all" onClick={cancel_items}>
          전체취소
        </span>
        <span className="order_amount">주문수량</span>
        <span className="order_amount_value">{selected.length}</span>
        <span className="order_price">주문금액</span>
        <span className="order_price_value">
          {price_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
      </div>
      <div className="pay_bottom">
        <div className="pay_selected"></div>
        <div className="pay_pay" onClick={selected.length > 0 ? startPay : ""}>
          <img src={Ico_credit} className="ico_credit" alt="ico_credit" />
          <div className="pay_pay_name">주문결제</div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
