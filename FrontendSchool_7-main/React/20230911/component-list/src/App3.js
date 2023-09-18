import React, { useState } from "react";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Modal from "./components/Modal";

export default function App3() {
  const user = {
    idUser: "동주",
    pwUser: 1234,
  };

  // 로그인 상태를 판단하는 state
  const [login, setLogin] = useState(false);
  const [modalShow, setModalShow] = useState(true);

  return (
    <>
      {login ? (
        <Homepage setLogin={setLogin} />
      ) : (
        <Login
          infoUser={user}
          setLogin={setLogin}
          setModalShow={setModalShow}
        />
      )}
      {modalShow && <Modal infoUser={user} setModalShow={setModalShow} />}
    </>
  );
}
