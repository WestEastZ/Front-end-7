import React from "react";
import "../css/Main.css";

export default function Main({ setTask, setNeedTime }) {
  const handleSetResultDisplay = (e) => {
    e.preventDefault();
    if (!e.target.task.value || !e.target.needTime.value) {
      alert("입력하지 않았어요!");
    } else {
      setTask(e.target.task.value);
      setNeedTime(e.target.needTime.value);
    }
  };

  const maxNumber = 24;

  return (
    <form className="main-wrapper" onSubmit={handleSetResultDisplay}>
      <div className="main-wrapper-task-input">
        <p>나는</p>
        <input name="task" type="text" placeholder="예)프로그래밍" />
        <p>전문가가 될 것이다.</p>
      </div>
      <div className="main-wrapper-needtime-input">
        <p>그래서 앞으로 매일 하루에</p>
        <input
          name="needTime"
          type="number"
          placeholder="예)5시간"
          max={maxNumber}
        />
        <p>시간씩 훈련할 것이다.</p>
      </div>
      <div className="main-wrapper-btn-box">
        <button className="main-wrapper-btn" type="submit">
          나는 며칠 동안 훈련을 해야 1만시간이 될까?
        </button>
        <img src={require("../img/finger.png")} alt="" />
      </div>
    </form>
  );
}
