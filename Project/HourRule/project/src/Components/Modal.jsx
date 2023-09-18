import React from "react";
import "../css/Modal.css";

export default function Modal({ setModalShow }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <p className="modal-title">화이팅!!♥♥♥</p>
        <p className="modal-titleSub">당신의 꿈을 응원합니다!</p>
        <img src={require("../img/Group.png")} alt="" />
        <button
          className="modal-exit"
          onClick={() => {
            setModalShow(false);
          }}
        >
          종료하고 진짜 훈련하러 가기
        </button>
      </div>
    </div>
  );
}
