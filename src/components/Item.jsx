import React from "react";
import "../list.css";
import assetsObject from "../assets";
const Item = ({ image, title, paragraph }) => {
  return (
    <div className="List-Box" style={{ width: "350px" }}>
      <div className="d-flex justify-content-between">
        <img
          style={{
            border: "1px solid #CFCFCF",
            borderRadius: "50%",
            padding: "8px",
          }}
          src={assetsObject[image]}
          width={60}
          height={60}
          alt=""
        />
        <div id="list" style={{ marginLeft: "20px" }}>
          <h6>{title}</h6>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
