import React from "react";
import "./MenuListItem.css";

export default function MenuListItem(props) {
  const onItemClick = () => {
    props.setCurrentMood(props.mood);
  };

  return (
    <div>
      <li>
        <button onClick={onItemClick} className="btn-item">
          기분이 :{props.mood}
        </button>
      </li>
    </div>
  );
}
