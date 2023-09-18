import React from "react";
import "../css/Result.css";

export default function Result({ task, needTime, setModalShow }) {
  const modal = () => {
    setModalShow(true);
  };
  return task ? (
    <div className="result-warpper">
      <p className="result-task">
        당신은 <strong>{task}</strong> 전문가가 되기 위해서
      </p>
      <p className="result-needtime">
        대략 <strong>{parseInt(10000 / needTime)}</strong> 일 이상 훈련하셔야
        합니다.
      </p>
      <div className="result-btn">
        <button className="result-btn-modal" onClick={modal}>
          훈련하러 가기 GOGO
        </button>
        <button className="result-btn-share">공유하기</button>
      </div>
    </div>
  ) : (
    <></>
  );
}
