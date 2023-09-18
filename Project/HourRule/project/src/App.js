import React, { useEffect, useState } from "react";
import Header from "./Components/Header.jsx";
import Main from "./Components/Main.jsx";
import Result from "./Components/Result.jsx";
import Modal from "./Components/Modal.jsx";
import Clock from "./Components/Clock.jsx";
import "./css/reset.css";
import "./css/App.css";

function App() {
  const [task, setTask] = useState("");
  const [needTime, setNeedTime] = useState("");
  const [resultShow, setResultShow] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    return () => {
      setResultShow(false);
      setTimeout(() => {
        setResultShow(true);
      }, 2000);
    };
  }, [task, needTime]);

  return (
    <div className="page">
      <Header />
      <Main
        setTask={setTask}
        setNeedTime={setNeedTime}
        setResultShow={setResultShow}
      />
      {resultShow ? (
        <Result task={task} needTime={needTime} setModalShow={setModalShow} />
      ) : (
        <Clock />
      )}

      {modalShow && <Modal setModalShow={setModalShow} />}

      <img className="weniv" src={require("./img/위니브.png")} alt="" />
      <p className="weniv-text">
        ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.
        수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.
      </p>
    </div>
  );
}
export default App;
