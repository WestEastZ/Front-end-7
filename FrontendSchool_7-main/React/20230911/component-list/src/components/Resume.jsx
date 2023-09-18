import React, { useState } from "react";

function Resume(props) {
  let [like, setLike] = useState("like");

  function clickLike() {
    if (like === "like") {
      setLike("");
    } else {
      setLike("like");
    }
    console.log(like);
  }

  return (
    <div style={{ border: "1px solid", width: "500px" }}>
      <h1>{props.nanme} 자기소개서</h1>
      <h1>{props.hello}</h1>
      <h2>취미 : {props.hobby}</h2>
      <h2>좋아하는 음식 : {props.food}</h2>
      <h2>
        좋아하는 색 : <span style={{ color: props.color }}>{props.color}</span>
      </h2>
      <button onClick={clickLike}>like</button>
      <span>{like}</span>
    </div>
  );
}

export default Resume;
