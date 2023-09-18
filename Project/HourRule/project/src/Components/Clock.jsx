import React from "react";
import "../css/Clock.css";

export default function Clock() {
  return (
    <div>
      <img className="clock" src={require("../img/시계.png")} alt="" />
    </div>
  );
}
