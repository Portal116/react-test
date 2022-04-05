import React, { useEffect, useState } from "react";
import "./Pay.scss";
import Ico_credit from "../img/ico_credit.svg";
import Ico_plus from "../img/ico_plus.svg";
import Ico_cancel from "../img/ico_cancel.svg";

const Pay = (props) => {
  const [selected, setSelected] = useState([]);
  const amount_sum = selected.reduce(
    (total, currentItem) => (total = total + currentItem.amount),
    0
  );
  const price_sum = selected.reduce(
    (total, currentItem) =>
      (total = total + currentItem.price * currentItem.amount),
    0
  );
  const cancel_items = () => {
    setSelected([]);
  };
  useEffect(() => {
    if (props.addSelected !== "") {
      const selectedTemp = selected;
      for (var i = 0; i < selectedTemp.length; i++) {
        if (props.addSelected.name === selectedTemp[i].name) {
          selectedTemp[i].amount += 1;
          setSelected(() => selectedTemp);
          props.setSelected("");
          return;
        }
      }
      const addTemp = props.addSelected;
      addTemp.amount = 1;
      setSelected((selected) => selected.concat(addTemp));
      props.setSelected("");
    }
  }, [props.addSelected]);

  const addAmount = (index) => {
    const selectedTemp = selected;
    selectedTemp[index].amount += 1;
    setSelected(() => selectedTemp);
  };

  const cancelSelected = (index) => {
    setSelected(selected.filter((selected) => selected.index !== index));
  };
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
        <span className="order_amount_value">{amount_sum}</span>
        <span className="order_price">주문금액</span>
        <span className="order_price_value">
          {price_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
      </div>
      <div className="pay_bottom">
        <div className="pay_selected">
          {selected.map((data, index) => (
            <div key={index} className="datas">
              <div className="content">
                <span className="selected_name">{data.name}</span>
                <span className="selected_amount">{data.amount}</span>
                <span className="selected_price">
                  {(data.amount * data.price)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </div>
              <img
                src={Ico_plus}
                className="ico_plus"
                alt="ico_plus"
                onClick={addAmount(index)}
              />
              <img
                src={Ico_cancel}
                className="ico_cancel"
                alt="ico_cancel"
                onClick={cancelSelected(index)}
              />
            </div>
          ))}
        </div>
        <div className="pay_pay" onClick={selected.length > 0 ? startPay : ""}>
          <img src={Ico_credit} className="ico_credit" alt="ico_credit" />
          <div className="pay_pay_name">주문결제</div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
