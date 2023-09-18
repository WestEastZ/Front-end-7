import React, { useState } from "react";
import FeelBtn from "./FeelBtn";
import MyFeel from "./MyFeel";

function FeelUl() {
  const menus = [
    "좋아요! 😃",
    "정말 좋아요! 🤭",
    "최고에요! 😄",
    "미쳤어요!! 🤪",
  ];

  const [selectedFeel, setSelectedFeel] = useState("");

  function handleFeelClick(e) {
    setSelectedFeel(e.target.textContent);
  }

  return (
    <div>
      <ul>
        <FeelBtn menus={menus} onFeelClick={handleFeelClick} />
      </ul>
      <MyFeel selectedFeel={selectedFeel} />
    </div>
  );
}

export default FeelUl;
