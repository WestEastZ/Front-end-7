import React from "react";

export default function ImageItem({ imgData }) {
  return (
    <div>
      <img style={{ width: 400 }} src={imgData.download_url} alt="" />
    </div>
  );
}
