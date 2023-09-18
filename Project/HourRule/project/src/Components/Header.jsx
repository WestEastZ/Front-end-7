import React from "react";
import "../css/Header.css";

export default function Header() {
  return (
    <>
      <div className="header-title">
        <img
          className="header-title-frame"
          src={require("../img/Frame.png")}
          alt="1만 시간의 법칙"
        />
        <img
          className="header-title-clock"
          src={require("../img/시계.png")}
          alt="시계"
        />
      </div>
      <p className="header-quotes">
        "연습은 어제의 당신보다 당신을 더 낫게 만든다."
      </p>
      <div className="header-main">
        <img src={require("../img/last.png")} alt="" />
        <div className="header-main-content">
          <p>
            <strong className="header-main-content-strong">
              1만 시간의 법칙
            </strong>
            은
          </p>
          <p>어떤 분야의 전문가가 되기 위해서는</p>
          <p>최소한 1만 시간의 훈련이 필요하다는법칙이다.</p>
        </div>
        <img src={require("../img/first.png")} alt="" />
      </div>
    </>
  );
}
